import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Pool } from "pg";

export const runtime = "nodejs";

let dbPool;
let ensureTablePromise;

class ConfigError extends Error {
  constructor(message) {
    super(message);
    this.name = "ConfigError";
  }
}

function getDatabasePool() {
  const connectionString = process.env.SUPABASE_DB_URL || process.env.DATABASE_URL;
  if (!connectionString) {
    throw new ConfigError(
      "Lead database is not configured. Add SUPABASE_DB_URL in .env.local and restart the server.",
    );
  }

  if (!dbPool) {
    dbPool = new Pool({
      connectionString,
      ssl: { rejectUnauthorized: false },
    });
  }

  return dbPool;
}

async function ensureContactTable(pool) {
  if (!ensureTablePromise) {
    ensureTablePromise = pool
      .query(
        `
          SELECT to_regclass('public.contact_requests') AS table_name;
        `,
      )
      .then(async (result) => {
        const tableExists = Boolean(result.rows?.[0]?.table_name);

        if (!tableExists) {
          await pool.query(`
            CREATE TABLE contact_requests (
              id BIGSERIAL PRIMARY KEY,
              name TEXT NOT NULL,
              email TEXT NOT NULL,
              phone TEXT NOT NULL,
              business_type TEXT NOT NULL,
              monthly_leads TEXT NOT NULL,
              challenge TEXT,
              source TEXT NOT NULL DEFAULT 'website_contact_form',
              lead_status TEXT NOT NULL DEFAULT 'new',
              page_path TEXT,
              referrer TEXT,
              ip_address TEXT,
              user_agent TEXT,
              notes TEXT,
              metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
              contacted_at TIMESTAMPTZ,
              created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
              updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
            );
          `);
        }

        await pool.query(`
          ALTER TABLE contact_requests
          ADD COLUMN IF NOT EXISTS source TEXT NOT NULL DEFAULT 'website_contact_form',
          ADD COLUMN IF NOT EXISTS lead_status TEXT NOT NULL DEFAULT 'new',
          ADD COLUMN IF NOT EXISTS page_path TEXT,
          ADD COLUMN IF NOT EXISTS referrer TEXT,
          ADD COLUMN IF NOT EXISTS ip_address TEXT,
          ADD COLUMN IF NOT EXISTS user_agent TEXT,
          ADD COLUMN IF NOT EXISTS notes TEXT,
          ADD COLUMN IF NOT EXISTS metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
          ADD COLUMN IF NOT EXISTS contacted_at TIMESTAMPTZ,
          ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW();
        `);

        await pool.query(`
          CREATE INDEX IF NOT EXISTS idx_contact_requests_created_at
          ON contact_requests (created_at DESC);
        `);

        await pool.query(`
          CREATE INDEX IF NOT EXISTS idx_contact_requests_lead_status
          ON contact_requests (lead_status);
        `);

        await pool.query(`
          CREATE INDEX IF NOT EXISTS idx_contact_requests_email
          ON contact_requests (email);
        `);
      })
      .catch((error) => {
        ensureTablePromise = null;
        throw error;
      });
  }

  return ensureTablePromise;
}

function createTransporter() {
  const smtpEmail = process.env.SMTP_EMAIL;
  const smtpPassword = process.env.SMTP_PASSWORD;

  if (!smtpEmail || !smtpPassword) {
    return null;
  }

  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: smtpEmail,
      pass: smtpPassword,
    },
  });
}

function normalizeField(value) {
  return String(value || "").trim();
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  return /^[0-9+\-\s()]{7,20}$/.test(phone);
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildMailContent({ name, email, phone, businessType, monthlyLeads, challenge }) {
  const submittedAt = new Date().toISOString();
  const safeChallenge = challenge || "Not provided";

  return {
    subject: `New Access Request - ${name}`,
    text: [
      "New access request received:",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Business Type: ${businessType}`,
      `Monthly Leads: ${monthlyLeads}`,
      `Challenge: ${safeChallenge}`,
      `Submitted At: ${submittedAt}`,
    ].join("\n"),
    html: `
      <h2>New Access Request</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Business Type:</strong> ${escapeHtml(businessType)}</p>
      <p><strong>Monthly Leads:</strong> ${escapeHtml(monthlyLeads)}</p>
      <p><strong>Challenge:</strong> ${escapeHtml(safeChallenge)}</p>
      <p><strong>Submitted At:</strong> ${submittedAt}</p>
    `,
  };
}

function getLeadMetadata(request, payload) {
  const forwardedFor = normalizeField(request.headers.get("x-forwarded-for"));
  const realIp = normalizeField(request.headers.get("x-real-ip"));
  const ipAddress = (forwardedFor.split(",")[0] || realIp || "").trim();
  const referrer = normalizeField(request.headers.get("referer"));
  const userAgent = normalizeField(request.headers.get("user-agent"));
  const origin = normalizeField(request.headers.get("origin"));
  const acceptLanguage = normalizeField(request.headers.get("accept-language"));

  return {
    source: "website_contact_form",
    leadStatus: "new",
    pagePath: payload.pagePath || "/contact",
    referrer: referrer || null,
    ipAddress: ipAddress || null,
    userAgent: userAgent || null,
    metadata: {
      origin: origin || null,
      acceptLanguage: acceptLanguage || null,
    },
  };
}

async function saveContactRequest(payload, leadMeta) {
  const pool = getDatabasePool();
  await ensureContactTable(pool);

  await pool.query(
    `
      INSERT INTO contact_requests (
        name,
        email,
        phone,
        business_type,
        monthly_leads,
        challenge,
        source,
        lead_status,
        page_path,
        referrer,
        ip_address,
        user_agent,
        metadata
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13);
    `,
    [
      payload.name,
      payload.email,
      payload.phone,
      payload.businessType,
      payload.monthlyLeads,
      payload.challenge || null,
      leadMeta.source,
      leadMeta.leadStatus,
      leadMeta.pagePath,
      leadMeta.referrer,
      leadMeta.ipAddress,
      leadMeta.userAgent,
      JSON.stringify(leadMeta.metadata),
    ],
  );
}

export async function POST(request) {
  try {
    const body = await request.json().catch(() => null);
    const payload = {
      name: normalizeField(body?.name),
      email: normalizeField(body?.email).toLowerCase(),
      phone: normalizeField(body?.phone),
      businessType: normalizeField(body?.businessType),
      monthlyLeads: normalizeField(body?.monthlyLeads),
      challenge: normalizeField(body?.challenge),
      pagePath: normalizeField(body?.pagePath),
    };

    if (
      !payload.name ||
      !payload.email ||
      !payload.phone ||
      !payload.businessType ||
      !payload.monthlyLeads
    ) {
      return NextResponse.json(
        { success: false, message: "Missing required fields (name, email, phone, and form details)." },
        { status: 400 },
      );
    }

    if (!isValidEmail(payload.email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (!isValidPhone(payload.phone)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid phone number." },
        { status: 400 },
      );
    }

    const leadMeta = getLeadMetadata(request, payload);
    await saveContactRequest(payload, leadMeta);

    const transporter = createTransporter();
    const smtpEmail = process.env.SMTP_EMAIL;
    if (transporter && smtpEmail) {
      const mailContent = buildMailContent(payload);

      try {
        await transporter.sendMail({
          from: `"AlgoAura Website" <${smtpEmail}>`,
          to: smtpEmail,
          replyTo: payload.email,
          subject: mailContent.subject,
          text: mailContent.text,
          html: mailContent.html,
        });
      } catch (mailError) {
        console.error("SMTP send failed:", mailError);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Access request received.",
      },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof ConfigError) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 503 },
      );
    }

    console.error("Contact API error:", error?.message || error);
    return NextResponse.json(
      { success: false, message: "Unable to save your request right now." },
      { status: 500 },
    );
  }
}

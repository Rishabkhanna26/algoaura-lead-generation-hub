"use client";

import { useMemo, useState } from "react";
import { Database, ExternalLink, Layers3, ServerCog, Sparkles, Workflow } from "lucide-react";

const filterOptions = [
  { key: "all", label: "All Projects" },
  { key: "product", label: "Product" },
  { key: "nextjs", label: "Next.js" },
  { key: "crm-wordpress", label: "CRM + WordPress" },
];

const projects = [
  {
    name: "Client Handler",
    productCode: "Mex-End",
    category: "product",
    stack: "Lead Management + WhatsApp Automation",
    liveUrl: "https://client-handler.vercel.app",
    summary:
      "Business lead management and WhatsApp automation platform for service and product companies, with multi-admin sessions, flow resumption, and full message logging.",
    update: "Working product",
    updatedAt: "Active",
    featured: true,
    highlights: [
      "Multi-admin WhatsApp sessions with separate QR/session per admin",
      "Lead capture flows for services/products in Hinglish, Hindi, and English",
      "Custom product and service catalog management for any business niche",
      "Complete incoming and outgoing message logging in Postgres",
      "Flow resume after inactivity with partial lead save handling",
      "Admin-friendly pipeline management for inquiry-to-conversion tracking",
    ],
    tech: [
      "Frontend: Next.js + React + TailwindCSS",
      "Backend: Express + Socket.IO + whatsapp-web.js",
      "Database: Postgres (Supabase)",
      "Deployment: Vercel (frontend) + Node host (backend)",
    ],
  },
  {
    name: "AlgoAura Lead Generation Hub",
    category: "nextjs",
    stack: "Next.js",
    liveUrl: "https://algoaura.vercel.app",
    summary:
      "Lead generation and automation website with conversion-focused architecture and technical SEO implementation.",
    update: "SEO updated",
    updatedAt: "26m ago",
  },
  {
    name: "CA Kanika",
    category: "nextjs",
    stack: "Next.js",
    liveUrl: "https://ca-kanika.vercel.app",
    summary:
      "Professional services website focused on trust-building, clean information hierarchy, and consultation flow.",
    update: "Fixes",
    updatedAt: "Dec 4, 2025",
  },
  {
    name: "Portfolio Running",
    category: "nextjs",
    stack: "Next.js",
    liveUrl: "https://rishabkhanna26.vercel.app",
    summary:
      "Personal portfolio system with service clarity, project discovery flow, and performance-oriented page structure.",
    update: "Added Google Analytics",
    updatedAt: "2d ago",
  },
  {
    name: "Araba Cafe",
    category: "nextjs",
    stack: "Next.js",
    liveUrl: "https://araba-cafe.vercel.app",
    summary:
      "Modern brand website built for storytelling, product visibility, and local online discovery for cafe audiences.",
    update: "Added hide console",
    updatedAt: "Feb 15",
  },
  {
    name: "Pahadam Ascent",
    category: "nextjs",
    stack: "Next.js",
    liveUrl: "https://pahadam.vercel.app",
    summary:
      "Adventure-oriented web platform with improved hero flow, responsive navigation, and stronger first-screen clarity.",
    update: "Fixed hero, navbar, logo size",
    updatedAt: "Feb 17",
  },
  {
    name: "Digital Pulse",
    category: "nextjs",
    stack: "Next.js",
    liveUrl: "https://grow-media-jal.vercel.app",
    summary:
      "Growth marketing website with high-impact sections, campaign-focused messaging, and clean CTA pathways.",
    update: "Live project rollout",
    updatedAt: "Recent",
  },
  {
    name: "Indus Valley Builders",
    category: "crm-wordpress",
    stack: "CRM + WordPress",
    liveUrl: "https://indusvalleybuilders.co.uk/",
    summary:
      "Business website and CRM-enabled lead capture flow designed for project inquiries and response consistency.",
    update: "Production active",
    updatedAt: "Live",
  },
  {
    name: "Asvint Trading",
    category: "crm-wordpress",
    stack: "CRM + WordPress",
    liveUrl: "https://asvinttrading.com/",
    summary:
      "Corporate presence site with integrated contact handling pipeline and structured conversion touchpoints.",
    update: "Production active",
    updatedAt: "Live",
  },
  {
    name: "Right IAS",
    category: "crm-wordpress",
    stack: "CRM + WordPress",
    liveUrl: "https://rightias.com/",
    summary:
      "Education-focused website with lead intake and CRM-ready consultation journey for student inquiries.",
    update: "Production active",
    updatedAt: "Live",
  },
];

function getCategoryLabel(value) {
  if (value === "product") return "Product";
  if (value === "nextjs") return "Next.js";
  return "CRM + WordPress";
}

export default function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const featuredProject = projects.find((project) => project.featured);
  const listedProjects = filteredProjects.filter((project) => !project.featured);

  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-narrow">
        <div className="text-center mb-12 animate-fade-up">
          <span className="terminal-text text-primary text-sm font-semibold uppercase tracking-wider inline-flex items-center gap-2">
            <Layers3 size={16} /> Project Command Center
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 text-balance">
            Detailed <span className="gradient-text">Project Showcase</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A complete view of Next.js builds, CRM + WordPress implementations, and our first
            automation product.
          </p>
        </div>

        {featuredProject ? (
          <article className="system-card p-7 md:p-8 mb-8 relative overflow-hidden border-primary/30 shadow-[0_0_40px_hsl(25_100%_50%_/_0.14)]">
            <div className="absolute -top-10 -right-8 w-52 h-52 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
            <div className="absolute top-0 right-0 m-4 text-[10px] terminal-text bg-primary/15 text-primary px-2 py-1 rounded-full uppercase tracking-wide">
              Featured Product
            </div>
            <div className="grid lg:grid-cols-[1.25fr_1fr] gap-6 relative z-10">
              <div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold inline-flex items-center gap-2">
                  <Workflow size={22} className="text-primary" /> {featuredProject.name}
                </h3>
                <p className="terminal-text text-xs text-primary/80 mt-1">
                  Product Code: {featuredProject.productCode}
                </p>
                <p className="text-muted-foreground mt-3">{featuredProject.summary}</p>
                <p className="terminal-text text-xs text-primary mt-3">
                  {featuredProject.stack} | {featuredProject.update} | {featuredProject.updatedAt}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {featuredProject.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3 mt-5">
                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gradient-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm"
                  >
                    <ExternalLink size={15} /> View Live Product
                  </a>
                </div>
              </div>
              <div className="glass-card p-5 rounded-xl">
                <h4 className="font-heading font-semibold text-lg inline-flex items-center gap-2">
                  <Sparkles size={16} className="text-primary" /> Product Positioning
                </h4>
                <p className="text-muted-foreground text-sm mt-3">
                  Client Handler is built as an automation-first operating layer for any
                  lead-focused business, helping teams manage products/services and run WhatsApp as
                  a high-speed communication channel.
                </p>
                <div className="mt-4 space-y-3">
                  <div>
                    <p className="terminal-text text-[10px] uppercase tracking-wide text-primary inline-flex items-center gap-1.5">
                      <ServerCog size={12} /> Tech Stack
                    </p>
                    <ul className="mt-2 space-y-1.5 text-muted-foreground text-xs">
                      {featuredProject.tech.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="terminal-text text-[10px] uppercase tracking-wide text-primary inline-flex items-center gap-1.5">
                      <Database size={12} /> Database and Logging
                    </p>
                    <p className="text-muted-foreground text-xs mt-1">
                      Every incoming and outgoing message is recorded once admin session is active.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ) : null}

        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {filterOptions.map((option) => (
            <button
              key={option.key}
              type="button"
              onClick={() => setActiveFilter(option.key)}
              className={`px-4 py-2 rounded-full text-xs terminal-text uppercase tracking-wide transition-colors ${
                activeFilter === option.key
                  ? "bg-primary text-primary-foreground"
                  : "glass-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {listedProjects.map((project, index) => (
            <article
              key={`${project.name}-${project.liveUrl}`}
              className="system-card p-6 animate-fade-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="terminal-text text-[10px] uppercase tracking-wide text-primary">
                  {project.stack}
                </span>
                <span className="text-[10px] terminal-text uppercase tracking-wide text-muted-foreground">
                  {getCategoryLabel(project.category)}
                </span>
              </div>
              <h3 className="text-xl font-heading font-bold">{project.name}</h3>
              <p className="text-muted-foreground mt-2 text-sm">{project.summary}</p>

              <p className="terminal-text text-[10px] text-muted-foreground mt-4">
                {project.update} | {project.updatedAt}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs hover:border-primary/30 transition-colors"
                >
                  <ExternalLink size={13} /> Live
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

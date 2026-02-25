import Footer from "../../components/Footer";
import FaqAccordion from "../../components/FaqAccordion";
import IntegrationMatrix from "../../components/IntegrationMatrix";
import Navbar from "../../components/Navbar";
import Services from "../../components/Services";
import VisualEffects from "../../components/VisualEffects";
import { buildPageMetadata, buildWebPageSchema } from "../../lib/seo";
import { BadgeCheck } from "lucide-react";
import Link from "next/link";

const servicesTitle = "AI-Powered WhatsApp Automation and Web Development Services";
const servicesDescription =
  "Explore WordPress and Next.js website development, CRM integration, AI-powered WhatsApp automation, and booking funnel setup built to generate qualified leads.";
const servicesKeywords = [
  "website development service",
  "crm setup and integration",
  "whatsapp automation service",
  "ai powered whatsapp automation services",
  "ai automation agency for businesses",
  "wordpress website development services",
  "best wordpress developer in punjab",
  "best wordpress developer in india",
  "wordpress and nextjs development agency",
  "crm and whatsapp automation india",
  "booking funnel setup",
  "lead automation services",
  "business growth systems",
];

export const metadata = buildPageMetadata({
  title: servicesTitle,
  description: servicesDescription,
  pathname: "/services",
  keywords: servicesKeywords,
});

const servicesSchema = buildWebPageSchema({
  title: servicesTitle,
  description: servicesDescription,
  pathname: "/services",
  keywords: servicesKeywords,
});

export default function ServicesPage() {
  const websitePoints = [
    "Built with Next.js for fast loading and strong performance.",
    "SEO-friendly structure with clean semantic markup.",
    "Conversion-focused sections designed for lead capture.",
  ];

  const automationPoints = [
    "Zoho CRM setup with organized lead pipelines.",
    "WhatsApp automation for instant follow-ups and reminders.",
    "Calendly integration for frictionless booking.",
    "Lead routing and follow-up systems connected end-to-end.",
  ];

  const serviceFaqItems = [
    {
      question: "Which businesses are the best fit for these services?",
      answer:
        "Startups, local businesses, coaches, service brands, and growing teams that want better lead flow and faster follow-up.",
    },
    {
      question: "Do I need to migrate everything to one new tool?",
      answer:
        "Not always. We can integrate your existing stack and only replace parts that are slowing growth or creating lead loss.",
    },
    {
      question: "Can we start with one module and expand later?",
      answer:
        "Yes. Many clients start with website + CRM basics and then add automation, booking, and optimization in phases.",
    },
    {
      question: "How do you measure progress after launch?",
      answer:
        "We track lead source quality, response time, booking rates, and conversion movement to guide the next optimization cycle.",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <VisualEffects />
      <Navbar />
      <main className="pt-32 md:pt-36">
        <h1 className="sr-only">AlgoAura Services</h1>

        <section className="section-padding">
          <div className="container-narrow">
            <div className="text-center mb-12 animate-fade-up">
              <span className="terminal-text text-primary text-sm font-semibold uppercase tracking-wider">
                {"// Overview"}
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3">
                Websites + <span className="gradient-text">Automation Systems</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                We build complete growth systems that connect your website, CRM, WhatsApp, and
                booking flow into one predictable lead pipeline.
              </p>
            </div>
          </div>
        </section>

        <Services />

        <section className="section-padding">
          <div className="container-narrow">
            <div className="text-center mb-10 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Detailed Service <span className="gradient-text">Guides</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <article className="system-card p-7 md:p-8">
                <h3 className="text-2xl font-heading font-bold">Website Development Guide</h3>
                <p className="text-muted-foreground mt-3">
                  Learn our full approach to architecture, speed optimization, conversion sections,
                  and SEO-friendly development standards.
                </p>
                <Link
                  href="/website-development"
                  className="inline-flex mt-5 glass-card px-5 py-2.5 rounded-lg text-sm hover:border-primary/30 transition-colors"
                >
                  Explore Website Development
                </Link>
              </article>
              <article className="system-card p-7 md:p-8">
                <h3 className="text-2xl font-heading font-bold">CRM and WhatsApp Automation Guide</h3>
                <p className="text-muted-foreground mt-3">
                  See how we build CRM pipelines, lead routing, automated follow-ups, and booking
                  workflows that reduce manual effort.
                </p>
                <Link
                  href="/crm-whatsapp-automation"
                  className="inline-flex mt-5 glass-card px-5 py-2.5 rounded-lg text-sm hover:border-primary/30 transition-colors"
                >
                  Explore CRM and Automation
                </Link>
              </article>
            </div>
          </div>
        </section>

        <section className="section-padding bg-secondary/20">
          <div className="container-narrow grid lg:grid-cols-2 gap-6">
            <div className="system-card p-7 md:p-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-5">
                Website Development
              </h2>
              <div className="space-y-3">
                {websitePoints.map((point) => (
                  <div key={point} className="flex items-start gap-2.5">
                    <BadgeCheck size={18} className="text-primary mt-0.5" />
                    <p className="text-muted-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="system-card p-7 md:p-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-5">CRM and Automation</h2>
              <div className="space-y-3">
                {automationPoints.map((point) => (
                  <div key={point} className="flex items-start gap-2.5">
                    <BadgeCheck size={18} className="text-primary mt-0.5" />
                    <p className="text-muted-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-narrow">
            <div className="system-card p-8 md:p-10 text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Complete <span className="gradient-text">Growth System</span>
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Your website captures interest, your CRM organizes every lead, WhatsApp and email
                automations follow up instantly, and Calendly books calls automatically. Everything
                stays connected so your team spends less time on manual tasks and more time closing
                business.
              </p>
            </div>
          </div>
        </section>
        <IntegrationMatrix />
        <FaqAccordion
          title="Service Questions and Answers"
          subtitle="Everything clients ask before selecting a website and automation execution partner."
          items={serviceFaqItems}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
      </main>
      <Footer />
    </div>
  );
}

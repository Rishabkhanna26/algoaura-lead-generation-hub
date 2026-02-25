import { BadgeCheck, CircleHelp, PhoneCall } from "lucide-react";
import ContactForm from "../../components/ContactForm";
import Navbar from "../../components/Navbar";
import VisualEffects from "../../components/VisualEffects";
import { buildPageMetadata, buildWebPageSchema } from "../../lib/seo";
import WhatsAppLogo from "../../components/WhatsAppLogo";

const growthSystemTitle = "Growth System Landing Page for Business Automation";
const growthSystemDescription =
  "Book a free consultation to get a complete growth system: website, CRM setup, WhatsApp automation, Calendly booking, and lead tracking.";
const growthSystemKeywords = [
  "growth system",
  "business automation funnel",
  "website crm whatsapp integration",
  "book free automation consultation",
  "lead management automation",
];

export const metadata = buildPageMetadata({
  title: growthSystemTitle,
  description: growthSystemDescription,
  pathname: "/growth-system",
  keywords: growthSystemKeywords,
  noindex: true,
});

const growthSystemSchema = buildWebPageSchema({
  title: growthSystemTitle,
  description: growthSystemDescription,
  pathname: "/growth-system",
  keywords: growthSystemKeywords,
});

const benefits = [
  "High-converting website built for speed and lead capture",
  "CRM setup that tracks every inquiry in one pipeline",
  "WhatsApp and follow-up automation running 24/7",
  "Calendly booking flow connected to your lead process",
];

const faqs = [
  {
    q: "How long does setup usually take?",
    a: "Most businesses get the first working version in days, then we optimize based on real lead data.",
  },
  {
    q: "Do you work with new businesses?",
    a: "Yes. We build simple, scalable systems for new founders, startups, and local businesses moving online.",
  },
  {
    q: "Can this work with my current tools?",
    a: "In most cases yes. We can integrate with tools like Zoho, Calendly, WhatsApp, and your existing website stack.",
  },
];

export default function GrowthSystemPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <VisualEffects />
      <Navbar hideLinks />

      <main className="pt-32 md:pt-36">
        <section className="section-padding">
          <div className="container-narrow text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-balance">
              Turn Your Website Into a <span className="gradient-text">Lead Machine</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-5">
              Stop losing leads. Get a complete growth system with website + CRM + WhatsApp
              automation + booking workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a href="#growth-form" className="gradient-btn px-8 py-3.5 rounded-xl text-base">
                Book Free Consultation
              </a>
              <a
                href="https://wa.me/918708767499?text=Hi%20AlgoAura,%20I%20want%20a%20growth%20system%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card px-8 py-3.5 rounded-xl text-base inline-flex items-center justify-center gap-2"
              >
                <WhatsAppLogo className="w-[18px] h-[18px]" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="section-padding bg-secondary/20">
          <div className="container-narrow">
            <div className="system-card p-7 md:p-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                The Problem Most Businesses Face
              </h2>
              <p className="text-muted-foreground">
                Leads come in from different channels, follow-ups are delayed, and there is no
                clear system for conversion. This creates revenue leaks every week.
              </p>
            </div>

            <div className="system-card p-7 md:p-8 mt-6">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-5">
                What You Get With AlgoAura
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2.5">
                    <BadgeCheck size={18} className="text-primary mt-0.5" />
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-narrow grid md:grid-cols-2 gap-6">
            <div className="system-card p-7 md:p-8">
              <h2 className="text-2xl font-heading font-bold mb-3">Result Snapshot</h2>
              <p className="text-muted-foreground">
                &quot;AlgoAura replaced our manual follow-ups with an automated pipeline. Lead
                response and booking consistency improved within weeks.&quot;
              </p>
              <p className="terminal-text text-xs text-muted-foreground mt-3">- Service Business Owner</p>
            </div>
            <div className="system-card p-7 md:p-8">
              <h2 className="text-2xl font-heading font-bold mb-3">Result Snapshot</h2>
              <p className="text-muted-foreground">
                &quot;Website, CRM, and WhatsApp are finally connected. We can track every inquiry
                and follow up without manual chaos.&quot;
              </p>
              <p className="terminal-text text-xs text-muted-foreground mt-3">- Startup Founder</p>
            </div>
          </div>
        </section>

        <section id="growth-form">
          <ContactForm
            title={
              <>
                Get Your <span className="gradient-text">Free Automation Strategy</span>
              </>
            }
            description="Tell us your current setup and we will recommend the exact growth system for your business."
            showQuickAccess={false}
          />
        </section>

        <section className="section-padding">
          <div className="container-narrow">
            <div className="system-card p-7 md:p-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-5 inline-flex items-center gap-2">
                <CircleHelp size={20} className="text-primary" /> Frequently Asked Questions
              </h2>
              <div className="space-y-5">
                {faqs.map((item) => (
                  <div key={item.q}>
                    <h3 className="font-heading font-semibold text-lg">{item.q}</h3>
                    <p className="text-muted-foreground mt-1">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding pt-0">
          <div className="container-narrow">
            <div className="system-card text-center py-12 px-6 rounded-3xl">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-balance">
                Ready to Start Your <span className="gradient-text">Growth System?</span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-7">
                <a href="#growth-form" className="gradient-btn px-8 py-3.5 rounded-xl text-base">
                  Book Consultation
                </a>
                <a
                  href="https://calendly.com/teamalgoaura/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card px-8 py-3.5 rounded-xl text-base inline-flex items-center justify-center gap-2"
                >
                  <PhoneCall size={17} /> Book on Calendly
                </a>
                <a
                  href="https://wa.me/918708767499?text=Hi%20AlgoAura,%20I%20just%20submitted%20the%20growth-system%20form."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card px-8 py-3.5 rounded-xl text-base inline-flex items-center justify-center gap-2"
                >
                  <WhatsAppLogo className="w-[17px] h-[17px]" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(growthSystemSchema) }}
        />
      </main>
    </div>
  );
}

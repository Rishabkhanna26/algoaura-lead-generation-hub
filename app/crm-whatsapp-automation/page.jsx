import Footer from "../../components/Footer";
import FaqAccordion from "../../components/FaqAccordion";
import Navbar from "../../components/Navbar";
import VisualEffects from "../../components/VisualEffects";
import { buildPageMetadata, buildWebPageSchema } from "../../lib/seo";

const automationTitle = "CRM Setup and WhatsApp Automation Services";
const automationDescription =
  "Automate your lead pipeline with CRM setup, WhatsApp follow-ups, and booking workflows. Capture, track, and convert leads faster with less manual effort.";
const automationKeywords = [
  "crm setup services",
  "whatsapp automation services",
  "lead pipeline automation",
  "zoho crm integration",
  "booking automation setup",
];

export const metadata = buildPageMetadata({
  title: automationTitle,
  description: automationDescription,
  pathname: "/crm-whatsapp-automation",
  keywords: automationKeywords,
});

const automationSchema = buildWebPageSchema({
  title: automationTitle,
  description: automationDescription,
  pathname: "/crm-whatsapp-automation",
  keywords: automationKeywords,
});

const automationFaqItems = [
  {
    question: "Which CRM tools do you support?",
    answer:
      "We primarily work with Zoho and similar CRM tools. We can adapt to your current stack and required workflows.",
  },
  {
    question: "Can WhatsApp automation feel personal, not robotic?",
    answer:
      "Yes. We design message sequences with timing logic, branching, and context so follow-ups stay natural and useful.",
  },
  {
    question: "Do you integrate booking links and reminders too?",
    answer:
      "Yes. We connect booking systems like Calendly and trigger confirmations, reminders, and no-show reduction flows.",
  },
  {
    question: "How do you prevent leads from slipping through?",
    answer:
      "Every lead is tagged, assigned, and tracked with status rules. Missed follow-ups trigger alerts or fallback sequences.",
  },
];

export default function CrmWhatsappAutomationPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <VisualEffects />
      <Navbar />
      <main className="pt-32 md:pt-36">
        <section className="section-padding">
          <div className="container-narrow text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-balance">
              CRM + WhatsApp Automation for <span className="gradient-text">Faster Follow-Up</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-5">
              We connect your lead sources, CRM pipeline, WhatsApp messages, and booking links so
              your team can focus on conversion instead of manual chasing.
            </p>
          </div>
        </section>

        <section className="section-padding bg-secondary/20">
          <div className="container-narrow grid lg:grid-cols-2 gap-6">
            <article className="system-card p-7 md:p-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                CRM Layer Implementation
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>Lead pipeline setup with stage logic and owner assignment</li>
                <li>Source tracking and form routing from all incoming channels</li>
                <li>Lead scoring and prioritization to focus on high-intent prospects</li>
                <li>Task reminders and follow-up accountability across the sales flow</li>
              </ul>
            </article>

            <article className="system-card p-7 md:p-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                WhatsApp and Booking Automation
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>Instant reply flows for new inquiries</li>
                <li>Reminder and nurture sequences for cold or pending leads</li>
                <li>Calendly integration with confirmation and reminder triggers</li>
                <li>Reactivation campaigns for old unconverted opportunities</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-narrow">
            <div className="system-card p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-5">
                Automation Workflow Map
              </h2>
              <div className="grid md:grid-cols-5 gap-4">
                {[
                  "Lead captured from website or ad",
                  "Lead auto-synced to CRM with source tag",
                  "WhatsApp follow-up starts instantly",
                  "Booking link and reminders are triggered",
                  "Status updates feed reporting dashboard",
                ].map((item, index) => (
                  <div key={item} className="glass-card p-4 rounded-xl">
                    <p className="terminal-text text-xs text-primary mb-2">Step {index + 1}</p>
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FaqAccordion
          title="CRM and WhatsApp Automation FAQ"
          subtitle="Key implementation details before you start your automation project."
          items={automationFaqItems}
        />

        <section className="section-padding pt-0">
          <div className="container-narrow">
            <div className="system-card text-center py-12 px-6 rounded-3xl">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-balance">
                Ready to Stop Manual Follow-Up <span className="gradient-text">Bottlenecks?</span>
              </h2>
              <a href="/contact" className="gradient-btn inline-flex mt-7 px-8 py-3.5 rounded-xl text-base">
                Book Automation Consultation
              </a>
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(automationSchema) }}
        />
      </main>
      <Footer />
    </div>
  );
}

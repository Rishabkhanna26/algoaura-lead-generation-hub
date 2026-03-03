import { Building2, Rocket, Store } from "lucide-react";

const caseStudies = [
  {
    client: "Real Estate Agency",
    icon: Building2,
    problem: "Leads from ads and website forms were unmanaged and response time was slow.",
    built:
      "A high-converting landing website, Zoho CRM pipeline, and WhatsApp follow-up workflow.",
    tech: "Next.js, Zoho CRM, WhatsApp API, Calendly",
    result: "More qualified lead conversations and faster follow-up with reduced manual work.",
  },
  {
    client: "Local Dental Clinic",
    icon: Building2,
    problem:
      "The clinic relied on referrals and calls only, with no consistent online lead generation flow.",
    built:
      "A new SEO-focused local website, WhatsApp click-to-chat flow, and appointment automation.",
    tech: "Next.js, local SEO pages, WhatsApp automation, Calendly",
    result: "More online appointment requests and improved local visibility for nearby searches.",
  },
  {
    client: "E-Commerce Brand",
    icon: Store,
    problem: "Traffic was high but abandoned checkouts and delayed follow-ups hurt sales.",
    built:
      "A funnel-focused website with lead capture, automation sequences, and booking workflow.",
    tech: "Next.js, CRM workflows, WhatsApp automation, analytics tracking",
    result: "Improved conversion flow and better visibility of where leads dropped off.",
  },
  {
    client: "Coaching Business",
    icon: Rocket,
    problem: "No clear system to capture, qualify, and book discovery calls.",
    built:
      "Lead form routing, automated reminders, and a Calendly-based booking system with CRM sync.",
    tech: "Next.js, Calendly, Zoho CRM, automated follow-ups",
    result: "More booked calls and a reliable lead pipeline running with less daily effort.",
  },
  {
    client: "Local Home Services Business",
    icon: Building2,
    problem:
      "Most leads were coming through missed calls and manual messages, causing slow response time.",
    built:
      "A service-focused website with lead forms, CRM pipeline setup, and instant WhatsApp follow-ups.",
    tech: "Next.js, Zoho CRM, WhatsApp API, form automation",
    result: "Faster lead response and a more consistent flow of qualified service inquiries online.",
  },
  {
    client: "SaaS Startup",
    icon: Rocket,
    problem: "Sign-ups were inconsistent and onboarding tasks were handled manually.",
    built:
      "A conversion-first website revamp, onboarding automation, and lead lifecycle tracking dashboard.",
    tech: "Next.js, CRM automations, webhook flows, analytics dashboard",
    result: "Higher trial-to-call conversion and better control of the full lead-to-customer journey.",
  },
];

export default function Portfolio() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-14 animate-fade-up">
          <span className="terminal-text text-primary text-sm font-semibold uppercase tracking-wider">
            {"// Case Studies"}
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3">
            Project <span className="gradient-text">Results</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((study, reportIndex) => (
            <div
              key={study.client}
              className="system-card p-6 animate-fade-up"
              style={{ animationDelay: `${reportIndex * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-5">
                <div>
                  <span className="terminal-text text-[10px] text-accent-secondary uppercase">
                    Client Case
                  </span>
                  <h3 className="font-heading font-semibold text-lg">{study.client}</h3>
                </div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <study.icon className="text-primary" size={20} />
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <p className="text-accent-secondary">
                  <span className="text-foreground font-semibold">Problem:</span> {study.problem}
                </p>
                <p className="text-accent-secondary">
                  <span className="text-foreground font-semibold">What we built:</span> {study.built}
                </p>
                <p className="text-accent-secondary">
                  <span className="text-foreground font-semibold">Tech used:</span> {study.tech}
                </p>
                <p className="text-accent-secondary">
                  <span className="text-foreground font-semibold">Result:</span> {study.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

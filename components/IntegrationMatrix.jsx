import {
  CalendarDays,
  Megaphone,
  MessageSquare,
  MonitorSmartphone,
  Puzzle,
  Share2,
  Workflow,
} from "lucide-react";

const integrations = [
  {
    icon: MonitorSmartphone,
    title: "Website + Funnel Layer",
    description: "Landing pages, lead forms, and conversion-focused page flows.",
  },
  {
    icon: Puzzle,
    title: "CRM Integration Layer",
    description: "Lead capture, pipeline stages, tags, ownership, and tracking hygiene.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Automation Layer",
    description: "Instant replies, reminders, reactivation messages, and lead nurturing.",
  },
  {
    icon: Share2,
    title: "Facebook + Instagram Automation",
    description: "Social inbox handling, lead reply flows, and automated follow-up across both platforms.",
  },
  {
    icon: Megaphone,
    title: "Meta Ads Layer",
    description: "Campaign launch, lead form routing, source attribution, and ad-to-CRM sync.",
  },
  {
    icon: CalendarDays,
    title: "Booking Automation Layer",
    description: "Calendly sync, call scheduling flows, reminders, and no-show reduction.",
  },
  {
    icon: Workflow,
    title: "Analytics and Optimization",
    description: "Source-level tracking, conversion reports, and bottleneck diagnostics.",
  },
];

export default function IntegrationMatrix() {
  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-narrow">
        <div className="text-center mb-14 animate-fade-up">
          <span className="terminal-text text-primary text-sm font-semibold uppercase tracking-wider">
            {"// System Integrations"}
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 text-balance">
            Everything Works as <span className="gradient-text">One System</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We do not build isolated tools. We connect your website, CRM, WhatsApp, Meta ads,
            Facebook, Instagram, and booking stack into one predictable growth process.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((item, index) => (
            <div
              key={item.title}
              className="system-card p-6 animate-fade-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg">{item.title}</h3>
              <p className="text-muted-foreground mt-2 text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

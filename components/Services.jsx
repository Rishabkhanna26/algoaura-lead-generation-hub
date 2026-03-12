import { Cog, GitBranch, Globe, Megaphone, Share2, Target } from "lucide-react";

const serviceItems = [
  {
    icon: Globe,
    title: "High-Converting Website Development",
    desc: "Modern, fast, and SEO-ready websites built to turn traffic into qualified leads.",
    version: "01",
    status: "ACTIVE",
    href: "/website-development",
  },
  {
    icon: Cog,
    title: "CRM Setup and Integration",
    desc: "Clean lead pipelines with Zoho and connected tools so every inquiry is tracked.",
    version: "02",
    status: "ACTIVE",
    href: "/crm-whatsapp-automation",
  },
  {
    icon: Target,
    title: "WhatsApp and Lead Automation",
    desc: "Instant follow-ups, reminders, and automation flows that keep leads engaged 24/7.",
    version: "03",
    status: "ACTIVE",
    href: "/crm-whatsapp-automation",
  },
  {
    icon: Share2,
    title: "Facebook and Instagram Automation",
    desc: "Automated social inbox replies, lead handoffs, and nurture flows for Facebook and Instagram.",
    version: "04",
    status: "ACTIVE",
    href: "/crm-whatsapp-automation",
  },
  {
    icon: Megaphone,
    title: "Meta Ads Campaign Management",
    desc: "Campaign setup, creative direction, lead-form flows, and ad-to-CRM tracking for better ROI.",
    version: "05",
    status: "ACTIVE",
    href: "/services",
  },
  {
    icon: GitBranch,
    title: "Booking and Sales Funnel Setup",
    desc: "Calendly, landing pages, and conversion flows connected into one simple system.",
    version: "06",
    status: "ACTIVE",
    href: "/contact",
  },
];

export default function Services() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-14 animate-fade-up">
          <span className="terminal-text text-primary text-sm font-semibold uppercase tracking-wider">
            {"// Services Overview"}
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3">
            What We <span className="gradient-text">Build</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-base md:text-lg">
            From websites and CRM to Meta ads plus Facebook and Instagram automation, we connect
            acquisition and follow-up into one growth system.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceItems.map((service, index) => (
            <div
              key={service.title}
              className="module-card p-6 relative animate-fade-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <service.icon className="text-primary" size={24} />
                </div>
                <div className="flex items-center gap-2">
                  <span className="terminal-text text-[10px] text-accent-secondary">#{service.version}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-success/15 text-success">
                    {service.status}
                  </span>
                </div>
              </div>

              <h3 className="font-heading font-semibold text-lg">{service.title}</h3>
              <p className="text-accent-secondary text-base mt-2">{service.desc}</p>

              <div className="mt-4 pt-3 border-t border-accent-secondary/20">
                <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2">
                    <div className="status-dot status-dot-online" />
                    <span className="terminal-text text-[10px] text-accent-secondary">
                      Service Included
                    </span>
                  </span>
                  <a
                    href={service.href}
                    className="terminal-text text-[10px] uppercase tracking-wide text-primary hover:text-primary/80"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

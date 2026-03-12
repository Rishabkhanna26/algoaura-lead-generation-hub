import {
  BarChart3,
  Bot,
  CheckCircle2,
  Globe,
  Megaphone,
  MessageSquare,
  Share2,
  Target,
} from "lucide-react";

const upgrades = [
  { icon: Globe, title: "High-performance websites (Next.js)", status: "LIVE" },
  { icon: Bot, title: "CRM integration (Zoho and more)", status: "CONNECTED" },
  { icon: MessageSquare, title: "WhatsApp automation", status: "ACTIVE" },
  { icon: Share2, title: "Facebook + Instagram automation", status: "ACTIVE" },
  { icon: Megaphone, title: "Meta ads and lead campaigns", status: "SCALING" },
  { icon: Target, title: "Booking automation (Calendly)", status: "ACTIVE" },
  { icon: BarChart3, title: "Lead tracking dashboard", status: "TRACKING" },
];

export default function SolutionSection() {
  return (
    <section className="section-padding bg-secondary/20 relative">
      <div className="container-narrow">
        <div className="text-center mb-14 animate-fade-up">
          <span className="terminal-text text-success text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2">
            <CheckCircle2 size={16} /> Your Complete Solution
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 text-balance">
            We Build <span className="gradient-text">Growth Systems</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            We combine acquisition, automation, and tracking to turn your website and social
            channels into one predictable lead engine.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {upgrades.map((upgrade, index) => (
            <div
              key={upgrade.title}
              className="success-card p-4 flex items-center gap-4 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                <upgrade.icon className="text-success" size={20} />
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-semibold text-base text-foreground">
                  {upgrade.title}
                </h3>
              </div>
              <span className="terminal-text text-xs text-success/80 uppercase tracking-wider">
                {upgrade.status}
              </span>
              <div className="status-dot status-dot-online" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

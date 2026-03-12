import { Building2, Rocket, Store, UserRound } from "lucide-react";

const audience = [
  {
    icon: UserRound,
    title: "New business owners",
    description: "Get a clear growth setup from day one without trial-and-error.",
  },
  {
    icon: Rocket,
    title: "Startups",
    description: "Launch fast with website, CRM, and automation connected from the start.",
  },
  {
    icon: Store,
    title: "Offline businesses going online",
    description: "Move to digital with a conversion-focused website and lead workflow.",
  },
  {
    icon: Building2,
    title: "Businesses struggling with lead management",
    description: "Stop losing inquiries with a complete tracking and follow-up system.",
  },
];

export default function WhoThisIsFor() {
  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-narrow">
        <div className="text-center mb-14 animate-fade-up">
          <span className="terminal-text text-primary text-sm font-semibold uppercase tracking-wider">
            {"// Who This Is For"}
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3">
            Built for <span className="gradient-text">Growing Businesses</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {audience.map((item, index) => (
            <div
              key={item.title}
              className="system-card p-6 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-heading font-semibold text-lg">{item.title}</h3>
              <p className="text-accent-secondary text-base mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

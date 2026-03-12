import { CheckCircle2 } from "lucide-react";

const roadmap = [
  {
    phase: "Week 1",
    title: "Audit and Strategy Mapping",
    description:
      "We map your current lead flow, identify bottlenecks, and define the website and automation architecture.",
  },
  {
    phase: "Week 2",
    title: "Website and Funnel Build",
    description:
      "We build conversion-focused pages, forms, and landing flow structure aligned to your offer and audience.",
  },
  {
    phase: "Week 3",
    title: "CRM and WhatsApp Integration",
    description:
      "We connect lead sources to CRM stages, create follow-up triggers, and deploy WhatsApp automation logic.",
  },
  {
    phase: "Week 4",
    title: "Launch and Optimization",
    description:
      "We launch, test handoffs, monitor metrics, and tune the funnel for better lead quality and response speed.",
  },
];

export default function AutomationRoadmap() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-14 animate-fade-up">
          <span className="terminal-text text-primary text-sm font-semibold uppercase tracking-wider">
            {"// Delivery Roadmap"}
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 text-balance">
            What Happens in the <span className="gradient-text">First 30 Days</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {roadmap.map((item, index) => (
            <article
              key={item.phase}
              className="system-card p-6 md:p-7 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="terminal-text text-xs uppercase tracking-wide text-primary">
                  {item.phase}
                </span>
                <CheckCircle2 size={16} className="text-[hsl(var(--success))]" />
              </div>
              <h3 className="text-xl font-heading font-bold">{item.title}</h3>
              <p className="text-muted-foreground mt-2">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { BarChart3, Cpu, Rocket } from "lucide-react";

const phases = [
  {
    icon: Cpu,
    phase: "01",
    title: "Strategic Architecture",
    desc: "We analyze your business model, audience, and goals to engineer a custom growth blueprint.",
  },
  {
    icon: Rocket,
    phase: "02",
    title: "System Deployment",
    desc: "We build and deploy your website, automations, funnels, and integrations.",
  },
  {
    icon: BarChart3,
    phase: "03",
    title: "Performance Optimization",
    desc: "We monitor, test, and optimize every layer for maximum ROI and scale.",
  },
];

export default function Process() {
  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-narrow">
        <div className="text-center mb-14 animate-fade-up">
          <span className="terminal-text text-primary text-sm font-semibold uppercase tracking-wider">
            {"// Delivery Process"}
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3">
            How We <span className="gradient-text">Deploy</span>
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {phases.map((phase, index) => (
              <div
                key={phase.phase}
                className="text-center relative animate-fade-up"
                style={{ animationDelay: `${index * 0.14}s` }}
              >
                <div className="system-card p-8 relative overflow-visible">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 bg-background border border-primary/30 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="terminal-text text-xs text-primary font-bold">{phase.phase}</span>
                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 mt-2">
                    <phase.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{phase.title}</h3>
                  <p className="text-muted-foreground text-base">{phase.desc}</p>
                </div>

                {index < 2 && (
                  <div
                    className="hidden md:flex absolute top-1/2 -right-6 -translate-y-1/2 z-20 items-center justify-center text-primary/40 text-2xl pointer-events-none"
                  >
                    {"->"}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

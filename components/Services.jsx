import { Bot, Cog, GitBranch, Globe, Target } from "lucide-react";

const modules = [
  {
    icon: Globe,
    title: "Web Development Engine",
    desc: "Conversion-optimized digital infrastructure built for speed and scale.",
    version: "v3.2",
    status: "ACTIVE",
  },
  {
    icon: Cog,
    title: "Automation Core",
    desc: "Smart workflows, CRM integrations, and automated pipelines.",
    version: "v2.8",
    status: "ACTIVE",
  },
  {
    icon: Target,
    title: "Lead Acquisition Layer",
    desc: "Funnels, ads, and tracking systems that generate qualified leads.",
    version: "v4.1",
    status: "ACTIVE",
  },
  {
    icon: GitBranch,
    title: "Funnel Optimization Suite",
    desc: "Sales flow engineering from landing page to checkout.",
    version: "v2.5",
    status: "ACTIVE",
  },
  {
    icon: Bot,
    title: "AI Intelligence Module",
    desc: "Chatbots and AI-powered automation for 24/7 engagement.",
    version: "v1.9",
    status: "NEW",
  },
];

export default function Services() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-14 animate-fade-up">
          <span className="terminal-text text-primary text-sm font-semibold uppercase tracking-wider">
            {"// Growth Modules"}
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3">
            System <span className="gradient-text">Architecture</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <div
              key={module.title}
              className="module-card p-6 relative animate-fade-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <module.icon className="text-primary" size={24} />
                </div>
                <div className="flex items-center gap-2">
                  <span className="terminal-text text-[10px] text-muted-foreground">
                    {module.version}
                  </span>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      module.status === "NEW"
                        ? "bg-primary/15 text-primary"
                        : "bg-success/15 text-success"
                    }`}
                  >
                    {module.status}
                  </span>
                </div>
              </div>

              <h3 className="font-heading font-semibold text-lg">{module.title}</h3>
              <p className="text-muted-foreground text-base mt-2">{module.desc}</p>

              <div className="mt-4 pt-3 border-t border-border/50">
                <div className="flex items-center gap-2">
                  <div className="status-dot status-dot-online" />
                  <span className="terminal-text text-[10px] text-muted-foreground">
                    Module Online
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

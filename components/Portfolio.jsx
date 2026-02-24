import { Clock, TrendingUp, Users } from "lucide-react";

const reports = [
  {
    client: "Real Estate Agency",
    metrics: [
      { label: "Qualified Leads", value: "+312%", barHeight: "80%" },
      { label: "Conversion Rate", value: "+47%", barHeight: "55%" },
      { label: "Response Time", value: "<1hr", barHeight: "90%" },
    ],
    summary: "Automated follow-up system deployed in 24 hours",
    icon: TrendingUp,
  },
  {
    client: "E-Commerce Brand",
    metrics: [
      { label: "Revenue Growth", value: "+320%", barHeight: "85%" },
      { label: "Cart Recovery", value: "+68%", barHeight: "70%" },
      { label: "Email Automation", value: "100%", barHeight: "100%" },
    ],
    summary: "Full funnel automation with WhatsApp integration",
    icon: Users,
  },
  {
    client: "Coaching Agency",
    metrics: [
      { label: "Monthly Leads", value: "450+", barHeight: "75%" },
      { label: "Cost Per Lead", value: "-62%", barHeight: "65%" },
      { label: "Booking Rate", value: "+89%", barHeight: "88%" },
    ],
    summary: "Lead generation system with AI-powered qualification",
    icon: Clock,
  },
  {
    client: "SaaS Startup",
    metrics: [
      { label: "Free Trial Sign-ups", value: "3x", barHeight: "90%" },
      { label: "Churn Reduction", value: "-34%", barHeight: "45%" },
      { label: "Onboarding", value: "Auto", barHeight: "95%" },
    ],
    summary: "Onboarding automation and retention workflows",
    icon: TrendingUp,
  },
];

export default function Portfolio() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-14 animate-fade-up">
          <span className="terminal-text text-primary text-sm font-semibold uppercase tracking-wider">
            {"// Performance Reports"}
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3">
            System <span className="gradient-text">Output Data</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reports.map((report, reportIndex) => (
            <div
              key={report.client}
              className="system-card p-6 animate-fade-up"
              style={{ animationDelay: `${reportIndex * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-5">
                <div>
                  <span className="terminal-text text-[10px] text-muted-foreground uppercase">
                    Client Report
                  </span>
                  <h3 className="font-heading font-semibold text-lg">{report.client}</h3>
                </div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <report.icon className="text-primary" size={20} />
                </div>
              </div>

              <div className="flex items-end gap-4 h-28 mb-4">
                {report.metrics.map((metric, metricIndex) => (
                  <div
                    key={metric.label}
                    className="flex-1 flex flex-col items-center gap-1 h-full justify-end"
                  >
                    <span className="terminal-text text-xs font-bold text-primary">
                      {metric.value}
                    </span>
                    <div
                      className="w-full rounded-t-md bg-gradient-to-t from-primary/40 to-primary/80"
                      style={{
                        height: metric.barHeight,
                        animationDelay: `${reportIndex * 0.1 + metricIndex * 0.1 + 0.2}s`,
                      }}
                    />
                    <span className="terminal-text text-[9px] text-muted-foreground text-center leading-tight">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-muted-foreground text-xs terminal-text border-t border-border/50 pt-3">
                {`-> ${report.summary}`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

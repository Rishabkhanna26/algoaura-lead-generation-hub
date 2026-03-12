import { AlertTriangle, XCircle } from "lucide-react";

const painPoints = [
  {
    title: "Leads getting lost",
    description:
      "Inquiries from calls, forms, and WhatsApp stay scattered, so follow-ups are delayed or missed.",
  },
  {
    title: "No CRM setup",
    description:
      "Without a clear pipeline, your team cannot track lead status, priorities, or next action.",
  },
  {
    title: "No automation",
    description:
      "Manual reminders and replies consume time, while warm leads lose interest before your response.",
  },
  {
    title: "Website not converting",
    description:
      "Visitors are not guided to act, which means traffic comes in but qualified leads do not.",
  },
];

export default function ProblemSection() {
  return (
    <section className="section-padding relative">
      <div className="container-narrow">
        <div className="text-center mb-14 animate-fade-up">
          <span className="terminal-text text-destructive text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2">
            <AlertTriangle size={16} /> Growth Bottlenecks
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 text-balance">
            Still Managing Leads <span className="gradient-text">Manually?</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto terminal-text text-base">
            These are the most common reasons businesses lose leads and sales opportunities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {painPoints.map((point, index) => (
            <div
              key={point.title}
              className="error-card p-5 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  <XCircle className="text-destructive" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold text-base text-foreground">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">{point.description}</p>
                </div>
              </div>
              <div className="status-dot status-dot-error absolute top-4 right-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

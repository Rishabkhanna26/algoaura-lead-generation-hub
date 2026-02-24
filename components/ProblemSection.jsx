import { AlertTriangle, XCircle } from "lucide-react";

const errors = [
  {
    code: "ERR_001",
    title: "Manual Follow-Ups Detected",
    desc: "Your workflow is running in manual mode. Lead response time is 48+ hours.",
    severity: "CRITICAL",
  },
  {
    code: "ERR_002",
    title: "No CRM Integration Found",
    desc: "Customer data scattered across spreadsheets. No unified pipeline.",
    severity: "HIGH",
  },
  {
    code: "ERR_003",
    title: "Conversion Rate Below 2%",
    desc: "Funnel optimization is required. Current bounce rate exceeds the safe threshold.",
    severity: "CRITICAL",
  },
  {
    code: "ERR_004",
    title: "Ad Budget Leak Identified",
    desc: "No retargeting or follow-up automation. ROI tracking disabled.",
    severity: "HIGH",
  },
];

export default function ProblemSection() {
  return (
    <section className="section-padding relative">
      <div className="container-narrow">
        <div className="text-center mb-14 animate-fade-up">
          <span className="terminal-text text-destructive text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2">
            <AlertTriangle size={16} /> System Diagnostics
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 text-balance">
            <span className="gradient-text">Critical Errors</span> Detected
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto terminal-text text-base">
            Running diagnostics on your current business infrastructure...
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {errors.map((error, index) => (
            <div
              key={error.code}
              className="error-card p-5 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  <XCircle className="text-destructive" size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="terminal-text text-[10px] text-destructive/60">{error.code}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-destructive/15 text-destructive px-2 py-0.5 rounded-full">
                      {error.severity}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-base text-foreground">
                    {error.title}
                  </h3>
                  <p className="text-muted-foreground text-base mt-1 terminal-text">{error.desc}</p>
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

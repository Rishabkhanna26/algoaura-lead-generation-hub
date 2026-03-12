import { Terminal } from "lucide-react";

const testimonials = [
  {
    id: "RES_204",
    name: "Sarah M.",
    role: "Founder, Bloom Studio",
    text: "AlgoAura transformed our manual chaos into an automated pipeline. We went from zero leads to 200+ per month in just 8 weeks.",
    timestamp: "2025-12-14 09:32:01",
  },
  {
    id: "RES_187",
    name: "James K.",
    role: "CEO, ScaleUp Agency",
    text: "Their automation systems saved us 20+ hours per week. The ROI on their services is insane. Best investment we've made.",
    timestamp: "2025-11-28 14:15:43",
  },
  {
    id: "RES_231",
    name: "Priya D.",
    role: "Coach & Consultant",
    text: "I was wasting money on ads with no follow-up. AlgoAura built me a complete funnel with WhatsApp automation - my bookings tripled.",
    timestamp: "2026-01-05 11:47:22",
  },
  {
    id: "RES_219",
    name: "Michael T.",
    role: "Real Estate Broker",
    text: "Professional, fast, and results-driven. They delivered exactly what they promised. Our CRM is now fully automated and running 24/7.",
    timestamp: "2025-12-22 16:08:55",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-narrow">
        <div className="text-center mb-14 animate-fade-up">
          <span className="terminal-text text-primary text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2">
            <Terminal size={16} /> Client Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3">
            Verified <span className="gradient-text">Client Results</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="system-card p-6 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="terminal-text text-[10px] text-accent-secondary/70">[{testimonial.id}]</span>
                <span className="terminal-text text-[10px] text-accent-secondary/50">
                  {testimonial.timestamp}
                </span>
              </div>

              <p className="text-foreground/90 text-base leading-relaxed mb-4 italic">
                &quot;{testimonial.text}&quot;
              </p>

              <div className="flex items-center gap-2 border-t border-accent-secondary/20 pt-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">{testimonial.name[0]}</span>
                </div>
                <div>
                  <p className="font-heading font-semibold text-xs">{testimonial.name}</p>
                  <p className="text-accent-secondary text-[10px] terminal-text">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

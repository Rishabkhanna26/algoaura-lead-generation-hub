import { ArrowRight, Zap } from "lucide-react";

export default function CTA() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="system-card text-center py-16 px-6 md:px-12 rounded-3xl relative overflow-hidden scanline animate-fade-up">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Zap className="text-primary" size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-balance">
              Ready to <span className="gradient-text">Automate</span> Your Business?
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-8 terminal-text">
              Get a website and automation system that helps you capture, track, and close more leads.
            </p>
            <a
              href="/contact"
              className="gradient-btn inline-flex items-center gap-2 px-10 py-4 rounded-xl text-lg animate-pulse-glow"
            >
              Book Consultation <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

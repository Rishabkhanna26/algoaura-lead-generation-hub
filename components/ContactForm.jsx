import { Shield } from "lucide-react";
import ContactFormClient from "./ContactFormClient";
import WhatsAppLogo from "./WhatsAppLogo";

export default function ContactForm({
  title = "Get Your Free Automation Strategy",
  description = "Complete the short form below and we will send a custom growth plan for your business.",
  showQuickAccess = true,
}) {
  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-narrow">
        <div className="text-center mb-14 animate-fade-up">
          <span className="terminal-text text-primary text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2">
            <Shield size={16} /> Free Consultation
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3">
            {title}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-base">
            {description}
          </p>
        </div>

        <div
          className={`max-w-4xl mx-auto ${
            showQuickAccess ? "grid md:grid-cols-2 gap-8" : "max-w-xl"
          }`}
        >
          <ContactFormClient />

          {showQuickAccess ? (
            <div
              className="flex flex-col justify-center gap-6 animate-fade-up"
              style={{ animationDelay: "0.16s" }}
            >
              <div className="system-card p-6 rounded-2xl">
                <h3 className="font-heading font-semibold text-lg mb-2">Chat on WhatsApp</h3>
                <p className="text-muted-foreground text-base mb-4 terminal-text">
                  Want a faster reply? Message us directly and we will help you immediately.
                </p>
                <a
                  href="https://wa.me/918708767499?text=Hi%20AlgoAura,%20I%20just%20submitted%20a%20form."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[hsl(142,70%,35%)] hover:bg-[hsl(142,70%,30%)] text-white px-6 py-3 rounded-lg transition-colors font-medium text-base"
                >
                  <WhatsAppLogo className="w-[18px] h-[18px]" /> Chat on WhatsApp
                </a>
              </div>
              <div className="system-card p-6 rounded-2xl">
                <h3 className="font-heading font-semibold text-lg mb-2">Book Free Consultation</h3>
                <p className="text-muted-foreground text-base terminal-text mb-4">
                  Prefer a direct call? Book a strategy session and we will map your next steps.
                </p>
                <a
                  href="https://calendly.com/teamalgoaura/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm hover:border-primary/30 transition-colors"
                >
                  Book Consultation
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

import { Shield } from "lucide-react";
import ContactFormClient from "./ContactFormClient";
import WhatsAppLogo from "./WhatsAppLogo";

export default function ContactForm() {
  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-narrow">
        <div className="text-center mb-14 animate-fade-up">
          <span className="terminal-text text-primary text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2">
            <Shield size={16} /> Access Request
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3">
            Request <span className="gradient-text">System Access</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-base">
            Complete the form below to begin your system initialization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ContactFormClient />

          <div
            className="flex flex-col justify-center gap-6 animate-fade-up"
            style={{ animationDelay: "0.16s" }}
          >
            <div className="system-card p-6 rounded-2xl">
              <h3 className="font-heading font-semibold text-lg mb-2">Quick Access</h3>
              <p className="text-muted-foreground text-base mb-4 terminal-text">
                Prefer instant communication? Connect via WhatsApp for priority response.
              </p>
              <a
                href="https://wa.me/918059649659?text=Hi%20AlgoAura,%20I%20just%20submitted%20a%20form."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[hsl(142,70%,35%)] hover:bg-[hsl(142,70%,30%)] text-white px-6 py-3 rounded-lg transition-colors font-medium text-base"
              >
                <WhatsAppLogo className="w-[18px] h-[18px]" /> Chat on WhatsApp
              </a>
            </div>
            <div className="system-card p-6 rounded-2xl">
              <h3 className="font-heading font-semibold text-lg mb-2">Free System Audit</h3>
              <p className="text-muted-foreground text-base terminal-text">
                Book a free 15-minute strategy call. We&apos;ll diagnose your growth bottlenecks - no
                obligations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

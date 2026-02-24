"use client";

import { useState } from "react";
import { MessageCircle, Send, Shield } from "lucide-react";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const inputClasses =
    "w-full px-4 py-3 bg-card/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-base terminal-text";

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitError("");
    setSubmitting(true);

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      businessType: formData.get("businessType"),
      monthlyLeads: formData.get("monthlyLeads"),
      challenge: formData.get("challenge"),
      pagePath: window.location.pathname,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.message || "Request failed");
      }

      if (result && result.success === false) {
        throw new Error(result.message || "Request failed");
      }

      const encodedName = encodeURIComponent(String(payload.name || "").trim());
      formElement.reset();
      window.location.assign(`/thank-you?name=${encodedName}`);
    } catch (error) {
      setSubmitError(error?.message || "Unable to submit right now. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

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
          <form
            onSubmit={handleSubmit}
            className="system-card p-6 md:p-8 rounded-2xl space-y-4 animate-fade-up"
            style={{ animationDelay: "0.08s" }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="status-dot status-dot-online" />
              <span className="terminal-text text-[10px] text-muted-foreground">FORM_ACTIVE</span>
            </div>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className={inputClasses}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className={inputClasses}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className={inputClasses}
            />
            <select name="businessType" className={inputClasses} defaultValue="" required>
              <option value="" disabled>
                Business Type
              </option>
              <option value="startup">Startup</option>
              <option value="local">Local Business</option>
              <option value="coach">Coach / Consultant</option>
              <option value="agency">Agency</option>
              <option value="ecommerce">E-Commerce</option>
              <option value="other">Other</option>
            </select>
            <select name="monthlyLeads" className={inputClasses} defaultValue="" required>
              <option value="" disabled>
                Current Monthly Leads
              </option>
              <option value="0-10">0 - 10</option>
              <option value="10-50">10 - 50</option>
              <option value="50-200">50 - 200</option>
              <option value="200+">200+</option>
            </select>
            <textarea
              name="challenge"
              placeholder="Biggest Growth Challenge"
              rows={3}
              className={`${inputClasses} resize-none`}
            />

            {submitError ? (
              <p className="terminal-text text-xs text-destructive">{submitError}</p>
            ) : null}

            <button
              type="submit"
              disabled={submitting}
              className="w-full gradient-btn py-3 rounded-lg flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {submitting ? "Submitting..." : "Submit Access Request"} <Send size={16} />
            </button>
          </form>

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
                href="https://wa.me/918708767499?text=Hi%20AlgoAura,%20I%20just%20submitted%20a%20form."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[hsl(142,70%,35%)] hover:bg-[hsl(142,70%,30%)] text-white px-6 py-3 rounded-lg transition-colors font-medium text-base"
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            </div>
            <div className="system-card p-6 rounded-2xl">
              <h3 className="font-heading font-semibold text-lg mb-2">Free System Audit</h3>
              <p className="text-muted-foreground text-base terminal-text">
                Book a free 30-minute strategy call. We&apos;ll diagnose your growth bottlenecks - no
                obligations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

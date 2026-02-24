"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactFormClient() {
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
  );
}

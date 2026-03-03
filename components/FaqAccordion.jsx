"use client";

import { useState } from "react";
import { ChevronDown, CircleHelp } from "lucide-react";

export default function FaqAccordion({
  title = "Frequently Asked Questions",
  subtitle = "Answers to common questions before we start.",
  items = [],
}) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-14 animate-fade-up">
          <span className="terminal-text text-primary text-sm font-semibold uppercase tracking-wider inline-flex items-center gap-2">
            <CircleHelp size={16} /> FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 text-balance">{title}</h2>
          <p className="text-accent-secondary mt-4 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="system-card overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between text-left p-5 md:p-6"
                >
                  <h3 className="font-heading font-semibold text-lg pr-4">{item.question}</h3>
                  <ChevronDown
                    size={18}
                    className={`text-primary transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 md:px-6 pb-5 md:pb-6 text-accent-secondary">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

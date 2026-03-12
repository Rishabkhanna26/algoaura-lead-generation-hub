import { ArrowRight } from "lucide-react";
import HeroTerminalBoot from "./HeroTerminalBoot";
import HeroTypingHeadline from "./HeroTypingHeadline";
import HeroWorldMap from "./HeroWorldMap";
import WhatsAppLogo from "./WhatsAppLogo";

const heroCapabilityPills = [
  "Meta Ads Campaigns",
  "Facebook Automation",
  "Instagram Automation",
];

export default function Hero() {
  return (
    <section
      id="home-hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-x-hidden"
    >
      <HeroWorldMap />
      <div className="absolute inset-0 grid-bg hero-grid-overlay opacity-30 z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/35 to-background/80 pointer-events-none z-[2]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[140px] pointer-events-none z-[2] hero-ambient-glow" />

      <div className="relative z-10 container-narrow text-center px-4 pt-28 md:pt-32 pb-8 md:pb-12">
        <HeroTerminalBoot />

        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight text-balance mb-8 animate-fade-up min-h-[5.3rem] md:min-h-[7.6rem] lg:min-h-[9rem]"
          style={{ animationDelay: "0.18s" }}
        >
          Web Development + Smart Automation <br />
          <HeroTypingHeadline />
        </h1>

        <p
          className="text-lg md:text-xl text-accent-secondary max-w-2xl mx-auto mb-10 text-balance animate-fade-up"
          style={{ animationDelay: "0.32s" }}
        >
          We build modern websites integrated with CRM, WhatsApp, Meta Ads, and Facebook +
          Instagram automation systems.
        </p>

        <div
          className="mb-8 flex flex-wrap items-center justify-center gap-3 animate-fade-up"
          style={{ animationDelay: "0.38s" }}
        >
          {heroCapabilityPills.map((pill) => (
            <span
              key={pill}
              className="rounded-full border border-primary/30 bg-card/65 px-4 py-2 text-xs md:text-sm font-semibold tracking-[0.16em] uppercase text-primary/90 backdrop-blur-xl shadow-card"
            >
              {pill}
            </span>
          ))}
        </div>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
          style={{ animationDelay: "0.44s" }}
        >
          <a
            href="/contact"
            className="gradient-btn px-8 py-3.5 rounded-xl text-base flex items-center justify-center gap-2 animate-pulse-glow"
          >
            Book Free Consultation <ArrowRight size={18} />
          </a>
          <a
            href="https://wa.me/918708767499?text=Hi%20AlgoAura,%20I%20want%20to%20discuss%20Meta%20ads,%20Facebook%20Instagram%20automation,%20and%20a%20website%20growth%20system."
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card px-8 py-3.5 rounded-xl text-base text-foreground hover:border-primary/30 transition-all flex items-center justify-center gap-2"
          >
            <WhatsAppLogo className="w-[16px] h-[16px]" /> Chat on WhatsApp
          </a>
        </div>

        <div
          className="mt-12 md:mt-16 system-card grid grid-cols-2 md:grid-cols-4 gap-6 p-6 md:p-8 rounded-2xl max-w-3xl mx-auto animate-fade-up"
          style={{ animationDelay: "0.56s" }}
        >
          {[
            { value: "50+", label: "Systems Deployed" },
            { value: "300%", label: "Avg. Lead Increase" },
            { value: "24/7", label: "Automation Running" },
            { value: "15+", label: "Countries Served" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl md:text-3xl font-heading font-bold gradient-text">{stat.value}</p>
              <p className="text-xs md:text-sm text-accent-secondary mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

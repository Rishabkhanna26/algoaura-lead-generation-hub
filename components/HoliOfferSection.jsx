import {
  ArrowRight,
  Bot,
  CalendarClock,
  Droplets,
  MessageSquareText,
  Sparkles,
  Workflow,
} from "lucide-react";

const automationHighlights = [
  {
    icon: MessageSquareText,
    title: "WhatsApp Smart Replies",
    description: "Auto-reply to new leads in seconds with personalized first-touch messages.",
  },
  {
    icon: Workflow,
    title: "CRM + Pipeline Sync",
    description: "Push every inquiry into your CRM and keep follow-up stages updated automatically.",
  },
  {
    icon: CalendarClock,
    title: "Follow-Up + Booking",
    description: "Trigger reminders, nudge inactive leads, and auto-confirm appointment slots.",
  },
];

const splashDots = [
  { position: "top-4 left-[24%]", size: "w-3 h-3", color: "bg-[#ff6b6b]/80" },
  { position: "top-16 left-[38%]", size: "w-2 h-2", color: "bg-[#ffd43b]/90" },
  { position: "top-10 right-[26%]", size: "w-2.5 h-2.5", color: "bg-[#4dabf7]/85" },
  { position: "top-24 right-[14%]", size: "w-3 h-3", color: "bg-[#69db7c]/80" },
  { position: "bottom-16 left-[14%]", size: "w-2.5 h-2.5", color: "bg-[#f783ac]/85" },
  { position: "bottom-10 left-[44%]", size: "w-2 h-2", color: "bg-[#22b8cf]/90" },
  { position: "bottom-20 right-[35%]", size: "w-3 h-3", color: "bg-[#e599f7]/85" },
  { position: "bottom-8 right-[18%]", size: "w-2.5 h-2.5", color: "bg-[#ffa94d]/85" },
];

const waterBalloons = [
  {
    position: "top-4 right-4 md:top-8 md:right-10",
    colors: "from-[#ff6b6b] to-[#ff8fab]",
    knot: "bg-[#ff6b6b]",
    delay: "0s",
  },
  {
    position: "bottom-10 right-2 md:bottom-14 md:right-10",
    colors: "from-[#4dabf7] to-[#74c0fc]",
    knot: "bg-[#4dabf7]",
    delay: "1.1s",
  },
  {
    position: "top-12 left-2 md:top-16 md:left-8",
    colors: "from-[#ffd43b] to-[#fab005]",
    knot: "bg-[#fab005]",
    delay: "0.6s",
  },
  {
    position: "bottom-2 left-8 md:bottom-10 md:left-14",
    colors: "from-[#69db7c] to-[#40c057]",
    knot: "bg-[#40c057]",
    delay: "1.7s",
  },
];

export default function HoliOfferSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-12 left-6 md:left-20 w-40 h-40 rounded-full bg-[#ff4d6d]/30 blur-3xl" />
        <div className="absolute top-8 right-6 md:right-20 w-48 h-48 rounded-full bg-[#ffd43b]/30 blur-3xl" />
        <div className="absolute -bottom-16 left-1/3 w-52 h-52 rounded-full bg-[#4dabf7]/25 blur-3xl" />
        <div className="absolute bottom-2 right-1/4 w-36 h-36 rounded-full bg-[#69db7c]/25 blur-3xl" />
        {splashDots.map((dot, index) => (
          <div
            key={`outer-splash-${index}`}
            className={`absolute rounded-full blur-[1px] ${dot.position} ${dot.size} ${dot.color}`}
          />
        ))}
      </div>

      <div className="container-narrow relative z-10">
        <div className="system-card rounded-3xl p-6 md:p-10 lg:p-12 border-primary/25 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_15%_20%,rgba(255,77,109,0.22),transparent_40%),radial-gradient(circle_at_85%_15%,rgba(255,212,59,0.2),transparent_40%),radial-gradient(circle_at_30%_85%,rgba(77,171,247,0.18),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(105,219,124,0.18),transparent_40%)]" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-8 right-[28%] w-14 h-14 rounded-full border-2 border-[#ff6b6b]/40 animate-pulse hidden md:block" />
            <div className="absolute bottom-12 left-[30%] w-16 h-16 rounded-full border-2 border-[#4dabf7]/40 animate-pulse hidden md:block" />
            {splashDots.map((dot, index) => (
              <div
                key={`inner-splash-${index}`}
                className={`absolute rounded-full ${dot.position} ${dot.size} ${dot.color}`}
              />
            ))}
            {waterBalloons.map((balloon, index) => (
              <div key={`balloon-${index}`} className={`absolute ${balloon.position}`}>
                <div
                  className={`relative w-9 h-12 md:w-11 md:h-14 rounded-[55%_45%_60%_40%/65%_50%_50%_35%] bg-gradient-to-br ${balloon.colors} shadow-[0_10px_24px_rgba(0,0,0,0.28)] animate-float`}
                  style={{ animationDelay: balloon.delay }}
                >
                  <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-white/55" />
                  <span
                    className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45 rounded-[2px] ${balloon.knot}`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="relative grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-background/55 px-4 py-1.5 text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-primary/90">
                <Sparkles size={14} /> Holi Special Offer <Droplets size={14} />
              </span>

              <h2 className="mt-5 text-3xl md:text-5xl font-heading font-bold leading-tight text-balance">
                Launch Our <span className="gradient-text">Automation Product</span> and Get a
                <span className="text-[#ffd43b]"> 14-Day Free Trial</span>
              </h2>

              <p className="mt-4 text-base md:text-lg text-accent-secondary max-w-2xl">
                Celebrate Holi with brighter lead conversion. We set up the AlgoAura automation
                stack for WhatsApp, CRM, and follow-up workflows so your team can focus on sales.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="gradient-btn inline-flex items-center gap-2 rounded-xl px-6 py-3"
                >
                  Claim Holi Trial <ArrowRight size={18} />
                </a>
                <a
                  href="https://wa.me/918708767499?text=Hi%20AlgoAura,%20I%20want%20the%20Holi%20offer%20for%20your%2014-day%20automation%20free%20trial."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card inline-flex items-center gap-2 rounded-xl px-6 py-3 border-primary/25 hover:border-primary/50"
                >
                  <Bot size={18} className="text-primary" /> See Live Flow
                </a>
              </div>
            </div>

            <div className="space-y-4">
              {automationHighlights.map((item, index) => (
                <div
                  key={item.title}
                  className="bg-background/65 border border-white/10 rounded-2xl p-5 backdrop-blur-md animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/12 border border-primary/25 flex items-center justify-center flex-shrink-0">
                      <item.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-accent-secondary">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
              <p className="terminal-text text-xs uppercase tracking-[0.18em] text-primary/80 px-1">
                Holi Offer: 14 days free trial from onboarding date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

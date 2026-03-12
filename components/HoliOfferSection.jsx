import {
  ArrowRight,
  Bot,
  CalendarClock,
  Megaphone,
  MessageSquareText,
  Share2,
  Sparkles,
  Workflow,
} from "lucide-react";

const automationHighlights = [
  {
    icon: MessageSquareText,
    title: "Fast Lead Response",
    description: "Auto-reply to new leads in seconds with first-touch messages tailored to your service.",
  },
  {
    icon: Workflow,
    title: "CRM + Pipeline Sync",
    description: "Push inquiries into your CRM and keep follow-up stages updated without manual chasing.",
  },
  {
    icon: Share2,
    title: "Facebook + Instagram Automation",
    description: "Capture and nurture leads from social inbox conversations without manual switching.",
  },
  {
    icon: Megaphone,
    title: "Meta Ads to CRM Tracking",
    description: "Run Meta lead campaigns and route every form or message into the right pipeline.",
  },
  {
    icon: CalendarClock,
    title: "Follow-Up + Booking",
    description: "Trigger reminders, revive inactive leads, and confirm appointment slots automatically.",
  },
];

const accentOrbs = [
  {
    position: "top-8 right-6 md:top-10 md:right-12",
    colors: "from-primary/30 to-cyan-400/20",
    delay: "0.1s",
  },
  {
    position: "bottom-10 right-4 md:bottom-12 md:right-10",
    colors: "from-amber-300/25 to-primary/15",
    delay: "0.8s",
  },
  {
    position: "top-14 left-4 md:top-16 md:left-10",
    colors: "from-cyan-300/25 to-primary/10",
    delay: "0.4s",
  },
  {
    position: "bottom-4 left-8 md:bottom-10 md:left-14",
    colors: "from-primary/25 to-emerald-300/20",
    delay: "1.2s",
  },
];

export default function HoliOfferSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-12 left-6 md:left-20 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute top-8 right-6 md:right-20 h-48 w-48 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute -bottom-16 left-1/3 h-52 w-52 rounded-full bg-amber-300/10 blur-3xl" />
        <div className="absolute bottom-2 right-1/4 h-36 w-36 rounded-full bg-primary/15 blur-3xl" />
      </div>

      <div className="container-narrow relative z-10">
        <div className="system-card rounded-3xl p-6 md:p-10 lg:p-12 border-primary/25 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_15%_20%,rgba(53,184,255,0.18),transparent_38%),radial-gradient(circle_at_85%_15%,rgba(255,204,84,0.12),transparent_40%),radial-gradient(circle_at_30%_85%,rgba(18,99,168,0.16),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.12),transparent_40%)]" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-8 right-[28%] h-14 w-14 rounded-full border border-primary/25 animate-pulse hidden md:block" />
            <div className="absolute bottom-12 left-[30%] h-16 w-16 rounded-full border border-cyan-300/20 animate-pulse hidden md:block" />
            {accentOrbs.map((orb, index) => (
              <div key={`orb-${index}`} className={`absolute ${orb.position}`}>
                <div
                  className={`h-16 w-16 md:h-20 md:w-20 rounded-full bg-gradient-to-br ${orb.colors} blur-xl animate-float`}
                  style={{ animationDelay: orb.delay }}
                >
                  <span className="absolute inset-0 rounded-full border border-white/10" />
                </div>
              </div>
            ))}
          </div>

          <div className="relative grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-background/55 px-4 py-1.5 text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-primary/90">
                <Sparkles size={14} /> Limited-Time Discount Offer
              </span>

              <h2 className="mt-5 text-3xl md:text-5xl font-heading font-bold leading-tight text-balance">
                Start With an <span className="gradient-text">Introductory Discount</span> on Your
                <span className="text-[#ffd43b]"> Automation Setup</span>
              </h2>

              <p className="mt-4 text-base md:text-lg text-accent-secondary max-w-2xl">
                We set up your WhatsApp, Facebook, and Instagram automation plus CRM syncing, Meta
                ad lead routing, and follow-up workflows with reduced onboarding pricing for new
                projects so you can launch faster without compromising the system.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 max-w-2xl">
                <div className="rounded-2xl border border-white/10 bg-background/55 px-4 py-4 backdrop-blur-sm">
                  <p className="terminal-text text-[10px] uppercase tracking-[0.2em] text-primary/75">
                    Applies To
                  </p>
                  <p className="mt-2 font-heading text-lg font-semibold text-foreground">
                    New automation, Meta ads, and website + growth-system builds
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-background/55 px-4 py-4 backdrop-blur-sm">
                  <p className="terminal-text text-[10px] uppercase tracking-[0.2em] text-primary/75">
                    Best Fit
                  </p>
                  <p className="mt-2 font-heading text-lg font-semibold text-foreground">
                    Teams that want faster lead handling from day one
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="gradient-btn inline-flex items-center gap-2 rounded-xl px-6 py-3"
                >
                  Get Offer Details <ArrowRight size={18} />
                </a>
                <a
                  href="https://wa.me/918708767499?text=Hi%20AlgoAura,%20I%20want%20details%20about%20your%20discount%20offer%20for%20Meta%20ads%20and%20automation%20setup."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card inline-flex items-center gap-2 rounded-xl px-6 py-3 border-primary/25 hover:border-primary/50"
                >
                  <Bot size={18} className="text-primary" /> Talk on WhatsApp
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
                Discount applies to new projects across CRM, social automation, Meta ads, and integrations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

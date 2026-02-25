import { Building2, CalendarClock, MapPinned, Navigation } from "lucide-react";

const officeMapUrl = "https://maps.app.goo.gl/AW5grbVnSfvEQB3f9";

export default function LocationSection({ compact = false }) {
  return (
    <section className={compact ? "section-padding pt-0" : "section-padding bg-secondary/20"}>
      <div className="container-narrow">
        <div className="system-card p-7 md:p-8">
          <span className="terminal-text text-primary text-xs uppercase tracking-wider inline-flex items-center gap-2">
            <MapPinned size={14} /> Office Location
          </span>
          <h2 className="text-2xl md:text-3xl font-heading font-bold mt-3">
            Meet <span className="gradient-text">AlgoAura</span> at Our Office
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            Visit our office location or open directions instantly in Google Maps. We serve global
            clients with online execution and scheduled strategy meetings.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="glass-card p-4 rounded-xl">
              <p className="terminal-text text-[10px] text-primary uppercase tracking-wide inline-flex items-center gap-1.5">
                <Building2 size={12} /> Office
              </p>
              <p className="text-muted-foreground text-sm mt-2">AlgoAura Operations Desk</p>
            </div>
            <div className="glass-card p-4 rounded-xl">
              <p className="terminal-text text-[10px] text-primary uppercase tracking-wide inline-flex items-center gap-1.5">
                <CalendarClock size={12} /> Meeting Type
              </p>
              <p className="text-muted-foreground text-sm mt-2">By appointment and strategy calls</p>
            </div>
            <div className="glass-card p-4 rounded-xl">
              <p className="terminal-text text-[10px] text-primary uppercase tracking-wide inline-flex items-center gap-1.5">
                <Navigation size={12} /> Directions
              </p>
              <a
                href={officeMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm mt-2 inline-flex text-primary hover:text-primary/80 transition-colors"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Cog, Globe, Mail, MapPin, Target } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4 md:px-8">
      <div className="container-narrow">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <a href="/" className="inline-flex items-center mb-3">
              <img
                src="/algoaura_logo-320.webp"
                srcSet="/algoaura_logo-220.webp 220w, /algoaura_logo-320.webp 320w, /algoaura_logo-420.webp 420w, /algoaura_logo-520.webp 520w, /algoaura_logo-640.webp 640w"
                sizes="(max-width: 768px) 220px, (max-width: 1280px) 260px, 294px"
                alt="AlgoAura"
                width={900}
                height={600}
                loading="lazy"
                decoding="async"
                className="h-32 w-auto object-contain"
              />
            </a>
            <p className="text-muted-foreground text-base leading-relaxed terminal-text">
              The Automation Control Room. We build systems that generate leads on autopilot.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-3 terminal-text text-base">
              Growth Modules
            </h4>
            <ul className="space-y-2 text-base text-muted-foreground">
              <li className="flex items-center gap-2">
                <Globe size={14} className="text-primary/50" /> Web Development Engine
              </li>
              <li className="flex items-center gap-2">
                <Cog size={14} className="text-primary/50" /> Automation Core
              </li>
              <li className="flex items-center gap-2">
                <Target size={14} className="text-primary/50" /> Lead Acquisition
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-3 terminal-text text-base">Navigation</h4>
            <ul className="space-y-2 text-base text-muted-foreground">
              <li>
                <a href="/about" className="hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-foreground transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/portfolio" className="hover:text-foreground transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/modules" className="hover:text-foreground transition-colors">
                  Modules
                </a>
              </li>
              <li>
                <a href="/protocol" className="hover:text-foreground transition-colors">
                  Protocol
                </a>
              </li>
              <li>
                <a href="/reports" className="hover:text-foreground transition-colors">
                  Reports
                </a>
              </li>
              <li>
                <a href="/logs" className="hover:text-foreground transition-colors">
                  Logs
                </a>
              </li>
              <li>
                <a href="/access" className="hover:text-foreground transition-colors">
                  Access
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-3 terminal-text text-base">Connect</h4>
            <ul className="space-y-2 text-base text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-primary/50" /> hello@algoaura.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-primary/50" /> Serving Worldwide
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground terminal-text">
            {`(c) ${new Date().getFullYear()} AlgoAura. All systems operational.`}
          </p>
          <div className="flex gap-4">
            <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors text-xs">
              Privacy
            </a>
            <a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors text-xs">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Cog, Globe, Mail, MapPin, Target } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4 md:px-8">
      <div className="container-narrow">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <Link href="/" className="inline-flex items-center mb-3">
              <Image
                src="/algoaura_logo.webp"
                alt="AlgoAura"
                width={900}
                height={600}
                quality={60}
                sizes="(max-width: 768px) 220px, 260px"
                className="h-32 w-auto object-contain"
              />
            </Link>
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
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-foreground transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/modules" className="hover:text-foreground transition-colors">
                  Modules
                </Link>
              </li>
              <li>
                <Link href="/protocol" className="hover:text-foreground transition-colors">
                  Protocol
                </Link>
              </li>
              <li>
                <Link href="/reports" className="hover:text-foreground transition-colors">
                  Reports
                </Link>
              </li>
              <li>
                <Link href="/logs" className="hover:text-foreground transition-colors">
                  Logs
                </Link>
              </li>
              <li>
                <Link href="/access" className="hover:text-foreground transition-colors">
                  Access
                </Link>
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
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors text-xs">
              Privacy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors text-xs">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

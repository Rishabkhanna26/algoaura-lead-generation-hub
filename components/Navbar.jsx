"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({ hideLinks = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const pathname = usePathname();
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    setOpen(false);
    setNavVisible(true);

    const y = window.scrollY;
    setScrolled(y > 20);
    lastScrollYRef.current = y;
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const nextScrolled = currentY > 20;
      setScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));

      if (open) {
        setNavVisible(true);
        lastScrollYRef.current = currentY;
        return;
      }

      if (currentY <= 96) {
        setNavVisible(true);
        lastScrollYRef.current = currentY;
        return;
      }

      const previousY = lastScrollYRef.current;
      const deltaY = currentY - previousY;

      if (deltaY <= -4) {
        // Show navbar on meaningful upward scroll.
        setNavVisible(true);
      } else if (deltaY >= 4) {
        // Hide navbar on meaningful downward scroll.
        setNavVisible(false);
      }

      lastScrollYRef.current = currentY;
    };

    lastScrollYRef.current = window.scrollY;
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [open, pathname]);

  useEffect(() => {
    if (open) {
      setNavVisible(true);
    }
  }, [open]);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersLight = document.documentElement.classList.contains("light");
    const initialTheme =
      savedTheme === "light" ? "light" : savedTheme === "dark" ? "dark" : prefersLight ? "light" : "dark";

    document.documentElement.classList.toggle("light", initialTheme === "light");
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("light", nextTheme === "light");
      window.localStorage.setItem("theme", nextTheme);
      return nextTheme;
    });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[70] transition-transform transition-colors duration-300 ${
        navVisible ? "translate-y-0 pointer-events-auto" : "-translate-y-full pointer-events-none"
      } ${
        scrolled ? "glass-card border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="container-narrow flex items-center justify-between h-28 md:h-32 px-4 md:px-6">
        <Link href="/" className="inline-flex items-center">
          <img
            src="/algoaura_logo-320.webp"
            srcSet="/algoaura_logo-220.webp 220w, /algoaura_logo-320.webp 320w, /algoaura_logo-420.webp 420w, /algoaura_logo-520.webp 520w, /algoaura_logo-640.webp 640w"
            sizes="(max-width: 768px) 220px, (max-width: 1280px) 260px, 294px"
            alt="AlgoAura"
            width={900}
            height={600}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="h-28 md:h-32 w-auto object-contain"
          />
        </Link>

        {hideLinks ? (
          <div className="hidden md:flex items-center">
            <Link href="/contact" className="gradient-btn px-5 py-2 rounded-lg text-sm">
              Book Consultation
            </Link>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-6 lg:gap-8 pr-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors terminal-text ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={toggleTheme}
              className="glass-card p-2 rounded-lg hover:border-primary/40 transition-colors"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              title={theme === "dark" ? "Light mode" : "Dark mode"}
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <Link href="/contact" className="gradient-btn px-5 py-2 rounded-lg text-sm">
              Book Consultation
            </Link>
          </div>
        )}

        {hideLinks ? (
          <Link href="/contact" className="md:hidden gradient-btn px-4 py-2 rounded-lg text-xs">
            Book
          </Link>
        ) : (
          <button
            type="button"
            className="md:hidden text-foreground"
            onClick={() => setOpen((current) => !current)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>

      {!hideLinks && open && (
        <div className="md:hidden glass-card border-t border-white/5 mx-2 mb-2 rounded-xl px-4 pb-6 pt-3 animate-fade-up">
          <button
            type="button"
            onClick={toggleTheme}
            className="glass-card p-2 rounded-lg hover:border-primary/40 transition-colors mb-3"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block py-3 transition-colors terminal-text ${
                pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="gradient-btn inline-block mt-2 px-5 py-2 rounded-lg text-sm"
          >
            Book Consultation
          </Link>
        </div>
      )}
    </nav>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Moon, Sun, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const pathname = usePathname();
  const scrollRafRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (scrollRafRef.current) return;

      scrollRafRef.current = window.requestAnimationFrame(() => {
        scrollRafRef.current = null;
        const nextScrolled = window.scrollY > 20;
        setScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollRafRef.current) {
        window.cancelAnimationFrame(scrollRafRef.current);
      }
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="container-narrow flex items-center justify-between h-28 md:h-32 px-4 md:px-6">
        <Link href="/" className="inline-flex items-center">
          <Image
            src="/algoaura_logo.webp"
            alt="AlgoAura"
            width={900}
            height={600}
            priority
            quality={60}
            sizes="(max-width: 768px) 220px, 260px"
            className="h-28 md:h-32 w-auto object-contain"
          />
        </Link>

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
            Initialize
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden text-foreground"
          onClick={() => setOpen((current) => !current)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
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
            Initialize
          </Link>
        </div>
      )}
    </nav>
  );
}

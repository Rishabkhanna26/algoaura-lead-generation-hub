"use client";

import { memo, useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, Eye } from "lucide-react";

const WorldMapCanvas = dynamic(() => import("./WorldMapCanvas"), { ssr: false });

const bootLines = [
  "Initializing Growth Engine...",
  "Connecting Automation Layers...",
  "Optimizing Conversion Pipeline...",
  "System Online ✅",
];

const heroTypedLines = [
  "Generate Leads on Autopilot",
  "Build Your Business Online",
  "Automate Follow-Ups 24/7",
  "Scale with Smart Funnels",
];
const longestHeroTypedLine = heroTypedLines.reduce(
  (longest, line) => (line.length > longest.length ? line : longest),
  "",
);

const TerminalBoot = memo(function TerminalBoot() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState([]);

  useEffect(() => {
    if (lineIndex >= bootLines.length) return;

    const currentLine = bootLines[lineIndex];
    if (charIndex < currentLine.length) {
      const timer = window.setTimeout(() => setCharIndex((value) => value + 1), 30);
      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(() => {
      setDisplayedLines((previous) => [...previous, currentLine]);
      setLineIndex((value) => value + 1);
      setCharIndex(0);
    }, 400);

    return () => window.clearTimeout(timer);
  }, [lineIndex, charIndex]);

  const currentTyping =
    lineIndex < bootLines.length ? bootLines[lineIndex].slice(0, charIndex) : "";

  return (
    <div className="terminal-text text-xs md:text-sm text-muted-foreground mb-8 text-left max-w-md mx-auto animate-fade-up">
      <div className="glass-card p-4 rounded-lg border border-primary/10">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-success/40" />
          <span className="text-muted-foreground/50 text-[10px] ml-2">algoaura.sys</span>
        </div>
        {displayedLines.map((line, index) => (
          <div key={`${line}-${index}`} className="text-success/80">
            <span className="text-primary/50">{">"}</span> {line}
          </div>
        ))}
        {lineIndex < bootLines.length && (
          <div>
            <span className="text-primary/50">{">"}</span>{" "}
            <span className="text-foreground/70">{currentTyping}</span>
            <span className="border-r-2 border-primary animate-typing-cursor ml-0.5">&nbsp;</span>
          </div>
        )}
      </div>
    </div>
  );
});

const TypingHeadline = memo(function TypingHeadline() {
  const [typedLineIndex, setTypedLineIndex] = useState(0);
  const [typedLine, setTypedLine] = useState("");
  const [isDeletingTypedLine, setIsDeletingTypedLine] = useState(false);

  useEffect(() => {
    const currentLine = heroTypedLines[typedLineIndex];
    const typingSpeed = isDeletingTypedLine ? 45 : 70;

    let timer;
    if (!isDeletingTypedLine && typedLine === currentLine) {
      timer = window.setTimeout(() => setIsDeletingTypedLine(true), 1200);
    } else if (isDeletingTypedLine && typedLine === "") {
      timer = window.setTimeout(() => {
        setIsDeletingTypedLine(false);
        setTypedLineIndex((index) => (index + 1) % heroTypedLines.length);
      }, 180);
    } else {
      timer = window.setTimeout(() => {
        const nextLength = typedLine.length + (isDeletingTypedLine ? -1 : 1);
        setTypedLine(currentLine.slice(0, nextLength));
      }, typingSpeed);
    }

    return () => window.clearTimeout(timer);
  }, [typedLine, typedLineIndex, isDeletingTypedLine]);

  return (
    <span className="mt-2 grid place-items-center leading-[1.26] w-full lg:min-h-[2.45em] py-[0.2em]">
      <span className="invisible col-start-1 row-start-1 block w-full text-center leading-[1.26] py-[0.12em]">
        {"{"}
        {longestHeroTypedLine}
        {"}"}
      </span>
      <span className="col-start-1 row-start-1 inline-flex w-full items-center justify-center gap-1 text-center">
        <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-400 font-bold leading-[1.26] py-[0.12em] px-[0.04em]">
          {"{"}
          {typedLine}
          {"}"}
        </span>
        <span className="inline-block h-[1.16em] border-r-2 border-primary animate-typing-cursor" />
      </span>
    </span>
  );
});

export default function Hero() {
  const [showWorldMap, setShowWorldMap] = useState(false);

  useEffect(() => {
    let timeoutId;
    let idleId;

    const enableMap = () => setShowWorldMap(true);

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(enableMap, { timeout: 1200 });
    } else {
      timeoutId = window.setTimeout(enableMap, 650);
    }

    return () => {
      if (idleId && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-x-hidden">
      {showWorldMap ? <WorldMapCanvas /> : null}
      <div className="absolute inset-0 grid-bg opacity-30 z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/35 to-background/80 pointer-events-none z-[2]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/12 blur-[140px] pointer-events-none z-[2]" />

      <div className="relative z-10 container-narrow text-center px-4 pt-28 md:pt-32 pb-8 md:pb-12">
        <TerminalBoot />

        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight text-balance mb-8 animate-fade-up"
          style={{ animationDelay: "0.18s" }}
        >
          We Build Systems That <br />
          <TypingHeadline />
        </h1>

        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance animate-fade-up"
          style={{ animationDelay: "0.32s" }}
        >
          From custom websites to automated CRMs and sales funnels - we help startups and
          businesses scale with <span className="highlight-word text-primary">smart systems</span>{" "}
          that work 24/7.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
          style={{ animationDelay: "0.44s" }}
        >
          <Link
            href="/contact"
            className="gradient-btn px-8 py-3.5 rounded-xl text-base flex items-center justify-center gap-2 animate-pulse-glow"
          >
            Launch Your Growth System <ArrowRight size={18} />
          </Link>
          <Link
            href="/services"
            className="glass-card px-8 py-3.5 rounded-xl text-base text-foreground hover:border-primary/30 transition-all flex items-center justify-center gap-2"
          >
            <Eye size={16} /> View Architecture
          </Link>
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
              <p className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

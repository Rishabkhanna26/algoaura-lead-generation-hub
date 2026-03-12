"use client";

import { memo, useEffect, useState } from "react";

const bootLines = [
  "Initializing Growth Engine...",
  "Connecting Automation Layers...",
  "Optimizing Conversion Pipeline...",
  "System Online ✅",
];

const HeroTerminalBoot = memo(function HeroTerminalBoot() {
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
  const placeholderLines = Math.max(
    0,
    bootLines.length - displayedLines.length - (lineIndex < bootLines.length ? 1 : 0),
  );

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
        {Array.from({ length: placeholderLines }).map((_, index) => (
          <div key={`placeholder-${index}`} className="opacity-0 select-none" aria-hidden="true">
            <span className="text-primary/50">{">"}</span> reserve
          </div>
        ))}
      </div>
    </div>
  );
});

export default HeroTerminalBoot;

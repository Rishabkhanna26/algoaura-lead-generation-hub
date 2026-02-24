"use client";

import { useEffect, useMemo, useState } from "react";

const lines = [
  "Initializing AlgoAura Core...",
  "Loading Growth Modules...",
  "Connecting Automation Layers...",
  "System Ready.",
];

function seededRandom(seed) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

const hexCells = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: `${(seededRandom(i + 1) * 100).toFixed(4)}%`,
  top: `${(seededRandom(i + 31) * 100).toFixed(4)}%`,
  delay: `${(seededRandom(i + 61) * 2).toFixed(3)}s`,
}));

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return Math.min(100, prev + 2);
      });
    }, 50);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 25 && currentLine < 1) setCurrentLine(1);
    if (progress >= 55 && currentLine < 2) setCurrentLine(2);
    if (progress >= 85 && currentLine < 3) setCurrentLine(3);
    if (progress >= 100 && !isExiting) {
      setIsExiting(true);
    }
  }, [progress, currentLine, isExiting]);

  useEffect(() => {
    if (!isExiting) return;

    const completeTimer = window.setTimeout(() => {
      setHidden(true);
      onComplete();
    }, 600);

    return () => window.clearTimeout(completeTimer);
  }, [isExiting, onComplete]);

  const visibleLines = useMemo(
    () => lines.slice(0, currentLine + 1),
    [currentLine],
  );

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex items-center justify-center transition-all duration-500 ${
        isExiting ? "opacity-0 scale-[1.05] pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {hexCells.map((cell) => (
          <div
            key={cell.id}
            className="absolute w-16 h-16 border border-primary/30 rotate-45 loader-hex-fade"
            style={{
              left: cell.left,
              top: cell.top,
              animationDelay: cell.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 px-6">
        <div className="relative w-28 h-28 flex items-center justify-center">
          <svg
            className="absolute inset-0 w-full h-full loader-spin-cw"
            viewBox="0 0 120 120"
          >
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="hsl(25 100% 50%)"
              strokeWidth="1.5"
              strokeDasharray="20 10 5 10"
              opacity={0.4}
            />
          </svg>

          <svg
            className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] loader-spin-ccw"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="44"
              fill="none"
              stroke="hsl(25 100% 50%)"
              strokeWidth="2"
              strokeDasharray={`${progress * 2.76} 276`}
              strokeLinecap="round"
              className="transition-all duration-100"
            />
          </svg>

          <span className="terminal-text text-2xl font-bold text-primary">
            {progress}
          </span>
        </div>

        <h1 className="text-2xl font-heading font-bold opacity-100 translate-y-0 transition-all duration-500">
          Algo<span className="gradient-text">Aura</span>
        </h1>

        <div className="w-72 md:w-80 space-y-1.5 min-h-[7.25rem]">
          {visibleLines.map((line, i) => (
            <div
              key={line}
              className="flex items-center gap-2 terminal-text text-xs opacity-100 translate-x-0 transition-all duration-300"
            >
              <span className={i <= currentLine - 1 ? "text-[hsl(var(--success))]" : "text-primary"}>
                {i <= currentLine - 1 ? "✔" : "▸"}
              </span>
              <span className="text-muted-foreground">{line}</span>
            </div>
          ))}
        </div>

        <div className="w-72 md:w-80 h-1 bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-[width] duration-100"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, hsl(25 100% 50%), hsl(35 100% 55%))",
              boxShadow: "0 0 12px hsl(25 100% 50% / 0.6)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

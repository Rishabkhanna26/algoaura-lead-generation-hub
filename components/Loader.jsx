"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  delay: seededRandom(i + 61) * 2,
}));

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 25);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 25 && currentLine < 1) setCurrentLine(1);
    if (progress >= 55 && currentLine < 2) setCurrentLine(2);
    if (progress >= 85 && currentLine < 3) setCurrentLine(3);
    if (progress >= 100 && !done) {
      setDone(true);
      setTimeout(onComplete, 600);
    }
  }, [progress, currentLine, done, onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
        >
          <div className="absolute inset-0 overflow-hidden opacity-10">
            {hexCells.map((cell) => (
              <motion.div
                key={cell.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 2, delay: cell.delay, repeat: Infinity }}
                className="absolute w-16 h-16 border border-primary/30 rotate-45"
                style={{
                  left: cell.left,
                  top: cell.top,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center gap-8 px-6">
            <div className="relative w-28 h-28 flex items-center justify-center">
              <motion.svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 120 120"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
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
              </motion.svg>

              <motion.svg
                className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)]"
                viewBox="0 0 100 100"
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
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
              </motion.svg>

              <span className="terminal-text text-2xl font-bold text-primary">{progress}</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-heading font-bold"
            >
              Algo<span className="gradient-text">Aura</span>
            </motion.h1>

            <div className="w-72 md:w-80 space-y-1.5">
              {lines.slice(0, currentLine + 1).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2 terminal-text text-xs"
                >
                  <span className={i <= currentLine - 1 ? "text-[hsl(var(--success))]" : "text-primary"}>
                    {i <= currentLine - 1 ? "✔" : "▸"}
                  </span>
                  <span className="text-muted-foreground">{line}</span>
                </motion.div>
              ))}
            </div>

            <div className="w-72 md:w-80 h-1 bg-secondary rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, hsl(25 100% 50%), hsl(35 100% 55%))",
                  boxShadow: "0 0 12px hsl(25 100% 50% / 0.6)",
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;

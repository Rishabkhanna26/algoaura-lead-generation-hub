"use client";

import { memo, useEffect, useState } from "react";

const heroTypedLines = [
  "for Growing Businesses",
  "with CRM + WhatsApp Automation",
  "with Booking and Lead Tracking",
  "that Convert Visitors into Leads",
];

const longestHeroTypedLine = heroTypedLines.reduce(
  (longest, line) => (line.length > longest.length ? line : longest),
  "",
);

const HeroTypingHeadline = memo(function HeroTypingHeadline() {
  const [typedLineIndex, setTypedLineIndex] = useState(0);
  const [typedLine, setTypedLine] = useState("");
  const [isDeletingTypedLine, setIsDeletingTypedLine] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(true);

  useEffect(() => {
    const onVisibilityChange = () => {
      setIsPageVisible(!document.hidden);
    };

    onVisibilityChange();
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (!isPageVisible) return;

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
  }, [typedLine, typedLineIndex, isDeletingTypedLine, isPageVisible]);

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

export default HeroTypingHeadline;

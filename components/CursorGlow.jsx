"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef(null);
  const frameRef = useRef(null);
  const targetRef = useRef({ x: -1000, y: -1000 });
  const isLightThemeRef = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let themeObserver;

    const applyThemeGlow = () => {
      const glow = glowRef.current;
      if (!glow) return;
      const isLightTheme = document.documentElement.classList.contains("light");
      isLightThemeRef.current = isLightTheme;
      glow.style.opacity = isLightTheme ? "0" : "1";
      glow.style.background = isLightTheme
        ? "radial-gradient(circle, hsla(214,18%,45%,0.12) 0%, transparent 70%)"
        : "radial-gradient(circle, hsla(25,100%,50%,0.06) 0%, transparent 70%)";
    };

    applyThemeGlow();
    themeObserver = new MutationObserver(applyThemeGlow);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const handleMouseMove = (event) => {
      if (isLightThemeRef.current) return;
      targetRef.current = { x: event.clientX, y: event.clientY };

      if (frameRef.current) return;
      frameRef.current = requestAnimationFrame(() => {
        const glow = glowRef.current;
        if (glow) {
          glow.style.transform = `translate3d(${targetRef.current.x - 150}px, ${targetRef.current.y - 150}px, 0)`;
        }
        frameRef.current = null;
      });
    };

    window.addEventListener("pointermove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handleMouseMove);
      themeObserver?.disconnect();
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed pointer-events-none z-50 hidden md:block"
      style={{
        width: 300,
        height: 300,
        background: "radial-gradient(circle, hsla(25,100%,50%,0.06) 0%, transparent 70%)",
        transform: "translate3d(-1000px, -1000px, 0)",
        opacity: 1,
        transition: "transform 0.1s ease-out",
        willChange: "transform",
      }}
    />
  );
}

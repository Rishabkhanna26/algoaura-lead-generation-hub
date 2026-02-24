"use client";

import { useEffect, useRef } from "react";

export default function GridBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;
    let resizeFrame;
    let particles = [];
    let lastFrameTime = 0;
    let isActive = true;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const isMobileViewport = () => window.innerWidth < 768;
    const getParticleCount = () => (isMobileViewport() ? 10 : 18);
    const getFrameInterval = () => (isMobileViewport() ? 1000 / 14 : 1000 / 22);
    const getDpr = () => Math.min(window.devicePixelRatio || 1, isMobileViewport() ? 1 : 1.25);

    const resize = () => {
      const dpr = getDpr();
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    const init = () => {
      resize();
      particles = Array.from({ length: getParticleCount() }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: 1 + Math.random() * 2,
        opacity: 0.2 + Math.random() * 0.4,
      }));
    };

    const draw = (timestamp = 0) => {
      animId = requestAnimationFrame(draw);
      if (prefersReducedMotion || !isActive || document.hidden) return;
      if (timestamp - lastFrameTime < getFrameInterval()) return;
      lastFrameTime = timestamp;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (const particle of particles) {
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 8,
        );
        gradient.addColorStop(0, `hsla(25, 100%, 55%, ${particle.opacity * 0.5})`);
        gradient.addColorStop(1, "hsla(25, 100%, 50%, 0)");

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 8, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(25, 100%, 60%, ${particle.opacity})`;
        ctx.fill();

        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1;
        if (particle.y < 0 || particle.y > window.innerHeight) particle.vy *= -1;
      }

    };

    init();
    animId = requestAnimationFrame(draw);

    const handleVisibility = () => {
      isActive = !document.hidden;
      if (isActive) init();
    };

    const handleResize = () => {
      if (resizeFrame) window.cancelAnimationFrame(resizeFrame);
      resizeFrame = window.requestAnimationFrame(init);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("visibilitychange", handleVisibility);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("visibilitychange", handleVisibility);
      if (resizeFrame) window.cancelAnimationFrame(resizeFrame);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}

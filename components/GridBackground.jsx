"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const ICON_TYPES = [
  "browser",
  "code",
  "automation",
  "database",
  "cloud",
  "bot",
  "globe",
  "workflow",
];

function drawRoundedRect(ctx, x, y, width, height, radius) {
  const right = x + width;
  const bottom = y + height;
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(right - radius, y);
  ctx.quadraticCurveTo(right, y, right, y + radius);
  ctx.lineTo(right, bottom - radius);
  ctx.quadraticCurveTo(right, bottom, right - radius, bottom);
  ctx.lineTo(x + radius, bottom);
  ctx.quadraticCurveTo(x, bottom, x, bottom - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function drawIconGlyph(ctx, type, size, palette, phase) {
  const s = size;
  const stroke = () => {
    ctx.strokeStyle = palette.iconColor;
    ctx.lineWidth = Math.max(1, s * 0.11);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
  };

  if (type === "browser") {
    stroke();
    drawRoundedRect(ctx, -s * 0.95, -s * 0.7, s * 1.9, s * 1.36, s * 0.22);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-s * 0.95, -s * 0.3);
    ctx.lineTo(s * 0.95, -s * 0.3);
    ctx.stroke();

    ctx.fillStyle = palette.iconAccent;
    for (let i = 0; i < 3; i += 1) {
      ctx.beginPath();
      ctx.arc(-s * 0.65 + i * s * 0.35, -s * 0.5, s * 0.08, 0, Math.PI * 2);
      ctx.fill();
    }
    return;
  }

  if (type === "code") {
    stroke();
    ctx.beginPath();
    ctx.moveTo(-s * 0.72, 0);
    ctx.lineTo(-s * 0.36, -s * 0.34);
    ctx.moveTo(-s * 0.72, 0);
    ctx.lineTo(-s * 0.36, s * 0.34);
    ctx.moveTo(s * 0.72, 0);
    ctx.lineTo(s * 0.36, -s * 0.34);
    ctx.moveTo(s * 0.72, 0);
    ctx.lineTo(s * 0.36, s * 0.34);
    ctx.moveTo(-s * 0.08, s * 0.45);
    ctx.lineTo(s * 0.14, -s * 0.45);
    ctx.stroke();
    return;
  }

  if (type === "automation") {
    stroke();
    const nodes = [
      [-s * 0.52, -s * 0.22],
      [0, s * 0.32],
      [s * 0.52, -s * 0.2],
    ];
    ctx.beginPath();
    ctx.moveTo(nodes[0][0], nodes[0][1]);
    ctx.lineTo(nodes[1][0], nodes[1][1]);
    ctx.lineTo(nodes[2][0], nodes[2][1]);
    ctx.stroke();

    ctx.fillStyle = palette.iconAccent;
    for (const [x, y] of nodes) {
      ctx.beginPath();
      ctx.arc(x, y, s * 0.13, 0, Math.PI * 2);
      ctx.fill();
    }
    return;
  }

  if (type === "database") {
    stroke();
    ctx.beginPath();
    ctx.ellipse(0, -s * 0.35, s * 0.55, s * 0.2, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-s * 0.55, -s * 0.35);
    ctx.lineTo(-s * 0.55, s * 0.42);
    ctx.moveTo(s * 0.55, -s * 0.35);
    ctx.lineTo(s * 0.55, s * 0.42);
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(0, s * 0.42, s * 0.55, s * 0.2, 0, 0, Math.PI);
    ctx.stroke();
    return;
  }

  if (type === "cloud") {
    stroke();
    ctx.beginPath();
    ctx.moveTo(-s * 0.72, s * 0.22);
    ctx.bezierCurveTo(-s * 0.84, -s * 0.06, -s * 0.56, -s * 0.32, -s * 0.26, -s * 0.24);
    ctx.bezierCurveTo(-s * 0.18, -s * 0.54, s * 0.28, -s * 0.54, s * 0.4, -s * 0.26);
    ctx.bezierCurveTo(s * 0.7, -s * 0.3, s * 0.92, -s * 0.02, s * 0.72, s * 0.22);
    ctx.closePath();
    ctx.stroke();
    return;
  }

  if (type === "bot") {
    stroke();
    drawRoundedRect(ctx, -s * 0.58, -s * 0.45, s * 1.16, s * 0.9, s * 0.17);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, -s * 0.45);
    ctx.lineTo(0, -s * 0.72);
    ctx.stroke();
    ctx.fillStyle = palette.iconAccent;
    ctx.beginPath();
    ctx.arc(0, -s * 0.78, s * 0.08, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(-s * 0.24, -s * 0.06, s * 0.1, 0, Math.PI * 2);
    ctx.arc(s * 0.24, -s * 0.06, s * 0.1, 0, Math.PI * 2);
    ctx.fill();
    return;
  }

  if (type === "globe") {
    stroke();
    ctx.beginPath();
    ctx.arc(0, 0, s * 0.62, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-s * 0.62, 0);
    ctx.lineTo(s * 0.62, 0);
    ctx.moveTo(0, -s * 0.62);
    ctx.lineTo(0, s * 0.62);
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(0, 0, s * 0.28, s * 0.62, 0, 0, Math.PI * 2);
    ctx.moveTo(-s * 0.62, 0);
    ctx.ellipse(0, 0, s * 0.62, s * 0.25, 0, 0, Math.PI * 2);
    ctx.stroke();
    return;
  }

  stroke();
  const wobble = Math.sin(phase * 0.7) * s * 0.04;
  drawRoundedRect(ctx, -s * 0.74, -s * 0.56, s * 0.42, s * 0.36, s * 0.08);
  drawRoundedRect(ctx, -s * 0.2, -s * 0.08 + wobble, s * 0.42, s * 0.36, s * 0.08);
  drawRoundedRect(ctx, s * 0.34, -s * 0.42, s * 0.42, s * 0.36, s * 0.08);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(-s * 0.32, -s * 0.38);
  ctx.lineTo(-s * 0.04, -s * 0.08 + wobble);
  ctx.moveTo(s * 0.22, -s * 0.08 + wobble);
  ctx.lineTo(s * 0.34, -s * 0.24);
  ctx.stroke();
}

export default function GridBackground() {
  const canvasRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;
    let resizeFrame;
    let themeObserver;
    let blobs = [];
    let iconNodes = [];
    let links = [];
    let lastFrameTime = 0;
    let isActive = true;
    let isLightTheme = document.documentElement.classList.contains("light");
    let heroMaskHeight = 0;
    let heroMaskDirty = true;
    let heroElement = null;
    let pointerTarget = { x: 0, y: 0 };
    let pointerCurrent = { x: 0, y: 0 };
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const isMobileViewport = () => window.innerWidth < 768;
    const getFrameInterval = () => (isMobileViewport() ? 1000 / 16 : 1000 / 24);
    const getDpr = () => Math.min(window.devicePixelRatio || 1, isMobileViewport() ? 1 : 1.2);

    const getPalette = () =>
      isLightTheme
        ? {
            canvasOpacity: 0.58,
            baseGradient: [
              "rgba(250, 252, 255, 0.8)",
              "rgba(240, 245, 252, 0.74)",
              "rgba(232, 238, 248, 0.72)",
            ],
            blobs: [
              { h: 214, s: 28, l: 78, a: 0.24 },
              { h: 206, s: 24, l: 82, a: 0.2 },
              { h: 224, s: 18, l: 84, a: 0.16 },
            ],
            linkColor: "hsla(212, 28%, 50%, 0.2)",
            linkSecondary: "hsla(210, 18%, 62%, 0.14)",
            pulseCore: "hsla(200, 92%, 46%, 0.9)",
            pulseGlow: "hsla(200, 96%, 52%, 0.34)",
            cardBg: "rgba(255, 255, 255, 0.78)",
            cardBorder: "rgba(100, 116, 139, 0.34)",
            cardShadow: "rgba(15, 23, 42, 0.1)",
            iconColor: "rgba(30, 41, 59, 0.86)",
            iconAccent: "rgba(2, 132, 199, 0.88)",
          }
        : {
            canvasOpacity: 0.72,
            baseGradient: [
              "rgba(6, 16, 32, 0.76)",
              "rgba(8, 22, 40, 0.72)",
              "rgba(10, 28, 46, 0.68)",
            ],
            blobs: [
              { h: 190, s: 88, l: 52, a: 0.2 },
              { h: 210, s: 70, l: 52, a: 0.16 },
              { h: 170, s: 70, l: 44, a: 0.13 },
            ],
            linkColor: "hsla(190, 90%, 62%, 0.26)",
            linkSecondary: "hsla(210, 54%, 62%, 0.2)",
            pulseCore: "hsla(191, 100%, 66%, 0.88)",
            pulseGlow: "hsla(191, 100%, 66%, 0.44)",
            cardBg: "rgba(9, 24, 44, 0.78)",
            cardBorder: "rgba(77, 197, 255, 0.52)",
            cardShadow: "rgba(77, 197, 255, 0.22)",
            iconColor: "rgba(228, 244, 255, 0.94)",
            iconAccent: "rgba(120, 220, 255, 0.96)",
          };

    const refreshHeroMask = () => {
      if (pathname !== "/") {
        heroMaskHeight = 0;
        heroElement = null;
        heroMaskDirty = false;
        return;
      }

      if (!heroElement || !document.body.contains(heroElement)) {
        heroElement = document.getElementById("home-hero");
      }
      if (!heroElement) {
        heroMaskHeight = 0;
        heroMaskDirty = true;
        return;
      }

      const rect = heroElement.getBoundingClientRect();
      heroMaskHeight = Math.max(0, Math.min(window.innerHeight, rect.bottom));
      heroMaskDirty = false;
    };

    const resize = () => {
      const dpr = getDpr();
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      heroMaskDirty = true;
      refreshHeroMask();
    };

    const buildBlobs = () => {
      const count = isMobileViewport() ? 3 : 5;
      const baseRadius = isMobileViewport() ? 220 : 320;
      const radiusVariance = isMobileViewport() ? 180 : 260;

      return Array.from({ length: count }, (_, index) => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: baseRadius + Math.random() * radiusVariance,
        driftX: 22 + Math.random() * 32,
        driftY: 18 + Math.random() * 30,
        speed: 0.42 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2 + index * 0.7,
        paletteIndex: index % 3,
        depth: 0.25 + Math.random() * 0.55,
      }));
    };

    const buildIconNodes = () => {
      const count = isMobileViewport() ? (isLightTheme ? 6 : 5) : isLightTheme ? 11 : 9;
      const minY = 36;
      const usableHeight = Math.max(120, window.innerHeight - minY - 30);

      return Array.from({ length: count }, (_, index) => ({
        type: ICON_TYPES[index % ICON_TYPES.length],
        baseX: 30 + Math.random() * Math.max(120, window.innerWidth - 60),
        baseY: minY + Math.random() * usableHeight,
        driftX: (isMobileViewport() ? 9 : 13) + Math.random() * (isMobileViewport() ? 7 : 14),
        driftY: (isMobileViewport() ? 7 : 10) + Math.random() * (isMobileViewport() ? 6 : 12),
        speed: 0.34 + Math.random() * 0.44,
        phase: Math.random() * Math.PI * 2 + index * 0.4,
        size: (isMobileViewport() ? 22 : 28) + Math.random() * (isMobileViewport() ? 8 : 12),
        depth: 0.45 + Math.random() * 0.55,
      }));
    };

    const buildLinks = (nodes) => {
      const sorted = nodes
        .map((node, idx) => ({ idx, x: node.baseX }))
        .sort((a, b) => a.x - b.x);
      const ordered = sorted.map((item) => item.idx);
      const generated = [];

      for (let i = 0; i < ordered.length - 1; i += 1) {
        generated.push({
          from: ordered[i],
          to: ordered[i + 1],
          speed: 0.09 + Math.random() * 0.08,
          phase: Math.random(),
          secondary: i % 2 === 1,
        });
        if (i + 3 < ordered.length && i % 2 === 0) {
          generated.push({
            from: ordered[i],
            to: ordered[i + 3],
            speed: 0.08 + Math.random() * 0.06,
            phase: Math.random(),
            secondary: true,
          });
        }
      }

      return generated;
    };

    const getNodePosition = (node, time, parallaxX, parallaxY) => ({
      x: node.baseX + Math.sin(time * node.speed + node.phase) * node.driftX + parallaxX * node.depth,
      y: node.baseY + Math.cos(time * node.speed * 0.9 + node.phase) * node.driftY + parallaxY * node.depth,
    });

    const init = () => {
      const palette = getPalette();
      canvas.style.opacity = String(palette.canvasOpacity);
      resize();
      blobs = buildBlobs();
      iconNodes = buildIconNodes();
      links = buildLinks(iconNodes);
    };

    const draw = (timestamp = 0) => {
      animId = requestAnimationFrame(draw);
      if (prefersReducedMotion || !isActive || document.hidden) return;
      if (timestamp - lastFrameTime < getFrameInterval()) return;
      lastFrameTime = timestamp;
      if (heroMaskDirty) refreshHeroMask();

      const width = window.innerWidth;
      const height = window.innerHeight;
      const palette = getPalette();
      const time = timestamp * 0.00034;

      if (!isCoarsePointer) {
        pointerCurrent.x += (pointerTarget.x - pointerCurrent.x) * 0.08;
        pointerCurrent.y += (pointerTarget.y - pointerCurrent.y) * 0.08;
      }

      const parallaxX = -pointerCurrent.x * (isLightTheme ? 28 : 20);
      const parallaxY = -pointerCurrent.y * (isLightTheme ? 22 : 16);

      ctx.clearRect(0, 0, width, height);

      let clippedForHero = false;
      if (heroMaskHeight > 0 && heroMaskHeight < height) {
        clippedForHero = true;
        ctx.save();
        ctx.beginPath();
        ctx.rect(0, heroMaskHeight, width, height - heroMaskHeight);
        ctx.clip();
      } else if (heroMaskHeight >= height) {
        return;
      }

      const base = ctx.createLinearGradient(0, 0, width, height);
      base.addColorStop(0, palette.baseGradient[0]);
      base.addColorStop(0.52, palette.baseGradient[1]);
      base.addColorStop(1, palette.baseGradient[2]);
      ctx.fillStyle = base;
      ctx.fillRect(0, 0, width, height);

      for (const blob of blobs) {
        const color = palette.blobs[blob.paletteIndex];
        const x = blob.x + Math.sin(time * blob.speed + blob.phase) * blob.driftX + parallaxX * blob.depth;
        const y = blob.y + Math.cos(time * blob.speed * 0.9 + blob.phase) * blob.driftY + parallaxY * blob.depth;
        const radius = blob.radius * (0.9 + Math.sin(time * 0.8 + blob.phase) * 0.08);

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, `hsla(${color.h}, ${color.s}%, ${color.l}%, ${color.a})`);
        gradient.addColorStop(1, `hsla(${color.h}, ${color.s}%, ${color.l}%, 0)`);

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      const nodePositions = iconNodes.map((node) => getNodePosition(node, time, parallaxX, parallaxY));

      ctx.lineWidth = isLightTheme ? 1.1 : 1;
      for (const link of links) {
        const from = nodePositions[link.from];
        const to = nodePositions[link.to];
        if (!from || !to) continue;

        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.strokeStyle = link.secondary ? palette.linkSecondary : palette.linkColor;
        ctx.stroke();

        const pulsePositions = link.secondary
          ? [(time * link.speed + link.phase) % 1]
          : [
              (time * link.speed + link.phase) % 1,
              (time * link.speed + link.phase + 0.5) % 1,
            ];

        for (const pulseT of pulsePositions) {
          const x = from.x + (to.x - from.x) * pulseT;
          const y = from.y + (to.y - from.y) * pulseT;
          const glow = ctx.createRadialGradient(x, y, 0, x, y, 9);
          glow.addColorStop(0, palette.pulseGlow);
          glow.addColorStop(1, "rgba(0,0,0,0)");

          ctx.beginPath();
          ctx.arc(x, y, 9, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(x, y, 1.9, 0, Math.PI * 2);
          ctx.fillStyle = palette.pulseCore;
          ctx.fill();
        }
      }

      for (let i = 0; i < iconNodes.length; i += 1) {
        const node = iconNodes[i];
        const position = nodePositions[i];
        if (!position) continue;

        const cardWidth = node.size * (isLightTheme ? 1.9 : 2.02);
        const cardHeight = node.size * (isLightTheme ? 1.55 : 1.64);
        const x = position.x - cardWidth * 0.5;
        const y = position.y - cardHeight * 0.5;

        if (!isLightTheme) {
          const glow = ctx.createRadialGradient(position.x, position.y, 0, position.x, position.y, node.size * 1.85);
          glow.addColorStop(0, palette.cardShadow);
          glow.addColorStop(1, "rgba(0,0,0,0)");
          ctx.beginPath();
          ctx.arc(position.x, position.y, node.size * 1.85, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }

        drawRoundedRect(ctx, x, y, cardWidth, cardHeight, 8);
        ctx.fillStyle = palette.cardBg;
        ctx.fill();
        ctx.strokeStyle = palette.cardBorder;
        ctx.lineWidth = isLightTheme ? 1 : 1.2;
        ctx.stroke();

        ctx.beginPath();
        ctx.rect(x + 3, y + 3, cardWidth - 6, cardHeight - 6);
        ctx.strokeStyle = palette.cardShadow;
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.save();
        ctx.translate(position.x, position.y + 0.4);
        drawIconGlyph(ctx, node.type, node.size * (isLightTheme ? 0.48 : 0.52), palette, time + node.phase);
        ctx.restore();
      }

      if (clippedForHero) {
        ctx.restore();
      }
    };

    init();
    animId = requestAnimationFrame(draw);
    themeObserver = new MutationObserver(() => {
      const nextLightTheme = document.documentElement.classList.contains("light");
      if (nextLightTheme === isLightTheme) return;
      isLightTheme = nextLightTheme;
      init();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const handleVisibility = () => {
      isActive = !document.hidden;
      if (isActive) {
        heroMaskDirty = true;
        init();
      }
    };

    const handlePointerMove = (event) => {
      if (isCoarsePointer) return;
      const width = Math.max(1, window.innerWidth);
      const height = Math.max(1, window.innerHeight);
      pointerTarget = {
        x: (event.clientX / width) * 2 - 1,
        y: (event.clientY / height) * 2 - 1,
      };
    };

    const handlePointerLeave = () => {
      pointerTarget = { x: 0, y: 0 };
    };

    const handleScroll = () => {
      heroMaskDirty = true;
    };

    const handleResize = () => {
      if (resizeFrame) window.cancelAnimationFrame(resizeFrame);
      resizeFrame = window.requestAnimationFrame(init);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave, { passive: true });
    window.addEventListener("blur", handlePointerLeave);
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("blur", handlePointerLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
      themeObserver?.disconnect();
      if (resizeFrame) window.cancelAnimationFrame(resizeFrame);
      cancelAnimationFrame(animId);
    };
  }, [pathname]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.65 }}
    />
  );
}

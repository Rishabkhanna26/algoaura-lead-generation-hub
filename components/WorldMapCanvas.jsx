"use client";

import { memo, useEffect, useRef } from "react";

const worldPoints = [
  [0.18, 0.28], [0.22, 0.32], [0.15, 0.35], [0.2, 0.38], [0.25, 0.3],
  [0.12, 0.3], [0.17, 0.42], [0.22, 0.45], [0.14, 0.38], [0.19, 0.34],
  [0.24, 0.36], [0.16, 0.32], [0.21, 0.4],
  [0.28, 0.55], [0.3, 0.6], [0.27, 0.65], [0.32, 0.7], [0.29, 0.75],
  [0.26, 0.58], [0.31, 0.63], [0.28, 0.68],
  [0.47, 0.25], [0.5, 0.28], [0.48, 0.3], [0.52, 0.26], [0.45, 0.32],
  [0.53, 0.3], [0.46, 0.28], [0.51, 0.24], [0.49, 0.33], [0.44, 0.3],
  [0.48, 0.45], [0.5, 0.5], [0.52, 0.55], [0.47, 0.48], [0.53, 0.42],
  [0.49, 0.58], [0.51, 0.62], [0.46, 0.52], [0.54, 0.48],
  [0.57, 0.35], [0.59, 0.38], [0.56, 0.4], [0.6, 0.36],
  [0.65, 0.28], [0.7, 0.3], [0.72, 0.35], [0.68, 0.25], [0.75, 0.32],
  [0.78, 0.38], [0.73, 0.28], [0.67, 0.33], [0.8, 0.42], [0.76, 0.3],
  [0.71, 0.38], [0.63, 0.3], [0.82, 0.35],
  [0.78, 0.48], [0.8, 0.52], [0.76, 0.5], [0.82, 0.55],
  [0.82, 0.68], [0.85, 0.65], [0.8, 0.72], [0.84, 0.7],
  [0.83, 0.3], [0.85, 0.28], [0.84, 0.33],
];

const mapHubs = {
  na: [0.21, 0.33],
  sa: [0.29, 0.63],
  eu: [0.5, 0.28],
  af: [0.5, 0.5],
  me: [0.58, 0.37],
  in: [0.68, 0.34],
  ea: [0.77, 0.34],
  sea: [0.79, 0.5],
  au: [0.83, 0.69],
};

const mapFocusPoint = mapHubs.in;

const trafficCorridors = [
  { from: "na", to: "eu", hue: 192, bend: -0.15 },
  { from: "na", to: "sa", hue: 25, bend: 0.1 },
  { from: "na", to: "in", hue: 25, bend: -0.12 },
  { from: "na", to: "ea", hue: 192, bend: -0.14 },
  { from: "sa", to: "eu", hue: 25, bend: -0.08 },
  { from: "sa", to: "af", hue: 25, bend: 0.06 },
  { from: "eu", to: "af", hue: 192, bend: -0.06 },
  { from: "eu", to: "me", hue: 192, bend: -0.08 },
  { from: "eu", to: "ea", hue: 25, bend: -0.1 },
  { from: "eu", to: "au", hue: 25, bend: 0.06 },
  { from: "me", to: "in", hue: 25, bend: -0.06 },
  { from: "me", to: "ea", hue: 192, bend: -0.04 },
  { from: "af", to: "in", hue: 25, bend: -0.03 },
  { from: "in", to: "ea", hue: 192, bend: -0.05 },
  { from: "in", to: "au", hue: 25, bend: 0.1 },
  { from: "ea", to: "sea", hue: 25, bend: 0.1 },
  { from: "sea", to: "au", hue: 192, bend: 0.12 },
];

let cachedCountryGeometries = null;

function seededNoise(seed) {
  const value = Math.sin(seed * 12.9898) * 43758.5453123;
  return value - Math.floor(value);
}

function WorldMapCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame;
    let resizeFrame;
    let observer;
    let themeObserver;
    let particles = [];
    let movingDots = [];
    let routePaths = [];
    let countryGeometries = cachedCountryGeometries || [];
    let countryPaths = [];
    let mapFrame = { x: 0, y: 0, width: 0, height: 0 };
    let viewport = { width: 0, height: 0 };
    let lastFrameTime = 0;
    let isInViewport = true;
    let currentDpr = 1;
    let staticLayerReady = false;
    let isLightTheme = document.documentElement.classList.contains("light");
    const staticLayerCanvas = document.createElement("canvas");
    const staticCtx = staticLayerCanvas.getContext("2d");
    if (!staticCtx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const isMobileViewport = () => window.innerWidth < 768;
    const getParticleCount = () =>
      prefersReducedMotion ? 0 : isLightTheme ? 0 : isMobileViewport() ? 6 : 10;
    const getFrameInterval = () => (isMobileViewport() ? 1000 / 18 : 1000 / 26);
    const getDpr = () => Math.min(window.devicePixelRatio || 1, isMobileViewport() ? 1 : 1.25);
    const getThemeStyles = () =>
      isLightTheme
        ? {
            countryFill: "hsla(216, 22%, 66%, 0.16)",
            countryStroke: "hsla(214, 22%, 40%, 0.52)",
            countryStrokeWidth: 0.9,
            corridorAlpha: 0.32,
            corridorLightness: 48,
            corridorSaturation: 14,
            corridorLineWidth: 1.35,
            dotHue: 28,
            dotSaturation: 96,
            dotLightness: 54,
            dotGlowLightness: 64,
            dotRadius: 1.6,
            dotAlpha: 0.46,
            dotDrift: 1.6,
            signalHue: 28,
            signalSaturation: 96,
            signalLightness: 54,
            signalAlpha: 0.74,
            signalRadius: 2.6,
            particleGlowLightness: 48,
            particleMidLightness: 42,
            particleCoreLightness: 40,
            particleEndpointLightness: 44,
            particleGlowAlpha: 0.3,
            particleMidAlpha: 0.2,
            particleCoreAlpha: 0.35,
            particleEndpointAlpha: 0.3,
            particleOpacityMin: 0.24,
            particleOpacityRange: 0.18,
          }
        : {
            countryFill: "hsla(30, 100%, 54%, 0.03)",
            countryStroke: "hsla(190, 85%, 45%, 0.22)",
            countryStrokeWidth: 0.65,
            corridorAlpha: 0.16,
            corridorLightness: 56,
            corridorSaturation: 100,
            corridorLineWidth: 1.15,
            dotHue: 28,
            dotSaturation: 100,
            dotLightness: 64,
            dotGlowLightness: 58,
            dotRadius: 1.7,
            dotAlpha: 0.4,
            dotDrift: 1.9,
            signalHue: 28,
            signalSaturation: 100,
            signalLightness: 62,
            signalAlpha: 0.8,
            signalRadius: 2.4,
            particleGlowLightness: 66,
            particleMidLightness: 56,
            particleCoreLightness: 72,
            particleEndpointLightness: 62,
            particleGlowAlpha: 0.9,
            particleMidAlpha: 0.36,
            particleCoreAlpha: 1,
            particleEndpointAlpha: 0.55,
            particleOpacityMin: 0.55,
            particleOpacityRange: 0.35,
          };

    const buildMapFrame = (rect) => {
      const mapAspectRatio = 2.05;
      const widthFromHeight = rect.height * mapAspectRatio;
      const heightFromWidth = rect.width / mapAspectRatio;

      // Cover mode: fill full hero area while preserving map aspect ratio.
      // This avoids distortion/squeezing and keeps the map full background.
      const width = Math.max(rect.width, widthFromHeight);
      const height = Math.max(rect.height, heightFromWidth);

      const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
      const desiredX = rect.width * 0.5 - mapFocusPoint[0] * width;
      const desiredY = rect.height * 0.5 - mapFocusPoint[1] * height;
      const minX = rect.width - width;
      const minY = rect.height - height;
      const x = clamp(desiredX, minX, 0);
      const y = clamp(desiredY, minY, 0);

      return {
        width,
        height,
        x,
        y,
      };
    };

    const projectPoint = (longitude, latitude, frame) => ({
      x: frame.x + ((longitude + 180) / 360) * frame.width,
      y: frame.y + ((90 - latitude) / 180) * frame.height,
    });

    const projectRing = (ring, frame) =>
      ring.map(([longitude, latitude]) =>
        projectPoint(longitude, latitude, frame),
      );

    const buildCountryPaths = (frame) => {
      countryPaths = [];

      for (const geometry of countryGeometries) {
        if (!geometry) continue;

        if (geometry.type === "Polygon") {
          for (const ring of geometry.coordinates) {
            countryPaths.push(projectRing(ring, frame));
          }
          continue;
        }

        if (geometry.type === "MultiPolygon") {
          for (const polygon of geometry.coordinates) {
            for (const ring of polygon) {
              countryPaths.push(projectRing(ring, frame));
            }
          }
        }
      }
    };

    const toCanvasPoint = (nx, ny, frame) => ({
      x: frame.x + nx * frame.width,
      y: frame.y + ny * frame.height,
    });

    const buildControlPoint = (from, to, bend, lane) => {
      const midX = (from.x + to.x) / 2;
      const midY = (from.y + to.y) / 2;
      const distance = Math.hypot(to.x - from.x, to.y - from.y);
      return {
        x: midX + distance * lane,
        y: midY + distance * bend,
      };
    };

    const pointOnQuadratic = (from, control, to, t) => {
      const inverseT = 1 - t;
      return {
        x: inverseT * inverseT * from.x + 2 * inverseT * t * control.x + t * t * to.x,
        y: inverseT * inverseT * from.y + 2 * inverseT * t * control.y + t * t * to.y,
      };
    };

    const drawStaticLayer = (rect) => {
      const styles = getThemeStyles();
      staticLayerReady = false;
      staticLayerCanvas.width = rect.width * currentDpr;
      staticLayerCanvas.height = rect.height * currentDpr;
      staticCtx.setTransform(1, 0, 0, 1, 0, 0);
      staticCtx.scale(currentDpr, currentDpr);
      staticCtx.clearRect(0, 0, rect.width, rect.height);

      for (const path of countryPaths) {
        if (!path.length) continue;

        staticCtx.beginPath();
        staticCtx.moveTo(path[0].x, path[0].y);

        for (let index = 1; index < path.length; index += 1) {
          staticCtx.lineTo(path[index].x, path[index].y);
        }

        staticCtx.closePath();
        staticCtx.fillStyle = styles.countryFill;
        staticCtx.fill();
        staticCtx.strokeStyle = styles.countryStroke;
        staticCtx.lineWidth = styles.countryStrokeWidth;
        staticCtx.stroke();
      }

      for (const route of routePaths) {
        staticCtx.beginPath();
        staticCtx.moveTo(route.from.x, route.from.y);
        staticCtx.quadraticCurveTo(route.control.x, route.control.y, route.to.x, route.to.y);
        const corridorHue = isLightTheme ? 214 : route.hue;
        staticCtx.strokeStyle = `hsla(${corridorHue}, ${styles.corridorSaturation}%, ${styles.corridorLightness}%, ${styles.corridorAlpha})`;
        staticCtx.lineWidth = styles.corridorLineWidth;
        staticCtx.stroke();
      }

      staticLayerReady = true;
    };

    const resize = () => {
      currentDpr = getDpr();
      const rect = canvas.getBoundingClientRect();
      viewport = { width: rect.width, height: rect.height };
      canvas.width = rect.width * currentDpr;
      canvas.height = rect.height * currentDpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(currentDpr, currentDpr);
      mapFrame = buildMapFrame(rect);

      const styles = getThemeStyles();
      movingDots = worldPoints.map(([x, y], index) => ({
        anchorX: mapFrame.x + x * mapFrame.width,
        anchorY: mapFrame.y + y * mapFrame.height,
        phase: seededNoise(index * 1.31 + 1) * Math.PI * 2 + index * 0.19,
        speed: 0.24 + seededNoise(index * 1.83 + 2) * 0.24,
        driftX: styles.dotDrift * (0.75 + seededNoise(index * 2.07 + 3) * 0.7),
        driftY: styles.dotDrift * (0.65 + seededNoise(index * 2.29 + 4) * 0.8),
        size: styles.dotRadius * (0.75 + seededNoise(index * 2.61 + 5) * 0.55),
        opacity: styles.dotAlpha * (0.68 + seededNoise(index * 2.93 + 6) * 0.45),
        hueOffset: (seededNoise(index * 3.17 + 7) - 0.5) * 12,
      }));

      routePaths = trafficCorridors.map((corridor, index) => {
        const [fromX, fromY] = mapHubs[corridor.from];
        const [toX, toY] = mapHubs[corridor.to];
        const from = toCanvasPoint(fromX, fromY, mapFrame);
        const to = toCanvasPoint(toX, toY, mapFrame);
        return {
          ...corridor,
          from,
          to,
          control: buildControlPoint(from, to, corridor.bend, 0),
          phase: seededNoise(index * 1.47 + 8) * Math.PI * 2 + index * 0.3,
          signalSpeed: 0.12 + seededNoise(index * 1.71 + 9) * 0.1,
        };
      });

      buildCountryPaths(mapFrame);
      drawStaticLayer(rect);
    };

    const drawMovingDots = (timestamp) => {
      if (!movingDots.length) return;
      const styles = getThemeStyles();
      const time = timestamp * 0.00065;

      for (const dot of movingDots) {
        const px = dot.anchorX + Math.sin(time * dot.speed + dot.phase) * dot.driftX;
        const py = dot.anchorY + Math.cos(time * dot.speed * 0.92 + dot.phase) * dot.driftY;
        const pulse = 0.76 + Math.sin(time * 1.25 + dot.phase) * 0.24;
        const hue = styles.dotHue + dot.hueOffset;

        const glow = ctx.createRadialGradient(px, py, 0, px, py, dot.size * 3.6);
        glow.addColorStop(
          0,
          `hsla(${hue}, ${styles.dotSaturation}%, ${styles.dotGlowLightness}%, ${Math.min(0.95, dot.opacity * pulse)})`,
        );
        glow.addColorStop(1, `hsla(${hue}, ${styles.dotSaturation}%, ${styles.dotGlowLightness}%, 0)`);

        ctx.beginPath();
        ctx.arc(px, py, dot.size * 3.6, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(px, py, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hue}, ${styles.dotSaturation}%, ${styles.dotLightness}%, ${Math.min(0.98, dot.opacity * 1.2 * pulse)})`;
        ctx.fill();
      }
    };

    const drawConnectionSignals = (timestamp) => {
      if (!routePaths.length) return;
      const styles = getThemeStyles();
      const time = timestamp * 0.0008;

      for (const route of routePaths) {
        const points = [
          (time * route.signalSpeed + route.phase * 0.1) % 1,
          (time * route.signalSpeed + route.phase * 0.1 + 0.5) % 1,
        ];

        for (const t of points) {
          const point = pointOnQuadratic(route.from, route.control, route.to, t);
          const glow = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, styles.signalRadius * 5);
          glow.addColorStop(
            0,
            `hsla(${styles.signalHue}, ${styles.signalSaturation}%, ${styles.signalLightness}%, ${styles.signalAlpha})`,
          );
          glow.addColorStop(
            1,
            `hsla(${styles.signalHue}, ${styles.signalSaturation}%, ${styles.signalLightness}%, 0)`,
          );

          ctx.beginPath();
          ctx.arc(point.x, point.y, styles.signalRadius * 5, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(point.x, point.y, styles.signalRadius, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${styles.signalHue}, ${styles.signalSaturation}%, ${styles.signalLightness}%, 0.95)`;
          ctx.fill();
        }
      }
    };

    const createParticle = () => {
      if (!routePaths.length) return null;
      const styles = getThemeStyles();
      const route = routePaths[Math.floor(Math.random() * routePaths.length)];
      const lane = (Math.random() - 0.5) * 0.12;
      const controlPoint = buildControlPoint(route.from, route.to, route.bend, lane);

      return {
        from: route.from,
        to: route.to,
        controlPoint,
        progress: 0,
        speed: 0.0015 + Math.random() * 0.0013,
        size: 1.8 + Math.random() * 1.3,
        opacity: styles.particleOpacityMin + Math.random() * styles.particleOpacityRange,
        hue: route.hue + (Math.random() - 0.5) * 8,
      };
    };

    const init = () => {
      resize();
      particles = [];

      const particleCount = getParticleCount();
      for (let index = 0; index < particleCount; index += 1) {
        const particle = createParticle();
        if (!particle) continue;
        particle.progress = Math.random();
        particles.push(particle);
      }
    };

    const draw = (timestamp = 0) => {
      animationFrame = requestAnimationFrame(draw);
      if (document.hidden || !isInViewport) return;
      if (timestamp - lastFrameTime < getFrameInterval()) return;
      lastFrameTime = timestamp;

      if (!viewport.width || !viewport.height || !staticLayerReady) return;
      ctx.clearRect(0, 0, viewport.width, viewport.height);
      ctx.drawImage(staticLayerCanvas, 0, 0, viewport.width, viewport.height);
      drawMovingDots(timestamp);
      drawConnectionSignals(timestamp);

      if (!particles.length) return;

      const styles = getThemeStyles();

      for (const particle of particles) {
        const t = particle.progress;
        const inverseT = 1 - t;
        const x =
          inverseT * inverseT * particle.from.x +
          2 * inverseT * t * particle.controlPoint.x +
          t * t * particle.to.x;
        const y =
          inverseT * inverseT * particle.from.y +
          2 * inverseT * t * particle.controlPoint.y +
          t * t * particle.to.y;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, particle.size * 6);
        gradient.addColorStop(
          0,
          `hsla(${particle.hue}, 100%, ${styles.particleGlowLightness}%, ${Math.min(0.95, styles.particleGlowAlpha * particle.opacity)})`,
        );
        gradient.addColorStop(
          0.5,
          `hsla(${particle.hue}, 100%, ${styles.particleMidLightness}%, ${styles.particleMidAlpha * particle.opacity})`,
        );
        gradient.addColorStop(1, `hsla(${particle.hue}, 100%, ${styles.particleMidLightness}%, 0)`);

        ctx.beginPath();
        ctx.arc(x, y, particle.size * 6, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 100%, ${styles.particleCoreLightness}%, ${Math.min(0.98, styles.particleCoreAlpha * particle.opacity)})`;
        ctx.fill();

        if (t < 0.1 || t > 0.9) {
          const endpoint = t < 0.1 ? particle.from : particle.to;
          const endpointOpacity = t < 0.1 ? (0.1 - t) * 10 : (t - 0.9) * 10;
          ctx.beginPath();
          ctx.arc(endpoint.x, endpoint.y, 3.5, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${particle.hue}, 100%, ${styles.particleEndpointLightness}%, ${styles.particleEndpointAlpha * endpointOpacity * particle.opacity})`;
          ctx.fill();
        }

        particle.progress += particle.speed;
        if (particle.progress >= 1) {
          Object.assign(particle, createParticle());
        }
      }

    };

    const loadCountries = async () => {
      if (cachedCountryGeometries) {
        countryGeometries = cachedCountryGeometries;
        init();
        animationFrame = requestAnimationFrame(draw);
        return;
      }

      try {
        const response = await fetch("/world-countries-lite.geojson");
        if (!response.ok) throw new Error("Failed to fetch countries");
        const data = await response.json();
        countryGeometries = (data.features || []).map((feature) => feature.geometry);
        cachedCountryGeometries = countryGeometries;
      } catch (error) {
        countryGeometries = [];
        cachedCountryGeometries = [];
      } finally {
        init();
        animationFrame = requestAnimationFrame(draw);
      }
    };

    loadCountries();
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

    const handleResize = () => {
      if (resizeFrame) window.cancelAnimationFrame(resizeFrame);
      resizeFrame = window.requestAnimationFrame(init);
    };
    const handleVisibility = () => {
      if (!document.hidden) lastFrameTime = 0;
    };

    window.addEventListener("resize", handleResize, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);

    observer = new IntersectionObserver(
      ([entry]) => {
        isInViewport = entry.isIntersecting;
      },
      { threshold: 0.08 },
    );
    observer.observe(canvas);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
      observer?.disconnect();
      themeObserver?.disconnect();
      if (resizeFrame) window.cancelAnimationFrame(resizeFrame);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
      style={{ opacity: 0.95 }}
    />
  );
}

export default memo(WorldMapCanvas);

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

const trafficCorridors = [
  { from: "na", to: "eu", hue: 192, bend: -0.15 },
  { from: "na", to: "sa", hue: 25, bend: 0.1 },
  { from: "sa", to: "eu", hue: 25, bend: -0.08 },
  { from: "eu", to: "af", hue: 192, bend: -0.06 },
  { from: "eu", to: "me", hue: 192, bend: -0.08 },
  { from: "me", to: "in", hue: 25, bend: -0.06 },
  { from: "in", to: "ea", hue: 192, bend: -0.05 },
  { from: "ea", to: "sea", hue: 25, bend: 0.1 },
  { from: "sea", to: "au", hue: 192, bend: 0.12 },
  { from: "eu", to: "ea", hue: 25, bend: -0.1 },
];

let cachedCountryGeometries = null;

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
    let particles = [];
    let dots = [];
    let countryGeometries = cachedCountryGeometries || [];
    let countryPaths = [];
    let mapFrame = { x: 0, y: 0, width: 0, height: 0 };
    let lastFrameTime = 0;
    let isInViewport = true;
    let currentDpr = 1;
    const staticLayerCanvas = document.createElement("canvas");
    const staticCtx = staticLayerCanvas.getContext("2d");
    if (!staticCtx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const isMobileViewport = () => window.innerWidth < 768;
    const getParticleCount = () =>
      prefersReducedMotion ? 0 : isMobileViewport() ? 6 : 10;
    const getFrameInterval = () => (isMobileViewport() ? 1000 / 18 : 1000 / 26);
    const getDpr = () => Math.min(window.devicePixelRatio || 1, isMobileViewport() ? 1 : 1.25);

    const buildMapFrame = (rect) => {
      const mapAspectRatio = 2.05;
      const widthFromHeight = rect.height * mapAspectRatio;
      const heightFromWidth = rect.width / mapAspectRatio;

      // Cover mode: fill full hero area while preserving map aspect ratio.
      // This avoids distortion/squeezing and keeps the map full background.
      const width = Math.max(rect.width, widthFromHeight);
      const height = Math.max(rect.height, heightFromWidth);

      return {
        width,
        height,
        x: (rect.width - width) / 2,
        y: (rect.height - height) / 2,
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

    const drawStaticLayer = (rect) => {
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
        staticCtx.fillStyle = "hsla(30, 100%, 54%, 0.03)";
        staticCtx.fill();
        staticCtx.strokeStyle = "hsla(190, 85%, 45%, 0.22)";
        staticCtx.lineWidth = 0.65;
        staticCtx.stroke();
      }

      for (const corridor of trafficCorridors) {
        const [fromX, fromY] = mapHubs[corridor.from];
        const [toX, toY] = mapHubs[corridor.to];
        const from = toCanvasPoint(fromX, fromY, mapFrame);
        const to = toCanvasPoint(toX, toY, mapFrame);
        const control = buildControlPoint(from, to, corridor.bend, 0);

        staticCtx.beginPath();
        staticCtx.moveTo(from.x, from.y);
        staticCtx.quadraticCurveTo(control.x, control.y, to.x, to.y);
        staticCtx.strokeStyle = `hsla(${corridor.hue}, 100%, 56%, 0.08)`;
        staticCtx.lineWidth = 1;
        staticCtx.stroke();
      }

      for (const dot of dots) {
        staticCtx.beginPath();
        staticCtx.arc(dot.x, dot.y, 1.8, 0, Math.PI * 2);
        staticCtx.fillStyle = "hsla(190, 90%, 48%, 0.2)";
        staticCtx.fill();
      }
    };

    const resize = () => {
      currentDpr = getDpr();
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * currentDpr;
      canvas.height = rect.height * currentDpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(currentDpr, currentDpr);
      mapFrame = buildMapFrame(rect);

      dots = worldPoints.map(([x, y]) => ({
        x: mapFrame.x + x * mapFrame.width,
        y: mapFrame.y + y * mapFrame.height,
      }));

      buildCountryPaths(mapFrame);
      drawStaticLayer(rect);
    };

    const createParticle = () => {
      const corridor = trafficCorridors[Math.floor(Math.random() * trafficCorridors.length)];
      const reverse = Math.random() > 0.5;
      const startHub = reverse ? corridor.to : corridor.from;
      const endHub = reverse ? corridor.from : corridor.to;
      const [fromX, fromY] = mapHubs[startHub];
      const [toX, toY] = mapHubs[endHub];

      const jitter = () => (Math.random() - 0.5) * 0.018;
      const from = toCanvasPoint(fromX + jitter(), fromY + jitter(), mapFrame);
      const to = toCanvasPoint(toX + jitter(), toY + jitter(), mapFrame);
      const lane = (Math.random() - 0.5) * 0.12;
      const controlPoint = buildControlPoint(from, to, corridor.bend, lane);

      return {
        from,
        to,
        controlPoint,
        progress: 0,
        speed: 0.0015 + Math.random() * 0.0013,
        size: 1.8 + Math.random() * 1.3,
        opacity: 0.55 + Math.random() * 0.35,
        hue: corridor.hue + (Math.random() - 0.5) * 8,
      };
    };

    const init = () => {
      resize();
      particles = [];

      const particleCount = getParticleCount();
      for (let index = 0; index < particleCount; index += 1) {
        const particle = createParticle();
        particle.progress = Math.random();
        particles.push(particle);
      }
    };

    const draw = (timestamp = 0) => {
      animationFrame = requestAnimationFrame(draw);
      if (document.hidden || !isInViewport) return;
      if (timestamp - lastFrameTime < getFrameInterval()) return;
      lastFrameTime = timestamp;

      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      ctx.drawImage(staticLayerCanvas, 0, 0, rect.width, rect.height);

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
        gradient.addColorStop(0, `hsla(${particle.hue}, 100%, 66%, ${0.9 * particle.opacity})`);
        gradient.addColorStop(0.5, `hsla(${particle.hue}, 100%, 56%, ${0.36 * particle.opacity})`);
        gradient.addColorStop(1, `hsla(${particle.hue}, 100%, 50%, 0)`);

        ctx.beginPath();
        ctx.arc(x, y, particle.size * 6, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 100%, 72%, ${particle.opacity})`;
        ctx.fill();

        if (t < 0.1 || t > 0.9) {
          const endpoint = t < 0.1 ? particle.from : particle.to;
          const endpointOpacity = t < 0.1 ? (0.1 - t) * 10 : (t - 0.9) * 10;
          ctx.beginPath();
          ctx.arc(endpoint.x, endpoint.y, 3.5, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${particle.hue}, 100%, 62%, ${0.55 * endpointOpacity * particle.opacity})`;
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
    const handleResize = () => {
      if (resizeFrame) window.cancelAnimationFrame(resizeFrame);
      resizeFrame = window.requestAnimationFrame(init);
    };
    const handleVisibility = () => {
      if (!document.hidden) init();
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

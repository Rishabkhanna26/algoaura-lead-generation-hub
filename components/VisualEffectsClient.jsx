"use client";

import { useEffect, useState } from "react";

let hasBootstrappedEffects = false;
let cachedGridBackgroundComponent = null;
let cachedCursorGlowComponent = null;
let effectImportPromise = null;

const loadEffectComponents = () => {
  if (cachedGridBackgroundComponent && cachedCursorGlowComponent) {
    return Promise.resolve({
      grid: cachedGridBackgroundComponent,
      glow: cachedCursorGlowComponent,
    });
  }

  if (!effectImportPromise) {
    effectImportPromise = Promise.all([import("./GridBackground"), import("./CursorGlow")]).then(
      ([gridModule, glowModule]) => {
        cachedGridBackgroundComponent = gridModule.default;
        cachedCursorGlowComponent = glowModule.default;
        hasBootstrappedEffects = true;
        return {
          grid: cachedGridBackgroundComponent,
          glow: cachedCursorGlowComponent,
        };
      },
    );
  }

  return effectImportPromise;
};

export default function VisualEffectsClient() {
  const [enabled, setEnabled] = useState(() => hasBootstrappedEffects);
  const [GridBackgroundComponent, setGridBackgroundComponent] = useState(
    () => cachedGridBackgroundComponent,
  );
  const [CursorGlowComponent, setCursorGlowComponent] = useState(() => cachedCursorGlowComponent);

  useEffect(() => {
    if (hasBootstrappedEffects) {
      setEnabled(true);
      return;
    }

    let timeoutId;
    let idleId;

    const enable = () => setEnabled(true);

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(enable, { timeout: 1200 });
    } else {
      timeoutId = window.setTimeout(enable, 700);
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

  useEffect(() => {
    if (!enabled) return;

    if (cachedGridBackgroundComponent && cachedCursorGlowComponent) {
      setGridBackgroundComponent(() => cachedGridBackgroundComponent);
      setCursorGlowComponent(() => cachedCursorGlowComponent);
      return;
    }

    let isCancelled = false;

    loadEffectComponents().then(({ grid, glow }) => {
      if (isCancelled) return;
      setGridBackgroundComponent(() => grid);
      setCursorGlowComponent(() => glow);
    });

    return () => {
      isCancelled = true;
    };
  }, [enabled]);

  if (!enabled || !GridBackgroundComponent || !CursorGlowComponent) {
    return null;
  }

  return (
    <>
      <GridBackgroundComponent />
      <CursorGlowComponent />
    </>
  );
}

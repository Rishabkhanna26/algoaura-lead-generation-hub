"use client";

import { useEffect, useState } from "react";

export default function HeroWorldMap() {
  const [showWorldMap, setShowWorldMap] = useState(false);
  const [WorldMapCanvasComponent, setWorldMapCanvasComponent] = useState(null);

  useEffect(() => {
    let timeoutId;
    let idleId;

    const enableMap = () => setShowWorldMap(true);

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(enableMap, { timeout: 1200 });
    } else {
      timeoutId = window.setTimeout(enableMap, 650);
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
    if (!showWorldMap) return;

    let isCancelled = false;

    import("./WorldMapCanvas").then((mapModule) => {
      if (isCancelled) return;
      setWorldMapCanvasComponent(() => mapModule.default);
    });

    return () => {
      isCancelled = true;
    };
  }, [showWorldMap]);

  if (!showWorldMap || !WorldMapCanvasComponent) return null;

  return <WorldMapCanvasComponent />;
}

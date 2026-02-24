"use client";

import { useEffect, useState } from "react";

export default function VisualEffects() {
  const [enabled, setEnabled] = useState(false);
  const [GridBackgroundComponent, setGridBackgroundComponent] = useState(null);
  const [CursorGlowComponent, setCursorGlowComponent] = useState(null);
  const [FloatingWhatsAppComponent, setFloatingWhatsAppComponent] = useState(null);

  useEffect(() => {
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

    let isCancelled = false;

    Promise.all([
      import("./GridBackground"),
      import("./CursorGlow"),
      import("./FloatingWhatsApp"),
    ]).then(([gridModule, glowModule, whatsappModule]) => {
      if (isCancelled) return;
      setGridBackgroundComponent(() => gridModule.default);
      setCursorGlowComponent(() => glowModule.default);
      setFloatingWhatsAppComponent(() => whatsappModule.default);
    });

    return () => {
      isCancelled = true;
    };
  }, [enabled]);

  if (
    !enabled ||
    !GridBackgroundComponent ||
    !CursorGlowComponent ||
    !FloatingWhatsAppComponent
  ) {
    return null;
  }

  return (
    <>
      <GridBackgroundComponent />
      <CursorGlowComponent />
      <FloatingWhatsAppComponent />
    </>
  );
}

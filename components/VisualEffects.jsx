"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const GridBackground = dynamic(() => import("./GridBackground"), { ssr: false });
const CursorGlow = dynamic(() => import("./CursorGlow"), { ssr: false });
const FloatingWhatsApp = dynamic(() => import("./FloatingWhatsApp"), { ssr: false });

export default function VisualEffects() {
  const [enabled, setEnabled] = useState(false);

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

  if (!enabled) return null;

  return (
    <>
      <GridBackground />
      <CursorGlow />
      <FloatingWhatsApp />
    </>
  );
}

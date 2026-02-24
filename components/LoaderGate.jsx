"use client";

import { useCallback, useState } from "react";
import Loader from "./Loader";

export default function LoaderGate({ children }) {
  const [showLoader, setShowLoader] = useState(true);

  const handleComplete = useCallback(() => {
    setShowLoader(false);
  }, []);

  return (
    <>
      {showLoader ? <Loader onComplete={handleComplete} /> : null}
      {children}
    </>
  );
}

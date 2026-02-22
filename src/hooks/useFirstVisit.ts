"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "portfolio-has-visited";

export function useFirstVisit(): boolean {
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem(STORAGE_KEY);
    if (!hasVisited) {
      setIsFirstVisit(true);
      sessionStorage.setItem(STORAGE_KEY, "true");
    }
  }, []);

  return isFirstVisit;
}

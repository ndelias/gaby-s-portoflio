"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { LogoSequencePlayer } from "./LogoSequencePlayer";
import { useLogoAnimation } from "@/hooks/useLogoAnimation";
import { transition } from "@/lib/motion";

// Dimensions of the sequence canvas (CSS px)
const SEQUENCE_WIDTH = 1000;
const SEQUENCE_HEIGHT = 591;

export function LoadingScreen() {
  const { phase, setPhase, navbarLogoRect } = useLogoAnimation();
  const [visible, setVisible] = useState(phase === "loading");
  const [sequenceDone, setSequenceDone] = useState(false);
  const [playKey, setPlayKey] = useState(0);
  const [mounted, setMounted] = useState(false);
  const canvasRectRef = useRef<DOMRect | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // SSR-safe: only portal after mount
  useEffect(() => { setMounted(true); }, []);

  // Reset internal state whenever the phase goes back to "loading"
  useEffect(() => {
    if (phase === "loading") {
      setVisible(true);
      setSequenceDone(false);
      canvasRectRef.current = null;
      setPlayKey((k) => k + 1);
    }
  }, [phase]);

  const shouldRender = phase !== "idle" && phase !== "complete";

  // Called when all frames are preloaded — start playback immediately
  const onReady = useCallback(() => {
    setPhase("playing");
  }, [setPhase]);

  const onComplete = useCallback(() => {
    setSequenceDone(true);
    // Capture the canvas position for the fly-to animation
    if (containerRef.current) {
      const canvas = containerRef.current.querySelector("canvas");
      if (canvas) {
        canvasRectRef.current = canvas.getBoundingClientRect();
      }
    }
    setPhase("transitioning");
  }, [setPhase]);

  // After fly-to animation completes — remove overlay instantly
  const onTransitionComplete = useCallback(() => {
    setVisible(false);
    setPhase("complete");
  }, [setPhase]);

  // Calculate fly-to animation values
  const getFlyToAnimation = () => {
    const from = canvasRectRef.current;
    const to = navbarLogoRect;
    if (!from || !to) return {};

    const scaleX = to.width / SEQUENCE_WIDTH;
    const scaleY = to.height / SEQUENCE_HEIGHT;
    const scale = Math.min(scaleX, scaleY);

    const fromCenterX = from.left + from.width / 2;
    const fromCenterY = from.top + from.height / 2;
    const toCenterX = to.left + to.width / 2;
    const toCenterY = to.top + to.height / 2;

    return {
      x: toCenterX - fromCenterX,
      y: toCenterY - fromCenterY,
      scale,
    };
  };

  if (!shouldRender || !visible) return null;

  const overlay = (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-white">
      <div ref={containerRef} className="w-[min(calc(100vw-40px),1000px)]">
        {!sequenceDone && (
          <LogoSequencePlayer
            key={playKey}
            playing={phase === "playing"}
            onReady={onReady}
            onComplete={onComplete}
          />
        )}

        {sequenceDone && (
          <motion.img
            src="/images/logo-sequence/glb-084.png"
            alt="GLB"
            style={{ width: "100%", maxWidth: SEQUENCE_WIDTH, aspectRatio: "1000/591" }}
            initial={{ x: 0, y: 0, scale: 1 }}
            animate={getFlyToAnimation()}
            transition={transition.section}
            onAnimationComplete={onTransitionComplete}
          />
        )}
      </div>
    </div>
  );

  // SSR: render inline so the white overlay is in the initial HTML (no bounce).
  // Client: portal to body so the template's motion.div transform can't displace it.
  return mounted ? createPortal(overlay, document.body) : overlay;
}

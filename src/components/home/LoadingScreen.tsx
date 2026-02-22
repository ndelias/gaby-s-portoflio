"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogoSequencePlayer } from "./LogoSequencePlayer";
import { useLogoAnimation } from "@/hooks/useLogoAnimation";

const STORAGE_KEY = "portfolio-has-visited";

// Dimensions of the sequence canvas (CSS px)
const SEQUENCE_WIDTH = 1000;
const SEQUENCE_HEIGHT = 591;

export function LoadingScreen() {
  const { phase, setPhase, navbarLogoRect } = useLogoAnimation();
  const [visible, setVisible] = useState(true);
  const [sequenceReady, setSequenceReady] = useState(false);
  const [sequenceDone, setSequenceDone] = useState(false);
  const canvasRectRef = useRef<DOMRect | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Don't render at all if we're idle (returning visitor)
  const shouldRender = phase !== "idle";

  const onReady = useCallback(() => {
    setSequenceReady(true);
  }, []);

  // Auto-play once frames are preloaded
  useEffect(() => {
    if (sequenceReady && phase === "loading") {
      setPhase("playing");
    }
  }, [sequenceReady, phase, setPhase]);

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

  // After transition animation completes
  const onTransitionComplete = useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, "true");
    const timeout = setTimeout(() => {
      setVisible(false);
      setPhase("complete");
    }, 300);
    return () => clearTimeout(timeout);
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

  if (!shouldRender) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-white"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div ref={containerRef}>
            {!sequenceDone && (
              <LogoSequencePlayer
                playing={phase === "playing"}
                onReady={onReady}
                onComplete={onComplete}
              />
            )}

            {sequenceDone && (
              <motion.img
                src="/images/logo-sequence/glb-084.png"
                alt="GLB"
                width={SEQUENCE_WIDTH}
                height={SEQUENCE_HEIGHT}
                initial={{ x: 0, y: 0, scale: 1 }}
                animate={getFlyToAnimation()}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                onAnimationComplete={onTransitionComplete}
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

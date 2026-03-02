"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogoSequencePlayer } from "./LogoSequencePlayer";
import { useLogoAnimation } from "@/hooks/useLogoAnimation";
import { transition } from "@/lib/motion";

// Dimensions of the sequence canvas (CSS px)
const SEQUENCE_WIDTH = 1000;
const SEQUENCE_HEIGHT = 591;

export function LoadingScreen() {
  const { phase, setPhase, navbarLogoRect } = useLogoAnimation();
  const [visible, setVisible] = useState(phase === "loading");
  const [sequenceReady, setSequenceReady] = useState(false);
  const [sequenceDone, setSequenceDone] = useState(false);
  const [playKey, setPlayKey] = useState(0);
  const canvasRectRef = useRef<DOMRect | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Reset internal state whenever the phase goes back to "loading"
  useEffect(() => {
    if (phase === "loading") {
      setVisible(true);
      setSequenceReady(false);
      setSequenceDone(false);
      canvasRectRef.current = null;
      setPlayKey((k) => k + 1);
    }
  }, [phase]);

  const shouldRender = phase !== "idle" && phase !== "complete";

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
          transition={transition.section}
        >
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}

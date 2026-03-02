"use client";

import { useRef, useEffect, useCallback } from "react";

const TOTAL_FRAMES = 85;
const FPS = 30;
const FRAME_DURATION = 1000 / FPS;
const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 591;

interface LogoSequencePlayerProps {
  playing: boolean;
  onReady: () => void;
  onComplete: () => void;
  className?: string;
}

function getFrameSrc(index: number): string {
  return `/images/logo-sequence/glb-${String(index).padStart(3, "0")}.png`;
}

export function LogoSequencePlayer({
  playing,
  onReady,
  onComplete,
  className,
}: LogoSequencePlayerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const frameIndexRef = useRef(0);
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef(0);
  const readyRef = useRef(false);
  const completedRef = useRef(false);

  // Preload all frames
  useEffect(() => {
    let loaded = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      img.onload = () => {
        loaded++;
        if (loaded === TOTAL_FRAMES && !readyRef.current) {
          readyRef.current = true;
          framesRef.current = images;
          // Draw first frame
          const ctx = canvasRef.current?.getContext("2d");
          if (ctx) {
            ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            ctx.drawImage(images[0], 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
          }
          onReady();
        }
      };
      images[i] = img;
    }
  }, [onReady]);

  // Playback loop
  const animate = useCallback(
    (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const elapsed = timestamp - lastTimeRef.current;

      if (elapsed >= FRAME_DURATION) {
        lastTimeRef.current = timestamp - (elapsed % FRAME_DURATION);
        frameIndexRef.current++;

        if (frameIndexRef.current >= TOTAL_FRAMES) {
          completedRef.current = true;
          onComplete();
          return;
        }

        const ctx = canvasRef.current?.getContext("2d");
        if (ctx && framesRef.current[frameIndexRef.current]) {
          ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
          ctx.drawImage(
            framesRef.current[frameIndexRef.current],
            0,
            0,
            CANVAS_WIDTH,
            CANVAS_HEIGHT
          );
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    },
    [onComplete]
  );

  useEffect(() => {
    if (playing && readyRef.current && !completedRef.current) {
      frameIndexRef.current = 0;
      lastTimeRef.current = 0;
      rafRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [playing, animate]);

  return (
    <canvas
      ref={canvasRef}
      width={CANVAS_WIDTH}
      height={CANVAS_HEIGHT}
      className={className}
      style={{ width: "100%", maxWidth: 1000, aspectRatio: "1000 / 591" }}
    />
  );
}

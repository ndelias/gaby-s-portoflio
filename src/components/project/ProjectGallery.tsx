"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { ScrollFade } from "@/components/ui/ScrollFade";
import { transition } from "@/lib/motion";
import type { ProjectImage } from "@/types";

interface ProjectGalleryProps {
  images: ProjectImage[];
}

/* ── Expand icon (top-right corner) ── */
function ExpandIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 1 1 1 1 6" />
      <polyline points="14 1 19 1 19 6" />
      <polyline points="14 19 19 19 19 14" />
      <polyline points="6 19 1 19 1 14" />
    </svg>
  );
}

/* ── Arrow icon for prev/next ── */
function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {direction === "left" ? (
        <>
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </>
      ) : (
        <>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </>
      )}
    </svg>
  );
}

/* ── Close icon ── */
function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/* ── Lightbox ── */
function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: ProjectImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const img = images[index];
  const [direction, setDirection] = useState(0);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    onPrev();
  }, [onPrev]);

  const handleNext = useCallback(() => {
    setDirection(1);
    onNext();
  }, [onNext]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose, handlePrev, handleNext]);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x > 50 && index > 0) handlePrev();
    else if (info.offset.x < -50 && index < images.length - 1) handleNext();
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition.element}
    >
      {/* Backdrop — clicking anywhere outside the image closes the lightbox */}
      <div className="absolute inset-0 bg-black/90 cursor-pointer" onClick={onClose} />

      {/* UI layer — sits above backdrop, clicks don't bubble to backdrop */}
      <div className="relative z-10 flex items-center justify-center h-full pointer-events-none">

        {/* Title — top left */}
        <div className="absolute top-6 left-6 pointer-events-none">
          {img.title && (
            <p className="text-[length:var(--text-body)] font-medium text-white">
              {img.title}
            </p>
          )}
          <p className="text-[length:var(--text-label)] text-white/50 mt-1">
            {index + 1} / {images.length}
          </p>
        </div>

        {/* Close — top right */}
        <button
          className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 sm:bg-transparent text-white/70 hover:text-white transition-colors duration-[200ms] cursor-pointer pointer-events-auto"
          onClick={onClose}
          aria-label="Close lightbox"
        >
          <CloseIcon />
        </button>

        {/* Prev */}
        {index > 0 && (
          <button
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 sm:bg-transparent text-white/50 hover:text-white transition-colors duration-[200ms] cursor-pointer pointer-events-auto"
            onClick={handlePrev}
            aria-label="Previous image"
          >
            <ArrowIcon direction="left" />
          </button>
        )}

        {/* Next */}
        {index < images.length - 1 && (
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 sm:bg-transparent text-white/50 hover:text-white transition-colors duration-[200ms] cursor-pointer pointer-events-auto"
            onClick={handleNext}
            aria-label="Next image"
          >
            <ArrowIcon direction="right" />
          </button>
        )}

        {/* Image — container sized exactly to the rendered image so no transparent dead zones */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            style={{
              position: "relative",
              width: `min(90vw, calc(85vh * ${img.width / img.height}))`,
              aspectRatio: `${img.width} / ${img.height}`,
            }}
            className="pointer-events-auto"
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
            transition={transition.element}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-contain pointer-events-none"
              sizes="90vw"
              priority
            />
          </motion.div>
        </AnimatePresence>

      </div>
    </motion.div>
  );
}

/* ── Gallery image tile ── */
function GalleryImage({
  img,
  sizes,
  onClick,
}: {
  img: ProjectImage;
  sizes: string;
  onClick: () => void;
}) {
  const isRotated = img.rotate !== undefined && img.rotate !== 0;
  const aspectW = isRotated ? img.height : img.width;
  const aspectH = isRotated ? img.width : img.height;

  const imgClass = isRotated
    ? "object-contain"
    : "object-cover transition-transform duration-500 ease-out group-hover/img:scale-[1.03]";

  return (
    <div className="group/img">
      <div
        className="relative w-full overflow-hidden bg-gray-100 cursor-pointer"
        style={{ aspectRatio: `${aspectW} / ${aspectH}` }}
        onClick={onClick}
      >
        <Image
          src={img.src}
          alt={img.alt}
          fill
          className={imgClass}
          style={isRotated ? { transform: `rotate(${img.rotate}deg)` } : undefined}
          sizes={sizes}
        />
      </div>

      {/* Title — always visible on mobile, hover-reveal on desktop */}
      <div className="lg:opacity-0 lg:group-hover/img:opacity-100 transition-opacity duration-[250ms] ease-out">
        <div className="h-px w-full bg-gray-200 mt-3" />
        <div className="flex items-center justify-between px-0 py-2.5 cursor-pointer" onClick={onClick}>
          <p className="text-[length:var(--text-label)] font-medium text-gray-500">
            {img.title || img.alt}
          </p>
          <span className="text-gray-400 shrink-0 ml-3">
            <ExpandIcon />
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Main gallery ── */
export function ProjectGallery({ images }: ProjectGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(() => setLightboxIndex((i) => i !== null && i > 0 ? i - 1 : i), []);
  const nextImage = useCallback(() => setLightboxIndex((i) => i !== null && i < images.length - 1 ? i + 1 : i), [images.length]);

  // Build flat index map so each tile knows its position in the images array
  const rows: { images: ProjectImage[]; startIndex: number; type?: "tall-left" | "wide" | "medium" | "small" }[] = [];
  let i = 0;

  while (i < images.length) {
    const img = images[i];
    if (img.layout === "wide") {
      rows.push({ images: [img], startIndex: i, type: "wide" });
      i++;
    } else if (img.layout === "medium") {
      rows.push({ images: [img], startIndex: i, type: "medium" });
      i++;
    } else if (img.layout === "small") {
      rows.push({ images: [img], startIndex: i, type: "small" });
      i++;
    } else if (img.layout === "tall-left") {
      const start = i;
      const group: ProjectImage[] = [img];
      if (i + 1 < images.length) group.push(images[i + 1]);
      if (i + 2 < images.length) group.push(images[i + 2]);
      rows.push({ images: group, startIndex: start, type: "tall-left" });
      i += group.length;
    } else if (img.layout === "third") {
      const start = i;
      const trio: ProjectImage[] = [img];
      while (trio.length < 3 && i + trio.length < images.length && images[i + trio.length].layout === "third") {
        trio.push(images[i + trio.length]);
      }
      rows.push({ images: trio, startIndex: start });
      i += trio.length;
    } else if (img.layout === "half") {
      const start = i;
      const pair: ProjectImage[] = [img];
      if (i + 1 < images.length && images[i + 1].layout === "half") {
        pair.push(images[i + 1]);
        i += 2;
      } else {
        i++;
      }
      rows.push({ images: pair, startIndex: start });
    } else {
      rows.push({ images: [img], startIndex: i });
      i++;
    }
  }

  return (
    <>
      <div className="flex flex-col">
        {rows.map((row, rowIndex) => {
          if (row.type === "tall-left" && row.images.length === 3) {
            return (
              <ScrollFade key={rowIndex}>
                <div className="min-h-[60vh] sm:min-h-screen flex items-center justify-center">
                  <div className="max-w-[85%] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-[var(--grid-gutter)]">
                    <div>
                      <GalleryImage
                        img={row.images[0]}
                        sizes="(max-width: 639px) 100vw, 42vw"
                        onClick={() => setLightboxIndex(row.startIndex)}
                      />
                    </div>
                    <div className="flex flex-col justify-end gap-3">
                      <GalleryImage
                        img={row.images[1]}
                        sizes="(max-width: 639px) 100vw, 42vw"
                        onClick={() => setLightboxIndex(row.startIndex + 1)}
                      />
                      <GalleryImage
                        img={row.images[2]}
                        sizes="(max-width: 639px) 100vw, 42vw"
                        onClick={() => setLightboxIndex(row.startIndex + 2)}
                      />
                    </div>
                  </div>
                </div>
              </ScrollFade>
            );
          }

          if (row.images.length === 1) {
            const maxW = row.type === "wide" ? "max-w-[85%]" : row.type === "small" ? "max-w-[40%]" : row.type === "medium" ? "max-w-[50%]" : "max-w-[70%]";
            const sizes = row.type === "wide" ? "85vw" : row.type === "small" ? "40vw" : row.type === "medium" ? "50vw" : "70vw";
            return (
              <ScrollFade key={rowIndex}>
                <div className="min-h-[60vh] sm:min-h-screen flex items-center justify-center">
                  <div className={`${maxW} mx-auto w-full`}>
                    <GalleryImage
                      img={row.images[0]}
                      sizes={sizes}
                      onClick={() => setLightboxIndex(row.startIndex)}
                    />
                  </div>
                </div>
              </ScrollFade>
            );
          }

          const colClass = row.images.length === 3
            ? "grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-[var(--grid-gutter)] items-end"
            : "grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-[var(--grid-gutter)] items-end";

          const sizesAttr = row.images.length === 3
            ? "(max-width: 639px) 100vw, 28vw"
            : "(max-width: 639px) 100vw, 42vw";

          return (
            <ScrollFade key={rowIndex}>
              <div className="min-h-[60vh] sm:min-h-screen flex items-center justify-center">
                <div className="max-w-[85%] mx-auto w-full">
                  <div className={colClass}>
                    {row.images.map((img, imgIndex) => (
                      <GalleryImage
                        key={imgIndex}
                        img={img}
                        sizes={sizesAttr}
                        onClick={() => setLightboxIndex(row.startIndex + imgIndex)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </ScrollFade>
          );
        })}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={images}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>
    </>
  );
}

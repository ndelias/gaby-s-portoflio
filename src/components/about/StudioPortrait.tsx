"use client";

import Image from "next/image";

export function StudioPortrait() {
  return (
    <div className="relative aspect-[3/4] bg-gray-100">
      <Image
        src="https://res.cloudinary.com/ddh4de7hy/image/upload/f_auto,q_auto:best,w_1200/about/portrait"
        alt="Gaby — Architect"
        fill
        className="object-cover"
        sizes="(max-width: 1023px) 100vw, 33vw"
        priority
      />
    </div>
  );
}

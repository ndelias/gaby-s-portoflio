"use client";

import Image from "next/image";

export function StudioPortrait() {
  return (
    <div className="relative aspect-[3/4] bg-gray-100">
      <Image
        src="/images/about/portrait.jpg"
        alt="Gaby — Architect"
        fill
        className="object-cover"
        sizes="(max-width: 1023px) 100vw, 33vw"
        priority
      />
    </div>
  );
}

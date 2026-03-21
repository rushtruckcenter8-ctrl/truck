"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TruckImageGalleryProps {
  images: string[];
  alt: string;
  category: string;
}

export default function TruckImageGallery({
  images,
  alt,
  category,
}: TruckImageGalleryProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => setActiveIdx((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setActiveIdx((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="flex flex-col gap-3">
      {/* ── Main image ── */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border shadow-sm bg-accent">
        <Image
          key={activeIdx}
          src={images[activeIdx]}
          alt={`${alt} — photo ${activeIdx + 1}`}
          fill
          className="object-cover"
          priority={activeIdx === 0}
        />

        {/* Category badge */}
        <span className="absolute top-4 left-4 rounded-md bg-foreground/80 px-3 py-1.5 text-xs font-medium text-white capitalize">
          {category}
        </span>

        {/* Photo counter */}
        <span className="absolute bottom-4 right-4 rounded-md bg-black/60 px-2.5 py-1 text-xs text-white">
          {activeIdx + 1} / {images.length}
        </span>

        {/* Prev / Next arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white hover:bg-black/70 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white hover:bg-black/70 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {/* ── Thumbnails ── */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((src, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-colors ${
                idx === activeIdx
                  ? "border-primary"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <Image
                src={src}
                alt={`${alt} thumbnail ${idx + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

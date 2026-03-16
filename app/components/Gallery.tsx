"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
    alt: "Truck workshop exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1519003300449-424ad0405076?auto=format&fit=crop&w=1200&q=80",
    alt: "Fleet lined up at the yard",
  },
  {
    src: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=1200&q=80",
    alt: "Mechanic servicing a truck",
  },
  {
    src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=80",
    alt: "Parts warehouse interior",
  },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <section id="gallery" className="bg-white section-padding">
      <div className="mx-auto max-w-7xl px-6">
        <h2
          className="mb-10 text-center text-3xl font-bold text-foreground sm:text-4xl"
          data-aos="fade-up"
          data-aos-once="true"
        >
          Photos
        </h2>

        {/* Carousel wrapper */}
        <div
          className="relative overflow-hidden rounded-xl border border-border shadow-sm"
          data-aos="fade-up"
          data-aos-once="true"
        >
          {/* Current slide */}
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={images[current].src}
              alt={images[current].alt}
              fill
              className="object-cover transition-opacity duration-500"
            />
          </div>

          {/* Left / Right arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-foreground shadow hover:bg-white transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-foreground shadow hover:bg-white transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="mt-5 flex items-center justify-center gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2.5 rounded-full transition-all ${
                idx === current
                  ? "w-8 bg-primary"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

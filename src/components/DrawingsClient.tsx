"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { drawings } from "@/src/data/drawings";
import { formatDate } from "@/lib/formatDate";
import { useTranslations } from "next-intl";

export default function DrawingsPage() {
  const t = useTranslations("drawings");

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const current = selectedIndex !== null ? drawings[selectedIndex] : null;

  const [touchStart, setTouchStart] = useState<number | null>(null);

  const next = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % drawings.length);
  }, [selectedIndex]);

  const prev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + drawings.length) % drawings.length);
  }, [selectedIndex]);

  // KEYBOARD CONTROL
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedIndex(null);
      }
      if (e.key === "ArrowRight") {
        next();
      }
      if (e.key === "ArrowLeft") {
        prev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev, selectedIndex]);

  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      {/* TITLE */}
      <h1 className="text-3xl sm:text-4xl font-semibold mb-10">{t("title")}</h1>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {drawings.map((item, index) => (
          <button
            key={item.slug}
            onClick={() => setSelectedIndex(index)}
            aria-label={`View details for ${item.title}`} // Accessibility label
            className="group relative overflow-hidden rounded-lg"
          >
            {/* IMAGE WRAPPER */}
            <div
              className="relative w-full"
              style={{ aspectRatio: `${item.width} / ${item.height}` }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain transition duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>

            {/* HOVER TITLE */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-end p-3">
              <p className="text-white text-sm text-center">{item.title}</p>
            </div>
          </button>
        ))}
      </div>

      {/* LIGHTBOX */}
      {current && (
        <div
          className="fixed inset-0 bg-black/85 flex items-center justify-center z-50"
          onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchStart === null) return;

            const diff = touchStart - e.changedTouches[0].clientX;

            if (diff > 50) next();
            if (diff < -50) prev();

            setTouchStart(null);
          }}
          onClick={() => setSelectedIndex(null)}
        >
          {/* LEFT */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous drawing"
            className="absolute left-4 text-white text-4xl px-2"
          >
            ‹
          </button>

          {/* CONTENT */}
          <div className="max-w-5xl max-h-[90vh] p-4 text-center">
            {/* TITLE */}

            <h2 className="text-white mb-4 text-sm tracking-wide opacity-80">{current.title}</h2>
            <p className="text-white/60 text-xs mb-4">{formatDate(current.createdAt)}</p>

            <div className="max-w-5xl max-h-[85vh] w-[90vw] h-[85vh] flex items-center justify-center mx-auto p-4">
              <Image
                src={current.image}
                alt={current.title}
                width={current.width}
                height={current.height}
                className="max-w-full max-h-full w-auto h-auto object-contain"
              />
            </div>
          </div>

          {/* RIGHT */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next drawing"
            className="absolute right-4 text-white text-4xl px-2"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}

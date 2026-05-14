"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { drawings } from "./data";

export default function DrawingsPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const current = selectedIndex !== null ? drawings[selectedIndex] : null;

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
      <h1 className="text-3xl sm:text-4xl font-semibold mb-10">Kresby</h1>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {drawings.map((item, index) => (
          <button
            key={item.slug}
            onClick={() => setSelectedIndex(index)}
            className="group relative overflow-hidden rounded-lg"
          >
            {/* IMAGE */}
            <Image
              src={item.image}
              alt={item.title}
              width={item.width}
              height={item.height}
              className="w-full h-auto object-cover transition duration-300 group-hover:scale-105"
            />

            {/* HOVER TITLE */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end justify-center p-3">
              <p className="text-white text-sm text-center">{item.title}</p>
            </div>
          </button>
        ))}
      </div>

      {/* LIGHTBOX */}
      {current && (
        <div
          className="fixed inset-0 bg-black/85 flex items-center justify-center z-50"
          onClick={() => setSelectedIndex(null)}
        >
          {/* LEFT */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 text-white text-4xl px-2"
          >
            ‹
          </button>

          {/* CONTENT */}
          <div className="max-w-5xl max-h-[90vh] p-4 text-center">
            {/* TITLE */}
            <h2 className="text-white mb-4 text-sm tracking-wide opacity-80">{current.title}</h2>

            <Image
              src={current.image}
              alt={current.title}
              width={current.width}
              height={current.height}
              className="max-h-[85vh] w-auto h-auto object-contain mx-auto"
            />
          </div>

          {/* RIGHT */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 text-white text-4xl px-2"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}

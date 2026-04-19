"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { latestItems } from "@/app/lib/latest";

export default function HeroCarousel() {
  const items = latestItems.slice(0, 3);
  const [index, setIndex] = useState(0);

  const current = items[index];

  const next = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="relative mt-5 w-[260px]">

      {/* CARD */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.slug}
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <Link
            href={`/books/${current.slug}`}
            className="block border rounded overflow-hidden shadow-sm"
          >
            <img
              src={current.image}
              className="w-full h-100 object-cover"
            />

            <div className="p-3">
              <h3 className="font-semibold text-sm">
                {current.title}
              </h3>
            </div>
          </Link>
        </motion.div>
      </AnimatePresence>

      {/* CONTROLS */}
      <div className="flex justify-between mt-4 text-sm">
        <button onClick={prev} className="px-2 py-1">
          ←
        </button>

        <button onClick={next} className="px-2 py-1">
          →
        </button>
      </div>

    </div>
  );
}
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Link } from "@/i18n/navigation";
import { useState } from "react";

export default function MobileCarousel({
  items,
  index,
  next,
  prev,
  getHref,
  getTitle,
  getImage,
  getLabel,
}: any) {
  const current = items[index];

  const [touchStart, setTouchStart] = useState<number | null>(null);

  return (
    <div
      className="md:hidden flex items-center justify-center gap-2"
      onTouchStart={(e) => {
        setTouchStart(e.touches[0].clientX);
      }}
      onTouchEnd={(e) => {
        if (touchStart === null) return;

        const diff = touchStart - e.changedTouches[0].clientX;

        if (diff > 50) {
          next();
        }

        if (diff < -50) {
          prev();
        }

        setTouchStart(null);
      }}
    >
      {/* LEFT BUTTON */}
      <button onClick={prev} aria-label="Previous item">
        <ChevronLeftIcon className="w-6 h-6" />
      </button>

      {/* PREV */}
      <div className="opacity-40 scale-90 w-[60px] overflow-hidden rounded">
        <Image
          src={items[(index - 1 + items.length) % items.length].image}
          alt=""
          width={80}
          height={120}
          className="object-cover"
        />
      </div>

      {/* CURRENT */}
      <div className="w-[180px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.slug}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href={getHref(current)}
              className="group block border-2 border-[#d8c4af] shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded overflow-hidden hover:shadow-md transition bg-[#fffdfa]"
              aria-label={`View details for ${getTitle(current)}`}
            >
              <div className="h-[240px] overflow-hidden relative">
                <div className="absolute top-2 left-2 z-10">
                  <span className="bg-white/70 text-black backdrop-blur-md text-[10px] uppercase tracking-widest px-2 py-1 rounded">
                    {getLabel(current.type)}
                  </span>
                </div>

                <Image
                  src={getImage(current)}
                  alt={getTitle(current)}
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 768px) 90vw, 700px"
                  className="object-cover"
                />
              </div>

              <div className="h-[72px] p-3">
                <h3 className="font-semibold text-lg line-clamp-2">{getTitle(current)}</h3>
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* NEXT */}
      <div className="opacity-40 scale-90 w-[60px] overflow-hidden rounded">
        <Image
          src={items[(index + 1) % items.length].image}
          alt=""
          width={80}
          height={120}
          className="object-cover"
        />
      </div>

      {/* RIGHT BUTTON */}
      <button onClick={next} aria-label="Next item">
        <ChevronRightIcon className="w-6 h-6" />
      </button>
    </div>
  );
}

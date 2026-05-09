"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { latestItems } from "@/lib/latest";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function HeroCarousel() {
  const items = latestItems.slice(0, 3); // vezmeme jen 5 nejnovějších položek
  const [index, setIndex] = useState(0);

  const current = items[index];

  const next = () => setIndex((p) => (p + 1) % items.length);
  const prev = () => setIndex((p) => (p - 1 + items.length) % items.length);

  const labels = {
    book: "Kniha",
    drawing: "Kresba",
    story: "Příběh",
  };

  const getHref = (item: typeof current) => {
    switch (item.type) {
      case "book":
        return `/books/${item.slug}`;

      case "drawing":
        return `/drawings/${item.slug}`;

      case "story":
        return `/stories/${item.slug}`;

      default:
        return "/";
    }
  };

  return (
    <div className="w-full">
      {/* MOBILE CAROUSEL */}
      <div className="md:hidden flex items-center justify-center gap-2">
        {/* LEFT BUTTON */}
        <button onClick={prev} className="text-lg px-2">
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        {/* LEFT PREVIEW */}
        <div className="opacity-40 scale-90 w-[60px] overflow-hidden rounded">
          <Image
            src={items[(index - 1 + items.length) % items.length].image}
            alt=""
            width={80}
            height={120}
            className="object-cover"
          />
        </div>

        {/* CURRENT MOBILE CARD */}
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
                className="group block border rounded-md overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <div className="h-[240px] overflow-hidden relative">
                  {/* BADGE */}
                  <div className="absolute top-2 left-2 z-10">
                    <span className="bg-white/70 text-black backdrop-blur-md text-[10px] uppercase tracking-widest px-2 py-1 rounded">
                      {labels[current.type]}
                    </span>
                  </div>

                  {/* IMAGE */}
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    sizes="(max-width: 768px) 180px, 300px"
                    className="object-cover"
                  />
                </div>

                <div className="h-[72px] p-3">
                  <h3 className="font-semibold text-sm line-clamp-2">{current.title}</h3>
                </div>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* PREVIEW RIGHT */}
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
        <button onClick={next} className="text-lg px-2">
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>

      {/* DESKTOP GRID */}
      <div className="hidden md:grid grid-cols-3 gap-6 mt-6">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={getHref(item)}
            className="group block border rounded overflow-hidden hover:shadow-md transition"
          >
            {/* BADGE */}
            <div className="relative">
              <div className="absolute top-2 left-2 z-10">
                <span className="bg-white/70 text-black backdrop-blur-md text-[10px] uppercase tracking-widest px-2 py-1 rounded">
                  {labels[item.type]}
                </span>
              </div>
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                className="w-full h-100 object-cover max-w-xs transition duration-300 ease-in-out group-hover:scale-105"
              />
            </div>

            <div className="h-[72px] p-3 z-10">
              <h3 className="font-semibold text-sm line-clamp-2">{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

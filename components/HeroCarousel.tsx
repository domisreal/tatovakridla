"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { latestItems } from "@/lib/latest";
import Image from "next/image";

export default function HeroCarousel() {
  const items = latestItems.slice(0, 3);
  const [index, setIndex] = useState(0);

  const current = items[index];

  const next = () => setIndex((p) => (p + 1) % items.length);
  const prev = () => setIndex((p) => (p - 1 + items.length) % items.length);

  return (
    <div className="w-full">
      {/* MOBILE CAROUSEL */}
      <div className="md:hidden flex items-center justify-center gap-2">
        {/* LEFT */}
        <button onClick={prev} className="text-lg px-2"/>

        {/* CARD */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.slug}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href={`/books/${current.slug}`}
              className="block border rounded overflow-hidden shadow-sm"
            >
              <Image src={current.image} alt={current.title} width={100} height={100} className="max-w-xs rounded-full transition duration-300 ease-in-out hover:scale-110" />

              <div className="p-3">
                <h3 className="font-semibold text-sm">{current.title}</h3>
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* RIGHT */}
        <button onClick={next} className="text-lg px-2"/>
      </div>

      {/* DESKTOP GRID */}
      <div className="hidden md:grid grid-cols-3 gap-6 mt-6">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/books/${item.slug}`}
            className="block border rounded overflow-hidden hover:shadow-md transition"
          >
            <Image src={item.image} alt={item.title} width={100} height={100} className="w-full h-100 object-cover max-w-xs transition duration-300 ease-in-out hover:scale-105" />

            <div className="p-3 z-10">
              <h3 className="font-semibold text-sm">{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

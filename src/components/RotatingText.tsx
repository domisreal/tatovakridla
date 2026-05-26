"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

export default function RotatingText() {
  const t = useTranslations("hero.rotating");

  const words = [t("nancy"), t("writer"), t("artist")];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className="inline-flex items-baseline h-[1em] min-w-[13ch] justify-start">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="block font-cormorant"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

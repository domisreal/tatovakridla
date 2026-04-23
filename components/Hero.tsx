// app/components/Hero.tsx
import HeroCarousel from "./HeroCarousel";
import Image from "next/image";
import RotatingText from "./RotatingText";

export default function Hero() {
  return (
    <section className="px-6 py-16">
      {/* TOP (text+image) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-6 md:py-10">
        {/* TEXT */}
        <div className="text-left space-y-4">
          <h1 className="mb-4 text-4xl sm:text-6xl lg:text-6xl font-extrabold leading-tight">
            <span className="text-gray-500">Ahoj, jsem </span>
            <span>
              <RotatingText />
            </span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg mb-6 max-w-md">
            Píšu knihy, kreslím a maluji, točím videa.
          </p>

          <p className="text-sm text-gray-400">Welcome to my creative space.</p>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[360px] lg:h-[360px]">
            <Image
              src="/images/nancy_cari.jpg"
              alt="Hero image"
              fill
              className="object-cover rounded-full"
            />
          </div>
        </div>
      </div>

      {/* bottom - LATEST */}
      <div className="mt-16 flex flex-col items-center">
        <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-4 md:mb-2">
          Poslední přidané
        </h2>

        <div className="flex justify-center">
          <HeroCarousel />
        </div>
      </div>
    </section>
  );
}

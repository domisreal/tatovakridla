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

    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
      Ahoj, jsem <RotatingText />
    </h1>

    <p className="text-gray-600 max-w-md leading-relaxed text-base md:text-lg">
      Píšu knihy, kreslím a maluji, točím videa.
    </p>

    <p className="text-sm text-gray-400">
      Welcome to my creative space.
    </p>

  </div>

  {/* IMAGE */}
  <div className="flex justify-center md:justify-end">
    <div className="w-[220px] h-[220px] md:w-[300px] md:h-[300px] relative">
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

        <h2 className="text-xs uppercase tracking-widest text-gray-400">
          Poslední přidané
        </h2>

        <div className="flex justify-center">
         <HeroCarousel />
      </div>

    </div>

    </section>
  );
}
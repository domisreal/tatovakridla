import HeroCarousel from "./HeroCarousel";
import Image from "next/image";
import RotatingText from "./RotatingText";
import { getTranslations } from "next-intl/server";

export default async function Hero() {
  const t = await getTranslations("hero");
  return (
    <section className="relative px-6 py-24 overflow-hidden">
      {/* TOP (text+image) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-6 md:py-10">
        {/* TEXT */}
        <div className="text-left space-y-4">
          <h1 className="mb-4 text-4xl sm:text-6xl lg:text-6xl font-extrabold leading-tight">
            <span className="text-[#8B6B4E]">{t("hello")}</span>
            <span className="text-[#2EC4B6]">
              <RotatingText />
            </span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg mb-6 max-w-md">{t("description")}</p>

          <p className="text-sm text-gray-400">{t("welcome")}</p>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[360px] lg:h-[360px]">
            <Image
              src="/images/nancy_cari.jpg"
              alt="Hero image"
              fill
              className="object-cover rounded-full border-4 border-white shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* bottom - LATEST */}
      <div className="mt-16 flex flex-col items-center">
        <h2 className="text-xl uppercase tracking-[0.25em] text-[#8B6B4E] font-bold mb-6">
          {t("latest")}
        </h2>

        <div className="flex justify-center">
          <HeroCarousel />
        </div>
      </div>
    </section>
  );
}

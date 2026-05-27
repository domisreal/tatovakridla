"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import ReactCountryFlag from "react-country-flag";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const switchLocale = (nextLocale: "cs" | "en") => {
    router.replace(pathname, { locale: nextLocale });
  };

  const baseButton = "transition-all duration-200 hover:scale-110 opacity-70 hover:opacity-100";

  const activeClass = "opacity-100 scale-110";

  return (
    <div className="flex items-center ">
      {/* CZ */}
      <button
        onClick={() => switchLocale("cs")}
        className={`${baseButton} ${locale === "cs" ? activeClass : ""} shrink-0`}
        aria-label="Switch to Czech"
      >
        <ReactCountryFlag
          countryCode="CZ"
          svg
          style={{
            width: "1.4em",
            height: "1.4em",
          }}
          alt="CZ"
        />
      </button>
      <span className="mx-1 text-sm opacity-50 select-none">/</span>
      {/* EN */}
      <button
        onClick={() => switchLocale("en")}
        className={`${baseButton} ${locale === "en" ? activeClass : ""} shrink-0`}
        aria-label="Switch to English"
      >
        <ReactCountryFlag
          countryCode="GB"
          svg
          style={{
            width: "1.4em",
            height: "1.4em",
          }}
          alt="GB"
        />
      </button>
    </div>
  );
}

"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const switchLocale = (nextLocale: "cs" | "en") => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div className="flex gap-2 text-sm">
      <button
        onClick={() => switchLocale("cs")}
        className={locale === "cs" ? "text-[#2EC4B6]" : "text-slate-600"}
      >
        CZ
      </button>

      <button
        onClick={() => switchLocale("en")}
        className={locale === "en" ? "text-[#2EC4B6]" : "text-slate-600"}
      >
        EN
      </button>
    </div>
  );
}

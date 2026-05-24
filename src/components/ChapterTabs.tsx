"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Chapter, ChapterTabEnum } from "@/src/types/common";

export default function ChapterTabs({ chapters }: { chapters: Chapter[] }) {
  const t = useTranslations("books.title");
  const [activeTab, setActiveTab] = useState<ChapterTabEnum>(chapters[0].type);

  return (
    <div className="mt-8">
      <p className="mb-8 text-4xl text-center font-semibold">Ukázka z knihy</p>
      {/* TABY */}
      <div className="flex flex-wrap gap-3 justify-center">
        {chapters.map((ch, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(ch.type)}
            className={`
px-5 py-2 rounded-full transition-all duration-300 border
${
  activeTab === ch.type
    ? "bg-[#8B6B4E] text-white border-[#2EC4B6] shadow-md"
    : "bg-white text-slate-600 border-slate-200 hover:border-[#8B6B4E] hover:text-[#8B6B4E]"
}
`}
          >
            {ch.title}
          </button>
        ))}
      </div>

      {/* OBSAH */}
      <div className="mt-6 p-8 rounded-3xl bg-white shadow-lg border border-slate-100 leading-8 text-slate-700">
        {t(activeTab)}
      </div>
    </div>
  );
}

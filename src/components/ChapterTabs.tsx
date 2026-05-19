"use client";

import { useState } from "react";
import cs from "@public/dictionaries/cs.json";
import { Chapter, ChapterTabEnum } from "@/src/types/common";

export default function ChapterTabs({ chapters }: { chapters: Chapter[] }) {
  const [activeTab, setActiveTab] = useState<ChapterTabEnum>(chapters[0].type);

  return (
    <div className="mt-8">
      <p className="mb-4 text-2xl text-center font-bold">Ukázka z knihy</p>
      {/* TABY */}
      <div className="flex gap-2">
        {chapters.map((ch, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(ch.type)}
            className={`px-3 py-1 border rounded ${
              activeTab === ch.type ? "bg-black text-white" : ""
            }`}
          >
            {ch.title}
          </button>
        ))}
      </div>

      {/* OBSAH */}
      <div className="mt-6 p-4 border rounded bg-gray-50">{cs[`books.title.${activeTab}`]}</div>
    </div>
  );
}

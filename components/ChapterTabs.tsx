"use client";

import { useEffect, useState } from "react";

type Chapter = {
  title: string;
  file: string;
};

export default function ChapterTabs({ chapters }: { chapters: Chapter[] }) {
  const [activeTab, setActiveTab] = useState(0);
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchContent = async () => {
      const response = await fetch(chapters[activeTab].file);
      const text = await response.text();
      setContent(text);
    };

    fetchContent();
  }, [activeTab, chapters]);

  return (
    <div className="mt-8">
      <p className="mb-4 text-2xl text-center font-bold">Ukázka z knihy</p>
      {/* TABY */}
      <div className="flex gap-2">
        {chapters.map((ch, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-3 py-1 border rounded ${
              activeTab === index ? "bg-black text-white" : ""
            }`}
          >
            {ch.title}
          </button>
        ))}
      </div>

      {/* OBSAH */}
      <div className="mt-6 p-4 border rounded bg-gray-50">{content}</div>
    </div>
  );
}

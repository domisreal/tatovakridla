"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { latestItems } from "@/lib/latest";
import MobileCarousel from "./MobileCards";
import DesktopCarousel from "./DesktopCards";

export default function HeroCarousel() {
  const items = latestItems.slice(0, 3);
  const [index, setIndex] = useState(0);

  const t = useTranslations("stories");
  const tLabels = useTranslations("hero.labels");

  const STORY_IMAGE = "/images/story.jpg";

  const next = () => setIndex((p) => (p + 1) % items.length);
  const prev = () => setIndex((p) => (p - 1 + items.length) % items.length);

  const getTitle = (item: any) => (item.type === "story" ? t(item.titleKey) : item.title);

  const getImage = (item: any) => (item.type === "story" ? STORY_IMAGE : item.image);

  const getLabel = (type: string) => tLabels(type);

  const routeMap = {
    book: "books",
    drawing: "drawings",
    story: "stories",
  };

  const getHref = (item: any) => `/${routeMap[item.type as keyof typeof routeMap]}/${item.slug}`;

  return (
    <div className="w-full">
      <MobileCarousel
        items={items}
        index={index}
        next={next}
        prev={prev}
        getHref={getHref}
        getTitle={getTitle}
        getImage={getImage}
        getLabel={getLabel}
      />

      <DesktopCarousel
        items={items}
        getHref={getHref}
        getTitle={getTitle}
        getImage={getImage}
        getLabel={getLabel}
      />
    </div>
  );
}

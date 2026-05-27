"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default function DesktopCarousel({ items, getHref, getTitle, getImage, getLabel }: any) {
  return (
    <div className="hidden md:grid grid-cols-3 gap-8 mt-10">
      {items.map((item: any) => (
        <Link
          key={item.slug}
          href={getHref(item)}
          className="group block border-2 border-[#d8c4af] shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded overflow-hidden hover:shadow-md transition bg-[#fffdfa]"
        >
          <div className="relative h-[420px] aspect-[2/3] mx-auto">
            <div className="absolute top-2 left-2 z-10">
              <span className="bg-white/70 text-black backdrop-blur-md text-[10px] uppercase tracking-widest px-2 py-1 rounded">
                {getLabel(item.type)}
              </span>
            </div>

            <Image
              src={getImage(item)}
              alt={getTitle(item)}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition"
            />
          </div>

          <div className="h-[72px] p-3">
            <h3 className="font-semibold text-lg line-clamp-2">{getTitle(item)}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

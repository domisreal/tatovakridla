import { toDate } from "@/lib/formatDate";
import { StoriesData } from "@/src/types/common";

export const stories: StoriesData[] = [
  {
    slug: "sen-o-lidske-nesmrtelnosti",
    titleKey: "sen.title",
    descriptionKey: "sen.description",
    icon: "🕰️",
    createdAt: toDate("2026-05-14"),
  },
  {
    slug: "vlakova",
    titleKey: "vlakova.title",
    descriptionKey: "vlakova.description",
    icon: "🚆",
    createdAt: toDate("2024-06-02"),
  },
  {
    slug: "cas",
    titleKey: "cas.title",
    descriptionKey: "cas.description",
    icon: "⏳",
    createdAt: toDate("2024-06-02"),
  },
  {
    slug: "vanocni-prani",
    titleKey: "vanocni_prani.title",
    descriptionKey: "vanocni_prani.description",
    icon: "🎄📜",
    createdAt: toDate("2024-06-02"),
  },
  {
    slug: "vanocni-stromecek",
    titleKey: "vanocni_stromecek.title",
    descriptionKey: "vanocni_stromecek.description",
    icon: "🎄🏡",
    createdAt: toDate("2024-06-02"),
  },
];

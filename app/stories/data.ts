import { toDate } from "@/lib/formatDate";
import { StoriesData } from "@/src/types/common";

export const stories: StoriesData[] = [
  {
    slug: "nocni-vlak",
    title: "Noční vlak",
    description: "Krátký melancholický příběh.",
    icon: "✍️",
    createdAt: toDate("2026-05-14"),
  },

  {
    slug: "posledni-dopis",
    title: "Poslední dopis",
    description: "Atmosférický příběh z nočního Soulu.",
    icon: "📨",
    createdAt: toDate("2024-06-02"),
  },
];

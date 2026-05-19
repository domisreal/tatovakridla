import { toDate } from "@/lib/formatDate";
import { StoriesData } from "@/src/types/common";

export const stories: StoriesData[] = [
  {
    slug: "sen-o-lidske-nesmrtelnosti",
    title: "Sen o lidské nesmrtelnosti",
    description: "Úvaha o nesmrtelnosti a smyslu života.",
    icon: "🕰️",
    createdAt: toDate("2026-05-14"),
  },
  {
    slug: "vlakova",
    title: "Vlaková",
    description:
      "Krátký okamžik krásy zachycený při cestě vlakem, kdy se zimní krajina promění ve světlo, teplo a ticho přírody.",
    icon: "🚆",
    createdAt: toDate("2024-06-02"),
  },
  {
    slug: "cas",
    title: "Čas",
    description:
      "Úvaha o čase jako neúprosném proudu, který nás všechny ovlivňuje a formuje naše životy.",
    icon: "⏳",
    createdAt: toDate("2024-06-02"),
  },
  {
    slug: "vanocni-prani",
    title: "Vánoční přání",
    description:
      "Tři vánoční dopisy Ježíškovi zachycující dětská přání, víru i bolestnou ztrátu matky",
    icon: "🎄📜",
    createdAt: toDate("2024-06-02"),
  },
  {
    slug: "vanocni-stromecek",
    title: "Vánoční stromeček",
    description: "Příběh o malém děvčátku, které našlo nový domov a radost během Vánoc.",
    icon: "🎄🏡",
    createdAt: toDate("2024-06-02"),
  },
];

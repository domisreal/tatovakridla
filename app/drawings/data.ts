import { toDate } from "@/lib/formatDate";
import { DrawingsData } from "@/src/types/common";

export const drawings: DrawingsData[] = [
  {
    slug: "1",
    title: "Portrét BTS",
    image: "/images/drawings/BTS.webp",
    width: 1600,
    height: 2000,
    createdAt: toDate("2024-06-01"),
  },
  {
    slug: "2",
    title: "Kresba kočky",
    image: "/images/drawings/CAT.webp",
    width: 2000,
    height: 1400,
    createdAt: toDate("2024-06-02"),
  },
  {
    slug: "3",
    title: "Ilustrace z Game of Thrones",
    image: "/images/drawings/GOT.webp",
    width: 1400,
    height: 2000,
    createdAt: toDate("2024-06-03"),
  },
  {
    slug: "4",
    title: "Portrét Suga z BTS",
    image: "/images/drawings/Suga.webp",
    width: 1800,
    height: 1800,
    createdAt: toDate("2024-06-04"),
  },
];

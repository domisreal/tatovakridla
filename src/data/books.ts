import { toDate } from "@/lib/formatDate";
import { ChapterTabEnum } from "@/src/types/common";

export const books = [
  {
    slug: "tatova-kridla",
    title: "Tátova křídla",
    descriptionKey: "tatovaKridla.description",
    anotationKey: "tatovaKridla.annotation",
    image: "/images/tatova-kridla_obalka.jpg",
    createdAt: toDate("2026-05-14"),
    lifestyleImage: "/images/nancy_tatova_kridla.jpg",
    buyLink: "https://pointa.cz/project/6c9b10ed-517c-11ee-a1db-0242ac120004",
    chapters: [{ type: ChapterTabEnum.DANIEL }, { type: ChapterTabEnum.MAJDA }],
  },
  {
    slug: "strazci-casu-pouto",
    title: "Strážci času: Pouto",
    descriptionKey: "strazciCasuPouto.description",
    anotationKey: "strazciCasuPouto.annotation",
    image: "/images/pouto_obalka1.png",
    createdAt: toDate("2015-02-16"),
    lifestyleImage: "/images/nancy_pouto.jpg",
    chapters: [
      { type: ChapterTabEnum.STRAZCI_PROLOG },
      { type: ChapterTabEnum.STRAZCI_MATT },
      { type: ChapterTabEnum.STRAZCI_ISABELA },
    ],
  },
];

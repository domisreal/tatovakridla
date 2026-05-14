import { ChapterTabEnum } from "@/src/types/common";

export const books = [
  {
    slug: "tatova-kridla",
    title: "Tátova křídla",
    description:
      "Zprvu hravá, později napínavá emotivní novela, kterou společně vyprávějí táta s dcerou i přes to, že je dávno rozdělila smrt.",
    anotation:
      "Příběh Tátova křídla vypráví o Danielovi, který se stal otcem v den své smrti, a o jeho dceři Majdě, která se v den svého narození stala sirotkem. Daniel však následujících šestnáct let zůstává Majdě po boku v roli ochránce a za doprovodu a pomoci andělů ji vede co nejklidnější cestou životem. S příchodem anděla smrti ho však čekají nepředvídatelné a náročné výzvy a Danielova ochranářská křídla se vymykají kontrole.",
    image: "/images/tatova-kridla.jpg",
    createdAt: 1748000000000,
    featured: true,
    lifestyleImage: "/images/nancy_tatova_kridla.jpg",
    buyLink: "https://pointa.cz/project/6c9b10ed-517c-11ee-a1db-0242ac120004",
    chapters: [
      { title: "z pohledu Daniela", file: "/excerpts/daniel.txt", type: ChapterTabEnum.DANIEL },
      { title: "z pohledu Majdy", file: "/excerpts/majda.txt", type: ChapterTabEnum.MAJDA },
    ],
  },
  {
    slug: "strazci-casu-pouto",
    title: "Strážci času: Pouto",
    description:
      "Neoficiální čtvrtý díl fan fikce k populární trilogii od Marianne Curley. Tento příběh rozšiřuje původní fantasy sérii o dobrodružstvích, která navazuje na knihy Věštba, Temný záměr a Klíč.",
    anotation: "zde bude ANOTACE",
    image: "/images/pouto.png",
    createdAt: 1749000000000,
    featured: true,
  },
];

import { toDate } from "@/lib/formatDate";
import { ChapterTabEnum } from "@/src/types/common";

export const books = [
  {
    slug: "tatova-kridla",
    title: "Tátova křídla",
    description:
      "Zprvu hravá, později napínavá emotivní novela, kterou společně vyprávějí táta s dcerou i přes to, že je dávno rozdělila smrt.",
    anotation:
      "Příběh Tátova křídla vypráví o Danielovi, který se stal otcem v den své smrti, a o jeho dceři Majdě, která se v den svého narození stala sirotkem. Daniel však následujících šestnáct let zůstává Majdě po boku v roli ochránce a za doprovodu a pomoci andělů ji vede co nejklidnější cestou životem. S příchodem anděla smrti ho však čekají nepředvídatelné a náročné výzvy a Danielova ochranářská křídla se vymykají kontrole.",
    image: "/images/tatova-kridla_obalka.jpg",
    createdAt: toDate("2026-05-14"),
    lifestyleImage: "/images/nancy_tatova_kridla.jpg",
    buyLink: "https://pointa.cz/project/6c9b10ed-517c-11ee-a1db-0242ac120004",
    chapters: [
      { title: "z pohledu Daniela", type: ChapterTabEnum.DANIEL },
      { title: "z pohledu Majdy", type: ChapterTabEnum.MAJDA },
    ],
  },
  {
    slug: "strazci-casu-pouto",
    title: "Strážci času: Pouto",
    description: "Neoficiální 4. díl fantasy trilogie Strážci času od Marianne Curleyové.",
    anotation:
      "Bitva skončila, Věštva byla naplněna. Ještě ovšem není konec. Strážci zjišťují, že Lathenie před nimi několik let skrývala svou dceru Ellatheu, která po své matce hned zaujímá místo Vládkyně Chaosu. Předvádí Strážcům své mocné schopnosti a phane po zničení celé Organizace. Dokud se neobjeví nová krátká věštba, která prozrazuje dávné tajemství o čtyřech mocných zbraních. V rukou Ellathey by byly nástrojem pro zničení Země, a proto se Strážci vydávají do daleké historie a do všech koutů světa, aby tyto zbraně našli dříve, než Ellathea. Podaří se jim to? Schýlí se k další bitvě?",
    image: "/images/pouto_obalka1.png",
    createdAt: toDate("2015-02-16"),
    lifestyleImage: "/images/nancy_pouto.jpg",
    chapters: [
      { title: "Prolog", type: ChapterTabEnum.STRAZCI_PROLOG },
      { title: "z pohledu Matta", type: ChapterTabEnum.STRAZCI_MATT },
      { title: "z pohledu Isabely", type: ChapterTabEnum.STRAZCI_ISABELA },
    ],
  },
];

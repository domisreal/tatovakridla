export enum ChapterTabEnum {
  DANIEL = "DANIEL",
  MAJDA = "MAJDA",
  STRAZCI_PROLOG = "STRAZCI_PROLOG",
  STRAZCI_MATT = "STRAZCI_MATT",
  STRAZCI_ISABELA = "STRAZCI_ISABELA",
}

export type Chapter = {
  type: ChapterTabEnum;
};

/**
 * Společný základ pro všechny obsahové typy
 * (bez image — protože ne všechny entity ho mají)
 */
export type BaseData = {
  slug: string;
  title: string;
  createdAt: number;
};

/**
 * KNIHY (mají vlastní obrázek + anotaci + kapitoly)
 */
export type BookData = BaseData & {
  description: string;
  anotation: string;
  image: string;
  chapters?: Chapter[];
  buyLink?: string;
  featured?: boolean;
  lifestyleImage?: string;
};

/**
 * KRESBY (každá má vlastní image)
 */
export type DrawingsData = BaseData & {
  image: string;
  width: number;
  height: number;
};

/**
 * STORIES (textové příběhy bez image)
 */
export type StoriesData = BaseData & {
  description: string;
  icon: string;
};

export type LatestItem =
  | (BookData & { type: "book" })
  | (DrawingsData & { type: "drawing" })
  | (StoriesData & { type: "story" });

export enum ChapterTabEnum {
  DANIEL = "DANIEL",
  MAJDA = "MAJDA",
}

export type Chapter = {
  title: string;
  file: string;
  type: ChapterTabEnum;
};

export type BaseData = {
  slug: string;
  title: string;
  image: string;
  createdAt: number;
};

export type StoriesData = BaseData & {
  description: string;
};

export type DrawingsData = BaseData & {
  width: number;
  height: number;
};

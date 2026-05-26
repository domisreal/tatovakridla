import { books } from "@/app/[locale]/books/data";
import { drawings } from "@/app/[locale]/drawings/data";
import { stories } from "@/app/[locale]/stories/data";

export const latestItems = [
  ...books.map((book) => ({
    type: "book" as const,
    ...book,
  })),

  ...drawings.map((drawing) => ({
    type: "drawing" as const,
    ...drawing,
  })),

  ...stories.map((story) => ({
    type: "story" as const,
    ...story,
    image: "/images/story.jpg",
  })),
].sort((a, b) => b.createdAt - a.createdAt || a.slug.localeCompare(b.slug));

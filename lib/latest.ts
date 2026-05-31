import { books } from "@/src/data/books";
import { drawings } from "@/src/data/drawings";
import { stories } from "@/src/data/stories";

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

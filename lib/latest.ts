import { books } from "@/app/books/data";
import { drawings } from "@/app/drawings/data";
import { stories } from "@/app/stories/data";

export const latestItems = [
  ...books.map((book) => ({
    type: "book" as const,
    slug: book.slug,
    title: book.title,
    image: book.image,
    createdAt: book.createdAt,
  })),

  ...drawings.map((drawing) => ({
    type: "drawing" as const,
    slug: drawing.slug,
    title: drawing.title,
    image: drawing.image,
    createdAt: drawing.createdAt,
  })),

  ...stories.map((story) => ({
    type: "story" as const,
    slug: story.slug,
    title: story.title,
    image: story.image,
    createdAt: story.createdAt,
  })),
].sort((a, b) => b.createdAt - a.createdAt);
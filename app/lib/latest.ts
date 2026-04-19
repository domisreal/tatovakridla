import { books } from "@/app/books/data";
// později: import { drawings } from "@/app/drawings/data";

export const latestItems = [
  ...books,
  // ...drawings
].filter((item) => item.featured);
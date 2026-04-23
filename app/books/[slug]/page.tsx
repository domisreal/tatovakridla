import { books } from "../data";
import { notFound } from "next/navigation";

export default async function BookDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const book = books.find((b) => b.slug === slug);

  if (!book) return notFound();

  return (
    <main className="px-6 py-10">
      <h1 className="text-3xl font-bold">{book.title}</h1>

      <p className="mt-4 text-gray-600">{book.description}</p>

      <div className="mt-10 text-sm text-gray-400">More content later (chapters, images, etc.)</div>
    </main>
  );
}

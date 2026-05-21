import { books } from "../data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import ChapterTabs from "@/src/components/ChapterTabs";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const book = books.find((b) => b.slug === slug);

  return {
    title: book?.title,
    description: book?.description,
    openGraph: {
      images: book?.image,
    },
  };
}

export default async function BookDetail({ params }: Props) {
  const { slug } = await params;
  const book = books.find((b) => b.slug === slug);

  if (!book) return notFound();

  return (
    <main className="px-6 py-16">
      <div className="grid md:grid-cols-[300px_1fr] gap-14 items-start">
        {/* image */}
        <Image src={book.image} alt={book.title} width={250} height={380} loading="eager" />

        {/* text */}
        <div>
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight book-title">
            {book.title}
          </h1>

          <p className="mt-4 text-slate-500 leading-8 text-lg">{book.description}</p>

          <p className="mt-8 text-lg leading-9 text-slate-700">{book.anotation}</p>
        </div>
      </div>

      <div className="mt-10 max-w-2xl mx-auto text-center">
        {book.lifestyleImage && (
          <Image
            src={book.lifestyleImage}
            alt="Lifestyle"
            width={600}
            height={400}
            className="rounded mb-6 mx-auto"
            loading="eager"
          />
        )}

        {book.buyLink && (
          <a
            href={book.buyLink}
            target="_blank"
            className="inline-flex items-center px-6 py-3 rounded-full bg-[#2EC4B6] text-white font-medium shadow-lg shadow-[#2EC4B6]/30 hover:bg-[#21a89b] hover:scale-105 transition-all duration-300"
          >
            Koupit knihu
          </a>
        )}

        {book.chapters && (
          <div className="mt-6 p-4 text-gray-700 text-left">
            {book.chapters && <ChapterTabs chapters={book.chapters} />}
          </div>
        )}
      </div>
    </main>
  );
}

import { books } from "../data";
import { notFound } from "next/navigation";
import {Metadata} from "next";
import Image from "next/image";
import ChapterTabs from "@/components/ChapterTabs";

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const { slug } = await params;
    const book = books.find((b) => b.slug === slug);

    return {
        title: book?.title,
        description: book?.description,
        openGraph: {
            images: book?.image
        }
    }
}

export default async function BookDetail({ params }: Props) {
  const { slug } = await params;
  const book = books.find((b) => b.slug === slug);

  if (!book) return notFound();

  return (
    <main className="px-6 py-10">
      <div className="flex flex-col md:flex-row gap-8">
  
  {/* image */}
  <Image
    src={book.image}
    alt={book.title}
    width={250}
    height={380}
    className="rounded shadow"
    loading="eager"
  />

  {/* text */}
  <div>
    <h1 className="text-3xl font-bold">{book.title}</h1>

    <p className="mt-4 text-gray-600">{book.description}</p>

    <p className="mt-6">{book.anotation}</p>
    
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
      className="text-blue-500 underline"
    >
      Koupit knihu
    </a>
  )}

  {book.chapters && (
    <div className="mt-6 p-4 text-gray-700 text-left">
     {book.chapters && (
  <ChapterTabs chapters={book.chapters} />
)}  
    </div>
  )}

</div>
    </main>
  );
}

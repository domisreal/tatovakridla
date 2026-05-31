import { Link } from "@/i18n/navigation";
import { books } from "@/src/data/books";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("books");
  const n = await getTranslations("navbar");
  return {
    title: n("books"),
    description: t("metaDescription"),
  };
}

export default async function BooksPage() {
  const t = await getTranslations("books");

  return (
    <main className="px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">{t("title")}</h1>

      <div className="grid gap-4">
        {books.map((book) => (
          <Link
            key={book.slug}
            href={`/books/${book.slug}`}
            className="p-4 border-2 border-[#d8c4af] shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded overflow-hidden hover:shadow-md transition flex gap-5 items-center bg-[#fffdfa]"
          >
            <img src={book.image} alt={book.title} className="w-24 h-36 object-cover rounded" />
            <div>
              <h2 className="text-xl font-semibold">{book.title}</h2>
              <p className="text-sm text-gray-600">{t(book.descriptionKey)}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

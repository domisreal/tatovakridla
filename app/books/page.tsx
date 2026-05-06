import Link from "next/link";
import { books } from "./data";

export default function BooksPage() {
  return (
    <main className="px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Books</h1>

      <div className="grid gap-4">
        {books.map((book) => (
        <Link
            key={book.slug}
            href={`/books/${book.slug}`}
            className="p-4 border rounded hover:opacity-70 transition flex gap-4 items-center"
          >
            <img
            src={book.image}
            alt={book.title}
            className="w-24 h-36 object-cover rounded"
          />
          <div>
            <h2 className="font-semibold">{book.title}</h2>
            <p className="text-sm text-gray-600">{book.description}</p>
          </div>
            
        </Link>
        ))}
      </div>
    </main>
  );
}

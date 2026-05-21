import Link from "next/link";
import { stories } from "./data";

export default function StoriesPage() {
  return (
    <main className="px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Příběhy</h1>

      <div className="grid gap-4">
        {stories.map((story) => (
          <Link
            key={story.slug}
            href={`/stories/${story.slug}`}
            className="p-4 border-2 border-[#d8c4af] shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded overflow-hidden hover:shadow-md transition flex gap-5 items-center bg-[#fffdfa]"
          >
            <div className="w-10 h-10 flex items-center justify-center text-xl whitespace-nowrap leading-none">
              {story.icon}
            </div>
            <div>
              <h2 className="text-xl font-semibold">{story.title}</h2>
              <p className="text-sm text-gray-600">{story.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

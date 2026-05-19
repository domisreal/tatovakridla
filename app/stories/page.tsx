import Link from "next/link";
import { stories } from "./data";

export default function StoriesPage() {
  return (
    <main className="px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Stories</h1>

      <div className="grid gap-4">
        {stories.map((story) => (
          <Link
            key={story.slug}
            href={`/stories/${story.slug}`}
            className="p-4 border rounded hover:opacity-70 transition flex gap-4 items-center"
          >
            <div className="w-10 h-10 flex items-center justify-center text-xl whitespace-nowrap leading-none">
              {story.icon}
            </div>
            <div>
              <h2 className="font-semibold">{story.title}</h2>
              <p className="text-sm text-gray-600">{story.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

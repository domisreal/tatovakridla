import { stories } from "../data";
import { notFound } from "next/navigation";
import Image from "next/image";
import cs from "@/public/dictionaries/cs.json";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function StoryDetail({ params }: Props) {
  const { slug } = await params;

  const story = stories.find((s) => s.slug === slug);

  if (!story) return notFound();

  const content = cs[`stories.content.${slug}` as keyof typeof cs];

  return (
    <main className="px-6 py-10 max-w-4xl mx-auto">
      <div className="text-6xl mb-6">{story.icon}</div>

      <h1 className="text-3xl font-bold mb-4">{story.title}</h1>

      <p className="text-gray-600 mb-8">{story.description}</p>

      <article className="whitespace-pre-line leading-8">{content}</article>
    </main>
  );
}

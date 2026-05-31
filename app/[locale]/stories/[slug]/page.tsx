import { stories } from "@/src/data/stories";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = stories.find((s) => s.slug === slug);

  if (!story) return notFound();

  const t = await getTranslations("stories");

  return {
    title: t(story.titleKey),
    description: t(story.descriptionKey),
  };
}

export default async function StoryDetail({ params }: Props) {
  const { slug } = await params;

  const story = stories.find((s) => s.slug === slug);

  if (!story) return notFound();

  const t = await getTranslations("stories");
  const content = t(`content.${slug}`);

  return (
    <main className="px-6 py-10 max-w-4xl mx-auto">
      <div className="text-6xl mb-6">{story.icon}</div>

      <h1 className="text-3xl font-bold mb-4">{t(story.titleKey)}</h1>

      <p className="text-gray-600 mb-8">{t(story.descriptionKey)}</p>

      <article className="whitespace-pre-line leading-8">{content}</article>
    </main>
  );
}

import { drawings } from "@/src/data/drawings";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function DrawingDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const drawing = drawings.find((d) => d.slug === slug);

  if (!drawing) return notFound();

  return (
    <main className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">{drawing.title}</h1>

      <div
        className="relative w-full max-w-4xl mx-auto"
        style={{ aspectRatio: `${drawing.width} / ${drawing.height}` }}
      >
        <Image
          src={drawing.image}
          alt={drawing.title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>
    </main>
  );
}

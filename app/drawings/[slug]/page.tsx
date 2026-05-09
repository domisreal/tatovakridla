import { drawings } from "../data";
import { notFound } from "next/navigation";
import Image from "next/image";

export default function DrawingDetail({ params }: { params: { slug: string } }) {
  const drawing = drawings.find((d) => d.slug === params.slug);

  if (!drawing) return notFound();

  return (
    <main className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">{drawing.title}</h1>

      <Image
        src={drawing.image}
        alt={drawing.title}
        width={drawing.width}
        height={drawing.height}
        className="rounded"
      />
    </main>
  );
}

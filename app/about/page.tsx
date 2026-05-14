import Image from "next/image";
import { aboutText, aboutVideos } from "./data";

export default function AboutPage() {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      {/* ABOUT */}
      <div className="space-y-12">
        {/* IMAGE (BANNER) */}
        <div className="mb-12">
          <div className="relative w-full aspect-[21/9] overflow-hidden rounded-3xl">
            <Image
              src="/images/nancy_creation.jpg"
              alt="Nancy Králová"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="space-y-6 max-w-3xl mx-auto text-gray-600 leading-relaxed">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-center">O mně</h1>

          <div className="space-y-4">
            {aboutText.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      {/* VIDEOS */}
      <div className="mt-28">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Rozhovory se mnou</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {aboutVideos.map((video) => (
            <div key={video.id} className="space-y-3">
              {/* VIDEO */}
              <div className="overflow-hidden rounded-3xl shadow-sm bg-black">
                <div className="aspect-video">
                  {video.type === "youtube" ? (
                    <iframe
                      className="w-full h-full"
                      src={video.src}
                      title={video.title}
                      allowFullScreen
                    />
                  ) : (
                    <video controls className="w-full h-full object-cover">
                      <source src={video.src} type="video/mp4" />
                    </video>
                  )}
                </div>
              </div>

              {/* TITLE (FIX) */}
              <p className="text-sm text-gray-500 text-center">{video.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

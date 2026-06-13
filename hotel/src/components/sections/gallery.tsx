import Image from "next/image";
import { gallery, site } from "@/lib/site-config";
import { Reveal } from "@/components/reveal";

// Varied spans for a modern masonry-style grid
const spans = [
  "sm:col-span-2 sm:row-span-2",
  "",
  "",
  "sm:col-span-2",
  "sm:col-span-2",
  "",
  "",
  "sm:col-span-2 sm:row-span-2",
];

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-20 bg-white py-24 md:py-32">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Hình ảnh</p>
          <h2 className="heading">Khoảnh khắc tại Sen Vàng</h2>
        </Reveal>

        <Reveal className="mt-14">
          <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {gallery.map((src, i) => (
              <div
                key={src}
                className={`group relative overflow-hidden rounded-2xl ${spans[i] ?? ""}`}
              >
                <Image
                  src={src}
                  alt={`${site.name} - hình ảnh ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/20" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

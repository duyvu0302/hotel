import { reviews } from "@/lib/site-config";
import { Reveal } from "@/components/reveal";
import { StarIcon } from "@/components/icons";

export function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-20 bg-white py-24 md:py-32">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="heading">Khách hàng nói gì về chúng tôi</h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal
              as="article"
              key={r.name}
              delay={i * 90}
              className="flex flex-col rounded-3xl bg-cream p-8 shadow-soft"
            >
              <div className="flex gap-1 text-gold">
                {Array.from({ length: r.rating }).map((_, idx) => (
                  <StarIcon key={idx} className="h-4 w-4" />
                ))}
              </div>
              <p className="mt-4 flex-1 leading-relaxed text-ink/80">“{r.text}”</p>
              <div className="mt-6 flex items-center gap-3 border-t border-gold/15 pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 font-serif text-lg font-semibold text-gold-dark">
                  {r.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-semibold">{r.name}</p>
                  <p className="text-xs text-muted">{r.location}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

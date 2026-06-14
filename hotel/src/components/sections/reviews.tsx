import { site } from "@/lib/site-config";
import { Reveal } from "@/components/reveal";
import { StarIcon } from "@/components/icons";
import type { Dict } from "@/lib/i18n/vi";

interface ReviewsProps {
  dict: Dict;
}

/**
 * Featured testimonial (large pull-quote) + a supporting pair below.
 */
export function Reviews({ dict }: ReviewsProps) {
  const { reviews } = dict;
  const [featured, ...rest] = reviews.items;

  return (
    <section id="reviews" className="scroll-mt-20 bg-cream py-24 md:py-32">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="heading">{reviews.heading}</h2>
          <div className="mt-4 inline-flex items-center gap-2 text-sm text-muted">
            <span className="flex gap-0.5 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4" />
              ))}
            </span>
            <span className="font-semibold text-ink">{site.rating.value}/5</span>
            <span>
              {reviews.ratingFrom.replace("{count}", String(site.rating.count))}
            </span>
          </div>
        </Reveal>

        <Reveal
          as="article"
          className="relative mx-auto mt-12 max-w-3xl rounded-3xl bg-white p-8 text-center shadow-soft md:p-12"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute left-7 top-3 font-serif text-7xl leading-none text-gold/25"
          >
            &ldquo;
          </span>
          <p className="relative font-serif text-xl leading-relaxed text-ink md:text-2xl">
            {featured.text}
          </p>
          <div className="mt-7 flex items-center justify-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 font-serif text-lg font-semibold text-gold-dark">
              {featured.name.charAt(0)}
            </span>
            <div className="text-left">
              <p className="text-sm font-semibold">{featured.name}</p>
              <p className="text-xs text-muted">{featured.location}</p>
            </div>
          </div>
        </Reveal>

        <div className="mx-auto mt-6 grid max-w-3xl gap-6 md:grid-cols-2">
          {rest.map((r, i) => (
            <Reveal
              as="article"
              key={r.name}
              delay={i * 90}
              className="flex flex-col rounded-3xl border border-gold/15 bg-white p-7 shadow-soft"
            >
              <div className="flex gap-1 text-gold">
                {Array.from({ length: r.rating }).map((_, idx) => (
                  <StarIcon key={idx} className="h-4 w-4" />
                ))}
              </div>
              <p className="mt-4 flex-1 leading-relaxed text-ink/80">{r.text}</p>
              <div className="mt-6 flex items-center gap-3 border-t border-gold/15 pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 font-serif font-semibold text-gold-dark">
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

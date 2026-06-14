import { Reveal } from "@/components/reveal";
import { AmenityIcon } from "@/components/icons";
import type { Dict } from "@/lib/i18n/vi";

interface AmenitiesProps {
  dict: Dict;
}

/**
 * Bento layout: first cell (wide, gold gradient) + last cell (wide, tinted)
 * are accent tiles; the middle four are standard centered tiles.
 *
 * Desktop (4 cols):  [ feature x2 ][ . ][ . ]  /  [ . ][ . ][ wide x2 ]
 * Mobile  (2 cols):  feature full-width, pairs, wide full-width.
 */
export function Amenities({ dict }: AmenitiesProps) {
  const { amenities } = dict;
  const total = amenities.items.length;

  return (
    <section id="amenities" className="scroll-mt-20 bg-cream py-24 md:py-32">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="heading">{amenities.heading}</h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-5">
          {amenities.items.map((a, i) => {
            const feature = i === 0;
            const wide = i === total - 1;
            const span = feature || wide ? "col-span-2" : "col-span-1";
            const accent = feature
              ? "bg-gradient-to-br from-gold/25 via-gold/10 to-transparent"
              : wide
                ? "bg-gold-light/20"
                : "bg-white";

            return (
              <Reveal
                key={a.title}
                delay={i * 60}
                className={`${span} group rounded-3xl ${accent} p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card`}
              >
                {feature || wide ? (
                  <div className="flex h-full items-center gap-5">
                    <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gold/15 text-gold-dark transition-colors group-hover:bg-gold group-hover:text-white">
                      <AmenityIcon name={a.icon} className="h-8 w-8" />
                    </span>
                    <div>
                      <h3 className="font-serif text-xl font-semibold">{a.title}</h3>
                      <p className="mt-1 text-sm text-muted">{a.desc}</p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold-dark transition-colors group-hover:bg-gold group-hover:text-white">
                      <AmenityIcon name={a.icon} className="h-7 w-7" />
                    </span>
                    <h3 className="mt-4 font-serif text-lg font-semibold">{a.title}</h3>
                    <p className="mt-1 text-sm text-muted">{a.desc}</p>
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

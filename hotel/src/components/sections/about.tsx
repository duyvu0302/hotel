import Image from "next/image";
import { site } from "@/lib/site-config";
import { Reveal } from "@/components/reveal";
import { CheckIcon } from "@/components/icons";
import type { Dict } from "@/lib/i18n/vi";

interface AboutProps {
  dict: Dict;
}

export function About({ dict }: AboutProps) {
  const { about } = dict;
  const bodyText = about.body.replace("{name}", site.name);

  return (
    <section id="about" className="scroll-mt-20 bg-cream py-24 md:py-32">
      <div className="container-px grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Layered image composition */}
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-card">
            <Image
              src="/image/lobby.png"
              alt={about.imgAltLobby.replace("{name}", site.name)}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          {/* Secondary overlapping photo for depth */}
          <div className="absolute -bottom-8 -left-6 hidden aspect-[3/4] w-40 overflow-hidden rounded-2xl border-4 border-cream shadow-card lg:block xl:w-48">
            <Image
              src="/image/exterior-night.png"
              alt={about.imgAltNight.replace("{name}", site.name)}
              fill
              sizes="200px"
              className="object-cover"
            />
          </div>
          {/* Experience badge */}
          <div className="absolute -right-3 -top-3 hidden rounded-2xl bg-gold px-6 py-4 text-center text-white shadow-card sm:block">
            <p className="font-serif text-3xl font-semibold leading-none">12+</p>
            <p className="mt-1 text-xs text-white/90">{about.badgeYears}</p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <h2 className="heading">{about.heading}</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-5 leading-relaxed text-muted">{bodyText}</p>
          </Reveal>
          <Reveal delay={150}>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {about.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-ink/80">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15">
                    <CheckIcon className="h-3 w-3 text-gold-dark" />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200}>
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-gold/15 pt-8 sm:grid-cols-4">
              {about.stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-serif text-3xl font-semibold text-gold-dark">{s.value}</dt>
                  <dd className="mt-1 text-xs leading-snug text-muted">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

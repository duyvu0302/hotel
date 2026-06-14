import { reasons } from "@/lib/site-config";
import { Reveal } from "@/components/reveal";
import { AmenityIcon } from "@/components/icons";

/**
 * Dark editorial band: numbered list (01-04) instead of a card grid.
 * Breaks the card-grid repetition and gives the page a premium theme-contrast
 * moment between the light sections.
 */
export function WhyUs() {
  return (
    <section className="scroll-mt-20 bg-ink py-24 text-white md:py-32">
      <div className="container-px grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <h2 className="font-serif text-4xl font-medium leading-[1.25] sm:text-5xl md:text-6xl">
            Lý do du khách tin chọn Sen Vàng
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-white/65">
            Những giá trị nhỏ làm nên kỳ nghỉ trọn vẹn, và là lý do Quý khách quay lại
            Sen Vàng cho mỗi chuyến đi Đà Nẵng.
          </p>
        </Reveal>

        <div className="divide-y divide-white/10">
          {reasons.map((r, i) => (
            <Reveal
              key={r.title}
              delay={i * 90}
              className="flex items-start gap-5 py-6 first:pt-0 last:pb-0"
            >
              <span className="font-serif text-2xl font-semibold tabular-nums text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-gold-light">
                <AmenityIcon name={r.icon} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-serif text-xl font-semibold">{r.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

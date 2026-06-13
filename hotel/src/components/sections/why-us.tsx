import { reasons } from "@/lib/site-config";
import { Reveal } from "@/components/reveal";
import { AmenityIcon } from "@/components/icons";

export function WhyUs() {
  return (
    <section className="scroll-mt-20 bg-cream py-24 md:py-32">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="heading">Lý do du khách tin chọn Sen Vàng</h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal
              key={r.title}
              delay={i * 80}
              className="flex flex-col items-start rounded-3xl border border-gold/15 bg-white p-7 shadow-soft"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold-dark">
                <AmenityIcon name={r.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-serif text-lg font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{r.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

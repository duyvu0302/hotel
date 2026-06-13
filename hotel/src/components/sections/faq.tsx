import { faqs } from "@/lib/site-config";
import { Reveal } from "@/components/reveal";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-white py-24 md:py-32">
      <div className="container-px mx-auto max-w-3xl">
        <Reveal className="text-center">
          <h2 className="heading">Giải đáp nhanh cho Quý khách</h2>
        </Reveal>

        <div className="mt-12 divide-y divide-gold/15 border-y border-gold/15">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 50}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg font-semibold text-ink marker:hidden">
                  {f.q}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold-dark transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

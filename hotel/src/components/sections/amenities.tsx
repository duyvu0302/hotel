import { amenities } from "@/lib/site-config";
import { Reveal } from "@/components/reveal";
import { AmenityIcon } from "@/components/icons";

export function Amenities() {
  return (
    <section id="amenities" className="scroll-mt-20 bg-cream py-24 md:py-32">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Tiện ích</p>
          <h2 className="heading">Trải nghiệm trọn vẹn mọi khoảnh khắc</h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3 lg:gap-7">
          {amenities.map((a, i) => (
            <Reveal
              key={a.title}
              delay={i * 70}
              className="group rounded-3xl bg-white p-7 text-center shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/10 text-gold-dark transition-colors group-hover:bg-gold group-hover:text-white">
                <AmenityIcon name={a.icon} className="h-8 w-8" />
              </span>
              <h3 className="mt-5 font-serif text-lg font-semibold">{a.title}</h3>
              <p className="mt-1.5 text-sm text-muted">{a.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

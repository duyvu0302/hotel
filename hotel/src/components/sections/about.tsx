import Image from "next/image";
import { stats, site } from "@/lib/site-config";
import { Reveal } from "@/components/reveal";
import { CheckIcon } from "@/components/icons";

const highlights = [
  "Vị trí trung tâm, gần biển & điểm vui chơi",
  "Phòng sạch sẽ, tiện nghi hiện đại",
  "Bãi đậu xe riêng an toàn",
  "Lễ tân hỗ trợ 24/7",
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-cream py-24 md:py-32">
      <div className="container-px grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-card">
            <Image
              src="/image/lobby.png"
              alt={`Không gian ${site.name}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-white px-7 py-5 shadow-card sm:block">
            <p className="font-serif text-3xl font-semibold text-gold">12+</p>
            <p className="text-sm text-muted">năm phục vụ tận tâm</p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">Về chúng tôi</p>
            <h2 className="heading">Kỳ nghỉ trọn vẹn giữa lòng Đà Nẵng</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-5 leading-relaxed text-muted">
              Tọa lạc ngay trung tâm thành phố, chỉ cách biển Mỹ Khê vài phút đi bộ,{" "}
              {site.name} mang đến không gian nghỉ ngơi sạch sẽ, tiện nghi và ấm cúng —
              lựa chọn lý tưởng cho du lịch, công tác hay nghỉ ngắn ngày.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {highlights.map((h) => (
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
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-serif text-3xl font-semibold text-gold-dark">
                    {s.value}
                  </dt>
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

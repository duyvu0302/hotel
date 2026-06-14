import Image from "next/image";
import { callHref, zaloHref } from "@/lib/site-config";
import { Reveal } from "@/components/reveal";
import { PhoneIcon, ChatIcon, CheckIcon } from "@/components/icons";
import type { Dict } from "@/lib/i18n/vi";

interface RoomsProps {
  dict: Dict;
}

export function Rooms({ dict }: RoomsProps) {
  const { rooms } = dict;

  return (
    <section id="rooms" className="scroll-mt-20 bg-beige py-24 md:py-32">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{rooms.eyebrow}</p>
          <h2 className="heading">{rooms.heading}</h2>
          <p className="mt-4 text-muted">{rooms.subtext}</p>
        </Reveal>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {rooms.items.map((room, i) => (
            <Reveal
              as="article"
              key={room.name}
              delay={i * 80}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-soft transition-shadow hover:shadow-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur-sm">
                  {room.size}
                </span>
                <div className="absolute inset-x-4 bottom-4 text-white">
                  <h3 className="font-serif text-xl font-semibold drop-shadow">{room.name}</h3>
                  <p className="text-sm font-semibold text-gold-light drop-shadow">{room.price}</p>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <ul className="flex-1 space-y-2">
                  {room.amenities.map((a) => (
                    <li key={a} className="flex items-center gap-2 text-sm text-muted">
                      <CheckIcon className="h-3.5 w-3.5 shrink-0 text-gold" />
                      {a}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-2">
                  <a href={callHref} className="btn-gold flex-1 !px-3 !py-2.5 text-xs">
                    <PhoneIcon className="h-4 w-4" />
                    {rooms.callAdvise}
                  </a>
                  <a
                    href={zaloHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={rooms.chatZaloAria.replace("{name}", room.name)}
                    className="btn-outline !px-3 !py-2.5"
                  >
                    <ChatIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

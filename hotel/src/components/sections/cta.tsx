import Image from "next/image";
import { callHref, zaloHref, site } from "@/lib/site-config";
import { Reveal } from "@/components/reveal";
import { PhoneIcon, ChatIcon } from "@/components/icons";

export function Cta() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <Image
        src="/image/room-spacious.png"
        alt={`${site.name} - đặt phòng ngay`}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/70" />

      <Reveal className="container-px relative z-10 text-center text-white">
        <h2 className="mx-auto max-w-3xl font-serif text-3xl font-semibold leading-tight sm:text-5xl">
          Liên hệ ngay để nhận ưu đãi tốt nhất
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/80">
          Đặt phòng trực tiếp qua hotline hoặc Zalo để được giá tốt nhất và tư vấn tận tình.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a href={callHref} className="btn-gold text-base">
            <PhoneIcon className="h-5 w-5" />
            Gọi {site.phoneDisplay}
          </a>
          <a
            href={zaloHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-light text-base"
          >
            <ChatIcon className="h-5 w-5" />
            Nhắn Zalo
          </a>
        </div>
      </Reveal>
    </section>
  );
}

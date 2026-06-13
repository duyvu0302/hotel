import Image from "next/image";
import { site, callHref, zaloHref } from "@/lib/site-config";
import { PhoneIcon, ChatIcon, ArrowIcon } from "@/components/icons";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <Image
        src="/image/exterior-night.png"
        alt={`${site.name} - không gian sang trọng`}
        fill
        priority
        sizes="100vw"
        className="object-cover animate-slow-zoom"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/65" />

      <div className="container-px relative z-10 py-32 text-white">
        <p className="eyebrow animate-fade-in !text-gold-light">
          ★★★★★ Khách sạn gần biển Đà Nẵng
        </p>
        <h1 className="max-w-4xl animate-fade-up font-serif text-4xl font-semibold leading-[1.15] sm:text-6xl md:text-7xl">
          {site.name}
        </h1>
        <p className="mt-5 max-w-2xl animate-fade-up text-lg text-white/90 sm:text-xl [animation-delay:120ms]">
          {site.slogan}. Không gian nghỉ ngơi tiện nghi, ấm cúng, giá chỉ từ{" "}
          <span className="font-semibold text-gold-light">{site.priceFrom}/đêm</span>.
        </p>

        <div className="mt-10 flex animate-fade-up flex-wrap items-center gap-4 [animation-delay:240ms]">
          <a href={callHref} className="btn-gold text-base">
            <PhoneIcon className="h-5 w-5" />
            Gọi ngay
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
          <a
            href="#rooms"
            className="group ml-1 inline-flex items-center gap-1.5 text-sm font-medium text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            Xem phòng
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

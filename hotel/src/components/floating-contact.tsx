import { callHref, zaloHref } from "@/lib/site-config";
import { PhoneIcon, ChatIcon } from "@/components/icons";

/**
 * Floating call + Zalo buttons. Always reachable; emphasized on mobile.
 */
export function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={zaloHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Nhắn Zalo"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#0068FF] text-white shadow-card transition-transform hover:scale-105"
      >
        <span className="absolute inline-flex h-14 w-14 animate-ping rounded-full bg-[#0068FF] opacity-20" />
        <ChatIcon className="h-6 w-6" />
      </a>
      <a
        href={callHref}
        aria-label="Gọi ngay"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-gold text-white shadow-card transition-transform hover:scale-105"
      >
        <span className="absolute inline-flex h-14 w-14 animate-ping rounded-full bg-gold opacity-30" />
        <PhoneIcon className="h-6 w-6" />
      </a>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navLinks, site, callHref } from "@/lib/site-config";
import { PhoneIcon, MenuIcon, CloseIcon } from "@/components/icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 shadow-soft backdrop-blur-md"
          : "bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      <nav className="container-px flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center" aria-label={site.name}>
          <Image
            src="/image/logo-full.png"
            alt={`${site.name} logo`}
            width={185}
            height={144}
            priority
            className="h-14 w-auto sm:h-16"
          />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-gold ${
                scrolled ? "text-ink/80" : "text-white/90"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a href={callHref} className="btn-gold !px-5 !py-2.5">
            <PhoneIcon className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
        </div>

        <button
          type="button"
          aria-label="Mở menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden ${scrolled || open ? "text-ink" : "text-white"}`}
        >
          {open ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden bg-cream/95 backdrop-blur-md transition-all duration-300 lg:hidden ${
          open ? "max-h-[480px] border-t border-gold/10" : "max-h-0"
        }`}
      >
        <div className="container-px flex flex-col gap-1 py-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-medium text-ink/80 transition-colors hover:bg-gold/10 hover:text-gold-dark"
            >
              {l.label}
            </a>
          ))}
          <a href={callHref} className="btn-gold mt-2">
            <PhoneIcon className="h-4 w-4" />
            Gọi ngay {site.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}

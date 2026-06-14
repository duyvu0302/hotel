"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site, callHref } from "@/lib/site-config";
import { PhoneIcon, MenuIcon, CloseIcon } from "@/components/icons";
import type { Dict } from "@/lib/i18n/vi";
import type { Locale } from "@/lib/i18n/config";

interface HeaderProps {
  lang: Locale;
  dict: Dict;
}

export function Header({ lang, dict }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const otherLang: Locale = lang === "vi" ? "en" : "vi";
  const { nav } = dict;

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

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {nav.links.map((l) => (
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

          {/* Language switcher */}
          <a
            href={`/${otherLang}`}
            aria-label={nav.switchLangLabel}
            className={`text-sm font-semibold tracking-wide transition-colors hover:text-gold ${
              scrolled ? "text-ink/60" : "text-white/70"
            }`}
          >
            {nav.switchLang}
          </a>

          <a href={callHref} className="btn-gold !px-5 !py-2.5">
            <PhoneIcon className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
        </div>

        {/* Mobile: lang switcher + hamburger */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={`/${otherLang}`}
            aria-label={nav.switchLangLabel}
            className={`text-sm font-semibold tracking-wide transition-colors hover:text-gold ${
              scrolled || open ? "text-ink/60" : "text-white/70"
            }`}
          >
            {nav.switchLang}
          </a>
          <button
            type="button"
            aria-label={open ? nav.closeMenu : nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={scrolled || open ? "text-ink" : "text-white"}
          >
            {open ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden bg-cream/95 backdrop-blur-md transition-all duration-300 lg:hidden ${
          open ? "max-h-[480px] border-t border-gold/10" : "max-h-0"
        }`}
      >
        <div className="container-px flex flex-col gap-1 py-4">
          {nav.links.map((l) => (
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
            {nav.callNow} {site.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}

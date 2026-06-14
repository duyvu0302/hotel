import Image from "next/image";
import { site, callHref } from "@/lib/site-config";
import { MapPinIcon, PhoneIcon, MailIcon } from "@/components/icons";
import type { Dict } from "@/lib/i18n/vi";

interface FooterProps {
  dict: Dict;
}

export function Footer({ dict }: FooterProps) {
  const { footer, nav } = dict;

  return (
    <footer className="bg-ink text-white/70">
      <div className="container-px grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/image/logo-full.png"
            alt={`${site.name} logo`}
            width={206}
            height={160}
            className="h-24 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">{footer.slogan}</p>
          <div className="mt-5 flex gap-3">
            {Object.entries(site.social).map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-xs uppercase transition-colors hover:border-gold hover:text-gold"
              >
                {name.charAt(0)}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            {footer.linksHeading}
          </h3>
          <ul className="space-y-2.5 text-sm">
            {nav.links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-gold">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            {footer.policiesHeading}
          </h3>
          <ul className="space-y-2.5 text-sm">
            {footer.policies.map((p) => (
              <li key={p}>
                <span className="cursor-default transition-colors hover:text-gold">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            {footer.contactHeading}
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              {site.address}
            </li>
            <li className="flex items-center gap-2.5">
              <PhoneIcon className="h-4 w-4 shrink-0 text-gold" />
              <a href={callHref} className="hover:text-gold">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MailIcon className="h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${site.email}`} className="hover:text-gold">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. {footer.copyright}
          </p>
          <p>{footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

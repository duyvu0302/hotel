import { site, callHref, zaloHref } from "@/lib/site-config";
import { Reveal } from "@/components/reveal";
import { PhoneIcon, MapPinIcon, MailIcon, ChatIcon } from "@/components/icons";
import type { Dict } from "@/lib/i18n/vi";

interface ContactProps {
  dict: Dict;
}

export function Contact({ dict }: ContactProps) {
  const { contact } = dict;

  const items = [
    { icon: PhoneIcon, label: contact.labels.hotline, value: site.phoneDisplay, href: callHref },
    { icon: ChatIcon, label: contact.labels.zalo, value: site.phoneDisplay, href: zaloHref },
    { icon: MailIcon, label: contact.labels.email, value: site.email, href: `mailto:${site.email}` },
    { icon: MapPinIcon, label: contact.labels.address, value: site.address, href: site.mapLink },
  ];

  return (
    <section id="contact" className="scroll-mt-20 bg-cream py-24 md:py-32">
      <div className="container-px grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow">{contact.eyebrow}</p>
            <h2 className="heading">{contact.heading}</h2>
            <p className="mt-4 text-muted">{contact.subtext}</p>
          </Reveal>

          <div className="mt-8 space-y-4">
            {items.map((it, i) => (
              <Reveal key={it.label} delay={i * 70}>
                <a
                  href={it.href}
                  target={it.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-soft transition-shadow hover:shadow-card"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold-dark">
                    <it.icon className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-muted">
                      {it.label}
                    </span>
                    <span className="block font-medium text-ink">{it.value}</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120} className="overflow-hidden rounded-3xl shadow-card">
          <iframe
            src={site.mapEmbed}
            title={contact.mapTitle.replace("{name}", site.name)}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[380px] w-full border-0"
          />
        </Reveal>
      </div>
    </section>
  );
}

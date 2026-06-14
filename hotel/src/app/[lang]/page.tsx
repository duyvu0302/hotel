import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/config";
import { Header } from "@/components/header";
import { FloatingContact } from "@/components/floating-contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Rooms } from "@/components/sections/rooms";
import { Amenities } from "@/components/sections/amenities";
import { Gallery } from "@/components/sections/gallery";
import { WhyUs } from "@/components/sections/why-us";
import { Reviews } from "@/components/sections/reviews";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { Cta } from "@/components/sections/cta";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} dict={dict} />
      <main>
        <Hero dict={dict} />
        <About dict={dict} />
        <Rooms dict={dict} />
        <Amenities dict={dict} />
        <Gallery dict={dict} />
        <WhyUs dict={dict} />
        <Reviews dict={dict} />
        <Faq dict={dict} />
        <Cta dict={dict} />
        <Contact dict={dict} />
      </main>
      <Footer dict={dict} />
      <FloatingContact dict={dict} />
    </>
  );
}

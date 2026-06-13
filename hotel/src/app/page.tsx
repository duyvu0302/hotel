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

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Amenities />
        <Gallery />
        <WhyUs />
        <Reviews />
        <Faq />
        <Cta />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}

/**
 * JSON-LD structured data for rich results in Google.
 * Functions accept dict so descriptions are locale-aware.
 * Test with: https://search.google.com/test/rich-results
 */
import { site } from "@/lib/site-config";
import type { Dict } from "@/lib/i18n/vi";

const hotelId = `${site.url}/#hotel`;

export function hotelSchema(dict: Dict) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Hotel", "LocalBusiness"],
        "@id": hotelId,
        name: site.name,
        description: dict.meta.description,
        url: site.url,
        telephone: site.phone,
        email: site.email,
        image: site.ogImage,
        priceRange: "300.000đ - 1.000.000đ",
        currenciesAccepted: "VND",
        paymentAccepted: "Cash, Bank Transfer",
        address: {
          "@type": "PostalAddress",
          streetAddress: "173 Hồ Nghinh",
          addressLocality: "An Hải",
          addressRegion: "Đà Nẵng",
          postalCode: site.postalCode,
          addressCountry: "VN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.geo.lat,
          longitude: site.geo.lng,
        },
        hasMap: site.mapLink,
        checkinTime: site.checkIn,
        checkoutTime: site.checkOut,
        starRating: { "@type": "Rating", ratingValue: "4" },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: site.rating.value,
          reviewCount: site.rating.count,
          bestRating: "5",
          worstRating: "1",
        },
        amenityFeature: dict.amenities.items.map((a) => ({
          "@type": "LocationFeatureSpecification",
          name: a.title,
          value: true,
        })),
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        sameAs: [site.social.facebook, site.social.instagram, site.social.tiktok],
      },
    ],
  };
}

export function faqSchema(dict: Dict) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.faq.items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

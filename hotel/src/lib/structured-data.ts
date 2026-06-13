/**
 * JSON-LD structured data for rich results in Google.
 * - Hotel (subtype of LocalBusiness/LodgingBusiness) with geo, rating, hours
 * - FAQPage from the FAQ section
 * Test with: https://search.google.com/test/rich-results
 */
import { site, faqs } from "@/lib/site-config";

const hotelId = `${site.url}/#hotel`;

export const hotelSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Hotel", "LocalBusiness"],
      "@id": hotelId,
      name: site.name,
      description: site.description,
      url: site.url,
      telephone: site.phone,
      email: site.email,
      image: site.ogImage,
      priceRange: "300.000đ - 1.000.000đ",
      currenciesAccepted: "VND",
      paymentAccepted: "Tiền mặt, Chuyển khoản",
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
      amenityFeature: [
        "Hồ bơi",
        "Nhà hàng",
        "Cafe",
        "Spa",
        "Gym",
        "Wifi miễn phí",
        "Bãi đậu xe riêng",
      ].map((name) => ({
        "@type": "LocationFeatureSpecification",
        name,
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

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

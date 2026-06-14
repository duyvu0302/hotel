import type { Dict } from "./vi";

export const en: Dict = {
  meta: {
    title: "Sen Vang Hotel | Beachside rooms in the heart of Da Nang",
    description:
      "Sen Vang Hotel Da Nang: clean, comfortable, and cozy accommodation in the city center, just minutes on foot from the beach. Rooms from 300,000₫/night.",
    slogan: "Beachside rooms in the heart of Da Nang",
    keywords: [
      "hotel Da Nang",
      "hotel near beach Da Nang",
      "Sen Vang Hotel",
      "affordable hotel Da Nang",
      "central Da Nang hotel",
      "Ho Nghinh Da Nang",
    ],
    ogLocale: "en_US",
  },
  nav: {
    links: [
      { label: "About", href: "#about" },
      { label: "Rooms", href: "#rooms" },
      { label: "Amenities", href: "#amenities" },
      { label: "Gallery", href: "#gallery" },
      { label: "Reviews", href: "#reviews" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
    openMenu: "Open menu",
    closeMenu: "Close menu",
    callNow: "Call now",
    switchLang: "VI",
    switchLangLabel: "Chuyển sang tiếng Việt",
  },
  hero: {
    eyebrow: "★★★★★ Beachside hotel in Da Nang",
    callNow: "Call now",
    chatZalo: "Message on Zalo",
    viewRooms: "View rooms",
    imgAltSpaciousRoom: "spacious luxury room",
    imgAltExterior: "hotel exterior at night",
    priceSuffix: "/night",
    pricePrefix: "From",
  },
  about: {
    heading: "A complete getaway in the heart of Da Nang",
    body: "Located right in the city center, just minutes on foot from My Khe Beach, {name} offers clean, well-equipped, and comfortable rooms. The ideal choice for leisure, business, or a quick break.",
    badgeYears: "years of service",
    imgAltLobby: "{name} lobby",
    imgAltNight: "{name} at night",
    highlights: [
      "Central location, near the beach and attractions",
      "Clean rooms with modern amenities",
      "Private, secure parking",
      "24/7 front desk support",
    ],
    stats: [
      { value: "12+", label: "Years in operation" },
      { value: "48", label: "Well-appointed rooms" },
      { value: "4.8/5", label: "Guest rating" },
      { value: "5 min", label: "Walk to the beach" },
    ],
  },
  rooms: {
    eyebrow: "Our rooms",
    heading: "Find the right room for you",
    subtext: "A range of room types for every need, from short stays to family holidays.",
    callAdvise: "Call to book",
    chatZaloAria: "Message Zalo about {name}",
    items: [
      {
        name: "Standard Room",
        price: "From 300,000₫ / night",
        size: "20 m²",
        image: "/image/room-standard.png",
        amenities: ["Double bed", "Air conditioning", "Free WiFi", "Flat-screen TV"],
      },
      {
        name: "Deluxe Room",
        price: "From 550,000₫ / night",
        size: "28 m²",
        image: "/image/room-deluxe.png",
        amenities: ["Large double bed", "City view", "Minibar", "Work desk"],
      },
      {
        name: "Suite Room",
        price: "From 950,000₫ / night",
        size: "42 m²",
        image: "/image/room-suite.png",
        amenities: ["Spacious layout", "City view", "Work desk", "Premium amenities"],
      },
      {
        name: "Family Room",
        price: "From 750,000₫ / night",
        size: "36 m²",
        image: "/image/room-family.png",
        amenities: ["2 double beds", "Sleeps up to 4", "Air conditioning", "Decorative artwork"],
      },
    ],
  },
  amenities: {
    heading: "Enjoy every moment to the fullest",
    items: [
      { title: "Swimming Pool", desc: "Rooftop infinity pool with ocean view", icon: "pool" },
      { title: "Restaurant", desc: "Vietnamese and Asian-European cuisine daily", icon: "restaurant" },
      { title: "Cafe", desc: "Cafe bar and relaxation lounge", icon: "cafe" },
      { title: "Spa", desc: "Professional therapeutic treatments", icon: "spa" },
      { title: "Gym", desc: "Modern fitness center, open 24/7", icon: "gym" },
      { title: "WiFi", desc: "High-speed internet throughout the property", icon: "wifi" },
    ],
  },
  gallery: {
    heading: "Moments at Sen Vang",
    imgAlt: "{name} - photo {n}",
  },
  whyUs: {
    heading: "Why guests choose Sen Vang",
    subtext:
      "Small details that make for a perfect stay, and the reason guests return to Sen Vang every trip to Da Nang.",
    items: [
      {
        title: "Prime location",
        desc: "Right in central Da Nang, just minutes on foot from My Khe Beach and close to dining and entertainment.",
        icon: "location",
      },
      {
        title: "Great value",
        desc: "Quality rooms from 300,000₫/night, the ideal choice for every type of traveler.",
        icon: "price",
      },
      {
        title: "Spotless rooms",
        desc: "Rooms are thoroughly cleaned daily and fully equipped with modern amenities.",
        icon: "clean",
      },
      {
        title: "24/7 support",
        desc: "Our friendly front desk team is available any time of day to assist you.",
        icon: "support",
      },
    ],
  },
  reviews: {
    heading: "What our guests say",
    ratingFrom: "from {count} reviews",
    items: [
      {
        name: "Nguyễn Minh Anh",
        location: "Hanoi",
        rating: 5,
        text: "Clean rooms and attentive staff. Extremely convenient location - just a short walk to the beach. Will definitely come back!",
      },
      {
        name: "Trần Quốc Bảo",
        location: "Ho Chi Minh City",
        rating: 5,
        text: "Great value for money and quality that exceeded expectations. Private parking was a real bonus for our family trip.",
      },
      {
        name: "Lê Thị Hương",
        location: "Can Tho",
        rating: 5,
        text: "Cozy and quiet atmosphere. The morning coffee with a lovely view was a highlight. Staff on the hotline were very helpful.",
      },
    ],
  },
  faq: {
    heading: "Quick answers for our guests",
    items: [
      {
        q: "Where is Sen Vang Hotel Da Nang located?",
        a: "The hotel is at 173 Ho Nghinh Street, An Hai Ward, Da Nang city, right in the center, just minutes on foot from My Khe Beach and close to many dining and entertainment options.",
      },
      {
        q: "How much do rooms cost at Sen Vang Hotel?",
        a: "Rooms start from 300,000₫/night for a Standard room. Deluxe, Suite, and Family rooms are priced differently. Please call our hotline at 0236 394 3966 or message us on Zalo for a quote and the best available rates.",
      },
      {
        q: "Does the hotel have parking?",
        a: "Yes. The hotel has its own secure private parking for both cars and motorbikes.",
      },
      {
        q: "What are the check-in and check-out times?",
        a: "Check-in is from 14:00 and check-out is by 12:00. Please contact us in advance if you need a flexible check-in or check-out time.",
      },
      {
        q: "Is the hotel close to the beach?",
        a: "Very close. It takes just a few minutes on foot from the hotel to reach My Khe Beach, one of the most beautiful beaches in Da Nang.",
      },
      {
        q: "How do I book a room at Sen Vang Hotel?",
        a: "Book directly by calling our hotline at 0236 394 3966 or send us a message on Zalo for the fastest response and best rates.",
      },
    ],
  },
  cta: {
    heading: "Contact us now for the best deal",
    subtext: "Book directly via hotline or Zalo to get the best price and personal assistance.",
    callBtn: "Call {phone}",
    zaloBtn: "Message on Zalo",
  },
  contact: {
    eyebrow: "Contact",
    heading: "Book a room or get advice",
    subtext: "Call our hotline or message us on Zalo for advice and the best available rates.",
    labels: {
      hotline: "Hotline",
      zalo: "Zalo",
      email: "Email",
      address: "Address",
    },
    mapTitle: "{name} map",
  },
  footer: {
    slogan: "Beachside rooms in the heart of Da Nang.",
    linksHeading: "Navigation",
    policiesHeading: "Policies",
    contactHeading: "Contact",
    policies: ["Booking policy", "Cancellation policy", "Privacy policy"],
    copyright: "All rights reserved.",
    tagline: "Designed in Luxury Resort style.",
  },
  floating: {
    zaloAriaLabel: "Message on Zalo",
    callAriaLabel: "Call now",
  },
};

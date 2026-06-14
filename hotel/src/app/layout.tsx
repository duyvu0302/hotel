import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Be_Vietnam_Pro } from "next/font/google";
import { site } from "@/lib/site-config";
import { hotelSchema, faqSchema } from "@/lib/structured-data";
import "./globals.css";

// Elegant high-contrast serif for display (light weights) + VN-optimized body sans.
const cormorant = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
  variable: "--font-be-vietnam",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.slogan}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "khách sạn Đà Nẵng",
    "khách sạn gần biển Đà Nẵng",
    "khách sạn Sen Vàng",
    "phòng nghỉ giá rẻ Đà Nẵng",
    "khách sạn trung tâm Đà Nẵng",
    "Hồ Nghinh Đà Nẵng",
  ],
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | ${site.slogan}`,
    description: site.description,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: `${site.name} - ${site.slogan}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.slogan}`,
    description: site.description,
    images: [site.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Render 1 thẻ <meta google-site-verification> cho mỗi token (xem README)
    google: [...site.googleVerification],
  },
};

export const viewport: Viewport = {
  themeColor: "#C5A55C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${cormorant.variable} ${beVietnam.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </body>
    </html>
  );
}

import { Prompt, Sarabun } from "next/font/google";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import CookieConsent from "../components/CookieConsent";
import "./globals.css";

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-prompt",
  display: "swap",
});

const sarabun = Sarabun({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-pdf-thai",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BKK AIR — จองตั๋วเครื่องบินยื่นวีซ่า ใบจองโรงแรม เอกสารสนับสนุนวีซ่า ส่ง PDF 24 ชั่วโมง",
  description:
    "BKK AIR บริการจัดเตรียมเอกสารสนับสนุนวีซ่าสำหรับนักเดินทางชาวไทย ครอบคลุมใบจองตั๋วเครื่องบิน ใบจองโรงแรม แผนการเดินทาง และประกันการเดินทาง ส่ง PDF พร้อมยื่นสถานทูต ภายใน 24 ชั่วโมง",
  keywords: [
    "จองตั๋วเครื่องบินยื่นวีซ่า",
    "ใบจองโรงแรมยื่นวีซ่า",
    "flight reservation for visa",
    "hotel booking for visa",
    "embassy-ready documents",
    "visa support Thailand",
    "เอกสารสนับสนุนวีซ่า",
    "แผนการเดินทางยื่นวีซ่า",
  ],
  icons: {
    icon: "/images/icons/site-icon.svg",
    shortcut: "/images/icons/site-icon.svg",
    apple: "/images/icons/site-icon.svg",
  },
  openGraph: {
    title: "BKK AIR — จองตั๋วเครื่องบินยื่นวีซ่า ใบจองโรงแรม เอกสารสนับสนุนวีซ่า ส่ง PDF 24 ชั่วโมง",
    description:
      "BKK AIR บริการจัดเตรียมเอกสารสนับสนุนวีซ่าสำหรับนักเดินทางชาวไทย ครอบคลุมใบจองตั๋วเครื่องบิน ใบจองโรงแรม แผนการเดินทาง และประกันการเดินทาง ส่ง PDF พร้อมยื่นสถานทูต ภายใน 24 ชั่วโมง",
    type: "website",
    siteName: "BKK AIR",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "BKK AIR Visa Flight and Hotel Booking Support",
  url: "https://bkkair.com",
  serviceType: "flight reservation for visa and hotel reservation for visa",
  provider: {
    "@type": "Organization",
    name: "BKK AIR",
    url: "https://bkkair.com",
    email: "info@bkkair.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangkok",
      addressCountry: "TH",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "info@bkkair.com",
        availableLanguage: ["th", "en"],
      },
      {
        "@type": "ContactPoint",
        contactType: "privacy",
        email: "info@bkkair.com",
        availableLanguage: ["th", "en"],
      },
    ],
  },
  areaServed: {
    "@type": "Country",
    name: "Thailand",
  },
  description:
    "บริการจองตั๋วเครื่องบินยื่นวีซ่าและใบจองโรงแรมขอวีซ่าแบบส่งคำขอให้เจ้าหน้าที่ตรวจสอบก่อนดำเนินการ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={`${prompt.variable} ${sarabun.variable}`}>
      <body className="font-prompt">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />

        {children}

        <CookieConsent />
        <GoogleAnalytics gaId="G-DF00B3N74J" />
      </body>
    </html>
  );
}

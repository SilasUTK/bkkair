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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "BKK AIR คืออะไร ให้บริการอะไร?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BKK AIR คือบริการจัดเตรียมเอกสารสนับสนุนวีซ่า — เช่น ใบจองตั๋วเครื่องบิน ใบจองโรงแรม แผนการเดินทาง และประกันการเดินทาง ในรูปแบบ PDF สำหรับประกอบแฟ้มเอกสาร เราไม่ใช่ตัวแทนวีซ่า ไม่ออกตั๋วจริงหรือยืนยันโรงแรมจริง และไม่มีส่วนในการตัดสินผลวีซ่า",
      },
    },
    {
      "@type": "Question",
      name: "เอกสารที่ได้รับสามารถใช้ยื่นสถานทูตได้จริงไหม?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "เอกสารทุกชิ้นจัดทำเป็นเอกสารสนับสนุนตามข้อมูลการเดินทางที่ลูกค้าแจ้ง และผ่านการตรวจสอบจากทีมงานจริงก่อนส่ง อย่างไรก็ตาม การยอมรับเอกสารและการอนุมัติวีซ่าขึ้นอยู่กับดุลยพินิจของสถานทูตหรือสถานกงสุลในแต่ละกรณี",
      },
    },
    {
      "@type": "Question",
      name: "BKK AIR มีส่วนต่อผลการอนุมัติวีซ่าไหม?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ไม่มีครับ/ค่ะ BKK AIR ให้บริการเฉพาะการจัดเตรียมเอกสารสนับสนุนเท่านั้น การอนุมัติวีซ่าเป็นดุลยพินิจของสถานทูตหรือสถานกงสุลในทุกกรณี และเราไม่มีความสัมพันธ์พิเศษกับสถานทูตใด ๆ",
      },
    },
    {
      "@type": "Question",
      name: "จะได้รับเอกสารภายในกี่ชั่วโมง?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "แพ็กเกจมาตรฐานส่งภายใน 24 ชั่วโมงหลังชำระเงิน สำหรับแพ็กเกจ Express จะได้รับเร็วกว่านั้น",
      },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        {children}

        <CookieConsent />
        <GoogleAnalytics gaId="G-DF00B3N74J" />
      </body>
    </html>
  );
}

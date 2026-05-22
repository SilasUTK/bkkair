import { Prompt } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-prompt",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BKK AIR | ใบจองตั๋วยื่นวีซ่า & เอกสารสนับสนุนสถานทูต",
  description:
    "จัดเตรียมเอกสารยื่นวีซ่าครบชุด — ใบจองตั๋วเครื่องบิน ใบจองโรงแรม แผนการเดินทาง และประกันการเดินทาง ส่ง PDF ภายใน 24 ชั่วโมง โดย BKK AIR",
  openGraph: {
    title: "BKK AIR | ใบจองตั๋วยื่นวีซ่า & เอกสารสนับสนุนสถานทูต",
    description:
      "จัดเตรียมเอกสารยื่นวีซ่าครบชุด — ใบจองตั๋วเครื่องบิน ใบจองโรงแรม แผนการเดินทาง และประกันการเดินทาง ส่ง PDF ภายใน 24 ชั่วโมง โดย BKK AIR",
    type: "website",
    siteName: "BKK AIR"
  }
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "BKK AIR Visa Flight and Hotel Booking Support",
  url: "https://bkkair.com",
  serviceType: "Flight reservation for visa and hotel booking for visa",
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
        email: "privacy@bkkair.com",
        availableLanguage: ["th", "en"],
      },
    ],
  },
  areaServed: {
    "@type": "Country",
    name: "Thailand"
  },
  description:
    "บริการจองตั๋วเครื่องบินยื่นวีซ่าและใบจองโรงแรมขอวีซ่าแบบส่งคำขอให้เจ้าหน้าที่ตรวจสอบก่อนดำเนินการ"
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
        text: "BKK AIR คือบริการจัดเตรียมเอกสารสนับสนุนวีซ่า — เช่น ใบจองตั๋วเครื่องบิน ใบจองโรงแรม แผนการเดินทาง และประกันการเดินทาง ในรูปแบบ PDF พร้อมยื่นสถานทูต เราไม่ใช่ตัวแทนวีซ่าและไม่รับประกันผลการอนุมัติวีซ่า"
      }
    },
    {
      "@type": "Question",
      name: "เอกสารที่ได้รับสามารถใช้ยื่นสถานทูตได้จริงไหม?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "เอกสารทุกชิ้นจัดทำในรูปแบบที่สถานทูตส่วนใหญ่คาดหวัง และผ่านการตรวจสอบจากทีมงานจริงก่อนส่ง อย่างไรก็ตาม การยอมรับเอกสารและการอนุมัติวีซ่าขึ้นอยู่กับดุลยพินิจของสถานทูตหรือสถานกงสุลในแต่ละกรณี"
      }
    },
    {
      "@type": "Question",
      name: "BKK AIR รับประกันการอนุมัติวีซ่าไหม?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ไม่ครับ/ค่ะ BKK AIR ให้บริการเฉพาะการจัดเตรียมเอกสารสนับสนุนเท่านั้น การอนุมัติวีซ่าเป็นดุลยพินิจของสถานทูตหรือสถานกงสุลในทุกกรณี เราไม่รับประกันและไม่มีความสัมพันธ์พิเศษกับสถานทูตใด ๆ"
      }
    },
    {
      "@type": "Question",
      name: "จะได้รับเอกสารภายในกี่ชั่วโมง?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "แพ็กเกจมาตรฐานส่งภายใน 24 ชั่วโมงหลังชำระเงิน สำหรับแพ็กเกจ Express จะได้รับเร็วกว่านั้น"
      }
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={prompt.variable}>
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
      </body>
    </html>
  );
}

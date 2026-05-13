import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BKK AIR | จองตั๋วเครื่องบินยื่นวีซ่า และใบจองโรงแรมขอวีซ่า",
  description:
    "BKK AIR provides staff-reviewed flight reservation for visa and hotel booking for visa support. Submit a request and our team manually verifies the details before fulfillment.",
  openGraph: {
    title: "BKK AIR - Flight Reservation and Hotel Booking for Visa",
    description:
      "Request-based visa travel document support for flight reservation for visa and hotel booking for visa.",
    type: "website",
    siteName: "BKK AIR"
  }
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "BKK AIR Visa Flight and Hotel Booking Support",
  serviceType: "Flight reservation for visa and hotel booking for visa",
  provider: {
    "@type": "Organization",
    name: "BKK AIR"
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
      name: "BKK AIR เป็นระบบจองตั๋วอัตโนมัติหรือไม่?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ไม่ใช่ ลูกค้าส่งคำขอให้เจ้าหน้าที่ตรวจสอบรายละเอียดก่อนดำเนินการจัดเตรียมเอกสารด้วยตนเอง"
      }
    },
    {
      "@type": "Question",
      name: "บริการนี้ใช้สำหรับอะไร?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "บริการนี้ช่วยจัดเตรียม flight reservation for visa และ hotel booking for visa สำหรับประกอบการยื่นวีซ่า"
      }
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>
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

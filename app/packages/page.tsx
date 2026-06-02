import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Clock3,
  MessageCircle,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import MarketingShell from "../../components/marketing/MarketingShell";
import JsonLd from "../../components/marketing/JsonLd";

export const metadata: Metadata = {
  title: "แพ็กเกจและราคา | เอกสารสนับสนุนวีซ่า — BKK AIR",
  description:
    "เลือกแพ็กเกจเอกสารยื่นวีซ่าที่เหมาะกับคุณ — ใบจองตั๋วเครื่องบิน ใบจองโรงแรม แผนการเดินทาง และประกันการเดินทาง ราคาชัดเจน ส่ง PDF ภายใน 24 ชั่วโมง",
};

const trustBadges = [
  "ตรวจสอบโดยทีมงานจริง",
  "ส่งภายใน 24 ชั่วโมง",
  "PDF พร้อมยื่นสถานทูต",
  "ราคาโปร่งใส",
];

const packages = [
  {
    slug: "flight",
    name: "ใบจองตั๋วเครื่องบิน",
    englishName: "Flight Reservation",
    tagline: "สำหรับผู้ที่ต้องการเฉพาะ flight reservation เพื่อยื่นวีซ่า",
    price: "฿500",
    priceNote: "ต่อคน",
    delivery: "⏱ ส่งภายใน 24 ชั่วโมง",
    included: [
      "ใบจองตั๋วเครื่องบินไป-กลับ (Round Trip)",
      "แสดงชื่อผู้โดยสารตามหนังสือเดินทาง",
      "แสดงวันเดินทาง เมืองต้นทาง และปลายทาง",
      "แสดงหมายเลขเที่ยวบินและสายการบิน",
      "PDF มาตรฐานสถานทูต ตรวจสอบโดยทีมงาน",
    ],
    notIncluded: [
      "ไม่รวมใบจองโรงแรม",
      "ไม่รวมแผนการเดินทาง",
      "ไม่รวมประกันการเดินทาง",
    ],
    bestFor: "ผู้ที่มีที่พักอยู่แล้ว หรือวีซ่าที่ต้องการเฉพาะ flight reservation",
    href: "/order?package=flight",
    accent: "blue",
  },
  {
    slug: "hotel",
    name: "ใบจองโรงแรม",
    englishName: "Hotel Reservation",
    tagline: "สำหรับผู้ที่ต้องการหลักฐานที่พักยื่นวีซ่า",
    price: "฿500",
    priceNote: "ต่อคน",
    delivery: "⏱ ส่งภายใน 24 ชั่วโมง",
    included: [
      "ใบจองโรงแรมตลอดระยะเวลาการเดินทาง",
      "แสดงชื่อผู้เข้าพักตามหนังสือเดินทาง",
      "แสดงชื่อโรงแรม ที่อยู่ และวันเช็คอิน-เช็คเอาท์",
      "ครอบคลุมทุกคืนของการเดินทาง",
      "PDF มาตรฐานสถานทูต ตรวจสอบโดยทีมงาน",
    ],
    notIncluded: [
      "ไม่รวมใบจองตั๋วเครื่องบิน",
      "ไม่รวมแผนการเดินทาง",
      "ไม่รวมประกันการเดินทาง",
    ],
    bestFor: "ผู้ที่มีตั๋วอยู่แล้ว และต้องการเฉพาะหลักฐานที่พัก",
    href: "/order?package=hotel",
    accent: "orange",
  },
  {
    slug: "itinerary",
    name: "เอกสารแผนการเดินทาง",
    englishName: "Travel Itinerary",
    tagline: "สำหรับผู้ที่ต้องการแผนการเดินทางรายวันประกอบเอกสารยื่นวีซ่า",
    price: "฿700",
    priceNote: "ต่อคน",
    delivery: "⏱ ส่งภายใน 24 ชั่วโมง",
    included: [
      "แผนการเดินทางรายวัน (Day-by-Day Itinerary)",
      "ระบุสถานที่พัก เมือง และกิจกรรมหลัก",
      "รูปแบบที่สถานทูตส่วนใหญ่ยอมรับ",
      "ปรับแต่งตามเส้นทางจริงของคุณ",
      "PDF มาตรฐานสถานทูต ตรวจสอบโดยทีมงาน",
    ],
    notIncluded: [
      "ไม่รวมใบจองตั๋วเครื่องบิน",
      "ไม่รวมใบจองโรงแรม",
      "ไม่รวมประกันการเดินทาง",
    ],
    bestFor: "ผู้ที่ต้องการ travel itinerary ที่สอดคล้องกับแผนยื่นวีซ่า",
    href: "/order?package=itinerary",
    accent: "blue",
  },
  {
    slug: "flight-hotel",
    name: "ใบจองตั๋ว + ใบจองโรงแรม",
    englishName: "Flight + Hotel Bundle",
    tagline: "แพ็กเกจรวมสำหรับผู้ที่ต้องใช้ทั้งหลักฐานการเดินทางและที่พัก",
    originalPrice: "฿1,000",
    price: "฿800",
    priceNote: "ต่อคน",
    valueNote: "💰 ประหยัด ฿200",
    delivery: "⏱ ส่งภายใน 24 ชั่วโมง",
    included: [
      "ใบจองตั๋วเครื่องบินไป-กลับ",
      "ใบจองโรงแรมตลอดระยะเวลาการเดินทาง",
      "ข้อมูลผู้เดินทางตรงตามหนังสือเดินทาง",
      "PDF พร้อมยื่นสถานทูต",
      "ประหยัดกว่าสั่งแยก ฿200",
    ],
    notIncluded: ["ไม่รวมแผนการเดินทาง", "ไม่รวมประกันการเดินทาง"],
    bestFor: "ผู้ที่ต้องใช้ทั้งใบจองตั๋วและใบจองโรงแรม",
    href: "/order?package=flight-hotel",
    accent: "orange",
  },
  {
    slug: "bundle3",
    name: "ใบจองตั๋ว + โรงแรม + แผนการเดินทาง",
    englishName: "Flight + Hotel + Itinerary",
    tagline: "ชุดเอกสารหลักสำหรับยื่นวีซ่าที่ต้องการความสอดคล้องทั้งแผนและใบจอง",
    originalPrice: "฿1,700",
    price: "฿1,500",
    priceNote: "ต่อคน",
    valueNote: "💰 ประหยัด ฿200",
    delivery: "⏱ ส่งภายใน 24 ชั่วโมง",
    included: [
      "ใบจองตั๋วเครื่องบินไป-กลับ",
      "ใบจองโรงแรมตลอดระยะเวลาการเดินทาง",
      "แผนการเดินทางรายวัน",
      "เอกสารทั้ง 3 รายการสอดคล้องกัน",
      "PDF มาตรฐานสถานทูต ตรวจสอบโดยทีมงาน",
    ],
    notIncluded: ["ไม่รวม Cover Letter", "ไม่รวมคำแนะนำเอกสารเฉพาะประเทศ", "ไม่รวมประกันการเดินทาง"],
    bestFor: "ผู้ที่ต้องการเอกสารหลักครบ 3 รายการ",
    href: "/order?package=bundle3",
    accent: "blue",
  },
  {
    slug: "complete",
    badge: "⭐ Recommended Package",
    name: "ชุดเอกสารครบเซ็ต",
    englishName: "Complete Visa Support Package",
    tagline: "บริการดูแลครบวงจรสำหรับผู้ที่ต้องการเอกสารพร้อมยื่นแบบมั่นใจ",
    originalPrice: "฿4,200",
    price: "฿3,500",
    priceNote: "ต่อคน",
    valueNote: "💰 ประหยัดกว่าสั่งแยก ฿700",
    delivery: "⏱ ส่งภายใน 24 ชั่วโมง",
    included: [
      "ใบจองตั๋วเครื่องบินไป-กลับ",
      "ใบจองโรงแรมตลอดระยะเวลาการเดินทาง",
      "แผนการเดินทางรายวัน",
      "เอกสารแนะนำตัว Cover Letter",
      "คำแนะนำเอกสารที่ต้องใช้ทั้งหมดเฉพาะประเทศ",
      "PDF มาตรฐานสถานทูต",
      "ตรวจสอบโดยทีมงานจริง",
    ],
    notIncluded: ["ไม่รวมประกันการเดินทาง"],
    bestFor: "ผู้ที่ต้องการเอกสารสนับสนุนครบชุดในที่เดียว",
    href: "/order?package=complete",
    highlighted: "popular",
    accent: "orange",
  },
  {
    slug: "insurance",
    name: "ประกันการเดินทาง MSIG",
    englishName: "MSIG Travel Insurance",
    tagline: "ประกันการเดินทางสำหรับประกอบการยื่นวีซ่า",
    pricePrefix: "เริ่มต้น",
    price: "฿190",
    priceNote: "ขึ้นอยู่กับแผนและระยะเวลา",
    delivery: "ปรึกษาแผนที่เหมาะสมกับประเทศปลายทาง",
    included: [
      "แผนประกันการเดินทาง MSIG",
      "ใช้ประกอบเอกสารยื่นวีซ่าได้ทุกแผน",
      "ราคาเริ่มต้น ฿190",
      "คำแนะนำการเลือกประกันที่เหมาะสม",
      "ขึ้นอยู่กับแผนและระยะเวลาการเดินทาง",
    ],
    notIncluded: ["ไม่รวมเอกสารใบจองตั๋ว/โรงแรม"],
    bestFor: "ประเทศที่กำหนดให้มีประกันการเดินทาง เช่น Schengen",
    href: "/insurance",
    accent: "emerald",
  },
];

const comparisonRows = [
  ["ใบจองตั๋วเครื่องบิน", "✓", "—", "—", "✓", "✓", "✓", "—"],
  ["ใบจองโรงแรม", "—", "✓", "—", "✓", "✓", "✓", "—"],
  ["แผนการเดินทาง", "—", "—", "✓", "—", "✓", "✓", "—"],
  ["Cover Letter", "—", "—", "—", "—", "—", "✓", "—"],
  ["คำแนะนำเอกสารเฉพาะประเทศ", "—", "—", "—", "—", "—", "✓", "—"],
  ["ประกันการเดินทาง", "—", "—", "—", "—", "—", "—", "✓"],
  ["PDF มาตรฐานสถานทูต", "✓", "✓", "✓", "✓", "✓", "✓", "—"],
  ["ตรวจสอบโดยทีมงาน", "✓", "✓", "✓", "✓", "✓", "✓", "✓"],
  ["ระยะเวลาส่ง", "24 ชม.", "24 ชม.", "24 ชม.", "24 ชม.", "24 ชม.", "24 ชม.", "ตามแผน"],
  [
    "ราคา",
    "฿500",
    "฿500",
    "฿700",
    "฿800",
    "฿1,500",
    "฿3,500",
    "เริ่มต้น ฿190",
  ],
];

const addOns = [
  {
    title: "Express Delivery",
    icon: "⚡",
    text: "อัปเกรดเป็น Express — รับเอกสารภายใน 3–6 ชั่วโมง",
    price: "+ ฿390",
  },
  {
    title: "ผู้เดินทางเพิ่มเติม",
    icon: "👥",
    text: "เพิ่มชื่อผู้เดินทางในเอกสารชุดเดียวกัน",
    price: "+ ฿290 ต่อคน",
  },
  {
    title: "แก้ไขเอกสาร",
    icon: "✏️",
    text: "แก้ไขข้อมูลหลังได้รับเอกสารแล้ว (ภายใน 48 ชั่วโมง)",
    price: "+ ฿150",
  },
];

const quickGuide = [
  ["วีซ่า Schengen", "แนะนำ ชุดครบเซ็ต + ประกัน (บังคับมีประกันการเดินทาง)"],
  ["วีซ่า UK", "แนะนำ ชุดครบเซ็ต"],
  ["วีซ่าญี่ปุ่น / เกาหลี", "แนะนำ ชุดครบเซ็ต หรือ ใบจองตั๋ว + โรงแรม"],
  ["วีซ่า US / Canada / Australia", "แนะนำ ใบจองตั๋ว + แผนการเดินทาง"],
];

const faqs = [
  [
    "สั่งสำหรับหลายคนในครอบครัวได้ไหม?",
    "ได้ครับ/ค่ะ สามารถระบุจำนวนผู้เดินทางในฟอร์มสั่งซื้อ ราคาคำนวณต่อคน",
  ],
  [
    "ถ้าต้องการเร่งด่วนกว่า 24 ชั่วโมงทำได้ไหม?",
    "ได้ สามารถเลือก Express Add-on เพื่อรับเอกสารภายใน 3–6 ชั่วโมง (ในเวลาทำการ)",
  ],
  [
    "ถ้าข้อมูลผิด แก้ไขได้ไหม?",
    "ได้ หากพบข้อผิดพลาดจากข้อมูลที่กรอก สามารถแจ้งทีมงานเพื่อแก้ไข โปรดตรวจสอบข้อมูลให้ถูกต้องก่อนยืนยันออเดอร์",
  ],
  [
    "ชำระเงินแล้วได้รับเอกสารเมื่อไหร่?",
    "นับจากวันที่ชำระเงินสำเร็จและข้อมูลครบถ้วน เอกสารจะส่งทางอีเมลภายใน 24 ชั่วโมง (แพ็กเกจมาตรฐาน)",
  ],
  [
    "เอกสารส่งมาในรูปแบบอะไร?",
    "ส่งเป็นไฟล์ PDF ทางอีเมลที่ระบุในฟอร์ม สามารถ print หรือแนบในระบบยื่นวีซ่าออนไลน์ได้ทันที",
  ],
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "BKK AIR Packages & Pricing",
  serviceType: "visa document package Thailand",
  provider: { "@type": "Organization", name: "BKK AIR" },
  areaServed: "Thailand",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Visa Document Packages",
    itemListElement: packages.map((pkg) => ({
      "@type": "Offer",
      name: pkg.name,
      url: `https://bkkair.com${pkg.href}`,
    })),
  },
};

const complianceDisclaimer =
  "BKK AIR ให้บริการเฉพาะการจัดเตรียมเอกสารสนับสนุนวีซ่าเท่านั้น เราไม่ใช่ตัวแทนวีซ่า ไม่มีความสัมพันธ์พิเศษกับสถานทูต และไม่รับประกันการอนุมัติวีซ่า การอนุมัติวีซ่าเป็นดุลยพินิจของสถานทูตหรือสถานกงสุลในทุกกรณี";

function accentClasses(accent: string, highlighted?: string) {
  if (highlighted === "popular") {
    return {
      card: "border-4 border-[#FF5722] shadow-orange-200/60 lg:-translate-y-2",
      badge: "bg-[#FF5722] text-white",
      button: "bg-[#FF5722] text-white shadow-lg shadow-orange-200/60 hover:bg-[#E64A19]",
      icon: "text-[#FF5722]",
    };
  }

  if (highlighted === "premium") {
    return {
      card: "border-2 border-emerald-300 shadow-emerald-100/80",
      badge: "bg-emerald-600 text-white",
      button: "bg-emerald-600 text-white shadow-lg shadow-emerald-200/60 hover:bg-emerald-700",
      icon: "text-emerald-600",
    };
  }

  if (accent === "orange") {
    return {
      card: "border border-orange-100",
      badge: "bg-orange-50 text-[#FF5722]",
      button: "border-2 border-orange-200 bg-white text-[#FF5722] hover:bg-orange-50",
      icon: "text-[#FF5722]",
    };
  }

  return {
    card: "border border-blue-100",
    badge: "bg-blue-50 text-[#2563EB]",
    button: "border-2 border-blue-200 bg-white text-[#2563EB] hover:bg-blue-50",
    icon: "text-[#2563EB]",
  };
}

export default function PackagesPage() {
  return (
    <MarketingShell>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#F7FBFF] via-[#EEF6FF] to-[#FFF7F0] px-6 py-16 md:py-24 lg:px-8">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-200/60 blur-3xl" />
          <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-orange-200/60 blur-3xl" />
          <div className="absolute left-1/2 top-8 h-64 w-64 rounded-full bg-cyan-200/40 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <nav className="text-sm font-bold text-slate-500" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#2563EB]">หน้าแรก</Link>
              <span className="mx-2">›</span>
              <span className="text-slate-800">แพ็กเกจและราคา</span>
            </nav>

            <p className="mt-6 text-sm font-black uppercase tracking-widest text-[#2563EB]">
              Packages & Pricing
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              เลือกเอกสารที่ใช่ ในราคาที่โปร่งใส
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
              ทุกแพ็กเกจตรวจสอบโดยทีมงานจริง ส่งเป็น PDF มาตรฐานสถานทูต ภายใน 24 ชั่วโมง
              ไม่มีค่าใช้จ่ายแอบแฝง ดูราคาได้เลยก่อนสั่ง
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-sm font-semibold leading-relaxed text-slate-500">
              ราคาใบจองตั๋วเครื่องบินยื่นวีซ่า ราคาใบจองโรงแรมยื่นวีซ่า
              และรายละเอียดแพ็กเกจเอกสารยื่นวีซ่า (flight reservation for visa price)
            </p>

            <ul className="mt-8 flex flex-wrap justify-center gap-3" aria-label="จุดเด่นบริการ">
              {trustBadges.map((badge) => (
                <li key={badge} className="inline-flex items-center gap-2 rounded-full border border-blue-100/70 bg-white/85 px-4 py-2 text-sm font-bold text-slate-700 shadow-[0_10px_40px_rgba(15,23,42,0.06)] backdrop-blur">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                  {badge}
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto mt-10 max-w-5xl rounded-3xl border border-orange-200 bg-white/90 px-6 py-5 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
            <ShieldCheck className="mx-auto h-6 w-6 text-[#FF5722]" aria-hidden="true" />
            <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-700">{complianceDisclaimer}</p>
            <p className="mt-3 text-xs font-semibold leading-relaxed text-slate-600">
              ราคาทั้งหมดแสดงเป็นสกุลเงินบาท (THB) และยังไม่รวมภาษีมูลค่าเพิ่ม (VAT) 7% ซึ่งอาจถูกเรียกเก็บเพิ่มเติมตามกฎหมายที่เกี่ยวข้อง
            </p>
            <p className="mt-1 text-xs font-semibold leading-relaxed text-slate-500">
              ราคาที่มีผลคือราคาที่แสดง ณ เวลาที่ยืนยันคำสั่งซื้อ
            </p>
          </div>
        </div>
      </section>

      <section id="package-cards" className="bg-[#F8FAFC] px-6 py-16 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-widest text-[#2563EB]">กรองตามประเภทเอกสาร</p>
            <p className="mt-3 text-base font-semibold text-slate-600">
              ทั้งหมด | ใบจองตั๋ว | ใบจองโรงแรม | ชุดครบเซ็ต | พร้อมประกัน
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {packages.map((pkg) => {
              const styles = accentClasses(pkg.accent, pkg.highlighted);

              return (
                <article
                  key={pkg.slug}
                  className={`relative flex h-full flex-col rounded-[2rem] bg-white p-6 md:p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-300 md:hover:-translate-y-1 ${styles.card}`}
                >
                  {pkg.badge ? (
                    <span className={`mb-4 w-fit rounded-full px-4 py-1 text-xs font-black uppercase tracking-wider ${styles.badge}`}>
                      {pkg.badge}
                    </span>
                  ) : (
                    <span className={`mb-4 w-fit rounded-full px-4 py-1 text-xs font-black uppercase tracking-wider ${styles.badge}`}>
                      Package
                    </span>
                  )}

                  <h2 className="text-2xl font-black leading-tight text-slate-900">
                    {pkg.name}
                  </h2>
                  <p className="mt-1 text-sm font-bold text-slate-400">{pkg.englishName}</p>
                  <p className="mt-4 min-h-[72px] text-sm leading-relaxed text-slate-600">{pkg.tagline}</p>

                  <div className="mt-6">
                    {"originalPrice" in pkg && pkg.originalPrice && (
                      <p className="text-xs font-bold text-slate-400 line-through">{pkg.originalPrice}</p>
                    )}
                    <p className="text-3xl font-black text-slate-900">
                      {"pricePrefix" in pkg && pkg.pricePrefix ? (
                        <span className="mr-2 align-middle text-sm font-bold text-slate-500">{pkg.pricePrefix}</span>
                      ) : null}
                      {pkg.price}
                    </p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-400">{pkg.priceNote}</p>
                    {"valueNote" in pkg && pkg.valueNote && (
                      <p className="mt-3 rounded-2xl bg-orange-50 px-4 py-2 text-sm font-bold text-orange-700">
                        {pkg.valueNote}
                      </p>
                    )}
                    <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-black text-blue-700">
                      <Clock3 className="h-4 w-4" aria-hidden="true" />
                      {pkg.delivery}
                    </p>
                  </div>

                  <div className="mt-7">
                    <h3 className="text-sm font-black uppercase tracking-wider text-slate-900">รวมในแพ็กเกจ</h3>
                    <ul className="mt-3 space-y-3">
                      {pkg.included.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {pkg.notIncluded.length > 0 && (
                    <div className="mt-7">
                      <h3 className="text-sm font-black uppercase tracking-wider text-slate-900">ไม่รวม</h3>
                      <ul className="mt-3 space-y-2">
                        {pkg.notIncluded.map((item) => (
                          <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-500">
                            <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-slate-300" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <p className="mt-7 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold leading-relaxed text-slate-600">
                    🎯 เหมาะสำหรับ: {pkg.bestFor}
                  </p>

                  <div className="mt-auto pt-6">
                    <Link
                      href={pkg.href}
                      className={`inline-flex h-12 w-full items-center justify-center rounded-2xl text-sm font-black transition-all focus:outline-none focus:ring-4 focus:ring-blue-100 ${styles.button}`}
                    >
                      สั่งแพ็กเกจนี้ <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                    <Link href="/contact" className="mt-3 inline-flex w-full justify-center text-sm font-bold text-slate-500 hover:text-[#2563EB]">
                      มีคำถาม? ปรึกษาทีมงานก่อน
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              เปรียบเทียบแพ็กเกจทั้งหมด
            </h2>
          </div>

          <div className="mt-10 overflow-x-auto rounded-[2rem] border border-blue-100 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <table className="min-w-[860px] w-full text-left text-sm">
              <thead className="sticky top-24 z-10 bg-blue-50 text-slate-900">
                <tr>
                  {[
                    "รายการ",
                    "ตั๋ว ฿500",
                    "โรงแรม ฿500",
                    "แผน ฿700",
                    "ตั๋ว+โรงแรม ฿800",
                    "ตั๋ว+โรงแรม+แผน ฿1,500",
                    "ครบเซ็ต ⭐ ฿3,500",
                    "MSIG เริ่มต้น ฿190",
                  ].map((heading) => (
                    <th key={heading} className="border-b border-blue-100 px-5 py-4 text-sm font-black">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row[0]} className="odd:bg-white even:bg-slate-50/70">
                    {row.map((cell, index) => (
                      <td key={`${row[0]}-${index}`} className={`border-b border-slate-100 px-5 py-4 ${index === 0 ? "font-bold text-slate-800" : "text-center font-semibold text-slate-600"}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="bg-white">
                  <td className="px-5 py-4 font-bold text-slate-800">สั่งเลย</td>
                  {packages.map((pkg) => (
                    <td key={pkg.slug} className="px-5 py-4 text-center">
                      <Link href={pkg.href} className="inline-flex rounded-xl bg-[#2563EB] px-4 py-2 text-xs font-black text-white hover:bg-blue-700">
                        สั่งเลย
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] px-6 py-16 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-widest text-[#2563EB]">เพิ่มเติมได้ตามต้องการ</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              ต้องการมากกว่านี้? เพิ่มได้เลย
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:gap-8 md:grid-cols-3">
            {addOns.map((addon) => (
              <article key={addon.title} className="rounded-[2rem] border border-blue-100 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                <div className="text-3xl" aria-hidden="true">{addon.icon}</div>
                <h3 className="mt-4 text-xl font-black text-slate-900">{addon.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{addon.text}</p>
                <p className="mt-5 text-lg font-black text-[#FF5722]">{addon.price}</p>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl rounded-2xl border border-orange-100 bg-orange-50 px-5 py-4 text-center text-sm font-semibold leading-relaxed text-orange-900">
            Add-ons เป็นข้อมูลประกอบเท่านั้น และควรเลือกได้ใน order form ไม่ใช่แยก checkout ต่างหาก
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              ยังไม่แน่ใจว่าต้องใช้เอกสารอะไร?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              แต่ละสถานทูตมีข้อกำหนดต่างกัน ทีมงานของเราช่วยแนะนำได้ว่าคุณต้องการเอกสารอะไรบ้าง สำหรับวีซ่าและประเทศที่คุณจะยื่น
            </p>
            <Link href="/contact" className="mt-7 inline-flex h-12 items-center justify-center rounded-2xl bg-[#FF5722] px-6 text-sm font-black text-white shadow-lg shadow-orange-200/60 hover:bg-[#E64A19]">
              💬 ปรึกษาทีมงานฟรี ไม่มีข้อผูกมัด <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="rounded-[2rem] border border-blue-100 bg-blue-50/60 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <h3 className="text-lg font-black text-slate-900">หรือดูแนวทางเบื้องต้น</h3>
            <ul className="mt-5 space-y-4">
              {quickGuide.map(([country, guide]) => (
                <li key={country} className="rounded-2xl bg-white px-4 py-3 text-sm leading-relaxed shadow-sm">
                  <span className="font-black text-slate-900">{country}</span>
                  <span className="text-slate-600"> → {guide}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm font-semibold leading-relaxed text-slate-500">
              ข้อกำหนดเอกสารอาจเปลี่ยนแปลงตามนโยบายของแต่ละสถานทูต กรุณาตรวจสอบข้อมูลล่าสุดจากเว็บไซต์สถานทูตโดยตรง
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] px-6 py-16 md:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              คำถามเกี่ยวกับแพ็กเกจ
            </h2>
          </div>

          <div className="mt-12 space-y-4 md:space-y-5">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-black text-slate-900">
                  {question}
                  <ArrowDown className="h-5 w-5 shrink-0 text-[#2563EB] transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="mt-4 border-t border-slate-100 pt-4 text-base leading-relaxed text-slate-600">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#F7FBFF] via-[#EEF6FF] to-[#FFF7F0] px-6 py-16 md:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            พร้อมเริ่มได้เลย
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            เลือกแพ็กเกจที่ใช่ กรอกข้อมูล และรับ PDF พร้อมยื่นสถานทูตภายใน 24 ชั่วโมง
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="#package-cards" className="inline-flex h-12 items-center justify-center rounded-2xl bg-[#2563EB] px-6 text-sm font-black text-white shadow-lg shadow-blue-200/60 hover:bg-blue-700">
              📄 ดูแพ็กเกจทั้งหมด <ArrowDown className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-2xl border border-blue-200 bg-white px-6 text-sm font-black text-slate-700 shadow-[0_10px_40px_rgba(15,23,42,0.06)] hover:bg-blue-50">
              💬 ปรึกษาทีมงานก่อน <MessageCircle className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {["ไม่มีค่าใช้จ่ายแอบแฝง", "ดูราคาก่อนสั่งได้เลย", "ตรวจสอบโดยทีมงานจริง"].map((item) => (
              <li key={item} className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/85 px-4 py-2 text-sm font-bold text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <p className="mx-auto mt-8 max-w-3xl rounded-3xl border border-orange-200 bg-white/90 px-6 py-5 text-sm font-semibold leading-relaxed text-slate-700 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            {complianceDisclaimer}
          </p>
        </div>
      </section>
    </MarketingShell>
  );
}

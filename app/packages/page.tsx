import type { Metadata } from "next";
import type { ComponentType, ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileCheck2,
  MessageCircle,
  PlaneTakeoff,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import MarketingShell from "../../components/marketing/MarketingShell";
import JsonLd from "../../components/marketing/JsonLd";

export const metadata: Metadata = {
  title: "แพ็กเกจและราคา | เอกสารสนับสนุนวีซ่า — BKK AIR",
  description:
    "เลือกแพ็กเกจเอกสารยื่นวีซ่าที่เหมาะกับคุณ — ใบจองตั๋วเครื่องบิน ใบจองโรงแรม แผนการเดินทาง และประกันการเดินทาง ราคาชัดเจน ส่ง PDF ภายใน 24 ชั่วโมง",
};

const recommendedPackage = {
  slug: "complete",
  name: "ชุดเอกสารครบเซ็ต",
  subtitle: "Complete Visa Support Package",
  price: "฿3,500",
  unit: "ต่อคน",
  originalPrice: "฿4,200",
  save: "฿700",
  href: "/order?package=complete",
  benefits: [
    "ใบจองตั๋วเครื่องบิน",
    "ใบจองโรงแรม",
    "แผนการเดินทาง",
    "Cover Letter",
    "คำแนะนำเอกสารเฉพาะประเทศ",
    "PDF สำหรับประกอบการยื่นวีซ่า",
  ],
};

const singlePackages = [
  {
    slug: "flight",
    name: "ใบจองตั๋วเครื่องบิน",
    subtitle: "Flight Reservation",
    price: "฿500",
    unit: "ต่อคน",
    delivery: "ส่งภายใน 24 ชั่วโมง",
    href: "/order?package=flight",
    icon: PlaneTakeoff,
    benefits: ["ใบจองไป-กลับ", "ข้อมูลตรงตามหนังสือเดินทาง", "PDF มาตรฐานสถานทูต"],
  },
  {
    slug: "hotel",
    name: "ใบจองโรงแรม",
    subtitle: "Hotel Reservation",
    price: "฿500",
    unit: "ต่อคน",
    delivery: "ส่งภายใน 24 ชั่วโมง",
    href: "/order?package=hotel",
    icon: FileCheck2,
    benefits: ["ครอบคลุมช่วงเข้าพัก", "แสดงชื่อผู้เข้าพัก", "PDF สำหรับประกอบคำขอ"],
  },
  {
    slug: "itinerary",
    name: "เอกสารแผนการเดินทาง",
    subtitle: "Travel Itinerary",
    price: "฿700",
    unit: "ต่อคน",
    delivery: "ส่งภายใน 24 ชั่วโมง",
    href: "/order?package=itinerary",
    icon: Sparkles,
    benefits: ["แผนรายวัน", "สอดคล้องกับเมืองปลายทาง", "ปรับตามเส้นทางจริง"],
  },
];

const bundlePackages = [
  {
    slug: "flight-hotel",
    name: "ใบจองตั๋ว + ใบจองโรงแรม",
    subtitle: "Flight + Hotel Bundle",
    price: "฿800",
    unit: "ต่อคน",
    originalPrice: "฿1,000",
    save: "฿200",
    delivery: "ส่งภายใน 24 ชั่วโมง",
    href: "/order?package=flight-hotel",
    benefits: ["ใบจองตั๋ว", "ใบจองโรงแรม", "ประหยัดกว่าสั่งแยก"],
  },
  {
    slug: "bundle3",
    name: "ใบจองตั๋ว + โรงแรม + แผนการเดินทาง",
    subtitle: "Flight + Hotel + Itinerary",
    price: "฿1,500",
    unit: "ต่อคน",
    originalPrice: "฿1,700",
    save: "฿200",
    delivery: "ส่งภายใน 24 ชั่วโมง",
    href: "/order?package=bundle3",
    benefits: ["เอกสารหลัก 3 รายการ", "ข้อมูลสอดคล้องกัน", "เหมาะกับเคสทั่วไป"],
  },
];

const insurancePackage = {
  slug: "insurance",
  name: "ประกันการเดินทาง MSIG",
  subtitle: "MSIG Travel Insurance",
  pricePrefix: "เริ่มต้น",
  price: "฿190",
  unit: "ขึ้นอยู่กับแผนและระยะเวลา",
  delivery: "ปรึกษาแผนที่เหมาะสม",
  href: "/insurance",
  benefits: ["ใช้ประกอบเอกสารยื่นวีซ่า", "เหมาะกับ Schengen", "ทีมงานช่วยแนะนำแผน"],
};

const comparisonRows = [
  ["ราคา", "฿500", "฿500", "฿700", "฿800", "฿1,500", "฿3,500", "เริ่มต้น ฿190"],
  ["ใบจองตั๋ว", "✓", "-", "-", "✓", "✓", "✓", "-"],
  ["ใบจองโรงแรม", "-", "✓", "-", "✓", "✓", "✓", "-"],
  ["แผนการเดินทาง", "-", "-", "✓", "-", "✓", "✓", "-"],
  ["Cover Letter", "-", "-", "-", "-", "-", "✓", "-"],
  ["คำแนะนำเฉพาะประเทศ", "-", "-", "-", "-", "-", "✓", "-"],
  ["ประกัน", "-", "-", "-", "-", "-", "-", "✓"],
  ["ส่งงาน", "24 ชม.", "24 ชม.", "24 ชม.", "24 ชม.", "24 ชม.", "24 ชม.", "ตามแผน"],
];

const faqItems = [
  ["ควรเลือกแพ็กเกจไหนดี?", "ถ้ายังไม่แน่ใจ แนะนำชุดเอกสารครบเซ็ต เพราะครอบคลุมเอกสารหลักที่ใช้บ่อยและมีคำแนะนำเฉพาะประเทศ"],
  ["ราคาเป็นต่อคนหรือไม่?", "ใช่ ราคาทุกแพ็กเกจเป็นราคาต่อคน ยกเว้นประกันที่ขึ้นอยู่กับแผนและระยะเวลาการเดินทาง"],
  ["ส่งเอกสารภายในกี่ชั่วโมง?", "แพ็กเกจมาตรฐานส่งภายใน 24 ชั่วโมงหลังข้อมูลครบถ้วนและชำระเงินเรียบร้อย"],
  ["BKK AIR ช่วยเตรียมเอกสารยื่นวีซ่าอย่างไร?", "เราให้บริการเฉพาะการจัดเตรียมเอกสารสนับสนุนเท่านั้น การอนุมัติวีซ่าเป็นดุลยพินิจของสถานทูตหรือสถานกงสุล"],
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "BKK AIR Packages & Pricing",
  serviceType: "visa document package Thailand",
  provider: { "@type": "Organization", name: "BKK AIR" },
  areaServed: "Thailand",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

const disclaimer =
  "BKK AIR ให้บริการจัดเตรียมเอกสารสนับสนุนวีซ่าเท่านั้น ไม่ใช่ตัวแทนวีซ่า และไม่มีส่วนในการตัดสินผลวีซ่า";

export default function PackagesPage() {
  return (
    <MarketingShell>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      <section className="relative overflow-hidden bg-slate-950 px-6 py-16 text-white md:py-24 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.24),transparent_32%),radial-gradient(circle_at_85%_15%,rgba(249,115,22,0.20),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-orange-300">Packages & Pricing</p>
            <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              เลือกแพ็กเกจเอกสารยื่นวีซ่าให้ง่ายขึ้น
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
              ราคาโปร่งใส ตรวจสอบโดยทีมงานจริง และส่งเป็น PDF สำหรับประกอบการยื่นวีซ่า
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#recommended" className="inline-flex h-12 items-center justify-center rounded-2xl bg-accent-orange px-6 text-sm font-black text-white shadow-[0_18px_48px_rgba(249,115,22,0.32)] transition hover:bg-accent-hover">
                ดูแพ็กเกจแนะนำ
              </Link>
              <a href="https://line.me/ti/p/@823lateh" className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-6 text-sm font-black text-white backdrop-blur transition hover:bg-white/15">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                ปรึกษาฟรี
              </a>
            </div>
          </div>
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/10 p-5 text-sm font-semibold leading-relaxed text-slate-200 backdrop-blur">
            {disclaimer}
          </div>
        </div>
      </section>

      <section id="recommended" className="bg-[#F8FAFC] px-6 py-12 md:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <RecommendedCard />
        </div>
      </section>

      <PackageGroup
        eyebrow="Single Documents"
        title="ต้องการเอกสารเดี่ยว เลือกเฉพาะที่ใช้"
        text="เหมาะสำหรับผู้ที่มีเอกสารบางส่วนแล้ว และต้องการเติมเฉพาะรายการที่สถานทูตกำหนด"
        packages={singlePackages}
      />

      <PackageGroup
        eyebrow="Bundle Packages"
        title="แพ็กเกจรวม ลดความยุ่งยาก"
        text="เลือก bundle เมื่อต้องการให้ข้อมูลตั๋ว โรงแรม และแผนเดินทางสอดคล้องกันมากขึ้น"
        packages={bundlePackages}
        tinted
      />

      <section className="bg-white px-6 py-12 md:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.06)] md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-700">Insurance</p>
              <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">{insurancePackage.name}</h2>
              <p className="mt-2 text-sm font-bold text-slate-500">{insurancePackage.subtitle}</p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-3">
                {insurancePackage.benefits.map((item) => (
                  <Benefit key={item}>{item}</Benefit>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-white p-5 shadow-xl shadow-emerald-100/70">
              <p className="text-sm font-bold text-slate-500">{insurancePackage.pricePrefix}</p>
              <p className="text-4xl font-black text-slate-950">{insurancePackage.price}</p>
              <p className="mt-1 text-xs font-bold text-slate-500">{insurancePackage.unit}</p>
              <Link href={insurancePackage.href} className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-2xl bg-emerald-600 px-5 text-sm font-black text-white transition hover:bg-emerald-700">
                ดูประกัน
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ComparisonTable />

      <section className="bg-[#F8FAFC] px-6 py-12 md:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl border border-orange-100 bg-white p-6 text-center shadow-[0_20px_70px_rgba(15,23,42,0.07)] md:p-9">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-accent-orange">Help Me Choose</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">ไม่แน่ใจว่าควรเลือกแพ็กเกจไหน?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            บอกประเทศปลายทางและวันเดินทางของคุณ ทีมงานจะแนะนำแพ็กเกจที่เหมาะสมให้ฟรี
          </p>
          <a
            href="https://line.me/ti/p/@823lateh"
            className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-accent-orange px-6 text-sm font-black text-white shadow-lg shadow-orange-200/70 transition hover:bg-accent-hover"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            ปรึกษาทีมงานฟรี
          </a>
        </div>
      </section>

      <section className="bg-white px-6 py-12 md:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#2563EB]">FAQ</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">คำถามเกี่ยวกับแพ็กเกจ</h2>
          </div>
          <div className="mt-8 space-y-3">
            {faqItems.map(([question, answer]) => (
              <details key={question} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-black text-slate-950">
                  {question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 border-t border-slate-100 pt-3 text-sm leading-relaxed text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-14 text-white md:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">พร้อมเริ่มจัดเอกสารแล้ว?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
            เลือกแพ็กเกจที่เหมาะกับคุณ หรือให้ทีมงานช่วยแนะนำก่อนสั่งซื้อ
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/order?package=complete" className="inline-flex h-12 items-center justify-center rounded-2xl bg-accent-orange px-6 text-sm font-black text-white transition hover:bg-accent-hover">
              สั่งชุดครบเซ็ต
            </Link>
            <a href="https://line.me/ti/p/@823lateh" className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-6 text-sm font-black text-white transition hover:bg-white/15">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              ปรึกษาฟรี
            </a>
          </div>
          <p className="mx-auto mt-8 max-w-3xl rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-sm font-semibold leading-relaxed text-slate-300">
            {disclaimer}
          </p>
        </div>
      </section>

      <div className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-2 gap-2 rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-[0_20px_70px_rgba(15,23,42,0.22)] backdrop-blur md:hidden">
        <a href="https://line.me/ti/p/@823lateh" className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 text-sm font-black text-slate-800">
          ปรึกษาฟรี
        </a>
        <Link href="/order?package=complete" className="inline-flex h-11 items-center justify-center rounded-xl bg-accent-orange text-sm font-black text-white">
          สั่งเลย
        </Link>
      </div>
    </MarketingShell>
  );
}

function RecommendedCard() {
  return (
    <article className="relative overflow-hidden rounded-[2rem] border border-orange-200 bg-white p-6 shadow-[0_30px_90px_rgba(249,115,22,0.18)] md:p-9">
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-orange-200/40 blur-3xl" />
      <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <span className="inline-flex rounded-full bg-accent-orange px-4 py-1.5 text-xs font-black uppercase tracking-wider text-white">
            แนะนำที่สุด
          </span>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            {recommendedPackage.name}
          </h2>
          <p className="mt-2 text-sm font-black uppercase tracking-widest text-orange-600">{recommendedPackage.subtitle}</p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600">
            สำหรับลูกค้าที่ต้องการเอกสารสนับสนุนครบชุด ลดความเสี่ยงเรื่องข้อมูลไม่สอดคล้อง และให้ทีมงานช่วยตรวจรายละเอียดก่อนส่งไฟล์
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {recommendedPackage.benefits.map((item) => (
              <Benefit key={item}>{item}</Benefit>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 to-white p-6 shadow-xl shadow-orange-100/70">
          <p className="text-sm font-bold text-slate-500 line-through">จากปกติ {recommendedPackage.originalPrice}</p>
          <div className="mt-2 flex items-end gap-2">
            <span className="text-5xl font-black text-slate-950">{recommendedPackage.price}</span>
            <span className="pb-2 text-sm font-bold text-slate-500">{recommendedPackage.unit}</span>
          </div>
          <p className="mt-3 inline-flex rounded-full bg-white px-3 py-1 text-sm font-black text-orange-700 shadow-sm">
            ประหยัด {recommendedPackage.save}
          </p>
          <div className="mt-6 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-slate-700">
            <Clock3 className="h-4 w-4 text-[#2563EB]" aria-hidden="true" />
            ส่งภายใน 24 ชั่วโมง
          </div>
          <Link href={recommendedPackage.href} className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-2xl bg-accent-orange text-sm font-black text-white shadow-lg shadow-orange-200/70 transition hover:bg-accent-hover">
            เลือกชุดครบเซ็ต
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}

type PackageCardItem = {
  slug: string;
  name: string;
  subtitle: string;
  price: string;
  unit: string;
  delivery: string;
  href: string;
  benefits: string[];
  originalPrice?: string;
  save?: string;
  icon?: ComponentType<{ className?: string }>;
};

function PackageGroup({
  eyebrow,
  title,
  text,
  packages,
  tinted = false,
}: {
  eyebrow: string;
  title: string;
  text: string;
  packages: PackageCardItem[];
  tinted?: boolean;
}) {
  return (
    <section className={`${tinted ? "bg-[#F8FAFC]" : "bg-white"} px-6 py-12 md:py-16 lg:px-8`}>
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#2563EB]">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">{title}</h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">{text}</p>
        </div>
        <div className={`mt-8 grid gap-5 ${packages.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
          {packages.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PackageCard({ pkg }: { pkg: PackageCardItem }) {
  const Icon = pkg.icon || FileCheck2;

  return (
    <article className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_16px_55px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_70px_rgba(37,99,235,0.10)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-orange-300">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-xl font-black leading-tight text-slate-950">{pkg.name}</h3>
      <p className="mt-1 text-sm font-bold text-slate-400">{pkg.subtitle}</p>
      <div className="mt-5">
        {pkg.originalPrice && <p className="text-xs font-bold text-slate-400 line-through">{pkg.originalPrice}</p>}
        <span className="text-4xl font-black text-slate-950">{pkg.price}</span>
        <span className="ml-2 text-sm font-bold text-slate-500">{pkg.unit}</span>
        {pkg.save && <p className="mt-2 text-sm font-black text-orange-700">ประหยัด {pkg.save}</p>}
      </div>
      <ul className="mt-5 space-y-2.5">
        {pkg.benefits.map((item) => (
          <Benefit key={item}>{item}</Benefit>
        ))}
      </ul>
      <p className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-black text-blue-700">
        <Clock3 className="h-4 w-4" aria-hidden="true" />
        {pkg.delivery}
      </p>
      <div className="mt-auto pt-6">
        <Link href={pkg.href} className="inline-flex h-11 w-full items-center justify-center rounded-2xl border border-blue-200 bg-white text-sm font-black text-[#2563EB] transition hover:bg-blue-50">
          สั่งแพ็กเกจนี้
        </Link>
      </div>
    </article>
  );
}

function Benefit({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm font-semibold leading-relaxed text-slate-700">
      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
      <span>{children}</span>
    </li>
  );
}

function ComparisonTable() {
  const headings = ["รายการ", "ตั๋ว", "โรงแรม", "แผน", "ตั๋ว+โรงแรม", "Bundle 3", "ครบเซ็ต", "MSIG"];

  return (
    <section className="bg-white px-6 py-12 md:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#2563EB]">Compare</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">เปรียบเทียบแบบย่อ</h2>
          </div>
          <p className="max-w-xl text-sm font-medium leading-relaxed text-slate-500">
            ตารางนี้ช่วยให้เห็นภาพรวมเร็วขึ้น บนมือถือสามารถเลื่อนซ้ายขวาได้
          </p>
        </div>
        <div className="mt-7 overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
          <table className="min-w-[840px] w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 text-white">
              <tr>
                {headings.map((heading) => (
                  <th key={heading} className="px-4 py-3 font-black">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {comparisonRows.map((row) => (
                <tr key={row[0]} className="odd:bg-white even:bg-slate-50">
                  {row.map((cell, index) => (
                    <td key={`${row[0]}-${index}`} className={`px-4 py-3 ${index === 0 ? "font-black text-slate-900" : "text-center font-bold text-slate-600"}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

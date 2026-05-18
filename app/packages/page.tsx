import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import MarketingShell from "../../components/marketing/MarketingShell";
import JsonLd from "../../components/marketing/JsonLd";
import { packages } from "../../components/marketing/content";

export const metadata: Metadata = {
  title: "แพ็กเกจและราคา | BKK AIR",
  description: "เปรียบเทียบแพ็กเกจบริการจัดเตรียมใบจองตั๋วเครื่องบิน ใบจองโรงแรม และเอกสารยื่นวีซ่า ราคาโปร่งใส ตรวจสอบโดยทีมงานก่อนดำเนินการ",
};

export default function PackagesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "BKK AIR Visa Document Support Packages",
    serviceType: "Flight reservation for visa and hotel booking for visa",
    provider: { "@type": "Organization", name: "BKK AIR" },
    offers: packages.map((pkg) => ({
      "@type": "Offer",
      name: pkg.name,
      price: pkg.price.replace(/[^\d]/g, ""),
      priceCurrency: "THB",
      url: `https://bkkair.com/order?package=${pkg.slug}`,
    })),
  };

  return (
    <MarketingShell>
      <JsonLd data={serviceSchema} />
      <section className="relative overflow-hidden bg-[#F8FAFC] px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-widest text-[#2563EB]">Packages & Pricing</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">แพ็กเกจและราคา</h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              เลือกแพ็กเกจเอกสารยื่นวีซ่าที่เหมาะกับแผนเดินทางของคุณ ทุกคำขอผ่านทีมงานตรวจสอบก่อนจัดเตรียมเอกสาร
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <article
                key={pkg.slug}
                className={`flex h-full flex-col rounded-[2rem] bg-white p-7 shadow-lg shadow-slate-200/50 ${pkg.highlighted ? "border-4 border-[#FF5722]" : "border border-slate-200"}`}
              >
                {pkg.highlighted && (
                  <span className="mb-4 w-fit rounded-full bg-[#FF5722] px-4 py-1 text-xs font-black uppercase tracking-wider text-white">
                    Most Popular
                  </span>
                )}
                <h2 className="text-2xl font-black text-slate-900">{pkg.name}</h2>
                <p className="mt-2 min-h-[52px] text-sm leading-relaxed text-slate-500">{pkg.tagline}</p>
                <div className="mt-6 text-4xl font-black text-slate-900">{pkg.price}</div>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-400">รวม VAT แล้ว</p>

                <ul className="mt-7 space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 border-t border-slate-100 pt-5 text-sm leading-relaxed text-slate-500">
                  <span className="font-bold text-slate-700">เหมาะสำหรับ: </span>
                  {pkg.bestFor}
                </p>
                <Link
                  href={`/order?package=${pkg.slug}`}
                  className={`mt-auto inline-flex h-12 items-center justify-center rounded-2xl text-sm font-black transition-all ${pkg.highlighted ? "bg-[#FF5722] text-white shadow-lg shadow-orange-200/60 hover:bg-[#E64A19]" : "border-2 border-blue-200 bg-white text-[#2563EB] hover:bg-blue-50"}`}
                >
                  สั่งซื้อแพ็กเกจนี้
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-orange-100 bg-orange-50 px-6 py-5 text-sm leading-relaxed text-orange-900">
            <ShieldCheck className="mr-2 inline h-5 w-5" />
            ราคาข้างต้นเป็นค่าบริการจัดเตรียมเอกสารสนับสนุนการยื่นวีซ่า ไม่รวมค่าธรรมเนียมสถานทูต ศูนย์รับคำร้อง ค่าตั๋วจริง หรือค่าโรงแรมจริง
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}


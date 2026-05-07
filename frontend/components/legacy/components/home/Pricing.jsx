import {
  CheckCircle2,
  Package,
  Sparkles,
  PlaneTakeoff,
  ShieldCheck,
  Crown,
} from "lucide-react";
import React from "react";

const packages = [
  {
    id: "basic",
    name: "เริ่มต้น (Basic)",
    price: "490",
    popular: false,
    icon: PlaneTakeoff,
    detailLink: "/packages/basic",
    description: "ใบจองตั๋วเครื่องบินหรือโรงแรม",
    theme: {
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200",
      shadow: "shadow-blue-200/40",
      btnClass:
        "bg-white text-blue-600 border-2 border-blue-200 hover:bg-blue-50 hover:border-blue-500",
      checkIcon: "text-blue-500",
    },
    features: [
      { text: "ใบจองตั๋วเครื่องบิน (PNR)", included: true },
      { text: "หรือ ใบจองโรงแรม", included: true },
      { text: "ไฟล์ PDF พร้อมใช้งาน", included: true },
      { text: "เหมาะสำหรับยื่นเอกสารเบื้องต้น", included: true },
      { text: "แผนการเดินทาง (Travel Plan)", included: false },
      { text: "ชุดเอกสารวีซ่า", included: false },
    ],
  },

  {
    id: "standard",
    name: "ยอดนิยม (Standard)",
    price: "890",
    popular: true,
    icon: ShieldCheck,
    detailLink: "/packages/standard",
    description: "ใบจองตั๋วเครื่องบิน+โรงแรมหรือแผนการเดินทาง",
    theme: {
      color: "text-[#FF5722]",
      bg: "bg-orange-50",
      border: "border-orange-500",
      shadow: "shadow-orange-500/30",
      btnClass:
        "bg-gradient-to-r from-[#FF5722] to-orange-500 text-white shadow-lg shadow-orange-500/40 hover:-translate-y-1 hover:shadow-orange-500/50",
      checkIcon: "text-orange-500",
    },
    features: [
      { text: "ใบจองตั๋วเครื่องบิน", included: true },
      { text: "ใบจองโรงแรม", included: true },
      { text: "หรือ Travel Plan แบบพื้นฐาน", included: true },
      { text: "ไฟล์ PDF พร้อมใช้งาน", included: true },
      { text: "เหมาะสำหรับยื่นสถานทูต", included: true },
      { text: "ประกันเดินทาง", included: false },
    ],
  },

  {
    id: "premium",
    name: "มืออาชีพ (Premium)",
    price: "1,290",
    popular: false,
    icon: Crown,
    detailLink: "/packages/premium",
    description: "ใบจองตั๋วเครื่องบิน+โรงแรม+แผนการเดินทาง",
    theme: {
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      shadow: "shadow-emerald-200/40",
      btnClass:
        "bg-white text-emerald-600 border-2 border-emerald-200 hover:bg-emerald-50 hover:border-emerald-500",
      checkIcon: "text-emerald-500",
    },
    features: [
      { text: "ใบจองตั๋วเครื่องบิน", included: true },
      { text: "ใบจองโรงแรม", included: true },
      { text: "แผนการเดินทางแบบครบถ้วน", included: true },
      { text: "เอกสารพร้อมใช้งาน", included: true },
      { text: "เหมาะสำหรับยื่นวีซ่าทุกประเภท", included: true },
      { text: "ตรวจสอบความถูกต้อง", included: true },
    ],
  },

  {
    id: "elite",
    name: "ครบวงจร (Elite)",
    price: "5,490",
    popular: false,
    icon: Sparkles,
    detailLink: "/packages/elite",
    description: "บริการครบชุดสำหรับการยื่นวีซ่า",
    theme: {
      color: "text-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-200",
      shadow: "shadow-purple-200/40",
      btnClass:
        "bg-white text-purple-600 border-2 border-purple-200 hover:bg-purple-50 hover:border-purple-500",
      checkIcon: "text-purple-500",
    },
    features: [
      { text: "ตั๋วเครื่องบิน + โรงแรม + Travel Plan", included: true },
      { text: "เอกสารแนะนำตัว (Cover Letter)", included: true },
      { text: "ประกันการเดินทางและสุขภาพ", included: true },
      { text: "ชุดเอกสารยื่นวีซ่าครบชุด", included: true },
      { text: "ให้คำแนะนำการเตรียมเอกสาร", included: true },
      { text: "ตรวจสอบความถูกต้องก่อนใช้งาน", included: true },
    ],
  },

  {
    id: "ultimate",
    name: "วีไอพี (Ultimate)",
    price: "8,990",
    popular: false,
    icon: Crown,
    detailLink: "/packages/ultimate",
    description: "บริการครบชุดสำหรับการยื่นวีซ่ากรณีเร่งด่วน",
    theme: {
      color: "text-slate-900",
      bg: "bg-slate-100",
      border: "border-slate-300",
      shadow: "shadow-slate-300/40",
      btnClass: "bg-slate-900 text-white hover:bg-black",
      checkIcon: "text-slate-900",
    },
    features: [
      { text: "วางแผนการเดินทางแบบ Premium", included: true },
      { text: "จัดเตรียมเอกสารวีซ่าแบบครบชุด", included: true },
      { text: "ดูแลการจองทั้งหมด", included: true },
      { text: "Priority Support", included: true },
      { text: "ปรับแก้เอกสารตามความต้องการ", included: true },
      { text: "เหมาะสำหรับเคสเร่งด่วนหรือซับซ้อน", included: true },
    ],
  },
];

export default function Pricing() {
  function scrollToHero() {
    const hero = document.getElementById("hero");
    if (hero) hero.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="packages"
      className="relative w-full overflow-hidden bg-[#F8FAFC] py-20 lg:py-28"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
            <Package className="h-4 w-4 text-emerald-500" />
            แพ็กเกจบริการ
          </div>

          <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            เลือกแพ็กเกจที่เหมาะกับคุณ
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            บริการจองตั๋ว โรงแรม และเอกสารสำหรับยื่นวีซ่า
            พร้อมทีมงานช่วยดูแลอย่างมืออาชีพ
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">
          {packages.map((pkg) => {
            const Icon = pkg.icon;

            return (
              <article
                key={pkg.id}
                className={`relative flex flex-col h-full rounded-[2rem] bg-white transition-all duration-300 ${
                  pkg.popular
                    ? `border-4 ${pkg.theme.border} shadow-2xl ${pkg.theme.shadow} xl:-translate-y-3`
                    : "border border-slate-200 shadow-lg hover:-translate-y-2"
                }`}
              >
                {/* Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#FF5722] to-orange-500 px-4 py-1 text-xs font-black uppercase tracking-wider text-white shadow-lg">
                    คุ้มค่าที่สุด
                  </div>
                )}

                {/* Header */}
                <div className="border-b border-slate-100 p-6 text-center">
                  <div
                    className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${pkg.theme.bg}`}
                  >
                    <Icon
                      className={`h-7 w-7 ${pkg.theme.color}`}
                      strokeWidth={2}
                    />
                  </div>

                  <h3 className="text-2xl font-black text-slate-900">
                    {pkg.name}
                  </h3>

                  <p className="mt-2 min-h-[48px] text-sm leading-relaxed text-slate-500">
                    {pkg.description}
                  </p>

                  <div className="mt-5 flex items-baseline justify-center gap-1">
                    <span className="text-lg font-bold text-slate-400">฿</span>

                    <span className="text-5xl font-extrabold tracking-tight text-slate-900">
                      {pkg.price}
                    </span>
                  </div>

                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                    / ท่าน (รวม VAT แล้ว)
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-1 flex-col p-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        {feature.included ? (
                          <div
                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 ${pkg.theme.checkIcon}`}
                          >
                            <CheckCircle2
                              className="h-3.5 w-3.5"
                              strokeWidth={3}
                            />
                          </div>
                        ) : (
                          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100">
                            <div className="h-0.5 w-2.5 rounded-full bg-slate-300" />
                          </div>
                        )}

                        <span
                          className={`text-sm leading-relaxed ${
                            feature.included
                              ? "text-slate-700"
                              : "text-slate-400 line-through"
                          }`}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Buttons */}
                  <div className="mt-auto">
                    <button
                      onClick={scrollToHero}
                      className={`w-full rounded-2xl py-3.5 text-sm font-bold transition-all duration-300 ${pkg.theme.btnClass}`}
                    >
                      เลือกแพ็กเกจนี้
                    </button>

                    <a
                      href={pkg.detailLink}
                      className="mt-3 block text-center text-sm font-semibold text-slate-500 transition-colors hover:text-slate-900"
                    >
                      ดูรายละเอียดแพ็กเกจ →
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-14 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-500 shadow-sm">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            ทีมงานพร้อมช่วยดูแลและให้คำแนะนำตลอดการใช้งาน
          </p>
        </div>
      </div>
    </section>
  );
}

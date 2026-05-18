import {
  CheckCircle2,
  Package,
  PlaneTakeoff,
  ShieldCheck,
  Hotel,
  FileText,
} from "lucide-react";
import React from "react";

const packages = [
  {
    id: "flight-reservation",
    label: "Starter",
    name: "ใบจองตั๋วเครื่องบิน",
    popular: false,
    icon: PlaneTakeoff,
    orderLink: "/order?package=flight-reservation",
    description: "เหมาะสำหรับผู้ที่ต้องการแค่ flight itinerary สำหรับยื่นวีซ่า",
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
      { text: "ใบจองตั๋วเครื่องบินไป-กลับ", included: true },
      { text: "แสดงชื่อผู้โดยสาร วันเดินทาง และหมายเลขเที่ยวบิน", included: true },
      { text: "ไฟล์ PDF มาตรฐานสถานทูต", included: true },
      { text: "ส่งภายใน 24 ชั่วโมง", included: true },
    ],
  },

  {
    id: "hotel-booking",
    label: "Standard",
    name: "ใบจองโรงแรม",
    popular: false,
    icon: Hotel,
    orderLink: "/order?package=hotel-booking",
    description: "เหมาะสำหรับผู้ที่ต้องการหลักฐานที่พักสำหรับยื่นวีซ่า",
    theme: {
      color: "text-[#FF5722]",
      bg: "bg-orange-50",
      border: "border-orange-200",
      shadow: "shadow-orange-200/40",
      btnClass:
        "bg-white text-accent-orange border-2 border-orange-200 hover:bg-orange-50 hover:border-orange-500",
      checkIcon: "text-orange-500",
    },
    features: [
      { text: "ใบจองโรงแรมตลอดระยะเวลาการเดินทาง", included: true },
      { text: "ระบุชื่อผู้เข้าพัก ชื่อโรงแรม และวันที่", included: true },
      { text: "ไฟล์ PDF มาตรฐานสถานทูต", included: true },
      { text: "ส่งภายใน 24 ชั่วโมง", included: true },
    ],
  },

  {
    id: "full-set",
    label: "Popular",
    name: "ชุดเอกสารครบเซ็ต",
    popular: true,
    icon: FileText,
    orderLink: "/order?package=full-set",
    description: "เหมาะสำหรับผู้ที่ต้องการเอกสารสนับสนุนครบชุดในที่เดียว",
    theme: {
      color: "text-[#FF5722]",
      bg: "bg-orange-50",
      border: "border-orange-500",
      shadow: "shadow-orange-500/30",
      btnClass:
        "bg-gradient-to-r from-accent-orange to-orange-500 text-white shadow-lg shadow-orange-500/40 hover:-translate-y-1 hover:shadow-orange-500/50",
      checkIcon: "text-orange-500",
    },
    features: [
      { text: "ใบจองตั๋วเครื่องบินไป-กลับ", included: true },
      { text: "ใบจองโรงแรมตลอดการเดินทาง", included: true },
      { text: "แผนการเดินทาง (Travel Itinerary)", included: true },
      { text: "เอกสารทุกอย่างในชุดเดียว PDF พร้อมยื่น", included: true },
      { text: "ส่งภายใน 24 ชั่วโมง", included: true },
    ],
  },

  {
    id: "premium",
    label: "Premium",
    name: "ชุดครบเซ็ต + ประกันการเดินทาง",
    popular: false,
    icon: ShieldCheck,
    orderLink: "/order?package=premium",
    description: "เหมาะสำหรับผู้ที่ต้องการเอกสารครบและประกันที่ตรงเงื่อนไขวีซ่า",
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
      { text: "ทุกอย่างในชุดครบเซ็ต", included: true },
      { text: "ประกันการเดินทางที่ตรงตามเงื่อนไขวีซ่า Schengen และประเทศอื่น ๆ", included: true },
      { text: "คำแนะนำการเลือกประกันที่เหมาะสม", included: true },
      { text: "Priority delivery — ส่งก่อน", included: true },
    ],
  },
];

export default function ServicePackages() {
  function goToOrder(orderLink) {
    window.location.href = orderLink;
  }

  return (
    <section
      id="packages"
      className="relative w-full overflow-hidden bg-bg-light py-16 lg:py-24"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-blue-50 blur-[80px]" />
        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-orange-50 blur-[80px]" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100/70 bg-white/85 px-4 py-2 text-sm font-bold text-slate-700 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
            <Package className="h-4 w-4 text-emerald-500" />
            แพ็กเกจบริการ
          </div>

          <h2 className="text-4xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl">
            เลือกเอกสารที่คุณต้องการ ราคาชัดเจน ไม่มีค่าใช้จ่ายซ่อนเร้น
          </h2>

          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            บริการทุกแพ็กเกจตรวจสอบโดยทีมงานจริง และส่งเป็น PDF พร้อมยื่นสถานทูต ทั้งใบจองตั๋วเครื่องบินยื่นวีซ่า ใบจองโรงแรมยื่นวีซ่า flight reservation for visa application, hotel booking for visa, travel itinerary for visa และ travel insurance for Schengen visa
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 xl:grid-cols-4 lg:gap-6">
          {packages.map((pkg) => {
            const Icon = pkg.icon;

            return (
              <article
                key={pkg.id}
                className={`relative flex h-full flex-col rounded-3xl bg-white transition-all duration-300 ${
                  pkg.popular
                    ? `border-2 ${pkg.theme.border} shadow-[0_16px_60px_rgba(255,87,34,0.15)] md:scale-[1.02] xl:-translate-y-2`
                    : "border border-slate-100 shadow-[0_4px_20px_rgba(15,23,42,0.06)] hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(15,23,42,0.09)]"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-accent-orange to-orange-500 px-5 py-1.5 text-[11px] font-black uppercase tracking-wider text-white shadow-[0_4px_16px_rgba(249,115,22,0.40)]">
                    ★ Most Popular · แนะนำ
                  </div>
                )}

                {/* Gradient header for popular, clean header for others */}
                {pkg.popular ? (
                  <div className="rounded-t-3xl bg-gradient-to-r from-accent-orange to-orange-500 p-6 text-center">
                    <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">
                      <Icon className="h-7 w-7 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-2xl font-black text-white">{pkg.name}</h3>
                    <p className="mt-1 text-xs font-black uppercase tracking-widest text-orange-100">{pkg.label}</p>
                    <p className="mt-2 text-sm leading-relaxed text-orange-50/90">{pkg.description}</p>
                    <p className="mt-4 text-[11px] font-bold uppercase tracking-wider text-orange-100/80">
                      ราคาชัดเจนก่อนชำระ · ไม่มีค่าใช้จ่ายซ่อนเร้น
                    </p>
                  </div>
                ) : (
                  <div className="border-b border-slate-100 p-6 text-center">
                    <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${pkg.theme.bg}`}>
                      <Icon className={`h-7 w-7 ${pkg.theme.color}`} strokeWidth={2} />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">{pkg.name}</h3>
                    <p className={`mt-1 text-xs font-black uppercase tracking-widest ${pkg.theme.color}`}>{pkg.label}</p>
                    <p className="mt-2 min-h-[48px] text-sm leading-relaxed text-slate-500">{pkg.description}</p>
                    <p className="mt-5 text-xs font-bold uppercase tracking-wider text-slate-400">
                      ราคาชัดเจนก่อนชำระ · ไม่มีค่าใช้จ่ายซ่อนเร้น
                    </p>
                  </div>
                )}

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
                      onClick={() => goToOrder(pkg.orderLink)}
                      className={`w-full rounded-2xl py-3.5 text-sm font-bold transition-all duration-300 ${pkg.theme.btnClass}`}
                    >
                      สั่งเลย
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-14 rounded-3xl border border-blue-100/70 bg-white/85 px-6 py-6 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
          <p className="text-sm font-semibold leading-relaxed text-slate-600">
            ราคาและรายละเอียดแพ็กเกจอาจมีการเปลี่ยนแปลง กรุณาตรวจสอบราคาล่าสุดในหน้า checkout
          </p>
          <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-600">
            BKK AIR ให้บริการเฉพาะการจัดเตรียมเอกสารสนับสนุนเท่านั้น การอนุมัติวีซ่าขึ้นอยู่กับดุลยพินิจของสถานทูต
          </p>
        </div>
      </div>
    </section>
  );
}

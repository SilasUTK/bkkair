import {
  CheckCircle2,
  Package,
  PlaneTakeoff,
  ShieldCheck,
  Hotel,
} from "lucide-react";
import React from "react";

const packages = [
  {
    id: "basic",
    name: "Basic",
    price: "฿490",
    popular: false,
    icon: PlaneTakeoff,
    detailLink: "#hero",
    description: "สำหรับคนที่ต้องการใบจองตั๋วหรือโรงแรมอย่างใดอย่างหนึ่ง",
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
      { text: "ใบจองตั๋วเครื่องบิน หรือ ใบจองโรงแรม (เลือก 1 รายการ)", included: true },
      { text: "ไฟล์ PDF embassy-ready format", included: true },
      { text: "ตรวจสอบโดยทีมงานก่อนส่ง", included: true },
      { text: "ส่งทางอีเมลภายใน 48 ชั่วโมงหลังยืนยัน", included: true },
      { text: "Travel Plan และประกันการเดินทาง", included: false },
    ],
  },

  {
    id: "standard",
    name: "Standard",
    price: "฿890",
    popular: true,
    icon: Hotel,
    detailLink: "#hero",
    description: "ครบถ้วน คุ้มค่า เหมาะกับการยื่นวีซ่าท่องเที่ยวส่วนใหญ่",
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
      { text: "ใบจองตั๋วเครื่องบิน + ใบจองโรงแรม", included: true },
      { text: "Travel Plan (แผนการเดินทาง)", included: true },
      { text: "ไฟล์ PDF embassy-ready format", included: true },
      { text: "ตรวจสอบโดยทีมงานก่อนส่ง", included: true },
      { text: "ส่งทางอีเมลภายใน 24-48 ชั่วโมงหลังยืนยัน", included: true },
    ],
  },

  {
    id: "ultimate",
    name: "Ultimate",
    price: "฿8,990",
    popular: false,
    icon: ShieldCheck,
    detailLink: "#hero",
    description: "ครบทุกอย่างสำหรับเคสซับซ้อนหรือผู้ที่มีเวลาจำกัด",
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
      { text: "ใบจองตั๋วเครื่องบิน + ใบจองโรงแรม", included: true },
      { text: "Travel Plan ละเอียดครบถ้วน", included: true },
      { text: "Cover Letter เฉพาะบุคคล", included: true },
      { text: "ชุดเอกสารยื่นวีซ่าครบวงจร", included: true },
      { text: "Priority Support และรองรับเคสเร่งด่วน", included: true },
    ],
  },
];

export default function ServicePackages() {
  function goToOrder(packageSlug) {
    window.location.href = `/order?package=${packageSlug}`;
  }

  return (
    <section
      id="packages"
      className="relative w-full overflow-hidden bg-gradient-to-br from-[#F7FBFF] via-[#EEF6FF] to-[#FFF7F0] py-16 lg:py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100/70 bg-white/85 px-4 py-2 text-sm font-bold text-slate-700 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
            <Package className="h-4 w-4 text-emerald-500" />
            แพ็กเกจบริการ
          </div>

          <h2 className="text-3xl font-black leading-[1.18] tracking-tight text-slate-900 sm:text-5xl">
            เลือกเอกสารที่คุณต้องการ ราคาชัดเจน ไม่มีค่าใช้จ่ายซ่อนเร้น
          </h2>

          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            บริการทุกแพ็กเกจตรวจสอบโดยทีมงานจริง และส่งเป็น PDF พร้อมยื่นสถานทูต
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3 lg:gap-6">
          {packages.map((pkg) => {
            const Icon = pkg.icon;

            return (
              <article
                key={pkg.id}
                className={`relative flex h-full flex-col rounded-3xl bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-300 ${
                  pkg.popular
                    ? `border-4 ${pkg.theme.border} ${pkg.theme.shadow} md:-translate-y-2`
                    : "border border-blue-100/70 md:hover:-translate-y-1"
                }`}
              >
                {/* Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#FF5722] to-orange-500 px-4 py-1 text-xs font-black uppercase tracking-wider text-white shadow-lg">
                    ⭐ แนะนำ
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
                    <span className="text-base font-bold text-slate-500">
                      สอบถามราคากับทีมงาน
                    </span>
                  </div>

                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                    ราคาชัดเจนก่อนชำระ · ไม่มีค่าใช้จ่ายซ่อนเร้น
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
                      onClick={() => goToOrder(pkg.id)}
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
        <div className="mt-14 text-center space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-500 shadow-sm">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            ยังไม่แน่ใจว่าต้องใช้เอกสารอะไร? → ปรึกษาทีมงานฟรี ไม่มีข้อผูกมัด
          </p>
          <p className="text-xs text-slate-400 italic">
            *ราคาและรายละเอียดแพ็กเกจอาจมีการเปลี่ยนแปลง กรุณาตรวจสอบราคาล่าสุดในหน้า checkout*
            <br/>
            *BKK AIR ให้บริการเฉพาะการจัดเตรียมเอกสารสนับสนุนเท่านั้น การอนุมัติวีซ่าขึ้นอยู่กับดุลยพินิจของสถานทูต*
          </p>
        </div>
      </div>
    </section>
  );
}

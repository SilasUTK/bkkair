import { Shield } from "lucide-react";
import React from "react";

const features = [
  {
    icon: "🔐",
    title: "ตรวจสอบโดยทีมงานจริง",
    desc: "เอกสารทุกชิ้นผ่านการตรวจสอบความถูกต้องโดยทีมงาน BKK AIR ก่อนส่งให้คุณทุกครั้ง",
    color: {
      bg: "bg-orange-100",
      icon: "text-accent-orange",
      ring: "ring-orange-50",
      border: "border-orange-200"
    }
  },
  {
    icon: "🛡️",
    title: "ปลอดภัยตาม PDPA",
    desc: "เราเก็บข้อมูลเฉพาะที่จำเป็น และดำเนินการตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 ของไทย",
    color: {
      bg: "bg-blue-100",
      icon: "text-primary-dark",
      ring: "ring-blue-50",
      border: "border-blue-200"
    }
  },
  {
    icon: "📄",
    title: "ระบบ SSL/TLS เข้ารหัสทุกการส่งข้อมูล",
    desc: "ข้อมูลของคุณถูกส่งผ่านการเข้ารหัส SSL/TLS ตลอดเวลา ไม่มีการเก็บข้อมูลบัตรเครดิตในระบบ",
    color: {
      bg: "bg-emerald-100",
      icon: "text-emerald-600",
      ring: "ring-emerald-50",
      border: "border-emerald-200"
    }
  },
  {
    icon: "💬",
    title: "นโยบายคืนเงินชัดเจน",
    desc: "ยกเลิกก่อนเริ่มงานคืน 100% · หลังเริ่มงานคืน 50% · ส่งแล้วไม่คืน — อ่านรายละเอียดใน Terms of Service",
    color: {
      bg: "bg-purple-100",
      icon: "text-purple-600",
      ring: "ring-purple-50",
      border: "border-purple-200"
    }
  }
];

export default function SeoTrustSection() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-20 md:py-24 font-sans selection:bg-blue-200 selection:text-blue-900">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-blue-50 blur-[80px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-orange-50 blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-blue-100/70 bg-white/90 px-4 py-1.5 text-sm font-bold text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur">
            <Shield className="h-4 w-4 text-orange-500" aria-hidden="true" />
            <span className="text-xs uppercase tracking-widest text-slate-500">ความปลอดภัยและความโปร่งใส</span>
          </div>

          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
            ปลอดภัย โปร่งใส{" "}
            <span className="whitespace-nowrap bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
              เชื่อถือได้
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-relaxed text-slate-600">
            เราออกแบบทุกขั้นตอนโดยคำนึงถึงความปลอดภัยของข้อมูลคุณเป็นอันดับแรก
          </p>
        </div>

          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-5 md:gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex h-full items-start gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(15,23,42,0.09)] md:p-8"
            >
              <div className={`mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${feature.color.bg} transition-transform duration-300 group-hover:scale-110`}>
                <span className="text-2xl" aria-hidden="true">{feature.icon}</span>
              </div>

              <div>
                <h3 className="text-xl font-bold leading-snug text-slate-900 transition-colors">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-slate-500">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

          <div className="mx-auto mt-12 max-w-5xl rounded-2xl border border-orange-100 bg-white p-6 md:p-8 shadow-[0_4px_20px_rgba(15,23,42,0.06)]">
          <p className="text-base font-semibold leading-relaxed text-slate-700">
            เราไม่ใช่ตัวแทนวีซ่า ไม่ได้มีความสัมพันธ์พิเศษกับสถานทูตใด ๆ ไม่ออกตั๋วจริงหรือยืนยันโรงแรมจริง
            และการอนุมัติวีซ่าเป็นการตัดสินใจของสถานทูตหรือสถานกงสุลแต่เพียงผู้เดียว
          </p>
          <a href="/privacy-policy" className="mt-4 inline-flex items-center gap-2 text-sm font-black text-blue-700 underline underline-offset-4 transition-colors hover:text-blue-900">
            อ่านนโยบายความเป็นส่วนตัว →
          </a>
        </div>
      </div>
    </section>
  );
}

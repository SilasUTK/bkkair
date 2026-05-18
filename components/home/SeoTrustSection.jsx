import { Shield } from "lucide-react";
import React from "react";

const features = [
  {
    icon: "🔐",
    title: "ข้อมูลส่วนตัวปลอดภัย",
    desc: "เราเก็บรวบรวมข้อมูลเท่าที่จำเป็นสำหรับการจัดทำเอกสารเท่านั้น ไม่มีการขายหรือแชร์ข้อมูลให้บุคคลภายนอก",
    color: {
      bg: "bg-orange-100",
      icon: "text-[#FF5722]",
      ring: "ring-orange-50",
      border: "border-orange-200"
    }
  },
  {
    icon: "🛡️",
    title: "ระบบชำระเงินที่ปลอดภัย",
    desc: "การชำระเงินผ่านช่องทางที่เข้ารหัส — เราไม่จัดเก็บข้อมูลบัตรเครดิตหรือบัญชีธนาคารของคุณ",
    color: {
      bg: "bg-blue-100",
      icon: "text-[#2563EB]",
      ring: "ring-blue-50",
      border: "border-blue-200"
    }
  },
  {
    icon: "📄",
    title: "เอกสารสนับสนุนวีซ่า ไม่ใช่การรับประกันวีซ่า",
    desc: "BKK AIR ให้บริการจัดเตรียมเอกสารสนับสนุนเท่านั้น การอนุมัติวีซ่าเป็นดุลยพินิจของสถานทูตหรือสถานกงสุลในทุกกรณี",
    color: {
      bg: "bg-emerald-100",
      icon: "text-emerald-600",
      ring: "ring-emerald-50",
      border: "border-emerald-200"
    }
  },
  {
    icon: "💬",
    title: "โปร่งใสทุกขั้นตอน",
    desc: "คุณรู้ว่าจ่ายค่าอะไร ได้รับอะไร และกระบวนการเป็นอย่างไร — ก่อนที่จะสั่งซื้อ",
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
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#F7FBFF] via-[#EEF6FF] to-[#FFF7F0] py-16 lg:py-24 font-sans selection:bg-blue-200 selection:text-blue-900">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-white/25"></div>
        <div className="absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-blue-300/25 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-[460px] w-[460px] rounded-full bg-orange-200/35 blur-3xl"></div>
        <div className="absolute right-1/3 top-10 h-[300px] w-[300px] rounded-full bg-cyan-200/25 blur-3xl"></div>
        <div className="absolute left-8 top-16 h-32 w-32 bg-[radial-gradient(circle_at_2px_2px,rgba(148,163,184,0.5)_2px,transparent_0)] bg-[length:20px_20px] opacity-30"></div>
        <div className="absolute right-12 bottom-24 h-16 w-16 rounded-full border-[8px] border-emerald-100 opacity-80"></div>
        <div className="absolute right-1/4 top-20 h-10 w-10 rounded-xl bg-yellow-200 opacity-60 rotate-[15deg]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 inline-flex w-fit items-center gap-2.5 rounded-full border border-blue-100/70 bg-white/85 p-1.5 pr-5 text-sm font-semibold text-slate-700 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Shield className="h-4 w-4" aria-hidden="true" />
            </span>
            <span>ความปลอดภัยและความโปร่งใส</span>
          </div>

          <h2 className="text-3xl font-extrabold leading-[1.18] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            คุณฝากข้อมูลไว้กับเรา
            <br className="hidden sm:block" />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-[#FF5722]">
                เราจริงจังกับเรื่องนี้
              </span>
              <svg className="absolute -bottom-3 left-0 -z-10 h-3 w-full text-[#FF5722]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            BKK AIR ออกแบบระบบและกระบวนการให้ข้อมูลของคุณปลอดภัยทุกขั้นตอน สำหรับ visa document service Thailand ที่เน้น safe visa support และเอกสารวีซ่าปลอดภัย
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex h-full items-start gap-5 rounded-3xl border border-blue-100/70 bg-white/80 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur transition-all duration-300 hover:bg-white sm:p-6"
            >
              <div className={`mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${feature.color.bg} border-2 ${feature.color.border} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
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

        <div className="mx-auto mt-10 max-w-5xl rounded-3xl border border-orange-200 bg-white/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
          <p className="text-base font-semibold leading-relaxed text-slate-700">
            เราไม่ใช่ตัวแทนวีซ่า ไม่ได้มีความสัมพันธ์พิเศษกับสถานทูตใด ๆ และไม่รับประกันผลการยื่นวีซ่า
          </p>
          <a href="/privacy-policy" className="mt-4 inline-flex items-center gap-2 text-sm font-black text-blue-700 underline underline-offset-4 transition-colors hover:text-blue-900">
            อ่านนโยบายความเป็นส่วนตัว →
          </a>
        </div>
      </div>
    </section>
  );
}

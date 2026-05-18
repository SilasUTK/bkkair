import { Clock, FileText, Globe2, LockKeyhole, MessageCircle, SearchCheck, Sparkles } from "lucide-react";
import React from "react";

const benefits = [
  {
    icon: FileText,
    title: "เอกสาร PDF มาตรฐานสถานทูต",
    iconAlt: "visa document service Thailand",
    description: "ทุกเอกสารผ่านการออกแบบตามรูปแบบที่สถานทูตคาดหวัง — ไม่ใช่แค่ template สำเร็จรูปที่ print ออกมา เป็น embassy-ready documents สำหรับเอกสารยื่นวีซ่า",
    theme: {
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-100",
      hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.2)]",
      gradient: "from-blue-500 to-indigo-500",
      watermark: "text-blue-50/50"
    }
  },
  {
    icon: SearchCheck,
    title: "ตรวจสอบโดยทีมงานจริง ไม่ใช่ระบบอัตโนมัติ",
    iconAlt: "visa document service Thailand",
    description: "ทุก order ผ่านการตรวจสอบจากทีมงานที่มีประสบการณ์ด้านเอกสารวีซ่าโดยตรง ก่อนส่งให้คุณ",
    theme: {
      color: "text-[#FF5722]",
      bg: "bg-orange-50",
      border: "border-orange-100",
      hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(255,87,34,0.2)]",
      gradient: "from-[#FF5722] to-orange-400",
      watermark: "text-orange-50/60"
    }
  },
  {
    icon: Clock,
    title: "ส่งภายใน 24 ชั่วโมง (มีแบบ Express)",
    iconAlt: "flight reservation for visa application",
    description: "ไม่ต้องรอนาน เหมาะทั้งผู้ที่วางแผนล่วงหน้าและผู้ที่ต้องการเร่งด่วน",
    theme: {
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-100",
      hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.2)]",
      gradient: "from-emerald-500 to-teal-400",
      watermark: "text-emerald-50/60"
    }
  },
  {
    icon: LockKeyhole,
    title: "ข้อมูลของคุณปลอดภัย",
    iconAlt: "visa document service Thailand",
    description: "เราไม่จัดเก็บข้อมูลส่วนตัวของคุณเกินความจำเป็น และไม่เปิดเผยข้อมูลให้บุคคลภายนอก",
    theme: {
      color: "text-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-100",
      hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(147,51,234,0.18)]",
      gradient: "from-purple-500 to-fuchsia-400",
      watermark: "text-purple-50/60"
    }
  },
  {
    icon: MessageCircle,
    title: "ราคาโปร่งใส ไม่มีค่าใช้จ่ายแอบแฝง",
    iconAlt: "visa document service Thailand",
    description: "ดูราคาได้ชัดเจนก่อนสั่ง ไม่มี surprise charges ทีหลัง",
    theme: {
      color: "text-sky-600",
      bg: "bg-sky-50",
      border: "border-sky-100",
      hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(2,132,199,0.18)]",
      gradient: "from-sky-500 to-cyan-400",
      watermark: "text-sky-50/60"
    }
  },
  {
    icon: Globe2,
    title: "ครอบคลุมหลายประเทศปลายทาง",
    iconAlt: "flight reservation for visa application",
    description: "รองรับ visa support Thailand สำหรับวีซ่า Schengen, UK, US, Canada, Australia, Japan, South Korea และอีกหลายประเทศ",
    theme: {
      color: "text-rose-600",
      bg: "bg-rose-50",
      border: "border-rose-100",
      hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(225,29,72,0.16)]",
      gradient: "from-rose-500 to-orange-400",
      watermark: "text-rose-50/60"
    }
  }
];

export default function WhyChooseUs() {
  return (
    <section id="benefits" className="relative w-full overflow-hidden bg-white py-16 lg:py-24 font-sans selection:bg-blue-200 selection:text-blue-900">
      
      {/* Subtle background accents */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -right-40 -top-10 h-[440px] w-[440px] rounded-full bg-blue-50 blur-[80px]" />
        <div className="absolute -left-40 bottom-0 h-[380px] w-[380px] rounded-full bg-orange-50 blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* === Header Section === */}
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-blue-100/70 bg-white/85 px-4 py-1.5 text-sm font-bold text-slate-700 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
            <Sparkles className="h-4 w-4 text-orange-500" />
            <span className="uppercase tracking-widest text-slate-500 text-xs">ทำไมต้องเลือก BKK AIR</span>
          </div>
          
          <h2 className="text-3xl font-extrabold leading-[1.18] tracking-tight text-slate-900 sm:text-[2.75rem]">
            เราไม่ได้แค่ส่งเอกสาร — <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">เราดูแลให้คุณพร้อมยื่น</span>
          </h2>
          <p className="mt-5 text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
            หลายคนเสียเวลาหาข้อมูล จ้างคนผิด หรือได้เอกสารที่ไม่ตรงมาตรฐานสถานทูต BKK AIR ออกแบบบริการนี้มาเพื่อแก้ปัญหาเหล่านั้นโดยตรง พร้อมดูแลเอกสารยื่นวีซ่าแบบ visa support Thailand
          </p>
        </div>

        {/* === Cards Grid Section === */}
        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article
                key={benefit.title}
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 ${benefit.theme.border} ${benefit.theme.hoverShadow} shadow-[0_4px_20px_rgba(15,23,42,0.06)]`}
              >
                {/* Gradient top accent line */}
                <div className={`absolute inset-x-0 top-0 h-[3px] rounded-t-3xl bg-gradient-to-r ${benefit.theme.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

                {/* Icon */}
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${benefit.theme.gradient} shadow-md`}>
                  <Icon className="h-5.5 w-5.5 text-white" aria-hidden="true" />
                </div>

                <h3 className="mb-2.5 text-[1rem] font-bold leading-snug text-slate-900">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{benefit.description}</p>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

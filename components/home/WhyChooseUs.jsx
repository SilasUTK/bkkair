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
    <section id="benefits" className="relative w-full overflow-hidden bg-gradient-to-br from-[#F7FBFF] via-[#EEF6FF] to-[#FFF7F0] py-16 lg:py-24 font-sans selection:bg-blue-200 selection:text-blue-900">
      
      {/* ================= Flat Design Background Elements ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft Blobs */}
        <div className="absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-blue-300/25 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-[460px] w-[460px] rounded-full bg-orange-200/35 blur-3xl" />
        <div className="absolute left-1/3 top-12 h-[300px] w-[300px] rounded-full bg-cyan-200/25 blur-3xl" />
        
        {/* Geometric Shapes & Patterns */}
        <div className="absolute right-10 top-32 h-32 w-32 bg-[radial-gradient(circle_at_2px_2px,rgba(148,163,184,0.5)_2px,transparent_0)] bg-[length:20px_20px] opacity-30"></div>
        <div className="absolute left-1/4 bottom-20 h-24 w-24 bg-[radial-gradient(circle_at_2px_2px,rgba(147,197,253,0.55)_2px,transparent_0)] bg-[length:16px_16px] opacity-35"></div>
        <div className="absolute left-10 top-1/4 h-12 w-12 rounded-full border-[6px] border-orange-200/60"></div>
        <div className="absolute right-1/4 bottom-1/4 h-8 w-8 rounded-lg bg-emerald-200/50 rotate-45"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* === Header Section === */}
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-blue-100/70 bg-white/85 px-4 py-1.5 text-sm font-bold text-slate-700 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
            <Sparkles className="h-4 w-4 text-orange-500" />
            <span className="uppercase tracking-widest text-slate-500 text-xs">ทำไมต้องเลือก BKK AIR</span>
          </div>
          
          <h2 className="text-3xl font-extrabold leading-[1.18] tracking-tight text-slate-900 sm:text-5xl">
            เราไม่ได้แค่ส่งเอกสาร — <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">เราดูแลให้คุณพร้อมยื่น</span>
          </h2>
          <p className="mt-5 text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
            หลายคนเสียเวลาหาข้อมูล จ้างคนผิด หรือได้เอกสารที่ไม่ตรงมาตรฐานสถานทูต BKK AIR ออกแบบบริการนี้มาเพื่อแก้ปัญหาเหล่านั้นโดยตรง พร้อมดูแลเอกสารยื่นวีซ่าแบบ visa support Thailand
          </p>
        </div>

        {/* === Cards Grid Section === */}
        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const displayNumber = `0${index + 1}`;

            return (
              <article
                key={benefit.title}
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-blue-100/70 bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-300 md:hover:-translate-y-1 ${benefit.theme.hoverShadow}`}
              >
                {/* Accent Top Line */}
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${benefit.theme.gradient} opacity-80 transition-opacity duration-300 group-hover:opacity-100`}></div>

                {/* Background Watermark Number */}
                <div className={`absolute -right-6 -top-6 text-[8rem] font-black leading-none ${benefit.theme.watermark} pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6`}>
                  {displayNumber}
                </div>

                {/* Icon Container */}
                <div className="relative z-10 mb-8 flex items-center justify-between">
                  <div role="img" aria-label={benefit.iconAlt} className={`flex h-16 w-16 items-center justify-center rounded-2xl ${benefit.theme.bg} border-2 ${benefit.theme.border} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <Icon className={`h-8 w-8 ${benefit.theme.color}`} strokeWidth={2} aria-hidden="true" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-slate-500 font-medium text-base">
                    {benefit.description}
                  </p>
                </div>
                
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

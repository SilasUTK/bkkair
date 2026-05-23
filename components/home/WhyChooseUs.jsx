"use client";

import { Clock, FileText, Globe2, LockKeyhole, MessageCircle, SearchCheck, Sparkles } from "lucide-react";
import React from "react";

const benefits = [
  {
    icon: FileText,
    title: "เอกสาร PDF มาตรฐานสถานทูต",
    iconAlt: "visa document service Thailand",
    description: "ทุกเอกสารถูกจัดรูปแบบตามมาตรฐานที่สถานทูตคาดหวัง เพื่อให้ใช้งานได้สะดวกและพร้อมยื่น",
    theme: {
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-slate-100 hover:border-blue-200",
      hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)]",
      gradient: "from-blue-500 to-indigo-500"
    }
  },
  {
    icon: SearchCheck,
    title: "ตรวจสอบโดยทีมงานจริง ไม่ใช่ระบบอัตโนมัติ",
    iconAlt: "visa document service Thailand",
    description: "ทุกคำขอผ่านการตรวจสอบจากทีมงานที่มีประสบการณ์ด้านเอกสารวีซ่าโดยตรงก่อนส่งให้คุณ",
    theme: {
      color: "text-orange-600",
      bg: "bg-orange-50",
      border: "border-slate-100 hover:border-orange-200",
      hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.18)]",
      gradient: "from-orange-500 to-amber-400"
    }
  },
  {
    icon: Clock,
    title: "ส่งภายใน 24 ชั่วโมง (มีแบบ Express)",
    iconAlt: "flight reservation for visa",
    description: "รองรับงานทั้งแบบวางแผนล่วงหน้าและงานเร่งด่วนภายในเวลาทำการ",
    theme: {
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-slate-100 hover:border-emerald-200",
      hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)]",
      gradient: "from-emerald-500 to-teal-400"
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
      border: "border-slate-100 hover:border-purple-200",
      hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(147,51,234,0.12)]",
      gradient: "from-purple-500 to-fuchsia-400"
    }
  },
  {
    icon: MessageCircle,
    title: "ราคาโปร่งใส ไม่มีค่าใช้จ่ายแอบแฝง",
    iconAlt: "visa document service Thailand",
    description: "ตรวจสอบราคาได้ชัดเจนก่อนสั่งซื้อ ไม่มีค่าใช้จ่ายเพิ่มเติมที่ไม่แจ้งล่วงหน้า",
    theme: {
      color: "text-sky-600",
      bg: "bg-sky-50",
      border: "border-slate-100 hover:border-sky-200",
      hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(2,132,199,0.12)]",
      gradient: "from-sky-500 to-cyan-400"
    }
  },
  {
    icon: Globe2,
    title: "ครอบคลุมหลายประเทศปลายทาง",
    iconAlt: "flight reservation for visa",
    description: "รองรับเอกสารสำหรับวีซ่า Schengen, UK, US, Canada, Australia, Japan, South Korea และอีกหลายประเทศ",
    theme: {
      color: "text-rose-600",
      bg: "bg-rose-50",
      border: "border-slate-100 hover:border-rose-200",
      hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(225,29,72,0.12)]",
      gradient: "from-rose-500 to-orange-400"
    }
  }
];

export default function WhyChooseUs() {
  return (
    <section id="benefits" className="relative w-full overflow-hidden bg-bg-light py-20 md:py-28 font-sans selection:bg-blue-200 selection:text-primary-navy">
      
      {/* Subtle background accents */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -right-40 -top-10 h-[440px] w-[440px] rounded-full bg-blue-50/70 blur-[80px]" />
        <div className="absolute -left-40 bottom-0 h-[380px] w-[380px] rounded-full bg-orange-50/70 blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* === Header Section === */}
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-blue-100/70 bg-white/85 px-4 py-1.5 text-sm font-bold text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur">
            <Sparkles className="h-4 w-4 text-orange-500 animate-pulse" />
            <span className="uppercase tracking-widest text-slate-500 text-xs">ทำไมต้องเลือก BKK AIR</span>
          </div>
          
          <h2 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl">
            เราไม่ได้แค่ส่งเอกสาร — <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">เราดูแลให้คุณพร้อมยื่น</span>
          </h2>
          <p className="mt-6 text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
            หลายคนเสียเวลาหาข้อมูลหรือได้เอกสารที่ไม่ตรงตามมาตรฐานสถานทูต BKK AIR จึงออกแบบบริการเพื่อช่วยจัดเตรียม visa support documents ให้ชัดเจนและพร้อมใช้งาน
          </p>
        </div>

        {/* === Cards Grid Section === */}
        <div className="grid grid-cols-1 items-stretch gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article
                key={benefit.title}
                className={`group relative flex h-full flex-col overflow-hidden rounded-[2rem] border bg-white/90 backdrop-blur-sm p-6 md:p-8 transition-all duration-300 hover:-translate-y-1.5 ${benefit.theme.border} ${benefit.theme.hoverShadow} shadow-[0_8px_30px_rgb(0,0,0,0.03)]`}
              >
                {/* Gradient top accent line */}
                <div className={`absolute inset-x-0 top-0 h-[4px] rounded-t-3xl bg-gradient-to-r ${benefit.theme.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

                {/* Horizontal Header (Icon & Title side-by-side) */}
                <div className="flex items-center gap-4 mb-5">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${benefit.theme.gradient} shadow-md shadow-slate-100 transition-transform duration-300 group-hover:scale-105`}>
                    <Icon className="h-5.5 w-5.5 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold leading-snug text-slate-900 group-hover:text-slate-950 transition-colors">
                    {benefit.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[13.5px] leading-relaxed text-slate-500">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
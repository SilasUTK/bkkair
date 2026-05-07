import { Clock, FileText, SearchCheck, Sparkles } from "lucide-react";
import React from "react";

const benefits = [
  {
    icon: Clock,
    title: "ตอบกลับรวดเร็ว",
    subtitle: "(Fast Response)",
    description: "ทีมงานผู้เชี่ยวชาญพร้อมให้คำปรึกษาและประเมินเอกสารเบื้องต้นภายใน 24 ชั่วโมง เพื่อให้คุณไม่พลาดทุกการเดินทาง",
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
    icon: FileText,
    title: "ดูแลเอกสารครบวงจร",
    subtitle: "(Full Document Support)",
    description: "บริการจัดเตรียม ตรวจสอบ และแปลเอกสารสำคัญสำหรับการยื่นขอวีซ่าทุกประเภทอย่างละเอียดและถูกต้องตามระเบียบสถานทูต",
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
    icon: SearchCheck,
    title: "ติดตามสถานะง่ายดาย",
    subtitle: "(Easy Tracking)",
    description: "ระบบแจ้งเตือนและติดตามสถานะการยื่นวีซ่าแบบเรียลไทม์ ให้คุณอุ่นใจและรู้ความคืบหน้าในทุกขั้นตอนโดยไม่ต้องตามเรื่องเอง",
    theme: {
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-100",
      hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.2)]",
      gradient: "from-emerald-500 to-teal-400",
      watermark: "text-emerald-50/60"
    }
  }
];

export default function WhyBKKAir() {
  return (
    <section id="benefits" className="relative w-full overflow-hidden bg-[#F8FAFC] py-20 lg:py-32 font-sans selection:bg-blue-200 selection:text-blue-900">
      
      {/* ================= Flat Design Background Elements ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft Blobs */}
        <div className="absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-orange-100/30 blur-3xl" />
        
        {/* Geometric Shapes & Patterns */}
        <div className="absolute right-10 top-32 h-32 w-32 opacity-40" style={{ backgroundImage: 'radial-gradient(#94A3B8 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
        <div className="absolute left-1/4 bottom-20 h-24 w-24 opacity-40" style={{ backgroundImage: 'radial-gradient(#93C5FD 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>
        <div className="absolute left-10 top-1/4 h-12 w-12 rounded-full border-[6px] border-orange-200/60"></div>
        <div className="absolute right-1/4 bottom-1/4 h-8 w-8 rounded-lg bg-emerald-200/50 rotate-45"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* === Header Section === */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-white border border-slate-200/60 px-4 py-1.5 text-sm font-bold text-slate-700 shadow-sm">
            <Sparkles className="h-4 w-4 text-orange-500" />
            <span className="uppercase tracking-widest text-slate-500 text-xs">Why BKK AIR</span>
          </div>
          
          <h2 className="text-4xl font-extrabold leading-[1.2] text-slate-900 sm:text-5xl lg:text-5xl tracking-tight">
            ทำไมต้องเลือก <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">BKK AIR</span>?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 font-medium">
            บริการจองตั๋วเพื่อยื่นวีซ่าที่เน้นความถูกต้อง ชัดเจน<br className="hidden sm:block" /> 
            และมีเจ้าหน้าที่ผู้เชี่ยวชาญคอยดูแลเคสของคุณในทุกขั้นตอน
          </p>
        </div>

        {/* === Cards Grid Section === */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const displayNumber = `0${index + 1}`;

            return (
              <article
                key={benefit.title}
                className={`group relative overflow-hidden rounded-[2rem] bg-white p-8 border border-slate-100 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-2 ${benefit.theme.hoverShadow}`}
              >
                {/* Accent Top Line */}
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${benefit.theme.gradient} opacity-80 transition-opacity duration-300 group-hover:opacity-100`}></div>

                {/* Background Watermark Number */}
                <div className={`absolute -right-6 -top-6 text-[8rem] font-black leading-none ${benefit.theme.watermark} pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6`}>
                  {displayNumber}
                </div>

                {/* Icon Container */}
                <div className="relative z-10 mb-8 flex items-center justify-between">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${benefit.theme.bg} border-2 ${benefit.theme.border} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <Icon className={`h-8 w-8 ${benefit.theme.color}`} strokeWidth={2} aria-hidden="true" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">
                    {benefit.title}
                  </h3>
                  <p className={`text-sm font-bold tracking-wide mt-1 mb-4 ${benefit.theme.color}`}>
                    {benefit.subtitle}
                  </p>
                  <p className="leading-relaxed text-slate-500 font-medium text-base">
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
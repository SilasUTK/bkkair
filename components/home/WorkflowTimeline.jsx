import { Clock, FileSignature, MessageCircle, Plane, ShieldCheck } from "lucide-react";
import React from "react";

export default function WorkflowTimeline() {
  return (
    <section id="timeline" className="relative w-full overflow-hidden bg-white py-16 md:py-24 font-sans">
      
      {/* Decorative Brand Light Gradients */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-20 top-20 h-[350px] w-[350px] rounded-full bg-blue-500/5 blur-[90px]" />
        <div className="absolute -right-20 bottom-10 h-[350px] w-[350px] rounded-full bg-orange-500/5 blur-[90px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        { }
        {/* Main Grid Wrapper matching Nicepage asymmetrical 50/50 block style but using BKK AIR colors */}
        <div className="grid grid-cols-1 overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-slate-50 lg:grid-cols-12 shadow-2xl">
          
          {/* ================= LEFT COLUMN: STEP 1 & STEP 2 (lg:col-span-3) ================= */}
          <div className="flex flex-col lg:col-span-3">
            
            {}
            {/* Step 1: Deep BKK AIR Blue Block */}
            <div className="flex flex-1 flex-col justify-between bg-[#003d82] p-8 text-white min-h-[250px] md:min-h-[280px] relative group transition-all duration-300 hover:bg-[#003572]">
              {/* Subtle accent light */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-orange-300">
                <ShieldCheck className="h-7 w-7" />
              </div>
              
              <div className="relative z-10">
                <p className="text-xs font-black tracking-widest text-orange-400 uppercase mb-2">STEP 01</p>
                <h3 className="text-lg font-bold leading-snug mb-3">เลือกแพ็กเกจที่ต้องการ</h3>
                <p className="text-sm leading-relaxed text-blue-100/80">
                  เลือกเอกสารที่ต้องการ เช่น ใบจองตั๋ว ใบจองโรงแรม แผนการเดินทาง หรือชุดครบเซ็ต พร้อมระบุประเทศที่จะยื่นวีซ่า
                </p>
              </div>
            </div>

            {/* Step 2: Off-White Slate Block with Brand Navy elements */}
            <div className="flex flex-1 flex-col justify-between bg-slate-50 p-8 text-slate-800 min-h-[250px] md:min-h-[280px] border-t border-slate-200/60 lg:border-t-0 lg:border-b lg:border-slate-200/40 relative group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#003d82] shadow-sm">
                <FileSignature className="h-7 w-7" />
              </div>
              <div>
                <p className="text-xs font-black tracking-widest text-blue-600/70 uppercase mb-2">STEP 02</p>
                <h3 className="text-lg font-bold leading-snug text-slate-900 mb-3">กรอกข้อมูลและชำระเงิน</h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  กรอกข้อมูลการเดินทางของคุณผ่านฟอร์มที่ปลอดภัย — ชื่อ-นามสกุล (ตามหนังสือเดินทาง) วันเดินทาง ปลายทาง และข้อมูลที่จำเป็น
                </p>
              </div>
            </div>
          </div>

          {/* ================= MIDDLE COLUMN: PORTRAIT VISUAL (lg:col-span-5) ================= */}
          {}
          <div className="relative min-h-[350px] lg:col-span-5 lg:min-h-full overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=1200" 
              alt="Traveler exploring visa support" 
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Elegant vignette overlay utilizing Navy Blue shadow to blend with the site theme */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 via-transparent to-[#0f172a]/20" />
            
            {/* Floating micro-badge for context with Brand Blue Accent */}
            <div className="absolute bottom-6 left-6 inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-4.5 py-2 text-xs font-bold text-slate-800 shadow-xl border border-slate-100">
              <span className="h-2 w-2 rounded-full bg-[#f59e0b] animate-pulse" />
              BKK AIR Travel Support
            </div>
          </div>

          {/* ================= RIGHT COLUMN: HEADER & STEPS 3, 4 (lg:col-span-4) ================= */}
          {}
          <div className="flex flex-col lg:col-span-4">
            
            {/* Header Block: Large Typography Area */}
            <div className="flex flex-1 flex-col justify-center bg-white p-8 lg:p-10 border-b border-slate-200/80">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1 text-[11px] font-extrabold text-[#003d82] uppercase tracking-widest w-fit border border-blue-100/60">
                <Clock className="h-3.5 w-3.5 text-blue-600 animate-pulse" />
                Workflow
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 leading-tight sm:text-4xl">
                สั่ง รับ ยื่น — <br/>ง่ายกว่าที่คิด
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-500">
                ไม่จำเป็นต้องมีความรู้ด้านวีซ่ามาก่อน เพียงแจ้งปลายทางและช่วงเวลาเดินทาง ทีมงานจะช่วยจัดเตรียมเอกสารให้ครบตามความต้องการ
              </p>
            </div>

            {/* Bottom Row inside Right Column (Splitting Step 3 and 4 side-by-side) */}
            <div className="grid grid-cols-1 sm:grid-cols-2">
              
              {/* Step 3: Brand Sky Blue Block */}
              <div className="flex flex-col justify-between bg-[#1e5a96] p-6 text-white min-h-[260px] relative group transition-all duration-300 hover:bg-[#194c7f]">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-blue-200">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div className="relative z-10 mt-8">
                  <p className="text-[10px] font-black tracking-widest text-blue-200 uppercase mb-1">STEP 03</p>
                  <h3 className="text-base font-bold leading-snug mb-2">ทีมงานตรวจสอบ</h3>
                  <p className="text-xs leading-relaxed text-blue-100/85">
                    ทีมงานตรวจสอบข้อมูลและจัดเตรียมเอกสาร PDF ตามมาตรฐานสถานทูตภายใน 24 ชั่วโมง
                  </p>
                </div>
              </div>

              {/* Step 4: Brand Accent Orange Block (Calls for action, represents the final submission!) */}
              <div className="flex flex-col justify-between bg-[#f59e0b] p-6 text-white min-h-[260px] relative group transition-all duration-300 hover:bg-[#e08e04]">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 text-white">
                  <Plane className="h-6 w-6" />
                </div>
                <div className="relative z-10 mt-8">
                  <p className="text-[10px] font-black tracking-widest text-white/90 uppercase mb-1">STEP 04</p>
                  <h3 className="text-base font-bold leading-snug mb-2">รับ PDF & ยื่นได้เลย</h3>
                  <p className="text-xs leading-relaxed text-amber-50/90">
                    คุณจะได้รับไฟล์ PDF ทางอีเมล พร้อมสำหรับการพิมพ์หรือแนบยื่นระบบออนไลน์ของสถานทูตได้ทันที
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Reassurance text beneath the grid */}
        <p className="mt-8 text-center text-sm font-semibold text-slate-500 tracking-wide">
          * มีข้อสงสัยระหว่างทาง? ทีมงานพร้อมตอบคำถามทุกขั้นตอนผ่านช่องทางบริการ
        </p>

      </div>
    </section>
  );
}
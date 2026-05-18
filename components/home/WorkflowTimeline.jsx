import { Clock, FileSignature, MessageCircle, Plane, ShieldCheck, CheckCircle2 } from "lucide-react";

// กำหนด Theme สีเฉพาะสำหรับแต่ละขั้นตอนเพื่อให้ดูมีสีสัน (Colorful Flat Design)
const steps = [
  {
    icon: ShieldCheck,
    title: "เลือกแพ็กเกจที่ต้องการ",
    desc: "เลือกเอกสารที่คุณต้องการ — ใบจองตั๋ว ใบจองโรงแรม แผนการเดินทาง หรือชุดครบเซ็ต พร้อมระบุประเทศที่จะยื่นวีซ่า",
    color: {
      light: "bg-blue-100",
      base: "bg-blue-500",
      text: "text-blue-600",
      border: "border-blue-200",
      shadow: "shadow-blue-200/50"
    }
  },
  {
    icon: FileSignature,
    title: "กรอกข้อมูลและชำระเงิน",
    desc: "กรอกข้อมูลการเดินทางของคุณผ่านฟอร์มที่ปลอดภัย — ชื่อ-นามสกุล (ตามหนังสือเดินทาง) วันเดินทาง ปลายทาง และข้อมูลที่จำเป็น",
    color: {
      light: "bg-orange-100",
      base: "bg-[#FF5722]",
      text: "text-[#FF5722]",
      border: "border-orange-200",
      shadow: "shadow-orange-200/50"
    }
  },
  {
    icon: MessageCircle,
    title: "ทีมงานตรวจสอบและจัดเตรียมเอกสาร",
    desc: "ทีมงานของเราตรวจสอบข้อมูลและจัดเตรียมเอกสาร PDF ตามมาตรฐานสถานทูต ภายใน 24 ชั่วโมง (หรือเร็วกว่านั้นสำหรับแพ็กเกจ Express)",
    color: {
      light: "bg-emerald-100",
      base: "bg-emerald-500",
      text: "text-emerald-600",
      border: "border-emerald-200",
      shadow: "shadow-emerald-200/50"
    }
  },
  {
    icon: Plane,
    title: "รับ PDF และยื่นสถานทูตได้เลย",
    desc: "คุณจะได้รับไฟล์ PDF ทางอีเมล พร้อมสำหรับการ print หรือแนบในระบบออนไลน์ของสถานทูต",
    color: {
      light: "bg-purple-100",
      base: "bg-purple-500",
      text: "text-purple-600",
      border: "border-purple-200",
      shadow: "shadow-purple-200/50"
    }
  }
];

export default function WorkflowTimeline() {
  return (
    <section id="timeline" className="relative overflow-hidden bg-gradient-to-br from-[#F7FBFF] via-[#EEF6FF] to-[#FFF7F0] py-16 font-sans lg:py-24">
      
      {/* ================= Colorful Background Elements ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Large colorful blobs */}
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-blue-300/25 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-orange-200/35 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-cyan-200/25 blur-3xl" />

        {/* Flat Design Graphic Shapes (Crisp, solid colors) */}
        <div className="absolute left-10 top-32 h-16 w-16 rounded-full border-[6px] border-purple-200 opacity-60" />
        <div className="absolute right-20 top-20 opacity-40">
           <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M10 20H30M20 10V30" stroke="#FF5722" strokeWidth="6" strokeLinecap="round"/>
           </svg>
        </div>
        <div className="absolute left-1/3 bottom-20 h-10 w-10 rounded-lg bg-yellow-300 opacity-80 rotate-12" />
        <div className="absolute right-1/4 bottom-32 opacity-40">
           <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
             <circle cx="20" cy="20" r="15" stroke="#10B981" strokeWidth="6" strokeDasharray="4 4"/>
           </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        
        {/* ================= Header & Mockup Area ================= */}
        <div className="mb-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          
          {/* Left: Text Content */}
          <div className="lg:pr-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100/70 bg-white/85 px-4 py-2 text-sm font-extrabold text-purple-600 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
              <Clock className="h-4 w-4" aria-hidden="true" />
              Workflow & Tracking
            </div>

            <h2 className="text-3xl font-black leading-[1.18] text-slate-900 sm:text-5xl">
              สั่ง รับ ยื่น — ง่ายกว่าที่คิด
              <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#FF5722]">
                  ไม่ต้องมีความรู้ด้านวีซ่า
                </span>
                {/* SVG Underline Accent */}
                <svg className="absolute -bottom-3 left-0 -z-10 h-3 w-full text-yellow-300 opacity-70" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>

            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              ไม่ต้องมีความรู้ด้านวีซ่า ไม่ต้องเตรียมอะไรมาก แค่บอกเราว่าคุณจะเดินทางที่ไหน เมื่อไหร่ และต้องการเอกสารอะไร — เราจัดการให้
            </p>
          </div>

          {/* Right: Colorful Dashboard Mockup (Fix Layout Issue) */}
          <div className="relative flex w-full justify-center lg:justify-end">
            
            {/* Wrapper to constrain the size of the mockup and blob */}
            <div className="relative w-full max-w-sm lg:max-w-md">
              
              {/* SVG Organic Blob Background (Replaces the blocky CSS shape) */}
              <div className="pointer-events-none absolute -inset-4 z-0 opacity-75 drop-shadow-2xl md:-inset-8">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full transform rotate-3">
                  <path 
                    fill="#FF5722" 
                    d="M44.7,-76.4C58.3,-69.2,70,-56.1,77.7,-41C85.4,-25.9,89.1,-8.8,85.2,6.5C81.3,21.8,69.8,35.3,58.3,47.8C46.8,60.3,35.3,71.8,20.8,77.8C6.3,83.8,-11.2,84.3,-26.4,78.8C-41.6,73.3,-54.5,61.8,-65.2,48.7C-75.9,35.6,-84.4,20.9,-85.5,5.5C-86.6,-9.9,-80.3,-26,-71.4,-39.8C-62.5,-53.6,-51,-65.1,-37.2,-72C-23.4,-78.9,-7.3,-81.2,8.1,-79.8C23.5,-78.4,47,-73.3,44.7,-76.4Z" 
                    transform="translate(100 100) scale(1.15)" 
                  />
                </svg>
              </div>
              
              {/* Main Card */}
              <div className="relative z-10 rounded-3xl border border-blue-100/70 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-transform duration-500 md:hover:-translate-y-1 sm:p-6">
                
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Status Overview</p>
                    <p className="text-xl font-black text-slate-900">Live Tracking</p>
                  </div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="h-6 w-6" />
                  </span>
                </div>

                <div className="relative grid gap-4">
                  {/* Connecting Line inside mockup */}
                  <div className="absolute left-[1.35rem] top-6 bottom-10 w-0.5 bg-slate-100 z-0"></div>

                  {/* Step 1: Done */}
                  <div className="relative z-10 flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-md shadow-emerald-200 font-bold ring-4 ring-white">
                      <CheckCircle2 className="h-5 w-5" />
                    </span>
                    <div className="pt-1">
                      <p className="font-bold text-slate-900">Request received</p>
                      <p className="text-sm font-medium text-slate-500">ไม่ต้องชำระเงินก่อน</p>
                    </div>
                  </div>

                  {/* Step 2: Active (Colorful Accent) */}
                  <div className="relative z-10 flex items-start gap-4 rounded-2xl bg-blue-50 p-4 border border-blue-100 shadow-sm">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-white shadow-md shadow-blue-200 font-bold ring-4 ring-white relative">
                      <span className="absolute -inset-1 rounded-full animate-ping bg-[#2563EB] opacity-20"></span>
                      2
                    </span>
                    <div className="pt-1">
                      <p className="font-bold text-[#2563EB]">Staff reviewing</p>
                      <p className="text-sm font-medium text-blue-600/70">ติดต่อผ่าน LINE OA และ Email</p>
                    </div>
                  </div>

                  {/* Step 3: Pending */}
                  <div className="relative z-10 flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400 font-bold ring-4 ring-white">
                      3
                    </span>
                    <div className="pt-1 opacity-60">
                      <p className="font-bold text-slate-600">Documents prepared</p>
                      <p className="text-sm font-medium text-slate-500">ภายใน 24-48 ชั่วโมงหลังยืนยัน</p>
                    </div>
                  </div>
                </div>

                {/* Colorful Badge */}
                <div className="mt-6 flex items-center justify-between rounded-2xl bg-slate-900 p-4 shadow-lg text-white">
                   <div className="flex -space-x-3">
                     <div className="h-8 w-8 rounded-full bg-blue-500 border-2 border-slate-900 z-30"></div>
                     <div className="h-8 w-8 rounded-full bg-orange-500 border-2 border-slate-900 z-20"></div>
                     <div className="h-8 w-8 rounded-full bg-emerald-500 border-2 border-slate-900 z-10"></div>
                   </div>
                   <p className="font-bold text-sm tracking-wide">Working on it!</p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* ================= 4 Steps Horizontal Area ================= */}
        <div className="relative mt-8 lg:mt-12">
          
          {/* Colorful Connecting Line (Desktop) */}
          <div className="absolute left-1/2 top-12 z-0 hidden h-1.5 w-3/4 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-100 via-orange-100 to-purple-100 lg:block"></div>
          
          <div className="relative z-10 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title, desc, color }, index) => (
              <article 
                key={title} 
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white p-5 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-300 md:hover:-translate-y-1 sm:p-6 ${color.border} hover:bg-slate-50/50`}
              >
                {/* Number Badge overlay */}
                <div className={`absolute -right-4 -top-4 flex h-20 w-20 items-end justify-start rounded-full p-5 text-2xl font-black opacity-10 transition-transform group-hover:scale-110 ${color.text} ${color.base}`}>
                  0{index + 1}
                </div>

                {/* Big Colorful Icon */}
                <div className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-[2rem] shadow-sm transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 ${color.light} ${color.text}`}>
                  <Icon className="h-10 w-10" aria-hidden="true" />
                </div>
                
                <h3 className="mb-3 text-xl font-black text-slate-900">{title}</h3>
                <p className="text-sm font-medium leading-relaxed text-slate-600">{desc}</p>

                {/* Colorful bottom accent line */}
                <div className={`absolute bottom-0 left-1/2 h-1.5 w-1/2 -translate-x-1/2 rounded-t-md opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:w-3/4 ${color.base}`}></div>
              </article>
            ))}
          </div>
        </div>

        {/* Reassurance Line */}
        <div className="mt-10 text-center text-base font-medium text-slate-600">
          💬 มีข้อสงสัยระหว่างทาง? ทีมงานพร้อมตอบคำถามทุกขั้นตอน
        </div>

      </div>
    </section>
  );
}

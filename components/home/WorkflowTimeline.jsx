import { Clock, FileSignature, MessageCircle, Plane, ShieldCheck } from "lucide-react";

// กำหนด Theme สีเฉพาะสำหรับแต่ละขั้นตอนเพื่อให้ดูมีสีสัน (Colorful Flat Design)
const steps = [
  {
    number: "①",
    icon: ShieldCheck,
    title: "เลือกแพ็กเกจที่ต้องการ",
    desc: "เลือกเอกสารที่คุณต้องการ — ใบจองตั๋ว ใบจองโรงแรม แผนการเดินทาง หรือชุดครบเซ็ต พร้อมระบุประเทศที่จะยื่นวีซ่า เช่น จองตั๋วเครื่องบินยื่นวีซ่า หรือใบจองโรงแรมยื่นวีซ่า",
    color: {
      light: "bg-blue-100",
      base: "bg-blue-500",
      text: "text-blue-600",
      border: "border-blue-200",
      shadow: "shadow-blue-200/50"
    }
  },
  {
    number: "②",
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
    number: "③",
    icon: MessageCircle,
    title: "ทีมงานตรวจสอบและจัดเตรียมเอกสาร",
    desc: "ทีมงานของเราตรวจสอบข้อมูลและจัดเตรียมเอกสาร PDF ตามมาตรฐานสถานทูต ภายใน 24 ชั่วโมง (หรือเร็วกว่านั้นสำหรับแพ็กเกจ Express) สำหรับผู้ที่ค้นหา how to get flight reservation for visa application",
    color: {
      light: "bg-emerald-100",
      base: "bg-emerald-500",
      text: "text-emerald-600",
      border: "border-emerald-200",
      shadow: "shadow-emerald-200/50"
    }
  },
  {
    number: "④",
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
        
        {/* ================= Header Area ================= */}
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100/70 bg-white/85 px-4 py-2 text-sm font-extrabold text-purple-600 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
            <Clock className="h-4 w-4" aria-hidden="true" />
            ขั้นตอนการใช้บริการ
          </div>

          <h2 className="text-3xl font-black leading-[1.18] text-slate-900 sm:text-5xl">
            สั่ง รับ ยื่น — ง่ายกว่าที่คิด
          </h2>

          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            ไม่ต้องมีความรู้ด้านวีซ่า ไม่ต้องเตรียมอะไรมาก แค่บอกเราว่าคุณจะเดินทางที่ไหน เมื่อไหร่ และต้องการเอกสารอะไร — เราจัดการให้ ทั้งจองตั๋วเครื่องบินยื่นวีซ่า ใบจองโรงแรมยื่นวีซ่า และคำแนะนำ how to get flight reservation for visa application
          </p>
        </div>

        {/* ================= 4 Steps Horizontal Area ================= */}
        <div className="relative">
          
          {/* Colorful Connecting Line (Desktop) */}
          <div className="absolute left-1/2 top-12 z-0 hidden h-1.5 w-3/4 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-100 via-orange-100 to-purple-100 lg:block"></div>
          
          <ol className="relative z-10 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ number, icon: Icon, title, desc, color }) => (
              <li
                key={title} 
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white p-5 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-300 md:hover:-translate-y-1 sm:p-6 ${color.border} hover:bg-slate-50/50`}
              >
                {/* Number Badge overlay */}
                <div className={`absolute -right-4 -top-4 flex h-20 w-20 items-end justify-start rounded-full p-5 text-2xl font-black opacity-10 transition-transform group-hover:scale-110 ${color.text} ${color.base}`}>
                  {number}
                </div>

                {/* Big Colorful Icon */}
                <div className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-[2rem] shadow-sm transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 ${color.light} ${color.text}`}>
                  <Icon className="h-10 w-10" aria-hidden="true" />
                </div>
                
                <div className={`mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full text-xl font-black ${color.light} ${color.text}`}>
                  {number}
                </div>
                <h3 className="mb-3 text-xl font-black text-slate-900">{title}</h3>
                <p className="text-sm font-medium leading-relaxed text-slate-600">{desc}</p>

                {/* Colorful bottom accent line */}
                <div className={`absolute bottom-0 left-1/2 h-1.5 w-1/2 -translate-x-1/2 rounded-t-md opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:w-3/4 ${color.base}`}></div>
              </li>
            ))}
          </ol>
        </div>

        {/* Reassurance Line */}
        <div className="mt-10 text-center text-base font-medium text-slate-600">
          💬 มีข้อสงสัยระหว่างทาง? ทีมงานพร้อมตอบคำถามทุกขั้นตอน
        </div>

      </div>
    </section>
  );
}

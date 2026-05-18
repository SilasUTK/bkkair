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
      base: "bg-accent-orange",
      text: "text-accent-orange",
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
    <section id="timeline" className="relative overflow-hidden bg-bg-light py-16 font-sans lg:py-24"
      
      {/* Subtle background */}
      <div className="absolute inset-0 z-0 pointer-events-none"
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-blue-100/60 blur-[80px]" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-orange-100/50 blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12"
        
        {/* ================= Header Area ================= */}
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-14"
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100/70 bg-white/85 px-4 py-2 text-sm font-extrabold text-purple-600 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur"
            <Clock className="h-4 w-4" aria-hidden="true" />
            ขั้นตอนการใช้บริการ
          </div>

          <h2 className="text-4xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl"
            สั่ง รับ ยื่น — ง่ายกว่าที่คิด
          </h2>

          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg"
            ไม่ต้องมีความรู้ด้านวีซ่า ไม่ต้องเตรียมอะไรมาก แค่บอกเราว่าคุณจะเดินทางที่ไหน เมื่อไหร่ และต้องการเอกสารอะไร — เราจัดการให้ ทั้งจองตั๋วเครื่องบินยื่นวีซ่า ใบจองโรงแรมยื่นวีซ่า และคำแนะนำ how to get flight reservation for visa application
          </p>
        </div>

        {/* ================= 4 Steps Horizontal Area ================= */}
        <div className="relative"
          
          {/* Gradient Connecting Line (Desktop) */}
          <div className="absolute left-1/2 top-10 z-0 hidden h-0.5 w-3/4 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-200 via-orange-200 to-purple-200 lg:block"</div>
          
          <ol className="relative z-10 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4"
            {steps.map(({ number, icon: Icon, title, desc, color }) => (
              <li
                key={title} 
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white p-5 text-center shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(15,23,42,0.09)] sm:p-6 ${color.border}`}
              >
                {/* Step number badge */}
                <div className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl font-black text-white shadow-md ${color.base} transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className="h-7 w-7" />
                </div>

                {/* Step counter */}
                <div className={`absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-black ${color.light} ${color.text}`}>
                  {number}
                </div>

                <h3 className={`text-base font-bold leading-snug text-slate-900 sm:text-[1.05rem]`}>{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500"{desc}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Reassurance Line */}
        <div className="mt-10 text-center text-base font-medium text-slate-600"
          💬 มีข้อสงสัยระหว่างทาง? ทีมงานพร้อมตอบคำถามทุกขั้นตอน
        </div>

      </div>
    </section>
  );
}



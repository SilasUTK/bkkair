import { Award, CheckCircle2, Shield, BriefcaseBusiness } from "lucide-react";
import React from "react";

const features = [
  {
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
      
      {/* ================= Flat Design Background Elements ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft Background Fill */}
        <div className="absolute inset-0 bg-white/25"></div>
        
        {/* Organic Blobs */}
        <div className="absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-blue-300/25 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-[460px] w-[460px] rounded-full bg-orange-200/35 blur-3xl"></div>
        <div className="absolute right-1/3 top-10 h-[300px] w-[300px] rounded-full bg-cyan-200/25 blur-3xl"></div>
        
        {/* Decorative Grid & Shapes (Flat 2.0 Accents) */}
        <div className="absolute left-8 top-16 h-32 w-32 bg-[radial-gradient(circle_at_2px_2px,rgba(148,163,184,0.5)_2px,transparent_0)] bg-[length:20px_20px] opacity-30"></div>
        <div className="absolute right-12 bottom-24 h-16 w-16 rounded-full border-[8px] border-emerald-100 opacity-80"></div>
        <div className="absolute right-1/4 top-20 h-10 w-10 rounded-xl bg-yellow-200 opacity-60 rotate-[15deg]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* ปรับ Grid เป็น 10 Columns เพื่อแบ่ง 30/70 */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          
          {/* ================= Left: Colorful Floating Cards (30% Width) ================= */}
          <div className="relative order-2 flex min-h-[280px] w-full justify-center lg:order-1 lg:col-span-4 lg:min-h-[360px] lg:justify-start">
            {/* ปรับขนาด Container ของรูปให้เล็กลงเพื่อให้พอดีกับพื้นที่ 30% */}
            <div className="relative mx-auto aspect-square w-full max-w-[280px] lg:mx-0 lg:max-w-[300px]">
              
              {/* Main Organic Blob Background (Blue) */}
              <div className="pointer-events-none absolute inset-0 z-0 -translate-x-2 transform opacity-75 drop-shadow-xl sm:-translate-x-6">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-blue-100">
                  <path 
                    fill="currentColor" 
                    d="M48.8,-69.5C62.2,-61.5,71.5,-45.5,76.6,-28.9C81.7,-12.3,82.6,4.8,77.3,20.2C72,35.6,60.5,49.2,46.2,57.6C31.9,66,15.9,69.1,0.3,68.7C-15.4,68.3,-30.7,64.3,-43.3,55.3C-55.9,46.3,-65.7,32.3,-71.4,16.5C-77.1,0.7,-78.6,-16.9,-71.9,-31.2C-65.2,-45.5,-50.2,-56.5,-35.3,-63.8C-20.4,-71.1,-5.5,-74.6,6.3,-72C18.1,-69.4,35.4,-77.5,48.8,-69.5Z" 
                    transform="translate(100 100) scale(1.15) rotate(-15)" 
                  />
                </svg>
              </div>

              {/* Decorative Orange Blob */}
              <div className="absolute -bottom-8 -right-4 sm:-right-12 z-0 h-40 w-40 opacity-80 pointer-events-none">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-orange-100">
                  <path fill="currentColor" d="M51.5,-63.5C65.5,-51.7,74.7,-34.5,77.5,-16.4C80.2,1.7,76.4,20.7,66.4,36.1C56.4,51.5,40.3,63.3,22.3,69.4C4.3,75.5,-15.5,75.9,-32.1,69.1C-48.7,62.3,-62,48.2,-70.6,31.7C-79.2,15.2,-83,-3.8,-77.4,-20.3C-71.8,-36.8,-56.8,-50.8,-40.8,-62.1C-24.8,-73.4,-7.8,-82,6.5,-89.6C20.8,-97.2,41.6,-103.8,51.5,-63.5Z" transform="translate(100 100) scale(0.95) rotate(30)" />
                </svg>
              </div>

              {/* Floating Card 1: Data Privacy */}
              <div className="absolute left-0 top-10 z-10 w-[92%] animate-[bounce_6s_ease-in-out_infinite] rounded-3xl border border-blue-100/70 bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:left-3">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#2563EB]">
                    <Shield className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="w-full">
                    <div className="h-3 w-[65%] rounded-full bg-slate-200" />
                    <div className="mt-3 h-2 w-[45%] rounded-full bg-orange-200" />
                    <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                       <div className="flex -space-x-2">
                         <div className="h-6 w-6 rounded-full bg-emerald-100 border-2 border-white"></div>
                         <div className="h-6 w-6 rounded-full bg-purple-100 border-2 border-white"></div>
                         <div className="h-6 w-6 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[9px] font-bold text-blue-600">+</div>
                       </div>
                       <div className="h-2 w-10 bg-slate-100 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card 2: Legal Entity */}
              <div className="absolute -left-2 bottom-20 z-20 flex animate-[bounce_5s_ease-in-out_infinite_0.5s] items-center gap-3 rounded-3xl border border-blue-100/70 bg-white px-4 py-3 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:bottom-24 lg:bottom-16">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 border-2 border-emerald-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-5 h-5 bg-emerald-200/50 rounded-bl-full"></div>
                  <BriefcaseBusiness className="h-6 w-6 text-emerald-600 relative z-10" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-extrabold text-slate-900 text-sm">จดทะเบียนถูกต้อง</p>
                  <p className="text-[10px] font-bold text-emerald-600 tracking-wide uppercase mt-0.5">Legally Registered</p>
                </div>
              </div>

              {/* Floating Card 3: Staff reviewed request */}
              <div className="absolute -right-1 bottom-4 z-30 animate-[bounce_7s_ease-in-out_infinite_1s] rounded-3xl border border-blue-100/70 bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:bottom-8">
                <div className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 border-2 border-orange-100 relative">
                  <Award className="h-7 w-7 text-[#FF5722]" aria-hidden="true" />
                  <div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-white shadow-md border-2 border-white">
                    <CheckCircle2 className="h-3 w-3" />
                  </div>
                </div>
                <p className="font-black text-slate-900 text-lg leading-tight">Staff Reviewed <br/>Request</p>
                <p className="mt-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">Document Support</p>
              </div>

            </div>
          </div>

          {/* ================= Right: Text & Features List (70% Width) ================= */}
          <div className="relative z-10 order-1 lg:order-2 lg:col-span-8 lg:pl-6 xl:pl-10">
            
            <div className="mb-5 inline-flex w-fit items-center gap-2.5 rounded-full border border-blue-100/70 bg-white/85 p-1.5 pr-5 text-sm font-semibold text-slate-700 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <Shield className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>Trust & Security</span>
            </div>
            
            <h2 className="text-3xl font-extrabold leading-[1.18] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              คุณฝากข้อมูลไว้กับเรา
              <br className="hidden sm:block" />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-[#FF5722]">
                  เราจริงจังกับเรื่องนี้
                </span>
                {/* Vector Underline Accent */}
                <svg className="absolute -bottom-3 left-0 -z-10 h-3 w-full text-[#FF5722]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>

            {/* ขยายความกว้างของข้อความให้เหมาะสมกับพื้นที่ 70% */}
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
              <strong className="text-slate-800 font-semibold">BKK AIR</strong> ให้บริการเตรียมเอกสารยื่นวีซ่า
              โดยเน้นความปลอดภัย ความโปร่งใส และการบอกข้อมูลตามจริง เราไม่รับประกันผลวีซ่า แต่ดูแลให้เอกสารพร้อมใช้ประกอบคำขอมากที่สุด
            </p>

            {/* Feature List: ขยายให้กว้างขึ้นเช่นกัน */}
            <div className="mt-8 grid max-w-4xl gap-4">
              {features.map((feature, index) => (
                <div 
                  key={feature.title} 
                  className="group flex items-start gap-5 rounded-3xl border border-blue-100/70 bg-white/75 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur transition-all duration-300 hover:bg-white sm:p-5"
                >
                  {/* Colorful Flat Icon Box */}
                  <div className={`mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${feature.color.bg} border-2 ${feature.color.border} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                    <CheckCircle2 className={`h-7 w-7 ${feature.color.icon}`} strokeWidth={2.5} aria-hidden="true" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-slate-500">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-slate-400">
              อ่านนโยบายความเป็นส่วนตัวของเราได้ที่{" "}
              <a href="/privacy-policy" className="font-semibold text-blue-600 underline underline-offset-2 hover:text-blue-800">
                นโยบายความเป็นส่วนตัว →
              </a>
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import React, { useState } from "react";

const faqs = [
  {
    q: "BKK AIR คืออะไร ให้บริการอะไร?",
    a: "BKK AIR คือบริการจัดเตรียมเอกสารสนับสนุนวีซ่าสำหรับนักเดินทางชาวไทย ได้แก่ ใบจองตั๋วเครื่องบิน ใบจองโรงแรม แผนการเดินทาง และประกันการเดินทาง ในรูปแบบ PDF มาตรฐานสถานทูต — เราไม่ใช่ตัวแทนวีซ่าและไม่ใช่บริษัทขายตั๋ว"
  },
  {
    q: "เอกสารที่ได้รับสามารถใช้ยื่นสถานทูตได้จริงไหม?",
    a: "ได้ครับ/ค่ะ เอกสารทุกชุดจัดทำในรูปแบบที่ใช้ประกอบคำขอวีซ่าได้ ทว่าการพิจารณาอนุมัติเป็นดุลยพินิจของสถานทูตหรือสถานกงสุลแต่เพียงผู้เดียว BKK AIR ไม่รับประกันผลการอนุมัติวีซ่า"
  },
  {
    q: "จะได้รับเอกสารภายในกี่ชั่วโมง?",
    a: "แพ็กเกจมาตรฐานส่งเอกสารภายใน 24 ชั่วโมงหลังยืนยันข้อมูล หากต้องการเร็วกว่านั้น มีแบบ Express ที่ส่งภายใน 4-6 ชั่วโมง สามารถแจ้งทีมงานเพื่อสอบถามรายละเอียดได้เลย"
  },
  {
    q: "ต้องส่งเอกสารอะไรให้ BKK AIR บ้าง?",
    a: "ทีมงานจะขอข้อมูลเบื้องต้นเท่านั้น เช่น ชื่อ-สกุล (ตามพาสปอร์ต) ประเทศปลายทาง วันเดินทาง และจำนวนผู้เดินทาง ไม่ต้องส่งสำเนาพาสปอร์ตหรือข้อมูลส่วนตัวเพิ่มเติมก่อนยืนยันคำสั่ง"
  },
  {
    q: "BKK AIR รับประกันการอนุมัติวีซ่าไหม?",
    a: "ไม่รับประกันครับ/ค่ะ BKK AIR ให้บริการจัดเตรียมเอกสารสนับสนุนเท่านั้น การอนุมัติวีซ่าเป็นดุลยพินิจของสถานทูตหรือสถานกงสุลในทุกกรณี เราไม่มีความสัมพันธ์ใด ๆ กับสถานทูต"
  },
  {
    q: "ชำระเงินได้ทางไหนบ้าง?",
    a: "รับชำระผ่านโอนเงินธนาคาร พร้อมเพย์ และช่องทางออนไลน์ที่ทีมงานแจ้งให้ทราบหลังยืนยันคำสั่ง ราคาชัดเจนก่อนชำระ ไม่มีค่าใช้จ่ายซ่อนเร้น"
  },
  {
    q: "ถ้ามีปัญหาหรืออยากแก้ไขข้อมูล ติดต่อได้ที่ไหน?",
    a: "ติดต่อทีมงานได้ผ่าน LINE OA: @bkkair หรืออีเมล info@bkkair.com ทีมงานพร้อมตอบคำถามและช่วยเหลือทุกขั้นตอน"
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="relative w-full overflow-hidden bg-gradient-to-br from-[#F7FBFF] via-[#EEF6FF] to-[#FFF7F0] py-16 lg:py-24 font-sans selection:bg-blue-200 selection:text-blue-900">
      
      {/* ================= Flat Design 2.0 Background Elements ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft Background Blobs */}
        <div className="absolute -left-32 top-1/4 h-[460px] w-[460px] rounded-full bg-blue-300/25 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-[540px] w-[540px] rounded-full bg-orange-200/35 blur-3xl" />
        <div className="absolute left-1/2 top-10 h-[280px] w-[280px] rounded-full bg-cyan-200/25 blur-3xl" />
        
        {/* Dotted Grid Pattern */}
        <div className="absolute left-10 top-20 h-32 w-32 bg-[radial-gradient(circle_at_2px_2px,rgba(148,163,184,0.5)_2px,transparent_0)] bg-[length:20px_20px] opacity-30"></div>
        <div className="absolute bottom-40 right-20 h-24 w-24 bg-[radial-gradient(circle_at_2px_2px,rgba(147,197,253,0.55)_2px,transparent_0)] bg-[length:16px_16px] opacity-30"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute right-1/4 top-20 h-10 w-10 rounded-full bg-yellow-300 opacity-50" />
        <div className="absolute left-10 bottom-32 h-16 w-16 rounded-3xl border-[6px] border-emerald-200/60 opacity-60 -rotate-12" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
        
        {/* ================= Header Section ================= */}
        <div className="mx-auto mb-12 text-center">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-blue-100/70 bg-white/85 px-4 py-1.5 text-sm font-bold text-slate-700 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
            <MessageCircleQuestion className="h-4 w-4 text-blue-600" aria-hidden="true" />
            <span className="uppercase tracking-widest text-slate-500 text-xs">Support & FAQ</span>
          </div>
          
          <h2 className="text-3xl font-extrabold leading-[1.18] tracking-tight text-slate-900 sm:text-5xl">
            มีคำถาม? <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5722] to-orange-400">เราตอบได้เลย</span>
          </h2>
          <p className="mt-5 text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
            คำตอบเกี่ยวกับเอกสารสนับสนุนวีซ่า กระบวนการ และราคา
          </p>
        </div>

        {/* ================= Accordion FAQ List ================= */}
        <div className="space-y-4 sm:space-y-5">
          {faqs.map((faq, index) => {
            const open = openIdx === index;

            return (
              <article
                key={faq.q}
                className={`group relative overflow-hidden rounded-3xl bg-white transition-all duration-300 ${
                  open 
                    ? "border border-blue-300 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
                    : "border border-blue-100/70 shadow-[0_20px_60px_rgba(15,23,42,0.08)] hover:border-blue-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8 sm:py-6 focus:outline-none"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    {/* Q Icon Badge (Flat Style) */}
                    <div className={`flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl font-black text-xl sm:text-2xl transition-all duration-300 ${
                      open 
                        ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-md shadow-blue-300" 
                        : "bg-blue-50 text-blue-600 group-hover:scale-110 group-hover:rotate-[-5deg]"
                    }`}>
                      Q
                    </div>
                    <h3 className={`text-base sm:text-lg font-bold transition-colors duration-300 ${
                      open ? "text-blue-700" : "text-slate-900 group-hover:text-blue-600"
                    }`}>
                      {faq.q}
                    </h3>
                  </div>
                  
                  {/* Expand/Collapse Icon */}
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                    open ? 'bg-blue-100/50' : 'bg-slate-50 group-hover:bg-blue-50'
                  }`}>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-300 ${
                        open ? "rotate-180 text-blue-600" : "text-slate-400 group-hover:text-blue-600"
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                </button>

                {/* Answer Area with Smooth Height Transition */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="flex gap-4 px-6 pb-6 sm:gap-6 sm:px-8 pt-2">
                      {/* Spacer to align text with the Q icon */}
                      <div className="hidden w-12 sm:w-14 shrink-0 sm:block"></div>
                      
                      {/* Decorative Line & Text */}
                      <div className="relative">
                        <div className="absolute -left-4 sm:-left-6 top-1 bottom-1 w-1 rounded-full bg-blue-100"></div>
                        <p className="text-sm sm:text-base font-medium leading-relaxed text-slate-600 pl-2 sm:pl-0">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

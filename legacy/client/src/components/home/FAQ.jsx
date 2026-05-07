import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import React, { useState } from "react";

const faqs = [
  {
    q: "ใช้เวลาดำเนินการขอวีซ่านานแค่ไหน? (Processing Time)",
    a: "ระยะเวลาขึ้นอยู่กับประเทศปลายทาง โดยทั่วไปใช้เวลา 7-15 วันทำการสำหรับเชงเก้น และอาจนานกว่านั้นสำหรับอเมริกาหรืออังกฤษ แนะนำให้เผื่อเวลาล่วงหน้า 1-2 เดือนครับ"
  },
  {
    q: "ถ้าเคยโดนปฏิเสธวีซ่ามา (Visa Refusal) สามารถยื่นใหม่ผ่านทาง BKK AIR ได้ไหม?",
    a: "สามารถยื่นใหม่ได้ครับ ทีมงานจะขอตรวจสอบจดหมายปฏิเสธ (Refusal Letter) ก่อนเพื่อวิเคราะห์สาเหตุและหาทางแก้ไขจุดบกพร่องในการยื่นครั้งถัดไป"
  },
  {
    q: "ต้องจ่ายค่าธรรมเนียมสถานทูต (Embassy Fee) แยกต่างหากหรือไม่?",
    a: "ค่าบริการในแพ็กเกจของเรายังไม่รวมค่าธรรมเนียมสถานทูตและค่าบริการของศูนย์รับยื่น (VFS/TLS) ซึ่งลูกค้าจะต้องชำระตามจริงตามประกาศของสถานทูตครับ"
  },
  {
    q: "สามารถออกใบกำกับภาษีในนามบริษัทได้ไหม? (Tax Invoice)",
    a: "เราจดทะเบียนในรูปแบบบริษัทจำกัด สามารถออกใบเสร็จรับเงินและใบกำกับภาษีเต็มรูปแบบสำหรับลูกค้าองค์กรหรือผู้ที่ต้องการนำไปเบิกจ่ายได้ 100% ครับ"
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="relative w-full overflow-hidden bg-[#F8FAFC] py-20 lg:py-32 font-sans selection:bg-blue-200 selection:text-blue-900">
      
      {/* ================= Flat Design 2.0 Background Elements ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft Background Blobs */}
        <div className="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-[600px] w-[600px] rounded-full bg-orange-100/30 blur-3xl" />
        
        {/* Dotted Grid Pattern */}
        <div className="absolute left-10 top-20 h-32 w-32 opacity-40" style={{ backgroundImage: 'radial-gradient(#94A3B8 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
        <div className="absolute right-20 bottom-40 h-24 w-24 opacity-30" style={{ backgroundImage: 'radial-gradient(#93C5FD 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute right-1/4 top-20 h-10 w-10 rounded-full bg-yellow-300 opacity-50" />
        <div className="absolute left-10 bottom-32 h-16 w-16 rounded-3xl border-[6px] border-emerald-200/60 opacity-60 -rotate-12" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
        
        {/* ================= Header Section ================= */}
        <div className="mx-auto mb-12 sm:mb-16 text-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-white border border-slate-200/60 px-4 py-1.5 text-sm font-bold text-slate-700 shadow-sm">
            <MessageCircleQuestion className="h-4 w-4 text-blue-600" aria-hidden="true" />
            <span className="uppercase tracking-widest text-slate-500 text-xs">Support & FAQ</span>
          </div>
          
          <h2 className="text-4xl font-extrabold leading-[1.2] text-slate-900 sm:text-5xl tracking-tight">
            คำถามที่พบบ่อย <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5722] to-orange-400">(FAQ)</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600 font-medium">
            รวบรวมข้อสงสัยเบื้องต้นเกี่ยวกับการเตรียมเอกสารและการทำวีซ่า
          </p>
        </div>

        {/* ================= Accordion FAQ List ================= */}
        <div className="space-y-4 sm:space-y-5">
          {faqs.map((faq, index) => {
            const open = openIdx === index;

            return (
              <article
                key={faq.q}
                className={`group relative overflow-hidden rounded-[1.5rem] bg-white transition-all duration-300 border-2 ${
                  open 
                    ? "border-blue-500 shadow-lg shadow-blue-200/50" 
                    : "border-slate-100 hover:border-blue-200 hover:shadow-md hover:shadow-slate-200/50"
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
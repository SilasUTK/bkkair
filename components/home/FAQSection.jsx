import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import React, { useState } from "react";

const faqs = [
  {
    q: "เอกสารของ BKK AIR ใช้ยื่นวีซ่าได้จริงหรือ?",
    a: "ได้ค่ะ/ครับ เอกสารของเราจัดทำในรูปแบบ PDF ที่ครบถ้วนตามมาตรฐานที่สถานทูตส่วนใหญ่ยอมรับในฐานะเอกสารสนับสนุน อย่างไรก็ตาม การอนุมัติวีซ่าขึ้นอยู่กับดุลยพินิจของสถานทูตหรือสถานกงสุลแต่ละแห่งเท่านั้น"
  },
  {
    q: "BKK AIR รับประกันการได้รับวีซ่าหรือไม่?",
    a: "ไม่ค่ะ/ครับ BKK AIR ไม่รับประกันผลการยื่นวีซ่า เนื่องจากการอนุมัติเป็นอำนาจของสถานทูตโดยตรง เราให้บริการจัดเตรียมเอกสารสนับสนุนให้ครบถ้วนและถูกต้องเท่านั้น"
  },
  {
    q: "จะได้รับเอกสารเมื่อไหร่หลังชำระเงิน?",
    a: "แพ็กเกจมาตรฐาน: ภายใน 24 ชั่วโมงนับจากชำระเงินและข้อมูลครบ · แพ็กเกจ Express: ภายใน 3–6 ชั่วโมง หากไม่ได้รับเอกสารตามเวลา กรุณาตรวจสอบกล่อง Spam/Junk ก่อน หรือติดต่อเราทาง LINE @823lateh"
  },
  {
    q: "ถ้าต้องการแก้ไขข้อมูลหลังสั่งซื้อ ทำได้หรือไม่?",
    a: "ได้ค่ะ/ครับ หากแจ้งก่อนเริ่มจัดทำเอกสาร ไม่มีค่าใช้จ่ายเพิ่มเติม หากแจ้งหลังเริ่มงานแล้ว อาจมีค่าธรรมเนียมการแก้ไขตามที่กำหนด"
  },
  {
    q: "ข้อมูลส่วนตัวของเราจะถูกนำไปใช้ทำอะไร?",
    a: "ข้อมูลของคุณใช้เพื่อจัดทำเอกสารเท่านั้น เราไม่ขาย ไม่เปิดเผย และไม่แบ่งปันข้อมูลให้บุคคลภายนอก นอกจากผู้ให้บริการที่จำเป็น (เช่น ระบบชำระเงิน) ดูรายละเอียดเพิ่มเติมที่นโยบายความเป็นส่วนตัว"
  },
  {
    q: "นโยบายคืนเงินเป็นอย่างไร?",
    a: "ยกเลิกก่อนเริ่มงาน: คืนเงิน 100% · ยกเลิกหลังเริ่มงานแต่ยังไม่ส่ง: คืนเงิน 50% · ส่งเอกสารแล้ว: ไม่คืนเงิน · หากเอกสารผิดพลาดจากทาง BKK AIR: แก้ไขให้ฟรีหรือคืนเงิน 100%"
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(1);

  return (
    <section id="faq" className="relative w-full overflow-hidden bg-white py-20 md:py-28 font-sans selection:bg-blue-200 selection:text-primary-navy">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-32 top-1/4 h-[400px] w-[400px] rounded-full bg-blue-50 blur-[80px]" />
        <div className="absolute -right-20 bottom-10 h-[400px] w-[400px] rounded-full bg-orange-50 blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto mb-12 text-center md:mb-16">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-blue-100/70 bg-white/85 px-4 py-1.5 text-sm font-bold text-slate-700 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
            <MessageCircleQuestion className="h-4 w-4 text-blue-600" aria-hidden="true" />
            <span className="uppercase tracking-widest text-slate-500 text-xs">คำถามที่พบบ่อย</span>
          </div>
          
          <h2 className="text-4xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl">
            มีคำถาม? <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange to-orange-400">ทีมงานพร้อมอธิบาย</span>
          </h2>
          <p className="mt-6 text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
            รวมคำตอบเกี่ยวกับการเตรียมเอกสารยื่นวีซ่า เช่น flight reservation และ hotel reservation พร้อมข้อจำกัดสำคัญของบริการ
          </p>
        </div>

          <div className="space-y-4 md:space-y-5">
          {faqs.map((faq, index) => {
            const importantDisclaimer = index === 1;
            const open = importantDisclaimer || openIdx === index;

            return (
              <article
                key={faq.q}
                className={`group relative overflow-hidden rounded-3xl bg-white transition-all duration-300 ${
                  importantDisclaimer
                    ? "border-2 border-orange-200 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
                    : open
                    ? "border border-blue-300 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
                    : "border border-blue-100/70 shadow-[0_20px_60px_rgba(15,23,42,0.08)] hover:border-blue-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => {
                    if (importantDisclaimer) return;
                    setOpenIdx(open ? -1 : index);
                  }}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8 sm:py-6 focus:outline-none"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className={`flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl font-black text-xl sm:text-2xl transition-all duration-300 ${
                      importantDisclaimer
                        ? "bg-gradient-to-br from-accent-orange to-orange-500 text-white shadow-md shadow-orange-200"
                        : open
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
                  
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                    importantDisclaimer
                      ? "bg-orange-50"
                      : open ? "bg-blue-100/50" : "bg-slate-50 group-hover:bg-blue-50"
                  }`}>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-300 ${
                        open ? "rotate-180 text-blue-600" : "text-slate-400 group-hover:text-blue-600"
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                </button>

                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="flex gap-4 px-6 pb-6 sm:gap-6 sm:px-8 pt-2">
                      <div className="hidden w-12 sm:w-14 shrink-0 sm:block"></div>
                      
                      <div className="relative">
                        <div className={`absolute -left-4 sm:-left-6 top-1 bottom-1 w-1 rounded-full ${
                          importantDisclaimer ? "bg-orange-200" : "bg-blue-100"
                        }`}></div>
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

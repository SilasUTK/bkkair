import { FileSignature, Scale, AlertCircle, CheckCircle2, ChevronRight } from "lucide-react";
import React from "react";

const termsSections = [
  {
    title: "1. การยอมรับเงื่อนไข",
    body: (
      <p>
        การเข้าใช้งานเว็บไซต์หรือบริการของ BKK AIR (บีเคเค แอร์) (“เรา”) ถือว่าผู้ใช้งาน (“ลูกค้า”) ได้อ่าน เข้าใจ
        และยอมรับข้อกำหนดการให้บริการฉบับนี้โดยสมบูรณ์ หากไม่ยอมรับ กรุณาหยุดใช้งานทันที
      </p>
    )
  },
  {
    title: "2. ลักษณะของบริการ",
    body: (
      <>
        <p>BKK AIR ให้บริการ:</p>
        <ul className="list-none space-y-2 mt-3 mb-4">
          <li className="flex gap-2"><span className="text-orange-500 mt-0.5">•</span> จัดเตรียมใบจองตั๋วเครื่องบินเพื่อยื่นวีซ่า (Flight Reservation)</li>
          <li className="flex gap-2"><span className="text-orange-500 mt-0.5">•</span> จัดเตรียมใบจองโรงแรม (Hotel Booking)</li>
          <li className="flex gap-2"><span className="text-orange-500 mt-0.5">•</span> เอกสารสนับสนุนการยื่นวีซ่า</li>
        </ul>
        <div className="bg-red-50 border border-red-100 p-4 rounded-xl mt-4 mb-4">
          <p className="font-bold text-red-700 flex items-center gap-2 mb-2">
            <AlertCircle className="h-4 w-4" /> สำคัญ:
          </p>
          <ul className="list-none space-y-2 text-red-800/80 text-sm">
            <li className="flex gap-2"><span className="text-red-400 mt-0.5">✖</span> เรา <strong>ไม่ใช่สายการบิน</strong></li>
            <li className="flex gap-2"><span className="text-red-400 mt-0.5">✖</span> เรา <strong>ไม่ใช่สถานทูต</strong></li>
            <li className="flex gap-2"><span className="text-red-400 mt-0.5">✖</span> เรา <strong>ไม่รับประกันผลการอนุมัติวีซ่า</strong></li>
          </ul>
        </div>
        <p className="bg-blue-50 text-blue-800 px-4 py-2 rounded-xl inline-block text-sm border border-blue-100 font-medium">
          บริการของเราเป็นรูปแบบ: <strong>Request → Staff Review → Manual Fulfillment</strong>
        </p>
      </>
    )
  },
  {
    title: "3. การใช้งานบริการ",
    intro: "ลูกค้าตกลงว่า:",
    items: [
      "ให้ข้อมูลที่ถูกต้อง ครบถ้วน และเป็นปัจจุบัน",
      "ใช้บริการเพื่อวัตถุประสงค์ที่ถูกต้องตามกฎหมาย",
      "ไม่ใช้บริการในทางที่ก่อให้เกิดความเสียหายต่อผู้อื่นหรือระบบ"
    ]
  },
  {
    title: "4. ขั้นตอนการให้บริการ",
    orderedItems: [
      "ลูกค้าส่งคำขอผ่านเว็บไซต์หรือช่องทางที่กำหนด",
      "ทีมงานตรวจสอบข้อมูล",
      "ทีมงานติดต่อกลับเพื่อเสนอราคา",
      "ลูกค้าตกลงและชำระเงิน",
      "ทีมงานจัดเตรียมเอกสาร",
      "ส่งมอบเอกสารให้ลูกค้า"
    ]
  },
  {
    title: "5. ราคาและการชำระเงิน",
    items: [
      "ราคาจะแจ้งเป็นรายกรณี",
      "การให้บริการจะเริ่มหลังจากได้รับการยืนยันและชำระเงิน",
      "ราคาที่แจ้งอาจเปลี่ยนแปลงได้โดยไม่ต้องแจ้งล่วงหน้า (ก่อนยืนยัน)"
    ]
  },
  {
    title: "6. การยกเลิกและการคืนเงิน",
    items: [
      "เมื่อเริ่มดำเนินการแล้ว อาจไม่สามารถยกเลิกหรือคืนเงินได้",
      "การคืนเงิน (ถ้ามี) ขึ้นอยู่กับดุลยพินิจของ BKK AIR",
      "กรณีข้อมูลลูกค้าไม่ถูกต้องจนทำให้ไม่สามารถดำเนินงานได้ จะไม่คืนเงิน"
    ]
  },
  {
    title: "7. ความรับผิดชอบของลูกค้า",
    intro: "ลูกค้าต้อง:",
    items: [
      "ตรวจสอบความถูกต้องของข้อมูลก่อนยืนยัน",
      "รับผิดชอบต่อการใช้งานเอกสารที่ได้รับ",
      "ปฏิบัติตามข้อกำหนดของสถานทูตหรือหน่วยงานที่เกี่ยวข้อง"
    ]
  },
  {
    title: "8. ข้อจำกัดความรับผิด",
    intro: "BKK AIR (บีเคเค แอร์):",
    items: [
      "ไม่รับผิดชอบการปฏิเสธวีซ่า",
      "ไม่รับผิดชอบความเสียหายจากการใช้เอกสารผิดวัตถุประสงค์",
      "ไม่รับผิดชอบความล่าช้าที่เกิดจากปัจจัยภายนอก",
      "ไม่รับประกันว่าข้อมูลจากสายการบิน/ระบบภายนอกจะไม่เปลี่ยนแปลง"
    ]
  },
  {
    title: "9. ทรัพย์สินทางปัญญา",
    body: <p>เนื้อหา โลโก้ ดีไซน์ และระบบทั้งหมดเป็นทรัพย์สินของ BKK AIR ห้ามคัดลอก ดัดแปลง หรือใช้งานโดยไม่ได้รับอนุญาต</p>
  },
  {
    title: "10. ความเป็นส่วนตัว",
    body: (
      <p>
        การใช้บริการอยู่ภายใต้นโยบายความเป็นส่วนตัว (Privacy Policy):{" "}
        <a href="/privacy-policy" className="text-primary-dark font-bold hover:underline underline-offset-4 decoration-blue-200">
          /privacy-policy
        </a>
      </p>
    )
  },
  {
    title: "11. การระงับหรือยุติบริการ",
    intro: "เราอาจระงับหรือยุติการให้บริการได้ทันที หาก:",
    items: ["พบการใช้งานที่ผิดกฎหมาย", "พบข้อมูลเท็จ", "มีพฤติกรรมที่ก่อให้เกิดความเสียหาย"]
  },
  {
    title: "12. กฎหมายที่ใช้บังคับ",
    body: (
      <>
        <p>ข้อกำหนดนี้อยู่ภายใต้กฎหมายของประเทศไทย รวมถึง:</p>
        <ul className="list-none space-y-2 mt-3">
          <li className="flex gap-2">
            <span className="text-blue-500 mt-1">•</span>
            <span>
              พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA){" "}
              <a href="https://www.pdpc.or.th/th/laws/pdpa" target="_blank" rel="noreferrer" className="text-primary-dark font-bold hover:underline underline-offset-4 decoration-blue-200 break-all">
                https://www.pdpc.or.th/th/laws/pdpa
              </a>
            </span>
          </li>
        </ul>
      </>
    )
  },
  {
    title: "13. การเปลี่ยนแปลงข้อกำหนด",
    body: <p>BKK AIR ขอสงวนสิทธิ์ในการแก้ไขข้อกำหนดนี้โดยไม่ต้องแจ้งล่วงหน้า การใช้งานต่อเนื่องถือว่าผู้ใช้ยอมรับฉบับล่าสุด</p>
  },
  {
    title: "14. ช่องทางติดต่อ",
    body: (
      <div className="space-y-3 bg-orange-50/50 p-5 rounded-2xl border border-orange-100/50">
        <p className="flex items-center gap-2">
          <span className="font-bold text-slate-900">Email:</span>{" "}
          <a href="mailto:info@bkkair.com" className="text-accent-orange font-medium hover:text-orange-800 underline decoration-orange-200 underline-offset-4">
            info@bkkair.com
          </a>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-bold text-slate-900">LINE OA:</span>{" "}
          <span className="text-emerald-600 font-bold bg-emerald-100 px-2 py-0.5 rounded-md">@823lateh</span>
        </p>
        <p className="text-slate-700 font-medium">Website: https://bkkair.com</p>
        <p className="text-slate-700 font-medium">Business Hours: Monday-Saturday 09:00-18:00 (Thailand Time)</p>
        <p className="text-slate-700 font-medium">Location: Bangkok, Thailand</p>
      </div>
    )
  }
];

export default function TermsOfService() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8FAFC] py-20 lg:py-32 font-sans selection:bg-orange-200 selection:text-orange-900">
      
      {/* ================= Flat Design 2.0 Background Elements ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft Background Fill */}
        <div className="absolute inset-0 bg-slate-50/50"></div>
        
        {/* Organic Blobs */}
        <div className="absolute -right-40 top-20 h-[600px] w-[600px] rounded-full bg-orange-100/40 blur-3xl opacity-70"></div>
        <div className="absolute left-0 bottom-40 h-[500px] w-[500px] rounded-full bg-blue-50/60 blur-3xl opacity-70"></div>
        
        {/* Decorative Grid & Shapes */}
        <div className="absolute left-10 top-20 h-32 w-32 opacity-30" style={{ backgroundImage: 'radial-gradient(#94A3B8 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
        <div className="absolute right-1/4 top-10 h-10 w-10 rounded-xl bg-blue-200 opacity-60 rotate-[-15deg]"></div>
        <div className="absolute left-1/4 bottom-32 h-16 w-16 rounded-full border-[6px] border-orange-200 opacity-60"></div>
      </div>

      <article className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8">
        
        {/* Main Document Card */}
        <div className="rounded-[2rem] sm:rounded-[2.5rem] bg-white shadow-[0_20px_60px_-15px_rgba(255,87,34,0.08)] border-2 border-slate-100/50 overflow-hidden">
          
          {/* ================= Header Area with Flat Graphics ================= */}
          <header className="bg-slate-50 border-b border-slate-100 px-6 py-10 sm:px-12 sm:py-14 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            
            <div className="relative z-10 w-full md:w-3/5">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white border border-slate-200/60 px-4 py-1.5 text-sm font-bold text-slate-700 shadow-sm">
                <FileSignature className="h-4 w-4 text-accent-orange" aria-hidden="true" />
                <span className="uppercase tracking-widest text-slate-500 text-[11px] sm:text-xs">BKK AIR (บีเคเค แอร์)</span>
              </div>
              
              <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl leading-tight">
                Terms of Service
                <span className="block text-xl text-slate-500 sm:text-3xl mt-2 font-extrabold">ข้อกำหนดการให้บริการ</span>
              </h1>
              
              <div className="mt-6 flex items-center gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider">
                  Updated
                </span>
                <span className="text-sm font-semibold text-slate-500">4 พฤษภาคม 2569 (2026)</span>
              </div>
            </div>

            {/* Flat Graphics Illustration: Document & Scale */}
            <div className="relative w-48 h-48 hidden sm:block shrink-0">
              {/* Shadow / Back Document */}
              <div className="absolute inset-0 bg-blue-100 rounded-2xl transform rotate-12 scale-95 transition-transform duration-500 hover:rotate-6"></div>
              
              {/* Front Document */}
              <div className="absolute inset-0 bg-white border-2 border-slate-200 rounded-2xl shadow-lg p-5 flex flex-col gap-2.5 z-10 animate-[bounce_6s_ease-in-out_infinite]">
                {/* Lines representing text */}
                <div className="w-1/2 h-3 bg-slate-200 rounded-full"></div>
                <div className="w-full h-2 bg-slate-100 rounded-full mt-2"></div>
                <div className="w-5/6 h-2 bg-slate-100 rounded-full"></div>
                <div className="w-full h-2 bg-slate-100 rounded-full"></div>
                <div className="w-4/6 h-2 bg-slate-100 rounded-full"></div>
                
                {/* Signature Area */}
                <div className="absolute bottom-6 right-5 w-16 h-0.5 bg-slate-300 transform -rotate-3"></div>
                <div className="absolute bottom-6 right-6 text-blue-500 transform -rotate-12">
                   <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M2 15C5.5 8 8 18 12 12C16 6 18 16 22 14C26 12 28 4 32 8C36 12 38 18 38 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                   </svg>
                </div>
                
                {/* Stamp/Seal */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full border-[3px] border-orange-200 flex items-center justify-center opacity-60">
                   <div className="w-4 h-4 bg-orange-100 rounded-full"></div>
                </div>
              </div>

              {/* Floating Badge (Scale/Justice Icon) */}
              <div className="absolute -bottom-2 -left-4 w-16 h-16 bg-gradient-to-br from-accent-orange to-orange-400 rounded-2xl flex items-center justify-center border-4 border-white shadow-xl z-20 animate-[bounce_5s_ease-in-out_infinite_0.5s] transform -rotate-6">
                 <Scale className="w-7 h-7 text-white" />
              </div>
            </div>

          </header>

          {/* ================= Body Area ================= */}
          <div className="px-6 py-10 sm:px-12 sm:py-12 space-y-10 text-slate-600">
            {termsSections.map((section, index) => (
              <section key={section.title} className="group relative">
                
                {/* Section Title */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-accent-orange font-bold text-sm border border-orange-100">
                    {index + 1}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug pt-1">
                    {section.title.replace(/^\d+\.\s*/, '')}
                  </h2>
                </div>
                
                {/* Section Content */}
                <div className="pl-12 space-y-4 leading-relaxed text-[15px] sm:text-base">
                  {section.intro ? <p className="font-medium text-slate-700">{section.intro}</p> : null}
                  
                  {/* Unordered Items */}
                  {section.items ? (
                    <ul className="list-none space-y-2.5">
                      {section.items.map((item) => (
                        <li key={item} className="flex gap-3 items-start">
                          <CheckCircle2 className="h-5 w-5 text-orange-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {/* Ordered Items */}
                  {section.orderedItems ? (
                    <ol className="list-none space-y-3 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100">
                      {section.orderedItems.map((item, idx) => (
                        <li key={item} className="flex gap-4 items-start relative z-10">
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white border-2 border-orange-200 text-orange-600 font-bold text-xs shadow-sm">
                            {idx + 1}
                          </div>
                          <span className="pt-0.5">{item}</span>
                        </li>
                      ))}
                    </ol>
                  ) : null}

                  {/* Custom Body React Nodes */}
                  {section.body}
                </div>

                {/* Divider (except last item) */}
                {index !== termsSections.length - 1 && (
                  <hr className="mt-10 ml-12 border-slate-100" />
                )}
              </section>
            ))}
          </div>

          {/* ================= Footer Area / CTA ================= */}
          <div className="bg-gradient-to-r from-accent-orange to-orange-500 px-6 py-8 sm:px-12 text-center relative overflow-hidden">
             {/* Decorative Background Elements in Footer */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl transform -translate-x-1/2 translate-y-1/2"></div>
             
             <p className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-base sm:text-lg font-bold text-white">
              <Scale className="h-6 w-6 text-orange-200" />
              BKK AIR (บีเคเค แอร์) ให้บริการด้วยความโปร่งใส ชัดเจน และคำนึงถึงประโยชน์ของลูกค้าเป็นหลัก
            </p>
          </div>

        </div>
      </article>
    </section>
  );
}
import { ShieldCheck, FileText, LockKeyhole } from "lucide-react";
import React from "react";

const policySections = [
  {
    title: "1. บทนำ",
    body: (
      <>
        <p>
          BKK AIR (บีเคเค แอร์) (“เรา”) เป็นผู้ให้บริการด้านการจัดเตรียมเอกสารการเดินทางเพื่อยื่นวีซ่า เช่น
          ใบจองตั๋วเครื่องบิน และใบจองโรงแรม โดยดำเนินงานในรูปแบบผู้ให้บริการอิสระ (Non-registered entity)
        </p>
        <p>
          เราตระหนักถึงความสำคัญของความเป็นส่วนตัวและความปลอดภัยของข้อมูลส่วนบุคคลของผู้ใช้งานทุกท่าน
          นโยบายฉบับนี้จัดทำขึ้นเพื่ออธิบายการเก็บรวบรวม ใช้ และคุ้มครองข้อมูลส่วนบุคคลให้เป็นไปตามกฎหมายที่เกี่ยวข้อง รวมถึง
        </p>
        <ul className="list-none space-y-2 mt-3">
          <li className="flex gap-2">
            <span className="text-blue-500 mt-1">•</span>
            <span>
              พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA){" "}
              <a href="https://www.pdpc.or.th/th/laws/pdpa" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800 underline decoration-blue-200 underline-offset-4 break-all">
                https://www.pdpc.or.th/th/laws/pdpa
              </a>
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-blue-500 mt-1">•</span>
            <span>
              แนวทาง General Data Protection Regulation (GDPR){" "}
              <a href="https://gdpr.eu/" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800 underline decoration-blue-200 underline-offset-4 break-all">
                https://gdpr.eu/
              </a>
            </span>
          </li>
        </ul>
      </>
    )
  },
  {
    title: "2. ข้อมูลที่เก็บรวบรวม",
    items: [
      "ชื่อ-นามสกุล",
      "หมายเลขโทรศัพท์",
      "อีเมล หรือ LINE ID",
      "ข้อมูลการเดินทาง (ต้นทาง ปลายทาง วันเดินทาง)",
      "ข้อมูลที่เกี่ยวข้องกับการยื่นวีซ่า (เฉพาะที่จำเป็น)",
      "ข้อมูลการติดต่อ เช่น ประวัติการสนทนา",
      "ข้อมูลทางเทคนิค เช่น IP Address, Device, Cookies"
    ]
  },
  {
    title: "3. วัตถุประสงค์ในการใช้ข้อมูล",
    intro: "ข้อมูลจะถูกใช้เพื่อ:",
    items: [
      "ให้บริการจัดเตรียมเอกสาร เช่น Flight Reservation / Hotel Booking",
      "ติดต่อกลับเพื่อเสนอราคา และดำเนินงานตามคำขอ",
      "ประสานงานระหว่างผู้ใช้และทีมงาน",
      "ปรับปรุงคุณภาพบริการ",
      "ปฏิบัติตามข้อกำหนดทางกฎหมาย"
    ]
  },
  {
    title: "4. การเปิดเผยข้อมูล",
    body: (
      <>
        <p>เราอาจเปิดเผยข้อมูลเฉพาะที่จำเป็นแก่:</p>
        <ul className="list-none space-y-2 mt-3 mb-4">
          <li className="flex gap-2"><span className="text-orange-500 mt-0.5">✔</span> ผู้ปฏิบัติงานภายใน (Staff)</li>
          <li className="flex gap-2"><span className="text-orange-500 mt-0.5">✔</span> ผู้ให้บริการที่เกี่ยวข้องกับการจัดเตรียมเอกสาร</li>
          <li className="flex gap-2"><span className="text-orange-500 mt-0.5">✔</span> หน่วยงานรัฐ (กรณีมีกฎหมายกำหนด)</li>
        </ul>
        <p className="inline-block bg-orange-50 text-orange-800 px-4 py-2 rounded-xl text-sm font-medium border border-orange-100">
          เรา <strong>จะไม่ขายหรือเผยแพร่ข้อมูลส่วนบุคคลเพื่อผลประโยชน์เชิงพาณิชย์</strong>
        </p>
      </>
    )
  },
  {
    title: "5. ความปลอดภัยของข้อมูล",
    body: (
      <>
        <p>เราใช้มาตรการที่เหมาะสมเพื่อปกป้องข้อมูล เช่น:</p>
        <ul className="list-none space-y-2 mt-3 mb-4">
          <li className="flex gap-2"><span className="text-emerald-500 mt-0.5">✔</span> จำกัดสิทธิ์การเข้าถึงข้อมูล (Access Control)</li>
          <li className="flex gap-2"><span className="text-emerald-500 mt-0.5">✔</span> ใช้ระบบจัดเก็บข้อมูลที่ปลอดภัย</li>
          <li className="flex gap-2">
            <span className="text-emerald-500 mt-0.5">✔</span> 
            <span>
              แนวทางการเข้ารหัสข้อมูล (Encryption){" "}
              <a href="https://en.wikipedia.org/wiki/Encryption" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800 underline decoration-blue-200 underline-offset-4 break-all">
                https://en.wikipedia.org/wiki/Encryption
              </a>
            </span>
          </li>
        </ul>
        <p className="text-slate-500 text-sm bg-slate-50 p-4 rounded-xl border border-slate-100">
          *อย่างไรก็ตาม การส่งข้อมูลผ่านอินเทอร์เน็ตมีความเสี่ยงโดยธรรมชาติ ผู้ใช้ควรใช้ความระมัดระวังในการส่งข้อมูลสำคัญ
        </p>
      </>
    )
  },
  {
    title: "6. ระยะเวลาการเก็บข้อมูล",
    items: [
      "เท่าที่จำเป็นต่อการให้บริการ",
      "หรือจนกว่าผู้ใช้จะร้องขอให้ลบ",
      "หรือเป็นไปตามข้อกำหนดของกฎหมาย"
    ]
  },
  {
    title: "7. สิทธิของเจ้าของข้อมูล",
    body: (
      <>
        <p>ผู้ใช้มีสิทธิ:</p>
        <ul className="list-none space-y-2 mt-3 mb-4">
          <li className="flex gap-2"><span className="text-blue-500 mt-0.5">❖</span> ขอเข้าถึงข้อมูลของตน</li>
          <li className="flex gap-2"><span className="text-blue-500 mt-0.5">❖</span> ขอแก้ไขข้อมูล</li>
          <li className="flex gap-2"><span className="text-blue-500 mt-0.5">❖</span> ขอให้ลบข้อมูล</li>
          <li className="flex gap-2"><span className="text-blue-500 mt-0.5">❖</span> ถอนความยินยอม</li>
        </ul>
        <p>
          รายละเอียดเพิ่มเติมเกี่ยวกับสิทธิภายใต้ PDPA:{" "}
          <a href="https://www.pdpc.or.th/th/faqs" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800 underline decoration-blue-200 underline-offset-4 break-all">
            https://www.pdpc.or.th/th/faqs
          </a>
        </p>
      </>
    )
  },
  {
    title: "8. Cookies",
    body: (
      <>
        <p>เว็บไซต์อาจใช้ Cookies เพื่อ:</p>
        <ul className="list-none space-y-2 mt-3 mb-4 text-slate-600">
          <li>- วิเคราะห์การใช้งาน</li>
          <li>- ปรับปรุงประสบการณ์ผู้ใช้</li>
        </ul>
        <p>
          ข้อมูลเพิ่มเติมเกี่ยวกับ Cookies:{" "}
          <a href="https://www.allaboutcookies.org/" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800 underline decoration-blue-200 underline-offset-4 break-all">
            https://www.allaboutcookies.org/
          </a>
        </p>
        <p className="mt-2 text-sm text-slate-500">ผู้ใช้สามารถปิดการใช้งาน Cookies ผ่าน Browser ได้</p>
      </>
    )
  },
  {
    title: "9. ข้อจำกัดความรับผิด",
    items: [
      "ผู้ใช้ต้องให้ข้อมูลที่ถูกต้อง",
      "BKK AIR (บีเคเค แอร์) ไม่รับผิดชอบความเสียหายที่เกิดจากข้อมูลไม่ถูกต้อง",
      "BKK AIR (บีเคเค แอร์) เป็นผู้ให้บริการจัดเตรียมเอกสาร ไม่ใช่สายการบินหรือสถานทูต"
    ]
  },
  {
    title: "10. การเปลี่ยนแปลงนโยบาย",
    body: <p>เราอาจปรับปรุงนโยบายนี้โดยไม่ต้องแจ้งล่วงหน้า การใช้งานต่อถือว่าผู้ใช้ยอมรับเงื่อนไขล่าสุด</p>
  },
  {
    title: "11. ช่องทางติดต่อ",
    body: (
      <div className="space-y-3 bg-blue-50/50 p-5 rounded-2xl border border-blue-100/50">
        <p className="flex items-center gap-2">
          <span className="font-bold text-slate-900">Privacy Email:</span>{" "}
          <a href="mailto:privacy@bkkair.com" className="text-blue-600 font-medium hover:text-blue-800 underline decoration-blue-200 underline-offset-4">
            privacy@bkkair.com
          </a>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-bold text-slate-900">General Email:</span>{" "}
          <a href="mailto:info@bkkair.com" className="text-blue-600 font-medium hover:text-blue-800 underline decoration-blue-200 underline-offset-4">
            info@bkkair.com
          </a>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-bold text-slate-900">LINE OA:</span>{" "}
          <span className="text-emerald-600 font-bold bg-emerald-100 px-2 py-0.5 rounded-md">@823lateh</span>
        </p>
        <p className="text-slate-700 font-medium">Business Hours: Monday-Saturday 09:00-18:00 (Thailand Time)</p>
        <p className="text-slate-700 font-medium">Location: Bangkok, Thailand</p>
      </div>
    )
  },
  {
    title: "12. การปฏิบัติตามกฎหมาย",
    body: (
      <>
        <p>นโยบายนี้จัดทำให้สอดคล้องกับ:</p>
        <ul className="list-none space-y-2 mt-3">
          <li className="flex gap-2">
            <span className="text-blue-500 mt-1">•</span>
            <span>
              <strong className="text-slate-900">PDPA (Thailand)</strong>{" "}
              <a href="https://www.pdpc.or.th" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800 underline decoration-blue-200 underline-offset-4 break-all">
                https://www.pdpc.or.th
              </a>
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-blue-500 mt-1">•</span>
            <span>
              <strong className="text-slate-900">GDPR (EU)</strong>{" "}
              <a href="https://gdpr.eu/" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800 underline decoration-blue-200 underline-offset-4 break-all">
                https://gdpr.eu/
              </a>
            </span>
          </li>
        </ul>
      </>
    )
  }
];

export default function PrivacyPolicy() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8FAFC] py-20 lg:py-32 font-sans selection:bg-blue-200 selection:text-blue-900">
      
      {/* ================= Flat Design 2.0 Background Elements ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft Background Fill */}
        <div className="absolute inset-0 bg-slate-50/50"></div>
        
        {/* Organic Blobs */}
        <div className="absolute -left-40 top-40 h-[600px] w-[600px] rounded-full bg-blue-100/40 blur-3xl opacity-70"></div>
        <div className="absolute right-0 bottom-20 h-[500px] w-[500px] rounded-full bg-emerald-50/50 blur-3xl opacity-70"></div>
        
        {/* Decorative Grid & Shapes */}
        <div className="absolute right-10 top-20 h-32 w-32 opacity-30" style={{ backgroundImage: 'radial-gradient(#94A3B8 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
        <div className="absolute left-1/4 top-10 h-10 w-10 rounded-xl bg-orange-200 opacity-60 rotate-[15deg]"></div>
        <div className="absolute right-1/4 bottom-32 h-16 w-16 rounded-full border-[6px] border-blue-200 opacity-60"></div>
      </div>

      <article className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8">
        
        {/* Main Document Card */}
        <div className="rounded-[2rem] sm:rounded-[2.5rem] bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border-2 border-slate-100/50 overflow-hidden">
          
          {/* Header Area */}
          <header className="bg-slate-50 border-b border-slate-100 px-6 py-10 sm:px-12 sm:py-14 relative overflow-hidden">
            {/* Header Accent */}
            <LockKeyhole className="absolute -right-6 -top-6 h-40 w-40 text-slate-200/50 -rotate-12 pointer-events-none" />

            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white border border-slate-200/60 px-4 py-1.5 text-sm font-bold text-slate-700 shadow-sm">
                <ShieldCheck className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                <span className="uppercase tracking-widest text-slate-500 text-[11px] sm:text-xs">BKK AIR (บีเคเค แอร์)</span>
              </div>
              
              <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl leading-tight">
                Privacy Policy
                <span className="block text-xl text-slate-500 sm:text-3xl mt-2 font-extrabold">นโยบายความเป็นส่วนตัว</span>
              </h1>
              
              <div className="mt-6 flex items-center gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
                  Updated
                </span>
                <span className="text-sm font-semibold text-slate-500">4 พฤษภาคม 2569</span>
              </div>
            </div>
          </header>

          {/* Body Area */}
          <div className="px-6 py-10 sm:px-12 sm:py-12 space-y-10 text-slate-600">
            {policySections.map((section, index) => (
              <section
                key={section.title}
                className="group relative"
              >
                {/* Section Title */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 font-bold text-sm border border-blue-100">
                    {index + 1}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug pt-1">
                    {section.title.replace(/^\d+\.\s*/, '')} {/* เอาตัวเลขเก่าออก เพราะใช้กล่องตัวเลขแทนแล้ว */}
                  </h2>
                </div>
                
                {/* Section Content */}
                <div className="pl-12 space-y-4 leading-relaxed text-[15px] sm:text-base">
                  {section.intro ? <p className="font-medium text-slate-700">{section.intro}</p> : null}
                  
                  {section.items ? (
                    <ul className="list-none space-y-2">
                      {section.items.map((item) => (
                        <li key={item} className="flex gap-2.5">
                          <span className="text-blue-500 mt-0.5 text-lg leading-none">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  
                  {section.body}
                </div>

                {/* Divider (except last item) */}
                {index !== policySections.length - 1 && (
                  <hr className="mt-10 ml-12 border-slate-100" />
                )}
              </section>
            ))}
          </div>

          {/* Footer Area / CTA */}
          <div className="bg-gradient-to-r from-primary-dark to-primary-navy px-6 py-8 sm:px-12 text-center">
            <p className="flex flex-col sm:flex-row items-center justify-center gap-3 text-base sm:text-lg font-bold text-white">
              <ShieldCheck className="h-6 w-6 text-blue-200" />
              BKK AIR (บีเคเค แอร์) มุ่งมั่นในการดูแลข้อมูลของผู้ใช้อย่างปลอดภัย โปร่งใส และเป็นมืออาชีพ
            </p>
          </div>

        </div>
      </article>
    </section>
  );
}
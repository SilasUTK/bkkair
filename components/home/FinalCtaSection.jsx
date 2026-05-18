import { ArrowRight, MessageCircle } from "lucide-react";

const reassuranceItems = [
  "ส่งภายใน 24 ชั่วโมง",
  "ตรวจสอบโดยทีมงานจริง",
  "ราคาโปร่งใส",
];

export default function FinalCtaSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#F7FBFF] via-[#EEF6FF] to-[#FFF7F0] py-16 font-sans lg:py-24" aria-labelledby="final-cta-heading">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-20 left-1/4 h-48 w-48 rounded-full bg-blue-200/60 blur-3xl" />
        <div className="absolute -bottom-16 right-1/4 h-56 w-56 rounded-full bg-orange-200/60 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 id="final-cta-heading" className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          พร้อมเตรียมเอกสารยื่นวีซ่าแล้วหรือยัง?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          อย่าให้เอกสารกลายเป็นอุปสรรคของการเดินทาง BKK AIR จัดเตรียมให้คุณพร้อมยื่น ภายใน 24 ชั่วโมง สำหรับคนที่ต้องการสั่งเอกสารยื่นวีซ่า เอกสารยื่นวีซ่า และ visa support Thailand
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/packages"
            className="inline-flex min-h-[56px] w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-7 text-base font-bold text-white shadow-lg shadow-blue-600/25 transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-600/35 focus:outline-none focus:ring-4 focus:ring-blue-200 sm:w-auto"
          >
            📄 เลือกแพ็กเกจและสั่งเลย
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">สั่งเอกสารยื่นวีซ่า</span>
          </a>

          <a
            href="/contact"
            className="inline-flex min-h-[56px] w-full items-center justify-center gap-2 rounded-2xl border border-blue-200/80 bg-white/80 px-7 text-base font-bold text-slate-700 shadow-[0_10px_40px_rgba(15,23,42,0.06)] transition-all hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 sm:w-auto"
          >
            <span className="hidden sm:inline">ยังไม่แน่ใจว่าต้องใช้เอกสารอะไร?</span>
            <span>ปรึกษาทีมงานฟรี ไม่มีข้อผูกมัด</span>
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-3" aria-label="จุดเด่นของบริการ">
          {reassuranceItems.map((item) => (
            <li
              key={item}
              className="inline-flex items-center gap-2 rounded-full border border-blue-100/70 bg-white/85 px-4 py-2 text-sm font-bold text-slate-700 shadow-[0_10px_40px_rgba(15,23,42,0.06)] backdrop-blur"
            >
              <span className="text-emerald-600" aria-hidden="true">✓</span>
              {item}
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-7 max-w-2xl rounded-3xl border border-orange-200 bg-white/90 px-5 py-4 text-sm font-semibold leading-relaxed text-slate-700 shadow-[0_10px_40px_rgba(15,23,42,0.06)]">
          BKK AIR ให้บริการเฉพาะการจัดเตรียมเอกสารสนับสนุน — การอนุมัติวีซ่าขึ้นอยู่กับสถานทูต
        </p>
      </div>
    </section>
  );
}

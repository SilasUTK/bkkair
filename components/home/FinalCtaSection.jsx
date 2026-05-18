import { ArrowRight, MessageCircle } from "lucide-react";

export default function FinalCtaSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#F7FBFF] via-[#EEF6FF] to-[#FFF7F0] py-16 font-sans lg:py-24" aria-labelledby="final-cta-heading">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-20 left-1/4 h-48 w-48 rounded-full bg-blue-200/60 blur-3xl" />
        <div className="absolute -bottom-16 right-1/4 h-56 w-56 rounded-full bg-orange-200/60 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 id="final-cta-heading" className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          พร้อมเริ่มเตรียมเอกสารยื่นวีซ่าของคุณหรือยัง?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          ส่งข้อมูลเบื้องต้นให้ทีมงานตรวจสอบฟรี ไม่มีค่าใช้จ่ายล่วงหน้า
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/packages"
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-blue-600 px-7 text-base font-bold text-white shadow-lg shadow-blue-600/25 transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-600/35"
          >
            ดูแพ็กเกจและราคา
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>

          <a
            href="/contact"
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl border border-blue-200/80 bg-white/80 px-7 text-base font-bold text-slate-700 shadow-[0_10px_40px_rgba(15,23,42,0.06)] transition-all hover:-translate-y-0.5 hover:bg-white"
          >
            พูดคุยกับทีมงาน
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

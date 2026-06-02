import { ArrowRight, MessageCircle } from "lucide-react";

const reassuranceItems = [
  "เจ้าหน้าที่ตรวจคำขอ",
  "ตรวจสอบโดยทีมงานจริง",
  "ราคาโปร่งใส",
];

export default function FinalCtaSection() {
  return (
    <section
      className="relative w-full overflow-hidden py-20 font-sans lg:py-28"
      aria-labelledby="final-cta-heading"
    >
      {/* Premium navy gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-navy via-primary-dark to-primary-navy" />
      {/* Radial glow at left-center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.10)_0%,transparent_60%)]" />
      {/* Dot grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.07)_1px,transparent_0)] bg-[length:28px_28px]" />
      {/* Soft glow blobs */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 right-1/4 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">

        {/* Badge */}
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-blue-100 backdrop-blur-sm">
          <span className="text-amber-300" aria-hidden="true">✦</span>
          บริการจัดเตรียมเอกสารประกอบการยื่นวีซ่า
        </div>

        <h2
          id="final-cta-heading"
          className="text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl"
        >
          พร้อมเริ่มเตรียมเอกสารวีซ่าแล้วหรือยัง?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
          สั่งเอกสารวันนี้ รับไฟล์ PDF ภายใน 24 ชั่วโมง พร้อมยื่นสถานทูต
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/packages"
            className="inline-flex min-h-[56px] w-full items-center justify-center gap-2 rounded-2xl bg-white px-8 text-base font-black text-primary-navy shadow-[0_8px_32px_rgba(0,0,0,0.20)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.28)] focus:outline-none focus:ring-4 focus:ring-white/40 sm:w-auto"
          >
            สั่งเอกสารเลย →
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">สั่งเอกสารยื่นวีซ่า</span>
          </a>

          <a
            href="/contact"
            className="inline-flex min-h-[56px] w-full items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-8 text-base font-bold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/25 sm:w-auto"
          >
            หรือสอบถามก่อนได้ที่ LINE: @823lateh
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <p className="mx-auto mt-5 max-w-2xl text-xs font-medium leading-relaxed text-blue-100/75">
          *BKK AIR ให้บริการจัดเตรียมเอกสารสนับสนุนเท่านั้น การอนุมัติวีซ่าขึ้นอยู่กับดุลยพินิจของสถานทูตหรือสถานกงสุล
        </p>

        <ul
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
          aria-label="จุดเด่นของบริการ"
        >
          {reassuranceItems.map((item) => (
            <li
              key={item}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm"
            >
              <span className="text-emerald-300" aria-hidden="true">✓</span>
              {item}
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-8 max-w-2xl rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-sm font-medium leading-relaxed text-blue-100/80 backdrop-blur-sm">
          BKK AIR ให้บริการเฉพาะการจัดเตรียมเอกสารสนับสนุนเท่านั้น เอกสารไม่ใช่ตั๋วจริงหรือการจองจริง
          และการอนุมัติวีซ่าขึ้นอยู่กับดุลยพินิจของสถานทูตหรือสถานกงสุลแต่เพียงผู้เดียว
        </p>
      </div>
    </section>
  );
}

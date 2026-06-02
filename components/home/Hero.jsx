import Image from "next/image";
import HeroForm from "@/components/HeroForm";

const benefits = [
  {
    icon: LightningIcon,
    label: "เจ้าหน้าที่ติดต่อกลับรวดเร็ว",
    sub: "รับคำขอและตรวจข้อมูลเบื้องต้นในเวลาทำการ"
  },
  {
    icon: DocumentIcon,
    label: "เอกสาร PDF สำหรับประกอบคำร้อง",
    sub: "จัดข้อมูลให้สอดคล้องกับแผนเดินทางของคุณ"
  },
  {
    icon: GlobeIcon,
    label: "ครอบคลุมหลายประเทศ",
    sub: "Schengen, UK, USA, ออสเตรเลีย ฯลฯ"
  },
  {
    icon: CheckIcon,
    label: "ตรวจสอบโดยคนจริง",
    sub: "ทุกคำขอผ่านเจ้าหน้าที่ก่อนเริ่มดำเนินการ"
  }
];

export default function Hero({ goToCheck }) {
  return (
    <section id="hero" className="relative flex min-h-screen w-full items-center overflow-hidden bg-slate-950 pb-14 pt-28 font-sans sm:pb-16 sm:pt-32 lg:pt-28">
      <Image
        src="/images/background/hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 object-cover object-center"
      />
      <div className="absolute inset-0 bg-slate-950/32" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/55 to-slate-950/10" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/38 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(375px,0.72fr)] lg:gap-10 xl:gap-16">
          <div className="max-w-[710px] text-white">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-orange-300 shadow-xl backdrop-blur-sm sm:text-sm">
              <CheckBadgeIcon className="h-4 w-4 text-orange-400" />
              บริการเอกสารประกอบการยื่นวีซ่าสำหรับนักเดินทางชาวไทย
            </div>

            <h1 className="text-[2.55rem] font-extrabold leading-[1.13] tracking-tight text-white sm:text-5xl lg:text-[3.55rem] xl:text-[4rem]">
              เตรียมเอกสารยื่นวีซ่า ครบ จบ ในที่เดียว
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
              BKK AIR ช่วยจัดเตรียมใบจองตั๋วเครื่องบิน ใบจองโรงแรม แผนการเดินทาง และเอกสารสนับสนุนวีซ่า ในรูปแบบ PDF พร้อมยื่นสถานทูต
            </p>
            <p className="mt-3 max-w-2xl text-sm font-semibold leading-relaxed text-orange-200 sm:text-base">
              Embassy-Ready Visa Support Documents for Thai Travelers — Flight Reservation, Hotel Booking, Travel Itinerary
            </p>
            <p className="mt-2 max-w-2xl text-xs font-medium leading-relaxed text-slate-400 sm:text-sm">
              จองตั๋วเครื่องบินยื่นวีซ่า · ใบจองโรงแรมยื่นวีซ่า · embassy-ready documents · visa support Thailand
            </p>

            <ul className="mt-9 grid gap-x-8 gap-y-6 sm:grid-cols-2" aria-label="จุดเด่น BKK AIR">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <li key={benefit.label} className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] text-orange-400 backdrop-blur-sm">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span>
                      <span className="block text-base font-bold text-white">{benefit.label}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-slate-400">{benefit.sub}</span>
                    </span>
                  </li>
                );
              })}
            </ul>

            <p className="mt-8 max-w-2xl text-xs leading-relaxed text-slate-400">
              เอกสารเป็น supporting materials เท่านั้น ไม่ใช่ตั๋วจริงหรือการจองจริง
              และการอนุมัติวีซ่าเป็นดุลยพินิจของสถานทูตหรือสถานกงสุลแต่เพียงผู้เดียว
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[406px] lg:ml-auto">
            <div className="absolute -inset-4 rounded-[2.1rem] bg-orange-400/10 blur-2xl" />
            <div className="relative rounded-[1.8rem] border border-white/80 bg-white px-5 pb-5 pt-8 shadow-[0_26px_68px_rgba(2,6,23,0.4)] sm:px-7 sm:pb-6">
              <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-2 text-xs font-bold text-white shadow-lg shadow-orange-500/25 sm:text-sm">
                ส่งคำขอให้ทีมงานตรวจสอบ
              </span>

              <div className="mb-4 text-center">
                <h2 className="text-2xl font-extrabold text-slate-800">Quick Request</h2>
                <p className="mt-1 text-xs text-slate-500">ฝากข้อมูลเบื้องต้น เจ้าหน้าที่จะติดต่อกลับ</p>
              </div>

              <HeroForm />

              <div className="mt-4 text-center text-[11px] leading-relaxed text-slate-500">
                <p className="flex items-center justify-center gap-1.5 font-medium">
                  <ShieldIcon className="h-4 w-4 text-emerald-500" />
                  ข้อมูลของคุณปลอดภัยและเป็นความลับ
                </p>
                <p className="mt-1.5">ทีมงานจะติดต่อกลับภายใน 2-4 ชั่วโมงในเวลาทำการ</p>
                <button type="button" onClick={goToCheck} className="mt-2 inline-flex items-center gap-1 font-semibold text-slate-500 transition hover:text-orange-500">
                  มีรหัสอ้างอิงอยู่แล้ว? ตรวจสอบสถานะ
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckBadgeIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 0 0 19.5 9.75 9.75 0 0 0 0-19.5Zm4.28 7.47a.75.75 0 0 0-1.06 0l-4.22 4.22-2.22-2.22a.75.75 0 0 0-1.06 1.06l2.75 2.75a.75.75 0 0 0 1.06 0l4.75-4.75a.75.75 0 0 0 0-1.06Z" clipRule="evenodd" />
    </svg>
  );
}

function LightningIcon({ className = "" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m13.2 2.8-9 11.1h7l-.8 7.3 9.4-11.7h-7.1l.5-6.7Z" /></svg>;
}

function DocumentIcon({ className = "" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6 3.5h7l5 5V20.5H6V3.5Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13 3.5v5h5M9 13h6M9 16.5h6" /></svg>;
}

function GlobeIcon({ className = "" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M3.5 12h17M12 3c2.2 2.4 3.4 5.4 3.4 9 0 3.6-1.2 6.6-3.4 9-2.2-2.4-3.4-5.4-3.4-9 0-3.6 1.2-6.6 3.4-9Z" /></svg>;
}

function CheckIcon({ className = "" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path strokeLinecap="round" strokeLinejoin="round" d="m8.5 12 2.5 2.5 4.75-5" /></svg>;
}

function ShieldIcon({ className = "" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3 20 6v5.5c0 4.5-3 7.5-8 9.5-5-2-8-5-8-9.5V6l8-3Z" /><path strokeLinecap="round" strokeLinejoin="round" d="m8.5 12 2.3 2.3 4.8-5" /></svg>;
}

function ArrowRightIcon({ className = "" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16M13 5l7 7-7 7" /></svg>;
}

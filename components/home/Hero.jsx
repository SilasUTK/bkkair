import Image from "next/image";
import HeroForm from "@/components/HeroForm";

const benefits = [
  {
    icon: LightningIcon,
    label: "ส่งภายใน 24 ชั่วโมง"
  },
  {
    icon: DocumentIcon,
    label: "ราคาโปร่งใส"
  },
  {
    icon: GlobeIcon,
    label: "ไม่ต้องเดินทาง"
  },
  {
    icon: CheckIcon,
    label: "มีทีมแก้ไขให้"
  },
  {
    icon: BankIcon,
    label: "ใช้ยื่นสถานทูต"
  },
  {
    icon: ShieldIcon,
    label: "ตรวจสอบโดยทีมงาน"
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
              <LightningIcon className="h-4 w-4 text-orange-400" />
              ส่ง PDF ภายใน 24 ชั่วโมง
            </div>

            <h1 className="text-[2.55rem] font-extrabold leading-[1.13] tracking-tight text-white sm:text-5xl lg:text-[3.55rem] xl:text-[4rem]">
              เอกสารยื่น
              <span className="bg-gradient-to-r from-orange-300 via-orange-500 to-amber-300 bg-clip-text text-transparent">วีซ่า</span>
              <span className="block bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">พร้อมส่งภายใน</span>
              <span className="block">24 ชั่วโมง</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
              BKK AIR ให้บริการจัดเตรียมเอกสารสนับสนุนวีซ่าสำหรับนักเดินทางชาวไทย
              ใบจองตั๋วเครื่องบิน ใบจองโรงแรม และแผนการเดินทาง
            </p>

            <ul className="mt-9 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3" aria-label="จุดเด่น BKK AIR">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <li key={benefit.label} className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-center text-xs font-bold text-slate-200 backdrop-blur-sm sm:text-sm">
                    <Icon className="h-4 w-4 text-orange-400" />
                    <span>{benefit.label}</span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#hero-request-form" className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-orange-500 px-7 text-sm font-extrabold text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-400">
                สั่งเอกสารเลย
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a href="#packages" className="inline-flex h-14 items-center justify-center rounded-full border border-white/25 bg-white/[0.04] px-7 text-sm font-extrabold text-white backdrop-blur-sm transition hover:border-orange-300 hover:text-orange-200">
                ดูแพ็กเกจและราคา
              </a>
            </div>
          </div>

          <div id="hero-request-form" className="relative mx-auto w-full max-w-[430px] lg:ml-auto">
            <div className="absolute -inset-4 rounded-[2.1rem] bg-orange-400/10 blur-2xl" />
            <div className="relative rounded-[1.8rem] border border-white/15 bg-slate-950/80 px-5 pb-5 pt-8 shadow-[0_26px_68px_rgba(2,6,23,0.55)] backdrop-blur-xl sm:px-7 sm:pb-6">
              <div className="mb-5">
                <h2 className="text-2xl font-extrabold text-white">รับคำปรึกษาฟรี</h2>
              </div>

              <HeroForm />

              <div className="mt-4 text-center text-[11px] leading-relaxed text-slate-400">
                <p className="flex items-center justify-center gap-1.5 font-medium text-slate-300">
                  <ShieldIcon className="h-4 w-4 text-emerald-500" />
                  ข้อมูลของคุณปลอดภัยและเป็นความลับ
                </p>
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

function BankIcon({ className = "" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3.5 10.5 12 5l8.5 5.5M5 10.5h14M6.5 10.5v7M10.5 10.5v7M14.5 10.5v7M18.5 10.5v7M4.5 17.5h15M3.5 20h17" /></svg>;
}

function ShieldIcon({ className = "" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3 20 6v5.5c0 4.5-3 7.5-8 9.5-5-2-8-5-8-9.5V6l8-3Z" /><path strokeLinecap="round" strokeLinejoin="round" d="m8.5 12 2.3 2.3 4.8-5" /></svg>;
}

function ArrowRightIcon({ className = "" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16M13 5l7 7-7 7" /></svg>;
}

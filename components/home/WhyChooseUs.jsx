"use client";

import { Clock, FileText, LockKeyhole, MessageCircle, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: FileText,
    title: "เอกสารพร้อมยื่นสถานทูต",
    iconAlt: "visa document service Thailand",
    description: "ทุกไฟล์ PDF ผ่านการตรวจสอบมาตรฐานก่อนส่ง ครอบคลุมข้อมูลที่สถานทูตต้องการ",
    theme: {
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200/80 hover:border-blue-300",
      hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)]",
      gradient: "from-blue-500 to-indigo-500",
      title: "text-blue-700",
      surface: "bg-blue-50/80"
    }
  },
  {
    icon: Clock,
    title: "รับเอกสารภายใน 24 ชั่วโมง",
    iconAlt: "flight reservation for visa",
    description: "แพ็กเกจมาตรฐานส่งภายใน 24 ชั่วโมง และแพ็กเกจด่วนภายใน 3–6 ชั่วโมง หลังชำระเงิน",
    theme: {
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-200/80 hover:border-emerald-300",
      hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)]",
      gradient: "from-emerald-500 to-teal-400",
      title: "text-emerald-700",
      surface: "bg-emerald-50/80"
    }
  },
  {
    icon: LockKeyhole,
    title: "ข้อมูลของคุณปลอดภัย",
    iconAlt: "visa document service Thailand",
    description: "เราเก็บเฉพาะข้อมูลที่จำเป็นในการจัดทำเอกสาร และลบข้อมูลหลังส่งเสร็จตามนโยบายความเป็นส่วนตัว",
    theme: {
      color: "text-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-200/80 hover:border-purple-300",
      hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(147,51,234,0.12)]",
      gradient: "from-purple-500 to-fuchsia-400",
      title: "text-purple-700",
      surface: "bg-purple-50/80"
    }
  },
  {
    icon: MessageCircle,
    title: "ทีมงานพร้อมดูแลทุกขั้นตอน",
    iconAlt: "visa document service Thailand",
    description: "ติดต่อเราผ่าน LINE OA @823lateh วันจันทร์–เสาร์ 09:00–18:00 น. (เวลาไทย)",
    theme: {
      color: "text-sky-600",
      bg: "bg-sky-50",
      border: "border-sky-200/80 hover:border-sky-300",
      hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(2,132,199,0.12)]",
      gradient: "from-sky-500 to-cyan-400",
      title: "text-sky-700",
      surface: "bg-sky-50/80"
    }
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative w-full overflow-hidden bg-slate-50 py-14 font-sans selection:bg-blue-200 selection:text-primary-navy md:py-20">
      {/* Subtle background accents */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -right-40 -top-10 h-[440px] w-[440px] rounded-full bg-blue-50/70 blur-[80px]" />
        <div className="absolute -left-40 bottom-0 h-[380px] w-[380px] rounded-full bg-orange-50/70 blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-9 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:gap-14">
          <div className="relative aspect-video overflow-hidden rounded-3xl bg-slate-900 shadow-xl shadow-slate-900/15">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            >
              <source src="/videos/visa-support.mp4" type="video/mp4" />
            </video>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />
          </div>

          <div>
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-blue-100/70 bg-white/90 px-4 py-1.5 text-sm font-bold text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur">
              <Sparkles className="h-4 w-4 animate-pulse text-orange-500" />
              <span className="text-xs uppercase tracking-widest text-slate-500">
                ทำไมต้องเลือก <span className="whitespace-nowrap bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent">BKK AIR</span>
              </span>
            </div>

            <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
              ทำไมนักเดินทางไทยถึงเลือก{" "}
              <span className="whitespace-nowrap bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
                BKK AIR
              </span>
            </h2>
            <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-slate-600">
              เราเข้าใจว่าการยื่นวีซ่าคือขั้นตอนที่ต้องใช้ความละเอียด เอกสารทุกชิ้นของเราจึงผ่านการตรวจสอบโดยทีมงาน ก่อนส่งถึงมือคุณ
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <article
                    key={benefit.title}
                    className={`group relative overflow-hidden rounded-2xl border p-4 shadow-[0_14px_34px_rgba(15,23,42,0.09)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 ${benefit.theme.surface} ${benefit.theme.border} ${benefit.theme.hoverShadow}`}
                  >
                    <div className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${benefit.theme.gradient}`} />
                    <div className="flex items-start gap-3">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${benefit.theme.gradient} shadow-sm transition-transform duration-300 group-hover:scale-105`}>
                        <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className={`text-sm font-extrabold leading-snug ${benefit.theme.title}`}>
                          {benefit.title}
                        </h3>
                        <p className="mt-1.5 text-xs font-medium leading-relaxed text-slate-600">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

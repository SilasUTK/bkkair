import { Check, ClipboardCheck, CreditCard, FileCheck2, FileText, ShieldCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "เลือกแพ็กเกจที่ต้องการ",
    description: "เลือกประเภทเอกสารที่คุณต้องการ เช่น ใบจองตั๋ว ใบจองโรงแรม หรือแผนการเดินทาง",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "กรอกข้อมูลการเดินทาง",
    description: "ระบุชื่อ-นามสกุล วันเดินทาง ประเทศปลายทาง และข้อมูลที่จำเป็น ตามแบบฟอร์มของเรา",
    icon: CreditCard,
  },
  {
    number: "03",
    title: "ชำระเงินและยืนยันออเดอร์",
    description: "ชำระผ่านช่องทางที่กำหนด ทีมงานจะยืนยันออเดอร์และเริ่มดำเนินการหลังตรวจข้อมูลครบถ้วน",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "รับไฟล์ PDF ทางอีเมล",
    description: "ส่งเอกสาร PDF ไปยังอีเมลที่คุณลงทะเบียน ภายใน 24 ชั่วโมง (หรือ 3–6 ชั่วโมง สำหรับแพ็กเกจ Express)",
    icon: FileCheck2,
  },
];

export default function WorkflowTimeline() {
  return (
    <section id="workflow" className="relative w-full overflow-hidden bg-white py-16 font-sans md:py-24">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[520px] w-[780px] -translate-x-1/2 rounded-full bg-blue-500/[0.06] blur-[100px]" />
        <div className="absolute -right-32 bottom-0 h-[360px] w-[360px] rounded-full bg-orange-400/[0.08] blur-[90px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-10 max-w-3xl lg:mb-12">
          <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-blue-100/70 bg-white/90 px-4 py-1.5 text-sm font-bold text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur">
            <ClipboardCheck className="h-4 w-4 text-orange-500" aria-hidden="true" />
            <span className="text-xs uppercase tracking-widest text-slate-500">
              ขั้นตอนการทำงาน
            </span>
          </div>
          <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
            สั่งเอกสารง่าย ๆ แค่{" "}
            <span className="whitespace-nowrap bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
              4 ขั้นตอน
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-slate-600">
            ไม่ต้องซับซ้อน ไม่ต้องไปที่ไหน ทำได้จากบ้าน
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.47fr)_minmax(0,0.53fr)] lg:gap-16">
          <ProcessVisual />

          <div className="relative">
            <div className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-orange-400 via-blue-400 to-slate-200 sm:block" />
            <div className="space-y-4">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <article
                    key={step.number}
                    className="group relative rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-[0_14px_42px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_60px_rgba(37,99,235,0.12)] sm:ml-16"
                  >
                    <div className="absolute -left-[4.75rem] top-5 hidden h-12 w-12 items-center justify-center rounded-2xl border border-white bg-slate-950 text-sm font-black text-white shadow-[0_0_0_6px_rgba(255,255,255,0.95),0_16px_36px_rgba(15,23,42,0.22)] transition group-hover:scale-105 group-hover:shadow-[0_0_0_6px_rgba(255,247,237,1),0_18px_42px_rgba(249,115,22,0.28)] sm:flex">
                      {step.number}
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 ring-1 ring-orange-100 sm:hidden">
                        <span className="text-sm font-black">{step.number}</span>
                      </div>
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-lg font-extrabold tracking-tight text-slate-950">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                          {step.description}
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

function ProcessVisual() {
  return (
    <div className="relative min-h-[500px] overflow-hidden rounded-[2rem] border border-white/70 bg-[#0B1220] p-6 shadow-[0_30px_90px_rgba(11,18,32,0.24)] sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(59,130,246,0.28),transparent_28%),radial-gradient(circle_at_78%_72%,rgba(249,115,22,0.22),transparent_32%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0,transparent_32%,rgba(255,255,255,0.04)_100%)]" />

      <div className="relative mx-auto mt-4 max-w-[360px] rounded-[1.8rem] border border-white/15 bg-white/[0.08] p-4 shadow-2xl backdrop-blur-xl">
        <div className="rounded-[1.35rem] bg-white p-5 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-slate-400">Visa Support PDF</p>
              <h3 className="mt-1 text-lg font-extrabold text-slate-950">Visa Support Pack</h3>
            </div>
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/25">
              <FileText className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-5 space-y-3">
            {["Flight reservation", "Hotel booking", "Travel itinerary"].map((label) => (
              <div key={label} className="flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-2.5">
                <span className="text-sm font-bold text-slate-700">{label}</span>
                <Check className="h-4 w-4 text-emerald-500" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="animate-float absolute left-5 top-8 w-44 rounded-3xl border border-white/15 bg-white/[0.12] p-4 text-white shadow-2xl backdrop-blur-xl">
        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-blue-200">Passport</p>
        <div className="mt-5 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-900 shadow-inner" />
        <p className="mt-4 text-sm font-extrabold">Traveler Profile</p>
        <p className="mt-1 text-xs text-slate-300">Verified details</p>
      </div>

      <div className="animate-float-delayed absolute bottom-8 left-8 w-52 rounded-3xl border border-white/15 bg-white/[0.13] p-4 text-white shadow-2xl backdrop-blur-xl">
        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-orange-200">Support Document Draft</p>
        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="col-span-2 h-2 rounded-full bg-white/70" />
          <div className="h-2 rounded-full bg-orange-400" />
          <div className="h-2 rounded-full bg-white/30" />
          <div className="col-span-2 h-2 rounded-full bg-white/40" />
        </div>
        <div className="mt-5 rounded-2xl border border-orange-300/30 bg-orange-400/15 px-3 py-2 text-xs font-bold text-orange-100">
          Ready for review
        </div>
      </div>

      <div className="animate-float-slow absolute right-5 top-16 w-48 rounded-3xl border border-white/15 bg-white/[0.14] p-4 text-white shadow-2xl backdrop-blur-xl">
        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-emerald-200">Document Checklist</p>
        <div className="mt-4 space-y-2">
          {["Name match", "Dates checked", "PDF format"].map((label) => (
            <div key={label} className="flex items-center gap-2 text-xs font-bold text-slate-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {label}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 right-8 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white shadow-xl backdrop-blur-xl">
        Staff Reviewed
      </div>
    </div>
  );
}

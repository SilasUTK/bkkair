import Image from "next/image";
import React, { useState } from "react";
import { apiUrl } from "../../lib/apiBase";

const initialRequest = {
  destination: "",
  visaType: "",
  name: "",
  contact: "",
  travelDate: ""
};

const countries = [
  "Schengen / วีซ่าเชงเก้น",
  "UK / วีซ่าอังกฤษ",
  "USA / วีซ่าอเมริกา",
  "Australia / วีซ่าออสเตรเลีย",
  "Canada / วีซ่าแคนาดา",
  "Japan / วีซ่าญี่ปุ่น",
  "Korea / วีซ่าเกาหลี",
  "อื่นๆ"
];

const visaTypes = [
  "ท่องเที่ยว / ส่วนตัว",
  "ธุรกิจ",
  "เยี่ยมครอบครัว",
  "นักเรียน",
  "ทำงาน",
  "Transit"
];

const fieldClassName =
  "h-10 w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm font-medium text-slate-700 placeholder:text-slate-400 transition focus:border-orange-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-100";

const benefits = [
  {
    icon: LightningIcon,
    label: "ส่งงานรวดเร็ว",
    sub: "ส่ง PDF ภายใน 24 ชม. มีบริการ Express"
  },
  {
    icon: DocumentIcon,
    label: "PDF พร้อมปริ้นยื่น",
    sub: "จัดรูปแบบมาตรฐาน พร้อมยื่นตรวจสอบ"
  },
  {
    icon: GlobeIcon,
    label: "ครอบคลุมหลายประเทศ",
    sub: "Schengen, UK, USA, ออสเตรเลีย ฯลฯ"
  },
  {
    icon: CheckIcon,
    label: "ตรวจสอบโดยคนจริง",
    sub: "ทีมงานตรวจสอบรายละเอียดก่อนส่ง"
  }
];

export default function Hero({ goToCheck }) {
  const [request, setRequest] = useState(initialRequest);
  const [createdBooking, setCreatedBooking] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function updateRequest(event) {
    const { name, value } = event.target;
    setError("");
    setCreatedBooking(false);
    setRequest((current) => ({ ...current, [name]: value }));
  }

  async function submitRequest(event) {
    event.preventDefault();
    if (loading) return;

    if (!request.destination.trim()) return setError("กรุณาเลือกประเทศที่ต้องการไป");
    if (!request.name.trim()) return setError("กรุณาระบุชื่อ-นามสกุล");
    if (!request.contact.trim()) return setError("กรุณาระบุช่องทางติดต่อ");

    setLoading(true);
    setError("");
    setCreatedBooking(false);

    try {
      const response = await fetch(apiUrl("/api/requests"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "homepage_hero",
          destination: request.destination.trim(),
          visaType: request.visaType.trim(),
          name: request.name.trim(),
          contact: request.contact.trim(),
          travelDate: request.travelDate || ""
        })
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result?.success) {
        throw new Error(result?.message || result?.error || "Request failed");
      }

      setCreatedBooking(true);
      setRequest(initialRequest);
    } catch (_requestError) {
      setError("ส่งคำขอไม่สำเร็จ กรุณาลองใหม่อีกครั้ง หรือติดต่อ LINE @823lateh");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="hero" className="relative flex min-h-screen w-full items-center overflow-hidden bg-slate-950 pb-14 pt-28 font-sans sm:pb-16 sm:pt-32 lg:pt-28">
      <Image
        src="/images/hero-bg.jpg"
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
              บริการเอกสารสำหรับนักเดินทางชาวไทย
            </div>

            <h1 className="text-[2.55rem] font-extrabold leading-[1.13] tracking-tight text-white sm:text-5xl lg:text-[3.55rem] xl:text-[4rem]">
              เอกสารสนับสนุนวีซ่า
              <span className="block bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                พร้อมยื่นสถานทูต
              </span>
              <span className="block">ครบ จบ ใน 24 ชั่วโมง</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
              BKK AIR จัดเตรียมเอกสารสนับสนุนวีซ่าครบชุด ทั้งใบจองตั๋วเครื่องบิน ใบจองโรงแรม
              และแผนการเดินทาง ในรูปแบบ PDF มาตรฐานสถานทูต พร้อมให้คุณยื่นได้ทันที
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
              BKK AIR ให้บริการเฉพาะการจัดเตรียมเอกสารสนับสนุนวีซ่าเท่านั้น
              การอนุมัติวีซ่าขึ้นอยู่กับดุลยพินิจของสถานทูต
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[406px] lg:ml-auto">
            <div className="absolute -inset-4 rounded-[2.1rem] bg-orange-400/10 blur-2xl" />
            <div className="relative rounded-[1.8rem] border border-white/80 bg-white px-5 pb-5 pt-8 shadow-[0_26px_68px_rgba(2,6,23,0.4)] sm:px-7 sm:pb-6">
              <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-2 text-xs font-bold text-white shadow-lg shadow-orange-500/25 sm:text-sm">
                ฟรี! ให้คำปรึกษา
              </span>

              <div className="mb-4 text-center">
                <h2 className="text-2xl font-extrabold text-slate-800">ส่งคำขอฟรี</h2>
                <p className="mt-1 text-xs text-slate-500">ไม่ต้องชำระเงินก่อน ทีมงานติดต่อกลับ</p>
              </div>

              <form onSubmit={submitRequest} className="space-y-2.5">
                <FormField icon={<LocationIcon className="h-[18px] w-[18px]" />}>
                  <select
                    name="destination"
                    value={request.destination}
                    onChange={updateRequest}
                    required
                    aria-label="ประเทศที่ต้องการไป"
                    className={`${fieldClassName} cursor-pointer appearance-none pr-10`}
                  >
                    <option value="" disabled>ประเทศที่ต้องการไป...</option>
                    {countries.map((country) => <option key={country} value={country}>{country}</option>)}
                  </select>
                  <DropdownIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                </FormField>

                <FormField icon={<VisaIcon className="h-[18px] w-[18px]" />}>
                  <select
                    name="visaType"
                    value={request.visaType}
                    onChange={updateRequest}
                    aria-label="ประเภทวีซ่า"
                    className={`${fieldClassName} cursor-pointer appearance-none pr-10`}
                  >
                    <option value="">เลือกประเภทวีซ่า (ไม่บังคับ)</option>
                    {visaTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                  </select>
                  <DropdownIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                </FormField>

                <FormField icon={<UserIcon className="h-[18px] w-[18px]" />}>
                  <input
                    name="name"
                    value={request.name}
                    onChange={updateRequest}
                    type="text"
                    placeholder="ชื่อ-นามสกุล"
                    required
                    className={fieldClassName}
                  />
                </FormField>

                <FormField icon={<ContactIcon className="h-[18px] w-[18px]" />}>
                  <input
                    name="contact"
                    value={request.contact}
                    onChange={updateRequest}
                    type="text"
                    placeholder="เบอร์โทร / อีเมล / LINE ID"
                    required
                    className={fieldClassName}
                  />
                </FormField>

                <FormField icon={<CalendarIcon className="h-[18px] w-[18px]" />}>
                  <input
                    name="travelDate"
                    value={request.travelDate}
                    onChange={updateRequest}
                    type="date"
                    aria-label="วันเดินทาง (ไม่บังคับ)"
                    className={fieldClassName}
                  />
                </FormField>

                <button
                  type="submit"
                  disabled={loading}
                  className="group mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-slate-800 px-5 text-sm font-bold text-white shadow-lg transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-65"
                >
                  {loading ? (
                    <>
                      <LoadingIcon className="h-5 w-5 animate-spin" />
                      กำลังส่งข้อมูล...
                    </>
                  ) : (
                    <>
                      ส่งคำขอให้ทีมงานตรวจสอบ
                      <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>

              {error && <StatusMessage tone="error" icon={<ShieldIcon className="h-5 w-5" />}>{error}</StatusMessage>}
              {createdBooking && (
                <StatusMessage tone="success" icon={<CheckBadgeIcon className="h-5 w-5" />}>
                  ส่งคำขอเรียบร้อยแล้ว ทีมงานจะติดต่อกลับภายใน 2–4 ชั่วโมงในเวลาทำการ
                </StatusMessage>
              )}

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

function FormField({ icon, children }) {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">{icon}</span>
      {children}
    </div>
  );
}

function StatusMessage({ tone, icon, children }) {
  const colors = tone === "success"
    ? "border-emerald-100 bg-emerald-50 text-emerald-800"
    : "border-red-100 bg-red-50 text-red-700";

  return (
    <div className={`mt-4 flex items-start gap-2.5 rounded-xl border p-3 text-sm font-medium ${colors}`}>
      <span className="mt-0.5 shrink-0">{icon}</span>
      <p>{children}</p>
    </div>
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

function LocationIcon({ className = "" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6 7-11A7 7 0 0 0 5 10c0 5 7 11 7 11Z" /><circle cx="12" cy="10" r="2.25" /></svg>;
}

function VisaIcon({ className = "" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="3.5" y="5" width="17" height="14" rx="2" /><circle cx="9" cy="11" r="2" /><path strokeLinecap="round" d="M6.4 15c1.4-1.4 3.8-1.4 5.2 0M14.5 10h3M14.5 13h3" /></svg>;
}

function UserIcon({ className = "" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><circle cx="12" cy="8" r="3.5" /><path strokeLinecap="round" strokeLinejoin="round" d="M5 20c.6-4 3-6 7-6s6.4 2 7 6" /></svg>;
}

function ContactIcon({ className = "" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6.2 3.8h3l1.4 5-2 1.6a12 12 0 0 0 5 5l1.6-2 5 1.4v3a2.3 2.3 0 0 1-2.4 2.3A14.1 14.1 0 0 1 3.9 6.2a2.3 2.3 0 0 1 2.3-2.4Z" /></svg>;
}

function CalendarIcon({ className = "" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="2" /><path strokeLinecap="round" d="M8 3.5v4M16 3.5v4M4 10h16" /></svg>;
}

function DropdownIcon({ className = "" }) {
  return <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.2 7.7a.75.75 0 0 1 1.06 0L10 11.44l3.74-3.74a.75.75 0 1 1 1.06 1.06l-4.27 4.27a.75.75 0 0 1-1.06 0L5.2 8.76a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" /></svg>;
}

function ShieldIcon({ className = "" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3 20 6v5.5c0 4.5-3 7.5-8 9.5-5-2-8-5-8-9.5V6l8-3Z" /><path strokeLinecap="round" strokeLinejoin="round" d="m8.5 12 2.3 2.3 4.8-5" /></svg>;
}

function ArrowRightIcon({ className = "" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16M13 5l7 7-7 7" /></svg>;
}

function LoadingIcon({ className = "" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle className="opacity-25" cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" /><path className="opacity-80" d="M12 3a9 9 0 0 1 9 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>;
}

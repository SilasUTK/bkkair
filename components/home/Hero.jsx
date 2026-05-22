import { 
  ArrowRight, 
  CheckCircle2, 
  Send, 
  Plane, 
  ShieldCheck, 
  FileText,
  Clock,
  Globe,
  MapPin,
  CalendarDays
} from "lucide-react";
import React, { useMemo, useState } from "react";
import { createBooking } from "../legacy/services/api.js";

const initialRequest = {
  destination: "",
  serviceType: "ท่องเที่ยว / ส่วนตัว",
  name: "",
  contact: "",
  departureDate: ""
};

const countries = [
  "Schengen / วีซ่าเชงเก้น", "UK / วีซ่าอังกฤษ", "USA / วีซ่าอเมริกา",
  "Australia / วีซ่าออสเตรเลีย", "Canada / วีซ่าแคนาดา", "Japan / วีซ่าญี่ปุ่น",
  "Korea / วีซ่าเกาหลี", "ฝรั่งเศส", "เยอรมนี", "อิตาลี", "สเปน", "อื่นๆ"
];

const visaTypes = [
  "ท่องเที่ยว / ส่วนตัว", "ธุรกิจ", "เยี่ยมครอบครัว", 
  "นักเรียน", "ทำงาน", "Transit"
];

const benefits = [
  { icon: Clock,       bg: "bg-blue-50",    color: "text-blue-600",   label: "ส่งงานรวดเร็ว",                sub: "ส่ง PDF ภายใน 24 ชั่วโมง · มีบริการ Express" },
  { icon: FileText,    bg: "bg-orange-50",  color: "text-orange-500", label: "PDF พร้อมปริ้นยื่นสถานทูต",    sub: "จัดรูปแบบตามมาตรฐาน embassy-ready" },
  { icon: Globe,       bg: "bg-indigo-50",  color: "text-indigo-600", label: "ครอบคลุมหลายประเทศปลายทาง",   sub: "รองรับ Schengen, UK, USA, ออสเตรเลีย และอื่นๆ" },
  { icon: ShieldCheck, bg: "bg-emerald-50", color: "text-emerald-600",label: "ทีมงานตรวจสอบก่อนส่งทุกครั้ง", sub: "ไม่ใช่ระบบออโต้ — ตรวจสอบโดยคนจริง" },
];

function getTomorrowDate() {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 1);
  return date.toISOString().slice(0, 10);
}

export default function Hero({ goToCheck }) {
  const [request, setRequest] = useState(initialRequest);
  const [createdBooking, setCreatedBooking] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const tomorrowDate = useMemo(() => getTomorrowDate(), []);

  function updateRequest(event) {
    const { name, value } = event.target;
    setError("");
    setCreatedBooking(false);
    setRequest((current) => ({ ...current, [name]: value }));
  }

  async function submitRequest(event) {
    event.preventDefault();

    if (!request.destination.trim()) return setError("กรุณาเลือกประเทศที่ต้องการไป");
    if (!request.name.trim()) return setError("กรุณาระบุชื่อ-นามสกุล");
    if (!request.contact.trim()) return setError("กรุณาระบุช่องทางติดต่อ");
    if (!request.departureDate.trim()) return setError("กรุณาระบุวันเดินทาง");

    setLoading(true);
    setError("");
    setCreatedBooking(false);

    try {
      const { contact, ...bookingRequest } = request;
      await createBooking({
        ...bookingRequest,
        phone: contact.trim(),
        email: "",
        lineId: "",
        serviceType: request.serviceType || "Quick Visa Consultation Request"
      });
      setCreatedBooking(true);
      setRequest(initialRequest);
    } catch (requestError) {
      setError(requestError.message || "ไม่สามารถส่งข้อมูลได้ กรุณาลองใหม่อีกครั้ง");
    } finally {
      setLoading(false);
    }
  }

  function focusContactName() {
    window.location.href = "/contact";
  }

  function scrollToPackages() {
    window.location.href = "/packages";
  }

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-bg-light pb-20 pt-28 sm:pt-32 md:pb-24 lg:pt-36 lg:pb-28 font-sans selection:bg-blue-200 selection:text-blue-900">

      {/* ── Background ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[680px] w-[680px] rounded-full bg-blue-200/50 blur-[96px]" />
        <div className="absolute -left-16 top-1/2 h-[400px] w-[400px] rounded-full bg-blue-300/20 blur-[72px]" />
        <div className="absolute right-0 top-28 h-[360px] w-[360px] rounded-full bg-indigo-200/25 blur-[72px]" />
        <div className="absolute bottom-0 right-1/4 h-[320px] w-[320px] rounded-full bg-orange-200/20 blur-[72px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(37,99,235,0.06)_1px,transparent_0)] bg-[length:28px_28px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[720px] grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* ═══════════════ LEFT COLUMN ═══════════════ */}
          <div className="flex max-w-[620px] flex-col justify-center">

            {/* Trust Badge */}
            <div className="mb-7 inline-flex w-fit items-center gap-2.5 rounded-full border border-blue-200/60 bg-white/90 p-1 pr-4 text-sm font-semibold text-slate-600 shadow-[0_6px_24px_rgba(37,99,235,0.12)] backdrop-blur-sm">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-sm">
                <Plane className="h-3.5 w-3.5" />
              </span>
              <span>Visa Document Service Thailand</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 md:text-5xl lg:text-[3.2rem] xl:text-[3.8rem]">
              เอกสารสนับสนุนวีซ่า
              <span className="mt-2 block bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
                พร้อมยื่นสถานทูต
              </span>
              <span className="mt-2 block text-slate-800">ครบ จบ ใน 24 ชั่วโมง</span>
            </h1>

            {/* Supporting text */}
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-600">
              BKK AIR จัดเตรียมเอกสารสนับสนุนวีซ่าครบชุด ทั้งใบจองตั๋วเครื่องบิน ใบจองโรงแรม และแผนการเดินทาง{" "}
              <strong className="font-semibold text-slate-800">ในรูปแบบ PDF มาตรฐานสถานทูต</strong>{" "}
              พร้อมให้คุณยื่นได้ทันที
            </p>

            {/* Benefits list */}
            <ul className="mt-9 space-y-4" aria-label="จุดเด่น BKK AIR">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${b.bg}`}>
                    <b.icon className={`h-5 w-5 ${b.color}`} aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-slate-800">{b.label}</p>
                    <p className="text-sm text-slate-500">{b.sub}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Social proof stats */}
            <div className="mt-9 flex flex-wrap items-center gap-2.5">
              {[
                { value: "embassy-ready", label: "PDF" },
                { value: "Human-reviewed", label: "ทุกคำขอ" },
                { value: "Transparent", label: "pricing" },
                { value: "24 ชั่วโมง", label: "เป้าหมายการส่ง" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm shadow-sm">
                  <span className="font-extrabold text-slate-900">{stat.value}</span>
                  <span className="text-slate-500">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-3.5 sm:flex-row">
              <button
                type="button"
                onClick={scrollToPackages}
                className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-accent-orange to-accent-hover px-7 text-[15px] font-bold text-white shadow-[0_8px_28px_rgba(249,115,22,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(249,115,22,0.45)] active:scale-[0.98]"
              >
                📄 ดูแพ็กเกจและราคา
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <button
                type="button"
                onClick={focusContactName}
                className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-slate-200 bg-white px-7 text-[15px] font-semibold text-slate-700 shadow-[0_4px_16px_rgba(15,23,42,0.06)] transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_8px_24px_rgba(15,23,42,0.10)] active:scale-[0.98]"
              >
                มีคำถาม? ปรึกษาฟรี →
              </button>
            </div>

            {/* Disclaimer */}
            <p className="mt-5 text-[11px] italic text-slate-400">
              การอนุมัติวีซ่าขึ้นอยู่กับดุลยพินิจของสถานทูตหรือสถานกงสุล BKK AIR ให้บริการเฉพาะการจัดเตรียมเอกสารสนับสนุนเท่านั้น
            </p>

          </div>

          {/* ═══════════════ RIGHT COLUMN: Form Card ═══════════════ */}
          <div className="relative flex items-center justify-center">

            {/* Glow behind card */}
            <div className="absolute inset-0 -m-3 rounded-[3rem] bg-gradient-to-br from-blue-200/35 via-indigo-100/20 to-orange-100/20 blur-2xl" />

            {/* Form Card */}
            <div className="relative z-10 w-full max-w-[452px] overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 shadow-[0_22px_58px_rgba(15,23,42,0.16)]">

              {/* Card Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-extrabold text-white">ส่งคำขอฟรี</p>
                    <p className="mt-0.5 text-xs font-medium text-blue-100/80">ไม่ต้องชำระเงินก่อน · ทีมงานติดต่อกลับ</p>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">
                    <ShieldCheck className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Form Body */}
              <div className="p-6 md:p-8">
                <form onSubmit={submitRequest} className="space-y-5">

                  {/* Destination */}
                  <div>
                    <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-widest text-slate-400">
                      ประเทศปลายทาง
                    </label>
                    <div className="relative">
                      <MapPin className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <select
                        name="destination"
                        value={request.destination}
                        onChange={updateRequest}
                        required
                        className="h-12 w-full cursor-pointer appearance-none rounded-xl border border-slate-200 bg-slate-50/80 pl-10 pr-9 text-sm font-medium text-slate-700 transition-all hover:border-slate-300 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                      >
                        <option value="" disabled>เลือกประเทศที่ต้องการไป...</option>
                        {countries.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                      <svg className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>

                  {/* Visa Type */}
                  <div>
                    <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-widest text-slate-400">
                      ประเภทวีซ่า
                    </label>
                    <div className="relative">
                      <CalendarDays className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <select
                        name="serviceType"
                        value={request.serviceType}
                        onChange={updateRequest}
                        required
                        className="h-12 w-full cursor-pointer appearance-none rounded-xl border border-slate-200 bg-slate-50/80 pl-10 pr-9 text-sm font-medium text-slate-700 transition-all hover:border-slate-300 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                      >
                        {visaTypes.map(type => <option key={type} value={type}>{type}</option>)}
                      </select>
                      <svg className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-widest text-slate-400">
                      ชื่อ-นามสกุล
                    </label>
                    <input
                      name="name"
                      type="text"
                      value={request.name}
                      onChange={updateRequest}
                      placeholder="ระบุชื่อของคุณ"
                      required
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 text-sm font-medium text-slate-700 placeholder-slate-400 transition-all hover:border-slate-300 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  {/* Contact */}
                  <div>
                    <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-widest text-slate-400">
                      ช่องทางติดต่อ
                    </label>
                    <input
                      name="contact"
                      type="text"
                      value={request.contact}
                      onChange={updateRequest}
                      placeholder="เบอร์โทร / อีเมล / LINE ID"
                      required
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 text-sm font-medium text-slate-700 placeholder-slate-400 transition-all hover:border-slate-300 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                    />
                    <p className="mt-1.5 text-[11px] text-slate-400">กรอกช่องทางที่สะดวกให้ทีมงานติดต่อกลับ</p>
                  </div>

                  {/* Departure Date */}
                  <div>
                    <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-widest text-slate-400">
                      วันเดินทาง
                    </label>
                    <input
                      name="departureDate"
                      type="date"
                      min={tomorrowDate}
                      value={request.departureDate}
                      onChange={updateRequest}
                      required
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 text-sm font-medium text-slate-700 transition-all hover:border-slate-300 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-1 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-orange-500/30 disabled:cursor-not-allowed disabled:opacity-70 disabled:transform-none active:scale-[0.98]"
                  >
                    {loading ? (
                      <>
                        <svg className="h-5 w-5 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        กำลังส่งข้อมูล...
                      </>
                    ) : (
                      <>
                        ส่งคำขอให้ทีมงานตรวจสอบ
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  <div className="space-y-2 rounded-xl border border-slate-100 bg-slate-50/80 p-3.5 text-[12px] leading-relaxed text-slate-600 sm:text-[12.5px]">
                    <p className="font-semibold text-slate-700">ทีมงานจะติดต่อกลับภายใน 2-4 ชั่วโมงในเวลาทำการ</p>
                    <p>ทุกคำขอได้รับการตรวจสอบโดยทีมงานจริง ไม่ใช่ระบบอัตโนมัติ</p>
                    <p>ยังไม่มีการชำระเงินในขั้นตอนนี้ และไม่มีข้อผูกมัดในการส่งคำขอ</p>
                  </div>

                  <ol className="grid gap-1.5 text-[12px] leading-relaxed text-slate-500 sm:text-[12.5px]">
                    <li><span className="font-semibold text-slate-700">1.</span> ทีมงานตรวจสอบคำขอ</li>
                    <li><span className="font-semibold text-slate-700">2.</span> ติดต่อกลับผ่าน LINE / Email เพื่อยืนยันรายละเอียด</li>
                    <li><span className="font-semibold text-slate-700">3.</span> แนะนำเอกสารที่เหมาะสมกับปลายทาง</li>
                    <li><span className="font-semibold text-slate-700">4.</span> ดำเนินการหลังยืนยันข้อมูล</li>
                  </ol>

                </form>

                {/* Error */}
                {error && (
                  <div className="mt-4 flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 p-3.5 text-red-700">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                    <p className="text-sm font-medium">{error}</p>
                  </div>
                )}

                {/* Success */}
                {createdBooking && (
                  <div className="mt-4 flex items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-50 p-3.5 text-emerald-800">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    <div>
                      <p className="text-sm font-bold">ได้รับคำขอเรียบร้อยแล้ว!</p>
                      <p className="mt-0.5 text-xs text-emerald-600">ทีมงานจะตรวจสอบและติดต่อกลับ</p>
                    </div>
                  </div>
                )}

                {/* Bottom link */}
                <div className="mt-5 border-t border-slate-100 pt-4 text-center">
                  <button
                    type="button"
                    onClick={goToCheck}
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-slate-400 transition-colors hover:text-blue-600"
                  >
                    มีรหัสอ้างอิงอยู่แล้ว?{" "}
                    <span className="text-blue-600 underline decoration-2 underline-offset-4">ตรวจสอบสถานะ</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

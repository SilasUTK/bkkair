import { 
  ArrowRight, 
  CheckCircle2, 
  Send, 
  Plane, 
  ShieldCheck, 
  FileCheck, 
  Clock,
  DollarSign,
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

const trustFeatures = [
  { icon: ShieldCheck, color: "text-blue-600",    bg: "bg-blue-100",    title: "ตรวจสอบโดยทีมงานจริง",  desc: "ทุกคำขอผ่านการตรวจสอบก่อนส่ง" },
  { icon: FileCheck,   color: "text-[#FF5722]",  bg: "bg-orange-100", title: "PDF พร้อมยื่นสถานทูต",    desc: "เอกสารจัดรูปแบบตามมาตรฐาน" },
  { icon: Clock,       color: "text-emerald-600", bg: "bg-emerald-100", title: "ส่งภายใน 24 ชั่วโมง",       desc: "มีบริการเร่งด่วน Express" },
  { icon: DollarSign,  color: "text-purple-600",  bg: "bg-purple-100", title: "ราคาโปร่งใส",               desc: "ไม่มีค่าใช้จ่ายแอบแฝง" },
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
    <section id="hero" className="relative w-full overflow-hidden bg-[#EEF5FF] pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-36 font-sans selection:bg-blue-200 selection:text-blue-900">
      
      {/* ── Premium Hero Background ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[680px] w-[680px] rounded-full bg-blue-200/50 blur-[96px]" />
        <div className="absolute -left-16 top-1/2 h-[400px] w-[400px] rounded-full bg-blue-300/20 blur-[72px]" />
        <div className="absolute right-0 top-28 h-[360px] w-[360px] rounded-full bg-indigo-200/25 blur-[72px]" />
        <div className="absolute bottom-0 right-1/4 h-[320px] w-[320px] rounded-full bg-orange-200/20 blur-[72px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(37,99,235,0.06)_1px,transparent_0)] bg-[length:28px_28px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          
          {/* ================= LEFT COLUMN: Text & Value Prop ================= */}
          <div className="flex flex-col justify-center lg:col-span-6 xl:col-span-6">
            
            {/* Pill Badge */}
            <div className="mb-6 inline-flex w-fit items-center gap-2.5 rounded-full border border-blue-200/60 bg-white/90 p-1 pr-4 text-sm font-semibold text-slate-600 shadow-[0_6px_24px_rgba(37,99,235,0.12)] backdrop-blur-sm">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-sm">
                <Plane className="h-3.5 w-3.5" />
              </span>
              <span>Visa Document Service Thailand</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-6xl">
              เอกสารสนับสนุนวีซ่า
              <span className="block mt-2 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
                พร้อมยื่นสถานทูต
              </span>
              <span className="block mt-2 text-slate-800">ครบ จบ ใน 24 ชั่วโมง</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              BKK AIR จัดเตรียมเอกสารสนับสนุนวีซ่าให้คุณ — ทั้งใบจองตั๋วเครื่องบิน ใบจองโรงแรม แผนการเดินทาง และประกันการเดินทาง <strong className="text-slate-800 font-semibold">ในรูปแบบ PDF มาตรฐานสถานทูต</strong> พร้อมให้คุณยื่นได้เลย
            </p>

            {/* Trust Feature Cards */}
            <ul className="mt-7 grid grid-cols-2 gap-2.5" aria-label="จุดเด่น BKK AIR">
              {trustFeatures.map((feat, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition-shadow hover:shadow-[0_8px_30px_rgba(15,23,42,0.09)]"
                >
                  <div className={`flex shrink-0 h-8 w-8 items-center justify-center rounded-xl ${feat.bg}`}>
                    <feat.icon className={`h-4 w-4 ${feat.color}`} aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[12.5px] font-bold leading-snug text-slate-800">{feat.title}</p>
                    <p className="mt-0.5 text-[11px] leading-snug text-slate-400">{feat.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={scrollToPackages}
                className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-7 text-[15px] font-bold text-white shadow-[0_8px_28px_rgba(37,99,235,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(37,99,235,0.45)] active:scale-[0.98]"
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

            {/* Disclaimer Caption */}
            <p className="mt-4 text-[11px] text-slate-400 italic">
              การอนุมัติวีซ่าขึ้นอยู่กับดุลยพินิจของสถานทูตหรือสถานกงสุล BKK AIR ให้บริการเฉพาะการจัดเตรียมเอกสารสนับสนุนเท่านั้น
            </p>

          </div>

          {/* ================= RIGHT COLUMN: Form & Flat Illustration Scene ================= */}
          <div className="relative flex min-h-[520px] w-full items-center justify-center lg:col-span-6 lg:min-h-[620px] xl:col-span-6">
            
            {/* --- Flat Illustration Background Objects --- */}
            {/* Background glow behind the card */}
            <div className="absolute inset-6 -m-2 rounded-[2.5rem] bg-gradient-to-br from-blue-200/50 via-indigo-100/30 to-orange-100/30 blur-2xl animate-glow-pulse" />

            {/* ── Floating decorative card: Flight ── */}
            <div className="absolute right-0 top-4 z-20 hidden animate-float flex-col rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_16px_48px_rgba(15,23,42,0.10)] md:flex lg:-right-5 xl:-right-9">
              <div className="flex items-center gap-3 border-b border-dashed border-slate-100 pb-3">
                <div className="bg-blue-50 p-2 rounded-xl text-blue-600"><Plane className="h-4 w-4" /></div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Travel Document</p>
                  <p className="text-sm font-extrabold text-slate-800">BKK → CDG Paris</p>
                </div>
              </div>
              <div className="pt-2.5 flex justify-between items-center gap-5">
                <div className="space-y-1.5">
                  <div className="h-1.5 w-14 bg-slate-100 rounded-full"></div>
                  <div className="h-1.5 w-9 bg-slate-100 rounded-full"></div>
                </div>
                <div className="bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-lg text-[10px] font-bold">✓ Ready</div>
              </div>
            </div>

            {/* ── Floating decorative card: Status ── */}
            <div className="absolute bottom-6 left-0 z-20 hidden animate-float-delayed items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-[0_16px_48px_rgba(15,23,42,0.10)] md:flex lg:-left-5 xl:-left-9">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-[#FF5722]">
                <FileCheck className="h-5 w-5" />
              </div>
              <div className="pr-1">
                <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Document Status</p>
                <p className="text-sm font-extrabold text-slate-800">Embassy Ready</p>
              </div>
            </div>

            {/* ── Main Form Card ── */}
            <div className="relative z-10 w-full max-w-[460px] lg:max-w-[480px]">

              {/* Premium card header */}
              <div className="w-full rounded-t-3xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 pt-5 pb-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-extrabold text-white">ส่งคำขอฟรี</p>
                    <p className="text-[12px] text-blue-100/80 mt-0.5 font-medium">ไม่ต้องชำระเงินก่อน ทีมงานติดต่อกลับ</p>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">
                    <ShieldCheck className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Form body */}
              <div className="rounded-b-3xl border-x border-b border-slate-100 bg-white px-6 py-6 shadow-[0_32px_80px_rgba(15,23,42,0.11)] sm:px-7">

                <form onSubmit={submitRequest} className="space-y-4">
                  
                  {/* Select: Country */}
                  <div className="relative">
                    <label className="block text-[11px] font-bold text-slate-400 mb-1.5 uppercase tracking-widest">ประเทศปลายทาง</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <MapPin className="h-4 w-4 text-slate-400" />
                      </div>
                      <select
                        name="destination"
                        value={request.destination}
                        onChange={updateRequest}
                        required
                        className="block w-full pl-10 pr-9 py-3 bg-slate-50/80 border border-slate-200 rounded-xl text-slate-700 font-medium text-sm focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all appearance-none cursor-pointer hover:border-slate-300"
                      >
                        <option value="" disabled>เลือกประเทศที่ต้องการไป...</option>
                        {countries.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>

                  {/* Select: Visa Type */}
                  <div className="relative">
                    <label className="block text-[11px] font-bold text-slate-400 mb-1.5 uppercase tracking-widest">ประเภทวีซ่า</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <CalendarDays className="h-4 w-4 text-slate-400" />
                      </div>
                      <select
                        name="serviceType"
                        value={request.serviceType}
                        onChange={updateRequest}
                        required
                        className="block w-full pl-10 pr-9 py-3 bg-slate-50/80 border border-slate-200 rounded-xl text-slate-700 font-medium text-sm focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all appearance-none cursor-pointer hover:border-slate-300"
                      >
                        {visaTypes.map(type => <option key={type} value={type}>{type}</option>)}
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>

                  {/* Input: Name */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1.5 uppercase tracking-widest">ชื่อ-นามสกุล</label>
                    <input
                      name="name"
                      type="text"
                      value={request.name}
                      onChange={updateRequest}
                      placeholder="ระบุชื่อของคุณ"
                      required
                      className="block w-full px-3.5 py-3 bg-slate-50/80 border border-slate-200 rounded-xl text-slate-700 font-medium text-sm placeholder-slate-400 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all hover:border-slate-300"
                    />
                  </div>

                  {/* Input: Contact */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1.5 uppercase tracking-widest">ช่องทางติดต่อ</label>
                    <input
                      name="contact"
                      type="text"
                      value={request.contact}
                      onChange={updateRequest}
                      placeholder="เบอร์โทร / อีเมล / LINE ID"
                      required
                      className="block w-full px-3.5 py-3 bg-slate-50/80 border border-slate-200 rounded-xl text-slate-700 font-medium text-sm placeholder-slate-400 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all hover:border-slate-300"
                    />
                    <p className="mt-1.5 text-[11px] text-slate-400">กรอกช่องทางที่สะดวกให้ทีมงานติดต่อกลับ</p>
                  </div>

                  {/* Input: Departure Date */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1.5 uppercase tracking-widest">วันเดินทาง</label>
                    <input
                      name="departureDate"
                      type="date"
                      min={tomorrowDate}
                      value={request.departureDate}
                      onChange={updateRequest}
                      required
                      className="block w-full px-3.5 py-3 bg-slate-50/80 border border-slate-200 rounded-xl text-slate-700 font-medium text-sm focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all hover:border-slate-300"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-2 flex items-center justify-center gap-2 py-3.5 px-6 bg-gradient-to-r from-[#FF5722] to-orange-500 hover:from-[#E64A19] hover:to-orange-600 text-white rounded-xl font-bold text-sm transition-all shadow-[0_8px_24px_rgba(255,87,34,0.32)] hover:shadow-[0_12px_32px_rgba(255,87,34,0.42)] hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none active:scale-[0.98]"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                        กำลังส่งข้อมูล...
                      </span>
                    ) : (
                      <>
                        ส่งคำขอให้ทีมงานตรวจสอบ
                        <Send className="h-4 w-4 ml-1" />
                      </>
                    )}
                  </button>
                </form>

                {/* Status Messages */}
                {error && (
                  <div className="mt-4 p-3.5 bg-red-50 border border-red-100 rounded-xl flex items-start gap-3 text-red-700">
                    <ShieldCheck className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                    <p className="text-sm font-medium">{error}</p>
                  </div>
                )}
                
                {createdBooking && (
                  <div className="mt-4 p-3.5 bg-emerald-50 border border-emerald-100 rounded-xl flex items-start gap-3 text-emerald-800">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold">ได้รับคำขอเรียบร้อยแล้ว!</p>
                      <p className="text-xs mt-0.5 text-emerald-600">ทีมงานจะตรวจสอบและติดต่อกลับ</p>
                    </div>
                  </div>
                )}

                {/* Bottom Link */}
                <div className="mt-5 pt-4 border-t border-slate-100 text-center">
                  <button type="button" onClick={goToCheck} className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-slate-400 hover:text-blue-600 transition-colors">
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

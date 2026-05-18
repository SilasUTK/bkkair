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
    <section id="hero" className="relative w-full overflow-hidden bg-gradient-to-br from-[#F7FBFF] via-[#EEF6FF] to-[#FFF7F0] pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-36 font-sans selection:bg-blue-200 selection:text-blue-900">
      
      {/* --- Flat 2.0 Background Elements (Global) --- */}
      <div className="absolute left-0 top-0 h-full w-full pointer-events-none overflow-hidden z-0">
        {/* Soft Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(37,99,235,0.10)_1px,transparent_0)] bg-[length:24px_24px] opacity-50"></div>
        
        {/* Top Left Soft Glow */}
        <div className="absolute -left-24 -top-28 h-[420px] w-[420px] rounded-full bg-blue-300/30 blur-3xl"></div>
        <div className="absolute right-0 top-24 h-[360px] w-[360px] rounded-full bg-cyan-200/35 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 h-[380px] w-[380px] rounded-full bg-orange-200/35 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          
          {/* ================= LEFT COLUMN: Text & Value Prop ================= */}
          <div className="flex flex-col justify-center lg:col-span-6 xl:col-span-6">
            
            {/* Pill Badge */}
            <div className="mb-5 inline-flex w-fit items-center gap-2.5 rounded-full border border-blue-100/70 bg-white/85 p-1.5 pr-5 text-sm font-semibold text-slate-700 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur transition-transform hover:scale-105">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm shadow-blue-600/20">
                <Plane className="h-4 w-4" />
              </span>
              <span>Visa Support Thailand</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl font-extrabold leading-[1.16] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.45rem] xl:text-6xl">
              เอกสารสนับสนุนวีซ่า<br className="hidden sm:block" />
              <span className="relative inline-block text-[#FF5722]">
                พร้อมยื่นสถานทูต
                {/* Vector Underline */}
                <svg className="absolute -bottom-2 left-0 h-3 w-full text-[#FF5722]/25" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round"/>
                </svg>
              </span><br className="hidden sm:block" />
              ครบ จบ ใน 24 ชั่วโมง
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              BKK AIR จัดเตรียมเอกสารสนับสนุนวีซ่าให้คุณ — ทั้งใบจองตั๋วเครื่องบิน ใบจองโรงแรม แผนการเดินทาง และประกันการเดินทาง <strong className="text-slate-800 font-semibold">ในรูปแบบ PDF มาตรฐานสถานทูต</strong> พร้อมให้คุณยื่นได้เลย
            </p>

            {/* Trust Feature Cards */}
            <ul
              className="mt-6 grid grid-cols-2 gap-3"
              aria-label="จุดเด่น BKK AIR"
            >
              {trustFeatures.map((feat, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 rounded-2xl border border-blue-100 bg-white/80 p-3.5 shadow-[0_10px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm"
                >
                  <div className={`flex shrink-0 h-9 w-9 items-center justify-center rounded-xl ${feat.bg}`}>
                    <feat.icon className={`h-5 w-5 ${feat.color}`} aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold leading-tight text-slate-900">{feat.title}</p>
                    <p className="mt-0.5 text-xs text-slate-500">{feat.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={scrollToPackages}
                className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-2xl bg-blue-600 px-7 text-base font-bold text-white shadow-lg shadow-blue-600/25 transition-all hover:-translate-y-1 hover:bg-blue-700 hover:shadow-blue-600/35"
              >
                📄 ดูแพ็กเกจและราคา
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={focusContactName}
                aria-label="พูดคุยกับทีมงาน BKK AIR"
                className="inline-flex min-h-[54px] items-center justify-center rounded-2xl border-2 border-blue-100/80 bg-white/65 px-7 text-base font-bold text-slate-700 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur transition-all hover:-translate-y-1 hover:border-blue-200 hover:bg-white"
              >
                มีคำถาม? พูดคุยกับทีมงานเรา →
              </button>
            </div>

            {/* Disclaimer Caption */}
            <p className="mt-4 text-xs text-slate-400 italic">
              การอนุมัติวีซ่าขึ้นอยู่กับดุลยพินิจของสถานทูตหรือสถานกงสุล BKK AIR ให้บริการเฉพาะการจัดเตรียมเอกสารสนับสนุนเท่านั้น
            </p>

          </div>

          {/* ================= RIGHT COLUMN: Form & Flat Illustration Scene ================= */}
          <div className="relative flex min-h-[520px] w-full items-center justify-center lg:col-span-6 lg:min-h-[620px] xl:col-span-6">
            
            {/* --- Flat Illustration Background Objects --- */}
            {/* Big Blue Blob */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 w-[92%] -translate-x-1/2 -translate-y-1/2 aspect-square opacity-80">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full rotate-12 transform text-blue-600/10 transition-transform duration-1000">
                <path fill="currentColor" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18.1,97.6,-2.4C98.4,13.2,94.1,29.1,85.2,42.5C76.3,55.9,62.8,66.8,48,74.5C33.2,82.2,17.1,86.6,1.4,84.1C-14.3,81.6,-28.6,72.2,-41.8,63.1C-55,54,-67.2,45.2,-76.3,32.7C-85.4,20.2,-91.4,4,-89.9,-11.5C-88.3,-27,-79.1,-41.9,-67.3,-53.4C-55.5,-64.9,-41,-73,-26.6,-77.8C-12.2,-82.6,2.1,-84.1,16.8,-81.4C31.5,-78.7,46.5,-71.8,44.7,-76.4Z" transform="translate(100 100)" />
              </svg>
            </div>
            {/* Small Orange Blob */}
            <div className="pointer-events-none absolute -bottom-4 -right-6 h-56 w-56 lg:h-64 lg:w-64">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full -rotate-45 transform text-[#FF5722] opacity-20">
                <path fill="currentColor" d="M37.6,-66.2C50.2,-57.8,62.9,-49.6,71.4,-38.3C79.9,-27,84.2,-13.5,84.3,0.1C84.4,13.7,80.3,27.4,72.5,39.3C64.7,51.2,53.2,61.4,40.1,68.8C27,76.2,13.5,80.9,0.3,80.4C-12.9,79.9,-25.8,74.2,-37.8,66.5C-49.8,58.8,-60.9,49.1,-69.1,37.3C-77.3,25.5,-82.6,11.6,-82.4,-2.2C-82.2,-16.1,-76.5,-29.9,-67.6,-41.4C-58.7,-52.9,-46.6,-62.1,-33.8,-70.4C-21,-78.7,-7.5,-86.1,4.7,-94.1C16.9,-102.1,33.8,-110.7,37.6,-66.2Z" transform="translate(100 100)" />
              </svg>
            </div>

            {/* Flat UI Floating Card 1 (Flight) */}
            <div className="absolute right-0 top-4 z-20 hidden animate-[bounce_6s_ease-in-out_infinite] flex-col rounded-3xl border border-blue-100/70 bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:flex lg:-right-6 xl:-right-10">
              <div className="flex items-center gap-3 border-b border-dashed border-slate-200 pb-3">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Plane className="h-5 w-5" /></div>
                <div>
                  <p className="text-xs font-bold text-slate-400">TRAVEL DOCUMENT</p>
                  <p className="text-sm font-extrabold text-slate-800">BKK ➔ CDG Paris</p>
                </div>
              </div>
              <div className="pt-3 flex justify-between items-center gap-6">
                <div>
                  <div className="h-2 w-12 bg-slate-100 rounded-full mb-1.5"></div>
                  <div className="h-2 w-8 bg-slate-100 rounded-full"></div>
                </div>
                <div className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-[10px] font-bold">Staff Review</div>
              </div>
            </div>

            {/* Flat UI Floating Card 2 (Visa Success) */}
            <div className="absolute bottom-0 left-0 z-20 hidden animate-[bounce_5s_ease-in-out_infinite_0.5s] items-center gap-3 rounded-3xl border border-blue-100/70 bg-white p-3 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:flex lg:-left-6 xl:-left-10">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF5722]/10 text-[#FF5722]">
                <FileCheck className="h-5 w-5" />
              </div>
              <div className="pr-2">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Document Status</p>
                <p className="text-sm font-extrabold text-slate-800">Embassy Ready</p>
              </div>
            </div>

            {/* --- The Main Form Card --- */}
            <div className="relative z-10 w-full max-w-[460px] lg:max-w-[480px]">
              
              {/* Browser/App Window Header (Flat Design aesthetic) */}
              <div className="w-full bg-slate-800 rounded-t-3xl p-4 flex items-center justify-between border-b border-slate-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                </div>
                <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Secure Request</div>
                <div className="w-8"></div> {/* Spacer for balance */}
              </div>

              {/* Form Body */}
              <div className="rounded-b-3xl border-x border-b border-blue-100/70 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-7">
                
                <div className="mb-8">
                  <h2 className="text-2xl font-extrabold text-slate-900">ส่งคำขอฟรี</h2>
                  <p className="text-sm text-slate-500 mt-1 font-medium">ไม่ต้องชำระเงินก่อน ทีมงานจะตรวจสอบและติดต่อกลับ</p>
                </div>

                <form onSubmit={submitRequest} className="space-y-4">
                  
                  {/* Select: Country */}
                  <div className="relative">
                    <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">ประเทศปลายทาง</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <select
                        name="destination"
                        value={request.destination}
                        onChange={updateRequest}
                        required
                        className="block w-full pl-11 pr-10 py-3.5 bg-slate-50 border-2 border-slate-100 rounded-xl text-slate-700 font-medium text-base focus:bg-white focus:border-blue-500 focus:ring-0 transition-colors appearance-none cursor-pointer hover:bg-slate-100/70"
                      >
                        <option value="" disabled>เลือกประเทศที่ต้องการไป...</option>
                        {countries.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>

                  {/* Select: Visa Type */}
                  <div className="relative">
                    <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">ประเภทวีซ่า</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <CalendarDays className="h-5 w-5" />
                      </div>
                      <select
                        name="serviceType"
                        value={request.serviceType}
                        onChange={updateRequest}
                        required
                        className="block w-full pl-11 pr-10 py-3.5 bg-slate-50 border-2 border-slate-100 rounded-xl text-slate-700 font-medium text-base focus:bg-white focus:border-blue-500 focus:ring-0 transition-colors appearance-none cursor-pointer hover:bg-slate-100/70"
                      >
                        {visaTypes.map(type => <option key={type} value={type}>{type}</option>)}
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>

                  {/* Input: Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">ชื่อ-นามสกุล</label>
                    <input
                      name="name"
                      type="text"
                      value={request.name}
                      onChange={updateRequest}
                      placeholder="ระบุชื่อของคุณ"
                      required
                      className="block w-full px-4 py-3.5 bg-slate-50 border-2 border-slate-100 rounded-xl text-slate-700 font-medium text-base placeholder-slate-400 focus:bg-white focus:border-blue-500 focus:ring-0 transition-colors hover:bg-slate-100/70"
                    />
                  </div>

                  {/* Input: Contact */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">ช่องทางติดต่อ</label>
                    <input
                      name="contact"
                      type="text"
                      value={request.contact}
                      onChange={updateRequest}
                      placeholder="เบอร์โทร / อีเมล / LINE ID"
                      required
                      className="block w-full px-4 py-3.5 bg-slate-50 border-2 border-slate-100 rounded-xl text-slate-700 font-medium text-base placeholder-slate-400 focus:bg-white focus:border-blue-500 focus:ring-0 transition-colors hover:bg-slate-100/70"
                    />
                    <p className="mt-1.5 text-xs font-medium text-slate-500">กรอกช่องทางที่สะดวกให้ทีมงานติดต่อกลับ</p>
                  </div>

                  {/* Input: Departure Date */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">วันเดินทาง</label>
                    <input
                      name="departureDate"
                      type="date"
                      min={tomorrowDate}
                      value={request.departureDate}
                      onChange={updateRequest}
                      required
                      className="block w-full px-4 py-3.5 bg-slate-50 border-2 border-slate-100 rounded-xl text-slate-700 font-medium text-base focus:bg-white focus:border-blue-500 focus:ring-0 transition-colors hover:bg-slate-100/70"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-6 flex items-center justify-center gap-2 py-4 px-6 bg-[#FF5722] hover:bg-[#E64A19] text-white rounded-xl font-bold text-base transition-all shadow-lg shadow-[#FF5722]/30 hover:shadow-[#FF5722]/40 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
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
                  <div className="mt-4 p-4 bg-red-50 border border-red-100 rounded-xl flex items-start gap-3 text-red-700 animate-in fade-in slide-in-from-bottom-2">
                    <div className="mt-0.5"><ShieldCheck className="h-5 w-5 text-red-500" /></div>
                    <p className="text-sm font-semibold">{error}</p>
                  </div>
                )}
                
                {createdBooking && (
                  <div className="mt-4 p-4 bg-emerald-50 border border-emerald-100 rounded-xl flex items-start gap-3 text-emerald-800 animate-in fade-in slide-in-from-bottom-2">
                    <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0" />
                    <div>
                      <p className="text-sm font-bold">ได้รับคำขอเรียบร้อยแล้ว!</p>
                      <p className="text-xs mt-0.5 text-emerald-700/80 font-medium">ทีมงานจะตรวจสอบและติดต่อกลับผ่านช่องทางที่ระบุไว้</p>
                    </div>
                  </div>
                )}

                {/* Bottom Link */}
                <div className="mt-6 pt-5 border-t border-slate-100 text-center">
                  <button type="button" onClick={goToCheck} className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">
                    มีรหัสอ้างอิงอยู่แล้ว? <span className="text-blue-600 underline decoration-2 underline-offset-4">ตรวจสอบสถานะ</span>
                    <ArrowRight className="h-4 w-4" />
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

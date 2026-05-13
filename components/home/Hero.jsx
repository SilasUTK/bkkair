import { 
  ArrowRight, 
  CheckCircle2, 
  Send, 
  Plane, 
  ShieldCheck, 
  Clock, 
  FileCheck, 
  Users,
  MapPin,
  CalendarDays
} from "lucide-react";
import React, { useMemo, useState } from "react";
import { createBooking } from "../legacy/services/api.js";

const initialRequest = {
  destination: "",
  serviceType: "ท่องเที่ยว / ส่วนตัว",
  name: "",
  phone: "",
  email: "",
  lineId: "",
  departureDate: ""
};

const countries = [
  "ญี่ปุ่น", "เกาหลีใต้", "จีน", "สิงคโปร์", "ออสเตรเลีย", 
  "สหรัฐอเมริกา", "สหราชอาณาจักร", "ฝรั่งเศส", "เยอรมนี", 
  "อิตาลี", "สวิตเซอร์แลนด์", "อื่นๆ"
];

const visaTypes = [
  "ท่องเที่ยว / ส่วนตัว", "ธุรกิจ", "เยี่ยมครอบครัว", 
  "นักเรียน", "ทำงาน", "Transit"
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
    if (!request.phone.trim()) return setError("กรุณาระบุเบอร์โทรศัพท์");
    if (!request.departureDate.trim()) return setError("กรุณาระบุวันเดินทาง");
    if (!request.email.trim() && !request.lineId.trim()) return setError("กรุณาระบุอีเมลหรือ LINE ID อย่างน้อย 1 ช่องทาง");

    setLoading(true);
    setError("");
    setCreatedBooking(false);

    try {
      await createBooking({ ...request, serviceType: request.serviceType || "Quick Visa Consultation Request" });
      setCreatedBooking(true);
      setRequest(initialRequest);
    } catch (requestError) {
      setError(requestError.message || "ไม่สามารถส่งข้อมูลได้ กรุณาลองใหม่อีกครั้ง");
    } finally {
      setLoading(false);
    }
  }

  function focusContactName() {
    const input = document.querySelector('input[name="name"]');
    input?.scrollIntoView({ behavior: "smooth", block: "center" });
    window.setTimeout(() => input?.focus(), 300);
  }

  function scrollToPackages() {
    document.getElementById("packages")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-[#F8FAFC] pb-20 pt-24 lg:pb-32 lg:pt-32 font-sans selection:bg-blue-200 selection:text-blue-900">
      
      {/* --- Flat 2.0 Background Elements (Global) --- */}
      <div className="absolute left-0 top-0 h-full w-full pointer-events-none overflow-hidden z-0">
        {/* Soft Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNFMkU4RjAiLz48L3N2Zz4=')] opacity-60"></div>
        
        {/* Top Left Soft Glow */}
        <div className="absolute -left-[20%] -top-[20%] h-[70vh] w-[70vh] rounded-full bg-gradient-to-br from-blue-100/80 to-transparent blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN: Text & Value Prop ================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            
            {/* Pill Badge */}
            <div className="mb-6 inline-flex w-fit items-center gap-2.5 rounded-full bg-white border border-slate-200/60 p-1.5 pr-5 text-sm font-semibold text-slate-700 shadow-sm transition-transform hover:scale-105">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm shadow-blue-600/20">
                <Plane className="h-4 w-4" />
              </span>
              <span>บริการจองตั๋วเครื่องบินและโรงแรมเพื่อวีซ่า</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl font-extrabold leading-[1.15] text-slate-900 sm:text-5xl lg:text-6xl tracking-tight">
              Premium visa flight support<br className="hidden sm:block" />
              สำหรับยื่น
              <span className="relative inline-block mx-2 text-[#FF5722]">
                วีซ่า
                {/* Vector Underline */}
                <svg className="absolute -bottom-1 left-0 w-full h-3 text-[#FF5722]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round"/>
                </svg>
              </span><br className="hidden sm:block" />
              โดยทีมงานตรวจสอบก่อนดำเนินการ
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-lg">
              ส่งคำขอให้ทีมงานตรวจสอบข้อมูลก่อนจัดเตรียมเอกสารสำหรับยื่นวีซ่า <strong className="text-slate-800 font-semibold">ไม่มีการออกตั๋วจริงอัตโนมัติ</strong> ทุกเคสดำเนินการโดยเจ้าหน้าที่
            </p>

            {/* Features (Flat 2.0 Style - clean, icon focused) */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 max-w-2xl">
              {[
                { icon: FileCheck, color: "text-blue-600", bg: "bg-blue-100", title: "Staff review", desc: "ตรวจรายละเอียดก่อนจัดเตรียมเอกสาร" },
                { icon: ShieldCheck, color: "text-[#FF5722]", bg: "bg-orange-100", title: "Visa support assistance", desc: "ใบจองตั๋วและโรงแรมเพื่อประกอบคำขอวีซ่า" },
                { icon: Clock, color: "text-emerald-600", bg: "bg-emerald-100", title: "Fast staff response", desc: "ทีมงานติดต่อกลับหลังรับคำขอ" },
                { icon: Users, color: "text-purple-600", bg: "bg-purple-100", title: "Manual fulfillment", desc: "ดำเนินการหลังตรวจสอบและยืนยันข้อมูล" },
              ].map((feat, idx) => (
                <div key={idx} className="flex items-start gap-4 group cursor-default">
                  <div className={`flex shrink-0 h-12 w-12 items-center justify-center rounded-2xl ${feat.bg} ${feat.color} transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                    <feat.icon className="h-6 w-6" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{feat.title}</h3>
                    <p className="mt-0.5 text-sm text-slate-500">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={focusContactName}
                className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-2xl bg-blue-600 px-8 text-base font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-1 hover:bg-blue-700 hover:shadow-blue-600/40"
              >
                ให้เจ้าหน้าที่ติดต่อกลับ
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={scrollToPackages}
                className="inline-flex min-h-[56px] items-center justify-center rounded-2xl border-2 border-slate-200 bg-transparent px-8 text-base font-bold text-slate-700 transition-all hover:-translate-y-1 hover:border-slate-300 hover:bg-white"
              >
                ดูรายละเอียดแพ็กเกจ
              </button>
            </div>

            {/* Trust Indicator */}
            <div className="mt-8 flex items-center gap-3 text-sm font-medium text-slate-500">
              <div className="flex -space-x-2.5">
                {["B", "V", "S"].map((label) => (
                  <span key={label} className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#F8FAFC] bg-blue-100 text-[10px] font-black text-blue-700">
                    {label}
                  </span>
                ))}
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#F8FAFC] bg-slate-100 text-[10px] font-bold text-slate-600">+</div>
              </div>
              <p>ทุกคำขอจะได้รับการตรวจสอบโดยเจ้าหน้าที่ก่อนดำเนินการ</p>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: Form & Flat Illustration Scene ================= */}
          <div className="lg:col-span-6 xl:col-span-6 relative w-full h-full min-h-[600px] flex items-center justify-center">
            
            {/* --- Flat Illustration Background Objects --- */}
            {/* Big Blue Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] aspect-square pointer-events-none">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-blue-600/10 transform rotate-12 transition-transform duration-1000">
                <path fill="currentColor" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18.1,97.6,-2.4C98.4,13.2,94.1,29.1,85.2,42.5C76.3,55.9,62.8,66.8,48,74.5C33.2,82.2,17.1,86.6,1.4,84.1C-14.3,81.6,-28.6,72.2,-41.8,63.1C-55,54,-67.2,45.2,-76.3,32.7C-85.4,20.2,-91.4,4,-89.9,-11.5C-88.3,-27,-79.1,-41.9,-67.3,-53.4C-55.5,-64.9,-41,-73,-26.6,-77.8C-12.2,-82.6,2.1,-84.1,16.8,-81.4C31.5,-78.7,46.5,-71.8,44.7,-76.4Z" transform="translate(100 100)" />
              </svg>
            </div>
            {/* Small Orange Blob */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 pointer-events-none">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#FF5722] opacity-20 transform -rotate-45">
                <path fill="currentColor" d="M37.6,-66.2C50.2,-57.8,62.9,-49.6,71.4,-38.3C79.9,-27,84.2,-13.5,84.3,0.1C84.4,13.7,80.3,27.4,72.5,39.3C64.7,51.2,53.2,61.4,40.1,68.8C27,76.2,13.5,80.9,0.3,80.4C-12.9,79.9,-25.8,74.2,-37.8,66.5C-49.8,58.8,-60.9,49.1,-69.1,37.3C-77.3,25.5,-82.6,11.6,-82.4,-2.2C-82.2,-16.1,-76.5,-29.9,-67.6,-41.4C-58.7,-52.9,-46.6,-62.1,-33.8,-70.4C-21,-78.7,-7.5,-86.1,4.7,-94.1C16.9,-102.1,33.8,-110.7,37.6,-66.2Z" transform="translate(100 100)" />
              </svg>
            </div>

            {/* Flat UI Floating Card 1 (Flight) */}
            <div className="absolute -top-6 -right-4 lg:-right-12 z-20 hidden md:flex animate-[bounce_6s_ease-in-out_infinite] flex-col rounded-2xl bg-white p-4 shadow-xl shadow-slate-200/50 border border-slate-100 transform rotate-6">
              <div className="flex items-center gap-3 border-b border-dashed border-slate-200 pb-3">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Plane className="h-5 w-5" /></div>
                <div>
                  <p className="text-xs font-bold text-slate-400">FLIGHT RESERVATION</p>
                  <p className="text-sm font-extrabold text-slate-800">BKK ➔ CDG</p>
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
            <div className="absolute -bottom-8 -left-4 lg:-left-12 z-20 hidden md:flex animate-[bounce_5s_ease-in-out_infinite_0.5s] items-center gap-3 rounded-2xl bg-white p-3 shadow-xl shadow-slate-200/50 border border-slate-100 transform -rotate-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF5722]/10 text-[#FF5722]">
                <FileCheck className="h-5 w-5" />
              </div>
              <div className="pr-2">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Visa Status</p>
                <p className="text-sm font-extrabold text-slate-800">Ready to Submit</p>
              </div>
            </div>

            {/* --- The Main Form Card --- */}
            <div className="relative z-10 w-full max-w-[480px]">
              
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
              <div className="bg-white rounded-b-3xl p-6 sm:p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]">
                
                <div className="mb-8">
                  <h2 className="text-2xl font-extrabold text-slate-900">ให้ทีมงานติดต่อกลับ</h2>
                  <p className="text-sm text-slate-500 mt-1 font-medium">กรอกข้อมูลเบื้องต้นเพื่อรับคำปรึกษาฟรี</p>
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
                    <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">เบอร์โทรศัพท์</label>
                    <input
                      name="phone"
                      type="text"
                      value={request.phone}
                      onChange={updateRequest}
                      placeholder="ระบุเบอร์โทรศัพท์"
                      required
                      className="block w-full px-4 py-3.5 bg-slate-50 border-2 border-slate-100 rounded-xl text-slate-700 font-medium text-base placeholder-slate-400 focus:bg-white focus:border-blue-500 focus:ring-0 transition-colors hover:bg-slate-100/70"
                    />
                  </div>

                  {/* Input: Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">อีเมล (ถ้ามี)</label>
                    <input
                      name="email"
                      type="email"
                      value={request.email}
                      onChange={updateRequest}
                      placeholder="name@example.com"
                      className="block w-full px-4 py-3.5 bg-slate-50 border-2 border-slate-100 rounded-xl text-slate-700 font-medium text-base placeholder-slate-400 focus:bg-white focus:border-blue-500 focus:ring-0 transition-colors hover:bg-slate-100/70"
                    />
                  </div>

                  {/* Input: LINE ID */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">LINE ID (ถ้ามี)</label>
                    <input
                      name="lineId"
                      type="text"
                      value={request.lineId}
                      onChange={updateRequest}
                      placeholder="@yourlineid"
                      className="block w-full px-4 py-3.5 bg-slate-50 border-2 border-slate-100 rounded-xl text-slate-700 font-medium text-base placeholder-slate-400 focus:bg-white focus:border-blue-500 focus:ring-0 transition-colors hover:bg-slate-100/70"
                    />
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
                        ส่งข้อมูลเพื่อรับคำปรึกษา
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
                      <p className="text-sm font-bold">ได้รับข้อมูลเรียบร้อยแล้ว!</p>
                      <p className="text-xs mt-0.5 text-emerald-700/80 font-medium">เจ้าหน้าที่จะรีบติดต่อกลับตามช่องทางที่ระบุไว้ครับ</p>
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

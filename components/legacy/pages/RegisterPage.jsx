import {
  ArrowRight,
  BellRing,
  CheckCircle2,
  History,
  Lock,
  Mail,
  Phone,
  ShieldCheck,
  User,
  Plane,
  Eye,
  EyeOff
} from "lucide-react";
import React, { useState } from "react";

// ==========================================
// 1. Benefits Data
// ==========================================
const benefits = [
  {
    title: "บันทึกประวัติคำขอ",
    description: "เก็บข้อมูลพื้นฐานเพื่อให้เจ้าหน้าที่ช่วยดูแลครั้งถัดไปได้เร็วขึ้น",
    icon: History
  },
  {
    title: "แจ้งเตือนสถานะ",
    description: "ติดตามความคืบหน้าหลังทีมงานตรวจสอบและติดต่อกลับ",
    icon: BellRing
  },
  {
    title: "ดูแลข้อมูลอย่างปลอดภัย",
    description: "ข้อมูลติดต่อและรายละเอียดการเดินทางใช้สำหรับประสานงานเท่านั้น",
    icon: ShieldCheck
  }
];

// ==========================================
// 2. Main Register Page Component
// ==========================================
export default function RegisterPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.password) {
      setError("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("รหัสผ่านไม่ตรงกัน กรุณาลองอีกครั้ง");
      return;
    }

    if (formData.password.length < 6) {
      setError("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร");
      return;
    }

    if (!agreeTerms) {
      setError("กรุณายอมรับข้อตกลงและนโยบายความเป็นส่วนตัวก่อนทำรายการ");
      return;
    }

    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 900);
  }

  return (
    <section className="relative min-h-screen bg-[#F8FAFC] px-4 py-24 sm:px-8 lg:py-32 flex items-center justify-center font-sans selection:bg-blue-200 selection:text-blue-900">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-blue-100/40 blur-3xl translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-orange-100/30 blur-3xl -translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1100px] flex flex-col lg:flex-row overflow-hidden rounded-[2.5rem] bg-white shadow-[0_20px_60px_-15px_rgba(15,23,42,0.12)] border border-slate-100/80">
        
        {/* ================= LEFT COLUMN: Branding & Flat Graphics ================= */}
        <aside className="relative flex w-full flex-col justify-between overflow-hidden bg-gradient-to-br from-[#3b75f2] to-[#1e4ed8] p-8 sm:p-12 lg:w-[45%] text-white">
          
          {/* Decorative Pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuMTAiLz48L3N2Zz4=')] opacity-50" />
          
          {/* Subtle light flares */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-400/40 blur-3xl" />
          <div className="absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-accent-orange/15 blur-3xl" />

          <div className="relative z-10 flex flex-col h-full justify-between">
            
            {/* Main Text (ชิดด้านบนเพราะไม่มี Logo แล้ว) */}
            <div className="mb-6">
              <h1 className="text-3xl font-black leading-[1.2] sm:text-[2.5rem] tracking-tight">
                สมัครสมาชิก<br />เพื่อให้ทีมงานดูแล<br className="hidden sm:block" />คุณต่อเนื่อง
              </h1>
              <p className="mt-4 text-[15px] font-medium leading-relaxed text-blue-100">
                บัญชี BKK AIR ช่วยให้การส่งคำขอจองตั๋วเครื่องบินและใบจองโรงแรมสำหรับยื่นวีซ่าสะดวกขึ้น และปลอดภัยยิ่งกว่าเดิม
              </p>
            </div>

            {/* ================= Flat Graphics Scene ================= */}
            <div className="relative w-full h-56 my-6 hidden sm:flex items-center justify-center">
              
              {/* Back Glow */}
              <div className="absolute w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>

              {/* White Profile Card (Center) */}
              <div className="absolute z-10 w-36 h-48 bg-[#F8FAFC] rounded-2xl shadow-xl flex flex-col items-center pt-6 pb-4 animate-[bounce_6s_ease-in-out_infinite]">
                 {/* Avatar Circle */}
                 <div className="w-16 h-16 bg-[#DBEAFE] rounded-full flex items-center justify-center mb-4 border-[3px] border-white shadow-sm">
                    <User className="w-8 h-8 text-primary-dark" strokeWidth={2.5} />
                 </div>
                 {/* Text Mockups */}
                 <div className="w-20 h-2 bg-slate-200 rounded-full mb-3"></div>
                 <div className="w-24 h-1.5 bg-slate-200 rounded-full mb-2"></div>
                 <div className="w-16 h-1.5 bg-slate-200 rounded-full"></div>
              </div>

              {/* Orange Flight Ticket (Right Overlap) */}
              <div className="absolute z-20 right-6 sm:right-10 top-12 w-32 h-16 bg-accent-orange rounded-xl shadow-lg shadow-orange-500/40 transform rotate-[15deg] flex items-center p-3 animate-[bounce_5s_ease-in-out_infinite_0.5s]">
                 <div className="bg-white/20 p-1.5 rounded-lg mr-2 shrink-0"><Plane className="w-5 h-5 text-white" /></div>
                 <div className="flex-1 border-l-2 border-dashed border-white/40 pl-2">
                    <div className="w-10 h-2 bg-white/90 rounded-full mb-1.5"></div>
                    <div className="w-14 h-1.5 bg-white/60 rounded-full"></div>
                 </div>
              </div>

              {/* Green Shield (Left Bottom Overlap) */}
              <div className="absolute z-30 left-6 sm:left-12 bottom-6 w-12 h-12 bg-[#22C55E] rounded-2xl shadow-lg shadow-emerald-500/30 transform -rotate-12 flex items-center justify-center animate-[bounce_7s_ease-in-out_infinite_1s]">
                 <ShieldCheck className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>

              {/* Decorative Dots */}
              <div className="absolute top-4 left-10 w-3 h-3 bg-[#FACC15] rounded-full shadow-sm animate-pulse"></div>
              <div className="absolute bottom-4 right-16 w-2 h-2 bg-white/60 rounded-full shadow-sm"></div>
              <div className="absolute top-1/2 -right-2 w-1.5 h-1.5 bg-white/40 rounded-full"></div>
            </div>
            {/* ================= End Flat Graphics ================= */}

            {/* Benefits */}
            <div className="mt-6 space-y-5">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 shadow-sm transition-transform hover:scale-105">
                      <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                    </span>
                    <span className="pt-0.5">
                      <span className="block text-[15px] font-bold text-white leading-tight">{benefit.title}</span>
                      <span className="mt-1 block text-xs text-blue-100 font-medium leading-relaxed">{benefit.description}</span>
                    </span>
                  </div>
                );
              })}
            </div>

          </div>
        </aside>

        {/* ================= RIGHT COLUMN: Form Area ================= */}
        <div className="relative w-full bg-white p-8 sm:p-12 lg:w-[55%] flex flex-col justify-start">
          
          {/* Subtle Right Column Accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.03),transparent_70%)] pointer-events-none"></div>

          <div className="mb-8 relative z-10">
            <h2 className="text-3xl sm:text-[2rem] font-black text-slate-900 tracking-tight">สร้างบัญชีผู้ใช้</h2>
            <p className="mt-2 font-medium text-slate-500 text-[15px]">กรอกข้อมูลด้านล่างเพื่อเข้าสู่ระบบ BKK AIR</p>
          </div>

          {success ? (
            <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in duration-500">
              <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border-[6px] border-emerald-50 bg-emerald-100 text-emerald-500 shadow-inner relative">
                <CheckCircle2 className="h-10 w-10 relative z-10" strokeWidth={2.5} aria-hidden="true" />
                <div className="absolute inset-0 rounded-full border-2 border-emerald-200 animate-ping opacity-20"></div>
              </div>
              <h3 className="mb-2 text-3xl font-black text-slate-900 tracking-tight">สมัครสมาชิกสำเร็จ!</h3>
              <p className="max-w-sm font-medium text-slate-500 mt-2">
                ยินดีต้อนรับสู่ BKK AIR คุณสามารถส่งคำขอและรอเจ้าหน้าที่ตรวจสอบเพื่อติดต่อกลับได้เลย
              </p>
              <button
                type="button"
                onClick={() => onNavigate?.("request")}
                className="mt-10 inline-flex h-14 items-center justify-center rounded-2xl bg-accent-orange px-8 text-base font-bold text-white shadow-lg shadow-orange-200/50 transition-all hover:-translate-y-1 hover:bg-accent-hover hover:shadow-orange-300/50"
              >
                เข้าสู่ระบบใช้งาน
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2 relative z-10">
              
              {/* Row 1: Name (Full Width) */}
              <div className="sm:col-span-2">
                <InputField
                  label="ชื่อ-นามสกุล (ตรงตามพาสปอร์ต)"
                  name="name"
                  icon={User}
                  placeholder="เช่น สมชาย ใจดี"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              {/* Row 2: Email & Phone (Split) */}
              <InputField
                label="อีเมล"
                name="email"
                type="email"
                icon={Mail}
                placeholder="อีเมลของคุณ"
                value={formData.email}
                onChange={handleChange}
              />
              <InputField
                label="เบอร์โทรศัพท์"
                name="phone"
                type="tel"
                icon={Phone}
                placeholder="เบอร์โทรศัพท์ของคุณ"
                value={formData.phone}
                onChange={handleChange}
              />

              {/* Row 3: Password & Confirm Password (Split) */}
              <InputField
                label="รหัสผ่าน"
                name="password"
                type="password"
                icon={Lock}
                placeholder="อย่างน้อย 6 ตัวอักษร"
                value={formData.password}
                onChange={handleChange}
              />
              <InputField
                label="ยืนยันรหัสผ่าน"
                name="confirmPassword"
                type="password"
                icon={Lock}
                placeholder="พิมพ์รหัสผ่านอีกครั้ง"
                value={formData.confirmPassword}
                onChange={handleChange}
              />

              {/* Checkbox Accept Terms and Privacy Policy */}
              <label className="sm:col-span-2 group flex items-start gap-3 cursor-pointer mt-2">
                <div className="relative flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 border-slate-300 bg-white transition-colors group-hover:border-primary-dark overflow-hidden mt-0.5">
                  <input
                    type="checkbox"
                    className="peer absolute h-full w-full cursor-pointer opacity-0"
                    checked={agreeTerms}
                    onChange={(e) => {
                      setAgreeTerms(e.target.checked);
                      setError("");
                    }}
                  />
                  <div className="absolute inset-0 bg-primary-dark opacity-0 transition-opacity peer-checked:opacity-100 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <p className="text-[13px] sm:text-[14px] font-medium text-slate-600 leading-relaxed">
                  ฉันได้อ่านและยอมรับ{' '}
                  <a href="#terms" className="text-primary-dark font-bold hover:underline underline-offset-2">ข้อตกลงการใช้งาน</a>
                  {' '}และ{' '}
                  <a href="#privacy" className="text-primary-dark font-bold hover:underline underline-offset-2">นโยบายความเป็นส่วนตัว</a>
                </p>
              </label>

              {/* Error Message */}
              {error && (
                <div className="sm:col-span-2 rounded-xl border border-red-100 bg-red-50 p-4 text-sm font-bold text-red-600 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
                  <ShieldCheck className="h-5 w-5 shrink-0" />
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <div className="mt-2 sm:col-span-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative flex h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-accent-orange px-6 text-base font-bold text-white shadow-lg shadow-orange-200/50 transition-all hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-orange-300/50 disabled:cursor-not-allowed disabled:opacity-70 disabled:transform-none"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      กำลังสร้างบัญชี...
                    </span>
                  ) : (
                    <>
                      ลงทะเบียนใช้งาน
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </>
                  )}
                </button>
              </div>

              {/* Login Link */}
              <p className="mt-2 text-center text-[15px] font-medium text-slate-500 sm:col-span-2">
                มีบัญชีผู้ใช้งานอยู่แล้ว?{" "}
                <button
                  type="button"
                  onClick={() => onNavigate?.("login")}
                  className="font-bold text-primary-dark underline underline-offset-4 decoration-blue-200 hover:decoration-primary-dark transition-colors"
                >
                  เข้าสู่ระบบ
                </button>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 3. Input Field Component
// ==========================================
function InputField({ label, name, type = "text", value, onChange, placeholder, icon: Icon }) {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = type === "password";
  const currentType = isPasswordField && showPassword ? "text" : type;

  return (
    <label className="group relative block w-full">
      <span className="mb-2 block text-[13px] font-bold text-slate-600 transition-colors group-focus-within:text-primary-dark">
        {label}
      </span>
      <span className="relative block">
        {Icon && (
          <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 transition-colors group-focus-within:text-primary-dark">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
        )}
        <input
          name={name}
          type={currentType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`h-14 w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 text-[15px] font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:bg-slate-100/70 focus:border-primary-dark focus:bg-white focus:shadow-[0_4px_20px_-4px_rgba(30,58,138,0.12)] focus:hover:bg-white ${
            Icon ? "pl-12" : "pl-4"
          } ${isPasswordField ? "pr-12" : "pr-4"}`}
        />
        {isPasswordField && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setShowPassword(!showPassword);
            }}
            className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 hover:text-primary-dark focus:outline-none transition-colors"
            title={showPassword ? "ซ่อนรหัสผ่าน" : "แสดงรหัสผ่าน"}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Eye className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        )}
      </span>
    </label>
  );
}
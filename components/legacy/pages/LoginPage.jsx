import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Lock,
  Mail,
  Plane,
  ShieldCheck,
  KeyRound,
  FileText,
  Eye,
  EyeOff
} from "lucide-react";
import React, { useState } from "react";

// ==========================================
// 1. Features Data
// ==========================================
const features = [
  {
    icon: ClipboardCheck,
    title: "สถานะคำขอ",
    text: "ดูข้อมูลและสถานะอัปเดตล่าสุด"
  },
  {
    icon: Plane,
    title: "เอกสารเพื่อวีซ่า",
    text: "ติดตามงานที่กำลังจัดเตรียม"
  },
  {
    icon: CheckCircle2,
    title: "ไม่ใช่การยืนยันตั๋วทันที",
    text: "ทุกคำขอยังต้องผ่านทีมงาน BKK AIR"
  }
];

// ==========================================
// 2. Main Login Page Component
// ==========================================
export default function LoginPage({ onNavigate }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.email || !formData.password) {
      setError("กรุณากรอกอีเมลและรหัสผ่าน");
      return;
    }

    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      onNavigate?.("portal"); // ไปหน้า portal หลังจาก login สำเร็จ (จำลอง)
    }, 700);
  }

  return (
    <section className="relative min-h-screen bg-[#F8FAFC] px-4 py-24 sm:px-8 lg:py-32 flex items-center justify-center font-sans selection:bg-blue-200 selection:text-blue-900">
      
      {/* Background Elements (Global) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-blue-100/40 blur-3xl translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-slate-200/50 blur-3xl -translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1100px] flex flex-col lg:flex-row overflow-hidden rounded-[2.5rem] bg-white shadow-[0_20px_60px_-15px_rgba(15,23,42,0.12)] border border-slate-100/80">
        
        {/* ================= LEFT COLUMN: Branding & Flat Graphics ================= */}
        <aside className="relative flex w-full flex-col justify-between overflow-hidden bg-gradient-to-br from-slate-800 to-slate-950 p-8 sm:p-12 lg:w-[45%] text-white">
          
          {/* Decorative Pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-50" />
          
          {/* Subtle light flares */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

          <div className="relative z-10 flex flex-col h-full justify-between">
            
            {/* Main Text (ชิดบนสุด ไม่มี Logo) */}
            <div className="mb-6">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-blue-200 shadow-sm">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                Customer portal
              </p>
              <h1 className="text-3xl font-black leading-[1.2] sm:text-[2.5rem] tracking-tight text-white">
                เข้าสู่ระบบเพื่อดู<br />คำขอของคุณ
              </h1>
              <p className="mt-4 text-[15px] font-medium leading-relaxed text-slate-300">
                ติดตามสถานะคำขอจองตั๋วเครื่องบินและใบจองโรงแรมสำหรับยื่นวีซ่า หลังทีมงานตรวจสอบและอัปเดตข้อมูลให้คุณ
              </p>
            </div>

            {/* ================= Flat Graphics Scene (Login / Security Theme) ================= */}
            <div className="relative w-full h-56 my-6 hidden sm:flex items-center justify-center">
              
              {/* Back Glow */}
              <div className="absolute w-48 h-48 bg-blue-500/10 rounded-full blur-2xl"></div>

              {/* White Portal Card (Center) */}
              <div className="absolute z-10 w-36 h-48 bg-white rounded-2xl shadow-xl shadow-black/20 flex flex-col items-center pt-6 pb-4 animate-[bounce_6s_ease-in-out_infinite]">
                 {/* Lock Icon Circle */}
                 <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 border-[3px] border-slate-100 shadow-inner">
                    <KeyRound className="w-7 h-7 text-slate-700" strokeWidth={2.5} />
                 </div>
                 {/* Text Mockups */}
                 <div className="w-20 h-2 bg-slate-200 rounded-full mb-3"></div>
                 <div className="w-16 h-1.5 bg-slate-200 rounded-full mb-4"></div>
                 {/* Decorative login button inside graphic */}
                 <div className="w-24 h-6 bg-primary-dark rounded-lg mt-auto opacity-90"></div>
              </div>

              {/* Verified Badge (Right Overlap) */}
              <div className="absolute z-20 right-6 sm:right-8 top-12 w-14 h-14 bg-[#22C55E] rounded-full shadow-lg shadow-emerald-500/30 flex items-center justify-center border-4 border-slate-900 animate-[bounce_5s_ease-in-out_infinite_0.5s]">
                 <CheckCircle2 className="w-7 h-7 text-white" strokeWidth={3} />
              </div>

              {/* Document/File Card (Left Bottom Overlap) */}
              <div className="absolute z-30 left-6 sm:left-10 bottom-8 w-24 h-16 bg-primary-dark rounded-xl shadow-lg shadow-blue-500/30 transform -rotate-12 flex items-center p-2.5 animate-[bounce_7s_ease-in-out_infinite_1s]">
                 <div className="bg-white/20 p-1.5 rounded-lg mr-2 shrink-0"><FileText className="w-4 h-4 text-white" /></div>
                 <div className="flex-1 space-y-1.5">
                    <div className="w-full h-1.5 bg-white/90 rounded-full"></div>
                    <div className="w-2/3 h-1.5 bg-white/60 rounded-full"></div>
                 </div>
              </div>

              {/* Decorative Dots */}
              <div className="absolute top-4 left-10 w-3 h-3 bg-blue-400 rounded-full shadow-sm animate-pulse"></div>
              <div className="absolute bottom-4 right-16 w-2 h-2 bg-white/40 rounded-full shadow-sm"></div>
              <div className="absolute top-1/2 -right-2 w-1.5 h-1.5 bg-white/20 rounded-full"></div>
            </div>
            {/* ================= End Flat Graphics ================= */}

            {/* Features List */}
            <div className="mt-6 space-y-4">
              {features.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div key={feat.title} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-sm transition-transform hover:scale-105">
                      <Icon className="h-4 w-4 text-blue-300" aria-hidden="true" />
                    </span>
                    <span className="pt-0.5">
                      <span className="block text-[15px] font-bold text-white leading-tight">{feat.title}</span>
                      <span className="mt-1 block text-xs text-slate-400 font-medium leading-relaxed">{feat.text}</span>
                    </span>
                  </div>
                );
              })}
            </div>

          </div>
        </aside>

        {/* ================= RIGHT COLUMN: Form Area ================= */}
        <div className="relative w-full bg-white p-8 pt-10 sm:p-12 sm:pt-14 lg:w-[55%] flex flex-col justify-start">
          
          {/* Subtle Right Column Accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.03),transparent_70%)] pointer-events-none"></div>

          <div className="mb-8 relative z-10">
            <h2 className="text-3xl sm:text-[2rem] font-black text-slate-900 tracking-tight">เข้าสู่ระบบ</h2>
            <p className="mt-2 font-medium text-slate-500 text-[15px]">สำหรับลูกค้าที่ต้องการติดตามคำขอและข้อมูลติดต่อ</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
            
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
              label="รหัสผ่าน"
              name="password"
              type="password"
              icon={Lock}
              placeholder="รหัสผ่านของคุณ"
              value={formData.password}
              onChange={handleChange}
            />

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between gap-4 text-[13px] sm:text-sm font-medium mt-2">
              <label className="inline-flex items-center gap-2 text-slate-500 cursor-pointer group">
                <div className="relative flex h-4 w-4 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded border-2 border-slate-300 bg-white transition-colors group-hover:border-primary-dark overflow-hidden">
                  <input type="checkbox" className="peer absolute h-full w-full cursor-pointer opacity-0" />
                  <div className="absolute inset-0 bg-primary-dark opacity-0 transition-opacity peer-checked:opacity-100 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <span>จดจำฉันไว้</span>
              </label>
              <button type="button" className="font-bold text-primary-dark underline-offset-4 hover:underline transition-all">
                ลืมรหัสผ่าน?
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <div className="rounded-xl border border-red-100 bg-red-50 p-4 text-sm font-bold text-red-600 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
                 <ShieldCheck className="h-5 w-5 shrink-0" />
                 {error}
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="group relative flex h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-primary-dark px-6 text-base font-bold text-white shadow-lg shadow-blue-200/50 transition-all hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-blue-300/50 disabled:cursor-not-allowed disabled:opacity-70 disabled:transform-none"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    กำลังเข้าสู่ระบบ...
                  </span>
                ) : (
                  <>
                    เข้าสู่ Customer Portal
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </>
                )}
              </button>
            </div>

            {/* Register Link */}
            <p className="mt-4 text-center text-[15px] font-medium text-slate-500">
              ยังไม่มีบัญชี?{" "}
              <button
                type="button"
                onClick={() => onNavigate?.("register")}
                className="font-bold text-accent-orange underline underline-offset-4 decoration-orange-200 hover:decoration-accent-orange transition-colors"
              >
                สมัครสมาชิก
              </button>
            </p>
          </form>
          
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
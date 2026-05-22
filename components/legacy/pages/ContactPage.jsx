import {
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquare,
  Phone,
  Send
} from "lucide-react";
import { useState } from "react";

const inquiryTypeOptions = [
  { value: "package_inquiry", label: "สอบถามแพ็กเกจ" },
  { value: "order_tracking", label: "ตรวจสอบสถานะคำขอ" },
  { value: "flight_reservation", label: "ใบจองตั๋วเครื่องบิน" },
  { value: "hotel_reservation", label: "ใบจองโรงแรม" },
  { value: "travel_itinerary", label: "แผนการเดินทาง" },
  { value: "travel_insurance", label: "ประกันการเดินทาง" },
  { value: "urgent_request", label: "เอกสารเร่งด่วน (Express)" },
  { value: "document_issue", label: "แจ้งปัญหาเอกสาร" },
  { value: "data_update", label: "แก้ไขข้อมูล" },
  { value: "payment_issue", label: "ปัญหาการชำระเงิน" },
  { value: "business_partnership", label: "ความร่วมมือทางธุรกิจ" },
  { value: "other", label: "อื่น ๆ" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "package_inquiry",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    window.setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#FAFAFA] px-5 pb-16 pt-24 font-sans sm:px-8 lg:px-12">
      {/* ================= Background Decoration ================= */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-[500px] w-[500px] rounded-full bg-orange-100/30 blur-3xl" />
        <div
          className="absolute left-1/3 top-1/2 h-32 w-32 opacity-20"
          style={{ backgroundImage: "radial-gradient(#1E3A8A 2.5px, transparent 2.5px)", backgroundSize: "20px 20px" }}
        ></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ================= Header Section ================= */}
        <div className="mb-12 text-center lg:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-orange-100 bg-orange-50 px-4 py-1.5 text-sm font-extrabold uppercase tracking-wide text-accent-orange shadow-sm">
            <MessageSquare className="h-4 w-4" aria-hidden="true" />
            Get in touch
          </div>
          <h1 className="text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            ติดต่อสอบถาม<br className="sm:hidden" />
            <span className="text-primary-dark">ทีมงาน BKK AIR</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg font-medium text-slate-600">
            หากคุณมีข้อสงสัยเกี่ยวกับบริการวีซ่าหรือต้องการความช่วยเหลือ <br className="hidden sm:block" />
            ทีมงานผู้เชี่ยวชาญของเราพร้อมดูแลคุณในทุกย่างก้าว
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* ================= LEFT SIDE: Contact Info & Illustration ================= */}
          <div className="flex flex-col gap-8 lg:col-span-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <ContactInfoCard
                icon={Phone}
                title="ช่องทางติดต่อหลัก"
                content="LINE: @823lateh"
                subContent="Monday-Saturday 09:00-18:00 (Thailand Time)"
                color="border-blue-100 bg-blue-50 text-blue-600"
              />
              <ContactInfoCard
                icon={MessageCircle}
                title="LINE Official"
                content="@823lateh"
                subContent="ตอบกลับไวภายใน 30 นาที"
                color="border-emerald-100 bg-emerald-50 text-emerald-600"
              />
              <ContactInfoCard
                icon={Mail}
                title="อีเมล"
                content="info@bkkair.com"
                subContent="พร้อมตอบกลับภายใน 24 ชม."
                color="border-orange-100 bg-orange-50 text-orange-600"
              />
              <ContactInfoCard
                icon={MapPin}
                title="ที่ตั้งสำนักงาน"
                content="Bangkok, Thailand"
                subContent="นัดหมายล่วงหน้าก่อนเข้าพบ"
                color="border-purple-100 bg-purple-50 text-purple-600"
              />
            </div>

            <div className="relative mt-4 hidden overflow-visible lg:block">
              <svg viewBox="0 0 400 300" className="h-auto w-full drop-shadow-2xl" aria-hidden="true">
                <circle cx="200" cy="150" r="100" fill="#1E3A8A" opacity="0.05" />
                <rect x="50" y="240" width="300" height="10" rx="5" fill="#E2E8F0" />
                <path d="M70 240 L330 240 L340 260 L60 260 Z" fill="#CBD5E1" />

                <g transform="translate(140, 60)">
                  <path d="M20 180 C20 120 40 80 60 80 C80 80 100 120 100 180" fill="#1E3A8A" />
                  <circle cx="60" cy="50" r="35" fill="#FCD34D" />
                  <path d="M25 50 C25 10 95 10 95 50 C95 20 25 20 25 50" fill="#1E293B" />
                  <path d="M30 50 Q30 10 60 10 Q90 10 90 50" fill="none" stroke="#1E293B" strokeWidth="8" />
                  <rect x="25" y="45" width="10" height="20" rx="3" fill="#1E293B" />
                  <rect x="85" y="45" width="10" height="20" rx="3" fill="#1E293B" />
                  <path d="M85 55 Q70 70 65 70" fill="none" stroke="#1E293B" strokeWidth="2" />
                  <circle cx="50" cy="50" r="2" fill="#1E293B" />
                  <circle cx="70" cy="50" r="2" fill="#1E293B" />
                  <path d="M55 65 Q60 70 65 65" fill="none" stroke="#1E293B" strokeLinecap="round" strokeWidth="2" />
                </g>

                <g className="animate-bounce" style={{ animationDuration: "3s" }}>
                  <rect x="250" y="80" width="80" height="40" rx="15" fill="white" />
                  <path d="M265 95 H315" stroke="#E2E8F0" strokeLinecap="round" strokeWidth="4" />
                  <path d="M265 105 H295" stroke="#E2E8F0" strokeLinecap="round" strokeWidth="4" />
                  <circle cx="330" cy="80" r="10" fill="#F97316" />
                  <path d="M327 80 L333 80 M330 77 L330 83" stroke="white" strokeWidth="2" />
                </g>

                <g className="animate-bounce" style={{ animationDuration: "4s", animationDelay: "1s" }}>
                  <rect x="40" y="120" width="100" height="50" rx="15" fill="white" />
                  <circle cx="65" cy="145" r="12" fill="#1E3A8A" />
                  <path d="M62 145 L68 145" stroke="white" strokeWidth="2" />
                  <rect x="85" y="140" width="40" height="4" rx="2" fill="#CBD5E1" />
                  <rect x="85" y="148" width="30" height="4" rx="2" fill="#CBD5E1" />
                </g>
              </svg>
            </div>
          </div>

          {/* ================= RIGHT SIDE: Contact Form ================= */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-50 bg-white p-6 shadow-[0_20px_50px_-12px_rgba(37,99,235,0.1)] sm:p-10 lg:p-12">
              <div className="absolute right-0 top-0 z-0 h-40 w-40 rounded-bl-[100%] bg-blue-50/50" />
              <div className="absolute -bottom-8 -left-8 z-0 h-32 w-32 rounded-tr-[100%] bg-orange-50/50" />

              <div className="relative z-10">
                {success ? (
                  <div className="flex animate-fade-in flex-col items-center justify-center py-20 text-center">
                    <div className="mb-8 flex h-24 w-24 rotate-6 items-center justify-center rounded-[2rem] border-4 border-emerald-100 bg-emerald-50 text-emerald-500 shadow-inner transition-transform">
                      <CheckCircle2 className="h-12 w-12" />
                    </div>
                    <h3 className="mb-3 text-3xl font-black text-slate-900">ส่งข้อความเรียบร้อย!</h3>
                    <p className="mx-auto max-w-sm font-medium text-slate-600">
                      ขอบคุณสำหรับการติดต่อ ทีมงาน BKK AIR จะตรวจสอบข้อความและติดต่อกลับคุณโดยเร็วที่สุดครับ
                    </p>
                    <button type="button" onClick={() => setSuccess(false)} className="mt-8 font-bold text-primary-dark hover:underline">
                      ส่งข้อความใหม่
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid gap-5 sm:gap-6">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                      <InputField
                        label="ชื่อ-นามสกุล"
                        name="name"
                        placeholder="ระบุชื่อของคุณ"
                        required
                        value={formData.name}
                        onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                      />
                      <InputField
                        label="อีเมลติดต่อ"
                        name="email"
                        type="email"
                        placeholder="อีเมลของคุณ"
                        required
                        value={formData.email}
                        onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="group block w-full">
                        <span className="mb-2 block text-xs font-black uppercase tracking-wider text-slate-700 transition-colors group-focus-within:text-[#2563EB]">
                          หัวข้อที่ต้องการติดต่อ
                        </span>
                        <select
                          name="inquiryType"
                          className="h-12 w-full cursor-pointer appearance-none rounded-2xl border-2 border-transparent bg-slate-50 px-4 text-sm font-bold text-slate-900 outline-none transition-all hover:bg-slate-100/50 focus:border-primary-dark focus:bg-white"
                          value={formData.subject}
                          onChange={(event) => setFormData({ ...formData, subject: event.target.value })}
                        >
                          {inquiryTypeOptions.map((item) => (
                            <option key={item.value} value={item.value}>{item.label}</option>
                          ))}
                        </select>
                        <p className="mt-2 text-xs font-bold text-slate-500">เลือกหัวข้อที่ใกล้เคียงกับคำถามของคุณมากที่สุด</p>
                      </label>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="group block w-full">
                        <span className="mb-2 block text-xs font-black uppercase tracking-wider text-slate-700 transition-colors group-focus-within:text-[#2563EB]">
                          ข้อความของคุณ
                        </span>
                        <textarea
                          rows="5"
                          placeholder="พิมพ์ข้อความที่ต้องการสอบถาม..."
                          className="w-full resize-none rounded-2xl border-2 border-transparent bg-slate-50 p-4 text-sm font-bold text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:bg-slate-100/50 focus:border-primary-dark focus:bg-white"
                          required
                          value={formData.message}
                          onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                        ></textarea>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="group relative inline-flex min-h-[56px] w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-accent-orange px-8 text-base font-black text-white shadow-xl shadow-orange-200/50 transition-all hover:-translate-y-1 hover:bg-accent-hover hover:shadow-orange-300/50 disabled:opacity-70"
                    >
                      {loading ? (
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
                      ) : (
                        <>
                          ส่งข้อความหาเรา
                          <Send className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </>
                      )}
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-100 bg-white/80 px-5 py-4 text-sm font-semibold text-slate-600">
              <p className="text-xs font-black uppercase tracking-widest text-slate-500">Official Channels</p>
              <div className="mt-2 space-y-1.5">
                <p>
                  Official LINE OA: <a href="https://line.me/R/ti/p/@823lateh" className="font-black text-primary-dark underline decoration-slate-300 underline-offset-4">@823lateh</a>
                </p>
                <p>
                  Official Email: <a href="mailto:info@bkkair.com" className="font-black text-primary-dark underline decoration-slate-300 underline-offset-4">info@bkkair.com</a>
                </p>
                <p>
                  Official Website: <a href="https://bkkair.com" className="font-black text-primary-dark underline decoration-slate-300 underline-offset-4">bkkair.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactInfoCard({ icon: Icon, title, content, subContent, color }) {
  return (
    <div className={`group flex items-start gap-4 rounded-3xl border-2 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${color}`}>
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm transition-transform group-hover:scale-110 group-hover:rotate-6">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="text-xs font-black uppercase tracking-wider opacity-60">{title}</h3>
        <p className="mt-1 text-base font-black leading-tight text-slate-900 transition-colors group-hover:text-primary-dark">{content}</p>
        <p className="mt-1 text-xs font-bold opacity-60">{subContent}</p>
      </div>
    </div>
  );
}

function InputField({ label, name, type = "text", placeholder, required, value, onChange }) {
  return (
    <label className="group block w-full">
      <span className="mb-2 block text-xs font-black uppercase tracking-wider text-slate-700 transition-colors group-focus-within:text-primary-dark">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className="h-12 w-full rounded-2xl border-2 border-transparent bg-slate-50 px-4 text-sm font-bold text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:bg-slate-100/50 focus:border-primary-dark focus:bg-white"
      />
    </label>
  );
}


import { LockKeyhole, Mail, MapPin, MessageCircle } from "lucide-react";
import Logo from "./Logo.jsx";

const serviceLinks = [
  { label: "แพ็กเกจและราคา", href: "/packages" },
  { label: "วิธีสั่งซื้อ", href: "/how-it-works" },
  { label: "คำถามที่พบบ่อย", href: "/faq" },
  { label: "ติดต่อเรา", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
];

const countryLinks = [
  { label: "Schengen", href: "/visa/schengen" },
  { label: "UK", href: "/visa/uk" },
  { label: "USA", href: "/visa/usa" },
  { label: "Canada", href: "/visa/canada" },
  { label: "Australia", href: "/visa/australia" },
  { label: "Japan", href: "/visa/japan" },
  { label: "Korea", href: "/visa/korea" },
];

function FooterAnchor({ href, children }) {
  return (
    <a href={href} className="group flex items-center text-slate-400 transition-all duration-300 hover:text-white">
      <span className="mr-2 h-1.5 w-1.5 scale-0 rounded-full bg-[#FF5722] opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"></span>
      <span className="transition-transform duration-300 group-hover:translate-x-1">{children}</span>
    </a>
  );
}

export default function Footer({ onNavigate }) {
  function handleLogoClick() {
    window.location.href = "/";
  }

  function handleAdminLogin() {
    onNavigate?.("admin");
  }

  return (
    <footer id="contact" className="relative mt-14 overflow-hidden rounded-t-[3rem] bg-[#0F172A] pb-8 pt-12 font-sans text-slate-300 shadow-2xl sm:rounded-t-[4rem] lg:pt-14">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#2563EB] opacity-20 blur-[100px]" />
        <div className="absolute -right-20 bottom-0 h-[400px] w-[400px] rounded-full bg-[#FF5722] opacity-10 blur-[80px]" />
        <div className="absolute right-10 top-20 h-40 w-40 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.45)_2px,transparent_0)] bg-[length:20px_20px] opacity-10"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-7">
          <section aria-label="BKK AIR" className="lg:col-span-4 lg:pr-8">
            <Logo onClick={handleLogoClick} variant="footer" />
            <p className="mt-4 text-sm font-medium leading-relaxed text-slate-400">
              บริการจัดเตรียมเอกสารสนับสนุนการยื่นวีซ่าสำหรับนักเดินทางชาวไทย ดูแลโดยทีมงานจริง ทุกคำขอตรวจสอบก่อนดำเนินการ
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="https://facebook.com" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"><span className="font-bold">fb</span></a>
              <a href="https://instagram.com" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"><span className="font-bold">ig</span></a>
              <a href="https://line.me/R/ti/p/@823lateh" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#00B900]"><span className="text-xs font-bold">LINE</span></a>
            </div>
          </section>

          <nav aria-label="ลิงก์หลัก" className="lg:col-span-2">
            <h2 className="text-base font-black uppercase tracking-wider text-white">ลิงก์หลัก</h2>
            <div className="mt-4 h-1 w-10 rounded-full bg-[#FF5722]"></div>
            <ul className="mt-5 space-y-3 text-sm font-medium">
              {serviceLinks.map((link) => <li key={link.href}><FooterAnchor href={link.href}>{link.label}</FooterAnchor></li>)}
            </ul>
          </nav>

          <nav aria-label="ประเทศที่รองรับ" className="lg:col-span-3">
            <h2 className="text-base font-black uppercase tracking-wider text-white">ประเทศที่รองรับ</h2>
            <div className="mt-4 h-1 w-10 rounded-full bg-[#2563EB]"></div>
            <ul className="mt-5 grid grid-cols-2 gap-3 text-sm font-medium">
              {countryLinks.map((link) => <li key={link.href}><FooterAnchor href={link.href}>{link.label}</FooterAnchor></li>)}
            </ul>
          </nav>

          <address className="not-italic lg:col-span-3">
            <h2 className="text-base font-black uppercase tracking-wider text-white">ติดต่อเรา</h2>
            <div className="mt-4 h-1 w-10 rounded-full bg-emerald-500"></div>
            <div className="mt-5 space-y-4 text-sm font-medium">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#2563EB]" />
                <a href="mailto:info@bkkair.com" className="transition-colors hover:text-white">info@bkkair.com</a>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#00B900]" />
                <p>Line OA: <span className="text-white">@823lateh</span></p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#FF5722]" />
                <p className="leading-relaxed">กรุงเทพมหานคร<br />ประเทศไทย</p>
              </div>
            </div>
          </address>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-800 bg-white/5 px-6 py-4">
          <p className="text-center text-xs leading-relaxed text-slate-500">
            BKK AIR ให้บริการจัดเตรียมเอกสารสนับสนุนวีซ่าเท่านั้น ไม่ใช่สถานทูต ไม่ใช่ตัวแทนวีซ่า และไม่รับประกันการอนุมัติวีซ่า
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 text-sm font-medium text-slate-500 md:flex-row">
          <p>© 2026 BKK AIR Co., Ltd. สงวนลิขสิทธิ์ทุกประการ</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {legalLinks.map((link) => <a key={link.href} href={link.href} className="transition-colors hover:text-white">{link.label}</a>)}
            <span className="h-1 w-1 rounded-full bg-slate-700"></span>
            <button type="button" onClick={handleAdminLogin} className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
              <LockKeyhole className="h-3.5 w-3.5" aria-hidden="true" />
              Admin Login
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

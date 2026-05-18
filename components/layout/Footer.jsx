import { Clock, LockKeyhole, Mail, MapPin, MessageCircle } from "lucide-react";
import Logo from "./Logo.jsx";

const servicesLinks = [
  { label: "ใบจองตั๋วเครื่องบินยื่นวีซ่า", href: "/packages" },
  { label: "ใบจองโรงแรมยื่นวีซ่า", href: "/packages" },
  { label: "แผนการเดินทาง", href: "/packages" },
  { label: "ประกันการเดินทาง", href: "/packages" },
  { label: "ชุดเอกสารครบเซ็ต", href: "/packages" },
];

const infoLinks = [
  { label: "เกี่ยวกับเรา", href: "/contact" },
  { label: "วิธีการสั่งซื้อ", href: "/how-it-works" },
  { label: "คำถามที่พบบ่อย", href: "/faq" },
  { label: "ติดต่อเรา", href: "/contact" },
];

const legalLinks = [
  { label: "นโยบายความเป็นส่วนตัว", href: "/privacy-policy" },
  { label: "ข้อกำหนดการใช้บริการ", href: "/terms" },
];

function FooterAnchor({ href, children }) {
  return (
    <a
      href={href}
      className="group flex items-center text-slate-400 transition-all duration-300 hover:text-white"
    >
      <span className="mr-2 h-1.5 w-1.5 scale-0 rounded-full bg-accent-orange opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"></span>
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
    <footer
      id="contact"
      className="relative mt-16 overflow-hidden rounded-t-[3rem] bg-primary-navy pb-10 pt-14 font-sans text-slate-300 shadow-2xl sm:rounded-t-[4rem] md:pb-12 md:pt-16"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-primary-dark opacity-20 blur-[100px]" />
        <div className="absolute -right-20 bottom-0 h-[400px] w-[400px] rounded-full bg-accent-orange opacity-10 blur-[80px]" />
        <div className="absolute right-10 top-20 h-40 w-40 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.45)_2px,transparent_0)] bg-[length:20px_20px] opacity-10"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Main Grid */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <section aria-label="BKK AIR">
            <Logo onClick={handleLogoClick} variant="footer" />
            <p className="mt-4 text-sm font-medium leading-relaxed text-slate-400">
              บริการจัดเตรียมเอกสารสนับสนุนวีซ่า สําหรับนักเดินทางชาวไทย ส่ง{" "}
              <strong className="font-semibold text-slate-300">PDF พร้อมยื่นสถานทูต</strong>{" "}
              ภายใน 24 ชั่วโมง
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://line.me/R/ti/p/@823lateh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LINE @823lateh"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#00B900]"
              >
                <span className="text-xs font-black">LINE</span>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-blue-600"
              >
                <span className="font-bold">fb</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-pink-600"
              >
                <span className="font-bold">ig</span>
              </a>
            </div>
          </section>

          <nav aria-label="บริการของเรา">
            <h2 className="text-base font-black uppercase tracking-wider text-white">บริการ</h2>
            <div className="mt-4 h-1 w-10 rounded-full bg-accent-orange"></div>
            <ul className="mt-5 space-y-3 text-sm font-medium">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <FooterAnchor href={link.href}>{link.label}</FooterAnchor>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="ข้อมูลบริษัท">
            <h2 className="text-base font-black uppercase tracking-wider text-white">ข้อมูล</h2>
            <div className="mt-4 h-1 w-10 rounded-full bg-primary-dark"></div>
            <ul className="mt-5 space-y-3 text-sm font-medium">
              {infoLinks.map((link) => (
                <li key={link.label}>
                  <FooterAnchor href={link.href}>{link.label}</FooterAnchor>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-label="Contact">
            <h2 className="text-base font-black uppercase tracking-wider text-white">ติดต่อ</h2>
            <div className="mt-4 h-1 w-10 rounded-full bg-emerald-500"></div>
            <ul className="mt-5 space-y-4 text-sm font-medium">
              <li className="flex items-center gap-3 text-slate-400 transition-colors hover:text-white">
                <MessageCircle className="h-5 w-5 shrink-0 text-[#00B900]" />
                <a
                  href="https://line.me/R/ti/p/@823lateh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  LINE: <span className="font-semibold text-white">@823lateh</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400 transition-colors hover:text-white">
                <Mail className="h-5 w-5 shrink-0 text-primary-dark" />
                <a href="mailto:info@bkkair.com" className="transition-colors hover:text-white">
                  info@bkkair.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400 transition-colors hover:text-white">
                <Clock className="h-5 w-5 shrink-0 text-amber-400" />
                <p>
                  จันทร์-เสาร์ <span className="font-semibold text-white">09:00-18:00 น.</span>
                </p>
              </li>
              <li className="flex items-center gap-3 text-slate-400 transition-colors hover:text-white">
                <MapPin className="h-5 w-5 shrink-0 text-accent-orange" />
                <p>กรุงเทพมหานคร, ประเทศไทย</p>
              </li>
            </ul>
          </section>
        </div>

        {/* ── Legal Disclaimer ── */}
        <div className="mt-10 rounded-2xl border border-slate-800 bg-white/5 px-6 py-4">
          <p className="text-center text-xs leading-relaxed text-slate-500">
            BKK AIR ให้บริการจัดเตรียม
            <strong className="text-slate-400">เอกสารสนับสนุนวีซ่า</strong>เท่านั้น
            เราไม่ใช่ตัวแทนวีซ่า ไม่มีความสัมพันธ์กับสถานทูต และไม่รับประกันการอนุมัติวีซ่า
            การอนุมัติวีซ่าเป็นดุลยพินิจของสถานทูตหรือสถานกงสุลในทุกกรณี
          </p>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 text-sm font-medium text-slate-500 md:flex-row">
          <p>© 2026 BKK AIR. สงวนลิขสิทธิ์ทุกประการ</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </a>
            ))}
            <span className="hidden h-1 w-1 rounded-full bg-slate-700 md:block" aria-hidden="true"></span>
            <button
              type="button"
              onClick={handleAdminLogin}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <LockKeyhole className="h-3.5 w-3.5" aria-hidden="true" />
              Admin
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}


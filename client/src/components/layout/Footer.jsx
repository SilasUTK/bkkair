import { LockKeyhole, Mail, MapPin, MessageCircle } from "lucide-react";
import Logo from "./Logo.jsx";

const serviceLinks = [
  { label: "บริการยื่นวีซ่าท่องเที่ยว", href: "#packages" },
  { label: "บริการยื่นวีซ่าธุรกิจ", href: "#packages" },
  { label: "บริการจองตั๋วเครื่องบิน", href: "#hero" },
  { label: "ประกันการเดินทาง", href: "#benefits" },
  { label: "แปลเอกสารรับรอง", href: "#timeline" },
];

const companyLinks = [
  { label: "เกี่ยวกับ BKK AIR", href: "#benefits" },
  { label: "ทีมงานของเรา", href: "#timeline" },
  { label: "ติดต่อเรา", href: "/contact", action: "contactPage" },
  { label: "ร่วมงานกับเรา", href: "#contact" },
  { label: "บล็อกและบทความ", href: "#faq" },
];

function handleAnchorClick(event, href) {
  const target = document.querySelector(href);
  if (!target) return;

  event.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState(null, "", href);
}

// ปรับแต่ง Link สำหรับ Dark Theme
function FooterAnchor({ action, href, children, onNavigate }) {
  function handleClick(event) {
    if (action) {
      event.preventDefault();
      onNavigate?.(action);
      return;
    }

    handleAnchorClick(event, href);
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className="group flex items-center text-slate-400 transition-all duration-300 hover:text-white"
    >
      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#FF5722] opacity-0 transition-all duration-300 group-hover:opacity-100 scale-0 group-hover:scale-100"></span>
      <span className="transition-transform duration-300 group-hover:translate-x-1">{children}</span>
    </a>
  );
}

export default function Footer({ onNavigate }) {
  function handleLogoClick() {
    const target = document.querySelector("#hero");
    if (!target) {
      onNavigate?.("home");
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", "#hero");
  }

  function handleAdminLogin() {
    onNavigate?.("admin");
  }

  function handlePrivacyClick(event) {
    event.preventDefault();
    onNavigate?.("privacy");
  }

  function handleTermsClick(event) {
    event.preventDefault();
    onNavigate?.("terms");
  }

  return (
    // เปลี่ยนมาใช้ Dark Theme (bg-slate-900) และเพิ่มขอบโค้งมนด้านบน (rounded-t-[3rem])
    <footer
      id="contact"
      className="relative mt-14 overflow-hidden rounded-t-[3rem] bg-[#0F172A] pt-12 pb-8 font-sans text-slate-300 shadow-2xl sm:rounded-t-[4rem] lg:pt-14"
    >
      {/* ================= Dark Flat Design Background Elements ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft Glowing Blobs */}
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#2563EB] opacity-20 blur-[100px]" />
        <div className="absolute -right-20 bottom-0 h-[400px] w-[400px] rounded-full bg-[#FF5722] opacity-10 blur-[80px]" />
        
        {/* Dotted Grid Pattern (Subtle in Dark Mode) */}
        <div className="absolute right-10 top-20 h-40 w-40 opacity-10" style={{ backgroundImage: 'radial-gradient(#FFFFFF 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* ================= Main Footer Content ================= */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-7">
          
          {/* Brand Info (Spans 4 columns) */}
          <section aria-label="BKK AIR" className="lg:col-span-4 lg:pr-8">
            <Logo onClick={handleLogoClick} variant="footer" />
            <p className="mt-4 text-sm leading-relaxed text-slate-400 font-medium">
              บริการจองตั๋วเครื่องบินและโรงแรมสำหรับยื่นวีซ่า โดยเจ้าหน้าที่ตรวจสอบและติดต่อกลับก่อนดำเนินการ ปลอดภัย มั่นใจได้ 100%
            </p>
            
            {/* Social or Badge Placeholder */}
            <div className="mt-6 flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer text-white">
                <span className="font-bold">fb</span>
              </div>
              <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer text-white">
                <span className="font-bold">ig</span>
              </div>
              <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00B900] transition-colors cursor-pointer text-white">
                <span className="font-bold text-xs">LINE</span>
              </div>
            </div>
          </section>

          {/* Links 1 (Spans 3 columns) */}
          <nav aria-label="บริการของเรา" className="lg:col-span-3">
            <h2 className="text-base font-black text-white uppercase tracking-wider">บริการของเรา</h2>
            <div className="mt-4 h-1 w-10 rounded-full bg-[#FF5722]"></div>
            <ul className="mt-5 space-y-3 text-sm font-medium">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <FooterAnchor href={link.href}>{link.label}</FooterAnchor>
                </li>
              ))}
            </ul>
          </nav>

          {/* Links 2 (Spans 2 columns) */}
          <nav aria-label="เกี่ยวกับบริษัท" className="lg:col-span-2">
            <h2 className="text-base font-black text-white uppercase tracking-wider">เกี่ยวกับบริษัท</h2>
            <div className="mt-4 h-1 w-10 rounded-full bg-[#2563EB]"></div>
            <ul className="mt-5 space-y-3 text-sm font-medium">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <FooterAnchor action={link.action} href={link.href} onNavigate={onNavigate}>{link.label}</FooterAnchor>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact (Spans 3 columns) */}
          <address className="not-italic lg:col-span-3">
            <h2 className="text-base font-black text-white uppercase tracking-wider">ติดต่อเรา</h2>
            <div className="mt-4 h-1 w-10 rounded-full bg-emerald-500"></div>
            
            <div className="mt-5 space-y-4 text-sm font-medium">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#2563EB]" />
                <a href="mailto:info@bkkair.com" className="hover:text-white transition-colors">info@bkkair.com</a>
              </div>
              
              <div className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#00B900]" />
                <p>Line OA: <span className="text-white">@823lateh</span></p>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#FF5722]" />
                <p className="leading-relaxed">
                  กรุงเทพมหานคร<br/>
                  ประเทศไทย<br/>
                </p>
              </div>
            </div>
          </address>
        </div>

        {/* ================= Bottom Copyright Bar ================= */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 text-sm font-medium text-slate-500 md:flex-row">
          <p>© 2026 BKK AIR Co., Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" onClick={handlePrivacyClick} className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <span className="h-1 w-1 rounded-full bg-slate-700"></span>
            <a href="/terms-of-service" onClick={handleTermsClick} className="transition-colors hover:text-white">
              Terms of Service
            </a>
            <span className="h-1 w-1 rounded-full bg-slate-700"></span>
            <button
              type="button"
              onClick={handleAdminLogin}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <LockKeyhole className="h-3.5 w-3.5" aria-hidden="true" />
              Admin Login
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

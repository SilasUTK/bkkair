import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo.jsx";

// ข้อมูลเมนูแบบ 2 ภาษา (TH / EN)
const linksData = {
  TH: [
    { label: "หน้าแรก", href: "#hero" },
    { label: "บริการของเรา", href: "#packages" },
    { label: "ขั้นตอน", href: "#timeline" },
    { label: "รีวิว", href: "#testimonials" },
    { label: "คำถามพบบ่อย", href: "#faq" },
    { label: "ติดต่อเรา", href: "/contact", action: "contactPage" }
  ],
  EN: [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#packages" },
    { label: "Process", href: "#timeline" },
    { label: "Reviews", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "/contact", action: "contactPage" }
  ]
};

export default function Navbar({ onNavigate }) {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("TH");

  const currentLinks = linksData[lang];

  function scrollToAnchor(href) {
    const sectionId = href.replace("#", "");
    const target = document.getElementById(sectionId) || (sectionId === "hero" ? document.getElementById("quick-request") : null);

    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleAnchorClick(event, href) {
    event.preventDefault();
    setOpen(false);

    const routeLink = currentLinks.find((link) => link.href === href && link.action);
    if (routeLink) {
      onNavigate?.(routeLink.action);
      return;
    }

    if (onNavigate && window.location.pathname !== "/") {
      onNavigate("home");
      window.setTimeout(() => scrollToAnchor(href), 50);
      return;
    }

    scrollToAnchor(href);
    window.history.replaceState(null, "", href);
  }

  function handleNavigation(action) {
    setOpen(false);
    onNavigate?.(action);
  }

  function handleLogoClick() {
    setOpen(false);

    if (onNavigate && window.location.pathname !== "/") {
      onNavigate("home");
      window.setTimeout(() => scrollToAnchor("#hero"), 50);
      return;
    }

    scrollToAnchor("#hero");
    window.history.replaceState(null, "", "#hero");
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b-2 border-slate-100 bg-white/90 backdrop-blur-lg font-sans transition-all duration-300">
      <div className="mx-auto flex h-20 sm:h-24 max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-12">
        
        <Logo onClick={handleLogoClick} />

        {/* ================= Desktop Navigation ================= */}
        <div className="hidden flex-1 items-center justify-end gap-8 lg:flex">
          <nav className="flex items-center gap-8" aria-label="Main navigation">
            {currentLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleAnchorClick(event, link.href)}
                className="group relative text-[15px] font-extrabold text-slate-600 transition-colors hover:text-[#2563EB]"
              >
                {link.label}
                {/* Flat Design Hover Underline Accent */}
                <span className="absolute -bottom-2 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-[#FF5722] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 border-l-2 border-slate-100 pl-8">
            {/* ปุ่มสลับภาษา Desktop */}
            <button
              type="button"
              onClick={() => setLang(lang === "TH" ? "EN" : "TH")}
              className="flex items-center gap-1.5 px-2 text-sm font-extrabold text-slate-500 transition-colors hover:text-[#2563EB]"
            >
              <Globe className="h-4 w-4" />
              {lang}
            </button>

            <button 
              type="button" 
              onClick={() => handleNavigation("login")} 
              className="min-h-[40px] px-2 text-sm font-extrabold text-slate-500 transition-colors hover:text-[#2563EB]"
            >
              {lang === "TH" ? "เข้าสู่ระบบ" : "Login"}
            </button>
            <button
              type="button"
              onClick={() => handleNavigation("register")}
              className="inline-flex h-10 items-center justify-center rounded-full bg-[#FF5722] px-6 text-sm font-bold text-white shadow-md shadow-orange-200/50 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E64A19] hover:shadow-orange-300/50"
            >
              {lang === "TH" ? "สมัครสมาชิก" : "Sign Up"}
            </button>
          </div>
        </div>

        {/* ================= Mobile Menu Toggle ================= */}
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border-2 transition-all duration-300 lg:hidden ${
            open ? "border-[#2563EB] bg-blue-50 text-[#2563EB]" : "border-slate-100 bg-slate-50 text-slate-600 hover:border-blue-200 hover:text-[#2563EB]"
          }`}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      {/* ================= Mobile Menu Dropdown ================= */}
      <div 
        className={`absolute left-0 top-full w-full overflow-hidden bg-white shadow-2xl transition-all duration-300 ease-in-out lg:hidden ${
          open ? "max-h-[500px] border-b-2 border-slate-100 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-5 py-6 sm:px-8" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {currentLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleAnchorClick(event, link.href)}
                className="group flex items-center rounded-2xl px-4 py-3.5 text-base font-extrabold text-slate-700 transition-all hover:bg-blue-50 hover:text-[#2563EB] hover:pl-6"
              >
                {/* Small indicator dot for mobile links */}
                <span className="mr-3 h-2 w-2 rounded-full bg-slate-200 transition-colors group-hover:bg-[#FF5722]"></span>
                {link.label}
              </a>
            ))}
            
            <div className="my-2 h-px w-full bg-slate-100"></div>
            
            {/* ปุ่มสลับภาษา Mobile */}
            <div className="flex items-center justify-between px-4 py-2">
              <span className="text-sm font-bold text-slate-500">{lang === "TH" ? "เปลี่ยนภาษา" : "Language"}</span>
              <button
                onClick={() => setLang(lang === "TH" ? "EN" : "TH")}
                className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-1.5 text-sm font-extrabold text-slate-700 transition hover:bg-blue-50 hover:text-[#2563EB]"
              >
                <Globe className="h-4 w-4" />
                {lang === "TH" ? "English" : "ภาษาไทย"}
              </button>
            </div>

            <button 
              type="button" 
              onClick={() => handleNavigation("login")} 
              className="rounded-2xl px-4 py-3.5 text-left text-base font-extrabold text-slate-600 transition-all hover:bg-slate-50 hover:text-[#2563EB] hover:pl-6"
            >
              {lang === "TH" ? "เข้าสู่ระบบ (Login)" : "Login"}
            </button>
            <button
              type="button"
              onClick={() => handleNavigation("register")}
              className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-2xl bg-[#FF5722] px-5 text-sm font-bold text-white shadow-md shadow-orange-100/50 transition-all hover:bg-[#E64A19] active:scale-[0.98]"
            >
              {lang === "TH" ? "สมัครสมาชิก" : "Sign Up"}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

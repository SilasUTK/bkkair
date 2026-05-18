import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo.jsx";

const serviceDropdown = [
  { label: "ใบจองตั๋วเครื่องบิน", href: "/packages" },
  { label: "ใบจองโรงแรม", href: "/packages" },
  { label: "แผนการเดินทาง", href: "/packages" },
  { label: "ประกันการเดินทาง", href: "/packages" },
];

const countryDropdown = [
  { label: "Schengen", href: "/visa/schengen" },
  { label: "UK", href: "/visa/uk" },
  { label: "USA", href: "/visa/usa" },
  { label: "Canada", href: "/visa/canada" },
  { label: "Australia", href: "/visa/australia" },
  { label: "Japan", href: "/visa/japan" },
  { label: "Korea", href: "/visa/korea" },
];

const mainLinks = [
  { label: "แพ็กเกจและราคา", href: "/packages" },
  { label: "คำถามที่พบบ่อย", href: "/faq" },
];

export default function Navbar({ onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const [mobileCountryOpen, setMobileCountryOpen] = useState(false);

  function scrollToAnchor(href) {
    const sectionId = href.replace("#", "");
    const target = document.getElementById(sectionId);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleLinkClick(event, href) {
    setMobileOpen(false);
    setMobileServiceOpen(false);
    setMobileCountryOpen(false);

    if (!href.startsWith("#")) return;

    event.preventDefault();

    if (onNavigate && window.location.pathname !== "/") {
      onNavigate("home");
      window.setTimeout(() => scrollToAnchor(href), 50);
      return;
    }

    scrollToAnchor(href);
    window.history.replaceState(null, "", href);
  }

  function handleLogoClick() {
    setMobileOpen(false);
    window.location.href = "/";
  }

  function handleContact() {
    setMobileOpen(false);
    window.location.href = "/contact";
  }

  function handleOrder() {
    setMobileOpen(false);
    window.location.href = "/order";
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-blue-100/70 bg-white/80 font-sans shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:h-[88px] lg:px-12">
        <Logo onClick={handleLogoClick} />

        <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex" aria-label="Main navigation">
          <div className="group relative">
            <button type="button" className="flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-[15px] font-extrabold text-slate-600 transition-colors hover:bg-blue-50/80 hover:text-[#2563EB]">
              บริการของเรา
              <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
            </button>
            <div className="pointer-events-none absolute left-1/2 top-full mt-2 w-52 -translate-x-1/2 translate-y-1 rounded-3xl border border-blue-100/70 bg-white/95 p-2 opacity-0 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
              {serviceDropdown.map((item) => (
                <a key={item.label} href={item.href} onClick={(e) => handleLinkClick(e, item.href)} className="block rounded-xl px-4 py-3 text-sm font-bold text-slate-600 transition-colors hover:bg-orange-50 hover:text-[#FF5722]">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="group relative">
            <button type="button" className="flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-[15px] font-extrabold text-slate-600 transition-colors hover:bg-blue-50/80 hover:text-[#2563EB]">
              ประเทศที่รองรับ
              <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
            </button>
            <div className="pointer-events-none absolute left-1/2 top-full mt-2 w-52 -translate-x-1/2 translate-y-1 rounded-3xl border border-blue-100/70 bg-white/95 p-2 opacity-0 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
              {countryDropdown.map((item) => (
                <a key={item.label} href={item.href} onClick={(e) => handleLinkClick(e, item.href)} className="block rounded-xl px-4 py-3 text-sm font-bold text-slate-600 transition-colors hover:bg-blue-50 hover:text-[#2563EB]">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {mainLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="group relative rounded-xl px-4 py-2.5 text-[15px] font-extrabold text-slate-600 transition-colors hover:bg-blue-50/80 hover:text-[#2563EB]">
              {link.label}
              <span className="absolute bottom-1.5 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#FF5722] transition-all duration-300 group-hover:w-4/5"></span>
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button type="button" onClick={handleContact} className="px-4 py-2.5 text-[15px] font-extrabold text-slate-600 transition-colors hover:text-[#2563EB]">
            ติดต่อเรา
          </button>
          <button type="button" onClick={handleOrder} className="inline-flex h-10 items-center justify-center rounded-full bg-[#FF5722] px-5 text-sm font-black text-white shadow-md shadow-orange-200/50 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E64A19] hover:shadow-orange-300/60 active:scale-[0.97]">
            สั่งเลย →
          </button>
        </div>

        <button type="button" onClick={() => setMobileOpen((v) => !v)} className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border-2 transition-all duration-300 lg:hidden ${mobileOpen ? "border-[#2563EB] bg-blue-50 text-[#2563EB]" : "border-slate-100 bg-slate-50 text-slate-600 hover:border-blue-200 hover:text-[#2563EB]"}`} aria-label="Toggle navigation menu" aria-expanded={mobileOpen}>
          {mobileOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      <div className={`absolute left-0 top-full w-full overflow-hidden bg-white/95 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 ease-in-out lg:hidden ${mobileOpen ? "max-h-[760px] border-b border-blue-100/70 opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="px-5 py-6 sm:px-8" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            <MobileDropdown title="บริการของเรา" open={mobileServiceOpen} onToggle={() => setMobileServiceOpen((v) => !v)} links={serviceDropdown} onLinkClick={handleLinkClick} accent="orange" />
            <MobileDropdown title="ประเทศที่รองรับ" open={mobileCountryOpen} onToggle={() => setMobileCountryOpen((v) => !v)} links={countryDropdown} onLinkClick={handleLinkClick} accent="blue" />

            {mainLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="group flex items-center rounded-2xl px-4 py-3.5 text-base font-extrabold text-slate-700 transition-all hover:bg-blue-50 hover:text-[#2563EB] hover:pl-6">
                <span className="mr-3 h-2 w-2 rounded-full bg-slate-200 transition-colors group-hover:bg-[#FF5722]"></span>
                {link.label}
              </a>
            ))}

            <div className="my-2 h-px w-full bg-slate-100"></div>
            <button type="button" onClick={handleContact} className="rounded-2xl px-4 py-3.5 text-left text-base font-extrabold text-slate-600 transition-all hover:bg-slate-50 hover:text-[#2563EB]">ติดต่อเรา</button>
            <button type="button" onClick={handleOrder} className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-2xl bg-[#FF5722] px-5 text-sm font-black text-white shadow-md shadow-orange-100/50 transition-all hover:bg-[#E64A19] active:scale-[0.98]">สั่งเลย →</button>
          </div>
        </nav>
      </div>
    </header>
  );
}

function MobileDropdown({ title, open, onToggle, links, onLinkClick, accent }) {
  const hoverClass = accent === "orange" ? "hover:bg-orange-50 hover:text-[#FF5722]" : "hover:bg-blue-50 hover:text-[#2563EB]";

  return (
    <div>
      <button type="button" onClick={onToggle} className="group flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-base font-extrabold text-slate-700 transition-all hover:bg-blue-50 hover:text-[#2563EB]">
        <span className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-slate-200 transition-colors group-hover:bg-[#FF5722]"></span>
          {title}
        </span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180 text-[#2563EB]" : ""}`} />
      </button>
      {open && (
        <div className="ml-9 mt-1 flex flex-col gap-0.5">
          {links.map((item) => (
            <a key={item.label} href={item.href} onClick={(e) => onLinkClick(e, item.href)} className={`rounded-xl px-4 py-3 text-sm font-bold text-slate-600 transition-colors ${hoverClass}`}>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

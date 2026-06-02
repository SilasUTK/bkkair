"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo.jsx";

const serviceDropdown = [
  { label: "บริการทั้งหมด", href: "/#services" },
  { label: "ทำไมต้องเลือก BKK AIR", href: "/#why-choose-us" },
  { label: "ขั้นตอนการสั่งซื้อ", href: "/#workflow" },
  { label: "ประเทศที่ให้บริการ", href: "/#countries" },
];

const countryDropdown = [
  { label: "ประเทศที่รองรับทั้งหมด", href: "/#countries" },
  { label: "สอบถามประเทศอื่น", href: "/contact" },
];

const mainLinks = [
  { label: "แพ็กเกจและราคา", href: "/packages", match: ["/packages"] },
  { label: "คำถามที่พบบ่อย", href: "/faq", match: ["/faq"] },
  { label: "สอบถามผ่าน LINE", href: "/contact", match: ["/contact"] },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const [mobileCountryOpen, setMobileCountryOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 12);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 1024) {
        closeMobileMenu();
      }
    }

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    function onKeyDown(event) {
      if (event.key === "Escape") closeMobileMenu();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  function closeMobileMenu() {
    setMobileOpen(false);
    setMobileServiceOpen(false);
    setMobileCountryOpen(false);
  }

  function isActive(link) {
    return Boolean(link.match?.includes(pathname));
  }

  return (
    <header
      data-navbar="primary"
      className={`fixed inset-x-0 top-0 z-[90] w-full font-sans transition duration-300 ${
        isScrolled
          ? "border-b border-white/10 bg-slate-950/90 shadow-[0_16px_42px_rgba(2,6,23,0.4)] backdrop-blur-xl"
          : "bg-gradient-to-b from-slate-950/70 to-slate-950/10 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center gap-3 px-5 sm:px-8 lg:h-[92px] lg:px-12">
        <Logo variant="navbar" className="shrink-0 focus:ring-orange-400 focus:ring-offset-0" />

        <nav data-desktop-nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          <DesktopDropdown title="บริการของเรา" links={serviceDropdown} onLinkClick={closeMobileMenu} />
          <DesktopDropdown title="ประเทศที่รองรับ" links={countryDropdown} onLinkClick={closeMobileMenu} />

          {mainLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={closeMobileMenu}
              aria-current={isActive(link) ? "page" : undefined}
              className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                isActive(link)
                  ? "bg-white/10 text-orange-300"
                  : "text-white/90 hover:bg-white/10 hover:text-orange-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          data-desktop-cta
          href="/order"
          className="ml-3 hidden h-11 items-center gap-2 rounded-full bg-orange-500 px-6 text-sm font-bold text-white shadow-lg shadow-orange-950/25 transition hover:bg-orange-400 lg:inline-flex"
        >
          สั่งเลย
          <ArrowRightIcon className="h-4 w-4" />
        </Link>

        <Link
          href="/order"
          onClick={closeMobileMenu}
          className="ml-auto inline-flex h-10 items-center rounded-full bg-orange-500 px-3.5 text-xs font-bold text-white shadow-lg sm:px-4 lg:hidden"
        >
          ส่งคำขอ
        </Link>
        <button
          data-mobile-toggle
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-label="เปิดเมนู"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur-sm lg:hidden"
        >
          {mobileOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      <div data-mobile-panel className={`overflow-hidden bg-slate-950/95 backdrop-blur-xl transition-all lg:hidden ${mobileOpen ? "max-h-[calc(100vh-5rem)] border-t border-white/10 opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="max-h-[calc(100vh-5rem)] overflow-y-auto px-5 py-5" aria-label="Mobile navigation">
          <MobileDropdown title="บริการของเรา" open={mobileServiceOpen} onToggle={() => setMobileServiceOpen((open) => !open)} links={serviceDropdown} onLinkClick={closeMobileMenu} />
          <MobileDropdown title="ประเทศที่รองรับ" open={mobileCountryOpen} onToggle={() => setMobileCountryOpen((open) => !open)} links={countryDropdown} onLinkClick={closeMobileMenu} />

          {mainLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={closeMobileMenu}
              aria-current={isActive(link) ? "page" : undefined}
              className={`block rounded-xl px-4 py-3.5 text-base font-semibold ${
                isActive(link) ? "bg-white/10 text-orange-300" : "text-white/90 hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/order"
            onClick={closeMobileMenu}
            className="mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-orange-500 text-sm font-bold text-white"
          >
            สั่งเลย
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </nav>
      </div>
    </header>
  );
}

function DesktopDropdown({ title, links, onLinkClick }) {
  return (
    <div className="group relative">
      <button type="button" className="flex items-center gap-1 rounded-xl px-4 py-2.5 text-sm font-semibold text-white/90 transition hover:bg-white/10 hover:text-orange-300">
        {title}
        <DropdownIcon className="h-4 w-4" />
      </button>
      <div className="pointer-events-none absolute left-1/2 top-full mt-2 w-60 -translate-x-1/2 translate-y-1 rounded-2xl border border-white/10 bg-slate-900/95 p-2 opacity-0 shadow-2xl backdrop-blur transition group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={onLinkClick}
            className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/10 hover:text-orange-300"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function MobileDropdown({ title, open, onToggle, links, onLinkClick }) {
  return (
    <div>
      <button type="button" onClick={onToggle} className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold text-white/90 hover:bg-white/10">
        {title}
        <DropdownIcon className={`h-4 w-4 transition ${open ? "rotate-180 text-orange-400" : ""}`} />
      </button>
      {open && (
        <div className="mb-2 ml-4 border-l border-white/10 pl-3">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={onLinkClick}
              className="block rounded-xl px-4 py-3 text-sm text-slate-200 hover:bg-white/10 hover:text-orange-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MenuIcon({ className = "" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" /></svg>;
}

function CloseIcon({ className = "" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" /></svg>;
}

function DropdownIcon({ className = "" }) {
  return <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.2 7.7a.75.75 0 0 1 1.06 0L10 11.44l3.74-3.74a.75.75 0 1 1 1.06 1.06l-4.27 4.27a.75.75 0 0 1-1.06 0L5.2 8.76a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" /></svg>;
}

function ArrowRightIcon({ className = "" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16M13 5l7 7-7 7" /></svg>;
}

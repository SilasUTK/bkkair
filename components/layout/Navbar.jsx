"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FileCheck, Home, MessageCircle, Tags } from "lucide-react";
import Logo from "./Logo.jsx";

const navLinks = [
  { label: "หน้าแรก", href: "/", match: ["/"], icon: Home },
  { label: "บริการ", href: "/#services", icon: FileCheck },
  { label: "แพ็กเกจ", href: "/packages", match: ["/packages"], icon: Tags },
  { label: "ติดต่อ", href: "/contact", match: ["/contact"], icon: MessageCircle },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 96);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    }

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    function onKeyDown(event) {
      if (event.key === "Escape") setMobileOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  function closeMobileMenu() {
    setMobileOpen(false);
  }

  function isActive(link) {
    return Boolean(link.match?.includes(pathname));
  }

  return (
    <header
      data-navbar="primary"
      className={`fixed inset-x-0 top-0 z-[90] w-full border-b font-sans transition-[background-color,color,border-color,box-shadow] duration-[250ms] ease-in-out ${
        isScrolled
          ? "border-slate-900/[0.08] bg-white/[0.86] text-slate-950 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl"
          : "border-white/[0.08] bg-[rgba(7,13,31,0.50)] text-white backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-7xl items-center px-5 sm:px-8 lg:h-20 lg:px-12">
        <Logo variant="navbar" className="shrink-0 focus:ring-[#FFB347] focus:ring-offset-0" />

        <nav data-desktop-nav className="ml-auto hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              href={link.href}
              active={isActive(link)}
              scrolled={isScrolled}
              icon={link.icon}
              onClick={closeMobileMenu}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          data-mobile-toggle
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-label="เปิดเมนู"
          className={`ml-auto inline-flex h-11 w-11 items-center justify-center rounded-xl border shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md transition-[background-color,color,border-color] duration-[250ms] ease-in-out lg:hidden ${
            isScrolled
              ? "border-slate-900/10 bg-slate-950/[0.04] text-slate-950 hover:border-slate-900/20 hover:bg-slate-950/[0.07]"
              : "border-white/15 bg-white/[0.06] text-white/90 hover:border-white/25 hover:bg-white/[0.09]"
          }`}
        >
          {mobileOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      <div
        data-mobile-panel
        className={`overflow-hidden border-t backdrop-blur-xl transition-all lg:hidden ${
          isScrolled ? "border-slate-900/10 bg-white/[0.92]" : "border-white/10 bg-slate-950/94"
        } ${
          mobileOpen ? "max-h-[calc(100vh-4.75rem)] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8" aria-label="Mobile navigation">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMobileMenu}
                aria-current={isActive(link) ? "page" : undefined}
                className={`group relative inline-flex items-center gap-2 rounded-lg px-2 py-3 text-[15px] font-semibold transition-colors duration-[250ms] ease-in-out ${
                  isScrolled
                    ? isActive(link)
                      ? "text-[#F97316]"
                      : "text-[#102033] hover:text-[#2563EB]"
                    : isActive(link)
                      ? "text-[#FFB347]"
                      : "text-white/[0.82] hover:text-[#4DB8FF]"
                }`}
              >
                <Icon className="h-[18px] w-[18px] shrink-0 stroke-[2] transition-transform duration-[250ms] ease-in-out group-hover:-translate-y-0.5" aria-hidden="true" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

function NavLink({ href, active, scrolled, icon: Icon, onClick, children }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`group relative inline-flex items-center gap-[7px] py-2 text-[15px] font-semibold transition-[color,text-shadow] duration-[250ms] ease-in-out ${
        scrolled
          ? active
            ? "text-[#F97316]"
            : "text-[#102033] hover:text-[#2563EB]"
          : active
            ? "text-[#FFB347]"
            : "text-white/[0.86] hover:text-[#4DB8FF] hover:[text-shadow:0_0_14px_rgba(77,184,255,0.24)]"
      }`}
    >
      <Icon className="h-4 w-4 shrink-0 stroke-[2] transition-transform duration-[250ms] ease-in-out group-hover:-translate-y-0.5" aria-hidden="true" />
      <span>{children}</span>
      <span
        className={`absolute inset-x-0 -bottom-0.5 h-px origin-center rounded-full bg-gradient-to-r from-transparent ${
          scrolled ? "via-[#F97316] shadow-[0_0_12px_rgba(249,115,22,0.3)]" : "via-[#FFB347] shadow-[0_0_12px_rgba(255,179,71,0.55)]"
        } to-transparent opacity-0 transition duration-300 group-hover:opacity-100 ${
          active ? "opacity-100" : ""
        }`}
        aria-hidden="true"
      />
    </Link>
  );
}

function MenuIcon({ className = "" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" /></svg>;
}

function CloseIcon({ className = "" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" /></svg>;
}

"use client";

import Link from "next/link";
import { Cookie } from "lucide-react";
import { useEffect, useState } from "react";

const STORAGE_KEY = "bkkair_cookie_consent";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentChoice = window.localStorage.getItem(STORAGE_KEY);
    setIsVisible(!currentChoice);

    const handleOpenSettings = () => {
      window.localStorage.removeItem(STORAGE_KEY);
      setIsVisible(true);
    };

    window.addEventListener("bkkair:open-cookie-settings", handleOpenSettings);

    return () => {
      window.removeEventListener("bkkair:open-cookie-settings", handleOpenSettings);
    };
  }, []);

  function saveChoice(choice: "accepted" | "rejected") {
    window.localStorage.setItem(STORAGE_KEY, choice);
    setIsVisible(false);
  }

  if (!isVisible) return null;

  return (
    <section
      aria-label="การยินยอมคุกกี้"
      aria-live="polite"
      className="fixed inset-x-0 bottom-0 z-[9999] px-3 pb-3 sm:inset-x-auto sm:bottom-5 sm:right-5 sm:w-[420px] sm:px-0 sm:pb-0"
    >
      <div className="rounded-2xl border border-white/10 bg-[#0B1220] p-5 text-white shadow-[0_24px_80px_rgba(15,23,42,0.35)] sm:rounded-3xl">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10">
            <Cookie className="h-5 w-5 text-accent-orange" aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-base font-black leading-snug">
              เราใส่ใจเรื่องความเป็นส่วนตัวของคุณ
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-slate-300">
              เว็บไซต์นี้ใช้คุกกี้ที่จำเป็นเพื่อให้เว็บไซต์ทำงานได้อย่างถูกต้อง และอาจใช้คุกกี้เพิ่มเติมเพื่อวิเคราะห์การใช้งานหรือสนับสนุนการตลาดเมื่อได้รับความยินยอมจากคุณ
            </p>
          </div>
        </div>

        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => saveChoice("accepted")}
            className="rounded-xl bg-accent-orange px-4 py-2.5 text-sm font-black text-white shadow-lg shadow-orange-950/20 transition hover:bg-accent-hover"
          >
            ยอมรับทั้งหมด
          </button>
          <button
            type="button"
            onClick={() => saveChoice("rejected")}
            className="rounded-xl border border-white/10 bg-white/10 px-4 py-2.5 text-sm font-bold text-slate-100 transition hover:bg-white/15"
          >
            ปฏิเสธคุกกี้ที่ไม่จำเป็น
          </button>
        </div>

        <div className="mt-3 text-center">
          <Link
            href="/cookies-policy"
            className="text-xs font-semibold text-slate-400 underline underline-offset-4 transition hover:text-white"
          >
            อ่านนโยบายคุกกี้
          </Link>
        </div>
      </div>
    </section>
  );
}

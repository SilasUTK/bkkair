"use client";

import { Cookie } from "lucide-react";

export default function CookieSettingsButton() {
  function openCookieSettings() {
    window.localStorage.removeItem("bkkair_cookie_consent");
    window.dispatchEvent(new Event("bkkair:open-cookie-settings"));
  }

  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-bold text-slate-100 transition hover:border-orange-400/60 hover:bg-slate-800"
    >
      <Cookie className="h-4 w-4 text-accent-orange" aria-hidden="true" />
      เปิดการตั้งค่าคุกกี้
    </button>
  );
}

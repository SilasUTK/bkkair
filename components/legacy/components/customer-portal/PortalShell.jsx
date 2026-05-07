import { Bell, ChevronRight, LogOut, Menu, ShieldCheck, UserRound, X } from "lucide-react";
import Logo from "../layout/Logo.jsx";
import { navigationItems } from "./portalData.js";

export default function PortalShell({
  activeTab,
  children,
  isSidebarOpen,
  onCloseSidebar,
  onOpenSidebar,
  onTabChange
}) {
  return (
    <section className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900">
      <div className="lg:flex">
        <aside
          className={`fixed inset-y-0 left-0 z-40 flex w-80 flex-col border-r border-slate-100 bg-white/95 px-5 py-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] backdrop-blur transition-transform duration-300 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <SidebarHeader onCloseSidebar={onCloseSidebar} />
          <SidebarNav activeTab={activeTab} onTabChange={onTabChange} />
          <TrustCard />
          <SidebarProfile />
        </aside>

        {isSidebarOpen ? (
          <button
            type="button"
            className="fixed inset-0 z-30 bg-slate-950/20 backdrop-blur-sm lg:hidden"
            onClick={onCloseSidebar}
            aria-label="Close navigation overlay"
          />
        ) : null}

        <main className="min-w-0 flex-1 px-4 pb-28 pt-24 sm:px-6 lg:px-10 lg:pb-10 lg:pt-8">
          <MobileHeader onOpenSidebar={onOpenSidebar} />
          {children}
        </main>

        <MobileBottomNav activeTab={activeTab} onTabChange={onTabChange} />
      </div>
    </section>
  );
}

function SidebarHeader({ onCloseSidebar }) {
  return (
    <div className="flex items-center justify-between">
      <Logo className="[&_.bkk-logo-wordmark]:text-lg [&_.bkk-logo-wordmark]:sm:text-xl" />
      <button
        type="button"
        onClick={onCloseSidebar}
        className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 transition hover:bg-slate-100 lg:hidden"
        aria-label="Close menu"
      >
        <X className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
}

function SidebarNav({ activeTab, onTabChange }) {
  return (
    <nav className="mt-10 space-y-2">
      {navigationItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onTabChange(item.id)}
            className={`flex h-12 w-full items-center gap-3 rounded-2xl px-4 text-left text-sm font-extrabold transition ${
              isActive
                ? "bg-blue-50 text-[#2563EB] shadow-[0_12px_28px_-18px_rgba(37,99,235,0.6)]"
                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
            <span className="min-w-0 flex-1 truncate">{item.label}</span>
            {isActive ? <ChevronRight className="h-4 w-4 shrink-0" aria-hidden="true" /> : null}
          </button>
        );
      })}
    </nav>
  );
}

function TrustCard() {
  return (
    <div className="mt-10 rounded-[2rem] border border-slate-100 bg-[#F8FAFC] p-5">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-[#22C55E]">
        <ShieldCheck className="h-5 w-5" aria-hidden="true" />
      </div>
      <p className="mt-4 text-sm font-black text-slate-900">Staff reviewed service</p>
      <p className="mt-2 text-xs font-semibold leading-5 text-slate-500">
        เอกสารทุกชุดจัดเตรียมโดยทีมงานก่อนส่งให้ลูกค้า ไม่มีการออกตั๋วจริงอัตโนมัติ
      </p>
    </div>
  );
}

function SidebarProfile() {
  return (
    <div className="mt-auto space-y-3 pt-6">
      <div className="rounded-[2rem] border border-slate-100 bg-white p-4 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#2563EB]">
            <UserRound className="h-6 w-6" aria-hidden="true" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-black text-slate-950">สมชาย ใจดี</p>
            <p className="mt-0.5 text-xs font-bold text-slate-400">ID: BKK-8890</p>
          </div>
          <button
            type="button"
            className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#F8FAFC] text-[#2563EB] transition hover:bg-blue-50"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" aria-hidden="true" />
            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#FF5722]" />
          </button>
        </div>
      </div>

      <button
        type="button"
        className="flex h-12 w-full items-center justify-center gap-3 rounded-2xl border border-slate-100 bg-[#F8FAFC] text-sm font-black text-slate-500 transition hover:border-orange-100 hover:bg-orange-50 hover:text-[#FF5722]"
      >
        <LogOut className="h-5 w-5" aria-hidden="true" />
        Log Out
      </button>
    </div>
  );
}

function MobileHeader({ onOpenSidebar }) {
  return (
    <header className="fixed left-0 right-0 top-0 z-20 border-b border-slate-100 bg-white/90 px-4 py-3 backdrop-blur lg:hidden">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onOpenSidebar}
          className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
        <Logo className="[&_.bkk-logo-wordmark]:text-base [&_.bkk-logo-wordmark]:sm:text-base" />
        <button
          type="button"
          className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-[#2563EB]"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" aria-hidden="true" />
          <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#FF5722]" />
        </button>
      </div>
    </header>
  );
}

function MobileBottomNav({ activeTab, onTabChange }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-slate-100 bg-white/95 px-2 py-2 shadow-[0_-20px_50px_-30px_rgba(15,23,42,0.45)] backdrop-blur lg:hidden">
      <div className="grid grid-cols-6 gap-1">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onTabChange(item.id)}
              className={`flex h-14 flex-col items-center justify-center gap-1 rounded-2xl text-[10px] font-black transition ${
                isActive ? "bg-blue-50 text-[#2563EB]" : "text-slate-400"
              }`}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
              <span className="max-w-full truncate px-1">{item.label.split(" ")[0]}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

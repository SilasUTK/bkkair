import { CalendarDays, Edit2, FileSearch, LayoutDashboard, Plus, ShieldCheck, Trash2, UserPlus } from "lucide-react";
import { navigationItems, travelerProfiles } from "./portalData.js";

function safeText(value, fallback = "") {
  if (value === null || value === undefined) return fallback;
  if (typeof value === "string" || typeof value === "number") return value;
  return fallback;
}

export default function PlaceholderContent({ activeTab, onAddTraveler, onNewRequest }) {
  if (activeTab === "travelers") {
    return <TravelerProfiles onAddTraveler={onAddTraveler} />;
  }

  if (activeTab === "requests") {
    return <RequestsPreview onNewRequest={onNewRequest} />;
  }

  const current = navigationItems.find((item) => item.id === activeTab);
  const Icon = current?.icon ?? LayoutDashboard;

  return (
    <div className="mt-8 rounded-[2rem] border border-slate-100 bg-white p-12 text-center shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] sm:py-24">
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-[1.5rem] border-2 border-dashed border-slate-200 bg-slate-50 text-slate-400">
        <Icon className="h-10 w-10" aria-hidden="true" />
      </div>
      <h2 className="mb-3 text-2xl font-black text-slate-950 sm:text-3xl">{safeText(current?.label, "Coming Soon")}</h2>
      <p className="mx-auto max-w-md text-[15px] font-medium leading-relaxed text-slate-500">
        หน้าต่างนี้กำลังอยู่ในช่วงออกแบบและพัฒนา ในการใช้งานจริงจะแสดงข้อมูลที่เชื่อมต่อกับระบบฐานข้อมูลให้คุณจัดการได้ง่ายๆ
      </p>
    </div>
  );
}

function TravelerProfiles({ onAddTraveler }) {
  return (
    <section className="mt-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {travelerProfiles.map((profile) => {
          const name = safeText(profile.name, "Traveler");
          const passport = safeText(profile.passport, "-");
          const type = safeText(profile.type, "Traveler");
          const passportExpiry = safeText(profile.passportExpiry, "18 May 2031");

          return (
            <article
              key={safeText(profile.id, name)}
              className="group relative flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:border-blue-100 hover:shadow-md"
            >
              <div className="absolute right-4 top-4 flex gap-2 opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100">
                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-[#2563EB] transition hover:-translate-y-0.5 hover:border-[#2563EB] hover:bg-white hover:shadow-sm"
                  aria-label={`Edit ${name}`}
                >
                  <Edit2 className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-500 transition hover:-translate-y-0.5 hover:border-red-200 hover:bg-red-100 hover:shadow-sm"
                  aria-label={`Delete ${name}`}
                >
                  <Trash2 className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              <div className="mb-5 flex items-start justify-between gap-4 pr-20">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-lg font-black text-[#2563EB]">
                  {name.charAt(0)}
                </div>
                <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-slate-500">
                  {type}
                </span>
              </div>

              <h3 className="text-lg font-black text-slate-950">{name}</h3>

              <div className="mt-5 grid gap-3">
                <div className="rounded-2xl border border-slate-100 bg-[#F8FAFC] p-4">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-400">
                    <ShieldCheck className="h-4 w-4 text-[#2563EB]" aria-hidden="true" />
                    Passport
                  </div>
                  <p className="mt-2 text-sm font-black text-slate-800">{passport}</p>
                </div>

                <div className="flex items-center justify-between gap-3 rounded-2xl bg-emerald-50 px-4 py-3 text-[#166534]">
                  <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider">
                    <CalendarDays className="h-4 w-4" aria-hidden="true" />
                    Expiry
                  </span>
                  <span className="text-sm font-black">{passportExpiry}</span>
                </div>
              </div>
            </article>
          );
        })}

        <button
          type="button"
          onClick={onAddTraveler}
          className="flex min-h-[160px] flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 text-slate-500 transition-all hover:border-[#2563EB] hover:bg-blue-50 hover:text-[#2563EB]"
        >
          <UserPlus className="h-8 w-8" aria-hidden="true" />
          <span className="text-sm font-black">เพิ่มข้อมูลผู้เดินทาง</span>
        </button>
      </div>
    </section>
  );
}

function RequestsPreview({ onNewRequest }) {
  return (
    <section className="mt-8 rounded-[2rem] border border-slate-100 bg-white p-10 text-center shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]">
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-orange-50 text-[#FF5722]">
        <FileSearch className="h-10 w-10" aria-hidden="true" />
      </div>
      <h2 className="mt-5 text-2xl font-black text-slate-950">คุณยังไม่มีประวัติคำขออื่นๆ</h2>
      <p className="mx-auto mt-3 max-w-md text-[15px] font-medium leading-relaxed text-slate-500">
        ส่งคำขอใหม่สำหรับประเทศอื่น หรือเพิ่มรายละเอียดการเดินทางเพื่อให้ทีมงานติดต่อกลับได้ที่นี่
      </p>
      <button
        type="button"
        onClick={onNewRequest}
        className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-[#2563EB] px-8 py-4 text-sm font-black text-white shadow-lg shadow-blue-200/50 transition hover:-translate-y-0.5 hover:bg-blue-700"
      >
        <Plus className="h-5 w-5" aria-hidden="true" />
        สร้างคำขอใหม่
      </button>
    </section>
  );
}

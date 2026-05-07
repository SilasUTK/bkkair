import { ArrowLeft, ClipboardList } from "lucide-react";
import Logo from "../../components/layout/Logo.jsx";

export default function AdminLayout({ children, navigate }) {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200 selection:text-blue-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Logo onClick={() => navigate("/")} className="cursor-pointer hover:opacity-80 transition-opacity" />
            <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
            <div>
              <span className="block text-sm font-black tracking-tight text-slate-900">Admin Workspace</span>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">Lead & Fulfillment</span>
            </div>
          </div>

          <nav className="flex flex-wrap gap-3" aria-label="Admin navigation">
            <button
              type="button"
              onClick={() => navigate("/admin/bookings")}
              className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-xs font-black text-slate-700 shadow-sm hover:bg-slate-50 hover:text-blue-600 transition-all"
            >
              <ClipboardList size={16} aria-hidden="true" />
              Bookings
            </button>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="inline-flex min-h-10 items-center gap-2 rounded-xl bg-slate-900 px-4 text-xs font-black text-white shadow-md hover:bg-black hover:shadow-lg transition-all"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              Public Site
            </button>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </section>
    </main>
  );
}
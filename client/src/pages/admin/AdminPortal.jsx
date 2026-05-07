import React, { useEffect, useMemo, useState } from "react";
import { 
  LayoutDashboard, ClipboardList, CreditCard, FileArchive, 
  UsersRound, Settings, Menu, Bell, ChevronLeft, User, LogOut, BriefcaseBusiness
} from "lucide-react";
import Logo from "../../components/layout/Logo.jsx";
import { getAdminBookings } from "../../services/api.js";
import AdminDashboard from "./AdminDashboard.jsx";
import AdminBookingList from "./AdminBookingList.jsx";
import AdminBookingDetail from "./AdminBookingDetail.jsx";
import AdminDocuments from "./AdminDocuments.jsx";
import AdminOperations from "./AdminOperations.jsx";
import AdminCustomers from "./AdminCustomers.jsx";
import AdminSettings from "./AdminSettings.jsx";
import { useAdminAuth } from "./AdminAuthContext.jsx";
import { normalizeWorkflowStatus } from "./adminUtils.js";

export default function AdminPortal({ path, navigate }) {
  const { admin, signOut } = useAdminAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [language, setLanguage] = useState("EN");
  const [profileOpen, setProfileOpen] = useState(false);
  const [bookingsError, setBookingsError] = useState("");
  const [loggingOut, setLoggingOut] = useState(false);

  async function fetchPortalBookings() {
    setBookingsError("");
    try {
      const data = await getAdminBookings();
      setBookings(data.bookings || []);
    } catch (requestError) {
      if (requestError.status === 401) {
        setBookings([]);
        return;
      }

      setBookingsError(requestError.message || "Unable to refresh admin counts.");
    }
  }

  useEffect(() => {
    fetchPortalBookings();
  }, [path]);

  const counts = useMemo(() => {
    return bookings.reduce((acc, b) => {
      const s = normalizeWorkflowStatus(b.status);
      const paymentStatus = String(b.paymentStatus || "").trim().toLowerCase();
      const documentStatus = String(b.documentStatus || "").trim().toLowerCase();

      if (s === "new") acc.requests += 1;
      if (paymentStatus === "pending_verification" || s === "payment_pending") acc.payments += 1;
      if (["preparing", "ready"].includes(documentStatus) || s === "processing") acc.documents += 1;

      return acc;
    }, { requests: 0, payments: 0, documents: 0 });
  }, [bookings]);

  const navItems = [
    { label: "Overview", path: "/admin/overview", icon: LayoutDashboard, id: "dashboard" },
    { label: "Operations", path: "/admin/operations", icon: BriefcaseBusiness, id: "operations", badge: counts.requests + counts.payments + counts.documents },
    { label: "Requests", path: "/admin/bookings", icon: ClipboardList, id: "requests", badge: counts.requests },
    { label: "Payments", path: "/admin/payments", icon: CreditCard, id: "payments", badge: counts.payments },
    { label: "Documents", path: "/admin/documents", icon: FileArchive, id: "documents", badge: counts.documents },
    { label: "Customers", path: "/admin/customers", icon: UsersRound, id: "customers" },
    { label: "Settings", path: "/admin/settings", icon: Settings, id: "settings" },
  ];

  const adminInitials = useMemo(() => {
    const source = admin?.name || admin?.email || "Admin";
    return source
      .split(/\s|@/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("") || "AD";
  }, [admin]);

  async function handleLogout() {
    if (loggingOut) return;

    setLoggingOut(true);
    try {
      await signOut();
      setBookings([]);
      setProfileOpen(false);
      setSidebarOpen(false);
      navigate("/admin/login");
    } finally {
      setLoggingOut(false);
    }
  }

  // Router logic
  const detailMatch = path.match(/^\/admin\/bookings\/([^/]+)$/);
  let content = <AdminOperations navigate={navigate} onBookingsChanged={fetchPortalBookings} />;
  
  if (path === "/admin/overview") {
    content = <AdminDashboard navigate={navigate} bookings={bookings} />;
  } else if (path === "/admin/bookings") {
    content = <AdminBookingList navigate={navigate} onBookingsChanged={fetchPortalBookings} />;
  } else if (path === "/admin/operations") {
    content = <AdminOperations navigate={navigate} onBookingsChanged={fetchPortalBookings} />;
  } else if (detailMatch) {
    content = <AdminBookingDetail code={detailMatch[1]} navigate={navigate} onBookingsChanged={fetchPortalBookings} />;
  } else if (path === "/admin/documents") {
    content = <AdminDocuments navigate={navigate} />;
  } else if (path === "/admin/customers") {
    content = <AdminCustomers />;
  } else if (path === "/admin/settings") {
    content = <AdminSettings />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 font-sans">
      <div className="flex min-h-screen">
        
        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm lg:hidden" 
            onClick={() => setSidebarOpen(false)} 
          />
        )}

        {/* Sidebar */}
        <aside className={`fixed left-0 top-0 z-50 flex h-screen w-[280px] flex-col bg-slate-950 text-white transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="border-b border-white/10 p-6">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="text-left focus:outline-none"
              aria-label="BKK AIR public site"
            >
              <Logo variant="footer" />
              <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-blue-400">Admin Workspace</p>
            </button>
          </div>

          <nav className="flex-1 space-y-1 overflow-y-auto p-4">
            {navItems.map(item => {
              const isActive = path === item.path;
              return (
                <button
                  key={item.id}
                  onClick={() => { navigate(item.path); setSidebarOpen(false); }}
                  className={`group flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-bold transition-all ${
                    isActive 
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-900/40" 
                      : "text-slate-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={18} className={isActive ? "text-white" : "text-slate-500 group-hover:text-white"} />
                    {item.label}
                  </div>
                  {item.badge > 0 && (
                    <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-red-500 px-1.5 text-[10px] text-white">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          <div className="space-y-3 border-t border-white/10 p-4">
            <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 p-2">
              <span className="px-2 text-[10px] font-black uppercase tracking-widest text-slate-400">Language</span>
              <div className="flex rounded-full bg-slate-900 p-1">
                {["TH", "EN"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setLanguage(item)}
                    className={`flex h-7 w-9 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                      language === item ? "bg-white text-slate-950 shadow" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => navigate("/")}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              <ChevronLeft size={16} />
              Public Site
            </button>

            <button
              type="button"
              onClick={handleLogout}
              disabled={loggingOut}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm font-bold text-red-200 transition-colors hover:border-red-300/40 hover:bg-red-500/20 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              <LogOut size={16} />
              {loggingOut ? "Logging out..." : "Logout"}
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex min-h-screen flex-1 flex-col lg:ml-[280px]">
          {/* Top Header */}
          <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/80 px-4 backdrop-blur-md lg:px-8">
            <div className="flex items-center gap-4">
              <button onClick={() => setSidebarOpen(true)} className="rounded-xl bg-slate-100 p-2 text-slate-600 lg:hidden">
                <Menu size={20} />
              </button>
              <h1 className="text-xl font-black text-slate-900">Dashboard</h1>
            </div>

            <div className="flex items-center gap-3 lg:gap-5">
              {/* Notification Bell */}
              <button className="relative rounded-full bg-slate-50 p-2.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900">
                <Bell size={20} />
                <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full border-2 border-white bg-red-500"></span>
              </button>

              {/* Admin Profile */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setProfileOpen((open) => !open)}
                  className="flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 py-1.5 pl-1.5 pr-3 shadow-sm backdrop-blur transition-colors hover:bg-slate-50"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white">{adminInitials}</span>
                  <span className="hidden text-left sm:block">
                    <span className="block text-sm font-black leading-none text-slate-900">{admin?.name || "Admin"}</span>
                    <span className="mt-1 block text-[10px] font-black uppercase tracking-wider text-slate-400">{admin?.role || "Admin"}</span>
                  </span>
                </button>

                {profileOpen && (
                  <div className="absolute right-0 top-12 z-50 w-56 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/70">
                    <button type="button" className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-50">
                      <User size={16} />
                      Admin Profile
                    </button>
                    <div className="my-1 h-px bg-slate-100" />
                    <button
                      type="button"
                      onClick={handleLogout}
                      disabled={loggingOut}
                      className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-bold text-red-600 transition-colors hover:bg-red-50"
                    >
                      <LogOut size={16} />
                      {loggingOut ? "Logging out..." : "Sign Out"}
                    </button>
                  </div>
                )}
              </div>

            </div>
          </header>

          <main className="flex-1 p-4 lg:p-8">
            {bookingsError && <p className="mb-4 rounded-2xl border border-red-200 bg-red-50 p-3 text-sm font-bold text-red-700">{bookingsError}</p>}
            {content}
          </main>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { LayoutDashboard, Plus } from "lucide-react";
import EmptyPortalState from "../components/customer-portal/EmptyPortalState.jsx";
import OverviewContent from "../components/customer-portal/OverviewContent.jsx";
import PlaceholderContent from "../components/customer-portal/PlaceholderContent.jsx";
import PortalModal from "../components/customer-portal/PortalModal.jsx";
import PortalShell from "../components/customer-portal/PortalShell.jsx";
import { activeRequest, navigationItems } from "../components/customer-portal/portalData.js";

export default function CustomerPortal({ onNavigate }) {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [hasRequests, setHasRequests] = useState(true);

  const activeNavItem = navigationItems.find((item) => item.id === activeTab);
  const ActiveIcon = activeNavItem?.icon ?? LayoutDashboard;

  function handleTabChange(tabId) {
    setActiveTab(tabId);
    setIsSidebarOpen(false);
  }

  function handleNewRequest() {
    onNavigate?.("request");
  }

  return (
    <PortalShell
      activeTab={activeTab}
      isSidebarOpen={isSidebarOpen}
      onCloseSidebar={() => setIsSidebarOpen(false)}
      onOpenSidebar={() => setIsSidebarOpen(true)}
      onTabChange={handleTabChange}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black text-[#2563EB] shadow-[0_16px_40px_-28px_rgba(37,99,235,0.8)]">
              <ActiveIcon className="h-4 w-4" aria-hidden="true" />
              {activeNavItem?.label}
            </div>
            <h1 className="mt-4 text-3xl font-black tracking-normal text-slate-950 sm:text-4xl">
              Dashboard Overview
            </h1>
            <p className="mt-3 max-w-2xl text-sm font-semibold leading-6 text-slate-500 sm:text-base">
              ติดตามคำขอเอกสารยื่นวีซ่า ชำระเงิน และดาวน์โหลดไฟล์ที่ทีม BKK AIR จัดเตรียมไว้ให้
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setHasRequests((current) => !current)}
              className="inline-flex min-h-[3.25rem] items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-black text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-[#2563EB]"
            >
              {hasRequests ? "Preview Empty State" : "Show Active Request"}
            </button>
            <button
              type="button"
              onClick={handleNewRequest}
              className="inline-flex min-h-[3.25rem] items-center justify-center gap-3 rounded-2xl bg-[#FF5722] px-6 py-4 text-sm font-black text-white shadow-[0_20px_40px_-18px_rgba(255,87,34,0.7)] transition hover:-translate-y-0.5 hover:bg-[#E64A19]"
            >
              <Plus className="h-5 w-5" aria-hidden="true" />
              สร้างคำขอใหม่
            </button>
          </div>
        </div>

        {activeTab === "dashboard" && hasRequests ? (
          <OverviewContent activeRequest={activeRequest} onOpenModal={setModalType} />
        ) : activeTab === "dashboard" ? (
          <EmptyPortalState onNewRequest={handleNewRequest} onAddTraveler={() => setModalType("traveler")} />
        ) : (
          <PlaceholderContent
            activeTab={activeTab}
            onAddTraveler={() => setModalType("traveler")}
            onNewRequest={handleNewRequest}
          />
        )}
      </div>

      <PortalModal type={modalType} onClose={() => setModalType(null)} />
    </PortalShell>
  );
}

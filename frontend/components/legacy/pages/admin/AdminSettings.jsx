import React, { useState } from "react";
import { Bell, Building2, ShieldCheck, UsersRound } from "lucide-react";

const tabs = [
  { id: "general", label: "General", icon: Building2 },
  { id: "team", label: "Team Members", icon: UsersRound },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "security", label: "Security", icon: ShieldCheck },
];

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState("general");
  const [staffReviewedQuotation, setStaffReviewedQuotation] = useState(true);
  const [portalAlerts, setPortalAlerts] = useState(true);

  return (
    <div className="grid gap-5 xl:grid-cols-[260px_1fr]">
      <aside className="rounded-[2rem] border border-slate-200 bg-white p-3 shadow-sm">
        <nav className="grid gap-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex min-h-12 items-center gap-3 rounded-2xl px-4 text-sm font-black transition ${
                  active ? "bg-slate-950 text-white shadow-sm" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <Icon size={17} />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </aside>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        {activeTab === "general" ? (
          <GeneralSettings
            staffReviewedQuotation={staffReviewedQuotation}
            setStaffReviewedQuotation={setStaffReviewedQuotation}
            portalAlerts={portalAlerts}
            setPortalAlerts={setPortalAlerts}
          />
        ) : (
          <Placeholder title={tabs.find((tab) => tab.id === activeTab)?.label} />
        )}
      </section>
    </div>
  );
}

function GeneralSettings({ staffReviewedQuotation, setStaffReviewedQuotation, portalAlerts, setPortalAlerts }) {
  return (
    <div className="grid gap-6">
      <div>
        <h2 className="text-xl font-black text-slate-900">General Settings</h2>
        <p className="mt-1 text-sm text-slate-500">Configure company profile and default operational behavior.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Company Name" defaultValue="BKK AIR Co., Ltd." />
        <Field label="Support Email" defaultValue="info@bkkair.com" type="email" />
      </div>

      <div className="grid gap-3">
        <ToggleRow
          title="Staff-reviewed Quotation Emails"
          description="Prepare quotation email after staff manually confirms pricing."
          checked={staffReviewedQuotation}
          onChange={setStaffReviewedQuotation}
        />
        <ToggleRow
          title="Portal Status Alerts"
          description="Show customer portal alerts when documents are ready or expiring."
          checked={portalAlerts}
          onChange={setPortalAlerts}
        />
      </div>
    </div>
  );
}

function Field({ label, defaultValue, type = "text" }) {
  return (
    <label className="grid gap-2 text-sm font-black text-slate-700">
      {label}
      <input
        type={type}
        defaultValue={defaultValue}
        className="min-h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
      />
    </label>
  );
}

function ToggleRow({ title, description, checked, onChange }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div>
        <p className="font-black text-slate-900">{title}</p>
        <p className="mt-1 text-sm text-slate-500">{description}</p>
      </div>
      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`relative h-7 w-12 shrink-0 rounded-full transition ${checked ? "bg-blue-600" : "bg-slate-300"}`}
        aria-pressed={checked}
      >
        <span className={`absolute top-1 size-5 rounded-full bg-white shadow-sm transition ${checked ? "left-6" : "left-1"}`} />
      </button>
    </div>
  );
}

function Placeholder({ title }) {
  return (
    <div className="flex min-h-[320px] items-center justify-center rounded-[2rem] border border-dashed border-slate-200 bg-slate-50 text-center">
      <div>
        <p className="text-lg font-black text-slate-900">{title}</p>
        <p className="mt-2 text-sm text-slate-500">Configuration controls for this section can be added here.</p>
      </div>
    </div>
  );
}

import React, { useEffect, useMemo, useState } from "react";
import {
  AlertTriangle,
  Banknote,
  CheckCircle2,
  ClipboardList,
  FileUp,
  MessageSquare,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { getAdminBookings, updateAdminBookingStatus } from "../../services/api.js";
import {
  formatDate,
  formatDateTime,
  getCustomerName,
  getDestination,
  normalizeWorkflowStatus,
  workflowStatusBadgeClass,
  workflowStatusLabel,
} from "./adminUtils.js";

const statusOptions = ["All", "new", "quoted", "payment_pending", "paid", "processing", "completed", "cancelled"];
const paymentOptions = ["All", "none", "pending_verification", "approved", "rejected"];
const documentOptions = ["All", "not_ready", "preparing", "ready", "delivered", "expired"];
const priorityOptions = ["All", "urgent", "high", "normal"];

export default function AdminOperations({ navigate, onBookingsChanged }) {
  const [bookings, setBookings] = useState([]);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [paymentFilter, setPaymentFilter] = useState("All");
  const [documentFilter, setDocumentFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [overdueOnly, setOverdueOnly] = useState(false);
  const [hideCompleted, setHideCompleted] = useState(true);
  const [loading, setLoading] = useState(true);
  const [savingCode, setSavingCode] = useState("");
  const [error, setError] = useState("");

  async function fetchBookings() {
    setLoading(true);
    setError("");

    try {
      const data = await getAdminBookings();
      setBookings(data.bookings || []);
    } catch (requestError) {
      setError(requestError.message || "Unable to load operations board.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBookings();
  }, []);

  const rows = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return bookings
      .map((booking) => enrichBooking(booking))
      .filter((row) => {
        if (hideCompleted && row.workflowStatus === "completed") return false;
        if (statusFilter !== "All" && row.workflowStatus !== statusFilter) return false;
        if (paymentFilter !== "All" && row.paymentStatus !== paymentFilter) return false;
        if (documentFilter !== "All" && row.documentStatus !== documentFilter) return false;
        if (priorityFilter !== "All" && row.priority !== priorityFilter) return false;
        if (overdueOnly && !row.isFollowUpOverdue) return false;

        const haystack = [
          row.bookingCode,
          row.customerName,
          row.destination,
          row.route,
          row.serviceType,
        ].join(" ").toLowerCase();

        return !normalizedQuery || haystack.includes(normalizedQuery);
      })
      .sort(sortOperationsRows);
  }, [bookings, documentFilter, hideCompleted, overdueOnly, paymentFilter, priorityFilter, query, statusFilter]);

  function navigateToSection(row, section) {
    window.sessionStorage.setItem(`bkkair-admin-focus-${section}-${row.bookingCode}`, "1");
    navigate(`/admin/bookings/${encodeURIComponent(row.bookingCode)}`);
  }

  async function completeJob(row) {
    if (!window.confirm(`Complete booking ${row.bookingCode}?`)) return;

    setSavingCode(row.bookingCode);
    setError("");

    try {
      await updateAdminBookingStatus(row.bookingCode, "completed");
      await fetchBookings();
      await onBookingsChanged?.();
    } catch (requestError) {
      setError(requestError.message || "Unable to complete job.");
    } finally {
      setSavingCode("");
    }
  }

  return (
    <div className="space-y-5">
      <section className="rounded-[2rem] border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">Operations Board</p>
            <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-950">Daily staff work queue</h2>
          </div>

          <div className="relative w-full xl:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search booking, customer, destination..."
              className="min-h-11 w-full rounded-2xl border border-slate-200 bg-white px-11 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>

        <div className="mt-4 grid gap-3 lg:grid-cols-5">
          <FilterSelect label="Status" value={statusFilter} onChange={setStatusFilter} options={statusOptions} />
          <FilterSelect label="Payment" value={paymentFilter} onChange={setPaymentFilter} options={paymentOptions} />
          <FilterSelect label="Document" value={documentFilter} onChange={setDocumentFilter} options={documentOptions} />
          <FilterSelect label="Priority" value={priorityFilter} onChange={setPriorityFilter} options={priorityOptions} />
          <div className="grid grid-cols-2 gap-2">
            <TogglePill label="Overdue" checked={overdueOnly} onChange={setOverdueOnly} />
            <TogglePill label="Hide completed" checked={hideCompleted} onChange={setHideCompleted} />
          </div>
        </div>
      </section>

      {error && <p className="rounded-2xl border border-red-200 bg-red-50 p-3 text-sm font-bold text-red-700">{error}</p>}

      <section className="hidden overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm xl:block">
        <div className="max-h-[calc(100vh-260px)] overflow-auto">
          <table className="w-full min-w-[1500px] text-left text-sm">
            <thead className="sticky top-0 z-10 border-b border-slate-200 bg-slate-50/95 text-[10px] font-black uppercase tracking-widest text-slate-400 backdrop-blur">
              <tr>
                <th className="px-4 py-3">Case ID</th>
                <th className="px-4 py-3">Customer</th>
                <th className="px-4 py-3">Service</th>
                <th className="px-4 py-3">Route</th>
                <th className="px-4 py-3">Workflow</th>
                <th className="px-4 py-3">Quotation</th>
                <th className="px-4 py-3">Payment</th>
                <th className="px-4 py-3">Document</th>
                <th className="px-4 py-3">Priority</th>
                <th className="px-4 py-3">Follow-up</th>
                <th className="px-4 py-3">Staff</th>
                <th className="px-4 py-3">Updated</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={13} className="px-4 py-14 text-center text-sm font-bold text-slate-400">Loading operations...</td>
                </tr>
              ) : rows.length === 0 ? (
                <tr>
                  <td colSpan={13} className="px-4 py-14 text-center text-sm font-bold text-slate-400">No matching jobs.</td>
                </tr>
              ) : rows.map((row) => (
                <tr key={row.bookingCode} className={row.priority === "urgent" ? "bg-red-50/45 hover:bg-red-50" : "hover:bg-slate-50"}>
                  <td className="px-4 py-4 align-top">
                    <button type="button" onClick={() => navigateToSection(row, "top")} className="font-black text-slate-950 hover:text-blue-600">
                      {row.bookingCode}
                    </button>
                  </td>
                  <td className="px-4 py-4 align-top font-bold text-slate-700">{row.customerName}</td>
                  <td className="px-4 py-4 align-top text-xs font-bold text-slate-500">{row.serviceType}</td>
                  <td className="px-4 py-4 align-top text-xs font-bold text-slate-600">{row.route}</td>
                  <td className="px-4 py-4 align-top"><WorkflowBadge status={row.workflowStatus} /></td>
                  <td className="px-4 py-4 align-top"><SmallBadge tone={row.quotationStatus === "Expired" ? "red" : row.quotationStatus === "Sent" ? "blue" : "slate"}>{row.quotationStatus}</SmallBadge></td>
                  <td className="px-4 py-4 align-top"><PaymentBadge status={row.paymentStatus} /></td>
                  <td className="px-4 py-4 align-top"><DocumentBadge status={row.documentStatus} /></td>
                  <td className="px-4 py-4 align-top"><PriorityBadge priority={row.priority} /></td>
                  <td className="px-4 py-4 align-top text-xs font-bold text-slate-500">{row.followUpLabel}</td>
                  <td className="px-4 py-4 align-top text-xs font-bold text-slate-600">{row.assignedStaff}</td>
                  <td className="px-4 py-4 align-top text-xs font-bold text-slate-500">{formatDateTime(row.updatedAt)}</td>
                  <td className="px-4 py-4 align-top">
                    <ActionCluster row={row} navigateToSection={navigateToSection} completeJob={completeJob} savingCode={savingCode} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid gap-3 xl:hidden">
        {loading ? (
          <p className="rounded-2xl bg-white p-8 text-center text-sm font-bold text-slate-400">Loading operations...</p>
        ) : rows.length === 0 ? (
          <p className="rounded-2xl bg-white p-8 text-center text-sm font-bold text-slate-400">No matching jobs.</p>
        ) : rows.map((row) => (
          <article key={row.bookingCode} className={`rounded-[2rem] border p-4 shadow-sm ${row.priority === "urgent" ? "border-red-200 bg-red-50" : "border-slate-200 bg-white"}`}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-base font-black text-slate-950">{row.bookingCode}</p>
                <p className="mt-1 text-sm font-bold text-slate-600">{row.customerName}</p>
                <p className="mt-1 text-xs font-bold text-slate-400">{row.route}</p>
              </div>
              <PriorityBadge priority={row.priority} />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <WorkflowBadge status={row.workflowStatus} />
              <PaymentBadge status={row.paymentStatus} />
              <DocumentBadge status={row.documentStatus} />
              <SmallBadge tone={row.quotationStatus === "Expired" ? "red" : row.quotationStatus === "Sent" ? "blue" : "slate"}>{row.quotationStatus}</SmallBadge>
            </div>
            <div className="mt-4 grid gap-1 text-xs font-bold text-slate-500">
              <p>Follow-up: {row.followUpLabel}</p>
              <p>Staff: {row.assignedStaff}</p>
              <p>Updated: {formatDateTime(row.updatedAt)}</p>
            </div>
            <div className="mt-4">
              <ActionCluster row={row} navigateToSection={navigateToSection} completeJob={completeJob} savingCode={savingCode} />
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

function enrichBooking(booking) {
  const workflowStatus = normalizeWorkflowStatus(booking.status);
  const destination = getDestination(booking);
  const route = [booking.origin, destination].filter(Boolean).join(" → ") || destination || "-";
  const paymentStatus = normalizeOption(booking.paymentStatus, "none");
  const documentStatus = normalizeOption(booking.documentStatus, "not_ready");
  const priority = getPriority(booking.departureDate, workflowStatus);
  const followUpDate = booking.staffFollowUpDate || "";

  return {
    ...booking,
    bookingCode: booking.bookingCode || String(booking.id || ""),
    customerName: getCustomerName(booking),
    destination,
    route,
    serviceType: booking.serviceType || "Visa Flight Support",
    workflowStatus,
    quotationStatus: getQuotationStatus(booking, paymentStatus, workflowStatus),
    paymentStatus,
    documentStatus,
    priority,
    staffFollowUpDate: followUpDate,
    followUpLabel: followUpDate ? formatDateTime(followUpDate) : "-",
    isFollowUpOverdue: isOverdueFollowUp(followUpDate, workflowStatus),
    assignedStaff: booking.assignedStaff || "Unassigned",
    updatedAt: booking.updatedAt || booking.createdAt,
  };
}

function normalizeOption(value, fallback) {
  return String(value || fallback).trim().toLowerCase();
}

function getQuotationStatus(booking, paymentStatus, workflowStatus) {
  const sent = Boolean(booking.quotationSentAt);
  if (!sent) return "Not sent";

  const dueTime = booking.quotationDueDate ? new Date(booking.quotationDueDate).getTime() : Number.NaN;
  const isPaid = paymentStatus === "approved" || ["paid", "processing", "completed"].includes(workflowStatus);
  if (!isPaid && Number.isFinite(dueTime) && dueTime < Date.now()) return "Expired";

  return "Sent";
}

function getPriority(departureDate, workflowStatus) {
  if (["completed", "cancelled"].includes(workflowStatus)) return "normal";

  const departureTime = departureDate ? new Date(departureDate).getTime() : Number.NaN;
  if (!Number.isFinite(departureTime)) return "normal";

  const daysUntilDeparture = Math.ceil((departureTime - Date.now()) / 86400000);
  if (daysUntilDeparture <= 3) return "urgent";
  if (daysUntilDeparture <= 7) return "high";
  return "normal";
}

function isOverdueFollowUp(value, workflowStatus) {
  if (!value || ["completed", "cancelled"].includes(workflowStatus)) return false;
  const followUpTime = new Date(value).getTime();
  return Number.isFinite(followUpTime) && followUpTime < Date.now();
}

function sortOperationsRows(a, b) {
  const priorityOrder = { urgent: 0, high: 1, normal: 2 };
  if (priorityOrder[a.priority] !== priorityOrder[b.priority]) return priorityOrder[a.priority] - priorityOrder[b.priority];
  return new Date(b.updatedAt || 0).getTime() - new Date(a.updatedAt || 0).getTime();
}

function FilterSelect({ label, value, onChange, options }) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-slate-400">
        <SlidersHorizontal size={12} /> {label}
      </span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-10 w-full rounded-2xl border border-slate-200 bg-white px-3 text-xs font-black capitalize text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      >
        {options.map((item) => (
          <option key={item} value={item}>{item.replace("_", " ")}</option>
        ))}
      </select>
    </label>
  );
}

function TogglePill({ label, checked, onChange }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`mt-[18px] min-h-10 rounded-2xl border px-3 text-xs font-black transition ${
        checked ? "border-blue-600 bg-blue-600 text-white" : "border-slate-200 bg-white text-slate-500 hover:bg-slate-50"
      }`}
    >
      {label}
    </button>
  );
}

function WorkflowBadge({ status }) {
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-black uppercase tracking-wider ${workflowStatusBadgeClass(status)}`}>
      {workflowStatusLabel(status)}
    </span>
  );
}

function PaymentBadge({ status }) {
  const tones = {
    pending_verification: "sky",
    approved: "green",
    rejected: "red",
    none: "slate",
  };
  return <SmallBadge tone={tones[status] || "slate"}>{status.replace("_", " ")}</SmallBadge>;
}

function DocumentBadge({ status }) {
  const tones = {
    preparing: "blue",
    ready: "amber",
    delivered: "green",
    expired: "red",
    not_ready: "slate",
  };
  return <SmallBadge tone={tones[status] || "slate"}>{status.replace("_", " ")}</SmallBadge>;
}

function PriorityBadge({ priority }) {
  if (priority === "urgent") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full border border-red-200 bg-red-100 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-red-700">
        <AlertTriangle size={12} /> Urgent
      </span>
    );
  }

  return <SmallBadge tone={priority === "high" ? "amber" : "slate"}>{priority}</SmallBadge>;
}

function SmallBadge({ tone = "slate", children }) {
  const classes = {
    amber: "border-amber-200 bg-amber-50 text-amber-700",
    blue: "border-blue-200 bg-blue-50 text-blue-700",
    green: "border-green-200 bg-green-50 text-green-700",
    red: "border-red-200 bg-red-50 text-red-700",
    sky: "border-sky-200 bg-sky-50 text-sky-700",
    slate: "border-slate-200 bg-slate-50 text-slate-600",
  };

  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-black uppercase tracking-wider ${classes[tone] || classes.slate}`}>
      {children}
    </span>
  );
}

function ActionCluster({ row, navigateToSection, completeJob, savingCode }) {
  const isDone = ["completed", "cancelled"].includes(row.workflowStatus);
  const isSaving = savingCode === row.bookingCode;

  return (
    <div className="flex flex-wrap gap-1.5">
      <ActionButton icon={ClipboardList} label="View Details" onClick={() => navigateToSection(row, "top")} />
      <ActionButton icon={Banknote} label="Quote" onClick={() => navigateToSection(row, "quote")} />
      <ActionButton icon={Banknote} label="Payment" onClick={() => navigateToSection(row, "payment")} />
      <ActionButton icon={FileUp} label="Document" onClick={() => navigateToSection(row, "document")} />
      <ActionButton icon={MessageSquare} label="Notes" onClick={() => navigateToSection(row, "notes")} />
      <button
        type="button"
        onClick={() => completeJob(row)}
        disabled={isDone || isSaving}
        className="inline-flex min-h-8 items-center gap-1.5 rounded-xl border border-green-200 bg-green-50 px-2.5 text-[10px] font-black text-green-700 transition hover:bg-green-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <CheckCircle2 size={13} />
        {isSaving ? "Completing..." : "Complete Job"}
      </button>
    </div>
  );
}

function ActionButton({ icon: Icon, label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex min-h-8 items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-2.5 text-[10px] font-black text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
    >
      <Icon size={13} />
      {label}
    </button>
  );
}

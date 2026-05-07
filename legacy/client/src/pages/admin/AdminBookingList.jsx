import React, { useState, useEffect } from "react";
import { LayoutList, Columns3, Search, Eye, Inbox } from "lucide-react";
import { getAdminBookings, updateAdminBookingQuotation, updateAdminBookingStatus } from "../../services/api.js";
import { 
  normalizeWorkflowStatus, getCustomerName, getDestination, 
  formatDate, workflowStatusBadgeClass, workflowStatusLabel,
  manualWorkflowStatuses, timeAgo 
} from "./adminUtils.js";

export default function AdminBookingList({ navigate, onBookingsChanged }) {
  const [viewMode, setViewMode] = useState("table");
  const [search, setSearch] = useState("");
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [savingCode, setSavingCode] = useState("");
  const [quotationBooking, setQuotationBooking] = useState(null);

  async function fetchBookings() {
    setLoading(true);
    setError("");
    try {
      const data = await getAdminBookings({ search });
      setBookings(data.bookings || []);
    } catch (requestError) {
      setError(requestError.message || "Unable to load bookings.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const timeout = window.setTimeout(fetchBookings, 250);
    return () => window.clearTimeout(timeout);
  }, [search]);

  async function updateStatus(bookingCode, status) {
    setSavingCode(bookingCode);
    setError("");
    try {
      await updateAdminBookingStatus(bookingCode, status);
      await fetchBookings();
      await onBookingsChanged?.();
    } catch (requestError) {
      setError(requestError.message || "Unable to update status.");
    } finally {
      setSavingCode("");
    }
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Control Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-[2rem] border border-slate-200 shadow-sm">
        <div className="relative w-full md:w-96 flex-shrink-0">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search code, customer name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 border-none text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
          />
        </div>
        <div className="flex p-1.5 bg-slate-50 border border-slate-100 rounded-2xl">
          <ToggleButton active={viewMode === "table"} icon={LayoutList} onClick={() => setViewMode("table")}>Table</ToggleButton>
          <ToggleButton active={viewMode === "kanban"} icon={Columns3} onClick={() => setViewMode("kanban")}>Kanban</ToggleButton>
        </div>
      </div>

      {error && <p className="rounded-2xl border border-red-200 bg-red-50 p-3 text-sm font-bold text-red-700">{error}</p>}

      {viewMode === "table" ? (
        <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
          {loading ? (
             <LoadingState />
          ) : bookings.length === 0 ? (
             <EmptyState />
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
                    <th className="px-6 py-4">ID / Customer</th>
                    <th className="px-6 py-4">Destination</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Created</th>
                    <th className="px-6 py-4">Workflow</th>
                    <th className="px-6 py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {bookings.map(b => (
                    <tr 
                      key={b.bookingCode} 
                      className="hover:bg-blue-50/50 transition-colors group"
                    >
                      <td className="px-6 py-5">
                        <p className="text-sm font-black text-slate-900 group-hover:text-blue-600 transition-colors">{getCustomerName(b)}</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase mt-0.5">{b.bookingCode}</p>
                      </td>
                      <td className="px-6 py-5 font-bold text-slate-600 text-sm">{getDestination(b)}</td>
                      <td className="px-6 py-5">
                        <span className={`px-3 py-1.5 rounded-full text-[10px] font-black border uppercase tracking-wider ${workflowStatusBadgeClass(b.status)}`}>
                          {workflowStatusLabel(b.status)}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <p className="text-xs font-bold text-slate-600">{formatDate(b.createdAt)}</p>
                        <p className="text-[10px] text-slate-400 font-medium">{timeAgo(b.createdAt)}</p>
                      </td>
                      <td className="px-6 py-5">
                        <select
                          value={normalizeWorkflowStatus(b.status)}
                          disabled={savingCode === b.bookingCode}
                          onChange={(event) => updateStatus(b.bookingCode, event.target.value)}
                          className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          {manualWorkflowStatuses.map((status) => (
                            <option key={status.key} value={status.key}>{status.label}</option>
                          ))}
                        </select>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <button
                          type="button"
                          onClick={() => setQuotationBooking(b)}
                          className="mr-2 text-xs font-black text-blue-600 hover:underline"
                        >
                          Quote
                        </button>
                        <button
                          type="button"
                          onClick={() => navigate(`/admin/bookings/${b.bookingCode}`)}
                          className="inline-flex p-2 rounded-xl bg-slate-50 text-slate-400 group-hover:text-blue-600 group-hover:bg-white group-hover:shadow-sm transition-all"
                        >
                          <Eye size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ) : (
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
          {loading ? <LoadingState /> : manualWorkflowStatuses.map(status => {
            const columnBookings = bookings.filter(b => normalizeWorkflowStatus(b.status) === status.key);
            
            return (
              <div key={status.key} className="bg-slate-50/80 backdrop-blur-sm rounded-[2rem] p-3 flex flex-col min-h-[600px] w-80 shrink-0 border border-slate-200 shadow-sm snap-center">
                <div className="px-3 py-4 flex items-center justify-between border-b border-slate-200/50 mb-3">
                  <h3 className="text-sm font-black text-slate-900">{status.label}</h3>
                  <span className="bg-white px-2.5 py-1 rounded-full text-[10px] font-black shadow-sm text-slate-600">
                    {columnBookings.length}
                  </span>
                </div>
                
                <div className="flex-1 overflow-y-auto space-y-3 custom-scrollbar pr-1">
                  {columnBookings.length === 0 ? (
                    <div className="py-10 text-center text-[11px] font-bold text-slate-400 border-2 border-dashed border-slate-200 rounded-2xl mx-2">
                      No cases
                    </div>
                  ) : (
                    columnBookings.map(b => (
                      <div 
                        key={b.bookingCode} 
                        onClick={() => navigate(`/admin/bookings/${b.bookingCode}`)}
                        className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer group"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{b.bookingCode}</p>
                          <span className="text-[9px] font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded">{timeAgo(b.createdAt)}</span>
                        </div>
                        <p className="text-sm font-black text-slate-900 truncate group-hover:text-blue-600 transition-colors">{getCustomerName(b)}</p>
                        <p className="text-xs font-bold text-slate-500 mt-1 truncate">{getDestination(b)}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {quotationBooking && (
        <QuotationModal
          booking={quotationBooking}
          onClose={() => setQuotationBooking(null)}
          onSaved={async () => {
            setQuotationBooking(null);
            await fetchBookings();
            await onBookingsChanged?.();
          }}
        />
      )}
    </div>
  );
}

// --- Helper Components ---

function ToggleButton({ active, icon: Icon, onClick, children }) {
  return (
    <button onClick={onClick} className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black transition-all ${
      active ? "bg-white text-blue-600 shadow-sm" : "text-slate-400 hover:text-slate-900 hover:bg-slate-100"
    }`}>
      <Icon size={16} /> {children}
    </button>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-slate-400">
      <div className="bg-slate-50 p-4 rounded-full mb-4">
        <Inbox size={40} className="text-slate-300" />
      </div>
      <p className="text-sm font-bold text-slate-600">No bookings found</p>
      <p className="text-xs mt-1">Try adjusting your search query.</p>
    </div>
  );
}

function LoadingState() {
  return <div className="p-10 text-center text-sm font-bold text-slate-400">Loading bookings...</div>;
}

function QuotationModal({ booking, onClose, onSaved }) {
  const [amount, setAmount] = useState(booking.quotationAmount || "");
  const [dueDate, setDueDate] = useState((booking.quotationDueDate || "").slice(0, 10));
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function saveQuotation() {
    setSaving(true);
    setError("");
    try {
      await updateAdminBookingQuotation(booking.bookingCode, {
        quotationAmount: amount,
        quotationCurrency: booking.quotationCurrency || "THB",
        quotationDueDate: dueDate,
        markSent: true,
      });
      await onSaved();
    } catch (requestError) {
      setError(requestError.message || "Unable to save quotation.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl">
        <h2 className="text-lg font-black text-slate-900">Send Quotation</h2>
        <p className="mt-1 text-sm text-slate-500">{booking.bookingCode} · {getCustomerName(booking)}</p>
        {error && <p className="mt-4 rounded-xl bg-red-50 p-3 text-sm font-bold text-red-700">{error}</p>}
        <div className="mt-5 grid gap-4">
          <label className="grid gap-2 text-xs font-black uppercase tracking-widest text-slate-400">
            Amount
            <input value={amount} onChange={(event) => setAmount(event.target.value)} type="number" className="rounded-2xl border border-slate-200 p-3 text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </label>
          <label className="grid gap-2 text-xs font-black uppercase tracking-widest text-slate-400">
            Due Date
            <input value={dueDate} onChange={(event) => setDueDate(event.target.value)} type="date" className="rounded-2xl border border-slate-200 p-3 text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </label>
        </div>
        <div className="mt-6 flex gap-3">
          <button onClick={onClose} className="flex-1 rounded-2xl border border-slate-200 py-3 text-sm font-black text-slate-600 hover:bg-slate-50">Cancel</button>
          <button onClick={saveQuotation} disabled={!amount || !dueDate || saving} className="flex-1 rounded-2xl bg-blue-600 py-3 text-sm font-black text-white hover:bg-blue-700 disabled:bg-slate-300">Send</button>
        </div>
      </div>
    </div>
  );
}

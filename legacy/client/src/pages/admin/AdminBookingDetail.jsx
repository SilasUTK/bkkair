import React, { useState, useEffect } from "react";
import { ArrowLeft, Save, Banknote, FileUp, MessageSquare, CheckCircle, XCircle, Loader2 } from "lucide-react";
import {
  getAdminBooking,
  updateAdminBookingDocument,
  updateAdminBookingFollowUp,
  updateAdminBookingNotes,
  updateAdminBookingPayment,
  updateAdminBookingQuotation,
  updateAdminBookingStatus,
} from "../../services/api.js";
import { 
  normalizeWorkflowStatus, getCustomerName, getDestination, 
  formatDate, workflowStatusBadgeClass, workflowStatusLabel 
} from "./adminUtils.js";

export default function AdminBookingDetail({ code, navigate, onBookingsChanged }) {
  const [booking, setBooking] = useState(null);
  const [adminNotes, setAdminNotes] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  
  // Controlled Inputs State for Workspace Forms
  const [quotePrice, setQuotePrice] = useState("");
  const [quoteDate, setQuoteDate] = useState("");
  const [paymentSlipUrl, setPaymentSlipUrl] = useState("");
  const [docExpiryDate, setDocExpiryDate] = useState("");
  const [followUpDate, setFollowUpDate] = useState("");

  async function fetchBooking() {
    setLoading(true);
    setError("");
    try {
      const data = await getAdminBooking(code);
      setBooking(data.booking || data);
      setAdminNotes(data.booking?.adminNotes || "");
      setQuotePrice(data.booking?.quotationAmount || data.quotationAmount || "");
      setQuoteDate((data.booking?.quotationDueDate || data.quotationDueDate || "").slice(0, 10));
      setPaymentSlipUrl(data.booking?.paymentSlipUrl || data.paymentSlipUrl || "");
      setDocExpiryDate((data.booking?.documentValidUntil || data.documentValidUntil || "").slice(0, 10));
      setFollowUpDate((data.booking?.staffFollowUpDate || data.staffFollowUpDate || "").slice(0, 16));
    } catch (requestError) {
      setError(requestError.message || "Unable to load booking.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBooking();
  }, [code]);

  useEffect(() => {
    if (loading) return;

    const sections = ["top", "quote", "payment", "document", "notes"];
    const section = sections.find((item) => window.sessionStorage.getItem(`bkkair-admin-focus-${item}-${code}`) === "1")
      || (window.sessionStorage.getItem(`bkkair-admin-focus-document-${code}`) === "1" ? "document" : "");

    if (!section) return;

    sections.forEach((item) => window.sessionStorage.removeItem(`bkkair-admin-focus-${item}-${code}`));
    window.sessionStorage.removeItem(`bkkair-admin-focus-document-${code}`);
    window.setTimeout(() => {
      document.getElementById(`admin-${section}-workspace`)?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  }, [code, loading]);

  async function runAction(action, successMessage) {
    setSaving(true);
    setError("");
    setMessage("");
    try {
      await action();
      await fetchBooking();
      await onBookingsChanged?.();
      setMessage(successMessage);
    } catch (requestError) {
      setError(requestError.message || "Action failed.");
    } finally {
      setSaving(false);
    }
  }

  const saveStatus = async (newStatus) => runAction(
    () => updateAdminBookingStatus(code, newStatus),
    "Status updated."
  );

  const sendQuotation = async () => runAction(
    () => updateAdminBookingQuotation(code, {
      quotationAmount: quotePrice,
      quotationCurrency: "THB",
      quotationDueDate: quoteDate,
      markSent: true,
    }),
    "Quotation saved and sent."
  );

  const approvePayment = async () => runAction(
    async () => {
      await updateAdminBookingPayment(code, { action: "approve" });
      await updateAdminBookingStatus(code, "processing");
    },
    "Payment approved."
  );

  const submitPaymentForReview = async () => runAction(
    () => updateAdminBookingPayment(code, {
      paymentStatus: "pending_verification",
      paymentSlipUrl,
    }),
    "Payment marked for verification."
  );

  const rejectPayment = async () => runAction(
    async () => {
      await updateAdminBookingPayment(code, { action: "reject", paymentRejectReason: "Rejected by staff review." });
      if (normalizeWorkflowStatus(booking.status) === "payment_pending") {
        await updateAdminBookingStatus(code, "quoted");
      }
    },
    "Payment rejected."
  );

  const saveDocument = async () => runAction(
    () => updateAdminBookingDocument(code, {
      documentStatus: "delivered",
      documentValidUntil: docExpiryDate,
      markCompleted: true,
    }),
    "Document status updated."
  );

  const saveFollowUp = async () => runAction(
    () => updateAdminBookingFollowUp(code, { staffFollowUpDate: followUpDate }),
    "Follow-up date saved."
  );

  const saveNotes = async () => runAction(
    () => updateAdminBookingNotes(code, adminNotes),
    "Internal notes saved."
  );

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-32 space-y-4">
        <Loader2 className="animate-spin text-blue-600" size={40} />
        <p className="text-sm font-black text-slate-400 uppercase tracking-widest animate-pulse">Loading Workspace...</p>
      </div>
    );
  }

  const currentStep = normalizeWorkflowStatus(booking.status);

  return (
    <div id="admin-top-workspace" className="space-y-6 animate-in fade-in duration-500 scroll-mt-28">
      <header className="flex flex-wrap gap-4 items-center justify-between bg-white p-4 rounded-3xl border border-slate-200 shadow-sm">
        <button onClick={() => navigate("/admin/bookings")} className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors">
          <ArrowLeft size={16} /> Back to List
        </button>
        <div className="flex items-center gap-4">
          <p className="text-lg font-black text-slate-900 tracking-tight">{booking.bookingCode}</p>
          <StatusBadge status={booking.status} />
        </div>
      </header>

      {(error || message) && (
        <p className={`rounded-2xl border p-3 text-sm font-bold ${error ? "border-red-200 bg-red-50 text-red-700" : "border-green-200 bg-green-50 text-green-700"}`}>
          {error || message}
        </p>
      )}

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_400px] gap-6">
        {/* Workspace Column */}
        <div className="space-y-6">
          {/* Section: Action Workspace */}
          <div className="bg-white rounded-[2rem] border border-blue-100 p-6 md:p-8 shadow-lg shadow-blue-900/5 relative overflow-hidden">
            <div className="absolute -top-6 -right-6 p-4 opacity-[0.03] pointer-events-none">
              <Banknote size={200} />
            </div>
            
            {currentStep === "new" && (
              <div id="admin-quote-workspace" className="space-y-6 relative z-10 scroll-mt-28">
                <div>
                  <h3 className="text-xl font-black text-slate-900">Quotation Generator</h3>
                  <p className="text-sm font-bold text-slate-500 mt-1">กรุณาประเมินราคาและกำหนดวันชำระเงินส่งให้ลูกค้า</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider">ราคา (THB)</label>
                     <input 
                       type="number" 
                       value={quotePrice}
                       onChange={(e) => setQuotePrice(e.target.value)}
                       className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl font-black text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
                       placeholder="e.g. 15000" 
                     />
                   </div>
                   <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider">กำหนดชำระ</label>
                     <input 
                       type="date" 
                       value={quoteDate}
                       onChange={(e) => setQuoteDate(e.target.value)}
                       className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl font-black text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
                     />
                   </div>
                </div>
                <button 
                  onClick={sendQuotation}
                  disabled={!quotePrice || !quoteDate || saving}
                  className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all shadow-lg shadow-blue-600/20 mt-4"
                >
                  Send Quotation to Customer
                </button>
              </div>
            )}

            {currentStep === "quoted" && (
              <div id="admin-payment-workspace" className="space-y-6 relative z-10 scroll-mt-28">
                <div>
                  <h3 className="text-xl font-black text-slate-900">Payment Intake</h3>
                  <p className="text-sm font-bold text-slate-500 mt-1">บันทึกลิงก์สลิปหรือหลักฐานการชำระเงิน แล้วส่งเข้าคิวตรวจสอบ</p>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Payment Slip URL</label>
                  <input
                    type="url"
                    value={paymentSlipUrl}
                    onChange={(event) => setPaymentSlipUrl(event.target.value)}
                    className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl font-black text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="https://..."
                  />
                </div>
                <button
                  type="button"
                  onClick={submitPaymentForReview}
                  disabled={!paymentSlipUrl || saving}
                  className="w-full py-4 bg-sky-600 text-white rounded-2xl font-black hover:bg-sky-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all shadow-lg shadow-sky-600/20 mt-4"
                >
                  Mark Payment Pending Verification
                </button>
              </div>
            )}

            {["payment_pending", "paid"].includes(currentStep) && (
              <div id="admin-payment-workspace" className="space-y-6 text-center relative z-10 scroll-mt-28">
                <h3 className="text-xl font-black text-slate-900">Payment Verification</h3>
                <div className="mx-auto max-w-sm rounded-2xl overflow-hidden border-4 border-slate-50 shadow-md">
                   {booking.paymentSlipUrl ? (
                     <img src={booking.paymentSlipUrl} alt="Slip" className="w-full h-auto object-cover" />
                   ) : (
                     <div className="flex min-h-[320px] items-center justify-center bg-slate-50 p-6 text-sm font-bold text-slate-400">
                       No slip attached yet
                     </div>
                   )}
                </div>
                <div className="flex gap-4 max-w-sm mx-auto">
                   <button onClick={approvePayment} disabled={saving} className="flex-1 py-3.5 bg-emerald-600 text-white rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-emerald-700 shadow-lg shadow-emerald-600/20 transition-colors disabled:opacity-60"><CheckCircle size={18} /> Approve</button>
                   <button onClick={rejectPayment} disabled={saving} className="flex-1 py-3.5 bg-red-50 text-red-600 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-red-100 transition-colors disabled:opacity-60"><XCircle size={18} /> Reject</button>
                </div>
              </div>
            )}

            {currentStep === "processing" && (
              <div id="admin-document-workspace" className="space-y-6 relative z-10 scroll-mt-28">
                <h3 className="text-xl font-black text-slate-900">Document Vault</h3>
                <div className="border-2 border-dashed border-blue-200 rounded-[2rem] p-10 md:p-14 text-center bg-blue-50/50 group hover:bg-blue-50 transition-colors cursor-pointer">
                   <FileUp className="mx-auto text-blue-500 mb-4 group-hover:-translate-y-1 transition-transform" size={48} />
                   <p className="text-sm font-black text-blue-900">Drop Visa Documents (PDF Only)</p>
                   <p className="text-xs font-bold text-blue-400 mt-2">Flight, Hotel, and Insurance Documents</p>
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider">เอกสารมีอายุถึงวันที่</label>
                   <input 
                     type="date" 
                     value={docExpiryDate}
                     onChange={(e) => setDocExpiryDate(e.target.value)}
                     className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl font-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
                   />
                </div>
                <button 
                  onClick={saveDocument}
                  disabled={!docExpiryDate || saving}
                  className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-black disabled:bg-slate-300 transition-all shadow-lg mt-2"
                >
                  Mark as Ready & Notify Customer
                </button>
              </div>
            )}

            {currentStep === "completed" && (
              <div className="py-12 text-center space-y-4 animate-in zoom-in-95 relative z-10">
                 <div className="h-20 w-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner"><CheckCircle size={40} /></div>
                 <h3 className="text-xl font-black text-slate-900">Case Completed</h3>
                 <p className="text-sm font-bold text-slate-500 max-w-xs mx-auto leading-relaxed">พนักงานส่งมอบเอกสารเรียบร้อยแล้ว ลูกค้าสามารถดาวน์โหลดได้ทันทีจากหน้า Portal</p>
              </div>
            )}
          </div>

          {/* Section: Booking Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoCard title="Travel Info" items={[
              { label: "Destination", value: getDestination(booking) },
              { label: "Departure", value: formatDate(booking.departureDate) },
              { label: "Return", value: formatDate(booking.returnDate) },
              { label: "Passengers", value: booking.passengerCount || "1" }
            ]} />
            <InfoCard title="Contact Info" items={[
              { label: "Customer", value: getCustomerName(booking) },
              { label: "Phone", value: booking.phone },
              { label: "LINE ID", value: booking.lineId || "-" },
              { label: "Email", value: booking.email }
            ]} />
          </div>
        </div>

        {/* Notes Column */}
        <div className="space-y-6">
           <div id="admin-notes-workspace" className="bg-white rounded-[2rem] border border-slate-200 p-6 shadow-sm sticky top-28 scroll-mt-28">
              <div className="mb-5 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Follow-up Date</label>
                <input
                  type="datetime-local"
                  value={followUpDate}
                  onChange={(event) => setFollowUpDate(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white p-3 text-sm font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={saveFollowUp}
                  disabled={saving}
                  className="mt-3 w-full rounded-xl border border-slate-200 bg-white py-2.5 text-xs font-black text-slate-700 hover:bg-slate-100 disabled:opacity-60"
                >
                  Save Follow-up
                </button>
              </div>
              <div className="flex items-center gap-2 mb-4 text-slate-400">
                 <MessageSquare size={18} />
                 <h3 className="text-[11px] font-black uppercase tracking-widest">Internal Notes</h3>
              </div>
              <textarea 
                value={adminNotes}
                onChange={(e) => setAdminNotes(e.target.value)}
                className="w-full h-80 p-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-all" 
                placeholder="Team-only notes (e.g. customer contacted via LINE...)"
              />
              <button 
                onClick={saveNotes}
                disabled={saving}
                className="mt-4 w-full py-3.5 bg-slate-50 border border-slate-200 text-slate-700 rounded-xl font-black text-xs flex items-center justify-center gap-2 hover:bg-slate-100 hover:border-slate-300 transition-all"
              >
                 <Save size={16} /> Save Notes
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}

// --- Helper Components ---

function StatusBadge({ status }) {
  return (
    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black border uppercase tracking-widest shadow-sm ${workflowStatusBadgeClass(status)}`}>
      {workflowStatusLabel(status)}
    </span>
  );
}

function InfoCard({ title, items }) {
  return (
    <div className="bg-white rounded-[2rem] border border-slate-200 p-6 shadow-sm">
      <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-5">{title}</h3>
      <div className="space-y-3.5">
        {items.map(i => (
          <div key={i.label} className="flex justify-between items-center border-b border-slate-50 pb-3 last:border-0 last:pb-0">
            <span className="text-xs font-bold text-slate-500">{i.label}</span>
            <span className="text-xs font-black text-slate-900 text-right">{i.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

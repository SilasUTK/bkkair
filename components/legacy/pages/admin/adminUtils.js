export const staffMembers = ["Siam", "Admin", "Sales Team", "Ticketing Team", "Visa Support"];
export const staffFilterOptions = ["All Staff", "Unassigned", ...staffMembers];
export const currentStaff = "Siam";

export const manualWorkflowStatuses = [
  { key: "new", label: "คำขอใหม่", description: "รอตรวจสอบ / ประเมินราคา", color: "red" },
  { key: "quoted", label: "เสนอราคาแล้ว", description: "รอชำระเงิน", color: "amber" },
  { key: "payment_pending", label: "รอตรวจสลิป", description: "ชำระเงินแล้ว / รอตรวจสลิป", color: "sky" },
  { key: "paid", label: "ชำระเงินอนุมัติแล้ว", description: "อนุมัติยอดแล้ว รอดำเนินการ", color: "emerald" },
  { key: "processing", label: "กำลังทำเอกสาร", description: "ทีมงานกำลังดำเนินการ", color: "blue" },
  { key: "completed", label: "ส่งงานแล้ว", description: "ลูกค้าดาวน์โหลดเอกสารได้", color: "green" },
  { key: "cancelled", label: "ยกเลิก", description: "คำขอถูกยกเลิก", color: "slate" },
];

export function normalizeWorkflowStatus(status) {
  const normalized = String(status || "new").trim().toLowerCase().replace(/\s+/g, "_").replace(/-/g, "_");
  if (["pending_review", "pending_staff_review", "new", "new_request", "needs_quotation"].includes(normalized)) return "new";
  if (normalized.includes("quoted") || normalized.includes("quotation")) return "quoted";
  if (["pending_payment", "payment_pending"].includes(normalized) || normalized.includes("slip")) return "payment_pending";
  if (normalized.includes("paid") || normalized === "payment_approved") return "paid";
  if (normalized === "processing") return "processing";
  if (normalized === "completed") return "completed";
  if (normalized === "cancelled" || normalized === "canceled") return "cancelled";
  return "new";
}

export function workflowStatusLabel(status) {
  const key = normalizeWorkflowStatus(status);
  const statusConfig = manualWorkflowStatuses.find((item) => item.key === key);
  return statusConfig ? statusConfig.label : status;
}

export function workflowStatusBadgeClass(status) {
  const s = normalizeWorkflowStatus(status);
  const badgeColors = {
    new: "border-red-200 bg-red-50 text-red-700",
    quoted: "border-amber-200 bg-amber-50 text-amber-700",
    payment_pending: "border-sky-200 bg-sky-50 text-sky-700",
    paid: "border-emerald-200 bg-emerald-50 text-emerald-700",
    processing: "border-blue-200 bg-blue-50 text-blue-700",
    completed: "border-green-200 bg-green-50 text-green-700",
    cancelled: "border-slate-200 bg-slate-50 text-slate-700"
  };
  return badgeColors[s] || "border-slate-200 bg-slate-50 text-slate-700";
}

// Data Extractors
export const getCustomerName = (booking) => booking?.customerName || [booking?.firstName, booking?.surname].filter(Boolean).join(" ") || booking?.name || "-";
export const getDestination = (booking) => booking?.destination || booking?.visaCountry || "-";
export const getAirline = (booking) => booking?.airline || booking?.preferredAirlines || "-";
export const getContactLine = (booking) => [booking?.email, booking?.lineId].filter(Boolean).join(" / ") || "-";

// Formatters
export function formatDate(value) {
  if (!value) return "-";
  return new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(value));
}

export function formatDateTime(value) {
  if (!value) return "-";
  return new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }).format(new Date(value));
}

export function timeAgo(value) {
  if (!value) return "Just now";
  const timestamp = new Date(value).getTime();
  if (Number.isNaN(timestamp)) return "Just now";

  const diffMinutes = Math.max(0, Math.floor((Date.now() - timestamp) / 60000));
  if (diffMinutes < 1) return "Just now";
  if (diffMinutes < 60) return `${diffMinutes}m ago`;

  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours}h ago`;

  return `${Math.floor(diffHours / 24)}d ago`;
}

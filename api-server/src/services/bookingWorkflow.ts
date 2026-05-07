export const workflowStatuses = ["new", "quoted", "payment_pending", "paid", "processing", "completed", "cancelled"];
export const paymentStatuses = ["none", "pending_verification", "approved", "rejected"];
export const documentStatuses = ["not_ready", "preparing", "ready", "delivered", "expired"];

const legacyStatusMap: Record<string, string> = {
  "Pending Review": "new",
  Processing: "processing",
  Completed: "completed",
  Cancelled: "cancelled",
};

const allowedTransitions: Record<string, string[]> = {
  new: ["new", "quoted", "payment_pending", "processing", "cancelled"],
  quoted: ["quoted", "payment_pending", "paid", "cancelled"],
  payment_pending: ["payment_pending", "paid", "quoted", "cancelled"],
  paid: ["paid", "processing", "cancelled"],
  processing: ["processing", "completed", "cancelled"],
  completed: ["completed"],
  cancelled: ["cancelled"],
};

export function normalizeWorkflowStatus(status: unknown): string {
  const rawStatus = String(status || "new").trim();
  if (legacyStatusMap[rawStatus]) return legacyStatusMap[rawStatus];

  const normalized = rawStatus.toLowerCase().replace(/\s+/g, "_").replace(/-/g, "_");
  if (["pending_review", "pending_staff_review", "needs_quotation"].includes(normalized)) return "new";
  if (["quotation", "quotation_sent"].includes(normalized)) return "quoted";
  if (["pending_payment", "payment_pending"].includes(normalized)) return "payment_pending";
  if (["paid", "payment_approved"].includes(normalized)) return "paid";
  if (workflowStatuses.includes(normalized)) return normalized;

  return "new";
}

export function assertValidWorkflowTransition(currentStatus: unknown, nextStatus: unknown) {
  const current = normalizeWorkflowStatus(currentStatus);
  const next = normalizeWorkflowStatus(nextStatus);

  if (!workflowStatuses.includes(next)) {
    return { valid: false, error: "Invalid status" };
  }

  if (!allowedTransitions[current]?.includes(next)) {
    return {
      valid: false,
      error: `Invalid status transition from ${current} to ${next}`,
    };
  }

  return { valid: true, current, next };
}

export function normalizePaymentStatus(status: unknown): string | null {
  const normalized = String(status || "none").trim().toLowerCase();
  return paymentStatuses.includes(normalized) ? normalized : null;
}

export function normalizeDocumentStatus(status: unknown): string | null {
  const normalized = String(status || "not_ready").trim().toLowerCase();
  return documentStatuses.includes(normalized) ? normalized : null;
}

export function publicBookingResponse(booking: any) {
  const response: any = {
    bookingCode: booking.bookingCode,
    status: normalizeWorkflowStatus(booking.status),
    route: {
      origin: booking.origin || null,
      destination: booking.destination || booking.visaCountry || null,
    },
    departureDate: booking.departureDate || null,
    returnDate: booking.returnDate || null,
    passengers: booking.passengerCount || null,
    cabinClass: booking.cabinClass || null,
    paymentStatus: booking.paymentStatus || "none",
    documentStatus: booking.documentStatus || "not_ready",
    documentValidUntil: booking.documentValidUntil || null,
  };

  if (booking.quotationSentAt) {
    response.quotationAmount = booking.quotationAmount;
    response.quotationCurrency = booking.quotationCurrency || "THB";
    response.quotationDueDate = booking.quotationDueDate || null;
  }

  return response;
}

export function normalizeBookingRow(booking: any) {
  if (!booking) return booking;

  return {
    ...booking,
    status: normalizeWorkflowStatus(booking.status),
    paymentStatus: booking.paymentStatus || "none",
    documentStatus: booking.documentStatus || "not_ready",
    quotationCurrency: booking.quotationCurrency || "THB",
  };
}

export function compactUpdatePayload(payload: Record<string, unknown>, columns: Set<string>) {
  return Object.entries(payload).filter(([key, value]) => columns.has(key) && value !== undefined && value !== null);
}

export function buildUpdateQuery(tableName: string, payload: Record<string, unknown>, columns: Set<string>, whereColumn: string) {
  const entries = compactUpdatePayload(payload, columns);

  if (entries.length === 0) {
    return null;
  }

  return {
    sql: `UPDATE ${tableName} SET ${entries.map(([key]) => `${key} = ?`).join(", ")} WHERE ${whereColumn} = ?`,
    values: entries.map(([, value]) => (value === "" ? null : value)),
  };
}

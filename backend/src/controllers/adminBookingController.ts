import { Request, Response } from "express";
import pool from "../services/db.js";
import { sendLineNotification } from "../services/lineNotify.js";
import {
  assertValidWorkflowTransition,
  buildUpdateQuery,
  normalizeBookingRow,
  normalizeDocumentStatus,
  normalizePaymentStatus,
  normalizeWorkflowStatus,
} from "../services/bookingWorkflow.js";
import { saveDocumentFile, getDocumentFile, deleteDocumentFile, listDocumentFiles } from "../services/fileStorage.js";

const staffMembers = ["Siam", "Admin", "Sales Team", "Ticketing Team", "Visa Support"];

function readParam(value: string | string[] | undefined): string {
  return Array.isArray(value) ? value[0] || "" : value || "";
}

async function getBookingColumns(): Promise<Set<string>> {
  const [columns] = await pool.query("SHOW COLUMNS FROM bookings");
  return new Set((columns as any[]).map((column) => column.Field));
}

async function getBookingByIdentifier(identifier: string) {
  const cleanIdentifier = String(identifier || "").trim();
  if (!cleanIdentifier) return null;

  const isNumericId = /^\d+$/.test(cleanIdentifier);
  const [rows] = await pool.query(
    `SELECT * FROM bookings WHERE ${isNumericId ? "id" : "bookingCode"} = ? LIMIT 1`,
    [isNumericId ? Number(cleanIdentifier) : cleanIdentifier.toUpperCase()]
  );

  return (rows as any[])[0] || null;
}

async function updateBooking(identifier: string, payload: Record<string, unknown>) {
  const columns = await getBookingColumns();
  const booking = await getBookingByIdentifier(identifier);

  if (!booking) return null;

  const whereColumn = /^\d+$/.test(String(identifier || "").trim()) ? "id" : "bookingCode";
  const whereValue = whereColumn === "id" ? booking.id : booking.bookingCode;
  const updatePayload = {
    ...payload,
    updatedAt: columns.has("updatedAt") ? new Date() : undefined,
  };

  const query = buildUpdateQuery("bookings", updatePayload, columns, whereColumn);
  if (!query) return normalizeBookingRow(booking);

  await pool.query(query.sql, [...query.values, whereValue]);

  const updatedBooking = await getBookingByIdentifier(identifier);
  return normalizeBookingRow(updatedBooking);
}

function formatAssignmentMessage(booking: any) {
  return [
    "Booking Assigned",
    "",
    `Code: ${booking.bookingCode || "-"}`,
    `Assigned to: ${booking.assignedStaff || "-"}`,
    `Customer: ${booking.customerName || booking.name || "-"}`,
    `Phone: ${booking.phone || "-"}`,
    `Route: ${booking.origin || "-"} -> ${booking.destination || booking.visaCountry || "-"}`,
    `Departure: ${booking.departureDate || "-"}`,
  ].join("\n");
}

export async function listAdminBookings(req: Request, res: Response) {
  try {
    const { search = "", status = "All", assignedStaff = "All Staff" } = req.query as Record<string, string>;
    const columns = await getBookingColumns();
    const where: string[] = [];
    const params: string[] = [];

    if (status && status !== "All" && columns.has("status")) {
      const normalizedStatus = normalizeWorkflowStatus(status);
      where.push("status = ?");
      params.push(normalizedStatus);
    }

    if (columns.has("assignedStaff") && assignedStaff && assignedStaff !== "All Staff") {
      if (assignedStaff === "Unassigned") {
        where.push("(assignedStaff IS NULL OR assignedStaff = '')");
      } else {
        where.push("assignedStaff = ?");
        params.push(assignedStaff);
      }
    }

    if (search) {
      const searchableColumns = ["bookingCode", "customerName", "name", "phone", "destination", "visaCountry"].filter(
        (column) => columns.has(column)
      );

      if (searchableColumns.length > 0) {
        where.push(`(${searchableColumns.map((column) => `${column} LIKE ?`).join(" OR ")})`);
        params.push(...searchableColumns.map(() => `%${search}%`));
      }
    }

    const orderColumn = columns.has("createdAt") ? "createdAt" : columns.has("id") ? "id" : "bookingCode";
    const whereClause = where.length > 0 ? `WHERE ${where.join(" AND ")}` : "";
    const [rows] = await pool.query(`SELECT * FROM bookings ${whereClause} ORDER BY ${orderColumn} DESC`, params);

    return res.json({ bookings: (rows as any[]).map(normalizeBookingRow) });
  } catch (error) {
    console.error("Admin list bookings error:", error);
    return res.status(500).json({ error: "Unable to fetch bookings" });
  }
}

export async function getAdminBooking(req: Request, res: Response) {
  try {
    const booking = await getBookingByIdentifier(readParam(req.params.id));
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    return res.json(normalizeBookingRow(booking));
  } catch (error) {
    console.error("Admin get booking error:", error);
    return res.status(500).json({ error: "Unable to fetch booking" });
  }
}

export async function updateAdminBookingStatus(req: Request, res: Response) {
  try {
    const { status } = req.body || {};
    const booking = await getBookingByIdentifier(readParam(req.params.id));

    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    const transition = assertValidWorkflowTransition(booking.status, status);
    if (!transition.valid) {
      return res.status(400).json({ error: transition.error });
    }

    const updatedBooking = await updateBooking(readParam(req.params.id), { status: transition.next });
    return res.json({ message: "Status updated", booking: updatedBooking });
  } catch (error) {
    console.error("Admin update status error:", error);
    return res.status(500).json({ error: "Unable to update status" });
  }
}

export async function updateAdminBookingNotes(req: Request, res: Response) {
  try {
    const { adminNotes = "" } = req.body || {};
    const updatedBooking = await updateBooking(readParam(req.params.id), { adminNotes });

    if (!updatedBooking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    return res.json({ message: "Notes saved", booking: updatedBooking });
  } catch (error) {
    console.error("Admin update notes error:", error);
    return res.status(500).json({ error: "Unable to save notes" });
  }
}

export async function assignAdminBooking(req: Request, res: Response) {
  try {
    const { assignedStaff } = req.body || {};
    const cleanAssignedStaff = String(assignedStaff || "").trim();

    if (!cleanAssignedStaff) {
      return res.status(400).json({ error: "Assigned staff is required" });
    }

    if (!staffMembers.includes(cleanAssignedStaff)) {
      return res.status(400).json({ error: "Invalid staff member" });
    }

    const updatedBooking = await updateBooking(readParam(req.params.id), { assignedStaff: cleanAssignedStaff });
    if (!updatedBooking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    sendLineNotification(formatAssignmentMessage(updatedBooking)).catch((notificationError) => {
      console.error("LINE assignment notification dispatch error:", notificationError.message);
    });

    return res.json({ message: "Booking assigned successfully.", booking: updatedBooking });
  } catch (error) {
    console.error("Admin assign booking error:", error);
    return res.status(500).json({ error: "Unable to assign booking" });
  }
}

export async function updateAdminBookingQuotation(req: Request, res: Response) {
  try {
    const { quotationAmount, quotationCurrency = "THB", quotationDueDate, markSent = false, send = false } = req.body || {};
    const booking = await getBookingByIdentifier(readParam(req.params.id));

    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    if (quotationAmount === undefined || quotationAmount === null || Number(quotationAmount) < 0) {
      return res.status(400).json({ error: "Valid quotationAmount is required" });
    }

    const shouldSend = Boolean(markSent || send);
    const payload: Record<string, unknown> = {
      quotationAmount: Number(quotationAmount),
      quotationCurrency: String(quotationCurrency || "THB").trim().toUpperCase(),
      quotationDueDate: quotationDueDate || null,
      quotationSentAt: shouldSend ? new Date() : undefined,
      status: shouldSend ? "quoted" : undefined,
    };

    if (shouldSend) {
      const transition = assertValidWorkflowTransition(booking.status, "quoted");
      if (!transition.valid) {
        return res.status(400).json({ error: transition.error });
      }
    }

    const updatedBooking = await updateBooking(readParam(req.params.id), payload);
    return res.json({ message: shouldSend ? "Quotation sent" : "Quotation saved", booking: updatedBooking });
  } catch (error) {
    console.error("Admin update quotation error:", error);
    return res.status(500).json({ error: "Unable to update quotation" });
  }
}

export async function updateAdminBookingPayment(req: Request, res: Response) {
  try {
    const { action, paymentStatus, paymentSlipUrl, paymentRejectReason } = req.body || {};
    const booking = await getBookingByIdentifier(readParam(req.params.id));

    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    let nextPaymentStatus = normalizePaymentStatus(paymentStatus);
    const payload: Record<string, unknown> = {};

    if (paymentSlipUrl !== undefined) {
      payload.paymentSlipUrl = paymentSlipUrl || null;
      payload.paymentSlipUploadedAt = paymentSlipUrl ? new Date() : null;
      nextPaymentStatus = nextPaymentStatus || "pending_verification";
    }

    if (action === "approve") {
      nextPaymentStatus = "approved";
      payload.paymentApprovedAt = new Date();
      payload.paymentRejectedAt = null;
      payload.paymentRejectReason = null;

      const transition = assertValidWorkflowTransition(booking.status, "paid");
      if (!transition.valid) {
        return res.status(400).json({ error: transition.error });
      }
      payload.status = "paid";
    } else if (action === "reject") {
      nextPaymentStatus = "rejected";
      payload.paymentRejectedAt = new Date();
      payload.paymentRejectReason = paymentRejectReason || null;
      payload.paymentApprovedAt = null;
    }

    if (!nextPaymentStatus) {
      return res.status(400).json({ error: "Invalid paymentStatus" });
    }

    payload.paymentStatus = nextPaymentStatus;
    if (nextPaymentStatus === "pending_verification" && normalizeWorkflowStatus(booking.status) === "quoted") {
      const transition = assertValidWorkflowTransition(booking.status, "payment_pending");
      if (!transition.valid) {
        return res.status(400).json({ error: transition.error });
      }
      payload.status = "payment_pending";
    }

    const updatedBooking = await updateBooking(readParam(req.params.id), payload);
    return res.json({ message: "Payment updated", booking: updatedBooking });
  } catch (error) {
    console.error("Admin update payment error:", error);
    return res.status(500).json({ error: "Unable to update payment" });
  }
}

export async function updateAdminBookingDocument(req: Request, res: Response) {
  try {
    const { documentStatus = "preparing", documentValidUntil, markCompleted = false } = req.body || {};
    const normalizedDocumentStatus = normalizeDocumentStatus(documentStatus);

    if (!normalizedDocumentStatus) {
      return res.status(400).json({ error: "Invalid documentStatus" });
    }

    const booking = await getBookingByIdentifier(readParam(req.params.id));
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    const payload: Record<string, unknown> = {
      documentStatus: normalizedDocumentStatus,
      documentValidUntil: documentValidUntil || null,
    };

    if (markCompleted || normalizedDocumentStatus === "delivered") {
      const transition = assertValidWorkflowTransition(booking.status, "completed");
      if (!transition.valid) {
        return res.status(400).json({ error: transition.error });
      }
      payload.status = "completed";
    } else if (normalizeWorkflowStatus(booking.status) === "paid") {
      const transition = assertValidWorkflowTransition(booking.status, "processing");
      if (!transition.valid) {
        return res.status(400).json({ error: transition.error });
      }
      payload.status = "processing";
    }

    const updatedBooking = await updateBooking(readParam(req.params.id), payload);
    return res.json({ message: "Document status updated", booking: updatedBooking });
  } catch (error) {
    console.error("Admin update document error:", error);
    return res.status(500).json({ error: "Unable to update document" });
  }
}

export async function updateAdminBookingFollowUp(req: Request, res: Response) {
  try {
    const { staffFollowUpDate } = req.body || {};
    const updatedBooking = await updateBooking(readParam(req.params.id), {
      staffFollowUpDate: staffFollowUpDate || null,
    });

    if (!updatedBooking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    return res.json({ message: "Follow-up date updated", booking: updatedBooking });
  } catch (error) {
    console.error("Admin update follow-up error:", error);
    return res.status(500).json({ error: "Unable to update follow-up date" });
  }
}

export async function uploadAdminBookingDocument(req: Request, res: Response) {
  try {
    const booking = await getBookingByIdentifier(readParam(req.params.id));
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const { filename, buffer } = req.file;
    const savedPath = await saveDocumentFile(booking.bookingCode, filename, buffer);

    return res.json({
      message: "Document uploaded successfully",
      filename: filename,
      path: savedPath,
    });
  } catch (error) {
    console.error("Admin upload document error:", error);
    return res.status(500).json({ error: "Unable to upload document" });
  }
}

export async function downloadAdminBookingDocument(req: Request, res: Response) {
  try {
    const booking = await getBookingByIdentifier(readParam(req.params.id));
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    const { filename } = req.query;
    if (!filename || typeof filename !== "string") {
      return res.status(400).json({ error: "Filename is required" });
    }

    const buffer = await getDocumentFile(booking.bookingCode, filename);
    res.setHeader("Content-Type", "application/octet-stream");
    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
    res.send(buffer);
  } catch (error) {
    console.error("Admin download document error:", error);
    return res.status(500).json({ error: "Unable to download document" });
  }
}

export async function listAdminBookingDocuments(req: Request, res: Response) {
  try {
    const booking = await getBookingByIdentifier(readParam(req.params.id));
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    const files = await listDocumentFiles(booking.bookingCode);
    return res.json({ files });
  } catch (error) {
    console.error("Admin list documents error:", error);
    return res.status(500).json({ error: "Unable to list documents" });
  }
}

export async function deleteAdminBookingDocument(req: Request, res: Response) {
  try {
    const booking = await getBookingByIdentifier(readParam(req.params.id));
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    const { filename } = req.query;
    if (!filename || typeof filename !== "string") {
      return res.status(400).json({ error: "Filename is required" });
    }

    await deleteDocumentFile(booking.bookingCode, filename);
    return res.json({ message: "Document deleted successfully" });
  } catch (error) {
    console.error("Admin delete document error:", error);
    return res.status(500).json({ error: "Unable to delete document" });
  }
}

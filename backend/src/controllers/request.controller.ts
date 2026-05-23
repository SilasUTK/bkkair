import { Request, Response } from "express";
import pool from "../services/db.js";
import { sendHeroRequestEmail } from "../services/email.service.js";

function normalize(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

async function generateRequestCode(): Promise<string> {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (let attempt = 0; attempt < 10; attempt += 1) {
    const code = Array.from({ length: 6 }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join("");
    const [rows] = await pool.query("SELECT bookingCode FROM bookings WHERE bookingCode = ? LIMIT 1", [code]);

    if ((rows as any[]).length === 0) return code;
  }

  throw new Error("Unable to generate request code");
}

async function saveRequest(payload: {
  source: string;
  destination: string;
  visaType: string;
  name: string;
  contact: string;
  travelDate: string;
}) {
  const [columns] = await pool.query("SHOW COLUMNS FROM bookings");
  const availableColumns = new Set((columns as any[]).map((column) => column.Field));

  const bookingCode = availableColumns.has("bookingCode") ? await generateRequestCode() : null;
  const mappedData: Record<string, unknown> = {
    bookingCode,
    customerName: payload.name,
    name: payload.name,
    phone: payload.contact,
    lineId: payload.contact,
    destination: payload.destination,
    visaCountry: payload.destination,
    serviceType: payload.visaType || "Quick Request",
    departureDate: payload.travelDate || null,
    status: "new",
    adminNotes: `Source: ${payload.source}`,
  };

  const insertableEntries = Object.entries(mappedData).filter(
    ([key, value]) => availableColumns.has(key) && value !== undefined
  );

  if (insertableEntries.length === 0) {
    throw new Error("No compatible columns available to store hero request");
  }

  const columnNames = insertableEntries.map(([key]) => key);
  const values = insertableEntries.map(([, value]) => (value === "" ? null : value));
  const placeholders = columnNames.map(() => "?").join(", ");

  await pool.query(`INSERT INTO bookings (${columnNames.join(", ")}) VALUES (${placeholders})`, values);
}

export async function createRequest(req: Request, res: Response) {
  try {
    const source = normalize(req.body?.source) || "homepage_hero";
    const destination = normalize(req.body?.destination);
    const visaType = normalize(req.body?.visaType);
    const name = normalize(req.body?.name);
    const contact = normalize(req.body?.contact);
    const travelDate = normalize(req.body?.travelDate);

    if (!name || !contact || !destination) {
      return res.status(400).json({
        success: false,
        message: "name, contact, and destination are required",
      });
    }

    if (travelDate && Number.isNaN(Date.parse(travelDate))) {
      return res.status(400).json({
        success: false,
        message: "travelDate must be a valid date string",
      });
    }

    const requestPayload = {
      source,
      destination,
      visaType,
      name,
      contact,
      travelDate,
    };

    const submittedAtIso = new Date().toISOString();

    console.info("[Hero Request] Received", {
      source,
      destination,
      visaType: visaType || "not_specified",
      hasTravelDate: Boolean(travelDate),
      submittedAtIso,
    });

    await saveRequest(requestPayload);
    console.info("[Hero Request] Saved request record");

    const emailId = await sendHeroRequestEmail({
      ...requestPayload,
      submittedAtIso,
    });

    console.info("[Hero Request] Completed", { emailId });

    return res.status(200).json({
      success: true,
      message: "Request received and email sent successfully",
      emailId,
    });
  } catch (error) {
    console.error("[Hero Request] Failed:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to send message",
    });
  }
}

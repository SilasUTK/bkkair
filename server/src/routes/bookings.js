import express from "express";
import pool from "../config/db.js";
import { sendLineNotification } from "../services/lineNotify.js";
import { normalizeWorkflowStatus, publicBookingResponse } from "../services/bookingWorkflow.js";

const router = express.Router();

async function generateBookingCode() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (let attempt = 0; attempt < 10; attempt += 1) {
    const code = Array.from({ length: 6 }, () =>
      alphabet[Math.floor(Math.random() * alphabet.length)]
    ).join("");

    const [rows] = await pool.query(
      "SELECT bookingCode FROM bookings WHERE bookingCode = ? LIMIT 1",
      [code]
    );

    if (rows.length === 0) return code;
  }

  throw new Error("Unable to generate booking code");
}

async function insertBooking(data) {
  const [columns] = await pool.query("SHOW COLUMNS FROM bookings");
  const availableColumns = new Set(columns.map((column) => column.Field));

  const insertableEntries = Object.entries(data).filter(([key]) =>
    availableColumns.has(key)
  );

  const columnNames = insertableEntries.map(([key]) => key);
  const values = insertableEntries.map(([, value]) =>
    value === undefined || value === "" ? null : value
  );

  const placeholders = columnNames.map(() => "?").join(", ");

  await pool.query(
    `INSERT INTO bookings (${columnNames.join(", ")}) VALUES (${placeholders})`,
    values
  );
}

async function getBookingColumns() {
  const [columns] = await pool.query("SHOW COLUMNS FROM bookings");
  return new Set(columns.map((column) => column.Field));
}

function getTomorrowDateInput() {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 1);
  return date.toISOString().slice(0, 10);
}

router.post("/", async (req, res) => {
  try {
    const {
      title,
      firstName,
      surname,
      name,
      customerName: legacyCustomerName,
      email,
      phone,
      lineId,

      passportNumber,
      dateOfBirth,
      passportExpiryDate,

      serviceType,
      visaCountry,
      origin,
      destination,
      departureDate,
      returnDate,

      preferredAirlines,
      airline,
      cabinClass,
      passengerCount,
      attachmentName,
    } = req.body;

    const bookingCode = await generateBookingCode();
    const status = "new";

    // แก้ไข: รวมชื่อลูกค้า
    const finalCustomerName =
      name ||
      legacyCustomerName ||
      [title, firstName, surname].filter(Boolean).join(" ") ||
      "Website Quick Request";

    const finalPhone = phone || "";

    const finalDestination = destination || visaCountry || null;
    const finalAirline = airline || preferredAirlines || null;
    const finalServiceType = serviceType || "Quick Visa Request";

    const finalEmail = email || null;
    const finalPassengerCount = Number(passengerCount || 1);

    if (finalPassengerCount > 8) {
      return res.status(400).json({
        error: "Passenger count must not exceed 8",
      });
    }

    if (!finalCustomerName.trim() || !finalPhone.trim()) {
      return res.status(400).json({
        error: "Contact name and phone are required",
      });
    }

    if (!finalDestination || !departureDate) {
      return res.status(400).json({
        error: "Destination and departure date are required",
      });
    }

    if (departureDate < getTomorrowDateInput()) {
      return res.status(400).json({
        error: "Departure date must be tomorrow or later",
      });
    }

    if (returnDate && returnDate <= departureDate) {
      return res.status(400).json({
        error: "Return date must be after departure date",
      });
    }

    const bookingData = {
      bookingCode,
      title: title || null,
      firstName: firstName || null,
      surname: surname || null,
      customerName: finalCustomerName,
      email: finalEmail,
      phone: finalPhone,
      lineId: lineId || null,

      passportNumber: passportNumber || null,
      dateOfBirth: dateOfBirth || null,
      passportExpiryDate: passportExpiryDate || null,

      serviceType: finalServiceType,
      visaCountry: finalDestination,
      origin: origin || null,
      destination: finalDestination,
      departureDate: departureDate || null,
      returnDate: returnDate || null,

      preferredAirlines: finalAirline,
      airline: finalAirline,
      cabinClass: cabinClass || "Economy",
      passengerCount: finalPassengerCount,
      attachmentName: attachmentName || null,

      status,
    };

    await insertBooking(bookingData);
    sendLineNotification(formatLineBookingMessage(bookingData)).catch((notificationError) => {
      console.error("LINE notification dispatch error:", notificationError.message);
    });

    res.status(201).json(bookingData);
  } catch (error) {
    console.error("Create booking error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

function formatLineBookingMessage(booking) {
  return [
    "New BKK AIR Request",
    "",
    `Name: ${booking.customerName || "-"}`,
    `Phone: ${booking.phone || "-"}`,
    `LINE: ${booking.lineId || "-"}`,
    `Email: ${booking.email || "-"}`,
    "",
    `Route: ${booking.origin || "-"} → ${booking.destination || booking.visaCountry || "-"}`,
    `Departure: ${booking.departureDate || "-"}`,
    `Return: ${booking.returnDate || "-"}`,
    `Passengers: ${booking.passengerCount || "-"}`,
    `Cabin: ${booking.cabinClass || "-"}`,
    `Airline: ${booking.airline || booking.preferredAirlines || "-"}`,
    "",
    `Status: ${normalizeWorkflowStatus(booking.status)}`,
    "",
    "Action:",
    "Contact customer within 1–3 hours.",
  ].join("\n");
}

router.get("/check/:bookingCode", async (req, res) => {
  try {
    const bookingCode = req.params.bookingCode?.trim().toUpperCase();

    const columns = await getBookingColumns();
    const safeColumns = [
      "bookingCode",
      "status",
      "origin",
      "destination",
      "visaCountry",
      "departureDate",
      "returnDate",
      "passengerCount",
      "cabinClass",
      "quotationAmount",
      "quotationCurrency",
      "quotationDueDate",
      "quotationSentAt",
      "paymentStatus",
      "documentStatus",
      "documentValidUntil"
    ].filter((column) => columns.has(column));

    const [rows] = await pool.query(
      `SELECT ${safeColumns.join(", ")} FROM bookings WHERE bookingCode = ? LIMIT 1`,
      [bookingCode]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: "Booking not found" });
    }

    res.json(publicBookingResponse(rows[0]));
  } catch (error) {
    console.error("Check booking error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/:code", async (req, res) => {
  try {
    const bookingCode = req.params.code?.trim().toUpperCase();
    const columns = await getBookingColumns();
    const safeColumns = [
      "bookingCode",
      "status",
      "origin",
      "destination",
      "visaCountry",
      "departureDate",
      "returnDate",
      "passengerCount",
      "cabinClass",
      "quotationAmount",
      "quotationCurrency",
      "quotationDueDate",
      "quotationSentAt",
      "paymentStatus",
      "documentStatus",
      "documentValidUntil"
    ].filter((column) => columns.has(column));

    const [rows] = await pool.query(
      `SELECT ${safeColumns.join(", ")} FROM bookings WHERE bookingCode = ? LIMIT 1`,
      [bookingCode]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: "Booking not found" });
    }

    res.json(publicBookingResponse(rows[0]));
  } catch (error) {
    console.error("Get booking error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;

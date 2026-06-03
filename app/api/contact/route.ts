import { NextResponse, type NextRequest } from "next/server";
import nodemailer from "nodemailer";

const RECIPIENT_EMAIL = "info@bkkair.com";
const MAX_ATTACHMENT_BYTES = 5 * 1024 * 1024;
const ALLOWED_ATTACHMENT_TYPES = new Set([
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/webp",
]);

function sanitize(value: unknown, maxLength = 2000): string {
  if (typeof value !== "string") return "";
  return value.replace(/<[^>]*>/g, "").trim().slice(0, maxLength);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isValidReplyTo(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function createTransporter() {
  const port = Number(process.env.SMTP_PORT || 587);
  const secure =
    typeof process.env.SMTP_SECURE === "string"
      ? process.env.SMTP_SECURE.toLowerCase() === "true"
      : port === 465;

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

function hasSmtpConfig() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_PORT && process.env.SMTP_USER && process.env.SMTP_PASS);
}

function buildEmailText(data: Record<string, string>, attachmentName?: string) {
  return [
    "New BKK AIR Contact Form",
    "",
    `Name: ${data.name}`,
    `Contact: ${data.contact}`,
    `Inquiry type: ${data.inquiryType}`,
    `Attachment: ${attachmentName || "-"}`,
    "",
    "Message:",
    data.message,
  ].join("\n");
}

function buildEmailHtml(data: Record<string, string>, attachmentName?: string) {
  const rows = [
    ["Name", data.name],
    ["Contact", data.contact],
    ["Inquiry type", data.inquiryType],
    ["Attachment", attachmentName || "-"],
  ];

  const rowHtml = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 12px;font-weight:700;color:#475569;border-bottom:1px solid #e2e8f0;white-space:nowrap">${escapeHtml(label)}</td>
          <td style="padding:10px 12px;color:#0f172a;border-bottom:1px solid #e2e8f0">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join("");

  return `
    <!doctype html>
    <html lang="en">
      <body style="margin:0;padding:0;background:#f8fafc;font-family:Arial,sans-serif;color:#0f172a">
        <div style="max-width:680px;margin:32px auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:14px;overflow:hidden">
          <div style="background:#0f172a;padding:20px 24px">
            <p style="margin:0 0 6px;color:#fb923c;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase">BKK AIR Contact</p>
            <h1 style="margin:0;color:#ffffff;font-size:20px;line-height:1.3">New BKK AIR Contact Form</h1>
          </div>
          <div style="padding:20px 24px">
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tbody>${rowHtml}</tbody>
            </table>
            <div style="margin-top:18px">
              <p style="margin:0 0 8px;font-weight:700;color:#475569">Message</p>
              <div style="white-space:pre-wrap;border:1px solid #e2e8f0;border-radius:12px;padding:14px;color:#0f172a;background:#f8fafc">${escapeHtml(data.message)}</div>
            </div>
          </div>
        </div>
      </body>
    </html>`;
}

async function getAttachment(file: File | null) {
  if (!file || file.size === 0) return null;

  if (file.size > MAX_ATTACHMENT_BYTES) {
    throw new Error("ATTACHMENT_TOO_LARGE");
  }

  if (!ALLOWED_ATTACHMENT_TYPES.has(file.type)) {
    throw new Error("ATTACHMENT_TYPE_NOT_ALLOWED");
  }

  const bytes = Buffer.from(await file.arrayBuffer());

  return {
    filename: file.name || "attachment",
    content: bytes,
    contentType: file.type,
  };
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = sanitize(formData.get("name"), 200);
    const contact = sanitize(formData.get("contact"), 300);
    const inquiryType = sanitize(formData.get("inquiryType"), 200);
    const message = sanitize(formData.get("message"), 4000);
    const attachmentFile = formData.get("attachment");
    const file = attachmentFile instanceof File ? attachmentFile : null;

    const data = { name, contact, inquiryType, message };
    console.log("[api/contact] API received form data:", {
      ...data,
      attachment: file ? { name: file.name, type: file.type, size: file.size } : null,
    });

    if (!name || !contact || !inquiryType || !message) {
      return NextResponse.json({ ok: false, success: false, message: "กรุณากรอกข้อมูลให้ครบถ้วน" }, { status: 400 });
    }

    let attachment = null;
    try {
      attachment = await getAttachment(file);
    } catch (attachmentError) {
      const errorCode = attachmentError instanceof Error ? attachmentError.message : "ATTACHMENT_INVALID";
      console.error("[api/contact] attachment error:", errorCode);
      return NextResponse.json({ ok: false, success: false, message: errorCode }, { status: 400 });
    }

    if (!hasSmtpConfig()) {
      console.error("[api/contact] SMTP error: missing SMTP configuration", {
        SMTP_HOST: Boolean(process.env.SMTP_HOST),
        SMTP_PORT: Boolean(process.env.SMTP_PORT),
        SMTP_USER: Boolean(process.env.SMTP_USER),
        SMTP_PASS: Boolean(process.env.SMTP_PASS),
        SMTP_FROM: Boolean(process.env.SMTP_FROM),
      });
      return NextResponse.json({ ok: false, success: false, message: "SMTP_CONFIG_MISSING" }, { status: 500 });
    }

    try {
      console.log("[api/contact] SMTP sending started");
      const transporter = createTransporter();
      const from = process.env.SMTP_FROM || process.env.SMTP_USER;
      const info = await transporter.sendMail({
        from,
        to: RECIPIENT_EMAIL,
        replyTo: isValidReplyTo(contact) ? contact : undefined,
        subject: `New BKK AIR Contact Form - ${inquiryType}`,
        html: buildEmailHtml(data, attachment?.filename),
        text: buildEmailText(data, attachment?.filename),
        attachments: attachment ? [attachment] : undefined,
      });

      console.log("[api/contact] SMTP success with messageId:", info.messageId);
      return NextResponse.json({ ok: true, success: true, message: "Email sent", messageId: info.messageId });
    } catch (emailError) {
      console.error("[api/contact] SMTP error with full error message:", emailError);
      return NextResponse.json({ ok: false, success: false, message: "EMAIL_SEND_FAILED" }, { status: 500 });
    }
  } catch (error) {
    console.error("[api/contact] error:", error);
    return NextResponse.json({ ok: false, success: false, message: "เกิดข้อผิดพลาด กรุณาลองใหม่" }, { status: 500 });
  }
}

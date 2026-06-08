import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";

const CONSENT_ERROR_MESSAGE =
  "กรุณายอมรับข้อกำหนดการใช้บริการและนโยบายความเป็นส่วนตัวก่อนส่งคำขอ";

function sanitize(value: unknown, maxLength = 1000): string {
  if (typeof value !== "string") return "";
  return value.replace(/<[^>]*>/g, "").trim().slice(0, maxLength);
}

function getTodayString() {
  const now = new Date();
  const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
  return localDate.toISOString().split("T")[0];
}

function isValidReplyTo(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmailText(data: Record<string, string>) {
  return [
    "New BKK AIR Homepage Lead Form",
    "",
    `Form source: ${data.form_source}`,
    `Destination: ${data.destination}`,
    `Visa type: ${data.visa_type || "-"}`,
    `Full name: ${data.full_name}`,
    `Contact detail: ${data.contact_detail}`,
    `Travel date: ${data.travel_date}`,
  ].join("\n");
}

function buildEmailHtml(data: Record<string, string>) {
  const rows = [
    ["Form source", data.form_source],
    ["Destination", data.destination],
    ["Visa type", data.visa_type || "-"],
    ["Full name", data.full_name],
    ["Contact detail", data.contact_detail],
    ["Travel date", data.travel_date],
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
        <div style="max-width:640px;margin:32px auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:14px;overflow:hidden">
          <div style="background:#f97316;padding:20px 24px">
            <h1 style="margin:0;color:#ffffff;font-size:20px;line-height:1.3">New BKK AIR Homepage Lead Form</h1>
          </div>
          <div style="padding:20px 24px">
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tbody>${rowHtml}</tbody>
            </table>
          </div>
        </div>
      </body>
    </html>`;
}

function getEmailConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  const to = process.env.EMAIL_TO;

  if (!apiKey || !from || !to) {
    return null;
  }

  return { apiKey, from, to };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (sanitize(body.website) !== "") {
      return NextResponse.json({ ok: true, success: true, message: "Request received" });
    }

    const formSource = sanitize(body.form_source, 100);
    const destination = sanitize(body.destination);
    const visaType = sanitize(body.visa_type);
    const fullName = sanitize(body.full_name);
    const contactDetail = sanitize(body.contact_detail);
    const travelDate = sanitize(body.travel_date, 20);
    const consentAccepted = body.consentAccepted === true;
    const data = {
      form_source: formSource,
      destination,
      visa_type: visaType,
      full_name: fullName,
      contact_detail: contactDetail,
      travel_date: travelDate,
    };

    console.log("[api/send] API received form data:", data);

    if (formSource !== "Homepage Lead Form") {
      return NextResponse.json({ ok: false, success: false, error: "ไม่รู้จักประเภทฟอร์ม" }, { status: 400 });
    }

    if (!consentAccepted) {
      return NextResponse.json({ ok: false, success: false, error: CONSENT_ERROR_MESSAGE }, { status: 400 });
    }

    if (!destination || !fullName || !contactDetail || !travelDate) {
      return NextResponse.json({ ok: false, success: false, error: "กรุณากรอกข้อมูลให้ครบถ้วน" }, { status: 400 });
    }

    if (travelDate < getTodayString()) {
      return NextResponse.json({ ok: false, success: false, error: "วันที่เดินทางต้องไม่ย้อนหลัง" }, { status: 400 });
    }

    const emailConfig = getEmailConfig();
    if (!emailConfig) {
      console.error("[api/send] Resend error: missing email configuration", {
        RESEND_API_KEY: Boolean(process.env.RESEND_API_KEY),
        EMAIL_FROM: Boolean(process.env.EMAIL_FROM),
        EMAIL_TO: Boolean(process.env.EMAIL_TO),
      });
      return NextResponse.json(
        { ok: false, success: false, error: "ยังไม่สามารถส่งอีเมลได้ กรุณาติดต่อทีมงานทาง LINE @823lateh" },
        { status: 500 },
      );
    }

    try {
      console.log("[api/send] Resend sending started");
      const resend = new Resend(emailConfig.apiKey);
      const info = await resend.emails.send({
        from: emailConfig.from,
        to: emailConfig.to,
        replyTo: isValidReplyTo(contactDetail) ? contactDetail : undefined,
        subject: "New BKK AIR Homepage Lead Form",
        html: buildEmailHtml(data),
        text: buildEmailText(data),
      });

      if (info.error) {
        console.error("[api/send] Resend error:", info.error);
        return NextResponse.json(
          { ok: false, success: false, error: "ส่งข้อมูลไม่สำเร็จ กรุณาลองใหม่อีกครั้ง" },
          { status: 500 },
        );
      }

      console.log("[api/send] Resend success with emailId:", info.data?.id);
      return NextResponse.json({
        ok: true,
        success: true,
        message: "ส่งข้อมูลเรียบร้อยแล้ว ทีมงานจะติดต่อกลับโดยเร็วที่สุด",
        messageId: info.data?.id,
      });
    } catch (emailError) {
      console.error("[api/send] Resend error with full error message:", emailError);
      return NextResponse.json(
        { ok: false, success: false, error: "ส่งข้อมูลไม่สำเร็จ กรุณาลองใหม่อีกครั้ง" },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error("[api/send] error:", error);
    return NextResponse.json({ ok: false, success: false, error: "เกิดข้อผิดพลาด กรุณาลองใหม่" }, { status: 500 });
  }
}

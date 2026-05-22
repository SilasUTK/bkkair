import { Resend } from "resend";

type ContactEmailInput = {
  name: string;
  contact: string;
  inquiryType: string;
  message: string;
  attachmentFileName?: string | null;
  attachmentStoragePath?: string | null;
  attachmentReferenceId?: string | null;
  submittedAtIso: string;
};

export async function sendContactNotification(input: ContactEmailInput): Promise<{ sent: boolean; skipped: boolean }> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;
  const from = process.env.CONTACT_EMAIL_FROM;

  if (!apiKey || !to || !from) {
    throw new Error("Contact email configuration is missing");
  }

  const resend = new Resend(apiKey);

  const submittedDateTime = new Date(input.submittedAtIso).toLocaleString("sv-SE", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Bangkok",
  });

  const text = [
    "New Contact Message — BKK AIR",
    "",
    "Name:",
    input.name,
    "",
    "Contact:",
    input.contact,
    "",
    "Inquiry Type:",
    input.inquiryType,
    "",
    "Message:",
    input.message,
    "",
    "Attachment:",
    input.attachmentFileName || "No attachment",
    "",
    "Attachment Path Reference:",
    input.attachmentStoragePath || "N/A",
    "",
    "Attachment Reference ID:",
    input.attachmentReferenceId || "N/A",
    "",
    "Submitted:",
    submittedDateTime,
  ].join("\n");

  try {
    const response = await resend.emails.send({
      from,
      to,
      subject: "New Contact Message — BKK AIR",
      text,
    });

    if ((response as { error?: unknown }).error) {
      throw new Error("Resend provider rejected email request");
    }
  } catch {
    throw new Error("Unable to send contact email");
  }

  return { sent: true, skipped: false };
}

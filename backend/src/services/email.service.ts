import { Resend } from "resend";

const EMAIL_FAILURE_MESSAGE = "Unable to send message";

type GenericEmailInput = {
  formType: string;
  subject: string;
  lines: string[];
};

type HeroRequestEmailInput = {
  source: string;
  destination: string;
  visaType: string;
  name: string;
  contact: string;
  travelDate: string;
  submittedAtIso: string;
};

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

type PaymentUploadEmailInput = {
  bookingCode: string;
  customerName: string;
  contact: string;
  paymentSlipUrl: string;
  submittedAtIso: string;
};

function parseAddressList(value: string | undefined): string[] {
  return String(value || "")
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);
}

function isLikelyEmailAddress(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function hasFromShape(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;
  if (trimmed.includes("<") && trimmed.includes(">")) {
    const match = trimmed.match(/<([^>]+)>/);
    return Boolean(match?.[1] && isLikelyEmailAddress(match[1]));
  }
  return isLikelyEmailAddress(trimmed);
}

function formatBangkokDateTime(isoDate: string): string {
  return new Date(isoDate).toLocaleString("sv-SE", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Bangkok",
  });
}

function getEmailRuntimeConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_EMAIL_FROM;
  const toList = parseAddressList(process.env.CONTACT_EMAIL_TO || "info@bkkair.com");

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is missing");
  }

  if (!from || !hasFromShape(from)) {
    throw new Error("CONTACT_EMAIL_FROM is missing or invalid");
  }

  if (toList.length === 0 || toList.some((entry) => !isLikelyEmailAddress(entry))) {
    throw new Error("CONTACT_EMAIL_TO is missing or invalid");
  }

  return {
    resend: new Resend(apiKey),
    from,
    toList,
  };
}

async function dispatchEmail(input: GenericEmailInput): Promise<string> {
  const { resend, from, toList } = getEmailRuntimeConfig();
  const text = input.lines.join("\n");

  console.info(`[${input.formType}] Sending email to ${toList.join(", ")}`);

  const response = await resend.emails.send({
    from,
    to: toList,
    subject: input.subject,
    text,
  });

  if ((response as { error?: unknown }).error) {
    throw new Error("Resend provider rejected email request");
  }

  const emailId =
    (response as { data?: { id?: string } }).data?.id ||
    (response as { id?: string }).id ||
    "";

  if (!emailId) {
    throw new Error("Email provider did not return a message id");
  }

  console.info(`[${input.formType}] Email sent: ${emailId}`);
  return emailId;
}

export function getEmailConfigurationWarnings(): string[] {
  const warnings: string[] = [];
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;
  const from = process.env.CONTACT_EMAIL_FROM;

  if (!apiKey) warnings.push("RESEND_API_KEY is missing");
  if (!to) warnings.push("CONTACT_EMAIL_TO is missing");
  if (!from) warnings.push("CONTACT_EMAIL_FROM is missing");

  return warnings;
}

export async function sendHeroRequestEmail(input: HeroRequestEmailInput): Promise<string> {
  try {
    return await dispatchEmail({
      formType: "Hero Request",
      subject: "New Hero Request — BKK AIR",
      lines: [
        "New Hero Request — BKK AIR",
        "",
        "Source:",
        input.source || "homepage_hero",
        "",
        "Destination:",
        input.destination,
        "",
        "Visa Type:",
        input.visaType || "Not specified",
        "",
        "Name:",
        input.name,
        "",
        "Contact:",
        input.contact,
        "",
        "Travel Date:",
        input.travelDate || "Not specified",
        "",
        "Submitted:",
        formatBangkokDateTime(input.submittedAtIso),
      ],
    });
  } catch (error) {
    console.error("[Hero Request] Email failure:", (error as Error).message);
    throw new Error(EMAIL_FAILURE_MESSAGE);
  }
}

export async function sendContactEmail(input: ContactEmailInput): Promise<string> {
  try {
    return await dispatchEmail({
      formType: "Contact Form",
      subject: "New Contact Message — BKK AIR",
      lines: [
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
        formatBangkokDateTime(input.submittedAtIso),
      ],
    });
  } catch (error) {
    console.error("[Contact Form] Email failure:", (error as Error).message);
    throw new Error(EMAIL_FAILURE_MESSAGE);
  }
}

export async function sendPaymentUploadEmail(input: PaymentUploadEmailInput): Promise<string> {
  try {
    return await dispatchEmail({
      formType: "Payment Upload",
      subject: "New Payment Upload — BKK AIR",
      lines: [
        "New Payment Upload — BKK AIR",
        "",
        "Booking Code:",
        input.bookingCode,
        "",
        "Customer Name:",
        input.customerName,
        "",
        "Contact:",
        input.contact,
        "",
        "Payment Slip URL:",
        input.paymentSlipUrl,
        "",
        "Submitted:",
        formatBangkokDateTime(input.submittedAtIso),
      ],
    });
  } catch (error) {
    console.error("[Payment Upload] Email failure:", (error as Error).message);
    throw new Error(EMAIL_FAILURE_MESSAGE);
  }
}

export async function sendGenericNotificationEmail(input: GenericEmailInput): Promise<string> {
  try {
    return await dispatchEmail(input);
  } catch (error) {
    console.error(`[${input.formType}] Email failure:`, (error as Error).message);
    throw new Error(EMAIL_FAILURE_MESSAGE);
  }
}

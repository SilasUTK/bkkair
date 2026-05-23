import crypto from "crypto";
import fs from "fs/promises";
import multer from "multer";
import path from "path";
import { NextFunction, Request, Response } from "express";
import { sendContactEmail } from "../services/email.service.js";

const uploadDir = path.resolve(process.cwd(), "uploads", "contact");
const maxFileSize = 5 * 1024 * 1024;

const allowedMimeToExt: Record<string, string> = {
  "application/pdf": ".pdf",
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
};

const blockedExtensions = new Set([".exe", ".zip", ".js", ".php", ".html", ".htm"]);
const allowedInquiryTypes = new Set([
  "สอบถามแพ็กเกจ",
  "ติดตามออเดอร์",
  "แจ้งปัญหาเอกสาร",
  "แก้ไขข้อมูล",
  "ปัญหาการชำระเงิน",
  "เอกสารเร่งด่วน",
  "ความร่วมมือทางธุรกิจ",
  "อื่น ๆ",
]);

function sanitizeText(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001F\u007F]/g, "").trim().slice(0, maxLength);
}

async function ensureUploadDir() {
  await fs.mkdir(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    ensureUploadDir()
      .then(() => callback(null, uploadDir))
      .catch((error) => callback(error as Error, uploadDir));
  },
  filename: (_req, file, callback) => {
    const extension = allowedMimeToExt[file.mimetype] || ".bin";
    const safeName = `${Date.now()}-${crypto.randomBytes(12).toString("hex")}${extension}`;
    callback(null, safeName);
  },
});

const uploader = multer({
  storage,
  limits: {
    fileSize: maxFileSize,
    files: 1,
  },
  fileFilter: (_req, file, callback) => {
    const incomingExt = path.extname(file.originalname || "").toLowerCase();

    if (blockedExtensions.has(incomingExt)) {
      return callback(new Error("Invalid file type"));
    }

    if (!allowedMimeToExt[file.mimetype]) {
      return callback(new Error("Invalid file type"));
    }

    return callback(null, true);
  },
});

export function handleContactUpload(req: Request, res: Response, next: NextFunction) {
  uploader.single("attachment")(req, res, (error: unknown) => {
    if (!error) {
      return next();
    }

    if (error instanceof multer.MulterError && error.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({ success: false, message: "Unable to send message" });
    }

    return res.status(400).json({ success: false, message: "Unable to send message" });
  });
}

async function storeContactMessage(entry: Record<string, unknown>) {
  await ensureUploadDir();
  const logPath = path.join(uploadDir, "messages.log");
  await fs.appendFile(logPath, `${JSON.stringify(entry)}\n`, "utf8");
}

export async function createContactMessage(req: Request, res: Response) {
  try {
    const name = sanitizeText(req.body?.name, 150);
    const contact = sanitizeText(req.body?.contact, 200);
    const inquiryType = sanitizeText(req.body?.inquiryType, 80);
    const message = sanitizeText(req.body?.message, 5000);

    if (!name || !contact || !inquiryType || !message) {
      return res.status(400).json({ success: false, message: "Unable to send message" });
    }

    if (!allowedInquiryTypes.has(inquiryType)) {
      return res.status(400).json({ success: false, message: "Unable to send message" });
    }

    const submittedAtIso = new Date().toISOString();
    const attachmentFileName = req.file?.filename || null;
    const attachmentStoragePath = attachmentFileName ? path.posix.join("uploads", "contact", attachmentFileName) : null;
    const referenceId = `CNT-${Date.now().toString(36).toUpperCase()}-${crypto.randomBytes(3).toString("hex").toUpperCase()}`;

    console.info("[Contact Form] Received", {
      inquiryType,
      hasAttachment: Boolean(attachmentFileName),
      attachmentFileName,
      submittedAtIso,
      referenceId,
    });

    await storeContactMessage({
      referenceId,
      name,
      contact,
      inquiryType,
      message,
      attachmentFileName,
      attachmentStoragePath,
      submittedAtIso,
      source: "contact_page",
    });
    console.info("[Contact Form] Logged contact message", { referenceId });

    try {
      const emailId = await sendContactEmail({
        name,
        contact,
        inquiryType,
        message,
        attachmentFileName,
        attachmentStoragePath,
        attachmentReferenceId: referenceId,
        submittedAtIso,
      });

      console.info("[Contact Form] Completed", { emailId, referenceId });

      return res.status(200).json({
        success: true,
        message: "Request received and email sent successfully",
        emailId,
      });
    } catch (emailError) {
      console.error("[Contact Form] Email failure:", (emailError as Error).message);
      return res.status(500).json({ success: false, message: "Unable to send message" });
    }
  } catch (error) {
    console.error("[Contact Form] Failed:", error);
    return res.status(500).json({ success: false, message: "Unable to send message" });
  }
}

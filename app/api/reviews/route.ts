import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { NextResponse, type NextRequest } from "next/server";
import type { PendingReviewRecord } from "../../../lib/reviews";

export const runtime = "nodejs";

const MAX_PHOTO_BYTES = 3 * 1024 * 1024;
const ALLOWED_PHOTO_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);
const pendingReviewsPath = path.join(process.cwd(), "data", "reviews", "pending-reviews.json");
const uploadDir = path.join(process.cwd(), "public", "uploads", "reviews", "pending");

function sanitize(value: unknown, maxLength = 1000) {
  if (typeof value !== "string") return "";
  return value.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function redactSensitiveText(value: string) {
  return value
    .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, "[redacted email]")
    .replace(/(?:\+?\d[\d\s().-]{7,}\d)/g, "[redacted phone]")
    .replace(/\b(passport|หนังสือเดินทาง)\s*[:#-]?\s*[A-Z0-9-]{5,}\b/gi, "[redacted passport]");
}

function createInitials(value: string) {
  const cleaned = value.replace(/[^A-Za-zก-๙0-9\s.]/g, "").trim();
  if (!cleaned) return "ลูกค้า";
  return cleaned.slice(0, 24);
}

function toRating(value: string): 1 | 2 | 3 | 4 | 5 | null {
  const rating = Number(value);
  if (![1, 2, 3, 4, 5].includes(rating)) return null;
  return rating as 1 | 2 | 3 | 4 | 5;
}

function createId() {
  return `rev_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

function getExtension(file: File) {
  const fromType = file.type === "image/png" ? ".png" : file.type === "image/webp" ? ".webp" : ".jpg";
  const fromName = path.extname(file.name || "").toLowerCase();
  return [".jpg", ".jpeg", ".png", ".webp"].includes(fromName) ? fromName : fromType;
}

async function readPendingReviews(): Promise<PendingReviewRecord[]> {
  try {
    const content = await readFile(pendingReviewsPath, "utf8");
    const parsed = JSON.parse(content);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function savePhoto(file: File, id: string) {
  if (file.size === 0) return null;
  if (file.size > MAX_PHOTO_BYTES) {
    throw new Error("PHOTO_TOO_LARGE");
  }
  if (!ALLOWED_PHOTO_TYPES.has(file.type)) {
    throw new Error("PHOTO_TYPE_NOT_ALLOWED");
  }

  await mkdir(uploadDir, { recursive: true });
  const storedFileName = `${id}${getExtension(file)}`;
  const storagePath = path.join(uploadDir, storedFileName);
  const bytes = Buffer.from(await file.arrayBuffer());
  await writeFile(storagePath, bytes);

  return {
    originalName: sanitize(file.name || "review-photo", 200),
    storedFileName,
    storagePath: path.posix.join("public", "uploads", "reviews", "pending", storedFileName),
    publicPath: `/uploads/reviews/pending/${storedFileName}`,
    contentType: file.type,
    size: file.size,
  };
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const nicknameOrInitials = sanitize(formData.get("nicknameOrInitials"), 80);
    const destinationCountry = sanitize(formData.get("destinationCountry"), 120);
    const serviceUsed = sanitize(formData.get("serviceUsed"), 160);
    const reviewText = redactSensitiveText(sanitize(formData.get("reviewText"), 1200));
    const rating = toRating(sanitize(formData.get("rating"), 5));
    const consentPublish = formData.get("consentPublish") === "true";
    const consentNoGuarantee = formData.get("consentNoGuarantee") === "true";
    const photoValue = formData.get("photo");
    const photoFile = photoValue instanceof File ? photoValue : null;

    if (!nicknameOrInitials || !destinationCountry || !serviceUsed || !rating || !reviewText) {
      return NextResponse.json({ ok: false, message: "กรุณากรอกข้อมูลรีวิวให้ครบถ้วน" }, { status: 400 });
    }

    if (!consentPublish || !consentNoGuarantee) {
      return NextResponse.json({ ok: false, message: "กรุณายืนยันเงื่อนไขการเผยแพร่รีวิวทั้งสองข้อ" }, { status: 400 });
    }

    const id = createId();
    let photo = null;
    try {
      photo = photoFile ? await savePhoto(photoFile, id) : null;
    } catch (error) {
      const code = error instanceof Error ? error.message : "PHOTO_INVALID";
      const message =
        code === "PHOTO_TOO_LARGE"
          ? "รูปภาพต้องมีขนาดไม่เกิน 3 MB"
          : code === "PHOTO_TYPE_NOT_ALLOWED"
          ? "รองรับเฉพาะไฟล์รูปภาพ JPG, PNG หรือ WebP เท่านั้น"
          : "รูปภาพไม่ถูกต้อง กรุณาเลือกไฟล์ใหม่";
      return NextResponse.json({ ok: false, message }, { status: 400 });
    }

    const record: PendingReviewRecord = {
      id,
      status: "pending",
      submittedAt: new Date().toISOString(),
      nicknameOrInitials,
      displayInitials: createInitials(nicknameOrInitials),
      destinationCountry,
      serviceUsed,
      rating,
      reviewText,
      source: "เว็บไซต์",
      photo,
      consent: {
        realExperienceAndPublishAuthorized: true,
        noVisaApprovalGuaranteeUnderstood: true,
      },
      moderation: {
        approvedForPublishing: false,
        reviewedAt: null,
        reviewedBy: null,
        adminNotes: "",
      },
    };

    await mkdir(path.dirname(pendingReviewsPath), { recursive: true });
    const reviews = await readPendingReviews();
    reviews.unshift(record);
    await writeFile(pendingReviewsPath, `${JSON.stringify(reviews, null, 2)}\n`, "utf8");

    return NextResponse.json({
      ok: true,
      message: "ขอบคุณสำหรับรีวิวของคุณ 🎉\nทีมงานจะตรวจสอบข้อมูลก่อนเผยแพร่บนเว็บไซต์",
      reviewId: id,
      status: "pending",
    });
  } catch (error) {
    console.error("[api/reviews] error:", error);
    return NextResponse.json({ ok: false, message: "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง" }, { status: 500 });
  }
}

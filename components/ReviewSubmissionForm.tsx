"use client";

import { useState } from "react";
import { Camera, CheckCircle2, Send } from "lucide-react";

const serviceOptions = [
  "ใบจองตั๋วเครื่องบิน",
  "ใบจองโรงแรม",
  "แผนการเดินทาง",
  "แพ็กเกจเอกสารสนับสนุนวีซ่า",
];

const ratingOptions = [
  { value: "5", label: "⭐⭐⭐⭐⭐ ดีมาก" },
  { value: "4", label: "⭐⭐⭐⭐ ดี" },
  { value: "3", label: "⭐⭐⭐ ปานกลาง" },
  { value: "2", label: "⭐⭐ พอใช้" },
  { value: "1", label: "⭐ ควรปรับปรุง" },
];

const initialForm = {
  nicknameOrInitials: "",
  destinationCountry: "",
  serviceUsed: "",
  rating: "5",
  reviewText: "",
  consentPublish: false,
  consentNoGuarantee: false,
};

export default function ReviewSubmissionForm() {
  const [form, setForm] = useState(initialForm);
  const [photo, setPhoto] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function updateField(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value, type } = event.target;
    const checked = type === "checkbox" ? (event.target as HTMLInputElement).checked : undefined;
    setForm((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
  }

  async function submitReview(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setMessage("");
    setError("");

    try {
      const payload = new FormData();
      payload.append("nicknameOrInitials", form.nicknameOrInitials);
      payload.append("destinationCountry", form.destinationCountry);
      payload.append("serviceUsed", form.serviceUsed);
      payload.append("rating", form.rating);
      payload.append("reviewText", form.reviewText);
      payload.append("consentPublish", String(form.consentPublish));
      payload.append("consentNoGuarantee", String(form.consentNoGuarantee));
      if (photo) payload.append("photo", photo);

      const response = await fetch("/api/reviews", {
        method: "POST",
        body: payload,
      });
      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.message || "ส่งรีวิวไม่สำเร็จ");
      }

      setMessage(data.message || "ขอบคุณสำหรับรีวิวของคุณ 🎉\nทีมงานจะตรวจสอบข้อมูลก่อนเผยแพร่บนเว็บไซต์");
      setForm(initialForm);
      setPhoto(null);
      event.currentTarget.reset();
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "ส่งรีวิวไม่สำเร็จ");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={submitReview} className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-[0_24px_70px_rgba(15,23,42,0.10)] md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="ชื่อเล่นหรือชื่อย่อ" required>
          <input
            name="nicknameOrInitials"
            value={form.nicknameOrInitials}
            onChange={updateField}
            required
            maxLength={80}
            placeholder="เช่น คุณเอ, K., คุณ พ."
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100"
          />
        </Field>

        <Field label="ประเทศปลายทาง" required>
          <input
            name="destinationCountry"
            value={form.destinationCountry}
            onChange={updateField}
            required
            maxLength={120}
            placeholder="เช่น Schengen, UK, Canada, Japan"
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100"
          />
        </Field>

        <Field label="บริการที่ใช้" required>
          <select
            name="serviceUsed"
            value={form.serviceUsed}
            onChange={updateField}
            required
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100"
          >
            <option value="">เลือกบริการ</option>
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </Field>

        <Field label="คะแนนความพึงพอใจ" required>
          <select
            name="rating"
            value={form.rating}
            onChange={updateField}
            required
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100"
          >
            {ratingOptions.map((rating) => (
              <option key={rating.value} value={rating.value}>
                {rating.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="รีวิวของคุณ" required className="mt-4">
        <textarea
          name="reviewText"
          value={form.reviewText}
          onChange={updateField}
          required
          minLength={20}
          maxLength={1200}
          rows={5}
          placeholder="แบ่งปันประสบการณ์การใช้บริการ ความรวดเร็ว ความชัดเจนของเอกสาร หรือการให้คำแนะนำของทีมงาน"
          className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold leading-relaxed text-slate-800 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100"
        />
      </Field>

      <div className="mt-4 rounded-2xl border border-dashed border-blue-200 bg-blue-50/60 p-4">
        <label className="flex cursor-pointer flex-col items-center justify-center gap-2 text-center text-sm font-bold text-blue-700 sm:flex-row">
          <Camera className="h-5 w-5" aria-hidden="true" />
          <span>
            {photo ? (
              photo.name
            ) : (
              <>
                แนบรูปภาพเพิ่มเติม (ไม่บังคับ)
                <span className="block text-xs font-semibold text-blue-600 sm:mt-0.5">
                  รองรับไฟล์ JPG, PNG และ WebP ขนาดไม่เกิน 3 MB
                </span>
              </>
            )}
          </span>
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp"
            className="sr-only"
            onChange={(event) => setPhoto(event.target.files?.[0] || null)}
          />
        </label>
      </div>

      <div className="mt-5 space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <Checkbox
          name="consentPublish"
          checked={form.consentPublish}
          onChange={updateField}
          label="ข้าพเจ้ายืนยันว่ารีวิวนี้มาจากประสบการณ์จริงของข้าพเจ้า และอนุญาตให้ BKK AIR เผยแพร่รีวิว ชื่อเล่นหรือชื่อย่อ และรูปภาพ (ถ้ามี) บนเว็บไซต์หรือสื่อประชาสัมพันธ์ของบริษัทได้"
        />
        <Checkbox
          name="consentNoGuarantee"
          checked={form.consentNoGuarantee}
          onChange={updateField}
          label="ข้าพเจ้ารับทราบว่ารีวิวนี้ไม่ใช่การรับประกันผลการอนุมัติวีซ่า และผลการพิจารณาวีซ่าขึ้นอยู่กับสถานทูตหรือสถานกงสุลแต่เพียงผู้เดียว"
        />
      </div>

      {message && (
        <div className="mt-5 flex items-start gap-2 rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm font-bold text-emerald-700">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span className="whitespace-pre-line">{message}</span>
        </div>
      )}
      {error && <p className="mt-5 rounded-2xl border border-red-100 bg-red-50 p-4 text-sm font-bold text-red-700">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-accent-orange px-6 py-3 text-sm font-black text-white shadow-[0_16px_38px_rgba(255,87,34,0.28)] transition hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        {submitting ? "กำลังส่งรีวิว..." : "ส่งรีวิว"}
      </button>
    </form>
  );
}

function Field({
  label,
  required,
  className = "",
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block text-sm font-black text-slate-700 ${className}`}>
      {label}
      {required && <span className="text-accent-orange"> *</span>}
      {children}
    </label>
  );
}

function Checkbox({
  name,
  checked,
  onChange,
  label,
}: {
  name: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  label: string;
}) {
  return (
    <label className="flex items-start gap-3 text-sm font-semibold leading-relaxed text-slate-700">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        required
        className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-200"
      />
      <span>{label}</span>
    </label>
  );
}

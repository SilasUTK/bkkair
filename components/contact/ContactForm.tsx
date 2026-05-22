"use client";

import Link from "next/link";
import { FormEvent, useRef, useState } from "react";

const CONTACT_API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

const inquiryTypes = [
  "สอบถามแพ็กเกจ",
  "ติดตามออเดอร์",
  "แจ้งปัญหาเอกสาร",
  "แก้ไขข้อมูล",
  "ปัญหาการชำระเงิน",
  "เอกสารเร่งด่วน",
  "ความร่วมมือทางธุรกิจ",
  "อื่น ๆ",
];

const initialForm = {
  name: "",
  contact: "",
  inquiryType: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [attachment, setAttachment] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  function updateField(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setSuccess(false);
    setError("");
  }

  function updateAttachment(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] || null;
    setAttachment(file);
    setSuccess(false);
    setError("");
  }

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (loading) return;

    if (!form.name.trim()) return setError("กรุณาระบุชื่อ");
    if (!form.contact.trim()) return setError("กรุณาระบุช่องทางติดต่อ");
    if (!form.inquiryType.trim()) return setError("กรุณาเลือกหัวข้อคำถาม");
    if (!form.message.trim()) return setError("กรุณาระบุรายละเอียด");

    if (attachment && attachment.size > 5 * 1024 * 1024) {
      return setError("ขนาดไฟล์ต้องไม่เกิน 5MB");
    }

    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const formData = new FormData();
      formData.append("name", form.name.trim());
      formData.append("contact", form.contact.trim());
      formData.append("inquiryType", form.inquiryType.trim());
      formData.append("message", form.message.trim());

      if (attachment) {
        formData.append("attachment", attachment);
      }

      const response = await fetch(`${CONTACT_API_BASE_URL}/api/contact`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || "Unable to send message");
      }

      setForm(initialForm);
      setAttachment(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      setSuccess(true);
    } catch (_error) {
      setError("ส่งข้อความไม่สำเร็จ กรุณาลองใหม่อีกครั้ง หรือติดต่อ LINE @823lateh");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submitForm} className="rounded-[2rem] bg-[#F8FAFC] p-6 shadow-lg shadow-slate-200/50 sm:p-8">
      <div className="grid gap-5">
        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">
          Human-reviewed responses · No automated visa approval claims
        </div>

        <label className="block">
          <span className="text-xs font-black uppercase tracking-wide text-slate-500">ชื่อ</span>
          <input
            name="name"
            value={form.name}
            onChange={updateField}
            required
            className="mt-2 block w-full rounded-xl border-2 border-slate-100 bg-white px-4 py-3.5 focus:border-blue-500 focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="text-xs font-black uppercase tracking-wide text-slate-500">ช่องทางติดต่อ</span>
          <input
            name="contact"
            value={form.contact}
            onChange={updateField}
            required
            placeholder="เบอร์โทร / อีเมล / LINE ID"
            className="mt-2 block w-full rounded-xl border-2 border-slate-100 bg-white px-4 py-3.5 focus:border-blue-500 focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="text-xs font-black uppercase tracking-wide text-slate-500">เรื่องที่ต้องการสอบถาม / Inquiry Type</span>
          <select
            name="inquiryType"
            value={form.inquiryType}
            onChange={updateField}
            required
            className="mt-2 block w-full rounded-xl border-2 border-slate-100 bg-white px-4 py-3.5 text-slate-700 focus:border-blue-500 focus:outline-none"
          >
            <option value="" disabled>
              เลือกหัวข้อที่ใกล้เคียงกับคำถามของคุณมากที่สุด
            </option>
            {inquiryTypes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <p className="mt-1.5 text-xs font-medium text-slate-500">หัวข้อนี้ช่วยให้ทีมงานจัดลำดับและส่งต่อคำถามได้เร็วขึ้น</p>
        </label>

        <label className="block">
          <span className="text-xs font-black uppercase tracking-wide text-slate-500">รายละเอียด</span>
          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={updateField}
            required
            className="mt-2 block w-full rounded-xl border-2 border-slate-100 bg-white px-4 py-3.5 focus:border-blue-500 focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="text-xs font-black uppercase tracking-wide text-slate-500">แนบไฟล์ (ถ้ามี)</span>
          <input
            ref={fileInputRef}
            type="file"
            name="attachment"
            accept=".pdf,.jpg,.jpeg,.png,.webp"
            onChange={updateAttachment}
            className="mt-2 block w-full rounded-xl border-2 border-slate-100 bg-white px-4 py-3.5 text-sm text-slate-700 file:mr-4 file:rounded-lg file:border-0 file:bg-blue-50 file:px-3 file:py-2 file:font-semibold file:text-blue-700 hover:file:bg-blue-100 focus:border-blue-500 focus:outline-none"
          />
          <p className="mt-1.5 text-xs font-medium text-slate-500">รองรับ PDF, JPG, JPEG, PNG, WEBP ขนาดไม่เกิน 5MB</p>
        </label>

        <button
          type="submit"
          disabled={loading}
          className="rounded-2xl bg-[#f59e0b] px-6 py-4 font-black text-white shadow-lg shadow-amber-200/60 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "กำลังส่งข้อความ..." : "ส่งข้อความถึงทีมงาน"}
        </button>

        {error && (
          <p className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-semibold leading-relaxed text-red-700">
            {error}
          </p>
        )}

        {success && (
          <p className="rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm font-semibold leading-relaxed text-emerald-800">
            ส่งข้อความเรียบร้อยแล้ว ทีมงานจะติดต่อกลับภายในเวลาทำการ
          </p>
        )}

        <p className="rounded-2xl border border-orange-100 bg-orange-50 px-4 py-3 text-sm font-semibold leading-relaxed text-orange-900">
          BKK AIR ให้บริการเฉพาะการจัดเตรียมเอกสารสนับสนุนวีซ่าเท่านั้น การอนุมัติวีซ่าขึ้นอยู่กับดุลยพินิจของสถานทูต
        </p>
        <Link href="/order" className="text-center text-sm font-bold text-[#003d82]">
          หรือส่งคำขอเอกสารที่ /order
        </Link>
      </div>
    </form>
  );
}

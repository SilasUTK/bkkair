"use client";

import { useRef, useState } from "react";
import { apiUrl } from "../../lib/apiBase";

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

export default function ContactForm() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    inquiryType: "",
    message: "",
  });

  const [attachment, setAttachment] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSuccessMessage("");
    setErrorMessage("");
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] || null;
    setAttachment(file);
    setSuccessMessage("");
    setErrorMessage("");
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (loading) return;

    if (!formData.name.trim()) {
      setErrorMessage("กรุณากรอกชื่อ");
      return;
    }

    if (!formData.contact.trim()) {
      setErrorMessage("กรุณากรอกช่องทางติดต่อ");
      return;
    }

    if (!formData.inquiryType.trim()) {
      setErrorMessage("กรุณาเลือกเรื่องที่ต้องการสอบถาม");
      return;
    }

    if (!formData.message.trim()) {
      setErrorMessage("กรุณากรอกรายละเอียด");
      return;
    }

    try {
      setLoading(true);
      setSuccessMessage("");
      setErrorMessage("");

      const payload = new FormData();
      payload.append("name", formData.name.trim());
      payload.append("contact", formData.contact.trim());
      payload.append("inquiryType", formData.inquiryType.trim());
      payload.append("message", formData.message.trim());

      if (attachment) {
        payload.append("attachment", attachment);
      }

      const response = await fetch(apiUrl("/api/contact"), {
        method: "POST",
        body: payload,
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.success) {
        throw new Error(result?.message || "Unable to send message");
      }

      setSuccessMessage("ส่งข้อความเรียบร้อยแล้ว ทีมงานจะติดต่อกลับภายในเวลาทำการ");

      setFormData({
        name: "",
        contact: "",
        inquiryType: "",
        message: "",
      });

      setAttachment(null);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      setErrorMessage("ส่งข้อความไม่สำเร็จ กรุณาลองใหม่อีกครั้ง หรือติดต่อ LINE @823lateh");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[28px] bg-white p-6 shadow-xl shadow-slate-200/70">
      <div className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">ชื่อ</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">ช่องทางติดต่อ</label>
          <input
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            type="text"
            placeholder="เบอร์โทร / อีเมล / LINE ID"
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-700">
            เรื่องที่ต้องการสอบถาม / Inquiry Type
          </label>
          <select
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
          >
            <option value="">เลือกหัวข้อที่ต้องการสอบถาม</option>
            {inquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <p className="mt-2 text-xs text-slate-500">
            หัวข้อนี้ช่วยให้ทีมงานจัดลำดับและส่งต่อคำถามได้เร็วขึ้น
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">รายละเอียด</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">แนบไฟล์ (ถ้ามี)</label>
          <input
            ref={fileInputRef}
            onChange={handleFileChange}
            type="file"
            accept=".pdf,.jpg,.jpeg,.png,.webp"
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-900 file:mr-4 file:rounded-xl file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:font-semibold file:text-blue-700"
          />
          <p className="mt-2 text-xs text-slate-500">
            รองรับ PDF, JPG, JPEG, PNG, WEBP ขนาดไม่เกิน 5MB
          </p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-2xl bg-orange-500 px-6 py-4 font-bold text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "กำลังส่งข้อความ..." : "ส่งข้อความถึงทีมงาน"}
        </button>

        {successMessage && (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
            {errorMessage}
          </div>
        )}
      </div>
    </form>
  );
}
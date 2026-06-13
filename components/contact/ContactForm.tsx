"use client";

import type { ReactNode } from "react";
import { useRef, useState } from "react";
import { CheckCircle2, FileUp, Send, ShieldCheck } from "lucide-react";

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
      setErrorMessage("กรุณากรอกชื่อ-นามสกุล");
      return;
    }

    if (!formData.contact.trim()) {
      setErrorMessage("กรุณากรอก LINE หรือ Email");
      return;
    }

    if (!formData.inquiryType.trim()) {
      setErrorMessage("กรุณาเลือกประเภทการสอบถาม");
      return;
    }

    if (!formData.message.trim()) {
      setErrorMessage("กรุณากรอกรายละเอียดเพิ่มเติม");
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

      const response = await fetch("/api/contact", {
        method: "POST",
        body: payload,
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.success) {
        throw new Error(result?.message || "Unable to send message");
      }

      setSuccessMessage(result.message || "ส่งข้อความเรียบร้อยแล้ว ทีมงานจะติดต่อกลับโดยเร็วที่สุด");

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
      setErrorMessage(error instanceof Error && error.message !== "Unable to send message"
        ? error.message
        : "ส่งข้อความไม่สำเร็จ กรุณาลองใหม่อีกครั้ง หรือติดต่อ LINE @823lateh");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white p-4 shadow-[0_28px_90px_rgba(2,6,23,0.25)] sm:p-5 lg:p-6"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-orange-50 via-blue-50/50 to-transparent" />

      <div className="relative">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#2563EB]">Contact Form</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              ส่งรายละเอียดให้ทีมงาน
            </h2>
            <p className="mt-1.5 text-sm font-medium leading-relaxed text-slate-500">
              กรอกข้อมูลสั้น ๆ ทีมงานจะตรวจสอบและติดต่อกลับผ่านช่องทางที่คุณสะดวก
            </p>
          </div>
          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-orange-300 sm:flex">
            <ShieldCheck className="h-5 w-5" aria-hidden="true" />
          </div>
        </div>

        <div className="space-y-3.5">
          <div className="grid gap-3.5 sm:grid-cols-2">
            <FieldShell label="ชื่อ-นามสกุล">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                autoComplete="name"
                placeholder="ชื่อของคุณ"
                className={fieldClassName}
              />
            </FieldShell>

            <FieldShell label="LINE / Email">
              <input
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                type="text"
                autoComplete="email"
                placeholder="LINE ID หรือ Email"
                className={fieldClassName}
              />
            </FieldShell>
          </div>

          <FieldShell label="ประเภทการสอบถาม">
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className={`${fieldClassName} cursor-pointer`}
            >
              <option value="">เลือกประเภทการสอบถาม</option>
              {inquiryTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </FieldShell>

          <FieldShell label="รายละเอียดเพิ่มเติม">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="เช่น ประเทศปลายทาง วันที่เดินทาง ประเภทเอกสารที่ต้องการ หรือคำถามเพิ่มเติม"
              className={`${fieldClassName} resize-none leading-relaxed`}
            />
          </FieldShell>

          <div className="rounded-2xl border border-dashed border-blue-200 bg-blue-50/60 p-2.5">
            <input
              ref={fileInputRef}
              onChange={handleFileChange}
              type="file"
              accept=".pdf,.jpg,.jpeg,.png,.webp"
              className="sr-only"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex w-full items-center gap-3 rounded-xl border border-white bg-white px-4 py-2.5 text-left shadow-[0_10px_28px_rgba(37,99,235,0.08)] transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_16px_36px_rgba(37,99,235,0.13)]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-orange-300">
                <FileUp className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-black text-slate-950">
                  {attachment ? attachment.name : "แนบไฟล์ (ถ้ามี)"}
                </span>
                <span className="mt-0.5 block text-xs font-medium text-slate-500">
                  PDF / JPG / PNG / WEBP ไม่เกิน 5MB
                </span>
              </span>
            </button>
          </div>

          {successMessage && (
            <div className="flex items-start gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-700">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {successMessage}
            </div>
          )}

          {errorMessage && (
            <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="group flex min-h-[52px] w-full items-center justify-center gap-2 rounded-2xl bg-accent-orange px-6 py-3 text-base font-black text-white shadow-[0_20px_55px_rgba(249,115,22,0.28)] transition hover:-translate-y-0.5 hover:bg-accent-hover disabled:cursor-not-allowed disabled:translate-y-0 disabled:opacity-60"
          >
            {loading ? "กำลังส่งข้อความ..." : "ส่งฟอร์มติดต่อ"}
            <Send className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </form>
  );
}

const fieldClassName =
  "w-full rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-100";

function FieldShell({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-bold text-slate-700">{label}</span>
      {children}
    </label>
  );
}

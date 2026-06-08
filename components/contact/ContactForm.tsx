"use client";

import type { ReactNode } from "react";
import { useRef, useState } from "react";
import { FileUp, Send, ShieldCheck, UserRound } from "lucide-react";

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

      const response = await fetch("/api/contact", {
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
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_28px_90px_rgba(15,23,42,0.12)] sm:p-7 lg:p-8"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-blue-50 via-orange-50/40 to-transparent" />

      <div className="relative">
        <div className="mb-7 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#2563EB]">Inquiry Form</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              ส่งรายละเอียดให้ทีมงาน
            </h2>
            <p className="mt-2 text-sm font-medium leading-relaxed text-slate-500">
              แจ้งข้อมูลเบื้องต้น ทีมงานจะตรวจสอบและติดต่อกลับผ่านช่องทางที่คุณสะดวก
            </p>
          </div>
          <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-orange-300 sm:flex">
            <ShieldCheck className="h-6 w-6" aria-hidden="true" />
          </div>
        </div>

        <div className="space-y-6">
          <fieldset className="space-y-4 rounded-2xl border border-slate-100 bg-white/80 p-4 sm:p-5">
            <legend className="flex items-center gap-2 px-2 text-sm font-black text-slate-950">
              <UserRound className="h-4 w-4 text-[#2563EB]" aria-hidden="true" />
              Personal Info
            </legend>
            <div className="grid gap-4 sm:grid-cols-2">
              <FieldShell label="ชื่อ">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  autoComplete="name"
                  className={fieldClassName}
                />
              </FieldShell>

              <FieldShell label="ช่องทางติดต่อ">
                <input
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  type="text"
                  autoComplete="email"
                  placeholder="เบอร์โทร / อีเมล / LINE ID"
                  className={fieldClassName}
                />
              </FieldShell>
            </div>
          </fieldset>

          <fieldset className="space-y-4 rounded-2xl border border-slate-100 bg-white/80 p-4 sm:p-5">
            <legend className="px-2 text-sm font-black text-slate-950">Contact Method & Inquiry</legend>
            <FieldShell label="เรื่องที่ต้องการสอบถาม / Inquiry Type">
              <select
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className={fieldClassName}
              >
                <option value="">เลือกหัวข้อที่ต้องการสอบถาม</option>
                {inquiryTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </FieldShell>
            <p className="-mt-2 text-xs font-medium leading-relaxed text-slate-500">
              หัวข้อนี้ช่วยให้ทีมงานจัดลำดับและส่งต่อคำถามได้เร็วขึ้น
            </p>
          </fieldset>

          <fieldset className="space-y-4 rounded-2xl border border-slate-100 bg-white/80 p-4 sm:p-5">
            <legend className="px-2 text-sm font-black text-slate-950">Inquiry Details</legend>
            <FieldShell label="รายละเอียด">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="เช่น ประเทศปลายทาง วันที่เดินทาง ประเภทเอกสารที่ต้องการ หรือหมายเลขคำขอเดิม"
                className={`${fieldClassName} resize-none`}
              />
            </FieldShell>
          </fieldset>

          <fieldset className="space-y-3 rounded-2xl border border-dashed border-blue-200 bg-blue-50/50 p-4 sm:p-5">
            <legend className="px-2 text-sm font-black text-slate-950">Attachment</legend>
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
              className="flex w-full flex-col items-center justify-center rounded-2xl border border-white bg-white px-5 py-6 text-center shadow-[0_12px_34px_rgba(37,99,235,0.08)] transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_18px_44px_rgba(37,99,235,0.13)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-orange-300">
                <FileUp className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="mt-3 text-sm font-black text-slate-950">
                {attachment ? attachment.name : "แนบไฟล์ประกอบคำถาม"}
              </span>
              <span className="mt-1 text-xs font-medium text-slate-500">
                รองรับ PDF / JPG / PNG / WEBP ขนาดไม่เกิน 5MB
              </span>
            </button>
          </fieldset>

          <button
            type="submit"
            disabled={loading}
            className="group flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-accent-orange px-6 text-base font-black text-white shadow-[0_20px_55px_rgba(249,115,22,0.28)] transition hover:-translate-y-0.5 hover:bg-accent-hover disabled:cursor-not-allowed disabled:translate-y-0 disabled:opacity-60"
          >
            {loading ? "กำลังส่งข้อความ..." : "ส่งข้อความถึงทีมงาน"}
            <Send className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
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
      </div>
    </form>
  );
}

const fieldClassName =
  "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-semibold text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-100";

function FieldShell({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-slate-700">{label}</span>
      {children}
    </label>
  );
}

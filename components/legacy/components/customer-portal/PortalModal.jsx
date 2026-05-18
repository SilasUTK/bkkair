import NextImage from "next/image";
import { CheckCircle2, FileText, FileUp, Image as ImageIcon, Trash2, UploadCloud, UserPlus, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function PortalModal({ type, onClose }) {
  if (!type) return null;

  const isSlipUpload = type === "payment";
  const Icon = isSlipUpload ? FileUp : UserPlus;
  const title = isSlipUpload ? "อัปโหลดสลิปชำระเงิน" : "เพิ่มผู้เดินทาง";
  const subtitle = isSlipUpload
    ? "ทีมงานจะตรวจสอบยอดชำระและเริ่มจัดเตรียมเอกสารหลังได้รับสลิป"
    : "เก็บข้อมูลผู้เดินทางไว้ใช้กับคำขอครั้งถัดไป ลดเวลาการกรอกข้อมูลซ้ำ";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 sm:p-6 backdrop-blur-sm transition-opacity">
      <div className="w-full max-w-xl overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-[0_30px_90px_-25px_rgba(15,23,42,0.35)] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-primary-dark">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-950">{title}</h2>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-500">{subtitle}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#F8FAFC] text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {isSlipUpload ? <PaymentSlipForm /> : <TravelerForm />}

          {/* Actions */}
          <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex min-h-[3rem] items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 text-sm font-black text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
            >
              ยกเลิก
            </button>
            <button
              type="button"
              onClick={onClose}
              className={`inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-2xl px-6 text-sm font-black text-white transition hover:-translate-y-0.5 ${
                isSlipUpload 
                  ? "bg-accent-orange hover:bg-accent-hover shadow-[0_18px_38px_-22px_rgba(249,115,22,0.8)]" 
                  : "bg-primary-dark hover:bg-blue-800 shadow-[0_18px_38px_-22px_rgba(30,58,138,0.8)]"
              }`}
            >
              {isSlipUpload ? (
                <>
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  ยืนยันการแจ้งโอนเงิน
                </>
              ) : (
                <>
                  <UserPlus className="h-4 w-4" aria-hidden="true" />
                  บันทึกข้อมูล
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PaymentSlipForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const fileInputRef = useRef(null);

  const isImageFile = selectedFile?.type?.startsWith("image/");
  const isPdfFile = selectedFile?.type === "application/pdf";

  useEffect(() => {
    if (!selectedFile || !isImageFile) {
      setPreviewUrl("");
      return undefined;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreviewUrl(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [isImageFile, selectedFile]);

  function handleFileChange(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    setSelectedFile(file);
  }

  function handleRemoveFile() {
    setSelectedFile(null);
    setPreviewUrl("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  function handleChangeFile() {
    fileInputRef.current?.click();
  }

  return (
    <div className="space-y-5">
      <div className="rounded-2xl bg-orange-50 p-4 border border-orange-100">
        <div>
          <p className="text-sm font-bold text-orange-800">Payment details</p>
          <p className="mt-1 text-sm font-semibold leading-6 text-slate-700">
            เจ้าหน้าที่จะยืนยันยอดและรายละเอียดการชำระเงินก่อนเริ่มจัดเตรียมเอกสาร
          </p>
        </div>
      </div>

      <label className="block">
        <span className="text-sm font-black text-slate-700">วัน/เวลาที่โอนเงิน</span>
        <input
          type="text"
          placeholder="เช่น 06/05/2026 14:30"
          className="mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-bg-light px-4 text-sm font-semibold text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-primary-dark focus:bg-white focus:ring-4 focus:ring-blue-500/10"
        />
      </label>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*,.pdf"
        className="sr-only"
        onChange={handleFileChange}
      />

      {selectedFile ? (
        <div className="overflow-hidden rounded-[2rem] border-2 border-primary-dark bg-white shadow-[0_20px_60px_-20px_rgba(30,58,138,0.35)]">
          {isImageFile && previewUrl ? (
            <div className="relative h-64 bg-slate-100">
              <NextImage
                src={previewUrl}
                alt="Payment slip preview uploaded for staff verification"
                fill
                unoptimized
                sizes="(max-width: 640px) 100vw, 576px"
                className="object-contain"
              />
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-black text-primary-dark shadow-sm">
                <ImageIcon className="h-4 w-4" aria-hidden="true" />
                Image Preview
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-4 bg-blue-50/60 p-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-primary-dark shadow-sm">
                <FileText className="h-7 w-7" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-black text-slate-950">{selectedFile.name}</p>
                <p className="mt-1 text-xs font-semibold text-slate-500">
                  {isPdfFile ? "PDF document" : "Selected file"} · {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-3 border-t border-slate-100 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="truncate text-sm font-black text-slate-900">{selectedFile.name}</p>
              <p className="mt-1 text-xs font-semibold text-slate-500">
                พร้อมส่งให้เจ้าหน้าที่ตรวจสอบ
              </p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleChangeFile}
                className="inline-flex h-11 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 px-4 text-xs font-black text-primary-dark transition hover:border-primary-dark hover:bg-white"
              >
                เปลี่ยนไฟล์
              </button>
              <button
                type="button"
                onClick={handleRemoveFile}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-red-100 bg-red-50 text-red-500 transition hover:border-red-200 hover:bg-red-100"
                aria-label="Remove selected file"
              >
                <Trash2 className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <label className="block cursor-pointer rounded-[2rem] border-2 border-dashed border-blue-200 bg-blue-50/40 p-8 text-center transition-all hover:border-primary-dark hover:bg-blue-50 group">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-primary-dark transition-transform group-hover:scale-110">
            <UploadCloud className="h-6 w-6" aria-hidden="true" />
          </div>
          <span className="mt-4 block text-sm font-black text-slate-900">คลิกเพื่อเลือกไฟล์ หรือลากไฟล์มาวางที่นี่</span>
          <span className="mt-1 block text-xs font-semibold text-slate-500">รองรับไฟล์ JPG, PNG หรือ PDF (ขนาดไม่เกิน 5MB)</span>
          <input type="file" accept="image/*,.pdf" className="sr-only" onChange={handleFileChange} />
        </label>
      )}
    </div>
  );
}

function TravelerForm() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <label className="block sm:col-span-2">
        <span className="text-sm font-black text-slate-700">ชื่อ-นามสกุล (ภาษาอังกฤษ)</span>
        <input
          type="text"
          placeholder="e.g. Somchai Jaidee"
          className="mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-bg-light px-4 text-sm font-semibold text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-primary-dark focus:bg-white focus:ring-4 focus:ring-blue-500/10"
        />
      </label>
      <label className="block sm:col-span-2">
        <span className="text-sm font-black text-slate-700">เลขพาสปอร์ต (Passport No.)</span>
        <input
          type="text"
          placeholder="Passport number"
          className="mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-bg-light px-4 text-sm font-semibold text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-primary-dark focus:bg-white focus:ring-4 focus:ring-blue-500/10"
        />
      </label>
      <label className="block">
        <span className="text-sm font-black text-slate-700">วันเกิด (DOB)</span>
        <input
          type="date"
          className="mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-blue-500/10"
        />
      </label>
      <label className="block">
        <span className="text-sm font-black text-slate-700">วันหมดอายุพาสปอร์ต</span>
        <input
          type="date"
          className="mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-blue-500/10"
        />
      </label>
    </div>
  );
}

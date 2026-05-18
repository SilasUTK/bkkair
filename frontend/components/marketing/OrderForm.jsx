"use client";

import { useMemo, useState } from "react";
import { Send, CheckCircle2, ShieldCheck } from "lucide-react";
import { createBooking } from "../legacy/services/api.js";
import { countries, packages } from "./content";

function getTomorrowDate() {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 1);
  return date.toISOString().slice(0, 10);
}

export default function OrderForm({ initialPackage = "", initialCountry = "" }) {
  const tomorrow = useMemo(() => getTomorrowDate(), []);
  const [form, setForm] = useState({
    package: initialPackage || "standard",
    name: "",
    contact: "",
    destination: initialCountry || "",
    serviceType: "ท่องเที่ยว / ส่วนตัว",
    departureDate: "",
    passengerCount: "1",
    details: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function updateForm(event) {
    const { name, value } = event.target;
    setSubmitted(false);
    setError("");
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function submitOrder(event) {
    event.preventDefault();

    if (!form.package) return setError("กรุณาเลือกแพ็กเกจ");
    if (!form.name.trim()) return setError("กรุณาระบุชื่อ-นามสกุล");
    if (!form.contact.trim()) return setError("กรุณาระบุช่องทางติดต่อ");
    if (!form.destination.trim()) return setError("กรุณาระบุประเทศปลายทาง");
    if (!form.departureDate.trim()) return setError("กรุณาระบุวันเดินทาง");

    const passengerCount = Number(form.passengerCount || 1);
    if (passengerCount < 1 || passengerCount > 8) return setError("จำนวนผู้เดินทางต้องอยู่ระหว่าง 1-8 คน");

    setLoading(true);
    setError("");

    try {
      const selectedPackage = packages.find((pkg) => pkg.slug === form.package);
      await createBooking({
        name: form.name.trim(),
        phone: form.contact.trim(),
        email: "",
        lineId: "",
        destination: form.destination,
        visaCountry: form.destination,
        serviceType: `${selectedPackage?.name || form.package} - ${form.serviceType}`,
        departureDate: form.departureDate,
        passengerCount,
        notes: form.details,
      });
      setSubmitted(true);
      setForm((current) => ({
        ...current,
        name: "",
        contact: "",
        details: "",
      }));
    } catch (requestError) {
      setError(requestError.message || "ไม่สามารถส่งคำขอได้ กรุณาลองใหม่อีกครั้ง");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submitOrder} className="rounded-[2rem] bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="text-xs font-black uppercase tracking-wide text-slate-500">Package</span>
          <select name="package" value={form.package} onChange={updateForm} required className="mt-2 block w-full rounded-xl border-2 border-slate-100 bg-slate-50 px-4 py-3.5 font-medium text-slate-700 focus:border-blue-500 focus:bg-white focus:outline-none">
            {packages.map((pkg) => (
              <option key={pkg.slug} value={pkg.slug}>{pkg.name} - {pkg.price}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-xs font-black uppercase tracking-wide text-slate-500">ชื่อ-นามสกุล</span>
          <input name="name" value={form.name} onChange={updateForm} required placeholder="ระบุชื่อของคุณ" className="mt-2 block w-full rounded-xl border-2 border-slate-100 bg-slate-50 px-4 py-3.5 font-medium text-slate-700 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none" />
        </label>

        <label className="block md:col-span-2">
          <span className="text-xs font-black uppercase tracking-wide text-slate-500">ช่องทางติดต่อ</span>
          <input name="contact" value={form.contact} onChange={updateForm} required placeholder="เบอร์โทร / อีเมล / LINE ID" className="mt-2 block w-full rounded-xl border-2 border-slate-100 bg-slate-50 px-4 py-3.5 font-medium text-slate-700 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none" />
          <p className="mt-1.5 text-xs font-medium text-slate-500">กรอกช่องทางที่สะดวกให้ทีมงานติดต่อกลับ</p>
        </label>

        <label className="block">
          <span className="text-xs font-black uppercase tracking-wide text-slate-500">ประเทศปลายทาง</span>
          <select name="destination" value={form.destination} onChange={updateForm} required className="mt-2 block w-full rounded-xl border-2 border-slate-100 bg-slate-50 px-4 py-3.5 font-medium text-slate-700 focus:border-blue-500 focus:bg-white focus:outline-none">
            <option value="">เลือกประเทศ</option>
            {countries.map((country) => (
              <option key={country.slug} value={country.slug}>{country.thaiName} / {country.name}</option>
            ))}
            <option value="other">อื่นๆ</option>
          </select>
        </label>

        <label className="block">
          <span className="text-xs font-black uppercase tracking-wide text-slate-500">ประเภทวีซ่า</span>
          <select name="serviceType" value={form.serviceType} onChange={updateForm} required className="mt-2 block w-full rounded-xl border-2 border-slate-100 bg-slate-50 px-4 py-3.5 font-medium text-slate-700 focus:border-blue-500 focus:bg-white focus:outline-none">
            {["ท่องเที่ยว / ส่วนตัว", "ธุรกิจ", "เยี่ยมครอบครัว", "นักเรียน", "ทำงาน", "Transit"].map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-xs font-black uppercase tracking-wide text-slate-500">วันเดินทาง</span>
          <input name="departureDate" type="date" min={tomorrow} value={form.departureDate} onChange={updateForm} required className="mt-2 block w-full rounded-xl border-2 border-slate-100 bg-slate-50 px-4 py-3.5 font-medium text-slate-700 focus:border-blue-500 focus:bg-white focus:outline-none" />
        </label>

        <label className="block">
          <span className="text-xs font-black uppercase tracking-wide text-slate-500">จำนวนผู้เดินทาง</span>
          <input name="passengerCount" type="number" min="1" max="8" value={form.passengerCount} onChange={updateForm} required className="mt-2 block w-full rounded-xl border-2 border-slate-100 bg-slate-50 px-4 py-3.5 font-medium text-slate-700 focus:border-blue-500 focus:bg-white focus:outline-none" />
        </label>

        <label className="block md:col-span-2">
          <span className="text-xs font-black uppercase tracking-wide text-slate-500">รายละเอียดเพิ่มเติม</span>
          <textarea name="details" value={form.details} onChange={updateForm} rows={4} placeholder="เช่น เมืองที่ต้องการไป วันที่กลับ จำนวนคืน หรือข้อมูลพิเศษที่อยากให้ทีมงานทราบ" className="mt-2 block w-full rounded-xl border-2 border-slate-100 bg-slate-50 px-4 py-3.5 font-medium text-slate-700 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none" />
        </label>
      </div>

      <button type="submit" disabled={loading} className="mt-7 inline-flex h-13 w-full items-center justify-center gap-2 rounded-2xl bg-[#FF5722] px-6 py-4 text-base font-black text-white shadow-lg shadow-orange-200/60 transition hover:bg-[#E64A19] disabled:opacity-70">
        {loading ? "กำลังส่งคำขอ..." : "ส่งคำขอให้ทีมงานตรวจสอบ"}
        <Send className="h-4 w-4" />
      </button>

      {error && (
        <div className="mt-4 flex gap-3 rounded-xl border border-red-100 bg-red-50 p-4 text-sm font-semibold text-red-700">
          <ShieldCheck className="h-5 w-5 shrink-0" />
          {error}
        </div>
      )}

      {submitted && (
        <div className="mt-4 flex gap-3 rounded-xl border border-emerald-100 bg-emerald-50 p-4 text-sm text-emerald-800">
          <CheckCircle2 className="h-5 w-5 shrink-0" />
          <div>
            <p className="font-black">ส่งคำขอเรียบร้อย ทีมงานจะตรวจสอบและติดต่อกลับ</p>
            <p className="mt-1 text-xs">ข้อความนี้ไม่ใช่การยืนยันการจองตั๋วหรือออกเอกสารอัตโนมัติ</p>
          </div>
        </div>
      )}
    </form>
  );
}


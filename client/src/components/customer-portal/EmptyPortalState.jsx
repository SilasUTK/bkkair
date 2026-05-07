import { FileText, Plane, Plus, ShieldCheck, UserPlus } from "lucide-react";
import React from "react";

export default function EmptyPortalState({ onNewRequest, onAddTraveler }) {
  return (
    <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]">
      <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-black text-[#2563EB]">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            New customer workspace
          </div>
          <h2 className="mt-5 text-3xl font-black tracking-normal text-slate-950 sm:text-4xl">
            ยังไม่มีคำขอเอกสาร
          </h2>
          <p className="mt-4 max-w-xl text-sm font-semibold leading-6 text-slate-500 sm:text-base">
            เริ่มสร้างคำขอแรกของคุณสำหรับเอกสารยื่นวีซ่า ทีมงานจะตรวจสอบรายละเอียดก่อนติดต่อกลับเพื่อดำเนินการต่อ
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onNewRequest}
              className="inline-flex min-h-[3.25rem] items-center justify-center gap-3 rounded-2xl bg-[#FF5722] px-6 py-4 text-sm font-black text-white shadow-[0_20px_40px_-18px_rgba(255,87,34,0.7)] transition hover:-translate-y-0.5 hover:bg-[#E64A19]"
            >
              <Plus className="h-5 w-5" aria-hidden="true" />
              สร้างคำขอใหม่
            </button>
            <button
              type="button"
              onClick={onAddTraveler}
              className="inline-flex min-h-[3.25rem] items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-black text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-[#2563EB]"
            >
              <UserPlus className="h-5 w-5" aria-hidden="true" />
              เพิ่มผู้เดินทาง
            </button>
          </div>
        </div>

        <div className="bg-[#F8FAFC] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-4">
            <EmptyStep icon={Plane} title="ส่งคำขอ" text="ระบุปลายทาง วันเดินทาง และช่องทางติดต่อกลับ" />
            <EmptyStep icon={FileText} title="รอทีมงานตรวจสอบ" text="BKK AIR ตรวจข้อมูลก่อนเสนอราคาและเอกสารที่เหมาะสม" />
            <EmptyStep icon={ShieldCheck} title="รับเอกสารสำหรับยื่นวีซ่า" text="ดาวน์โหลดเอกสารที่เตรียมไว้หลังดำเนินการเสร็จ" />
          </div>
        </div>
      </div>
    </div>
  );
}

function EmptyStep({ icon: Icon, title, text }) {
  return (
    <article className="rounded-2xl border border-slate-100 bg-white p-5">
      <div className="flex gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#2563EB]">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-sm font-black text-slate-950">{title}</h3>
          <p className="mt-1 text-xs font-semibold leading-5 text-slate-500">{text}</p>
        </div>
      </div>
    </article>
  );
}
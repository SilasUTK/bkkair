import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Home, MessageCircle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "ได้รับคำขอแล้ว | BKK AIR",
  description:
    "ทีมงาน BKK AIR ได้รับคำขอเอกสารยื่นวีซ่าของคุณแล้ว และจะติดต่อกลับโดยเร็วที่สุด",
};

export default function ThankYouPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-slate-950 px-6 py-10 text-white lg:px-8">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.24),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(6,182,212,0.20),transparent_30%),radial-gradient(circle_at_55%_100%,rgba(249,115,22,0.18),transparent_34%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(2,6,23,0.95)_0%,rgba(15,23,42,0.86)_52%,rgba(2,6,23,0.98)_100%)]" />

      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-4xl items-center">
        <section className="w-full">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-slate-300 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            กลับไปหน้าแรก
          </Link>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-[0_30px_100px_rgba(2,6,23,0.42)] backdrop-blur-xl">
            <div className="border-b border-white/10 bg-white/[0.04] px-5 py-4 sm:px-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-cyan-100">
                <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                Request Received
              </div>
            </div>

            <div className="px-5 py-8 sm:px-7 sm:py-10 lg:px-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950 shadow-[0_18px_55px_rgba(34,211,238,0.28)]">
                <ShieldCheck className="h-8 w-8" aria-hidden="true" />
              </div>

              <h1 className="mt-6 text-3xl font-black leading-tight tracking-tight sm:text-5xl">
                ได้รับคำขอของคุณแล้ว
              </h1>
              <p className="mt-4 max-w-2xl text-base font-semibold leading-relaxed text-slate-200 sm:text-lg">
                ทีมงาน BKK AIR จะตรวจสอบข้อมูลและติดต่อกลับโดยเร็วที่สุด
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://lin.ee/823lateh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[#00B900] px-6 text-sm font-black text-white shadow-[0_18px_50px_rgba(0,185,0,0.25)] transition hover:-translate-y-0.5 hover:bg-[#02a802]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  แอด LINE เพื่อส่งข้อมูลเพิ่มเติม
                </a>
                <Link
                  href="/"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-6 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/15"
                >
                  <Home className="h-4 w-4" aria-hidden="true" />
                  กลับหน้าแรก
                </Link>
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/50 p-5 text-sm font-semibold leading-relaxed text-slate-300">
                BKK AIR จัดเตรียมเอกสารประกอบการยื่นวีซ่าเท่านั้น ไม่ใช่บริษัททัวร์ ไม่ใช่เอเจนซี่วีซ่า และไม่ได้ออกตั๋วเครื่องบินหรือการจองโรงแรมจริง
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

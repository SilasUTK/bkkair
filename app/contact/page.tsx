import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileCheck2,
  Languages,
  Mail,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import ContactForm from "../../components/contact/ContactForm";
import MarketingShell from "../../components/marketing/MarketingShell";

export const metadata: Metadata = {
  title: "ติดต่อเรา | BKK AIR",
  description: "ติดต่อทีมงาน BKK AIR ผ่าน LINE OA และ Email เพื่อสอบถามเอกสารยื่นวีซ่า แพ็กเกจบริการ และการตรวจสอบข้อมูลธุรกิจ",
};

const trustCards = [
  {
    title: "Reviewed by real staff",
    text: "ทุกคำขอมีทีมงานตรวจสอบรายละเอียด ไม่ใช่ระบบตอบกลับอัตโนมัติ",
    icon: ShieldCheck,
  },
  {
    title: "Embassy-support specialists",
    text: "ช่วยดูเอกสารสนับสนุนสถานทูต เช่น flight reservation, hotel booking และ itinerary",
    icon: FileCheck2,
  },
  {
    title: "Fast business-hour response",
    text: "LINE OA คือช่องทางที่เร็วที่สุดในเวลาทำการ Monday-Saturday 09:00-18:00",
    icon: Clock,
  },
  {
    title: "Thai & English support",
    text: "สื่อสารได้ทั้งภาษาไทยและอังกฤษสำหรับเคสเอกสารหลายประเทศ",
    icon: Languages,
  },
  {
    title: "Privacy-focused handling",
    text: "ข้อมูลของคุณใช้เพื่อประเมินคำขอและประสานงานเท่าที่จำเป็น",
    icon: Sparkles,
  },
];

const workflowSteps = [
  { title: "ทีมงานตรวจสอบ", text: "อ่านรายละเอียดและจัดประเภทคำขอ", icon: ShieldCheck },
  { title: "ติดต่อกลับ", text: "ตอบกลับผ่าน LINE / Email / Phone", icon: MessageCircle },
  { title: "แจ้งรายละเอียด", text: "แนะนำเอกสารและบริการที่เหมาะสม", icon: FileCheck2 },
  { title: "ส่งเอกสาร", text: "ดำเนินงานและส่งไฟล์ตามข้อตกลง", icon: Mail },
];

const miniFaq = [
  {
    q: "ต้องชำระเงินก่อนส่งคำถามหรือไม่?",
    a: "ไม่ต้อง คุณสามารถส่งคำถามเพื่อให้ทีมงานประเมินเบื้องต้นได้ก่อน",
  },
  {
    q: "ทีมงานตอบกลับภายในกี่ชั่วโมง?",
    a: "โดยทั่วไปคำถามส่วนใหญ่ตอบกลับภายใน 1-3 ชั่วโมงในเวลาทำการ",
  },
  {
    q: "ต้องเตรียมข้อมูลอะไรบ้างเมื่อสอบถาม?",
    a: "แนะนำให้แจ้งประเทศปลายทาง วันที่เดินทาง และประเภทเอกสารที่ต้องการ เพื่อให้ทีมงานช่วยได้เร็วขึ้น",
  },
  {
    q: "BKK AIR ช่วยเตรียมเอกสารยื่นวีซ่าอย่างไร?",
    a: "BKK AIR ให้บริการเฉพาะการจัดเตรียมเอกสารสนับสนุนวีซ่าเท่านั้น การอนุมัติวีซ่าเป็นดุลยพินิจของสถานทูตหรือสถานกงสุล",
  },
];

export default function ContactPage() {
  return (
    <MarketingShell>
      <section className="relative isolate overflow-hidden bg-slate-950 px-6 py-20 text-white md:py-24 lg:px-8">
        <Image
          src="/images/background/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover opacity-55"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgba(11,18,32,0.96)_0%,rgba(11,18,32,0.82)_44%,rgba(11,18,32,0.48)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-[#F8FAFC] to-transparent" />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-orange-200 backdrop-blur">
              CONTACT BKK AIR
            </p>
            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              ติดต่อทีมงาน BKK AIR
            </h1>
            <p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-slate-200 sm:text-xl">
              ทีมงานพร้อมช่วยเหลือเรื่องเอกสารวีซ่า
              และเอกสารสนับสนุนสถานทูตอย่างมืออาชีพ
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://line.me/R/ti/p/@823lateh"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-accent-orange px-6 text-sm font-black text-white shadow-[0_18px_50px_rgba(249,115,22,0.35)] transition hover:-translate-y-0.5 hover:bg-accent-hover"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                LINE OA
              </a>
              <Link
                href="/order"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-6 text-sm font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                ส่งคำขอ
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] px-6 py-12 md:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,0.46fr)_minmax(0,0.54fr)] lg:gap-10">
          <aside className="space-y-5">
            <div className="relative min-h-[320px] overflow-hidden rounded-3xl bg-slate-950 shadow-[0_26px_80px_rgba(15,23,42,0.18)] md:min-h-[460px]">
              <Image
                src="/images/background/hero-bg.jpg"
                alt="BKK AIR visa and embassy support"
                fill
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-white/10 p-5 text-white shadow-2xl backdrop-blur-md">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-200">Visa Concierge Desk</p>
                <p className="mt-2 text-xl font-black leading-snug">เริ่มจากการคุยกับทีมงานจริง</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-200">
                  ส่งข้อมูลเบื้องต้น ทีมงานจะช่วยประเมินเอกสารที่เหมาะกับประเทศปลายทางและแผนเดินทางของคุณ
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {trustCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="group rounded-2xl border border-white bg-white/85 p-4 shadow-[0_14px_40px_rgba(15,23,42,0.06)] backdrop-blur transition hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-[0_20px_50px_rgba(249,115,22,0.12)]"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-orange-300 transition group-hover:bg-accent-orange group-hover:text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h2 className="text-sm font-black text-slate-950">{card.title}</h2>
                    <p className="mt-1 text-xs font-medium leading-relaxed text-slate-600">{card.text}</p>
                  </div>
                );
              })}
            </div>
          </aside>

          <ContactForm />
        </div>

        <div className="mx-auto mt-10 max-w-7xl rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.06)] sm:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#2563EB]">After Submit</p>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                หลังส่งฟอร์มแล้วจะเกิดอะไรขึ้น?
              </h2>
            </div>
            <p className="max-w-xl text-sm font-medium leading-relaxed text-slate-500">
              ทุกขั้นตอนเป็นการตรวจสอบโดยทีมงานจริง เพื่อให้คำแนะนำและเอกสารสอดคล้องกับปลายทางของคุณ
            </p>
          </div>

          <ol className="relative mt-7 grid gap-4 md:grid-cols-4">
            <div className="pointer-events-none absolute left-8 right-8 top-8 hidden h-px bg-gradient-to-r from-blue-100 via-orange-200 to-blue-100 md:block" />
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <li key={step.title} className="relative rounded-2xl border border-slate-100 bg-[#F8FAFC] p-5 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_18px_44px_rgba(37,99,235,0.10)]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-200">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-xs font-black uppercase tracking-widest text-orange-600">Step {index + 1}</p>
                  <h3 className="mt-1 text-lg font-black text-slate-950">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mx-auto mt-8 max-w-7xl rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.05)] sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#2563EB]">Quick Answers</p>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">คำถามด่วนที่พบบ่อย</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {miniFaq.map((item) => (
              <details key={item.q} className="group rounded-2xl border border-slate-100 bg-[#F8FAFC] p-5 transition hover:border-orange-200">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-black text-slate-950">
                  {item.q}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-orange-600 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}

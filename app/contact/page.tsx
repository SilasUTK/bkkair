import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  FileCheck2,
  Globe2,
  Mail,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import ContactForm from "../../components/contact/ContactForm";
import MarketingShell from "../../components/marketing/MarketingShell";

export const metadata: Metadata = {
  title: "ติดต่อเรา | BKK AIR",
  description: "ติดต่อทีมงาน BKK AIR ผ่าน LINE OA และ Email เพื่อสอบถามเอกสารยื่นวีซ่า แพ็กเกจบริการ และการตรวจสอบข้อมูลธุรกิจ",
};

const trustPills = [
  { label: "ส่งงานภายใน 24 ชั่วโมง", icon: Clock },
  { label: "รองรับ Schengen, UK, USA, Canada, Australia และ Japan", icon: Globe2 },
  { label: "ตรวจสอบโดยทีมงานจริง", icon: ShieldCheck },
  { label: "ตอบกลับภายในเวลาทำการ", icon: MessageCircle },
];

const workflowSteps = [
  { title: "ทีมงานตรวจสอบ", text: "อ่านรายละเอียดและจัดประเภทคำขอ", icon: ShieldCheck },
  { title: "ติดต่อกลับ", text: "ตอบกลับผ่าน LINE / Email / Phone", icon: MessageCircle },
  { title: "แจ้งรายละเอียด", text: "แนะนำเอกสารและบริการที่เหมาะสม", icon: FileCheck2 },
  { title: "ส่งเอกสาร", text: "ดำเนินงานและส่งไฟล์ตามข้อตกลง", icon: Mail },
];

const contactFaq = [
  {
    q: "ใช้เอกสารสำหรับประเทศใดได้บ้าง?",
    a: "เอกสารสามารถใช้ประกอบคำขอวีซ่าสำหรับประเทศยอดนิยม เช่น Schengen, UK, USA, Canada, Australia, Japan, South Korea และประเทศอื่น ๆ ตามรายละเอียดที่ทีมงานประเมิน",
  },
  {
    q: "ใช้เวลาจัดทำกี่ชั่วโมง?",
    a: "โดยทั่วไปเอกสารสามารถจัดทำและส่งเป็นไฟล์ PDF ได้ภายใน 24 ชั่วโมง หลังทีมงานได้รับข้อมูลครบถ้วนและยืนยันรายละเอียดเรียบร้อยแล้ว",
  },
  {
    q: "สามารถแก้ไขข้อมูลได้หรือไม่?",
    a: "สามารถแจ้งทีมงานเพื่อแก้ไขข้อมูลได้ตามขอบเขตงานและช่วงเวลาที่ตกลง ก่อนส่งเอกสารฉบับสุดท้าย",
  },
  {
    q: "ได้รับเอกสารทางช่องทางใด?",
    a: "ทีมงานส่งเอกสารเป็นไฟล์ PDF ผ่านช่องทางที่คุณสะดวก เช่น LINE หรือ Email",
  },
  {
    q: "ต้องชำระเงินก่อนหรือไม่?",
    a: "คุณสามารถส่งฟอร์มเพื่อให้ทีมงานประเมินเบื้องต้นก่อนได้ รายละเอียดการชำระเงินจะแจ้งหลังทีมงานตรวจสอบข้อมูลและยืนยันบริการที่เหมาะสม",
  },
  {
    q: "สามารถใช้ยื่นวีซ่า Schengen ได้หรือไม่?",
    a: "สามารถใช้เป็นเอกสารสนับสนุนสำหรับการยื่นวีซ่า Schengen ได้ โดยเอกสารจะอ้างอิงข้อมูลการเดินทางที่ลูกค้าแจ้งและทีมงานตรวจสอบแล้ว",
  },
  {
    q: "หากข้อมูลผิดต้องทำอย่างไร?",
    a: "แจ้งทีมงานทันทีผ่าน LINE หรือ Email พร้อมระบุข้อมูลที่ต้องการแก้ไข ทีมงานจะตรวจสอบและแจ้งขอบเขตการแก้ไขให้ทราบ",
  },
  {
    q: "เอกสารมีอายุการใช้งานหรือไม่?",
    a: "เอกสารควรใช้ให้สอดคล้องกับวันที่เดินทางและช่วงเวลายื่นวีซ่าที่แจ้งไว้ หากแผนเดินทางเปลี่ยนควรแจ้งทีมงานเพื่อประเมินการอัปเดตเอกสาร",
  },
  {
    q: "รองรับวีซ่าประเภทใดบ้าง?",
    a: "รองรับเอกสารสนับสนุนสำหรับวีซ่าท่องเที่ยว เยี่ยมเยียน ธุรกิจ และวีซ่าอื่น ๆ ที่ต้องใช้ข้อมูลการเดินทางหรือที่พักประกอบการยื่น",
  },
  {
    q: "สามารถติดต่อทีมงานได้ทางไหน?",
    a: "ติดต่อได้ผ่าน LINE OA @823lateh หรือ Email info@bkkair.com โดย LINE OA เป็นช่องทางที่เร็วที่สุดในเวลาทำการ",
  },
  {
    q: "มีการรับประกันวีซ่าหรือไม่?",
    a: "ไม่มีการรับประกันผลวีซ่า BKK AIR ให้บริการเฉพาะเอกสารสนับสนุนการยื่นวีซ่าเท่านั้น การอนุมัติวีซ่าขึ้นอยู่กับสถานทูตหรือสถานกงสุลแต่เพียงผู้เดียว",
  },
];

const contactImage = "/images/background/contact-airport-counter.png";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: contactFaq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function ContactPage() {
  return (
    <MarketingShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="relative isolate overflow-hidden bg-slate-950 px-6 py-8 text-white md:py-10 lg:px-8">
        <Image
          src={contactImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover object-[52%_44%]"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgba(7,17,31,0.92)_0%,rgba(7,17,31,0.78)_48%,rgba(7,17,31,0.74)_100%)]" />
        <div className="absolute -right-24 top-8 -z-10 h-72 w-72 rounded-full bg-orange-500/20 blur-[90px]" />
        <div className="absolute left-1/2 top-0 -z-10 h-64 w-64 rounded-full bg-blue-500/15 blur-[90px]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-16 bg-gradient-to-t from-[#07111f] to-transparent" />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-orange-200 backdrop-blur">
              CONTACT BKK AIR
            </p>
            <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              ติดต่อทีมงาน BKK AIR
            </h1>
            <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-slate-200 sm:text-lg">
              ส่งข้อมูลเบื้องต้นให้ทีมงานตรวจสอบ เราจะติดต่อกลับเพื่อแนะนำเอกสารสนับสนุนวีซ่าที่เหมาะกับประเทศปลายทางของคุณ
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://line.me/R/ti/p/@823lateh"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-accent-orange px-6 text-sm font-black text-white shadow-[0_18px_50px_rgba(249,115,22,0.35)] transition hover:-translate-y-0.5 hover:bg-accent-hover"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                LINE OA
              </a>
              <Link
                href="#contact-form"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-6 text-sm font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                ส่งฟอร์มติดต่อ
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#07111f] px-6 pb-12 pt-8 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:items-start">
          <aside className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] text-white shadow-[0_24px_80px_rgba(2,6,23,0.28)] backdrop-blur-xl">
            <div className="relative min-h-[300px] overflow-hidden rounded-b-[1.5rem] bg-slate-950 sm:min-h-[360px] lg:min-h-[420px]">
              <Image
                src={contactImage}
                alt="BKK AIR premium airport counter visa support service"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-[48%_48%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/18 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/14 bg-slate-950/52 p-4 shadow-2xl backdrop-blur-xl">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-300">Premium Travel Concierge</p>
                <p className="mt-1 text-sm font-semibold text-slate-200">Airport counter service mood for BKK AIR customers</p>
              </div>
            </div>
            <div className="p-5 sm:p-6">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-300">
              ทำไมลูกค้าถึงเลือก BKK AIR
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
              ทีมงานจริง ดูแลเอกสารจริง และสื่อสารชัดเจน
            </h2>
            <p className="mt-3 text-sm font-medium leading-relaxed text-slate-300">
              BKK AIR เป็นบริการจัดเตรียมเอกสารสนับสนุนวีซ่า ลูกค้าจะได้รับการติดต่อจากทีมงานก่อนเริ่มดำเนินงานทุกครั้ง
            </p>
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
              <p className="text-sm font-black text-white">BKK AIR provides support documents only.</p>
              <p className="mt-2 text-xs font-semibold leading-relaxed text-slate-300">
                ไม่มีการออกตั๋วจริงอัตโนมัติ และไม่มีการรับประกันผลวีซ่า การอนุมัติขึ้นอยู่กับสถานทูตหรือสถานกงสุล
              </p>
            </div>
            </div>
          </aside>

          <div id="contact-form">
            <div className="mb-4 flex flex-wrap gap-2 rounded-[1.6rem] border border-white/10 bg-white/[0.06] p-3 shadow-[0_18px_52px_rgba(2,6,23,0.18)] backdrop-blur-xl">
              {trustPills.map((pill) => {
                const Icon = pill.icon;
                return (
                  <span
                    key={pill.label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/45 px-3 py-2 text-xs font-bold leading-tight text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0 text-orange-300" aria-hidden="true" />
                    {pill.label}
                  </span>
                );
              })}
            </div>
            <ContactForm />
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 text-white shadow-[0_24px_80px_rgba(2,6,23,0.22)] backdrop-blur-xl sm:p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-300">After Submit</p>
              <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
                หลังส่งฟอร์มแล้วจะเกิดอะไรขึ้น
              </h2>
            </div>
            <p className="max-w-xl text-sm font-medium leading-relaxed text-slate-300">
              ทุกขั้นตอนเป็นการตรวจสอบโดยทีมงานจริง เพื่อให้คำแนะนำสอดคล้องกับประเทศปลายทางและข้อมูลของคุณ
            </p>
          </div>

          <ol className="relative mt-6 grid gap-4 md:grid-cols-4">
            <div className="pointer-events-none absolute left-[7%] right-[7%] top-8 hidden h-[2px] bg-gradient-to-r from-blue-400/25 via-orange-300/80 to-blue-400/25 md:block" />
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.title}
                  className="relative rounded-2xl border border-white/10 bg-slate-950/48 p-4 transition hover:-translate-y-0.5 hover:border-orange-300/45 hover:shadow-[0_18px_44px_rgba(249,115,22,0.12)]"
                >
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-950 shadow-[0_0_0_6px_rgba(7,17,31,0.92),0_16px_34px_rgba(2,6,23,0.22)]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-xs font-black uppercase tracking-widest text-orange-300">STEP {index + 1}</p>
                  <h3 className="mt-1 text-base font-black text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{step.text}</p>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mx-auto mt-8 max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 text-white shadow-[0_24px_80px_rgba(2,6,23,0.18)] backdrop-blur-xl sm:p-6">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-300">FAQ</p>
          <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
            คำถามที่พบบ่อยเกี่ยวกับการใช้บริการ
          </h2>
          <div className="mt-5 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/35">
            {contactFaq.map((item, index) => (
              <details key={item.q} open={index === 0} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 text-sm font-black text-white transition hover:bg-white/[0.04] sm:px-5">
                  {item.q}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-orange-300 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="px-4 pb-4 text-sm font-medium leading-relaxed text-slate-300 sm:px-5">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}

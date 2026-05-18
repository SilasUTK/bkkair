import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileText,
  Mail,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import MarketingShell from "../../components/marketing/MarketingShell";
import JsonLd from "../../components/marketing/JsonLd";

export const metadata: Metadata = {
  title: "วิธีสั่งซื้อเอกสารยื่นวีซ่า ขั้นตอนง่าย ๆ — BKK AIR",
  description:
    "สั่งเอกสารสนับสนุนวีซ่ากับ BKK AIR ง่ายแค่ 4 ขั้นตอน — เลือกแพ็กเกจ กรอกข้อมูล ชำระเงิน รับ PDF พร้อมยื่นสถานทูตภายใน 24 ชั่วโมง",
};

const trustBadges = [
  "ตรวจสอบโดยทีมงานจริง",
  "ส่งภายใน 24 ชั่วโมง",
  "PDF พร้อมยื่นสถานทูต",
  "ราคาโปร่งใส",
];

const requiredInfo = [
  "ชื่อ-นามสกุลของผู้เดินทางทุกคน (ตรงตามหนังสือเดินทาง ภาษาอังกฤษ)",
  "วันเดินทางไป-กลับ (หรือช่วงเวลาที่ต้องการ)",
  "ประเทศปลายทาง และเมืองที่จะเข้า (ถ้ามีหลายเมือง ระบุได้)",
  "ประเทศที่จะยื่นวีซ่า (สำคัญ — เพราะแต่ละสถานทูตมีข้อกำหนดต่างกัน)",
  "อีเมลสำหรับรับเอกสาร",
];

const notRequired = [
  "ตั๋วเครื่องบินจริง",
  "การจองโรงแรมจริง",
  "ความรู้เรื่องวีซ่ามาก่อน",
];

const steps = [
  {
    number: "①",
    label: "ขั้นตอนที่ 1 — เลือกแพ็กเกจ",
    title: "รู้ว่าต้องการเอกสารอะไร เลือกได้เลย",
    body: "BKK AIR มีแพ็กเกจให้เลือกตามเอกสารที่คุณต้องการ",
    bullets: [
      "ใบจองตั๋วเครื่องบิน — สำหรับผู้ที่ต้องการ flight itinerary เท่านั้น",
      "ใบจองโรงแรม — สำหรับผู้ที่ต้องการหลักฐานที่พัก",
      "ชุดครบเซ็ต — ตั๋ว + โรงแรม + แผนการเดินทาง ในไฟล์เดียว (แนะนำสำหรับส่วนใหญ่)",
      "ชุดครบเซ็ต + ประกันการเดินทาง — สำหรับวีซ่าที่บังคับต้องมีประกัน เช่น Schengen",
    ],
    tip: "💡 ไม่แน่ใจว่าต้องใช้อะไร? ดูแนวทางตามประเทศได้ด้านล่าง หรือถามทีมงานก่อนสั่งได้เลย",
    cta: { href: "/packages", text: "ดูแพ็กเกจทั้งหมดและราคา" },
  },
  {
    number: "②",
    label: "ขั้นตอนที่ 2 — กรอกข้อมูล",
    title: "กรอกข้อมูลให้ครบ ถูกต้อง และตรงตามหนังสือเดินทาง",
    body: "หลังจากเลือกแพ็กเกจแล้ว คุณจะกรอกข้อมูลผ่านฟอร์มที่ปลอดภัย ข้อมูลที่ต้องกรอก ได้แก่",
    groups: [
      ["ข้อมูลผู้เดินทาง", "ชื่อ-นามสกุลภาษาอังกฤษ (ตรงตามหนังสือเดินทาง)", "จำนวนผู้เดินทาง"],
      ["ข้อมูลการเดินทาง", "วันเดินทางออก และวันเดินทางกลับ", "เมืองต้นทาง (เช่น Bangkok / BKK)", "ประเทศและเมืองปลายทาง", "ประเทศที่จะยื่นวีซ่า"],
      ["ข้อมูลสำหรับติดต่อ", "อีเมลสำหรับรับเอกสาร", "เบอร์โทรศัพท์ (สำหรับติดต่อกรณีข้อมูลไม่ครบ)"],
    ],
    warning: "⚠️ กรุณาตรวจสอบชื่อ-นามสกุลให้ถูกต้องก่อนยืนยัน เพราะเอกสารจะจัดทำตามข้อมูลที่กรอก หากต้องการแก้ไขภายหลังอาจมีค่าใช้จ่ายเพิ่มเติม",
    tip: "💡 ถ้าเดินทางหลายคน ระบุชื่อทุกคนได้เลยในฟอร์มเดียวกัน ราคาคำนวณต่อคน",
  },
  {
    number: "③",
    label: "ขั้นตอนที่ 3 — ชำระเงิน",
    title: "ชำระเงินผ่านช่องทางที่ปลอดภัย ยืนยันได้ทันที",
    body: "BKK AIR รองรับการชำระเงินหลายช่องทาง",
    bullets: [
      "💳 บัตรเครดิต / เดบิต — Visa, Mastercard",
      "🏦 โอนธนาคาร — พร้อมเพย์ / บัญชีธนาคาร",
      "ช่องทางอื่น ๆ ตามที่กำหนด",
      "หลังชำระเงินสำเร็จ คุณจะได้รับอีเมลยืนยันออเดอร์ พร้อมสรุปข้อมูลที่กรอก",
      "หมายเลขออเดอร์สำหรับติดตามสถานะ",
    ],
    reassurance: "🔒 ข้อมูลการชำระเงินทุกรายการเข้ารหัส เราไม่จัดเก็บข้อมูลบัตรเครดิตของคุณ",
    tip: "💡 กรุณาตรวจสอบอีเมลยืนยันออเดอร์ทันทีหลังชำระ ถ้าไม่ได้รับภายใน 15 นาที ให้ตรวจสอบในกล่อง Spam หรือติดต่อทีมงาน",
  },
  {
    number: "④",
    label: "ขั้นตอนที่ 4 — รับเอกสาร",
    title: "รับ PDF ทางอีเมล พร้อมยื่นสถานทูตทันที",
    body: "ทีมงาน BKK AIR จะตรวจสอบข้อมูล จัดทำเอกสาร และส่ง PDF ไปยังอีเมลของคุณ",
    bullets: [
      "แพ็กเกจมาตรฐาน — ภายใน 24 ชั่วโมง นับจากชำระเงินสำเร็จ",
      "แพ็กเกจ Express — ภายใน 3–6 ชั่วโมง (ในเวลาทำการ)",
      "Print เพื่อแนบในชุดเอกสารยื่นวีซ่า",
      "แนบไฟล์ในระบบยื่นวีซ่าออนไลน์ของสถานทูต",
      "บันทึกเก็บไว้เป็นสำรอง",
    ],
    reassurance: "หากพบปัญหาใด ๆ กับเอกสารที่ได้รับ ติดต่อทีมงานได้ทันที เราพร้อมช่วยเหลือ",
    tip: "💡 แนะนำให้ print เอกสารด้วยกระดาษ A4 สีขาว และไม่ต้องเย็บรวมกับเอกสารอื่น เพื่อให้เจ้าหน้าที่ตรวจสอบได้สะดวก",
  },
];

const timeline = [
  ["0 นาที", "คุณเลือกแพ็กเกจและกรอกข้อมูล"],
  ["5–10 นาที", "ชำระเงินสำเร็จ ได้รับอีเมลยืนยันออเดอร์"],
  ["1–3 ชั่วโมง", "ทีมงานเริ่มตรวจสอบและจัดทำเอกสาร"],
  ["ภายใน 24 ชั่วโมง", "รับ PDF ทางอีเมล พร้อมยื่น"],
  ["หลังได้รับ PDF", "Print หรือแนบไฟล์ยื่นสถานทูตได้เลย"],
];

const faqs = [
  [
    "เอกสารที่ได้รับใช้ยื่นสถานทูตได้จริงไหม?",
    "เอกสารทุกชิ้นจัดทำในรูปแบบที่สถานทูตส่วนใหญ่คาดหวัง และตรวจสอบโดยทีมงานก่อนส่งทุกครั้ง อย่างไรก็ตาม การยอมรับเอกสารและการอนุมัติวีซ่าเป็นดุลยพินิจของสถานทูตในแต่ละกรณี BKK AIR ให้บริการเฉพาะการจัดเตรียมเอกสารสนับสนุนเท่านั้น",
  ],
  [
    "ต้องซื้อตั๋วเครื่องบินจริงก่อนไหม?",
    "ไม่จำเป็นครับ/ค่ะ เอกสารของ BKK AIR คือใบจองสนับสนุนวีซ่า ไม่ใช่ตั๋วจริง คุณไม่ต้องซื้อตั๋วหรือจองโรงแรมจริงก่อนยื่นวีซ่า",
  ],
  [
    "ถ้ากรอกข้อมูลผิด แก้ไขได้ไหม?",
    "ได้ครับ/ค่ะ หากพบข้อผิดพลาดหลังสั่งซื้อ แจ้งทีมงานได้ทันที ถ้าแจ้งก่อนที่ทีมงานเริ่มจัดทำเอกสาร สามารถแก้ไขได้โดยไม่มีค่าใช้จ่ายเพิ่ม",
  ],
  [
    "ข้อมูลส่วนตัวของฉันปลอดภัยไหม?",
    "ปลอดภัยครับ/ค่ะ เราเก็บข้อมูลเฉพาะที่จำเป็นสำหรับจัดทำเอกสาร ไม่มีการขายหรือแชร์ข้อมูลให้บุคคลภายนอก และการชำระเงินทุกรายการผ่านระบบที่เข้ารหัส",
  ],
  [
    "สั่งสำหรับหลายคนพร้อมกันได้ไหม?",
    "ได้ครับ/ค่ะ ระบุจำนวนผู้เดินทางและชื่อทุกคนในฟอร์มเดียวได้เลย ราคาคำนวณต่อคน",
  ],
  [
    "ถ้าไม่ได้รับ PDF ภายใน 24 ชั่วโมงต้องทำอย่างไร?",
    "ติดต่อทีมงานได้ทันทีทาง LINE / อีเมล พร้อมแจ้งหมายเลขออเดอร์ เราจะตรวจสอบและแก้ไขให้โดยเร็ว",
  ],
  [
    "BKK AIR รับประกันวีซ่าผ่านไหม?",
    "ไม่ครับ/ค่ะ BKK AIR ให้บริการเฉพาะการจัดเตรียมเอกสารสนับสนุน การอนุมัติวีซ่าเป็นดุลยพินิจของสถานทูตหรือสถานกงสุลในทุกกรณี เราไม่รับประกันและไม่มีความสัมพันธ์พิเศษกับสถานทูตใด ๆ",
  ],
];

const countryGuides = [
  ["🇪🇺", "วีซ่า Schengen", "ฝรั่งเศส เยอรมนี อิตาลี สเปน ฯลฯ", "ใบจองตั๋วเครื่องบิน + ใบจองโรงแรม + แผนการเดินทาง + ประกันการเดินทาง (บังคับ)", "ชุดครบเซ็ต + ประกันการเดินทาง"],
  ["🇬🇧", "วีซ่าสหราชอาณาจักร (UK)", "", "ใบจองตั๋วเครื่องบิน + ใบจองโรงแรม + แผนการเดินทาง", "ชุดครบเซ็ต"],
  ["🇺🇸", "วีซ่าสหรัฐอเมริกา (US)", "", "หลักฐานแผนการเดินทางและที่พัก", "ชุดครบเซ็ต หรือ ใบจองตั๋ว + ใบจองโรงแรม"],
  ["🇨🇦", "วีซ่าแคนาดา", "", "ใบจองตั๋วและหลักฐานที่พัก", "ชุดครบเซ็ต"],
  ["🇦🇺", "วีซ่าออสเตรเลีย", "", "ใบจองตั๋วและแผนการเดินทาง", "ชุดครบเซ็ต"],
  ["🇯🇵", "วีซ่าญี่ปุ่น", "", "ใบจองตั๋วและแผนการเดินทางโดยละเอียด", "ชุดครบเซ็ต"],
  ["🇰🇷", "วีซ่าเกาหลีใต้", "", "ใบจองตั๋วและที่พัก", "ชุดครบเซ็ต หรือ ใบจองตั๋ว + ใบจองโรงแรม"],
  ["🌏", "ประเทศอื่น ๆ", "", "ติดต่อทีมงานเพื่อสอบถามข้อมูลเฉพาะประเทศ", "ปรึกษาทีมงานก่อนสั่ง"],
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

const complianceDisclaimer =
  "BKK AIR ให้บริการเฉพาะการจัดเตรียมเอกสารสนับสนุนวีซ่าเท่านั้น เราไม่ใช่ตัวแทนวีซ่า ไม่มีความสัมพันธ์พิเศษกับสถานทูต และไม่รับประกันการอนุมัติวีซ่า การอนุมัติวีซ่าเป็นดุลยพินิจของสถานทูตหรือสถานกงสุลในทุกกรณี";

export default function HowItWorksPage() {
  return (
    <MarketingShell>
      <JsonLd data={faqSchema} />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#F7FBFF] via-[#EEF6FF] to-[#FFF7F0] px-6 py-16 md:py-24 lg:px-8">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-200/60 blur-3xl" />
          <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-orange-200/60 blur-3xl" />
          <div className="absolute left-1/2 top-8 h-64 w-64 rounded-full bg-cyan-200/40 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <nav className="text-sm font-bold text-slate-500" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#003d82]">หน้าแรก</Link>
              <span className="mx-2">›</span>
              <span className="text-slate-800">วิธีสั่งซื้อ</span>
            </nav>
            <p className="mt-6 text-sm font-black uppercase tracking-widest text-[#003d82]">
              วิธีสั่งเอกสารยื่นวีซ่า
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              ไม่ซับซ้อน ไม่ต้องมีความรู้ด้านวีซ่า สั่งเอกสาร รับ PDF ยื่นสถานทูต — จบใน 4 ขั้นตอน
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
              BKK AIR ออกแบบกระบวนการให้ง่ายที่สุด คุณแค่บอกเราว่าจะเดินทางไปไหน เมื่อไหร่ และต้องการเอกสารอะไร — ที่เหลือเราจัดการให้
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-sm font-semibold leading-relaxed text-slate-500">
              วิธีสั่งเอกสารยื่นวีซ่า, ขั้นตอนยื่นวีซ่าเอกสาร, how to get flight reservation for visa,
              visa document service how it works Thailand และสั่งใบจองตั๋วยื่นวีซ่า ขั้นตอน
            </p>
            <ul className="mt-8 flex flex-wrap justify-center gap-3" aria-label="จุดเด่นบริการ">
              {trustBadges.map((badge) => (
                <li key={badge} className="inline-flex items-center gap-2 rounded-full border border-blue-100/70 bg-white/85 px-4 py-2 text-sm font-bold text-slate-700 shadow-[0_10px_40px_rgba(15,23,42,0.06)] backdrop-blur">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                  {badge}
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto mt-10 max-w-5xl rounded-3xl border border-orange-200 bg-white/90 px-6 py-5 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
            <ShieldCheck className="mx-auto h-6 w-6 text-[#f59e0b]" aria-hidden="true" />
            <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-700">{complianceDisclaimer}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-widest text-[#003d82]">ก่อนเริ่มสั่ง</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              เตรียมแค่นี้ก็พอ
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              ไม่ต้องเตรียมอะไรมาก ข้อมูลที่ต้องใช้มีแค่นี้
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-blue-100 bg-[#F8FAFC] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <h3 className="text-xl font-black text-slate-900">📋 ข้อมูลที่ต้องใช้ในการสั่ง</h3>
              <ul className="mt-5 space-y-3">
                {requiredInfo.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-orange-100 bg-orange-50/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <h3 className="text-xl font-black text-slate-900">💡 ไม่ต้องมี</h3>
              <ul className="mt-5 space-y-3">
                {notRequired.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#f59e0b]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-2xl bg-white px-5 py-4 text-sm font-semibold leading-relaxed text-orange-900">
                หมายเหตุ: BKK AIR จัดเตรียมเอกสารสนับสนุนวีซ่า ไม่ใช่การจองตั๋วหรือโรงแรมจริง เอกสารที่ได้รับใช้สำหรับประกอบการยื่นวีซ่าเท่านั้น
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] px-6 py-16 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-widest text-[#003d82]">ขั้นตอนการสั่งซื้อ</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              4 ขั้นตอน ตั้งแต่เริ่มจนรับเอกสาร
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:gap-8">
            {steps.map((step) => (
              <article key={step.number} className="grid gap-6 rounded-[2rem] border border-blue-100 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] lg:grid-cols-[120px_1fr] lg:p-8">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-900/10 text-4xl font-black text-[#003d82] lg:h-24 lg:w-24">
                  {step.number}
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-widest text-[#FF5722]">{step.label}</p>
                  <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900">{step.title}</h2>
                  <p className="mt-4 text-base leading-relaxed text-slate-600">{step.body}</p>

                  {step.bullets && (
                    <ul className="mt-5 grid gap-3 md:grid-cols-2">
                      {step.bullets.map((item) => (
                        <li key={item} className="rounded-2xl bg-[#F8FAFC] px-4 py-3 text-sm font-semibold leading-relaxed text-slate-700">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {step.groups && (
                    <div className="mt-5 grid gap-4 md:grid-cols-3">
                      {step.groups.map(([title, ...items]) => (
                        <div key={title} className="rounded-2xl bg-[#F8FAFC] p-4">
                          <h3 className="font-black text-slate-900">{title}</h3>
                          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-600">
                            {items.map((item) => <li key={item}>• {item}</li>)}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {step.warning && (
                    <p className="mt-5 rounded-2xl border border-orange-100 bg-orange-50 px-5 py-4 text-sm font-semibold leading-relaxed text-orange-900">
                      {step.warning}
                    </p>
                  )}
                  {step.reassurance && (
                    <p className="mt-5 rounded-2xl border border-emerald-100 bg-emerald-50 px-5 py-4 text-sm font-semibold leading-relaxed text-emerald-900">
                      {step.reassurance}
                    </p>
                  )}
                  {step.tip && (
                    <p className="mt-5 text-sm font-semibold leading-relaxed text-slate-500">{step.tip}</p>
                  )}
                  {step.cta && (
                    <Link href={step.cta.href} className="mt-5 inline-flex h-12 items-center justify-center rounded-2xl bg-[#2563EB] px-6 text-sm font-black text-white shadow-lg shadow-blue-200/60 hover:bg-blue-700">
                      {step.cta.text} <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-widest text-[#2563EB]">Timeline</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              ตั้งแต่สั่งจนยื่นสถานทูต ใช้เวลาเท่าไหร่?
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:gap-6">
            {timeline.map(([time, event]) => (
              <div key={time} className="flex gap-4 rounded-3xl border border-blue-100 bg-[#F8FAFC] p-5 shadow-sm">
                <div className="flex min-w-28 items-center justify-center rounded-2xl bg-blue-100 px-4 py-3 text-sm font-black text-[#2563EB]">
                  {time}
                </div>
                <p className="self-center text-base font-semibold leading-relaxed text-slate-700">{event}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 rounded-3xl border border-orange-100 bg-orange-50 px-6 py-5 text-center text-sm font-semibold leading-relaxed text-orange-900">
            ⚡ เลือก Express Add-on รับเอกสารภายใน 3–6 ชั่วโมง (เวลาทำการ จันทร์–เสาร์ 09:00–18:00)
          </p>
        </div>
      </section>

      <section className="bg-[#F8FAFC] px-6 py-16 md:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-widest text-[#2563EB]">คำถามที่พบบ่อย</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              ยังลังเลอยู่? อ่านตรงนี้ก่อน
            </h2>
          </div>

          <div className="mt-12 space-y-4 md:space-y-5">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-black text-slate-900">
                  {question}
                  <ArrowRight className="h-5 w-5 shrink-0 text-[#2563EB] transition-transform group-open:rotate-90" aria-hidden="true" />
                </summary>
                <p className="mt-4 border-t border-slate-100 pt-4 text-base leading-relaxed text-slate-600">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-widest text-[#2563EB]">แนวทางตามประเทศ</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              ยื่นวีซ่าประเทศไหน ต้องใช้เอกสารอะไร?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              นี่คือแนวทางเบื้องต้น ข้อกำหนดจริงอาจแตกต่างกันตามนโยบายของสถานทูต แนะนำให้ตรวจสอบกับสถานทูตโดยตรงหรือปรึกษาทีมงานก่อนสั่ง
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:gap-8 md:grid-cols-2">
            {countryGuides.map(([flag, country, note, docs, recommendation]) => (
              <article key={country} className="rounded-[2rem] border border-blue-100 bg-[#F8FAFC] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                <div className="flex items-start gap-4">
                  <span className="text-3xl" aria-hidden="true">{flag}</span>
                  <div>
                    <h3 className="text-xl font-black text-slate-900">{country}</h3>
                    {note && <p className="mt-1 text-sm font-semibold text-slate-500">{note}</p>}
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  เอกสารที่มักต้องใช้: {docs}
                </p>
                <p className="mt-4 rounded-2xl bg-white px-4 py-3 text-sm font-black text-[#2563EB]">
                  แนะนำ: {recommendation}
                </p>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-4xl rounded-3xl border border-orange-100 bg-orange-50 px-6 py-5 text-center text-sm font-semibold leading-relaxed text-orange-900">
            ข้อมูลข้างต้นเป็นแนวทางเบื้องต้นเท่านั้น ข้อกำหนดเอกสารอาจเปลี่ยนแปลงตามนโยบายของแต่ละสถานทูต กรุณาตรวจสอบข้อมูลล่าสุดจากเว็บไซต์สถานทูตโดยตรง
          </p>
        </div>
      </section>

      <section className="bg-[#F8FAFC] px-6 py-16 md:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              ไม่แน่ใจ ถามได้เลย ไม่มีข้อผูกมัด
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              ทีมงาน BKK AIR พร้อมแนะนำว่าคุณต้องการเอกสารอะไร เหมาะกับแพ็กเกจไหน และต้องเตรียมอะไรบ้าง — ก่อนที่คุณจะตัดสินใจสั่ง
            </p>
            <Link href="/contact" className="mt-7 inline-flex h-12 items-center justify-center rounded-2xl bg-[#FF5722] px-6 text-sm font-black text-white shadow-lg shadow-orange-200/60 hover:bg-[#E64A19]">
              💬 ปรึกษาทีมงานฟรี <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="rounded-[2rem] border border-blue-100 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <h3 className="text-xl font-black text-slate-900">ช่องทางติดต่อ</h3>
            <div className="mt-5 grid gap-3">
              <a href="https://line.me/R/ti/p/@823lateh" className="flex items-center gap-3 rounded-2xl bg-[#F8FAFC] p-4 text-sm font-bold text-slate-700">
                <MessageCircle className="h-5 w-5 text-[#00B900]" aria-hidden="true" />
                LINE: @823lateh
              </a>
              <a href="mailto:info@bkkair.com" className="flex items-center gap-3 rounded-2xl bg-[#F8FAFC] p-4 text-sm font-bold text-slate-700">
                <Mail className="h-5 w-5 text-[#2563EB]" aria-hidden="true" />
                อีเมล: info@bkkair.com
              </a>
              <div className="flex items-center gap-3 rounded-2xl bg-[#F8FAFC] p-4 text-sm font-bold text-slate-700">
                <Clock3 className="h-5 w-5 text-[#FF5722]" aria-hidden="true" />
                เวลาทำการ: จันทร์–เสาร์ 09:00–18:00 น.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#F7FBFF] via-[#EEF6FF] to-[#FFF7F0] px-6 py-16 md:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <FileText className="mx-auto h-10 w-10 text-[#2563EB]" aria-hidden="true" />
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            พร้อมแล้ว? เริ่มสั่งได้เลย
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            ใช้เวลาไม่ถึง 10 นาทีในการกรอกข้อมูล และรับ PDF พร้อมยื่นสถานทูตภายใน 24 ชั่วโมง
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/packages" className="inline-flex h-12 items-center justify-center rounded-2xl bg-[#2563EB] px-6 text-sm font-black text-white shadow-lg shadow-blue-200/60 hover:bg-blue-700">
              📄 เลือกแพ็กเกจและสั่งเลย <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-2xl border border-blue-200 bg-white px-6 text-sm font-black text-slate-700 shadow-[0_10px_40px_rgba(15,23,42,0.06)] hover:bg-blue-50">
              ยังไม่แน่ใจ → ปรึกษาทีมงานก่อน
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {["ไม่ต้องมีความรู้ด้านวีซ่า", "ตรวจสอบโดยทีมงานจริง", "ส่งภายใน 24 ชั่วโมง"].map((item) => (
              <li key={item} className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/85 px-4 py-2 text-sm font-bold text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <p className="mx-auto mt-8 max-w-3xl rounded-3xl border border-orange-200 bg-white/90 px-6 py-5 text-sm font-semibold leading-relaxed text-slate-700 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            {complianceDisclaimer}
          </p>
        </div>
      </section>
    </MarketingShell>
  );
}

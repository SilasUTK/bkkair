import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowUp,
  CheckCircle2,
  Clock,
  Copy,
  FileText,
  Mail,
  Search,
  Shield,
  Sparkles,
  XCircle,
} from "lucide-react";
import MarketingShell from "../../components/marketing/MarketingShell";

export const metadata: Metadata = {
  title: "ข้อกำหนดการใช้บริการ | BKK AIR",
  description:
    "ข้อกำหนดการใช้บริการ BKK AIR สำหรับบริการจัดเตรียมเอกสารสนับสนุนวีซ่า ขอบเขตบริการ การชำระเงิน การส่งมอบเอกสาร นโยบายคืนเงิน และข้อจำกัดความรับผิดชอบ",
  alternates: {
    canonical: "https://bkkair.com/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tableOfContents = [
  { id: "section-1", label: "1. ข้อมูลทั่วไปและคำนิยาม" },
  { id: "section-2", label: "2. ขอบเขตของบริการ" },
  { id: "section-3", label: "3. สิ่งที่ BKK AIR ไม่ได้ให้บริการ" },
  { id: "section-4", label: "4. ข้อสำคัญเรื่องวีซ่าและสถานทูต" },
  { id: "section-5", label: "5. การส่งคำขอและการชำระเงิน" },
  { id: "section-6", label: "6. การส่งมอบเอกสาร" },
  { id: "section-7", label: "7. การแก้ไขและยกเลิกคำขอ" },
  { id: "section-8", label: "8. นโยบายการคืนเงิน" },
  { id: "section-9", label: "9. ความรับผิดชอบของผู้ใช้บริการ" },
  { id: "section-10", label: "10. ข้อจำกัดความรับผิดชอบ" },
  { id: "section-11", label: "11. ทรัพย์สินทางปัญญา" },
  { id: "section-12", label: "12. การระงับหรือยกเลิกบริการ" },
  { id: "section-13", label: "13. กฎหมายที่ใช้บังคับ" },
  { id: "section-14", label: "14. การเปลี่ยนแปลงข้อกำหนด" },
  { id: "section-15", label: "15. ติดต่อเรา" },
  { id: "section-16", label: "สรุปสั้น ๆ" },
  { id: "section-17", label: "Compliance Note" },
];

function PolicySection({
  id,
  number,
  title,
  tone = "blue",
  children,
}: {
  id: string;
  number: string;
  title: string;
  tone?: "blue" | "red" | "amber" | "emerald" | "indigo";
  children: ReactNode;
}) {
  const toneClass = {
    blue: "bg-blue-500/20 text-blue-400",
    red: "bg-rose-500/20 text-rose-400",
    amber: "bg-amber-500/20 text-amber-400",
    emerald: "bg-emerald-500/20 text-emerald-400",
    indigo: "bg-indigo-500/20 text-indigo-400",
  }[tone];

  return (
    <section
      id={id}
      className="policy-section scroll-mt-28 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-xl shadow-slate-950/20 sm:p-8"
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <h2 className="flex items-center text-xl font-black tracking-tight text-white sm:text-2xl">
          <span className={`mr-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-black ${toneClass}`}>
            {number}
          </span>
          {title}
        </h2>
        <button
          type="button"
          className="copy-section-link shrink-0 rounded-lg border border-slate-700 bg-slate-800 p-2 text-slate-500 transition hover:border-blue-500 hover:text-white"
          data-section-id={id}
          aria-label={`Copy link to ${title}`}
        >
          <Copy className="h-4 w-4" />
        </button>
      </div>
      <div className="space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
        {children}
      </div>
    </section>
  );
}

function SummaryCard({
  title,
  children,
  tone = "blue",
}: {
  title: string;
  children: ReactNode;
  tone?: "blue" | "emerald" | "amber" | "indigo";
}) {
  const iconClass = {
    blue: "bg-blue-500/10 text-blue-400",
    emerald: "bg-emerald-500/10 text-emerald-400",
    amber: "bg-amber-500/10 text-amber-400",
    indigo: "bg-indigo-500/10 text-indigo-400",
  }[tone];

  return (
    <div className="flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-950/50 p-5">
      <span className={`shrink-0 rounded-lg p-2 ${iconClass}`}>
        <CheckCircle2 className="h-5 w-5" />
      </span>
      <div>
        <h3 className="mb-1 text-sm font-black text-white sm:text-base">{title}</h3>
        <p className="text-xs font-medium leading-relaxed text-slate-400 sm:text-sm">{children}</p>
      </div>
    </div>
  );
}

export default function TermsPage() {
  return (
    <MarketingShell>
      <article className="relative min-h-screen overflow-hidden bg-[#090d16] text-[#e2e8f0] selection:bg-blue-600 selection:text-white">
        <div className="pointer-events-none absolute left-12 top-12 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[80px]" />
        <div className="pointer-events-none absolute right-12 top-1/3 h-[450px] w-[450px] rounded-full bg-indigo-500/10 blur-[80px]" />

        <section className="relative z-10 border-b border-slate-800 px-6 pb-10 pt-16">
          <div className="mx-auto max-w-6xl text-center">
            <nav
              aria-label="Breadcrumb"
              className="mb-5 flex items-center justify-center gap-2 text-xs font-semibold text-slate-400"
            >
              <Link href="/" className="transition hover:text-blue-500">
                หน้าแรก
              </Link>
              <span className="text-slate-600">/</span>
              <span className="text-slate-300">ข้อกำหนดการใช้บริการ</span>
            </nav>

            <span className="mb-4 inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-blue-400">
              Terms &amp; Conditions
            </span>
            <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
              ข้อกำหนดการใช้บริการ
              <span className="mt-2 block text-xl font-extrabold uppercase tracking-wider text-slate-400 sm:text-2xl">
                Terms of Service
              </span>
            </h1>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-3.5 py-1.5 font-black text-slate-300">
                <Clock className="h-4 w-4" />
                อัปเดตล่าสุด: 18 พฤษภาคม 2569 (2026)
              </span>
              <span className="rounded-full border border-slate-800 bg-slate-900 px-3.5 py-1.5 font-black text-slate-300">
                เวอร์ชัน: 1.0
              </span>
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
              ข้อกำหนดและเงื่อนไขการใช้บริการฉบับนี้ อธิบายถึงขอบเขตบริการ
              สิทธิ์ความรับผิดชอบ เงื่อนไขการชำระเงิน การส่งมอบและแก้ไขไฟล์งาน
              ตลอดจนนโยบายการคืนเงินและขอบเขตข้อจำกัดความรับผิดชอบทั้งหมดของ BKK AIR
            </p>
          </div>
        </section>

        <main className="relative z-10 mx-auto max-w-6xl px-6 py-8">
          <div className="mb-8 flex flex-col items-center justify-between gap-4 border-b border-slate-800 pb-6 sm:flex-row">
            <div className="inline-flex rounded-2xl border border-slate-800 bg-slate-900/80 p-1.5">
              <button
                type="button"
                id="btnViewFull"
                className="terms-view-button rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-black text-white shadow-lg shadow-blue-500/20"
                data-view-target="full"
              >
                อ่านข้อตกลงเต็ม
              </button>
              <button
                type="button"
                id="btnViewSummary"
                className="terms-view-button rounded-xl px-5 py-2.5 text-sm font-black text-slate-400 transition hover:text-white"
                data-view-target="summary"
              >
                สรุปสั้น ๆ
              </button>
            </div>

            <label id="termsSearchBox" className="relative block w-full sm:w-80">
              <span className="sr-only">ค้นหาเงื่อนไขหรือนโยบาย</span>
              <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                id="termsSearchInput"
                type="search"
                placeholder="ค้นหาเงื่อนไข/นโยบาย..."
                className="w-full rounded-xl border border-slate-700/60 bg-slate-800/50 py-2.5 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-slate-400 hover:bg-slate-800/80 focus:ring-2 focus:ring-blue-500"
              />
            </label>
          </div>

          <div
            id="searchNotice"
            className="mb-6 hidden rounded-xl border border-blue-800/50 bg-blue-950/40 p-4 text-sm font-semibold text-blue-300"
          >
            กำลังแสดงเฉพาะหัวข้อที่พบจากคำค้นหา
          </div>

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            <aside
              id="sidebar-nav"
              className="hidden max-h-[calc(100vh-120px)] space-y-6 overflow-y-auto pr-2 lg:sticky lg:top-24 lg:col-span-3 lg:block"
            >
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-sm">
                <div className="mb-4 flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                    ในหน้านี้
                  </span>
                  <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-xs font-black text-blue-400">
                    17 หัวข้อ
                  </span>
                </div>
                <nav className="space-y-1">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="toc-link block rounded-r-md border-l-2 border-transparent px-3 py-1.5 pl-4 text-xs font-bold text-slate-400 transition hover:border-slate-600 hover:text-white"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-indigo-950/40 to-slate-900/60 p-5 shadow-xl">
                <div className="mb-2 flex items-center gap-2 text-xs font-black text-indigo-400">
                  <Shield className="h-4 w-4" />
                  ศูนย์รวมความช่วยเหลือ
                </div>
                <h3 className="mb-2 text-sm font-black text-white">
                  มีปัญหาการรับส่งไฟล์?
                </h3>
                <p className="mb-4 text-xs leading-relaxed text-slate-400">
                  หากไม่ได้รับเอกสารภายใน 24 ชั่วโมง หรือข้อมูลมีปัญหา
                  โปรดติดต่อฝ่ายประสานงานได้ทันที
                </p>
                <a
                  href="mailto:info@bkkair.com"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-2 text-xs font-black text-white transition hover:bg-blue-500"
                >
                  <Mail className="h-4 w-4" />
                  info@bkkair.com
                </a>
              </div>
            </aside>

            <div id="fullPolicyContainer" className="lg:col-span-9">
              <div className="space-y-6">
                <PolicySection id="section-1" number="1" title="ข้อมูลทั่วไปและคำนิยาม">
                  <p>
                    <strong className="text-blue-400">BKK AIR</strong>{" "}
                    ให้บริการจัดเตรียมเอกสารข้อมูลเชิงท่องเที่ยวเพื่อใช้เป็นหลักฐานสนับสนุนการยื่นวีซ่าสำหรับผู้เดินทาง
                    ผ่านเว็บไซต์ <Link href="/" className="font-bold text-blue-400 hover:underline">bkkair.com</Link>
                  </p>
                  <ul className="list-disc space-y-2 pl-6 marker:text-blue-400">
                    <li>
                      <strong className="text-white">“บริการ”</strong> หมายถึง การรับเรื่อง เรียบเรียง
                      และส่งมอบชุดเอกสารรูปแบบไฟล์ PDF เพื่อสนับสนุนวีซ่า เช่น ใบจองตั๋วเครื่องบิน
                      ใบจองโรงแรม แผนการเดินทาง และเอกสารที่เกี่ยวข้อง
                    </li>
                    <li>
                      <strong className="text-white">“เอกสารสนับสนุนวีซ่า”</strong> หมายถึง เอกสาร PDF
                      เพื่อใช้ประกอบการยื่นวีซ่าเท่านั้น ไม่ใช่ตั๋วโดยสารจริง ใบจองโรงแรมจริง
                      หรือหลักฐานการชำระเงินให้สายการบินหรือโรงแรม
                    </li>
                    <li>
                      <strong className="text-white">“ผู้ใช้บริการ”</strong> หมายถึง บุคคลที่เข้าใช้เว็บไซต์
                      ส่งคำขอ หรือใช้บริการของ BKK AIR
                    </li>
                    <li>
                      <strong className="text-white">“คำขอ”</strong> หมายถึง รายการบริการที่ผู้ใช้บริการส่งข้อมูล
                      ยืนยันรายละเอียด และชำระเงินเรียบร้อยแล้ว
                    </li>
                  </ul>
                </PolicySection>

                <PolicySection id="section-2" number="2" title="ขอบเขตของบริการ">
                  <p>
                    BKK AIR ให้บริการจัดเตรียมเอกสารสนับสนุนการยื่นวีซ่าในรูปแบบเอกสาร PDF
                    ตามข้อมูลที่ผู้ใช้บริการให้ไว้ โดยบริการเป็นงานรับคำขอและให้ทีมงานตรวจสอบก่อนจัดทำเอกสาร
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    {[
                      ["ใบจองตั๋วเครื่องบิน", "เอกสาร PDF แสดงรายละเอียดการเดินทาง เช่น ชื่อผู้เดินทาง เมืองต้นทาง เมืองปลายทาง วันเดินทาง และรายละเอียดเที่ยวบิน"],
                      ["ใบจองโรงแรม", "เอกสาร PDF แสดงรายละเอียดที่พัก เช่น ชื่อผู้เข้าพัก ชื่อโรงแรม วันที่เข้าพัก และวันที่ออกจากที่พัก"],
                      ["แผนการเดินทาง", "เอกสาร PDF แสดงกำหนดการเดินทางโดยสรุปสำหรับใช้ประกอบการยื่นวีซ่า"],
                      ["ชุดเอกสารครบเซ็ต", "รวมเอกสารสนับสนุนที่เกี่ยวข้องตามแพ็กเกจที่ผู้ใช้บริการเลือก"],
                    ].map(([title, body]) => (
                      <div key={title} className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
                        <h3 className="font-black text-white">{title}</h3>
                        <p className="mt-1 text-sm text-slate-400">{body}</p>
                      </div>
                    ))}
                  </div>
                </PolicySection>

                <PolicySection id="section-3" number="3" title="สิ่งที่ BKK AIR ไม่ได้ให้บริการ" tone="red">
                  <ul className="grid gap-3 md:grid-cols-2">
                    {[
                      "ไม่ได้ออกตั๋วเครื่องบินจริงหรือชำระค่าตั๋วโดยสารแทนผู้ใช้บริการ",
                      "ไม่ได้จองโรงแรมจริงหรือชำระค่าที่พักแทนผู้ใช้บริการ",
                      "ไม่ได้ยื่นใบสมัครวีซ่าแทนผู้ใช้บริการ",
                      "ไม่ได้ให้คำปรึกษากฎหมายด้านการเข้าเมืองหรือตรวจคนเข้าเมือง",
                      "ไม่ได้เป็นตัวแทนของสถานทูต สถานกงสุล หน่วยงานรัฐ หรือหน่วยงานตรวจคนเข้าเมือง",
                      "ไม่ได้รับประกันว่าเอกสารจะได้รับการยอมรับหรือวีซ่าจะได้รับการอนุมัติ",
                    ].map((item) => (
                      <li key={item} className="flex gap-3 rounded-xl border border-rose-900/40 bg-rose-950/20 p-3">
                        <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </PolicySection>

                <PolicySection id="section-4" number="4" title="ข้อสำคัญเรื่องวีซ่าและสถานทูต" tone="amber">
                  <p className="rounded-2xl border border-amber-900/40 bg-amber-950/30 p-4 font-bold text-amber-200">
                    BKK AIR ให้บริการจัดเตรียมเอกสารสนับสนุนวีซ่าเท่านั้น ไม่มีส่วนเกี่ยวข้องกับสถานทูต
                    หน่วยงานรัฐ หรือหน่วยงานตรวจคนเข้าเมือง และไม่สามารถรับประกันผลการอนุมัติวีซ่าได้
                  </p>
                  <p>
                    การอนุมัติหรือปฏิเสธวีซ่าเป็นดุลยพินิจของสถานทูตหรือหน่วยงานที่เกี่ยวข้อง
                    โดยพิจารณาจากข้อมูล ประวัติ เอกสาร และข้อกำหนดของแต่ละประเทศ
                  </p>
                  <p>
                    ผู้ใช้บริการมีหน้าที่ตรวจสอบข้อกำหนดเอกสารล่าสุดจากเว็บไซต์สถานทูต
                    หรือหน่วยงานที่เกี่ยวข้องก่อนยื่นเอกสารทุกครั้ง
                  </p>
                </PolicySection>

                <PolicySection id="section-5" number="5" title="การส่งคำขอและการชำระเงิน">
                  <p>
                    คำขอจะถือว่าสมบูรณ์เมื่อผู้ใช้บริการส่งข้อมูลครบถ้วน ชำระเงินเรียบร้อย
                    และได้รับการยืนยันจาก BKK AIR โดยเป็นคำขอที่รอการตรวจสอบและจัดทำจากทีมงาน
                  </p>
                  <ul className="list-disc space-y-2 pl-6 marker:text-blue-400">
                    <li>ผู้ใช้บริการต้องกรอกข้อมูลให้ถูกต้องและครบถ้วน</li>
                    <li>ชื่อและนามสกุลต้องตรงกับหนังสือเดินทางทุกตัวอักษร</li>
                    <li>วันเดินทาง ประเทศปลายทาง และรายละเอียดบริการต้องถูกต้องก่อนยืนยันคำขอ</li>
                    <li>ราคาที่แสดงเป็นค่าบริการจัดเตรียมเอกสารของ BKK AIR เท่านั้น</li>
                    <li>ราคายังไม่รวมค่าธรรมเนียมสถานทูต ค่าธรรมเนียมหน่วยงานภายนอก หรือค่าใช้จ่ายอื่นที่ไม่ได้ระบุ</li>
                  </ul>
                </PolicySection>

                <PolicySection id="section-6" number="6" title="การส่งมอบเอกสาร">
                  <ul className="list-disc space-y-2 pl-6 marker:text-blue-400">
                    <li>เอกสารจะถูกส่งเป็นเอกสาร PDF ไปยังอีเมลที่ผู้ใช้บริการระบุ</li>
                    <li>แพ็กเกจมาตรฐาน: ภายใน 24 ชั่วโมงหลังชำระเงินและข้อมูลครบถ้วน</li>
                    <li>แพ็กเกจ Express: ภายใน 3-6 ชั่วโมงในเวลาทำการ หากมีให้บริการ</li>
                    <li>ระยะเวลาส่งมอบเป็นเป้าหมายการให้บริการ อาจเปลี่ยนแปลงได้หากข้อมูลไม่ครบหรือมีเหตุสุดวิสัย</li>
                  </ul>
                  <p>
                    หลังได้รับเอกสาร ผู้ใช้บริการควรตรวจสอบความถูกต้องทันที
                    หากพบข้อผิดพลาดควรแจ้ง BKK AIR ภายใน 48 ชั่วโมงหลังได้รับเอกสาร
                  </p>
                </PolicySection>

                <PolicySection id="section-7" number="7" title="การแก้ไขและยกเลิกคำขอ">
                  <ul className="list-disc space-y-2 pl-6 marker:text-blue-400">
                    <li>แก้ไขข้อมูลได้โดยไม่มีค่าใช้จ่าย หากแจ้งก่อนที่ทีมงานเริ่มจัดเตรียมเอกสาร</li>
                    <li>หากเริ่มจัดเตรียมเอกสารแล้ว อาจมีค่าธรรมเนียมการแก้ไขตามความซับซ้อน</li>
                    <li>หากส่งเอกสารแล้ว การแก้ไขที่เกิดจากข้อมูลผิดพลาดของผู้ใช้บริการอาจมีค่าบริการเพิ่มเติม</li>
                    <li>การยกเลิกคำขอต้องแจ้งผ่านอีเมลหรือช่องทางติดต่อที่ BKK AIR กำหนด</li>
                  </ul>
                </PolicySection>

                <PolicySection id="section-8" number="8" title="นโยบายการคืนเงิน" tone="amber">
                  <div className="overflow-x-auto rounded-2xl border border-slate-800">
                    <table className="w-full min-w-[680px] border-collapse text-left text-sm">
                      <thead className="bg-slate-950 text-white">
                        <tr>
                          <th className="border-b border-slate-800 px-4 py-3 font-black">สถานการณ์</th>
                          <th className="border-b border-slate-800 px-4 py-3 font-black">นโยบาย</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-300">
                        {[
                          ["ยกเลิกก่อนทีมงานเริ่มจัดเตรียมเอกสาร", "คืนเงิน 100%"],
                          ["ทีมงานเริ่มจัดเตรียมเอกสารแล้ว แต่ยังไม่ได้ส่งเอกสาร", "อาจคืนเงินบางส่วนตามงานที่ดำเนินการแล้ว"],
                          ["ส่งเอกสารแล้ว และเอกสารถูกต้องตามข้อมูลที่ผู้ใช้บริการให้ไว้", "ไม่สามารถคืนเงินได้"],
                          ["เอกสารมีข้อผิดพลาดจาก BKK AIR", "แก้ไขฟรี หรือคืนเงินตามกรณีที่เหมาะสม"],
                          ["วีซ่าถูกปฏิเสธหรือเอกสารถูกสถานทูตไม่รับพิจารณา", "ไม่สามารถคืนเงินได้ เนื่องจากอยู่นอกเหนือการควบคุมของ BKK AIR"],
                        ].map(([situation, policy]) => (
                          <tr key={situation}>
                            <td className="border-b border-slate-800 px-4 py-3">{situation}</td>
                            <td className="border-b border-slate-800 px-4 py-3">{policy}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p>
                    ระยะเวลาคืนเงินโดยทั่วไปคือ 7-14 วันทำการหลังจากได้รับอนุมัติคำขอคืนเงิน
                    โดยคืนผ่านช่องทางการชำระเงินเดิมหรือช่องทางที่ BKK AIR กำหนด
                  </p>
                </PolicySection>

                <PolicySection id="section-9" number="9" title="ความรับผิดชอบของผู้ใช้บริการ">
                  <ul className="list-disc space-y-2 pl-6 marker:text-blue-400">
                    <li>ให้ข้อมูลจริง ถูกต้อง และครบถ้วน</li>
                    <li>ตรวจสอบชื่อ-นามสกุลให้ตรงกับหนังสือเดินทางทุกตัวอักษร</li>
                    <li>ตรวจสอบวันเดินทาง ประเทศปลายทาง และรายละเอียดบริการก่อนยืนยันคำขอ</li>
                    <li>ตรวจสอบเอกสาร PDF หลังได้รับ และก่อนนำไปใช้ยื่นวีซ่า</li>
                    <li>ใช้เอกสารเพื่อวัตถุประสงค์ที่ถูกต้องตามกฎหมายเท่านั้น</li>
                    <li>ไม่ใช้เอกสารเพื่อการฉ้อโกง ปลอมแปลง หรือทำให้บุคคลอื่นเข้าใจผิด</li>
                    <li>ยอมรับว่า BKK AIR ไม่สามารถรับประกันผลการอนุมัติวีซ่าได้</li>
                  </ul>
                </PolicySection>

                <PolicySection id="section-10" number="10" title="ข้อจำกัดความรับผิดชอบ" tone="amber">
                  <p>
                    BKK AIR รับผิดชอบเฉพาะการจัดเตรียมเอกสาร PDF ตามข้อมูลที่ผู้ใช้บริการให้ไว้เท่านั้น
                  </p>
                  <ul className="list-disc space-y-2 pl-6 marker:text-amber-400">
                    <li>ไม่รับผิดชอบต่อผลการอนุมัติหรือปฏิเสธวีซ่า</li>
                    <li>ไม่รับผิดชอบต่อความเสียหายจากข้อมูลที่ผู้ใช้บริการให้มาผิด</li>
                    <li>ไม่รับผิดชอบต่อข้อกำหนดสถานทูตที่เปลี่ยนแปลงหลังจากจัดเตรียมเอกสาร</li>
                    <li>ไม่รับผิดชอบต่อความล่าช้าของระบบอีเมล อินเทอร์เน็ต หรือระบบภายนอก</li>
                    <li>ไม่รับผิดชอบต่อค่าใช้จ่ายทางอ้อม เช่น ค่าตั๋ว ค่าโรงแรม ค่าทัวร์ หรือแผนการเดินทางที่ถูกยกเลิก</li>
                  </ul>
                  <p>
                    หาก BKK AIR มีความรับผิดใด ๆ วงเงินความรับผิดสูงสุดจำกัดไม่เกินจำนวนเงินที่ผู้ใช้บริการชำระสำหรับคำขอนั้น
                  </p>
                </PolicySection>

                <PolicySection id="section-11" number="11" title="ทรัพย์สินทางปัญญา">
                  <p>
                    เนื้อหา โลโก้ ข้อความ รูปภาพ การออกแบบ เว็บไซต์ และรูปแบบเอกสารของ BKK AIR
                    เป็นทรัพย์สินของ BKK AIR หรือผู้ให้สิทธิ์ที่เกี่ยวข้อง
                    และได้รับความคุ้มครองตามกฎหมายทรัพย์สินทางปัญญา
                  </p>
                </PolicySection>

                <PolicySection id="section-12" number="12" title="การระงับหรือยกเลิกบริการ" tone="red">
                  <p>BKK AIR ขอสงวนสิทธิ์ระงับหรือปฏิเสธการให้บริการ หากพบว่าผู้ใช้บริการ:</p>
                  <ul className="list-disc space-y-2 pl-6 marker:text-rose-400">
                    <li>ให้ข้อมูลเท็จหรือปลอมแปลงข้อมูล</li>
                    <li>ใช้บริการเพื่อวัตถุประสงค์ที่ผิดกฎหมาย</li>
                    <li>ละเมิดข้อกำหนดการใช้บริการ</li>
                    <li>กระทำการที่อาจก่อให้เกิดความเสียหายต่อ BKK AIR หรือบุคคลอื่น</li>
                  </ul>
                </PolicySection>

                <PolicySection id="section-13" number="13" title="กฎหมายที่ใช้บังคับ">
                  <p>ข้อกำหนดฉบับนี้อยู่ภายใต้และตีความตามกฎหมายแห่งราชอาณาจักรไทย</p>
                </PolicySection>

                <PolicySection id="section-14" number="14" title="การเปลี่ยนแปลงข้อกำหนด">
                  <p>
                    BKK AIR อาจปรับปรุงข้อกำหนดนี้เป็นครั้งคราว โดยวันที่อัปเดตล่าสุดจะแสดงไว้ด้านบนของหน้านี้เสมอ
                    การใช้บริการต่อไปหลังจากมีการเปลี่ยนแปลงถือว่าผู้ใช้บริการยอมรับข้อกำหนดฉบับใหม่
                  </p>
                </PolicySection>

                <PolicySection id="section-15" number="15" title="ติดต่อเรา" tone="indigo">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5">
                      <span className="mb-1 block text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                        ติดต่อเรื่องบริการและเอกสาร
                      </span>
                      <p className="text-xl font-black tracking-wide text-white">info@bkkair.com</p>
                      <p className="mt-1 text-xs leading-relaxed text-slate-400">
                        สำหรับคำถามเกี่ยวกับคำขอ การส่งเอกสาร การแก้ไขไฟล์ และการประสานงานทั่วไป
                      </p>
                    </div>
                    <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5">
                      <span className="mb-1 block text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                        สิทธิ์ความเป็นส่วนตัวและ PDPA
                      </span>
                      <p className="text-xl font-black tracking-wide text-white">privacy@bkkair.com</p>
                      <p className="mt-1 text-xs leading-relaxed text-slate-400">
                        สำหรับคำขอลบข้อมูล ขอสำเนาข้อมูล หรือข้อซักถามด้านการคุ้มครองข้อมูลส่วนบุคคล
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-slate-800 pt-4 text-sm text-slate-400">
                    <p><strong className="text-white">Official LINE OA:</strong> @823lateh</p>
                    <p><strong className="text-white">Business Hours:</strong> Monday-Saturday 09:00-18:00 (Thailand Time)</p>
                    <p>
                      อ่านเพิ่มเติมเกี่ยวกับข้อมูลส่วนบุคคลได้ที่{" "}
                      <Link href="/privacy-policy" className="font-bold text-blue-400 hover:underline">
                        นโยบายความเป็นส่วนตัว
                      </Link>
                    </p>
                  </div>
                </PolicySection>

                <section
                  id="section-16"
                  className="policy-section scroll-mt-28 rounded-3xl border border-emerald-500/20 bg-emerald-950/25 p-6 shadow-xl sm:p-8"
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <h2 className="flex items-center text-xl font-black text-white sm:text-2xl">
                      <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-sm font-black text-emerald-400">
                        16
                      </span>
                      สรุปสั้น ๆ (Plain Summary)
                    </h2>
                    <button
                      type="button"
                      className="copy-section-link shrink-0 rounded-lg border border-slate-700 bg-slate-800 p-2 text-slate-500 transition hover:border-blue-500 hover:text-white"
                      data-section-id="section-16"
                      aria-label="Copy link to summary"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <SummaryCard title="เราคือผู้จัดเตรียมเอกสารข้อมูลจำลอง" tone="emerald">
                      เอกสารใบจองบินและโรงแรมเป็นไฟล์ PDF เพื่อสนับสนุนการพิจารณาคำขอวีซ่า ไม่ใช่ตั๋วจริงที่เดินทางได้ทันที
                    </SummaryCard>
                    <SummaryCard title="ไม่มีส่วนร่วมหรือเป็นตัวแทนสถานทูต" tone="indigo">
                      BKK AIR ทำงานอิสระ ดุลยพินิจการออกหรือปฏิเสธวีซ่าเป็นของเจ้าหน้าที่กงสุลหรือหน่วยงานปลายทางเท่านั้น
                    </SummaryCard>
                    <SummaryCard title="นโยบายยกเลิกและคืนเงินที่ชัดเจน" tone="amber">
                      ขอคืนเงินได้เต็มจำนวนหากทีมงานยังไม่ได้เริ่มดำเนินการ และหากจัดส่งงานแล้วจะไม่สามารถขอคืนเงินได้
                    </SummaryCard>
                    <SummaryCard title="จำกัดวงเงินความรับผิดชอบ">
                      ความรับผิดใด ๆ ที่เกิดจากความล่าช้าหรือความผิดพลาดของเรา จำกัดไม่เกินมูลค่าจริงที่คุณชำระ
                    </SummaryCard>
                  </div>
                </section>

                <section
                  id="section-17"
                  className="policy-section scroll-mt-28 space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/20 text-sm font-black text-indigo-400">
                      17
                    </span>
                    <h2 className="text-xl font-black text-white sm:text-2xl">Compliance Note</h2>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4 text-sm leading-relaxed text-slate-300">
                    ข้อกำหนดการใช้บริการฉบับนี้ใช้ครอบคลุมการใช้งานทั้งหมดบนแพลตฟอร์มเว็บไซต์และบริการที่เกี่ยวข้องของ BKK AIR
                    และอาจมีการปรับปรุงเปลี่ยนแปลงตามกฎหมายหรือบริการที่เกี่ยวข้อง
                  </div>
                  <div className="rounded-xl border border-amber-900/30 bg-amber-950/25 p-4 text-sm leading-relaxed text-amber-300">
                    BKK AIR ดำเนินงานในฐานะผู้ช่วยจัดเตรียมเอกสารสนับสนุนวีซ่าเท่านั้น
                    ไม่มีบทบาท ดุลยพินิจ หรือส่วนร่วมรับผิดชอบเกี่ยวกับการพิจารณาของสถานทูต
                    หน่วยงานรัฐ หรือด่านตรวจคนเข้าเมือง
                  </div>
                </section>
              </div>
            </div>

            <div id="quickSummaryContainer" className="hidden lg:col-span-9">
              <div className="relative overflow-hidden rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-slate-900 via-indigo-950/20 to-slate-900 p-6 shadow-2xl sm:p-8">
                <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-blue-500/10 blur-2xl" />
                <div className="relative z-10">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="rounded-xl bg-blue-500/20 p-2.5 text-blue-400">
                      <FileText className="h-6 w-6" />
                    </span>
                    <div>
                      <h2 className="text-xl font-black text-white sm:text-2xl">
                        สิ่งสำคัญที่ควรรู้ก่อนเลือกใช้บริการ (TL;DR)
                      </h2>
                      <p className="text-xs text-slate-400 sm:text-sm">
                        สรุปใจความสำคัญของเงื่อนไขการใช้บริการ BKK AIR ในหน้านี้
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <SummaryCard title="ขอบเขตงานบริการ" tone="emerald">
                      เราดูแลผลิต จัดเตรียม และจัดส่งไฟล์ PDF แสดงข้อมูลจำลองการบิน การเดินทาง และข้อมูลโรงแรมเพื่อสนับสนุนคำร้องขอวีซ่า
                    </SummaryCard>
                    <SummaryCard title="เอกสารไม่ใช่ตั๋วจริง" tone="indigo">
                      ตั๋วโดยสารเครื่องบินหรือที่พักทั้งหมดเป็นข้อมูลแบบจำลอง ไม่ได้ออกสิทธิ์จริงในสายการบินหรือห้องพักโรงแรม
                    </SummaryCard>
                    <SummaryCard title="ไม่การันตีผลวีซ่า">
                      ดุลยพินิจในการออกวีซ่าเป็นความรับผิดชอบของสถานทูตหรือหน่วยงานตรวจคนเข้าเมือง ทางเราไม่มีสิทธิ์รับประกันผล
                    </SummaryCard>
                    <SummaryCard title="ข้อมูลต้องตรงกับพาสปอร์ต" tone="amber">
                      ผู้ใช้บริการต้องตรวจสอบชื่อ วันเดินทาง และรายละเอียดเมืองให้ตรงกับหนังสือเดินทางก่อนส่งคำขอ
                    </SummaryCard>
                  </div>
                  <div className="mt-6 space-y-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-xs leading-relaxed text-slate-400 sm:text-sm">
                    <p>
                      <strong className="text-white">นโยบายคืนเงิน:</strong>{" "}
                      ยินดีคืนเงินครบ 100% หากทีมงานยังไม่ได้เริ่มดำเนินการ แต่หากไฟล์ PDF
                      ได้ถูกจัดสร้างเสร็จหรือส่งออกแล้ว จะไม่สามารถขอคืนเงินได้
                    </p>
                    <p>
                      <strong className="text-white">ติดต่อสอบถามเพิ่มเติม:</strong>{" "}
                      <a href="mailto:info@bkkair.com" className="font-bold text-blue-400 hover:underline">
                        info@bkkair.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <button
          id="backToTop"
          type="button"
          className="pointer-events-none fixed bottom-6 right-6 z-50 translate-y-4 rounded-full border border-slate-700 bg-slate-800 p-3 text-white opacity-0 shadow-2xl transition hover:bg-slate-700"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>

        <div
          id="toastNotification"
          className="fixed right-6 top-20 z-50 translate-x-80 rounded-xl border border-emerald-500/50 bg-emerald-600/95 px-5 py-3 text-sm font-bold text-white opacity-0 shadow-xl transition"
        >
          <span className="inline-flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            คัดลอกลิงก์สำเร็จแล้ว
          </span>
        </div>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                const full = document.getElementById("fullPolicyContainer");
                const summary = document.getElementById("quickSummaryContainer");
                const searchBox = document.getElementById("termsSearchBox");
                const searchInput = document.getElementById("termsSearchInput");
                const searchNotice = document.getElementById("searchNotice");
                const sidebar = document.getElementById("sidebar-nav");
                const btnFull = document.getElementById("btnViewFull");
                const btnSummary = document.getElementById("btnViewSummary");
                const backToTop = document.getElementById("backToTop");
                const toast = document.getElementById("toastNotification");
                const navLinks = Array.from(document.querySelectorAll(".toc-link"));

                const fullActive = "terms-view-button rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-black text-white shadow-lg shadow-blue-500/20";
                const inactive = "terms-view-button rounded-xl px-5 py-2.5 text-sm font-black text-slate-400 transition hover:text-white";

                const setMode = (mode) => {
                  const isFull = mode === "full";
                  full?.classList.toggle("hidden", !isFull);
                  summary?.classList.toggle("hidden", isFull);
                  searchBox?.classList.toggle("hidden", !isFull);
                  sidebar?.classList.toggle("lg:block", isFull);
                  sidebar?.classList.toggle("lg:hidden", !isFull);
                  if (btnFull) btnFull.className = isFull ? fullActive : inactive;
                  if (btnSummary) btnSummary.className = isFull ? inactive : fullActive;
                  if (!isFull) {
                    searchInput.value = "";
                    document.querySelectorAll(".policy-section").forEach((section) => {
                      section.style.display = "";
                    });
                    searchNotice?.classList.add("hidden");
                  }
                };

                document.querySelectorAll(".terms-view-button").forEach((button) => {
                  button.addEventListener("click", () => setMode(button.getAttribute("data-view-target")));
                });

                const showToast = () => {
                  if (!toast) return;
                  toast.classList.remove("translate-x-80", "opacity-0");
                  toast.classList.add("translate-x-0", "opacity-100");
                  window.setTimeout(() => {
                    toast.classList.remove("translate-x-0", "opacity-100");
                    toast.classList.add("translate-x-80", "opacity-0");
                  }, 2200);
                };

                document.querySelectorAll(".copy-section-link").forEach((button) => {
                  button.addEventListener("click", async () => {
                    const id = button.getAttribute("data-section-id");
                    const url = window.location.href.split("#")[0] + "#" + id;
                    try {
                      await navigator.clipboard.writeText(url);
                    } catch {
                      const input = document.createElement("input");
                      input.value = url;
                      document.body.appendChild(input);
                      input.select();
                      document.execCommand("copy");
                      input.remove();
                    }
                    showToast();
                  });
                });

                searchInput?.addEventListener("input", () => {
                  const query = searchInput.value.trim().toLowerCase();
                  const hasQuery = Boolean(query);
                  document.querySelectorAll(".policy-section").forEach((section) => {
                    const match = section.textContent.toLowerCase().includes(query);
                    section.style.display = !hasQuery || match ? "" : "none";
                  });
                  searchNotice?.classList.toggle("hidden", !hasQuery);
                });

                backToTop?.addEventListener("click", () => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                });

                window.addEventListener("scroll", () => {
                  if (backToTop) {
                    const visible = window.scrollY > 300;
                    backToTop.classList.toggle("opacity-0", !visible);
                    backToTop.classList.toggle("translate-y-4", !visible);
                    backToTop.classList.toggle("pointer-events-none", !visible);
                  }

                  let activeId = "";
                  document.querySelectorAll(".policy-section").forEach((section) => {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 160 && rect.bottom >= 160) {
                      activeId = section.id;
                    }
                  });

                  if (activeId) {
                    navLinks.forEach((link) => {
                      const active = link.getAttribute("href") === "#" + activeId;
                      link.classList.toggle("border-blue-500", active);
                      link.classList.toggle("bg-blue-500/10", active);
                      link.classList.toggle("text-blue-400", active);
                      link.classList.toggle("border-transparent", !active);
                      link.classList.toggle("text-slate-400", !active);
                    });
                  }
                }, { passive: true });
              })();
            `,
          }}
        />
      </article>
    </MarketingShell>
  );
}

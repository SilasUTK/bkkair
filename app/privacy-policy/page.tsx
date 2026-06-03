import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUp,
  CheckCircle2,
  Clock,
  Copy,
  Database,
  Globe2,
  Mail,
  Search,
  Shield,
  Sparkles,
  UserCheck,
} from "lucide-react";
import MarketingShell from "../../components/marketing/MarketingShell";

export const metadata: Metadata = {
  title: "นโยบายความเป็นส่วนตัว | BKK AIR",
  description:
    "นโยบายความเป็นส่วนตัวของ BKK AIR เกี่ยวกับการเก็บรวบรวม ใช้ เปิดเผย และดูแลข้อมูลส่วนบุคคลของผู้ใช้บริการตามแนวทาง PDPA",
  alternates: {
    canonical: "https://bkkair.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tableOfContents = [
  { id: "section-1", label: "1. บทนำ" },
  { id: "section-2", label: "2. ผู้ควบคุมข้อมูล" },
  { id: "section-3", label: "3. ข้อมูลที่เก็บรวบรวม" },
  { id: "section-4", label: "4. ฐานทางกฎหมาย" },
  { id: "section-5", label: "5. วัตถุประสงค์การใช้" },
  { id: "section-6", label: "6. การเปิดเผยต่อภายนอก" },
  { id: "section-7", label: "7. ระยะเวลาเก็บข้อมูล" },
  { id: "section-8", label: "8. ความปลอดภัยข้อมูล" },
  { id: "section-9", label: "9. คุกกี้ (Cookies)" },
  { id: "section-10", label: "10. สิทธิ์ของผู้ใช้บริการ" },
  { id: "section-11", label: "11. โอนข้อมูลต่างประเทศ" },
  { id: "section-12", label: "12. ความเป็นส่วนตัวผู้เยาว์" },
  { id: "section-13", label: "13. ลิงก์ไปยังภายนอก" },
  { id: "section-14", label: "14. การปรับปรุงนโยบาย" },
  { id: "section-15", label: "15. ติดต่อเรื่องความปลอดภัย" },
  { id: "section-16", label: "สรุปสั้น ๆ (TL;DR)" },
  { id: "section-17", label: "Compliance Note" },
];

function PolicySection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="policy-section scroll-mt-28 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-xl shadow-slate-950/20 sm:p-7"
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <h2 className="text-xl font-black tracking-tight text-white sm:text-2xl">
          {title}
        </h2>
        <button
          type="button"
          className="copy-section-link shrink-0 rounded-lg border border-slate-700 bg-slate-800 p-2 text-slate-400 transition hover:border-blue-500 hover:text-white"
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

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
      <div className="mb-3 flex items-center gap-3">
        <span className="rounded-xl bg-blue-500/10 p-2 text-blue-400">{icon}</span>
        <h3 className="font-black text-white">{title}</h3>
      </div>
      <div className="text-sm leading-relaxed text-slate-300">{children}</div>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <MarketingShell>
      <article className="relative min-h-screen overflow-hidden bg-[#090d16] text-slate-200 selection:bg-blue-600 selection:text-white">
        <div className="pointer-events-none absolute left-8 top-10 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-96 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-24 left-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

        <section className="relative border-b border-slate-800 bg-gradient-to-b from-blue-950/45 via-[#090d16] to-[#090d16] px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <nav
              aria-label="Breadcrumb"
              className="mb-5 flex items-center justify-center gap-2 text-xs font-semibold text-slate-400"
            >
              <Link href="/" className="transition hover:text-blue-400">
                หน้าแรก
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-slate-200">นโยบายความเป็นส่วนตัว</span>
            </nav>

            <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-blue-400">
              Privacy Guard
            </span>
            <h1 className="mx-auto mt-4 max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl">
              นโยบายความเป็นส่วนตัว
            </h1>
            <p className="mt-3 text-sm font-black uppercase tracking-[0.2em] text-blue-400">
              Privacy Policy
            </p>
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-slate-400 sm:text-base">
              BKK AIR ให้ความสำคัญกับความเป็นส่วนตัวของผู้ใช้บริการ
              และดูแลจัดการข้อมูลส่วนบุคคลอย่างรัดกุมตามแนวทางของพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล
              พ.ศ. 2562 (PDPA)
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-bold text-slate-500">
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" />
                อัปเดตล่าสุด: 18 พฤษภาคม 2569 (2026)
              </span>
              <span className="rounded border border-blue-900/40 bg-blue-950/40 px-2.5 py-1 text-blue-300">
                PDPA Compliant
              </span>
            </div>
          </div>
        </section>

        <main className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="inline-flex w-fit rounded-2xl border border-slate-700 bg-slate-800/80 p-1.5">
              <a
                href="#full-policy"
                className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-black text-white shadow-lg shadow-blue-600/10"
              >
                อ่านฉบับเต็ม
              </a>
              <a
                href="#section-16"
                className="rounded-xl px-5 py-2.5 text-sm font-black text-slate-400 transition hover:text-white"
              >
                สรุปสั้น ๆ
              </a>
            </div>

            <label className="relative block w-full max-w-md">
              <span className="sr-only">ค้นหาตามคำสำคัญ</span>
              <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
              <input
                id="policySearchInput"
                type="search"
                placeholder="ค้นหาตามคำสำคัญ..."
                className="w-full rounded-xl border border-slate-700 bg-slate-800/70 py-2.5 pl-10 pr-4 text-sm font-semibold text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
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
            <aside className="hidden max-h-[calc(100vh-120px)] space-y-6 overflow-y-auto pr-2 lg:sticky lg:top-24 lg:col-span-3 lg:block">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur">
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

              <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-indigo-950/80 to-slate-900/90 p-5 shadow-xl">
                <div className="mb-2 flex items-center gap-2 text-xs font-black text-indigo-400">
                  <Shield className="h-4 w-4" />
                  ฝ่ายคุ้มครองข้อมูลส่วนบุคคล
                </div>
                <h3 className="mb-2 text-sm font-black text-white">
                  คำถามเกี่ยวกับ PDPA?
                </h3>
                <p className="mb-4 text-xs leading-relaxed text-slate-400">
                  หากมีคำถามหรือคำขอเกี่ยวกับข้อมูลส่วนบุคคลของคุณ
                  สามารถส่งเรื่องให้ทีมงานตรวจสอบโดยตรง
                </p>
                <a
                  href="mailto:privacy@bkkair.com"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-2 text-xs font-black text-white transition hover:bg-blue-500"
                >
                  <Mail className="h-4 w-4" />
                  privacy@bkkair.com
                </a>
              </div>
            </aside>

            <div id="full-policy" className="lg:col-span-9">
              <div className="space-y-5">
                <PolicySection id="section-1" title="1. บทนำ">
                  <p>
                    BKK AIR ให้บริการจัดเตรียมเอกสารสนับสนุนวีซ่าสำหรับผู้เดินทาง
                    ผ่านเว็บไซต์ bkkair.com เช่น เอกสารจองตั๋วเครื่องบิน
                    เอกสารจองโรงแรม แผนการเดินทาง และเอกสาร PDF
                    อื่นที่เกี่ยวข้องกับการยื่นวีซ่า
                  </p>
                  <p>
                    การใช้เว็บไซต์หรือส่งคำขอใช้บริการกับ BKK AIR
                    ถือว่าผู้ใช้บริการได้อ่านและรับทราบนโยบายความเป็นส่วนตัวฉบับนี้แล้ว
                  </p>
                </PolicySection>

                <PolicySection id="section-2" title="2. ผู้ควบคุมข้อมูลส่วนบุคคล">
                  <p>
                    BKK AIR เป็นผู้ควบคุมข้อมูลส่วนบุคคล (Data Controller)
                    สำหรับข้อมูลที่ผู้ใช้บริการส่งให้เราโดยตรงผ่านเว็บไซต์ อีเมล LINE OA
                    หรือช่องทางติดต่ออื่นของ BKK AIR
                  </p>
                  <InfoCard icon={<UserCheck className="h-5 w-5" />} title="BKK AIR">
                    <p>
                      Email:{" "}
                      <a href="mailto:privacy@bkkair.com" className="font-bold text-blue-400 underline">
                        privacy@bkkair.com
                      </a>
                    </p>
                    <p>
                      LINE OA:{" "}
                      <a href="https://line.me/R/ti/p/@823lateh" className="font-bold text-blue-400 underline">
                        @823lateh
                      </a>
                    </p>
                    <p>Business Hours: Monday-Saturday 09:00-18:00 (Thailand Time)</p>
                  </InfoCard>
                </PolicySection>

                <PolicySection id="section-3" title="3. ข้อมูลที่เราเก็บรวบรวม">
                  <p>เราเก็บเฉพาะข้อมูลที่จำเป็นต่อการจัดเตรียมเอกสารและการให้บริการเท่านั้น</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <InfoCard icon={<Database className="h-5 w-5" />} title="ข้อมูลที่ผู้ใช้บริการให้เราโดยตรง">
                      <ul className="list-disc space-y-2 pl-5 marker:text-blue-400">
                        <li>ชื่อ-นามสกุลของผู้เดินทางตามหนังสือเดินทาง</li>
                        <li>วันเดินทาง ประเทศปลายทาง และประเทศที่ยื่นวีซ่า</li>
                        <li>อีเมล หมายเลขโทรศัพท์ หรือ LINE ID สำหรับการติดต่อ</li>
                        <li>รายละเอียดบริการที่ต้องการ เช่น เอกสารจองตั๋ว เอกสารจองโรงแรม หรือแผนการเดินทาง</li>
                        <li>ข้อมูลการชำระเงินที่จำเป็นต่อการยืนยันคำขอ</li>
                      </ul>
                    </InfoCard>
                    <InfoCard icon={<Globe2 className="h-5 w-5" />} title="ข้อมูลที่ระบบเก็บโดยอัตโนมัติ">
                      <ul className="list-disc space-y-2 pl-5 marker:text-blue-400">
                        <li>IP address</li>
                        <li>ประเภทอุปกรณ์และเบราว์เซอร์</li>
                        <li>หน้าเว็บไซต์ที่เข้าชมและระยะเวลาการใช้งาน</li>
                        <li>แหล่งที่มาของการเข้าชม เช่น Google หรือ Social Media</li>
                      </ul>
                    </InfoCard>
                  </div>
                  <p>
                    BKK AIR ไม่จัดเก็บข้อมูลบัตรเครดิตหรือข้อมูลบัญชีธนาคารเต็มรูปแบบ
                    การชำระเงินอาจดำเนินการผ่านผู้ให้บริการชำระเงินที่ได้รับการรับรอง
                  </p>
                </PolicySection>

                <PolicySection id="section-4" title="4. ฐานทางกฎหมายในการใช้ข้อมูล">
                  <p>BKK AIR ประมวลผลข้อมูลส่วนบุคคลตามฐานทางกฎหมายที่เหมาะสม ได้แก่:</p>
                  <ul className="list-disc space-y-2 pl-6 marker:text-blue-400">
                    <li><strong className="text-white">การปฏิบัติตามสัญญา</strong> เพื่อจัดเตรียมเอกสารและให้บริการตามคำขอ</li>
                    <li><strong className="text-white">ความยินยอม</strong> สำหรับกิจกรรมที่ต้องอาศัยความยินยอม เช่น คุกกี้บางประเภทหรือการสื่อสารทางการตลาด</li>
                    <li><strong className="text-white">ประโยชน์โดยชอบด้วยกฎหมาย</strong> เพื่อดูแลความปลอดภัย ป้องกันการทุจริต และปรับปรุงคุณภาพบริการ</li>
                    <li><strong className="text-white">การปฏิบัติตามกฎหมาย</strong> เพื่อปฏิบัติตามข้อกำหนดของกฎหมาย หน่วยงานรัฐ หรือกระบวนการทางกฎหมายที่เกี่ยวข้อง</li>
                  </ul>
                </PolicySection>

                <PolicySection id="section-5" title="5. วัตถุประสงค์การใช้ข้อมูล">
                  <div className="overflow-x-auto rounded-2xl border border-slate-800">
                    <table className="w-full min-w-[680px] border-collapse text-left text-sm">
                      <thead className="bg-slate-950 text-white">
                        <tr>
                          <th className="border-b border-slate-800 px-4 py-3 font-black">วัตถุประสงค์</th>
                          <th className="border-b border-slate-800 px-4 py-3 font-black">ประเภทข้อมูลที่ใช้</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-300">
                        {[
                          ["จัดเตรียมเอกสาร PDF ตามคำขอ", "ชื่อผู้เดินทาง วันเดินทาง ปลายทาง รายละเอียดบริการ"],
                          ["ส่งเอกสารและแจ้งสถานะคำขอ", "อีเมล โทรศัพท์ LINE ID"],
                          ["ยืนยันการชำระเงินและออกหลักฐานการให้บริการ", "ข้อมูลคำขอ ข้อมูลการชำระเงินที่จำเป็น"],
                          ["ติดต่อกรณีข้อมูลไม่ครบหรือมีข้อผิดพลาด", "อีเมล โทรศัพท์ LINE ID"],
                          ["ปรับปรุงความปลอดภัยและคุณภาพเว็บไซต์", "ข้อมูลการใช้งานเว็บไซต์และข้อมูลทางเทคนิค"],
                        ].map(([purpose, data]) => (
                          <tr key={purpose}>
                            <td className="border-b border-slate-800 px-4 py-3">{purpose}</td>
                            <td className="border-b border-slate-800 px-4 py-3">{data}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="rounded-2xl border border-blue-800/50 bg-blue-950/30 p-4">
                    <p className="font-black text-white">BKK AIR ไม่ใช้ข้อมูลของผู้ใช้บริการเพื่อ:</p>
                    <ul className="mt-2 list-disc space-y-1 pl-6 marker:text-blue-400">
                      <li>ขายหรือให้เช่าข้อมูลแก่บุคคลภายนอก</li>
                      <li>ส่งข้อความการตลาดโดยไม่ได้รับความยินยอม</li>
                      <li>ใช้ข้อมูลเกินกว่าวัตถุประสงค์ที่เกี่ยวข้องกับบริการ</li>
                    </ul>
                  </div>
                </PolicySection>

                <PolicySection id="section-6" title="6. การเปิดเผยข้อมูลแก่บุคคลภายนอก">
                  <p>
                    BKK AIR ไม่ขายข้อมูลส่วนบุคคลของผู้ใช้บริการ
                    แต่อาจเปิดเผยข้อมูลเท่าที่จำเป็นต่อการให้บริการกับผู้เกี่ยวข้องดังนี้:
                  </p>
                  <ul className="list-disc space-y-2 pl-6 marker:text-blue-400">
                    <li>ผู้ให้บริการชำระเงิน เพื่อประมวลผลการชำระเงินอย่างปลอดภัย</li>
                    <li>ผู้ให้บริการอีเมลหรือระบบสื่อสาร เพื่อส่งเอกสาร PDF และแจ้งสถานะคำขอ</li>
                    <li>ผู้ให้บริการ Hosting, Cloud หรือระบบวิเคราะห์เว็บไซต์ เพื่อให้เว็บไซต์ทำงานได้อย่างเหมาะสม</li>
                    <li>หน่วยงานรัฐหรือกระบวนการทางกฎหมาย เมื่อมีข้อกำหนดตามกฎหมาย</li>
                  </ul>
                </PolicySection>

                <PolicySection id="section-7" title="7. ระยะเวลาการเก็บข้อมูล">
                  <div className="overflow-x-auto rounded-2xl border border-slate-800">
                    <table className="w-full min-w-[680px] border-collapse text-left text-sm">
                      <thead className="bg-slate-950 text-white">
                        <tr>
                          <th className="border-b border-slate-800 px-4 py-3 font-black">ประเภทข้อมูล</th>
                          <th className="border-b border-slate-800 px-4 py-3 font-black">ระยะเวลาเก็บ</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-300">
                        {[
                          ["ข้อมูลคำขอและเอกสาร PDF", "90 วันหลังจากส่งเอกสาร หรือเท่าที่จำเป็นต่อการให้บริการ"],
                          ["ข้อมูลการติดต่อ", "1 ปี หรือจนกว่าผู้ใช้บริการขอให้ลบ"],
                          ["ข้อมูลการใช้งานเว็บไซต์", "ตามระยะเวลาของเครื่องมือวิเคราะห์ที่ใช้งาน"],
                          ["ข้อมูลการชำระเงิน", "ตามที่กฎหมายหรือผู้ให้บริการชำระเงินกำหนด"],
                        ].map(([type, retention]) => (
                          <tr key={type}>
                            <td className="border-b border-slate-800 px-4 py-3">{type}</td>
                            <td className="border-b border-slate-800 px-4 py-3">{retention}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </PolicySection>

                <PolicySection id="section-8" title="8. ความปลอดภัยของข้อมูล">
                  <ul className="list-disc space-y-2 pl-6 marker:text-blue-400">
                    <li>ใช้การเข้ารหัส SSL/TLS สำหรับการรับส่งข้อมูลบนเว็บไซต์</li>
                    <li>จำกัดการเข้าถึงข้อมูลเฉพาะทีมงานที่จำเป็นต่อการให้บริการ</li>
                    <li>ใช้ระบบ Hosting และเครื่องมือที่เหมาะสมต่อการรักษาความปลอดภัย</li>
                    <li>ตรวจสอบและปรับปรุงมาตรการด้านความปลอดภัยอย่างต่อเนื่อง</li>
                  </ul>
                  <p>
                    อย่างไรก็ตาม ไม่มีระบบใดปลอดภัย 100%
                    หากเกิดเหตุละเมิดข้อมูลที่อาจกระทบต่อผู้ใช้บริการ
                    เราจะดำเนินการแจ้งและแก้ไขตามที่กฎหมายกำหนด
                  </p>
                </PolicySection>

                <PolicySection id="section-9" title="9. คุกกี้ (Cookies)">
                  <p>
                    เว็บไซต์ของเราใช้คุกกี้ที่จำเป็นเพื่อให้เว็บไซต์ทำงานได้อย่างถูกต้อง
                    และอาจใช้คุกกี้เพื่อการวิเคราะห์หรือการตลาดเมื่อได้รับความยินยอมจากผู้ใช้บริการ
                  </p>
                  <p>
                    อ่านรายละเอียดเพิ่มเติมได้ที่{" "}
                    <Link href="/cookies-policy" className="font-bold text-blue-400 underline">
                      นโยบายคุกกี้
                    </Link>
                  </p>
                </PolicySection>

                <PolicySection id="section-10" title="10. สิทธิ์ของผู้ใช้บริการ">
                  <p>ภายใต้ PDPA ผู้ใช้บริการมีสิทธิ์เกี่ยวกับข้อมูลส่วนบุคคลของตน ดังนี้:</p>
                  <ul className="list-disc space-y-2 pl-6 marker:text-blue-400">
                    <li>สิทธิ์ในการเข้าถึงข้อมูล (Right to Access)</li>
                    <li>สิทธิ์ในการแก้ไขข้อมูลให้ถูกต้อง (Right to Rectification)</li>
                    <li>สิทธิ์ในการลบข้อมูล (Right to Erasure)</li>
                    <li>สิทธิ์ในการจำกัดการประมวลผล (Right to Restriction)</li>
                    <li>สิทธิ์ในการโอนย้ายข้อมูล (Right to Data Portability)</li>
                    <li>สิทธิ์ในการคัดค้านการประมวลผล (Right to Object)</li>
                    <li>สิทธิ์ในการถอนความยินยอม (Withdrawal of Consent)</li>
                  </ul>
                  <p className="rounded-2xl border border-amber-500/40 bg-amber-950/30 p-4 text-amber-100">
                    <strong>การใช้สิทธิ์:</strong> ติดต่อ{" "}
                    <a href="mailto:privacy@bkkair.com" className="font-bold text-amber-200 underline">
                      privacy@bkkair.com
                    </a>{" "}
                    โดยเรามุ่งหมายตอบกลับคำขอภายใน <strong>30 วันทำการ</strong>
                    นับจากวันที่ได้รับข้อมูลครบถ้วน
                  </p>
                </PolicySection>

                <PolicySection id="section-11" title="11. การโอนข้อมูลระหว่างประเทศ">
                  <p>
                    BKK AIR ดำเนินงานในประเทศไทยเป็นหลัก อย่างไรก็ตาม บางระบบ เช่น Hosting,
                    Cloud, Analytics หรือระบบอีเมล อาจมีการประมวลผลข้อมูลผ่านผู้ให้บริการในต่างประเทศ
                  </p>
                  <p>
                    หากมีการโอนข้อมูลระหว่างประเทศ
                    เราจะใช้มาตรการที่เหมาะสมเพื่อคุ้มครองข้อมูลตามมาตรฐานที่เกี่ยวข้อง
                  </p>
                </PolicySection>

                <PolicySection id="section-12" title="12. ความเป็นส่วนตัวของผู้เยาว์">
                  <p>
                    บริการของ BKK AIR ไม่ได้มุ่งเป้าไปยังบุคคลที่มีอายุต่ำกว่า 20 ปี
                    หากผู้ใช้บริการเป็นผู้เยาว์
                    ควรได้รับความยินยอมจากผู้ปกครองหรือผู้แทนโดยชอบธรรมก่อนใช้บริการ
                  </p>
                </PolicySection>

                <PolicySection id="section-13" title="13. ลิงก์ไปยังเว็บไซต์ภายนอก">
                  <p>
                    เว็บไซต์ของเราอาจมีลิงก์ไปยังเว็บไซต์ภายนอก เช่น เว็บไซต์สถานทูต
                    ผู้ให้บริการประกันการเดินทาง หรือแหล่งข้อมูลอื่น
                  </p>
                  <p>
                    BKK AIR ไม่รับผิดชอบต่อนโยบายความเป็นส่วนตัวหรือการจัดการข้อมูลของเว็บไซต์ภายนอก
                    ผู้ใช้บริการควรตรวจสอบนโยบายของเว็บไซต์นั้นก่อนใช้งาน
                  </p>
                </PolicySection>

                <PolicySection id="section-14" title="14. การเปลี่ยนแปลงนโยบายนี้">
                  <p>
                    BKK AIR อาจปรับปรุงนโยบายนี้เป็นครั้งคราว
                    เพื่อให้สอดคล้องกับการเปลี่ยนแปลงของบริการ เทคโนโลยี หรือกฎหมายที่เกี่ยวข้อง
                  </p>
                  <p>วันที่อัปเดตล่าสุดจะแสดงไว้ด้านบนของหน้านี้เสมอ</p>
                </PolicySection>

                <PolicySection id="section-15" title="15. ติดต่อเรื่องความเป็นส่วนตัว">
                  <InfoCard icon={<Mail className="h-5 w-5" />} title="Privacy & Data Protection Contact">
                    <p className="font-semibold text-white">BKK AIR</p>
                    <p>
                      Email:{" "}
                      <a href="mailto:privacy@bkkair.com" className="font-bold text-blue-400 underline">
                        privacy@bkkair.com
                      </a>
                    </p>
                    <p>
                      Official LINE OA:{" "}
                      <a href="https://line.me/R/ti/p/@823lateh" className="font-bold text-blue-400 underline">
                        @823lateh
                      </a>
                    </p>
                    <p>Business Hours: Monday-Saturday 09:00-18:00 (Thailand Time)</p>
                    <p>Website: https://bkkair.com</p>
                  </InfoCard>
                </PolicySection>

                <section
                  id="section-16"
                  className="policy-section scroll-mt-28 rounded-2xl border border-emerald-800/60 bg-emerald-950/30 p-5 sm:p-7"
                >
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-400">
                    สรุปสั้น ๆ (TL;DR)
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-white">
                    สิ่งสำคัญที่ควรรู้
                  </h2>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {[
                      ["เราเก็บข้อมูลเท่าที่จำเป็น", "เพื่อจัดเตรียมเอกสาร PDF และติดต่อผู้ใช้บริการเท่านั้น"],
                      ["เราไม่ขายข้อมูลส่วนบุคคล", "และไม่เปิดเผยข้อมูลเกินความจำเป็น"],
                      ["คุณมีสิทธิ์ตาม PDPA", "สามารถขอเข้าถึง แก้ไข ลบ คัดค้าน หรือถอนความยินยอมได้"],
                      ["ติดต่อเรื่องข้อมูลส่วนบุคคล", "privacy@bkkair.com ภายใน 30 วันทำการ"],
                    ].map(([title, body]) => (
                      <div key={title} className="rounded-2xl border border-emerald-800/60 bg-slate-900/70 p-4">
                        <CheckCircle2 className="mb-3 h-5 w-5 text-emerald-400" />
                        <h3 className="font-black text-white">{title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-slate-300">{body}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section
                  id="section-17"
                  className="policy-section scroll-mt-28 space-y-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 text-slate-100 sm:p-7"
                >
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-blue-400" />
                    <h2 className="text-2xl font-black text-white">
                      Compliance Note และ Disclaimer
                    </h2>
                  </div>
                  <blockquote className="rounded-2xl border border-slate-700 bg-slate-900 p-4 leading-relaxed text-slate-300">
                    นโยบายนี้จัดทำขึ้นตามแนวทางของพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล
                    พ.ศ. 2562 (PDPA) และแนวปฏิบัติด้านความเป็นส่วนตัวที่เหมาะสม
                  </blockquote>
                  <blockquote className="rounded-2xl border border-amber-500/40 bg-amber-950/30 p-4 leading-relaxed text-amber-100">
                    BKK AIR ให้บริการจัดเตรียมเอกสารสนับสนุนวีซ่าเท่านั้น
                    ไม่มีส่วนเกี่ยวข้องกับสถานทูต หน่วยงานรัฐ หรือหน่วยงานตรวจคนเข้าเมือง
                    และไม่สามารถรับประกันผลการอนุมัติวีซ่าได้
                  </blockquote>
                </section>
              </div>
            </div>
          </div>
        </main>

        <footer className="relative mt-16 border-t border-slate-800 bg-[#090d16] px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 font-black text-white">
                  B
                </span>
                <span className="font-black tracking-widest text-white">BKK AIR</span>
              </div>
              <p className="text-xs leading-relaxed text-slate-400">
                บริการจัดเตรียมชุดเอกสาร แผนการบิน แผนการเดินทาง
                และเอกสารสนับสนุนข้อมูลการยื่นขอวีซ่าไปต่างประเทศ
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-black uppercase tracking-wider text-white">
                บริการของเรา
              </h3>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><Link href="/" className="transition hover:text-white">จัดเตรียมเอกสารสนับสนุนวีซ่า</Link></li>
                <li><Link href="/packages" className="transition hover:text-white">แพ็กเกจบริการ</Link></li>
                <li><Link href="/how-it-works" className="transition hover:text-white">ขั้นตอนการสั่งซื้อเอกสาร</Link></li>
                <li><Link href="/faq" className="transition hover:text-white">คำถามที่พบบ่อย (FAQ)</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-black uppercase tracking-wider text-white">
                ความโปร่งใสและกฎหมาย
              </h3>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="#section-1" className="font-bold text-blue-400 transition hover:text-blue-300">นโยบายความเป็นส่วนตัว</a></li>
                <li><Link href="/cookies-policy" className="transition hover:text-white">นโยบายคุกกี้</Link></li>
                <li><Link href="/terms" className="transition hover:text-white">ข้อตกลงและเงื่อนไข</Link></li>
                <li><a href="#section-17" className="transition hover:text-white">Compliance Note</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-black uppercase tracking-wider text-white">
                ข้อกำหนด PDPA
              </h3>
              <p className="text-xs leading-relaxed text-slate-400">
                นโยบายนี้ออกแบบตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562
                (PDPA) ของประเทศไทย
              </p>
              <span className="mt-4 inline-flex rounded border border-emerald-800/40 bg-emerald-950/40 px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-emerald-400">
                PDPA Compliant
              </span>
            </div>
          </div>
          <div className="mx-auto mt-10 max-w-7xl border-t border-slate-800 pt-6 text-center">
            <p className="mx-auto max-w-4xl text-[11px] leading-relaxed text-slate-500">
              <strong>คำชี้แจงสำคัญ (Disclaimer):</strong> BKK AIR
              มีบทบาทเป็นผู้ให้บริการจัดเตรียมเอกสารสนับสนุนวีซ่าเท่านั้น
              ไม่ใช่สถานทูต หน่วยงานรัฐ หรือระบบยืนยันผลการอนุมัติวีซ่า
            </p>
            <p className="mt-4 text-xs text-slate-400">&copy; 2026 BKK AIR. All rights reserved.</p>
          </div>
        </footer>

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
          className="fixed right-6 top-20 z-50 translate-x-80 rounded-xl border border-emerald-500/50 bg-emerald-600/90 px-5 py-3 text-sm font-bold text-white opacity-0 shadow-xl transition"
        >
          คัดลอกลิงก์สำเร็จแล้ว
        </div>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                const searchInput = document.getElementById("policySearchInput");
                const searchNotice = document.getElementById("searchNotice");
                const sections = Array.from(document.querySelectorAll(".policy-section"));
                const backToTop = document.getElementById("backToTop");
                const toast = document.getElementById("toastNotification");
                const navLinks = Array.from(document.querySelectorAll(".toc-link"));

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
                  let hasQuery = Boolean(query);
                  sections.forEach((section) => {
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
                  sections.forEach((section) => {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
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

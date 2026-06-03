import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowUp,
  Bell,
  CheckCircle2,
  Cookie,
  Copy,
  ExternalLink,
  Mail,
  Search,
  Settings2,
  Shield,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import MarketingShell from "../../components/marketing/MarketingShell";
import CookieSettingsButton from "../../components/CookieSettingsButton";

export const metadata: Metadata = {
  title: "นโยบายคุกกี้ | BKK AIR",
  description:
    "นโยบายคุกกี้ของ BKK AIR อธิบายประเภทคุกกี้ที่เราใช้ วัตถุประสงค์ และวิธีจัดการคุกกี้ของคุณ",
  alternates: {
    canonical: "https://bkkair.com/cookies-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tableOfContents = [
  { id: "section-1", label: "1. คุกกี้คืออะไร" },
  { id: "section-2", label: "2. เราใช้คุกกี้เพื่ออะไร" },
  { id: "section-3", label: "3. ประเภทคุกกี้ที่เราใช้" },
  { id: "section-4", label: "4. ตารางสรุปคุกกี้" },
  { id: "section-5", label: "5. การจัดการคุกกี้" },
  { id: "section-6", label: "6. จัดการในเบราว์เซอร์" },
  { id: "section-7", label: "7. คุกกี้ของบุคคลที่สาม" },
  { id: "section-8", label: "8. การเปลี่ยนแปลงนโยบาย" },
  { id: "section-9", label: "9. ติดต่อเรา" },
  { id: "section-summary", label: "สรุปสั้น ๆ (TL;DR)" },
];

const cookieRows = [
  ["bkkair_cookie_consent", "จำเป็น", "จดจำการยินยอมคุกกี้ของผู้ใช้", "1 ปี (localStorage)"],
  ["session token", "จำเป็น", "รักษาความปลอดภัยและสถานะการใช้งาน", "ตลอด session"],
  ["_ga / _ga_*", "วิเคราะห์", "วิเคราะห์การใช้งานเว็บไซต์แบบไม่ระบุตัวตน", "สูงสุด 26 เดือน"],
  ["_fbp / advertising cookies", "การตลาด", "วัดผลโฆษณาและแสดงเนื้อหาที่เกี่ยวข้อง", "ตามผู้ให้บริการกำหนด"],
];

const browserLinks = [
  ["Google Chrome", "จัดการคุกกี้ใน Chrome", "https://support.google.com/chrome/answer/95647"],
  ["Mozilla Firefox", "จัดการคุกกี้ใน Firefox", "https://support.mozilla.org/th/kb/enhanced-tracking-protection-firefox-desktop"],
  ["Apple Safari", "จัดการคุกกี้ใน Safari", "https://support.apple.com/th-th/guide/safari/sfri11471/mac"],
  ["Microsoft Edge", "จัดการคุกกี้ใน Edge", "https://support.microsoft.com/th-th/microsoft-edge/ลบคุกกี้ใน-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"],
];

const thirdPartyServices = [
  {
    title: "Google Analytics & Google Ads",
    text: "ใช้วิเคราะห์การเข้าชมเว็บไซต์และวัดผล conversion จากโฆษณา Google เมื่อได้รับความยินยอม",
    href: "https://policies.google.com/privacy",
    label: "นโยบายความเป็นส่วนตัวของ Google",
  },
  {
    title: "Meta (Facebook) Pixel",
    text: "ใช้ติดตามการแปลงจาก Facebook และ Instagram Ads และสร้างกลุ่มเป้าหมายเมื่อได้รับความยินยอม",
    href: "https://www.facebook.com/privacy/policy/",
    label: "นโยบายความเป็นส่วนตัวของ Meta",
  },
  {
    title: "Cloudflare / Hosting / CDN",
    text: "ผู้ให้บริการ hosting และ CDN อาจตั้งค่าคุกกี้ที่จำเป็นเพื่อความปลอดภัยและประสิทธิภาพของเว็บไซต์",
    href: "https://www.cloudflare.com/privacypolicy/",
    label: "นโยบายความเป็นส่วนตัวของ Cloudflare",
  },
];

function PolicySection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="policy-section scroll-mt-28 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-xl shadow-slate-950/20 sm:p-8"
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <h2 className="flex items-center text-xl font-black tracking-tight text-white sm:text-2xl">
          <span className="mr-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/20 text-sm font-black text-blue-400">
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
  const toneClass = {
    blue: "bg-blue-500/10 text-blue-400",
    emerald: "bg-emerald-500/10 text-emerald-400",
    amber: "bg-amber-500/10 text-amber-400",
    indigo: "bg-indigo-500/10 text-indigo-400",
  }[tone];

  return (
    <div className="flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-950/50 p-5">
      <span className={`shrink-0 rounded-lg p-2 ${toneClass}`}>
        <CheckCircle2 className="h-5 w-5" />
      </span>
      <div>
        <h3 className="mb-1 text-sm font-black text-white sm:text-base">{title}</h3>
        <p className="text-xs font-medium leading-relaxed text-slate-400 sm:text-sm">{children}</p>
      </div>
    </div>
  );
}

export default function CookiesPolicyPage() {
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
              <span className="text-slate-300">นโยบายคุกกี้</span>
            </nav>

            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-blue-400">
              <Cookie className="h-4 w-4" />
              Cookie Policy
            </span>
            <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
              นโยบายคุกกี้
              <span className="mt-2 block text-xl font-extrabold uppercase tracking-wider text-slate-400 sm:text-2xl">
                Cookie Policy
              </span>
            </h1>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs">
              <span className="rounded-full border border-slate-800 bg-slate-900 px-3.5 py-1.5 font-black text-slate-300">
                อัปเดตล่าสุด: 18 พฤษภาคม 2569 (2026)
              </span>
              <span className="rounded-full border border-slate-800 bg-slate-900 px-3.5 py-1.5 font-black text-slate-300">
                PDPA Compliant
              </span>
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
              นโยบายคุกกี้นี้อธิบายรายละเอียดว่าเว็บไซต์ BKK AIR มีการจัดการ
              ตรวจวัด และเลือกใช้งานคุกกี้ประเภทต่าง ๆ อย่างไรเพื่อมอบประสบการณ์ที่ดีที่สุดตลอดการเยี่ยมชมระบบบริการของเรา
            </p>
          </div>
        </section>

        <main className="relative z-10 mx-auto max-w-6xl px-6 py-8">
          <div className="mb-8 flex flex-col items-center justify-between gap-4 border-b border-slate-800 pb-6 sm:flex-row">
            <div className="inline-flex rounded-2xl border border-slate-800 bg-slate-900/80 p-1.5">
              <button
                type="button"
                id="btnViewFull"
                className="cookies-view-button rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-black text-white shadow-lg shadow-blue-500/20"
                data-view-target="full"
              >
                อ่านฉบับเต็ม
              </button>
              <button
                type="button"
                id="btnViewSummary"
                className="cookies-view-button rounded-xl px-5 py-2.5 text-sm font-black text-slate-400 transition hover:text-white"
                data-view-target="summary"
              >
                สรุปสั้น ๆ
              </button>
            </div>

            <label id="cookiesSearchBox" className="relative block w-full sm:w-80">
              <span className="sr-only">ค้นหาตามคำสำคัญ</span>
              <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                id="cookiesSearchInput"
                type="search"
                placeholder="ค้นหาตามคำสำคัญ..."
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
                    10 หัวข้อ
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
                <h3 className="mb-2 text-sm font-black text-white">
                  นโยบายหลักที่เกี่ยวข้อง
                </h3>
                <p className="mb-4 text-xs leading-relaxed text-slate-400">
                  เรียนรู้สิทธิ์และการดูแลปกป้องข้อมูลส่วนบุคคลตามกรอบ PDPA ในหน้านโยบายหลัก
                </p>
                <Link
                  href="/privacy-policy"
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800 py-2 text-xs font-black text-white transition hover:bg-slate-700"
                >
                  นโยบายความเป็นส่วนตัว
                </Link>
              </div>
            </aside>

            <div id="fullPolicyContainer" className="lg:col-span-9">
              <div className="space-y-6">
                <PolicySection id="section-1" number="1" title="คุกกี้คืออะไร (What are Cookies)">
                  <p>
                    <strong className="text-white">คุกกี้ (Cookies)</strong>{" "}
                    คือไฟล์ข้อมูลตัวอักษรหรือข้อความขนาดเล็กที่ระบบเซิร์ฟเวอร์ของเราจัดส่งไปจัดเก็บไว้ชั่วคราวบนอุปกรณ์ของคุณ
                    เช่น คอมพิวเตอร์ สมาร์ทโฟน หรือแท็บเล็ต เมื่อคุณเปิดใช้งานเบราว์เซอร์เพื่อเยี่ยมชมเว็บไซต์ของเรา
                  </p>
                  <p>
                    ไฟล์เหล่านี้ช่วยให้เว็บไซต์สามารถจดจำการเข้าใช้งาน ความพึงพอใจส่วนบุคคล
                    เช่น การยินยอมประเภทคุกกี้ และทำให้การเข้าถึงข้อมูลรวดเร็ว ปลอดภัย
                    และมีความเสถียรยิ่งขึ้น โดยคุกกี้ไม่ใช่ไวรัสหรือมัลแวร์
                    และไม่สามารถเข้าไปค้นหาหรือทำลายไฟล์ข้อมูลอื่นภายในเครื่องของคุณได้
                  </p>
                </PolicySection>

                <PolicySection id="section-2" number="2" title="เราใช้คุกกี้เพื่ออะไร">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      ["ความปลอดภัย", "ป้องกันการโจมตี CSRF และช่วยรักษาความถูกต้องของ session เพื่อความปลอดภัยในการส่งแบบฟอร์ม"],
                      ["ความต้องการของผู้ใช้", "จดจำการตั้งค่าของคุณ เช่น การยินยอมคุกกี้ เพื่อไม่ต้องตั้งค่าซ้ำทุกครั้ง"],
                      ["การวิเคราะห์", "ทำความเข้าใจว่าผู้ใช้เยี่ยมชมหน้าไหน ใช้เวลาเท่าไร เพื่อปรับปรุงเนื้อหาและ UX"],
                      ["การตลาด", "แสดงโฆษณาหรือเนื้อหาที่เกี่ยวข้องกับบริการของเรา เฉพาะเมื่อคุณยินยอมเท่านั้น"],
                    ].map(([title, text]) => (
                      <div key={title} className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5">
                        <ShieldCheck className="mb-4 h-6 w-6 text-blue-400" />
                        <h3 className="font-black text-white">{title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-400">{text}</p>
                      </div>
                    ))}
                  </div>
                </PolicySection>

                <PolicySection id="section-3" number="3" title="ประเภทคุกกี้ที่เราใช้">
                  {[
                    ["Essential Cookies (คุกกี้ที่จำเป็น)", "จำเป็น", "คุกกี้เหล่านี้จำเป็นต่อการทำงานพื้นฐานของเว็บไซต์ ไม่สามารถปิดได้ เช่น คุกกี้ที่จดจำการยินยอมคุกกี้ของคุณ หรือช่วยรักษาความปลอดภัยของแบบฟอร์ม", "bkkair_cookie_consent, session token"],
                    ["Analytics Cookies (คุกกี้วิเคราะห์)", "วิเคราะห์", "ช่วยให้เราเข้าใจว่าผู้เยี่ยมชมใช้งานเว็บไซต์อย่างไร หน้าใดได้รับความนิยม และเส้นทางการใช้งาน ข้อมูลนี้ใช้เพื่อปรับปรุงประสบการณ์ผู้ใช้เท่านั้น", "Google Analytics 4 (_ga, _ga_XXXXXXXXXX)"],
                    ["Marketing Cookies (คุกกี้การตลาด)", "การตลาด", "ใช้สำหรับแสดงโฆษณาที่เกี่ยวข้องกับบริการของเราบนแพลตฟอร์มอื่น เช่น Facebook หรือ Google Ads โดยจะโหลดเฉพาะเมื่อคุณเลือกยอมรับทั้งหมด", "Meta Pixel (_fbp), Google Ads (gclid)"],
                  ].map(([title, badge, text, example]) => (
                    <div key={title} className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-blue-800/50 bg-blue-950/50 px-3 py-1 text-xs font-black text-blue-300">
                          {badge}
                        </span>
                        <h3 className="text-lg font-black text-white">{title}</h3>
                      </div>
                      <p className="mt-4 leading-relaxed text-slate-400">{text}</p>
                      <p className="mt-4 text-sm text-slate-500">
                        <strong className="text-slate-300">ตัวอย่าง:</strong> {example}
                      </p>
                    </div>
                  ))}
                </PolicySection>

                <PolicySection id="section-4" number="4" title="ตารางสรุปคุกกี้">
                  <div className="overflow-x-auto rounded-2xl border border-slate-800">
                    <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                      <thead className="bg-slate-950 text-white">
                        <tr>
                          <th className="border-b border-slate-800 px-5 py-4 font-black">ชื่อคุกกี้</th>
                          <th className="border-b border-slate-800 px-5 py-4 font-black">ประเภท</th>
                          <th className="border-b border-slate-800 px-5 py-4 font-black">วัตถุประสงค์</th>
                          <th className="border-b border-slate-800 px-5 py-4 font-black">อายุ</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800 bg-slate-950 text-slate-400">
                        {cookieRows.map((row) => (
                          <tr key={row[0]} className="transition hover:bg-slate-900/70">
                            <td className="px-5 py-4 font-mono text-slate-200">{row[0]}</td>
                            <td className="px-5 py-4">{row[1]}</td>
                            <td className="px-5 py-4">{row[2]}</td>
                            <td className="px-5 py-4">{row[3]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </PolicySection>

                <PolicySection id="section-5" number="5" title="การจัดการคุกกี้">
                  <p>
                    เมื่อคุณเข้าเว็บไซต์ครั้งแรก คุณสามารถเลือก “ยอมรับทั้งหมด” หรือ
                    “ปฏิเสธคุกกี้ที่ไม่จำเป็น” ได้ โดยการตั้งค่าจะถูกบันทึกไว้ในเบราว์เซอร์ของคุณ
                  </p>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-400" />
                      <span><strong className="text-white">ยอมรับทั้งหมด</strong> ยินยอมให้เราใช้คุกกี้ทุกประเภท รวมถึงการวิเคราะห์และการตลาด</span>
                    </li>
                    <li className="flex gap-3">
                      <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-slate-500" />
                      <span><strong className="text-white">ปฏิเสธคุกกี้ที่ไม่จำเป็น</strong> เราจะใช้เฉพาะคุกกี้ที่จำเป็นสำหรับการทำงานของเว็บไซต์เท่านั้น</span>
                    </li>
                  </ul>
                  <p>คุณสามารถเปลี่ยนการตั้งค่าคุกกี้ได้ตลอดเวลาโดยใช้ปุ่มด้านล่างหรือปุ่ม “ตั้งค่าคุกกี้” ใน footer</p>
                  <div className="pt-2">
                    <CookieSettingsButton />
                  </div>
                </PolicySection>

                <PolicySection id="section-6" number="6" title="การจัดการคุกกี้ในเบราว์เซอร์">
                  <p>
                    นอกจากการตั้งค่าผ่านแบนเนอร์ของเราแล้ว คุณสามารถจัดการคุกกี้ผ่านการตั้งค่าเบราว์เซอร์ได้โดยตรง:
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {browserLinks.map(([title, text, href]) => (
                      <a
                        key={title}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-950/50 p-4 transition hover:border-blue-400/50"
                      >
                        <div>
                          <p className="font-bold text-white">{title}</p>
                          <p className="text-xs text-slate-500">{text}</p>
                        </div>
                        <ExternalLink className="ml-auto h-4 w-4 text-slate-600 transition group-hover:text-blue-400" />
                      </a>
                    ))}
                  </div>
                  <div className="rounded-2xl border border-amber-700/40 bg-amber-900/20 p-5 text-sm leading-relaxed text-amber-100">
                    <strong className="text-amber-300">หมายเหตุ:</strong>{" "}
                    การปิดคุกกี้ทั้งหมดในเบราว์เซอร์อาจทำให้บางฟีเจอร์ของเว็บไซต์ไม่ทำงานอย่างถูกต้อง
                    เช่น แบบฟอร์มสั่งซื้อหรือการแสดงเนื้อหา
                  </div>
                </PolicySection>

                <PolicySection id="section-7" number="7" title="คุกกี้ของบุคคลที่สาม">
                  <p>
                    เว็บไซต์ของเราอาจรวมบริการจากบุคคลที่สามที่มีนโยบายคุกกี้ของตนเอง
                    เราไม่สามารถควบคุมคุกกี้เหล่านั้นได้โดยตรง
                    จึงแนะนำให้คุณอ่านนโยบายของผู้ให้บริการแต่ละราย
                  </p>
                  <div className="space-y-4">
                    {thirdPartyServices.map((service) => (
                      <div key={service.title} className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5">
                        <h3 className="font-black text-white">{service.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-400">{service.text}</p>
                        <a
                          href={service.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-blue-400 hover:underline"
                        >
                          {service.label}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    ))}
                  </div>
                </PolicySection>

                <PolicySection id="section-8" number="8" title="การเปลี่ยนแปลงนโยบายคุกกี้นี้">
                  <p>
                    BKK AIR อาจปรับปรุงนโยบายคุกกี้นี้เป็นครั้งคราว
                    เพื่อให้สอดคล้องกับการเปลี่ยนแปลงด้านกฎหมาย เทคโนโลยี หรือบริการของเรา
                    โดยวันที่อัปเดตล่าสุดจะแสดงอยู่ที่ด้านบนของหน้านี้เสมอ
                  </p>
                  <p>
                    การเข้าใช้งานต่อเนื่องหลังจากมีการประกาศเปลี่ยนแปลง
                    ถือว่าผู้ใช้บริการรับทราบนโยบายฉบับใหม่
                  </p>
                </PolicySection>

                <PolicySection id="section-9" number="9" title="ติดต่อเรา (Contact Us)">
                  <p>
                    หากท่านมีข้อกังวล คำซักถาม
                    หรือประสงค์ยื่นสิทธิ์ตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล
                    สามารถติดต่อทีมงานของเราได้โดยตรง:
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                      <Mail className="mb-3 h-6 w-6 text-blue-400" />
                      <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
                        อีเมลฝ่ายความเป็นส่วนตัว
                      </p>
                      <p className="mt-1 text-base font-black text-white">privacy@bkkair.com</p>
                      <button
                        type="button"
                        className="copy-email-link mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-2 text-xs font-black text-white transition hover:bg-indigo-500"
                        data-copy-email="privacy@bkkair.com"
                      >
                        <Copy className="h-4 w-4" />
                        คัดลอกอีเมล
                      </button>
                    </div>
                    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                      <Bell className="mb-3 h-6 w-6 text-green-500" />
                      <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
                        บัญชีประสานงาน LINE OA
                      </p>
                      <p className="mt-1 text-base font-black text-white">@823lateh</p>
                      <a
                        href="https://line.me/R/ti/p/@823lateh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 flex w-full items-center justify-center rounded-xl bg-green-600 py-2.5 text-xs font-black text-white transition hover:bg-green-500"
                      >
                        คุย LINE บัญชีทางการ
                      </a>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5 text-sm leading-relaxed text-slate-300">
                    ศึกษาข้อมูลแนวทางการดูแลความปลอดภัยและสิทธิของคุณเพิ่มเติมได้ที่{" "}
                    <Link href="/privacy-policy" className="font-bold text-blue-400 hover:underline">
                      หน้านโยบายความเป็นส่วนตัว
                    </Link>{" "}
                    ของเรา
                  </div>
                </PolicySection>

                <section
                  id="section-summary"
                  className="policy-section scroll-mt-28 rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-slate-900 via-indigo-950/20 to-slate-900 p-6 shadow-2xl sm:p-8"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="rounded-xl bg-blue-500/20 p-2.5 text-blue-400">
                      <Sparkles className="h-6 w-6" />
                    </span>
                    <div>
                      <h2 className="text-xl font-black text-white sm:text-2xl">
                        นโยบายคุกกี้แบบสรุปย่อ (TL;DR Summary)
                      </h2>
                      <p className="text-xs text-slate-400 sm:text-sm">
                        เข้าใจสิทธิ์ข้อมูลการตลาดและระเบียบคุกกี้ BKK AIR ใน 1 นาที
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <SummaryCard title="คุกกี้เพื่อจดจำความชอบ" tone="emerald">
                      เว็บไซต์บันทึกคุกกี้เฉพาะกรณีคุณกดยินยอม เพื่อจดจำความชอบของหน้าเว็บและไม่ต้องเริ่มตั้งค่าใหม่ในครั้งถัดไป
                    </SummaryCard>
                    <SummaryCard title="คุกกี้เพื่อความปลอดภัยสากล" tone="indigo">
                      Essential Cookies จะทำงานพื้นหลังเพื่อป้องกันสแปมและดูแลความปลอดภัยของการส่งคำขอและแบบฟอร์ม
                    </SummaryCard>
                    <SummaryCard title="ควบคุมคุกกี้ได้เต็มรูปแบบ">
                      ผู้เยี่ยมชมมีสิทธิ์เลือกยินยอมคุกกี้วิเคราะห์และการตลาด หรือจัดการผ่านการตั้งค่าเบราว์เซอร์ได้เอง
                    </SummaryCard>
                    <SummaryCard title="คู่ค้าภายนอก (Third-Party)" tone="amber">
                      เครื่องมือการตลาด เช่น Meta Pixel และ Google Ads จะโหลดเฉพาะเมื่อคุณให้ความยินยอมเท่านั้น
                    </SummaryCard>
                  </div>
                  <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-xs leading-relaxed text-slate-400 sm:text-sm">
                    หากมีคำถามเกี่ยวกับการจัดการคุกกี้หรือข้อสงสัย PDPA เพิ่มเติม
                    สามารถเขียนอีเมลอย่างปลอดภัยมายัง{" "}
                    <a href="mailto:privacy@bkkair.com" className="font-bold text-blue-400 hover:underline">
                      privacy@bkkair.com
                    </a>{" "}
                    ทีมงานจะดำเนินการให้แล้วเสร็จภายใน 30 วันทำการ
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
                      <Sparkles className="h-6 w-6" />
                    </span>
                    <div>
                      <h2 className="text-xl font-black text-white sm:text-2xl">
                        นโยบายคุกกี้แบบสรุปย่อ (TL;DR Summary)
                      </h2>
                      <p className="text-xs text-slate-400 sm:text-sm">
                        เข้าใจสิทธิ์ข้อมูลการตลาดและระเบียบคุกกี้ BKK AIR ใน 1 นาที
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <SummaryCard title="คุกกี้เพื่อจดจำความชอบ" tone="emerald">
                      เว็บไซต์บันทึกคุกกี้เฉพาะกรณีคุณกดยินยอม เพื่อจดจำความชอบของหน้าเว็บและไม่ต้องเริ่มตั้งค่าใหม่ในครั้งถัดไป
                    </SummaryCard>
                    <SummaryCard title="คุกกี้เพื่อความปลอดภัยสากล" tone="indigo">
                      Essential Cookies จะทำงานพื้นหลังเพื่อป้องกันสแปมและดูแลความปลอดภัยของการส่งคำขอและแบบฟอร์ม
                    </SummaryCard>
                    <SummaryCard title="ควบคุมคุกกี้ได้เต็มรูปแบบ">
                      ผู้เยี่ยมชมมีสิทธิ์เลือกยินยอมคุกกี้วิเคราะห์และการตลาด หรือจัดการผ่านการตั้งค่าเบราว์เซอร์ได้เอง
                    </SummaryCard>
                    <SummaryCard title="คู่ค้าภายนอก (Third-Party)" tone="amber">
                      เครื่องมือการตลาด เช่น Meta Pixel และ Google Ads จะโหลดเฉพาะเมื่อคุณให้ความยินยอมเท่านั้น
                    </SummaryCard>
                  </div>
                  <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-xs leading-relaxed text-slate-400 sm:text-sm">
                    หากมีคำถามเกี่ยวกับการจัดการคุกกี้หรือข้อสงสัย PDPA เพิ่มเติม สามารถเขียนอีเมลมายัง{" "}
                    <a href="mailto:privacy@bkkair.com" className="font-bold text-blue-400 hover:underline">
                      privacy@bkkair.com
                    </a>
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
            คัดลอกสำเร็จแล้ว
          </span>
        </div>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                const full = document.getElementById("fullPolicyContainer");
                const summary = document.getElementById("quickSummaryContainer");
                const searchBox = document.getElementById("cookiesSearchBox");
                const searchInput = document.getElementById("cookiesSearchInput");
                const searchNotice = document.getElementById("searchNotice");
                const sidebar = document.getElementById("sidebar-nav");
                const btnFull = document.getElementById("btnViewFull");
                const btnSummary = document.getElementById("btnViewSummary");
                const backToTop = document.getElementById("backToTop");
                const toast = document.getElementById("toastNotification");
                const navLinks = Array.from(document.querySelectorAll(".toc-link"));

                const fullActive = "cookies-view-button rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-black text-white shadow-lg shadow-blue-500/20";
                const inactive = "cookies-view-button rounded-xl px-5 py-2.5 text-sm font-black text-slate-400 transition hover:text-white";

                const setMode = (mode) => {
                  const isFull = mode === "full";
                  full?.classList.toggle("hidden", !isFull);
                  summary?.classList.toggle("hidden", isFull);
                  searchBox?.classList.toggle("hidden", !isFull);
                  sidebar?.classList.toggle("lg:block", isFull);
                  sidebar?.classList.toggle("lg:hidden", !isFull);
                  if (btnFull) btnFull.className = isFull ? fullActive : inactive;
                  if (btnSummary) btnSummary.className = isFull ? inactive : fullActive;
                  if (!isFull && searchInput) {
                    searchInput.value = "";
                    document.querySelectorAll(".policy-section").forEach((section) => {
                      section.style.display = "";
                    });
                    searchNotice?.classList.add("hidden");
                  }
                };

                document.querySelectorAll(".cookies-view-button").forEach((button) => {
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

                const copyText = async (text) => {
                  try {
                    await navigator.clipboard.writeText(text);
                  } catch {
                    const input = document.createElement("input");
                    input.value = text;
                    document.body.appendChild(input);
                    input.select();
                    document.execCommand("copy");
                    input.remove();
                  }
                  showToast();
                };

                document.querySelectorAll(".copy-section-link").forEach((button) => {
                  button.addEventListener("click", () => {
                    const id = button.getAttribute("data-section-id");
                    copyText(window.location.href.split("#")[0] + "#" + id);
                  });
                });

                document.querySelectorAll(".copy-email-link").forEach((button) => {
                  button.addEventListener("click", () => copyText(button.getAttribute("data-copy-email")));
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

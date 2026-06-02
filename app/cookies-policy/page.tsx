import type { Metadata } from "next";
import Link from "next/link";
import {
  BarChart3,
  Bell,
  CheckCircle2,
  Cookie,
  ExternalLink,
  LockKeyhole,
  Mail,
  Megaphone,
  Settings2,
  ShieldCheck,
} from "lucide-react";
import MarketingShell from "../../components/marketing/MarketingShell";
import CookieSettingsButton from "../../components/CookieSettingsButton";

export const metadata: Metadata = {
  title: "นโยบายคุกกี้ — BKK AIR",
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
  { id: "what-are-cookies", label: "1. คุกกี้คืออะไร" },
  { id: "why-we-use", label: "2. เราใช้คุกกี้เพื่ออะไร" },
  { id: "types", label: "3. ประเภทคุกกี้ที่เราใช้" },
  { id: "cookie-table", label: "4. ตารางสรุปคุกกี้" },
  { id: "manage", label: "5. การจัดการคุกกี้" },
  { id: "browser", label: "6. จัดการในเบราว์เซอร์" },
  { id: "third-party", label: "7. คุกกี้ของบุคคลที่สาม" },
  { id: "changes", label: "8. การเปลี่ยนแปลงนโยบาย" },
  { id: "contact", label: "9. ติดต่อเรา" },
];

const usageCards = [
  {
    icon: LockKeyhole,
    title: "ความปลอดภัย",
    text: "ป้องกันการโจมตี CSRF และช่วยรักษาความถูกต้องของ session เพื่อความปลอดภัยในการส่งแบบฟอร์ม",
  },
  {
    icon: Settings2,
    title: "ความต้องการของผู้ใช้",
    text: "จดจำการตั้งค่าของคุณ เช่น การยินยอมคุกกี้ เพื่อไม่ต้องตั้งค่าซ้ำทุกครั้ง",
  },
  {
    icon: BarChart3,
    title: "การวิเคราะห์",
    text: "ทำความเข้าใจว่าผู้ใช้เยี่ยมชมหน้าไหน ใช้เวลาเท่าไร เพื่อปรับปรุงเนื้อหาและ UX",
  },
  {
    icon: Megaphone,
    title: "การตลาด",
    text: "แสดงโฆษณาหรือเนื้อหาที่เกี่ยวข้องกับบริการของเรา เฉพาะเมื่อคุณยินยอมเท่านั้น",
  },
];

const cookieTypes = [
  {
    badge: "จำเป็น",
    badgeClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
    title: "Essential Cookies (คุกกี้ที่จำเป็น)",
    text: "คุกกี้เหล่านี้จำเป็นต่อการทำงานพื้นฐานของเว็บไซต์ ไม่สามารถปิดได้ เช่น คุกกี้ที่จดจำการยินยอมคุกกี้ของคุณ หรือช่วยรักษาความปลอดภัยของแบบฟอร์ม",
    example: "bkkair_cookie_consent, session token",
  },
  {
    badge: "วิเคราะห์",
    badgeClass: "border-blue-200 bg-blue-50 text-blue-700",
    title: "Analytics Cookies (คุกกี้วิเคราะห์)",
    text: "ช่วยให้เราเข้าใจว่าผู้เยี่ยมชมใช้งานเว็บไซต์อย่างไร หน้าใดได้รับความนิยม และเส้นทางการใช้งาน ข้อมูลนี้ใช้เพื่อปรับปรุงประสบการณ์ผู้ใช้เท่านั้น",
    example: "Google Analytics 4 (_ga, _ga_XXXXXXXXXX)",
  },
  {
    badge: "การตลาด",
    badgeClass: "border-orange-200 bg-orange-50 text-orange-700",
    title: "Marketing Cookies (คุกกี้การตลาด)",
    text: "ใช้สำหรับแสดงโฆษณาที่เกี่ยวข้องกับบริการของเราบนแพลตฟอร์มอื่น เช่น Facebook หรือ Google Ads โดยจะโหลดเฉพาะเมื่อคุณเลือกยอมรับทั้งหมด",
    example: "Meta Pixel (_fbp), Google Ads (gclid)",
  },
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

export default function CookiesPolicyPage() {
  return (
    <MarketingShell>
      <article className="bg-slate-950 px-6 py-16 text-slate-300 md:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="font-semibold transition hover:text-white">
                  หน้าแรก
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li className="font-semibold text-slate-200">นโยบายคุกกี้</li>
            </ol>
          </nav>

          <header className="relative mt-6 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 lg:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.16),transparent_34%),radial-gradient(circle_at_top_left,rgba(255,87,34,0.16),transparent_32%)]" />
            <div className="relative">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm font-bold text-accent-orange">
                <Cookie className="h-4 w-4" aria-hidden="true" />
                Cookie Policy
              </div>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                นโยบายคุกกี้
                <span className="mt-2 block text-2xl font-extrabold text-accent-orange sm:text-3xl">
                  Cookie Policy
                </span>
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg">
                นโยบายนี้อธิบายว่าเว็บไซต์ BKK AIR ใช้คุกกี้อย่างไร เหตุผลที่เราใช้ และสิทธิ์ของคุณในการจัดการคุกกี้เหล่านั้น
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-slate-500">
                <span>อัปเดต: 29 พฤษภาคม 2566</span>
                <span className="hidden text-slate-700 sm:inline">•</span>
                <span>สอดคล้องกับ PDPA</span>
              </div>
            </div>
          </header>

          <div className="mt-10 grid gap-8 lg:grid-cols-[16rem_minmax(0,1fr)] lg:items-start">
            <aside className="hidden lg:block">
              <div className="sticky top-28 rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">สารบัญ</p>
                <ul className="mt-4 space-y-1 text-sm">
                  {tableOfContents.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="block rounded-lg px-2 py-1.5 font-semibold text-slate-400 transition hover:bg-slate-800 hover:text-accent-orange"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 border-t border-slate-800 pt-5">
                  <Link href="/privacy-policy" className="text-xs font-bold text-accent-orange hover:underline">
                    ← นโยบายความเป็นส่วนตัว
                  </Link>
                </div>
              </div>
            </aside>

            <main className="min-w-0 space-y-8">
              <section id="what-are-cookies" className="scroll-mt-28 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
                <h2 className="text-2xl font-black text-white">1. คุกกี้คืออะไร</h2>
                <div className="mt-5 space-y-4 leading-relaxed text-slate-400">
                  <p>
                    คุกกี้ (Cookies) คือไฟล์ข้อความขนาดเล็กที่ถูกบันทึกลงในอุปกรณ์ของคุณ เช่น คอมพิวเตอร์ สมาร์ทโฟน หรือแท็บเล็ต เมื่อคุณเยี่ยมชมเว็บไซต์
                  </p>
                  <p>
                    ไฟล์เหล่านี้ช่วยให้เว็บไซต์จดจำการตั้งค่าของคุณ ทำให้การใช้งานเว็บไซต์ราบรื่นขึ้น และช่วยให้เราเข้าใจพฤติกรรมการใช้งานเพื่อปรับปรุงบริการ โดยคุกกี้ไม่ใช่ไวรัสหรือมัลแวร์ และไม่สามารถเข้าถึงข้อมูลอื่นในอุปกรณ์ของคุณได้
                  </p>
                </div>
              </section>

              <section id="why-we-use" className="scroll-mt-28 space-y-5">
                <h2 className="text-2xl font-black text-white">2. เราใช้คุกกี้เพื่ออะไร</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {usageCards.map((card) => {
                    const Icon = card.icon;
                    return (
                      <div key={card.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-orange/10">
                          <Icon className="h-5 w-5 text-accent-orange" aria-hidden="true" />
                        </div>
                        <h3 className="font-black text-white">{card.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-400">{card.text}</p>
                      </div>
                    );
                  })}
                </div>
              </section>

              <section id="types" className="scroll-mt-28 space-y-5">
                <h2 className="text-2xl font-black text-white">3. ประเภทคุกกี้ที่เราใช้</h2>
                {cookieTypes.map((type) => (
                  <div key={type.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`rounded-full border px-3 py-1 text-xs font-black ${type.badgeClass}`}>
                        {type.badge}
                      </span>
                      <h3 className="text-xl font-black text-white">{type.title}</h3>
                    </div>
                    <p className="mt-4 leading-relaxed text-slate-400">{type.text}</p>
                    <p className="mt-4 text-sm text-slate-500">
                      <strong className="text-slate-300">ตัวอย่าง:</strong> {type.example}
                    </p>
                  </div>
                ))}
              </section>

              <section id="cookie-table" className="scroll-mt-28 space-y-5">
                <h2 className="text-2xl font-black text-white">4. ตารางสรุปคุกกี้</h2>
                <div className="overflow-x-auto rounded-2xl border border-slate-800">
                  <table className="min-w-[760px] w-full border-collapse text-left text-sm">
                    <thead className="bg-slate-900 text-slate-200">
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
              </section>

              <section id="manage" className="scroll-mt-28 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
                <h2 className="text-2xl font-black text-white">5. การจัดการคุกกี้</h2>
                <div className="mt-5 space-y-4 leading-relaxed text-slate-400">
                  <p>
                    เมื่อคุณเข้าเว็บไซต์ครั้งแรก คุณสามารถเลือก “ยอมรับทั้งหมด” หรือ “ปฏิเสธคุกกี้ที่ไม่จำเป็น” ได้ โดยการตั้งค่าจะถูกบันทึกไว้ในเบราว์เซอร์ของคุณ
                  </p>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-400" aria-hidden="true" />
                      <span><strong className="text-white">ยอมรับทั้งหมด</strong> — ยินยอมให้เราใช้คุกกี้ทุกประเภท รวมถึงการวิเคราะห์และการตลาด</span>
                    </li>
                    <li className="flex gap-3">
                      <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-slate-500" aria-hidden="true" />
                      <span><strong className="text-white">ปฏิเสธคุกกี้ที่ไม่จำเป็น</strong> — เราจะใช้เฉพาะคุกกี้ที่จำเป็นสำหรับการทำงานของเว็บไซต์เท่านั้น</span>
                    </li>
                  </ul>
                  <p>คุณสามารถเปลี่ยนการตั้งค่าคุกกี้ได้ตลอดเวลาโดยใช้ปุ่มด้านล่างหรือปุ่ม “ตั้งค่าคุกกี้” ใน footer</p>
                </div>
                <div className="mt-6">
                  <CookieSettingsButton />
                </div>
              </section>

              <section id="browser" className="scroll-mt-28 space-y-5">
                <h2 className="text-2xl font-black text-white">6. การจัดการคุกกี้ในเบราว์เซอร์</h2>
                <p className="leading-relaxed text-slate-400">
                  นอกจากการตั้งค่าผ่านแบนเนอร์ของเราแล้ว คุณสามารถจัดการคุกกี้ผ่านการตั้งค่าเบราว์เซอร์ได้โดยตรง:
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {browserLinks.map(([title, text, href]) => (
                    <a
                      key={title}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/70 p-4 transition hover:border-orange-400/50"
                    >
                      <div>
                        <p className="font-bold text-white">{title}</p>
                        <p className="text-xs text-slate-500">{text}</p>
                      </div>
                      <ExternalLink className="ml-auto h-4 w-4 text-slate-600 transition group-hover:text-accent-orange" aria-hidden="true" />
                    </a>
                  ))}
                </div>
                <div className="rounded-2xl border border-amber-700/40 bg-amber-900/20 p-5 text-sm leading-relaxed text-amber-100">
                  <strong className="text-amber-300">หมายเหตุ:</strong> การปิดคุกกี้ทั้งหมดในเบราว์เซอร์อาจทำให้บางฟีเจอร์ของเว็บไซต์ไม่ทำงานอย่างถูกต้อง เช่น แบบฟอร์มสั่งซื้อหรือการแสดงเนื้อหา
                </div>
              </section>

              <section id="third-party" className="scroll-mt-28 space-y-5">
                <h2 className="text-2xl font-black text-white">7. คุกกี้ของบุคคลที่สาม</h2>
                <p className="leading-relaxed text-slate-400">
                  เว็บไซต์ของเราอาจรวมบริการจากบุคคลที่สามที่มีนโยบายคุกกี้ของตนเอง เราไม่สามารถควบคุมคุกกี้เหล่านั้นได้โดยตรง จึงแนะนำให้คุณอ่านนโยบายของผู้ให้บริการแต่ละราย
                </p>
                <div className="space-y-4">
                  {thirdPartyServices.map((service) => (
                    <div key={service.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                      <h3 className="font-black text-white">{service.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">{service.text}</p>
                      <a
                        href={service.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-accent-orange hover:underline"
                      >
                        {service.label}
                        <ExternalLink className="h-3 w-3" aria-hidden="true" />
                      </a>
                    </div>
                  ))}
                </div>
              </section>

              <section id="changes" className="scroll-mt-28 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
                <h2 className="text-2xl font-black text-white">8. การเปลี่ยนแปลงนโยบาย</h2>
                <div className="mt-5 space-y-4 leading-relaxed text-slate-400">
                  <p>
                    BKK AIR อาจปรับปรุงนโยบายคุกกี้นี้เป็นครั้งคราวเพื่อให้สอดคล้องกับการเปลี่ยนแปลงด้านกฎหมาย เทคโนโลยี หรือบริการของเรา
                  </p>
                  <p>
                    วันที่อัปเดตล่าสุดจะแสดงอยู่ที่ด้านบนของหน้านี้เสมอ เราแนะนำให้คุณตรวจสอบนโยบายนี้เป็นระยะ
                  </p>
                </div>
              </section>

              <section id="contact" className="scroll-mt-28 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
                <h2 className="text-2xl font-black text-white">9. ติดต่อเรา</h2>
                <p className="mt-5 leading-relaxed text-slate-400">
                  หากมีคำถามเกี่ยวกับนโยบายคุกกี้นี้หรือต้องการใช้สิทธิ์ของคุณตาม PDPA สามารถติดต่อเราได้ที่:
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                    <Mail className="mb-4 h-6 w-6 text-accent-orange" aria-hidden="true" />
                    <p className="text-sm text-slate-500">อีเมล</p>
                    <a href="mailto:privacy@bkkair.com" className="font-black text-white transition hover:text-accent-orange">
                      privacy@bkkair.com
                    </a>
                  </div>
                  <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                    <Bell className="mb-4 h-6 w-6 text-accent-orange" aria-hidden="true" />
                    <p className="text-sm text-slate-500">LINE Official</p>
                    <a
                      href="https://line.me/R/ti/p/@823lateh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-black text-white transition hover:text-accent-orange"
                    >
                      @823lateh
                    </a>
                  </div>
                </div>
                <div className="mt-6 rounded-2xl border border-orange-400/20 bg-orange-400/5 p-5 text-sm leading-relaxed text-slate-300">
                  ดูรายละเอียดเพิ่มเติมเกี่ยวกับการคุ้มครองข้อมูลส่วนบุคคลได้ที่{" "}
                  <Link href="/privacy-policy" className="font-bold text-accent-orange hover:underline">
                    นโยบายความเป็นส่วนตัว
                  </Link>{" "}
                  ของเรา
                </div>
              </section>
            </main>
          </div>
        </div>
      </article>
    </MarketingShell>
  );
}

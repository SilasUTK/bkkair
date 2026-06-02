import type { Metadata } from "next";
import Link from "next/link";
import MarketingShell from "../../components/marketing/MarketingShell";

export const metadata: Metadata = {
  title: "นโยบายความเป็นส่วนตัว — BKK AIR",
  description:
    "BKK AIR ให้ความสำคัญกับความเป็นส่วนตัวของคุณ อ่านนโยบายการเก็บรวบรวม ใช้ และปกป้องข้อมูลส่วนบุคคลของเรา",
  alternates: {
    canonical: "https://bkkair.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tableOfContents = [
  { id: "introduction", label: "1. บทนำ" },
  { id: "collected-data", label: "2. ข้อมูลที่เราเก็บรวบรวม" },
  { id: "purpose-of-use", label: "3. วัตถุประสงค์การใช้ข้อมูล" },
  { id: "third-party-disclosure", label: "4. การเปิดเผยข้อมูลแก่บุคคลภายนอก" },
  { id: "retention", label: "5. ระยะเวลาการเก็บข้อมูล" },
  { id: "security", label: "6. ความปลอดภัยของข้อมูล" },
  { id: "cookies", label: "7. คุกกี้ (Cookies)" },
  { id: "rights", label: "8. สิทธิ์ของคุณ (Your Rights)" },
  { id: "international-transfer", label: "9. การโอนข้อมูลระหว่างประเทศ" },
  { id: "minors", label: "10. ความเป็นส่วนตัวของผู้เยาว์" },
  { id: "external-links", label: "11. ลิงก์ไปยังเว็บไซต์ภายนอก" },
  { id: "policy-updates", label: "12. การเปลี่ยนแปลงนโยบายนี้" },
  { id: "privacy-contact", label: "13. ติดต่อเราเรื่องความเป็นส่วนตัว" },
  { id: "plain-summary", label: "สรุปสั้น ๆ" },
  { id: "compliance-note", label: "Compliance Note และ Disclaimer" },
];

export default function PrivacyPolicyPage() {
  return (
    <MarketingShell>
      <article className="bg-white px-6 py-16 md:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl scroll-smooth">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="font-semibold text-slate-600 transition hover:text-[#2563EB]">
                  หน้าแรก
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li className="font-semibold text-slate-900">นโยบายความเป็นส่วนตัว</li>
            </ol>
          </nav>

          <header className="mt-6 rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#2563EB]">Privacy Policy</p>
            <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              นโยบายความเป็นส่วนตัว
              <span className="mt-2 block text-xl font-extrabold text-slate-600 sm:text-2xl">Privacy Policy</span>
            </h1>
            <p className="mt-5 text-sm font-bold text-slate-600 sm:text-base">อัปเดตล่าสุด: 18 พฤษภาคม 2569 (2026)</p>
            <div className="mt-5 space-y-2 text-base leading-relaxed text-slate-700 sm:text-lg">
              <p>BKK AIR ให้ความสำคัญกับความเป็นส่วนตัวของคุณอย่างจริงจัง</p>
              <p>เราเขียนนโยบายนี้ให้อ่านเข้าใจได้ง่าย ไม่ใช่แค่ภาษากฎหมาย</p>
              <p>เพื่อให้คุณรู้ชัดเจนว่าเราเก็บข้อมูลอะไร ใช้ทำอะไร และปกป้องอย่างไร</p>
            </div>
          </header>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-start">
            <main className="min-w-0 space-y-8">
              <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8" aria-labelledby="toc-heading">
                <h2 id="toc-heading" className="text-2xl font-black text-slate-900">
                  สารบัญนโยบายความเป็นส่วนตัว
                </h2>
                <p className="mt-2 text-slate-600">เลือกหัวข้อเพื่อไปยังส่วนที่ต้องการอ่านได้ทันที</p>
                <ul className="mt-5 grid gap-2 text-sm sm:grid-cols-2 sm:text-base">
                  {tableOfContents.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="block rounded-xl border border-slate-200 bg-[#F8FAFC] px-3 py-2 font-semibold text-slate-700 transition hover:border-blue-200 hover:text-[#2563EB]"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="space-y-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
                <section id="introduction" className="scroll-mt-28 space-y-4">
                  <h2 className="text-2xl font-black text-slate-900">1. บทนำ</h2>
                  <p className="leading-relaxed text-slate-700">
                    BKK AIR (&quot;เรา&quot;, &quot;ของเรา&quot;) ดำเนินกิจการบริการจัดเตรียมเอกสารสนับสนุนวีซ่าสำหรับนักเดินทาง ผ่านเว็บไซต์ bkkair.com
                  </p>
                  <p className="leading-relaxed text-slate-700">
                    นโยบายความเป็นส่วนตัวฉบับนี้อธิบายว่า BKK AIR เก็บรวบรวม ใช้ เปิดเผย และปกป้องข้อมูลส่วนบุคคลของคุณอย่างไร เมื่อคุณใช้บริการของเรา
                  </p>
                  <p className="leading-relaxed text-slate-700">การใช้บริการของ BKK AIR ถือว่าคุณได้อ่านและยอมรับนโยบายนี้แล้ว</p>
                </section>

                <section id="collected-data" className="scroll-mt-28 space-y-4 border-t border-slate-200 pt-8">
                  <h2 className="text-2xl font-black text-slate-900">2. ข้อมูลที่เราเก็บรวบรวม</h2>
                  <p className="leading-relaxed text-slate-700">เราเก็บเฉพาะข้อมูลที่จำเป็นสำหรับการให้บริการเท่านั้น แบ่งออกเป็น 2 ประเภท:</p>

                  <section className="space-y-3">
                    <h3 className="text-xl font-extrabold text-slate-900">2.1 ข้อมูลที่คุณให้เราโดยตรง</h3>
                    <p className="leading-relaxed text-slate-700">เมื่อคุณสั่งซื้อบริการ คุณจะให้ข้อมูลดังต่อไปนี้:</p>
                    <ul className="list-disc space-y-2 pl-6 leading-relaxed text-slate-700 marker:text-[#2563EB]">
                      <li><strong>ชื่อ-นามสกุล</strong> ของผู้เดินทาง (ตามหนังสือเดินทาง)</li>
                      <li><strong>วันเดินทาง</strong> และประเทศปลายทาง</li>
                      <li><strong>ประเทศที่ยื่นวีซ่า</strong></li>
                      <li><strong>ที่อยู่อีเมล</strong> สำหรับรับเอกสารและการสื่อสาร</li>
                      <li><strong>หมายเลขโทรศัพท์</strong> สำหรับติดต่อกรณีจำเป็น</li>
                      <li>
                        <strong>ข้อมูลการชำระเงิน</strong> — ประมวลผลผ่านผู้ให้บริการชำระเงินที่ได้รับการรับรอง
                        เราไม่จัดเก็บข้อมูลบัตรเครดิตหรือบัญชีธนาคารของคุณ
                      </li>
                    </ul>
                  </section>

                  <section className="space-y-3">
                    <h3 className="text-xl font-extrabold text-slate-900">2.2 ข้อมูลที่ระบบเก็บโดยอัตโนมัติ</h3>
                    <p className="leading-relaxed text-slate-700">เมื่อคุณเยี่ยมชมเว็บไซต์ของเรา ระบบอาจเก็บข้อมูลทางเทคนิคโดยอัตโนมัติ ได้แก่:</p>
                    <ul className="list-disc space-y-2 pl-6 leading-relaxed text-slate-700 marker:text-[#2563EB]">
                      <li>IP address</li>
                      <li>ประเภทเบราว์เซอร์และอุปกรณ์</li>
                      <li>หน้าที่เยี่ยมชมและระยะเวลาที่ใช้</li>
                      <li>แหล่งที่มาของการเข้าชม (เช่น มาจาก Google หรือ Social Media)</li>
                    </ul>
                    <p className="leading-relaxed text-slate-700">ข้อมูลเหล่านี้ใช้สำหรับการวิเคราะห์การใช้งานเว็บไซต์และปรับปรุงบริการเท่านั้น</p>
                  </section>
                </section>

                <section id="purpose-of-use" className="scroll-mt-28 space-y-4 border-t border-slate-200 pt-8">
                  <h2 className="text-2xl font-black text-slate-900">3. วัตถุประสงค์การใช้ข้อมูล</h2>
                  <p className="leading-relaxed text-slate-700">เราใช้ข้อมูลของคุณเพื่อวัตถุประสงค์ดังต่อไปนี้เท่านั้น:</p>
                  <div className="overflow-x-auto rounded-2xl border border-slate-200">
                    <table className="min-w-[680px] w-full border-collapse text-left text-sm sm:text-base">
                      <thead className="bg-[#F8FAFC] text-slate-900">
                        <tr>
                          <th className="border-b border-slate-200 px-4 py-3 font-extrabold">วัตถุประสงค์</th>
                          <th className="border-b border-slate-200 px-4 py-3 font-extrabold">ประเภทข้อมูลที่ใช้</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-700">
                        <tr>
                          <td className="border-b border-slate-200 px-4 py-3">จัดทำเอกสารสนับสนุนวีซ่าตามที่สั่ง</td>
                          <td className="border-b border-slate-200 px-4 py-3">ชื่อ วันเดินทาง ปลายทาง</td>
                        </tr>
                        <tr>
                          <td className="border-b border-slate-200 px-4 py-3">ส่งเอกสาร PDF ให้คุณ</td>
                          <td className="border-b border-slate-200 px-4 py-3">อีเมล</td>
                        </tr>
                        <tr>
                          <td className="border-b border-slate-200 px-4 py-3">ยืนยันออเดอร์และการชำระเงิน</td>
                          <td className="border-b border-slate-200 px-4 py-3">อีเมล โทรศัพท์</td>
                        </tr>
                        <tr>
                          <td className="border-b border-slate-200 px-4 py-3">ติดต่อกรณีข้อมูลไม่ครบหรือมีปัญหา</td>
                          <td className="border-b border-slate-200 px-4 py-3">อีเมล โทรศัพท์</td>
                        </tr>
                        <tr>
                          <td className="border-b border-slate-200 px-4 py-3">ปรับปรุงคุณภาพบริการ</td>
                          <td className="border-b border-slate-200 px-4 py-3">ข้อมูลการใช้งานเว็บไซต์</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">ปฏิบัติตามข้อกำหนดทางกฎหมาย</td>
                          <td className="px-4 py-3">ตามที่กฎหมายกำหนด</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="space-y-2 rounded-2xl border border-blue-100 bg-blue-50 p-4 text-slate-800">
                    <p className="font-bold">เราไม่ใช้ข้อมูลของคุณเพื่อ:</p>
                    <ul className="list-disc space-y-1 pl-6 marker:text-[#2563EB]">
                      <li>ส่งข้อความโฆษณาโดยไม่ได้รับความยินยอม</li>
                      <li>ขายหรือให้เช่าข้อมูลแก่บุคคลภายนอก</li>
                      <li>วิเคราะห์พฤติกรรมเพื่อวัตถุประสงค์เชิงพาณิชย์อื่นใด</li>
                    </ul>
                  </div>
                </section>

                <section id="third-party-disclosure" className="scroll-mt-28 space-y-4 border-t border-slate-200 pt-8">
                  <h2 className="text-2xl font-black text-slate-900">4. การเปิดเผยข้อมูลแก่บุคคลภายนอก</h2>
                  <p className="leading-relaxed text-slate-700">
                    BKK AIR ไม่ขาย ไม่ให้เช่า และไม่แลกเปลี่ยนข้อมูลส่วนบุคคลของคุณกับบุคคลภายนอก ยกเว้นกรณีดังต่อไปนี้:
                  </p>
                  <section className="space-y-3">
                    <h3 className="text-xl font-extrabold text-slate-900">4.1 ผู้ให้บริการที่จำเป็น (Service Providers)</h3>
                    <p className="leading-relaxed text-slate-700">เราอาจแชร์ข้อมูลบางส่วนกับผู้ให้บริการที่ช่วยดำเนินการของเรา เช่น:</p>
                    <ul className="list-disc space-y-2 pl-6 leading-relaxed text-slate-700 marker:text-[#2563EB]">
                      <li><strong>ผู้ให้บริการชำระเงิน</strong> — เพื่อประมวลผลการชำระเงินอย่างปลอดภัย</li>
                      <li><strong>ผู้ให้บริการอีเมล</strong> — เพื่อส่งเอกสารและการแจ้งเตือน</li>
                      <li><strong>ผู้ให้บริการ Hosting</strong> — เพื่อการทำงานของเว็บไซต์</li>
                    </ul>
                    <p className="leading-relaxed text-slate-700">
                      ผู้ให้บริการเหล่านี้มีข้อผูกพันทางสัญญาที่ต้องรักษาความลับของข้อมูล และไม่สามารถใช้ข้อมูลของคุณเพื่อวัตถุประสงค์อื่น
                    </p>
                  </section>
                  <section className="space-y-3">
                    <h3 className="text-xl font-extrabold text-slate-900">4.2 กรณีที่กฎหมายกำหนด</h3>
                    <p className="leading-relaxed text-slate-700">
                      เราอาจเปิดเผยข้อมูลหากได้รับคำสั่งจากหน่วยงานรัฐหรือกระบวนการทางกฎหมายที่ชอบด้วยกฎหมาย โดยจะแจ้งให้คุณทราบเท่าที่สามารถทำได้
                    </p>
                  </section>
                </section>

                <section id="retention" className="scroll-mt-28 space-y-4 border-t border-slate-200 pt-8">
                  <h2 className="text-2xl font-black text-slate-900">5. ระยะเวลาการเก็บข้อมูล</h2>
                  <p className="leading-relaxed text-slate-700">เราเก็บข้อมูลของคุณตามระยะเวลาดังนี้:</p>
                  <div className="overflow-x-auto rounded-2xl border border-slate-200">
                    <table className="min-w-[680px] w-full border-collapse text-left text-sm sm:text-base">
                      <thead className="bg-[#F8FAFC] text-slate-900">
                        <tr>
                          <th className="border-b border-slate-200 px-4 py-3 font-extrabold">ประเภทข้อมูล</th>
                          <th className="border-b border-slate-200 px-4 py-3 font-extrabold">ระยะเวลาเก็บ</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-700">
                        <tr>
                          <td className="border-b border-slate-200 px-4 py-3">ข้อมูลออเดอร์และเอกสาร</td>
                          <td className="border-b border-slate-200 px-4 py-3">90 วันหลังจากส่งเอกสาร</td>
                        </tr>
                        <tr>
                          <td className="border-b border-slate-200 px-4 py-3">ข้อมูลการติดต่อ</td>
                          <td className="border-b border-slate-200 px-4 py-3">1 ปี หรือจนกว่าคุณขอลบ</td>
                        </tr>
                        <tr>
                          <td className="border-b border-slate-200 px-4 py-3">ข้อมูลการใช้งานเว็บไซต์</td>
                          <td className="border-b border-slate-200 px-4 py-3">26 เดือน (มาตรฐาน Google Analytics)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">ข้อมูลการชำระเงิน</td>
                          <td className="px-4 py-3">ตามที่ผู้ให้บริการชำระเงินกำหนด</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="leading-relaxed text-slate-700">เมื่อครบกำหนด เราจะลบหรือทำให้ข้อมูลไม่สามารถระบุตัวตนได้</p>
                </section>

                <section id="security" className="scroll-mt-28 space-y-4 border-t border-slate-200 pt-8">
                  <h2 className="text-2xl font-black text-slate-900">6. ความปลอดภัยของข้อมูล</h2>
                  <p className="leading-relaxed text-slate-700">BKK AIR ใช้มาตรการรักษาความปลอดภัยที่เหมาะสมเพื่อปกป้องข้อมูลของคุณ ได้แก่:</p>
                  <ul className="list-disc space-y-2 pl-6 leading-relaxed text-slate-700 marker:text-[#2563EB]">
                    <li><strong>การเข้ารหัส SSL/TLS</strong> สำหรับการรับส่งข้อมูลทั้งหมดบนเว็บไซต์</li>
                    <li><strong>การเข้ารหัสข้อมูล</strong> ที่จัดเก็บในระบบ</li>
                    <li><strong>การจำกัดการเข้าถึง</strong> เฉพาะทีมงานที่จำเป็นต้องใช้ข้อมูลในการให้บริการ</li>
                    <li><strong>การตรวจสอบระบบ</strong> อย่างสม่ำเสมอ</li>
                  </ul>
                  <p className="leading-relaxed text-slate-700">
                    อย่างไรก็ตาม ไม่มีระบบใดที่ปลอดภัย 100% หากพบการละเมิดข้อมูลที่กระทบต่อคุณ เราจะแจ้งให้ทราบโดยเร็วที่สุดตามที่กฎหมายกำหนด
                  </p>
                </section>

                <section id="cookies" className="scroll-mt-28 space-y-4 border-t border-slate-200 pt-8">
                  <h2 className="text-2xl font-black text-slate-900">7. คุกกี้ (Cookies)</h2>
                  <p className="leading-relaxed text-slate-700">
                    เว็บไซต์ของเราใช้คุกกี้ที่จำเป็นเพื่อให้เว็บไซต์ทำงานได้อย่างถูกต้อง และอาจใช้คุกกี้เพื่อการวิเคราะห์หรือการตลาดเมื่อได้รับความยินยอมจากคุณ คุณสามารถอ่านรายละเอียดเพิ่มเติมได้ที่{" "}
                    <Link href="/cookies-policy" className="font-bold text-[#2563EB] underline decoration-blue-200 underline-offset-4">
                      หน้านโยบายคุกกี้
                    </Link>
                  </p>
                </section>

                <section id="rights" className="scroll-mt-28 space-y-4 border-t border-slate-200 pt-8">
                  <h2 className="text-2xl font-black text-slate-900">8. สิทธิ์ของคุณ (Your Rights)</h2>
                  <p className="leading-relaxed text-slate-700">
                    ภายใต้พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA) คุณมีสิทธิ์ดังต่อไปนี้:
                  </p>
                  <div className="space-y-3">
                    <section>
                      <h4 className="text-lg font-extrabold text-slate-900">สิทธิ์ในการเข้าถึงข้อมูล (Right to Access)</h4>
                      <p className="leading-relaxed text-slate-700">คุณสามารถขอดูข้อมูลส่วนบุคคลที่เราเก็บไว้เกี่ยวกับคุณได้</p>
                    </section>
                    <section>
                      <h4 className="text-lg font-extrabold text-slate-900">สิทธิ์ในการแก้ไขข้อมูล (Right to Rectification)</h4>
                      <p className="leading-relaxed text-slate-700">คุณสามารถขอแก้ไขข้อมูลที่ไม่ถูกต้องหรือไม่ครบถ้วนได้</p>
                    </section>
                    <section>
                      <h4 className="text-lg font-extrabold text-slate-900">สิทธิ์ในการลบข้อมูล (Right to Erasure)</h4>
                      <p className="leading-relaxed text-slate-700">คุณสามารถขอให้เราลบข้อมูลส่วนบุคคลของคุณได้ ภายใต้เงื่อนไขที่กฎหมายกำหนด</p>
                    </section>
                    <section>
                      <h4 className="text-lg font-extrabold text-slate-900">สิทธิ์ในการจำกัดการประมวลผล (Right to Restriction)</h4>
                      <p className="leading-relaxed text-slate-700">คุณสามารถขอให้เราหยุดประมวลผลข้อมูลของคุณชั่วคราวได้ในบางกรณี</p>
                    </section>
                    <section>
                      <h4 className="text-lg font-extrabold text-slate-900">สิทธิ์ในการโอนย้ายข้อมูล (Right to Data Portability)</h4>
                      <p className="leading-relaxed text-slate-700">คุณสามารถขอรับข้อมูลของคุณในรูปแบบที่อ่านได้โดยเครื่อง</p>
                    </section>
                    <section>
                      <h4 className="text-lg font-extrabold text-slate-900">สิทธิ์ในการคัดค้าน (Right to Object)</h4>
                      <p className="leading-relaxed text-slate-700">คุณสามารถคัดค้านการประมวลผลข้อมูลของคุณในบางกรณีได้</p>
                    </section>
                  </div>
                  <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-slate-800">
                    <strong>การใช้สิทธิ์:</strong> ติดต่อเราได้ทางอีเมล <a href="mailto:info@bkkair.com" className="font-bold text-[#2563EB] underline decoration-blue-200 underline-offset-4">info@bkkair.com</a> เรามุ่งหมายตอบกลับคำขอด้านความเป็นส่วนตัวภายใน 30 วันทำการ
                  </p>
                </section>

                <section id="international-transfer" className="scroll-mt-28 space-y-4 border-t border-slate-200 pt-8">
                  <h2 className="text-2xl font-black text-slate-900">9. การโอนข้อมูลระหว่างประเทศ</h2>
                  <p className="leading-relaxed text-slate-700">BKK AIR ดำเนินงานในประเทศไทย ข้อมูลของคุณจัดเก็บและประมวลผลในประเทศไทยเป็นหลัก</p>
                  <p className="leading-relaxed text-slate-700">
                    ในกรณีที่จำเป็นต้องโอนข้อมูลไปยังต่างประเทศ เช่น ผ่านผู้ให้บริการ Cloud หรือ Analytics
                    เราดำเนินการให้มั่นใจว่าข้อมูลได้รับการปกป้องในระดับที่เทียบเท่าหรือสูงกว่ามาตรฐานของไทย
                  </p>
                </section>

                <section id="minors" className="scroll-mt-28 space-y-4 border-t border-slate-200 pt-8">
                  <h2 className="text-2xl font-black text-slate-900">10. ความเป็นส่วนตัวของผู้เยาว์</h2>
                  <p className="leading-relaxed text-slate-700">
                    บริการของ BKK AIR ไม่ได้มุ่งเป้าหมายไปยังบุคคลที่มีอายุต่ำกว่า 20 ปี หากคุณอายุต่ำกว่า 20 ปี กรุณาให้ผู้ปกครองหรือผู้แทนโดยชอบธรรมดำเนินการแทน
                  </p>
                  <p className="leading-relaxed text-slate-700">
                    หากเราพบว่าได้เก็บข้อมูลของผู้เยาว์โดยไม่มีความยินยอมจากผู้ปกครอง เราจะดำเนินการลบข้อมูลดังกล่าวโดยเร็ว
                  </p>
                </section>

                <section id="external-links" className="scroll-mt-28 space-y-4 border-t border-slate-200 pt-8">
                  <h2 className="text-2xl font-black text-slate-900">11. ลิงก์ไปยังเว็บไซต์ภายนอก</h2>
                  <p className="leading-relaxed text-slate-700">
                    เว็บไซต์ของเราอาจมีลิงก์ไปยังเว็บไซต์ภายนอก เช่น เว็บไซต์สถานทูต ผู้ให้บริการประกันการเดินทาง หรือแหล่งข้อมูลอื่น ๆ
                  </p>
                  <p className="leading-relaxed text-slate-700">
                    BKK AIR ไม่รับผิดชอบต่อนโยบายความเป็นส่วนตัวหรือการปฏิบัติด้านข้อมูลของเว็บไซต์เหล่านั้น กรุณาอ่านนโยบายของแต่ละเว็บไซต์ก่อนใช้งาน
                  </p>
                </section>

                <section id="policy-updates" className="scroll-mt-28 space-y-4 border-t border-slate-200 pt-8">
                  <h2 className="text-2xl font-black text-slate-900">12. การเปลี่ยนแปลงนโยบายนี้</h2>
                  <p className="leading-relaxed text-slate-700">
                    BKK AIR อาจอัปเดตนโยบายความเป็นส่วนตัวนี้เป็นครั้งคราว เมื่อมีการเปลี่ยนแปลงที่มีนัยสำคัญ เราจะแจ้งให้ทราบผ่าน:
                  </p>
                  <ul className="list-disc space-y-2 pl-6 leading-relaxed text-slate-700 marker:text-[#2563EB]">
                    <li>ประกาศบนเว็บไซต์</li>
                    <li>อีเมลแจ้งเตือน (สำหรับผู้ที่เคยใช้บริการ)</li>
                  </ul>
                  <p className="leading-relaxed text-slate-700">วันที่อัปเดตล่าสุดจะแสดงไว้ที่ด้านบนของหน้านี้เสมอ การใช้บริการต่อไปหลังจากการเปลี่ยนแปลงถือว่าคุณยอมรับนโยบายฉบับใหม่</p>
                </section>

                <section id="privacy-contact" className="scroll-mt-28 space-y-4 border-t border-slate-200 pt-8">
                  <h2 className="text-2xl font-black text-slate-900">13. ติดต่อเราเรื่องความเป็นส่วนตัว</h2>
                  <p className="leading-relaxed text-slate-700">
                    เพื่อความชัดเจนในการดูแลข้อมูลส่วนบุคคล BKK AIR แยกช่องทางติดต่อทั่วไปออกจากช่องทางติดต่อด้านความเป็นส่วนตัวโดยเฉพาะ
                  </p>
                  <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 text-slate-800">
                    <p className="text-lg font-black text-slate-900">Privacy &amp; Data Protection Contact</p>
                    <p className="mt-2 leading-relaxed font-semibold">BKK AIR</p>
                    <p className="leading-relaxed">Email (Privacy): <a href="mailto:info@bkkair.com" className="font-bold text-[#2563EB] underline decoration-blue-200 underline-offset-4">info@bkkair.com</a></p>
                    <p className="leading-relaxed">General Support: <a href="mailto:info@bkkair.com" className="font-bold text-[#2563EB] underline decoration-blue-200 underline-offset-4">info@bkkair.com</a></p>
                    <p className="leading-relaxed">Official LINE OA: <a href="https://line.me/R/ti/p/@823lateh" className="font-bold text-[#2563EB] underline decoration-blue-200 underline-offset-4">@823lateh</a></p>
                    <p className="leading-relaxed">Business Hours: Monday-Saturday 09:00-18:00 (Thailand Time)</p>
                    <p className="leading-relaxed">เว็บไซต์: <a href="https://bkkair.com" className="font-bold text-[#2563EB] underline decoration-blue-200 underline-offset-4">https://bkkair.com</a></p>
                    <p className="leading-relaxed text-sm text-slate-600">BKK AIR operates as a Thailand-based travel support service.</p>
                  </div>
                  <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-slate-800">
                    <p className="font-bold">คุณสามารถติดต่อ info@bkkair.com เกี่ยวกับ:</p>
                    <ul className="mt-2 list-disc space-y-1 pl-6 marker:text-[#2563EB]">
                      <li>คำขอเข้าถึงข้อมูลส่วนบุคคล</li>
                      <li>คำขอแก้ไขข้อมูล</li>
                      <li>คำขอลบข้อมูล</li>
                      <li>ข้อกังวลด้าน PDPA/Privacy</li>
                      <li>คำถามเกี่ยวกับการจัดการข้อมูลส่วนบุคคล</li>
                    </ul>
                  </div>
                  <p className="leading-relaxed text-slate-700">เรามุ่งหมายตอบกลับคำขอด้านความเป็นส่วนตัวภายใน <strong>30 วันทำการ</strong> นับจากวันที่ได้รับคำร้อง</p>
                </section>
              </section>

              <section id="plain-summary" className="scroll-mt-28 rounded-3xl border border-emerald-200 bg-emerald-50/70 p-6 sm:p-8">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">สรุปสั้น ๆ</p>
                <h2 className="mt-2 text-2xl font-black text-slate-900">ถ้าไม่อยากอ่านทั้งหมด นี่คือสิ่งสำคัญที่ควรรู้</h2>
                <ul className="mt-6 grid gap-3 text-slate-800 sm:grid-cols-2">
                  <li className="rounded-2xl border border-emerald-200 bg-white p-4"><strong>เราเก็บเฉพาะข้อมูลที่ต้องใช้จริง ๆ</strong><br />ชื่อ วันเดินทาง อีเมล — เท่าที่จำเป็นสำหรับจัดทำเอกสารให้คุณ</li>
                  <li className="rounded-2xl border border-emerald-200 bg-white p-4"><strong>เราไม่ขายข้อมูลของคุณ</strong><br />ไม่เคย และไม่มีแผนจะทำ</li>
                  <li className="rounded-2xl border border-emerald-200 bg-white p-4"><strong>ข้อมูลบัตรเครดิตของคุณปลอดภัย</strong><br />เราไม่จัดเก็บข้อมูลการชำระเงิน — ประมวลผลผ่านระบบที่ได้รับการรับรองเท่านั้น</li>
                  <li className="rounded-2xl border border-emerald-200 bg-white p-4"><strong>คุณมีสิทธิ์ขอดู แก้ไข หรือลบข้อมูลได้เสมอ</strong><br />แค่ติดต่อเรา เราจัดการให้ภายใน 30 วัน</li>
                  <li className="rounded-2xl border border-emerald-200 bg-white p-4 sm:col-span-2"><strong>เราไม่เก็บข้อมูลนานกว่าที่จำเป็น</strong><br />เอกสารและข้อมูลออเดอร์จะถูกลบภายใน 90 วันหลังส่งเอกสาร</li>
                </ul>
              </section>

              <section id="compliance-note" className="scroll-mt-28 space-y-4 rounded-3xl border border-slate-300 bg-slate-900 p-6 text-slate-100 sm:p-8">
                <h2 className="text-2xl font-black text-white">Compliance Note และ Disclaimer</h2>
                <blockquote className="rounded-2xl border border-slate-600 bg-slate-800 p-4 leading-relaxed">
                  นโยบายนี้จัดทำขึ้นตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA)
                  และแนวปฏิบัติที่ดีด้านความเป็นส่วนตัวสากล
                </blockquote>
                <blockquote className="rounded-2xl border border-amber-400/50 bg-amber-100 p-4 leading-relaxed text-slate-900">
                  นโยบายความเป็นส่วนตัวฉบับนี้ใช้กับการเก็บรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคลทั้งหมดของ BKK AIR
                  และจะได้รับการอัปเดตเมื่อมีการเปลี่ยนแปลงบริการหรือข้อกำหนดทางกฎหมายที่เกี่ยวข้อง
                </blockquote>
              </section>
            </main>

            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">On This Page</p>
                <ul className="mt-3 space-y-1 text-sm">
                  {tableOfContents.map((item) => (
                    <li key={`desktop-${item.id}`}>
                      <a href={`#${item.id}`} className="block rounded-lg px-2 py-1.5 font-semibold text-slate-700 transition hover:bg-[#F8FAFC] hover:text-[#2563EB]">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </MarketingShell>
  );
}

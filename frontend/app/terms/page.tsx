import type { Metadata } from "next";
import Link from "next/link";
import MarketingShell from "../../components/marketing/MarketingShell";

export const metadata: Metadata = {
  title: "ข้อกำหนดการใช้บริการ — BKK AIR",
  description:
    "อ่านข้อกำหนดและเงื่อนไขการใช้บริการจัดเตรียมเอกสารสนับสนุนวีซ่าของ BKK AIR ขอบเขตบริการ นโยบายการคืนเงิน และข้อจำกัดความรับผิดชอบ",
  alternates: {
    canonical: "https://bkkair.com/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tableOfContents = [
  { id: "general-definitions", label: "1. ข้อมูลทั่วไปและคำนิยาม" },
  { id: "service-scope", label: "2. ขอบเขตของบริการ" },
  { id: "not-provided", label: "3. สิ่งที่ BKK AIR ไม่ได้ให้บริการ" },
  { id: "visa-disclaimer", label: "4. ข้อสำคัญเรื่องวีซ่าและสถานทูต" },
  { id: "ordering-payment", label: "5. ข้อกำหนดการสั่งซื้อและชำระเงิน" },
  { id: "delivery", label: "6. การส่งมอบเอกสาร" },
  { id: "edit-cancel", label: "7. การแก้ไขและยกเลิกออเดอร์" },
  { id: "refund-policy", label: "8. นโยบายการคืนเงิน" },
  { id: "user-responsibilities", label: "9. ความรับผิดชอบของผู้ใช้บริการ" },
  { id: "liability-limit", label: "10. ข้อจำกัดความรับผิดชอบของ BKK AIR" },
  { id: "intellectual-property", label: "11. ทรัพย์สินทางปัญญา" },
  { id: "service-termination", label: "12. การระงับหรือยกเลิกบริการ" },
  { id: "governing-law", label: "13. กฎหมายที่ใช้บังคับ" },
  { id: "terms-updates", label: "14. การเปลี่ยนแปลงข้อกำหนด" },
  { id: "contact", label: "15. ติดต่อเรา" },
  { id: "compliance-disclaimer", label: "Compliance Disclaimer" },
];

export default function TermsPage() {
  return (
    <MarketingShell>
      <article className="bg-white px-6 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl scroll-smooth">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="font-semibold text-slate-600 transition hover:text-[#2563EB]">
                  หน้าแรก
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li className="font-semibold text-slate-900">ข้อกำหนดการใช้บริการ</li>
            </ol>
          </nav>

          <header className="mt-6 rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#2563EB]">Terms of Service</p>
            <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              ข้อกำหนดการใช้บริการ
              <span className="mt-2 block text-xl font-extrabold text-slate-600 sm:text-2xl">Terms of Service</span>
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm sm:text-base">
              <span className="rounded-full bg-white px-3 py-1 font-bold text-slate-700 ring-1 ring-slate-200">อัปเดตล่าสุด: 18 พฤษภาคม 2569</span>
              <span className="rounded-full bg-white px-3 py-1 font-bold text-slate-700 ring-1 ring-slate-200">เวอร์ชัน: 1.0</span>
            </div>
            <div className="mt-5 space-y-2 text-base leading-relaxed text-slate-700 sm:text-lg">
              <p>ข้อกำหนดฉบับนี้ระบุสิ่งที่ BKK AIR ให้บริการ สิ่งที่ไม่ได้ให้บริการ</p>
              <p>และสิ่งที่คุณควรทราบก่อนใช้บริการ</p>
              <p>กรุณาอ่านให้ครบก่อนสั่งซื้อ เพราะการใช้บริการถือว่าคุณยอมรับข้อกำหนดเหล่านี้แล้ว</p>
            </div>
          </header>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-start">
            <main className="min-w-0 space-y-8">
              <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8" aria-labelledby="toc-heading">
                <h2 id="toc-heading" className="text-2xl font-black text-slate-900">
                  สารบัญข้อกำหนดการใช้บริการ
                </h2>
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
                <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="min-w-[680px] w-full border-collapse text-left text-sm sm:text-base">
                    <thead className="bg-[#F8FAFC]">
                      <tr>
                        <th className="border-b border-slate-200 px-4 py-3 font-extrabold text-slate-900">หมวด</th>
                        <th className="border-b border-slate-200 px-4 py-3 font-extrabold text-slate-900">หัวข้ออ้างอิง</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-700">
                      <tr>
                        <td className="border-b border-slate-200 px-4 py-3">บริการและข้อจำกัด</td>
                        <td className="border-b border-slate-200 px-4 py-3">ข้อ 2, 3, 4</td>
                      </tr>
                      <tr>
                        <td className="border-b border-slate-200 px-4 py-3">การสั่งซื้อและคืนเงิน</td>
                        <td className="border-b border-slate-200 px-4 py-3">ข้อ 5, 6, 7, 8</td>
                      </tr>
                      <tr>
                        <td className="border-b border-slate-200 px-4 py-3">ความรับผิดและกฎหมาย</td>
                        <td className="border-b border-slate-200 px-4 py-3">ข้อ 9, 10, 11, 12, 13, 14</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">ช่องทางติดต่อ</td>
                        <td className="px-4 py-3">ข้อ 15</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="rounded-3xl border border-emerald-200 bg-emerald-50/70 p-6 sm:p-8">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">สรุปสั้น ๆ</p>
                <h2 className="mt-2 text-2xl font-black text-slate-900">สิ่งที่ควรรู้ก่อนใช้บริการ BKK AIR</h2>
                <ul className="mt-6 grid gap-3 text-slate-800 sm:grid-cols-2">
                  <li className="rounded-2xl border border-emerald-200 bg-white p-4"><strong>เราทำอะไร</strong><br />จัดเตรียมเอกสาร PDF สนับสนุนวีซ่า เช่น ใบจองตั๋ว ใบจองโรงแรม แผนการเดินทาง</li>
                  <li className="rounded-2xl border border-emerald-200 bg-white p-4"><strong>เราไม่ได้ทำอะไร</strong><br />ไม่ได้จองตั๋วจริง ไม่ได้จองโรงแรมจริง และไม่ได้รับประกันว่าวีซ่าจะผ่าน</li>
                  <li className="rounded-2xl border border-emerald-200 bg-white p-4"><strong>วีซ่าผ่านหรือไม่</strong><br />การอนุมัติวีซ่าเป็นดุลยพินิจของสถานทูตเสมอ BKK AIR ไม่มีส่วนเกี่ยวข้องกับกระบวนการนั้น</li>
                  <li className="rounded-2xl border border-emerald-200 bg-white p-4"><strong>นโยบายคืนเงิน</strong><br />ยกเลิกก่อนเริ่ม = คืน 100% | หลังเริ่มจัดทำ = คืน 50% | ส่งแล้ว = ไม่คืน</li>
                  <li className="rounded-2xl border border-emerald-200 bg-white p-4 sm:col-span-2"><strong>ความถูกต้องของข้อมูล</strong><br />ชื่อ-นามสกุลต้องตรงหนังสือเดินทางทุกตัว เราจัดทำตามข้อมูลที่ได้รับ</li>
                </ul>
              </section>

              <section className="space-y-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
                <section id="general-definitions" className="scroll-mt-28 space-y-4">
                  <h2 className="text-2xl font-black text-slate-900">1. ข้อมูลทั่วไปและคำนิยาม</h2>
                  <p className="leading-relaxed text-slate-700">
                    BKK AIR (&quot;บริษัท&quot;, &quot;เรา&quot;, &quot;ของเรา&quot;) ดำเนินกิจการบริการจัดเตรียมเอกสารสนับสนุนวีซ่า ผ่านเว็บไซต์ bkkair.com
                  </p>
                  <p className="leading-relaxed text-slate-700">ในข้อกำหนดฉบับนี้:</p>
                  <ul className="list-disc space-y-2 pl-6 leading-relaxed text-slate-700 marker:text-[#2563EB]">
                    <li><strong>&quot;บริการ&quot;</strong> หมายถึง การจัดเตรียมเอกสารสนับสนุนวีซ่าในรูปแบบ PDF ได้แก่ ใบจองตั๋วเครื่องบิน ใบจองโรงแรม แผนการเดินทาง และเอกสารประกอบอื่น ๆ ที่ BKK AIR จัดให้</li>
                    <li><strong>&quot;เอกสารสนับสนุนวีซ่า&quot;</strong> หมายถึง เอกสาร PDF ที่จัดทำขึ้นเพื่อประกอบการยื่นขอวีซ่าเท่านั้น ไม่ใช่ตั๋วเครื่องบินจริง ใบจองโรงแรมจริง หรือสัญญาใด ๆ ที่มีผลผูกพันทางธุรกิจ</li>
                    <li><strong>&quot;ผู้ใช้บริการ&quot;</strong> หมายถึง บุคคลใด ๆ ที่เข้าใช้เว็บไซต์หรือสั่งซื้อบริการของ BKK AIR</li>
                    <li><strong>&quot;ออเดอร์&quot;</strong> หมายถึง คำสั่งซื้อบริการที่ผู้ใช้บริการยืนยันและชำระเงินแล้ว</li>
                  </ul>
                  <p className="leading-relaxed text-slate-700">การใช้บริการของ BKK AIR ไม่ว่าในรูปแบบใด ถือว่าผู้ใช้บริการได้อ่าน เข้าใจ และยอมรับข้อกำหนดฉบับนี้ทุกประการ</p>
                </section>

                <section id="service-scope" className="scroll-mt-28 space-y-4 border-t border-slate-200 pt-8">
                  <h2 className="text-2xl font-black text-slate-900">2. ขอบเขตของบริการ</h2>
                  <p className="leading-relaxed text-slate-700">BKK AIR ให้บริการจัดเตรียมเอกสารสนับสนุนการยื่นขอวีซ่า ดังต่อไปนี้:</p>
                  <h3 className="text-xl font-extrabold text-slate-900">2.1 ประเภทเอกสารที่ให้บริการ</h3>
                  <ul className="space-y-3 leading-relaxed text-slate-700">
                    <li><strong>ใบจองตั๋วเครื่องบิน (Flight Reservation Document)</strong><br />เอกสาร PDF แสดงรายละเอียดการเดินทางไป-กลับ ชื่อผู้โดยสาร วันเดินทาง เมืองต้นทางและปลายทาง และหมายเลขเที่ยวบิน</li>
                    <li><strong>ใบจองโรงแรม (Hotel Reservation Document)</strong><br />เอกสาร PDF แสดงรายละเอียดการจองที่พัก ชื่อผู้เข้าพัก ชื่อและที่อยู่โรงแรม วันเช็คอิน-เช็คเอาท์</li>
                    <li><strong>แผนการเดินทาง (Travel Itinerary)</strong><br />เอกสาร PDF แสดงกำหนดการเดินทางโดยละเอียด สถานที่ท่องเที่ยว และกิจกรรมตลอดการเดินทาง</li>
                    <li><strong>ชุดเอกสารครบเซ็ต (Complete Document Package)</strong><br />รวมเอกสารข้างต้นในไฟล์ PDF เดียว</li>
                    <li><strong>ประกันการเดินทาง (Travel Insurance)</strong><br />การให้คำแนะนำและสนับสนุนด้านเอกสารประกันการเดินทางตามที่สถานทูตกำหนด</li>
                  </ul>
                  <h3 className="text-xl font-extrabold text-slate-900">2.2 มาตรฐานการให้บริการ</h3>
                  <ul className="list-disc space-y-2 pl-6 leading-relaxed text-slate-700 marker:text-[#2563EB]">
                    <li>เอกสารทุกชิ้นตรวจสอบโดยทีมงานจริงก่อนส่ง</li>
                    <li>เอกสารจัดทำในรูปแบบ PDF</li>
                    <li>ส่งเอกสารทางอีเมลที่ผู้ใช้บริการระบุ</li>
                    <li>ระยะเวลาส่งภายใน 24 ชั่วโมงนับจากชำระเงินและข้อมูลครบถ้วน (แพ็กเกจมาตรฐาน)</li>
                  </ul>
                </section>

                <section id="not-provided" className="scroll-mt-28 space-y-4 border-t border-slate-200 pt-8">
                  <h2 className="text-2xl font-black text-slate-900">3. สิ่งที่ BKK AIR ไม่ได้ให้บริการ</h2>
                  <p className="leading-relaxed text-slate-700">เพื่อความชัดเจน BKK AIR <strong>ไม่ได้</strong> ให้บริการดังต่อไปนี้:</p>
                  <ul className="list-disc space-y-2 pl-6 leading-relaxed text-slate-700 marker:text-rose-500">
                    <li>การจองตั๋วเครื่องบินจริงหรือการซื้อตั๋วโดยสาร</li>
                    <li>การจองโรงแรมจริงหรือการชำระค่าที่พัก</li>
                    <li>การยื่นใบสมัครวีซ่าแทนผู้ใช้บริการ</li>
                    <li>การรับประกันการอนุมัติวีซ่าหรือผลการยื่นวีซ่า</li>
                    <li>การให้คำปรึกษากฎหมายด้านการเข้าเมืองหรือตรวจคนเข้าเมือง</li>
                    <li>การเป็นตัวแทนหรือนายหน้าวีซ่าที่ได้รับใบอนุญาต</li>
                    <li>การมีความสัมพันธ์หรือข้อตกลงใด ๆ กับสถานทูตหรือสถานกงสุลต่างประเทศ</li>
                    <li>การรับประกันว่าเอกสารที่จัดทำจะได้รับการยอมรับจากสถานทูต</li>
                  </ul>
                </section>

                <section id="visa-disclaimer" className="scroll-mt-28 space-y-4 border-t border-slate-200 pt-8">
                  <h2 className="text-2xl font-black text-slate-900">4. ข้อสำคัญเรื่องวีซ่าและสถานทูต</h2>
                  <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 font-bold text-slate-800">นี่คือข้อความที่สำคัญที่สุดในข้อกำหนดฉบับนี้ กรุณาอ่านอย่างละเอียด</p>
                  <h3 className="text-xl font-extrabold text-slate-900">4.1 BKK AIR เป็นบริการจัดเตรียมเอกสารสนับสนุนเท่านั้น</h3>
                  <p className="leading-relaxed text-slate-700">BKK AIR ให้บริการจัดเตรียมเอกสารสนับสนุนสำหรับประกอบการยื่นขอวีซ่าเท่านั้น เราไม่ใช่บริษัทหรือตัวแทนวีซ่า ไม่มีใบอนุญาตประกอบธุรกิจนายหน้าวีซ่า และไม่มีความสัมพันธ์พิเศษใด ๆ กับสถานทูต สถานกงสุล หรือหน่วยงานรัฐบาลต่างประเทศ</p>
                  <h3 className="text-xl font-extrabold text-slate-900">4.2 การอนุมัติวีซ่าเป็นดุลยพินิจของสถานทูตเสมอ</h3>
                  <p className="leading-relaxed text-slate-700">การอนุมัติหรือปฏิเสธวีซ่าเป็นดุลยพินิจเด็ดขาดของสถานทูตหรือสถานกงสุลของแต่ละประเทศ ซึ่งพิจารณาจากปัจจัยหลายประการ เช่น ประวัติการเดินทาง ฐานะทางการเงิน วัตถุประสงค์การเดินทาง และเอกสารประกอบทั้งหมด</p>
                  <p className="leading-relaxed text-slate-700">BKK AIR ไม่มีอำนาจ ไม่มีอิทธิพล และไม่มีส่วนเกี่ยวข้องใด ๆ กับกระบวนการตัดสินใจของสถานทูต</p>
                  <h3 className="text-xl font-extrabold text-slate-900">4.3 ไม่มีการรับประกันผลวีซ่า</h3>
                  <p className="leading-relaxed text-slate-700">BKK AIR ไม่รับประกันว่า:</p>
                  <ul className="list-disc space-y-2 pl-6 leading-relaxed text-slate-700 marker:text-[#2563EB]">
                    <li>วีซ่าจะได้รับการอนุมัติ</li>
                    <li>เอกสารที่จัดทำจะได้รับการยอมรับจากสถานทูต</li>
                    <li>การใช้บริการของเราจะเพิ่มโอกาสได้รับวีซ่า</li>
                  </ul>
                  <p className="leading-relaxed text-slate-700">หากวีซ่าถูกปฏิเสธไม่ว่าด้วยเหตุใด BKK AIR ไม่รับผิดชอบต่อความเสียหายใด ๆ ที่เกิดขึ้น</p>
                  <h3 className="text-xl font-extrabold text-slate-900">4.4 ข้อกำหนดเอกสารอาจเปลี่ยนแปลง</h3>
                  <p className="leading-relaxed text-slate-700">ข้อกำหนดด้านเอกสารของแต่ละสถานทูตอาจเปลี่ยนแปลงได้โดยไม่แจ้งล่วงหน้า ผู้ใช้บริการมีหน้าที่ตรวจสอบข้อกำหนดล่าสุดจากเว็บไซต์สถานทูตโดยตรงก่อนยื่น BKK AIR ไม่รับผิดชอบหากข้อกำหนดของสถานทูตเปลี่ยนแปลงหลังจากจัดทำเอกสาร</p>
                </section>

                <section id="ordering-payment" className="scroll-mt-28 space-y-4 border-t border-slate-200 pt-8">
                  <h2 className="text-2xl font-black text-slate-900">5. ข้อกำหนดการสั่งซื้อและชำระเงิน</h2>
                  <h3 className="text-xl font-extrabold text-slate-900">5.1 การยืนยันออเดอร์</h3>
                  <p className="leading-relaxed text-slate-700">ออเดอร์จะถือว่าสมบูรณ์เมื่อ:</p>
                  <ul className="list-disc space-y-2 pl-6 leading-relaxed text-slate-700 marker:text-[#2563EB]">
                    <li>ผู้ใช้บริการกรอกข้อมูลครบถ้วนและถูกต้อง</li>
                    <li>ชำระเงินสำเร็จ</li>
                    <li>ได้รับอีเมลยืนยันออเดอร์จาก BKK AIR</li>
                  </ul>
                  <h3 className="text-xl font-extrabold text-slate-900">5.2 ความถูกต้องของข้อมูล</h3>
                  <p className="leading-relaxed text-slate-700">ผู้ใช้บริการมีหน้าที่รับผิดชอบในความถูกต้องของข้อมูลที่กรอก โดยเฉพาะ:</p>
                  <ul className="list-disc space-y-2 pl-6 leading-relaxed text-slate-700 marker:text-[#2563EB]">
                    <li>ชื่อ-นามสกุลตามหนังสือเดินทาง (ตัวสะกดต้องถูกต้องทุกตัว)</li>
                    <li>วันเดินทาง</li>
                    <li>ประเทศปลายทาง</li>
                  </ul>
                  <p className="leading-relaxed text-slate-700">BKK AIR จัดทำเอกสารตามข้อมูลที่ได้รับ หากข้อมูลผิดพลาดเนื่องจากผู้ใช้บริการ อาจมีค่าใช้จ่ายในการแก้ไขตามที่กำหนด</p>
                  <h3 className="text-xl font-extrabold text-slate-900">5.3 ราคาและภาษี</h3>
                  <ul className="list-disc space-y-2 pl-6 leading-relaxed text-slate-700 marker:text-[#2563EB]">
                    <li>ราคาที่แสดงบนเว็บไซต์เป็นราคาสุดท้าย ไม่มีค่าใช้จ่ายแอบแฝง</li>
                    <li>ราคาอาจเปลี่ยนแปลงได้โดยไม่แจ้งล่วงหน้า แต่ราคาที่ใช้คือราคา ณ วันที่ยืนยันออเดอร์</li>
                    <li>TODO_REPLACE_REAL_INFO</li>
                  </ul>
                  <h3 className="text-xl font-extrabold text-slate-900">5.4 ช่องทางชำระเงิน</h3>
                  <p className="leading-relaxed text-slate-700">BKK AIR รับชำระเงินผ่านช่องทางที่กำหนด การชำระเงินทุกรายการผ่านระบบที่เข้ารหัสและปลอดภัย BKK AIR ไม่จัดเก็บข้อมูลบัตรเครดิตหรือบัญชีธนาคารของผู้ใช้บริการ</p>
                </section>

                <section id="delivery" className="scroll-mt-28 space-y-4 border-t border-slate-200 pt-8">
                  <h2 className="text-2xl font-black text-slate-900">6. การส่งมอบเอกสาร</h2>
                  <h3 className="text-xl font-extrabold text-slate-900">6.1 ช่องทางและระยะเวลา</h3>
                  <ul className="list-disc space-y-2 pl-6 leading-relaxed text-slate-700 marker:text-[#2563EB]">
                    <li>เอกสารส่งเป็นไฟล์ PDF ทางอีเมลที่ผู้ใช้บริการระบุ</li>
                    <li>แพ็กเกจมาตรฐาน: ภายใน 24 ชั่วโมงนับจากชำระเงินสำเร็จและข้อมูลครบถ้วน</li>
                    <li>แพ็กเกจ Express: ภายใน 3–6 ชั่วโมงในเวลาทำการ</li>
                  </ul>
                  <p className="leading-relaxed text-slate-700">ระยะเวลาดังกล่าวเป็นเป้าหมายการให้บริการ ไม่ใช่การรับประกันที่มีผลผูกพัน กรณีมีเหตุสุดวิสัย BKK AIR จะแจ้งให้ทราบและดำเนินการโดยเร็ว</p>
                  <h3 className="text-xl font-extrabold text-slate-900">6.2 ความรับผิดชอบของผู้ใช้บริการหลังรับเอกสาร</h3>
                  <p className="leading-relaxed text-slate-700">ผู้ใช้บริการมีหน้าที่:</p>
                  <ul className="list-disc space-y-2 pl-6 leading-relaxed text-slate-700 marker:text-[#2563EB]">
                    <li>ตรวจสอบความถูกต้องของเอกสารทันทีที่ได้รับ</li>
                    <li>แจ้งข้อผิดพลาดภายใน 48 ชั่วโมงหลังได้รับ</li>
                    <li>ตรวจสอบว่าเอกสารตรงตามข้อกำหนดของสถานทูตก่อนยื่น</li>
                  </ul>
                  <h3 className="text-xl font-extrabold text-slate-900">6.3 กรณีไม่ได้รับเอกสาร</h3>
                  <p className="leading-relaxed text-slate-700">หากไม่ได้รับเอกสารภายในระยะเวลาที่กำหนด กรุณา:</p>
                  <ol className="list-decimal space-y-2 pl-6 leading-relaxed text-slate-700 marker:font-semibold marker:text-[#2563EB]">
                    <li>ตรวจสอบกล่อง Spam/Junk Mail ก่อน</li>
                    <li>หากยังไม่ได้รับ ติดต่อทีมงานพร้อมหมายเลขออเดอร์ทันที</li>
                  </ol>
                </section>

                <section id="edit-cancel" className="scroll-mt-28 space-y-4 border-t border-slate-200 pt-8">
                  <h2 className="text-2xl font-black text-slate-900">7. การแก้ไขและยกเลิกออเดอร์</h2>
                  <h3 className="text-xl font-extrabold text-slate-900">7.1 การแก้ไขข้อมูล</h3>
                  <ul className="list-disc space-y-2 pl-6 leading-relaxed text-slate-700 marker:text-[#2563EB]">
                    <li>แก้ไขได้โดยไม่มีค่าใช้จ่าย หากแจ้งก่อนที่ทีมงานเริ่มจัดทำเอกสาร</li>
                    <li>หากแจ้งหลังจากเริ่มจัดทำแล้ว อาจมีค่าธรรมเนียมการแก้ไข TODO_REPLACE_REAL_INFO</li>
                    <li>ข้อมูลที่ผิดพลาดเนื่องจากผู้ใช้บริการ BKK AIR ไม่รับผิดชอบต่อผลที่ตามมา</li>
                  </ul>
                  <h3 className="text-xl font-extrabold text-slate-900">7.2 การยกเลิกออเดอร์</h3>
                  <ul className="list-disc space-y-2 pl-6 leading-relaxed text-slate-700 marker:text-[#2563EB]">
                    <li>ยกเลิกได้โดยไม่มีค่าใช้จ่าย หากแจ้งก่อนที่ทีมงานเริ่มจัดทำเอกสาร</li>
                    <li>หากทีมงานเริ่มจัดทำแล้ว ไม่สามารถยกเลิกได้ (ดูนโยบายคืนเงินในข้อ 8)</li>
                    <li>การยกเลิกต้องแจ้งเป็นลายลักษณ์อักษรทางอีเมลหรือช่องทางที่กำหนด</li>
                  </ul>
                </section>

                <section id="refund-policy" className="scroll-mt-28 space-y-4 border-t border-slate-200 pt-8">
                  <h2 className="text-2xl font-black text-slate-900">8. นโยบายการคืนเงิน</h2>
                  <p className="leading-relaxed text-slate-700">BKK AIR มีนโยบายการคืนเงินดังนี้:</p>
                  <div className="overflow-x-auto rounded-2xl border border-slate-200">
                    <table className="min-w-[680px] w-full border-collapse text-left text-sm sm:text-base">
                      <thead className="bg-[#F8FAFC]">
                        <tr>
                          <th className="border-b border-slate-200 px-4 py-3 font-extrabold text-slate-900">สถานการณ์</th>
                          <th className="border-b border-slate-200 px-4 py-3 font-extrabold text-slate-900">นโยบาย</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-700">
                        <tr><td className="border-b border-slate-200 px-4 py-3">ยกเลิกก่อนทีมงานเริ่มจัดทำ</td><td className="border-b border-slate-200 px-4 py-3">คืนเงิน 100%</td></tr>
                        <tr><td className="border-b border-slate-200 px-4 py-3">ทีมงานเริ่มจัดทำแล้ว แต่ยังไม่ส่ง</td><td className="border-b border-slate-200 px-4 py-3">คืนเงิน 50%</td></tr>
                        <tr><td className="border-b border-slate-200 px-4 py-3">ส่งเอกสารแล้ว ข้อมูลถูกต้องตามที่กรอก</td><td className="border-b border-slate-200 px-4 py-3">ไม่คืนเงิน</td></tr>
                        <tr><td className="border-b border-slate-200 px-4 py-3">เอกสารมีข้อผิดพลาดจาก BKK AIR</td><td className="border-b border-slate-200 px-4 py-3">แก้ไขฟรีหรือคืนเงิน 100%</td></tr>
                        <tr><td className="px-4 py-3">วีซ่าถูกปฏิเสธ</td><td className="px-4 py-3">ไม่คืนเงิน*</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="leading-relaxed text-slate-700">*การปฏิเสธวีซ่าเป็นดุลยพินิจของสถานทูต ซึ่งอยู่นอกเหนือการควบคุมของ BKK AIR</p>
                  <p className="leading-relaxed text-slate-700"><strong>ระยะเวลาคืนเงิน:</strong> 7–14 วันทำการหลังอนุมัติ ผ่านช่องทางการชำระเงินเดิม</p>
                  <p className="leading-relaxed text-slate-700"><strong>วิธีขอคืนเงิน:</strong> ติดต่อทีมงานทางอีเมลพร้อมหมายเลขออเดอร์และเหตุผล</p>
                </section>

                <section id="user-responsibilities" className="scroll-mt-28 space-y-4 border-t border-slate-200 pt-8">
                  <h2 className="text-2xl font-black text-slate-900">9. ความรับผิดชอบของผู้ใช้บริการ</h2>
                  <p className="leading-relaxed text-slate-700">ผู้ใช้บริการตกลงและรับรองว่า:</p>
                  <ul className="list-disc space-y-2 pl-6 leading-relaxed text-slate-700 marker:text-[#2563EB]">
                    <li><strong>9.1</strong> ข้อมูลทั้งหมดที่กรอกเป็นความจริงและถูกต้อง</li>
                    <li><strong>9.2</strong> ใช้บริการเพื่อวัตถุประสงค์ที่ถูกกฎหมายเท่านั้น</li>
                    <li><strong>9.3</strong> ไม่ใช้เอกสารที่ได้รับเพื่อวัตถุประสงค์ที่ฉ้อโกงหรือหลอกลวง</li>
                    <li><strong>9.4</strong> เข้าใจและยอมรับว่าเอกสารที่ได้รับเป็นเอกสารสนับสนุนวีซ่า ไม่ใช่ตั๋วหรือการจองจริง</li>
                    <li><strong>9.5</strong> รับทราบว่าการอนุมัติวีซ่าเป็นดุลยพินิจของสถานทูต และ BKK AIR ไม่รับประกันผลใด ๆ</li>
                    <li><strong>9.6</strong> มีอายุครบ 20 ปีบริบูรณ์ หรือได้รับความยินยอมจากผู้ปกครองโดยชอบธรรม</li>
                    <li><strong>9.7</strong> ไม่พยายามเข้าถึงระบบของ BKK AIR โดยไม่ได้รับอนุญาต</li>
                  </ul>
                  <p className="leading-relaxed text-slate-700">BKK AIR ขอสงวนสิทธิ์ปฏิเสธการให้บริการหากพบว่าผู้ใช้บริการละเมิดข้อกำหนดข้างต้น</p>
                </section>

                <section id="liability-limit" className="scroll-mt-28 space-y-4 border-t border-slate-200 pt-8">
                  <h2 className="text-2xl font-black text-slate-900">10. ข้อจำกัดความรับผิดชอบของ BKK AIR</h2>
                  <h3 className="text-xl font-extrabold text-slate-900">10.1 ขอบเขตความรับผิดชอบ</h3>
                  <p className="leading-relaxed text-slate-700">BKK AIR รับผิดชอบเฉพาะคุณภาพและความถูกต้องของเอกสารที่จัดทำตามข้อมูลที่ได้รับเท่านั้น</p>
                  <h3 className="text-xl font-extrabold text-slate-900">10.2 BKK AIR ไม่รับผิดชอบต่อ:</h3>
                  <ul className="list-disc space-y-2 pl-6 leading-relaxed text-slate-700 marker:text-[#2563EB]">
                    <li>การปฏิเสธวีซ่าหรือการไม่อนุมัติวีซ่าจากสถานทูต</li>
                    <li>ความเสียหายที่เกิดจากการที่ผู้ใช้บริการกรอกข้อมูลผิด</li>
                    <li>ความเสียหายที่เกิดจากการเปลี่ยนแปลงนโยบายของสถานทูตหลังจัดทำเอกสาร</li>
                    <li>ความล่าช้าหรือข้อผิดพลาดของระบบอีเมลที่อยู่นอกการควบคุมของเรา</li>
                    <li>ความเสียหายทางอ้อม ความเสียหายพิเศษ หรือการสูญเสียกำไรใด ๆ</li>
                    <li>ค่าใช้จ่ายที่เกิดจากการวางแผนการเดินทางที่ต้องยกเลิก เช่น ค่าตั๋ว ค่าโรงแรม หรือค่าทัวร์</li>
                  </ul>
                  <h3 className="text-xl font-extrabold text-slate-900">10.3 วงเงินความรับผิดสูงสุด</h3>
                  <p className="leading-relaxed text-slate-700">ในกรณีที่ BKK AIR มีความรับผิดใด ๆ วงเงินความรับผิดสูงสุดของ BKK AIR จำกัดอยู่ที่จำนวนเงินที่ผู้ใช้บริการชำระสำหรับออเดอร์นั้น ๆ เท่านั้น</p>
                </section>

                <section id="intellectual-property" className="scroll-mt-28 space-y-4 border-t border-slate-200 pt-8">
                  <h2 className="text-2xl font-black text-slate-900">11. ทรัพย์สินทางปัญญา</h2>
                  <p className="leading-relaxed text-slate-700">เนื้อหาทั้งหมดบนเว็บไซต์ BKK AIR รวมถึงแต่ไม่จำกัดเฉพาะ โลโก้ ข้อความ รูปภาพ การออกแบบ และรูปแบบเอกสาร เป็นทรัพย์สินของ BKK AIR และได้รับการคุ้มครองตามกฎหมายทรัพย์สินทางปัญญา</p>
                  <p className="leading-relaxed text-slate-700">ผู้ใช้บริการไม่มีสิทธิ์ทำซ้ำ ดัดแปลง เผยแพร่ หรือนำเนื้อหาใด ๆ ไปใช้เพื่อวัตถุประสงค์เชิงพาณิชย์โดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษร</p>
                </section>

                <section id="service-termination" className="scroll-mt-28 space-y-4 border-t border-slate-200 pt-8">
                  <h2 className="text-2xl font-black text-slate-900">12. การระงับหรือยกเลิกบริการ</h2>
                  <p className="leading-relaxed text-slate-700">BKK AIR ขอสงวนสิทธิ์ระงับหรือยกเลิกการให้บริการแก่ผู้ใช้บริการในกรณีดังต่อไปนี้:</p>
                  <ul className="list-disc space-y-2 pl-6 leading-relaxed text-slate-700 marker:text-[#2563EB]">
                    <li>ละเมิดข้อกำหนดการใช้บริการ</li>
                    <li>ให้ข้อมูลเท็จหรือปลอมแปลง</li>
                    <li>ใช้บริการเพื่อวัตถุประสงค์ที่ฉ้อโกง</li>
                    <li>ดำเนินการที่ก่อให้เกิดความเสียหายต่อ BKK AIR หรือผู้ใช้บริการรายอื่น</li>
                  </ul>
                  <p className="leading-relaxed text-slate-700">ในกรณีดังกล่าว BKK AIR ไม่จำเป็นต้องคืนเงิน และขอสงวนสิทธิ์ดำเนินการทางกฎหมายหากจำเป็น</p>
                </section>

                <section id="governing-law" className="scroll-mt-28 space-y-4 border-t border-slate-200 pt-8">
                  <h2 className="text-2xl font-black text-slate-900">13. กฎหมายที่ใช้บังคับ</h2>
                  <p className="leading-relaxed text-slate-700">ข้อกำหนดฉบับนี้อยู่ภายใต้และตีความตามกฎหมายแห่งราชอาณาจักรไทย</p>
                  <p className="leading-relaxed text-slate-700">ข้อพิพาทใด ๆ ที่เกิดขึ้นจากหรือเกี่ยวข้องกับข้อกำหนดฉบับนี้ ให้อยู่ในเขตอำนาจของศาลที่มีอำนาจในราชอาณาจักรไทย</p>
                </section>

                <section id="terms-updates" className="scroll-mt-28 space-y-4 border-t border-slate-200 pt-8">
                  <h2 className="text-2xl font-black text-slate-900">14. การเปลี่ยนแปลงข้อกำหนด</h2>
                  <p className="leading-relaxed text-slate-700">BKK AIR ขอสงวนสิทธิ์ปรับปรุงข้อกำหนดการใช้บริการได้ทุกเมื่อ โดยจะแจ้งให้ทราบผ่าน:</p>
                  <ul className="list-disc space-y-2 pl-6 leading-relaxed text-slate-700 marker:text-[#2563EB]">
                    <li>ประกาศบนเว็บไซต์</li>
                    <li>อีเมลแจ้งเตือน (สำหรับผู้ที่เคยใช้บริการ)</li>
                  </ul>
                  <p className="leading-relaxed text-slate-700">วันที่อัปเดตล่าสุดจะแสดงไว้ที่ด้านบนของหน้านี้เสมอ การใช้บริการต่อไปหลังจากการเปลี่ยนแปลงถือว่าคุณยอมรับข้อกำหนดฉบับใหม่</p>
                </section>

                <section id="contact" className="scroll-mt-28 space-y-4 border-t border-slate-200 pt-8">
                  <h2 className="text-2xl font-black text-slate-900">15. ติดต่อเรา</h2>
                  <p className="leading-relaxed text-slate-700">หากมีข้อสงสัยเกี่ยวกับข้อกำหนดการใช้บริการฉบับนี้ ติดต่อเราได้ที่:</p>
                  <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 text-slate-800">
                    <p className="text-lg font-black text-slate-900">BKK AIR</p>
                    <p className="mt-2 leading-relaxed">อีเมล: <a href="mailto:info@bkkair.com" className="font-bold text-[#2563EB] underline decoration-blue-200 underline-offset-4">info@bkkair.com</a></p>
                    <p className="leading-relaxed">LINE: @823lateh</p>
                    <p className="leading-relaxed">เวลาทำการ: จันทร์–เสาร์ 09:00–18:00 น.</p>
                  </div>
                  <p className="text-sm text-slate-600">อ่านเพิ่มเติมเกี่ยวกับข้อมูลส่วนบุคคลได้ที่ <Link href="/privacy-policy" className="font-bold text-[#2563EB]">นโยบายความเป็นส่วนตัว</Link></p>
                </section>
              </section>

              <section id="compliance-disclaimer" className="scroll-mt-28 space-y-4 rounded-3xl border border-slate-300 bg-slate-900 p-6 text-slate-100 sm:p-8">
                <h2 className="text-2xl font-black text-white">Page-Wide Compliance Disclaimer</h2>
                <blockquote className="rounded-2xl border border-slate-600 bg-slate-800 p-4 leading-relaxed">
                  BKK AIR ให้บริการเฉพาะการจัดเตรียมเอกสารสนับสนุนวีซ่าเท่านั้น
                  เราไม่ใช่ตัวแทนวีซ่า ไม่มีความสัมพันธ์พิเศษกับสถานทูต และไม่รับประกันการอนุมัติวีซ่า
                  การอนุมัติวีซ่าเป็นดุลยพินิจของสถานทูตหรือสถานกงสุลในทุกกรณี
                </blockquote>
                <blockquote className="rounded-2xl border border-amber-400/50 bg-amber-100 p-4 leading-relaxed text-slate-900">
                  ข้อกำหนดการใช้บริการฉบับนี้จัดทำขึ้นเพื่อเป็นแนวทางเบื้องต้นเท่านั้น
                  <strong> แนะนำอย่างยิ่งให้ทนายความหรือที่ปรึกษากฎหมายตรวจสอบและรับรองก่อนเผยแพร่จริง </strong>
                  โดยเฉพาะในส่วนของข้อจำกัดความรับผิด นโยบายคืนเงิน และข้อกำหนดตาม PDPA
                  เพื่อให้มั่นใจว่าถูกต้องครบถ้วนตามกฎหมายที่บังคับใช้ในขณะนั้น
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


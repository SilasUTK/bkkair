import type { Metadata } from "next";
import Link from "next/link";
import MarketingShell from "../../components/marketing/MarketingShell";

export const metadata: Metadata = {
  title: "ข้อกำหนดการใช้บริการ | BKK AIR",
  description: "ข้อกำหนดการใช้บริการ BKK AIR ขอบเขตบริการเอกสารยื่นวีซ่า การชำระเงิน การแก้ไข ยกเลิก และข้อจำกัดความรับผิดชอบ",
};

const terms = [
  ["ขอบเขตบริการ", "BKK AIR ให้บริการจัดเตรียมเอกสารสนับสนุนการยื่นวีซ่า เช่น ใบจองตั๋วเครื่องบิน ใบจองโรงแรม แผนการเดินทาง และเอกสารประกอบตามแพ็กเกจที่ลูกค้าเลือก"],
  ["ไม่ใช่สถานทูตหรือตัวแทนวีซ่า", "BKK AIR ไม่ใช่สถานทูต ไม่ใช่ศูนย์รับคำร้อง และไม่มีอำนาจในการพิจารณาหรือเร่งผลวีซ่า"],
  ["ไม่รับประกันผลวีซ่า", "ผลการพิจารณาวีซ่าเป็นดุลยพินิจของสถานทูตหรือศูนย์รับคำร้องเท่านั้น BKK AIR ไม่รับประกันผลการอนุมัติวีซ่า"],
  ["ไม่ใช่ระบบออกตั๋วจริงทันที", "บริการนี้ไม่ใช่ instant booking engine และไม่ออกตั๋วโดยสารจริงอัตโนมัติ ทุกคำขอต้องผ่านทีมงานตรวจสอบก่อนดำเนินการ"],
  ["การชำระเงิน", "ลูกค้าส่งคำขอเบื้องต้นได้โดยไม่ต้องชำระเงิน ทีมงานจะตรวจสอบและติดต่อกลับก่อน ลูกค้าชำระค่าบริการหลังยืนยันรายละเอียดกับทีมงานแล้ว"],
  ["การแก้ไขข้อมูล", "หากต้องแก้ไขเอกสารหลังได้รับไฟล์ กรุณาติดต่อทีมงานโดยเร็ว การแก้ไขขึ้นอยู่กับแพ็กเกจ ระยะเวลา และขอบเขตของข้อมูลที่ต้องเปลี่ยน"],
  ["การยกเลิก", "กรณีลูกค้ายกเลิกก่อนทีมงานเริ่มดำเนินการ สามารถแจ้งทีมงานเพื่อพิจารณาเงื่อนไขได้ หากเริ่มจัดเตรียมเอกสารแล้ว อาจไม่สามารถคืนค่าบริการทั้งหมดได้"],
  ["ความรับผิดชอบของลูกค้า", "ลูกค้าต้องให้ข้อมูลที่ถูกต้อง ครบถ้วน และเป็นปัจจุบัน BKK AIR ไม่รับผิดชอบต่อผลกระทบที่เกิดจากข้อมูลผิดพลาดหรือไม่ครบถ้วนจากลูกค้า"],
];

export default function TermsPage() {
  return (
    <MarketingShell>
      <article className="bg-[#F8FAFC] px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-black uppercase tracking-widest text-[#2563EB]">Terms of Service</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">ข้อกำหนดการใช้บริการ</h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            ข้อกำหนดนี้อธิบายขอบเขตบริการและเงื่อนไขที่เกี่ยวข้องกับการใช้บริการ BKK AIR โปรดอ่านก่อนส่งคำขอหรือชำระค่าบริการ
          </p>

          <div className="mt-10 space-y-5">
            {terms.map(([title, body]) => (
              <section key={title} className="rounded-2xl bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-black text-slate-900">{title}</h2>
                <p className="mt-3 leading-relaxed text-slate-600">{body}</p>
              </section>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-orange-100 bg-orange-50 p-6 text-orange-900">
            BKK AIR ไม่รับผิดชอบต่อผลพิจารณาจากสถานทูตหรือศูนย์รับคำร้อง และไม่รับประกันว่าเอกสารใดจะทำให้วีซ่าผ่านโดยอัตโนมัติ
          </div>

          <p className="mt-8 text-sm text-slate-500">
            มีคำถามเพิ่มเติม? ติดต่อเราได้ที่ <Link href="/contact" className="font-bold text-[#2563EB]">หน้าติดต่อเรา</Link>
          </p>
        </div>
      </article>
    </MarketingShell>
  );
}

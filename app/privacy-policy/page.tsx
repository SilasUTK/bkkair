import type { Metadata } from "next";
import Link from "next/link";
import MarketingShell from "../../components/marketing/MarketingShell";

export const metadata: Metadata = {
  title: "นโยบายความเป็นส่วนตัว | BKK AIR",
  description: "นโยบายความเป็นส่วนตัวของ BKK AIR สำหรับการเก็บ ใช้ เก็บรักษา และลบข้อมูลลูกค้าในการจัดเตรียมเอกสารยื่นวีซ่า",
};

const sections = [
  {
    title: "ข้อมูลที่เราเก็บ",
    body: "เราอาจเก็บชื่อ เบอร์โทร อีเมล LINE ID ข้อมูลการเดินทาง ประเทศปลายทาง ประเภทวีซ่า วันที่เดินทาง จำนวนผู้เดินทาง รายละเอียดคำขอ และข้อมูลเอกสารที่ลูกค้าส่งให้ทีมงานเพื่อใช้ประกอบการจัดเตรียมเอกสาร",
  },
  {
    title: "วัตถุประสงค์การใช้ข้อมูล",
    body: "ข้อมูลถูกใช้เพื่อรับคำขอ ตรวจสอบรายละเอียด ติดต่อกลับ จัดเตรียมเอกสารสนับสนุนการยื่นวีซ่า ส่งไฟล์ให้ลูกค้า ให้บริการหลังการขาย และปรับปรุงคุณภาพบริการของ BKK AIR",
  },
  {
    title: "การเปิดเผยข้อมูล",
    body: "เราไม่ขายข้อมูลส่วนตัวของลูกค้า และไม่เปิดเผยข้อมูลกับบุคคลภายนอก ยกเว้นเมื่อจำเป็นต่อการให้บริการ ตามที่ลูกค้ายืนยัน หรือเมื่อกฎหมายกำหนด",
  },
  {
    title: "การเก็บรักษาและการลบข้อมูล",
    body: "เราจะเก็บข้อมูลเท่าที่จำเป็นต่อการให้บริการ การตรวจสอบภายใน และข้อกำหนดทางกฎหมาย ลูกค้าสามารถติดต่อเพื่อขอลบหรือปรับปรุงข้อมูลได้ตามช่องทางที่ระบุไว้",
  },
  {
    title: "ความปลอดภัย",
    body: "ทีมงานจำกัดการเข้าถึงข้อมูลเฉพาะผู้ที่เกี่ยวข้องกับการให้บริการ และใช้มาตรการที่เหมาะสมเพื่อลดความเสี่ยงจากการเข้าถึงโดยไม่ได้รับอนุญาต",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <MarketingShell>
      <article className="bg-white px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-black uppercase tracking-widest text-[#2563EB]">Privacy Policy</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">นโยบายความเป็นส่วนตัว</h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            BKK AIR ให้ความสำคัญกับข้อมูลส่วนตัวของลูกค้า นโยบายนี้อธิบายว่าเราเก็บ ใช้ และดูแลข้อมูลอย่างไรในบริการจัดเตรียมเอกสารสนับสนุนการยื่นวีซ่า
          </p>

          <div className="mt-10 space-y-6">
            {sections.map((section) => (
              <section key={section.title} className="rounded-2xl border border-slate-100 bg-[#F8FAFC] p-6">
                <h2 className="text-2xl font-black text-slate-900">{section.title}</h2>
                <p className="mt-3 leading-relaxed text-slate-600">{section.body}</p>
              </section>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-blue-100 bg-blue-50 p-6 text-blue-900">
            <h2 className="text-xl font-black">ติดต่อเรื่อง privacy</h2>
            <p className="mt-2 leading-relaxed">
              หากต้องการสอบถาม แก้ไข หรือลบข้อมูล กรุณาติดต่อ LINE OA: @823lateh หรือ Email: info@bkkair.com
            </p>
          </div>

          <p className="mt-8 text-sm text-slate-500">
            อ่านเพิ่มเติมเกี่ยวกับขอบเขตบริการได้ที่ <Link href="/terms" className="font-bold text-[#2563EB]">ข้อกำหนดการใช้บริการ</Link>
          </p>
        </div>
      </article>
    </MarketingShell>
  );
}


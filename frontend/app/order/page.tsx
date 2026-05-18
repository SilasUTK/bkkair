import type { Metadata } from "next";
import MarketingShell from "../../components/marketing/MarketingShell";
import OrderForm from "../../components/marketing/OrderForm";

export const metadata: Metadata = {
  title: "Order Form | ส่งคำขอเอกสารยื่นวีซ่า | BKK AIR",
  description: "ส่งคำขอแพ็กเกจเอกสารยื่นวีซ่า BKK AIR ทีมงานจะตรวจสอบและติดต่อกลับก่อนดำเนินการ ไม่มี auto-confirmation",
};

export default function OrderPage({ searchParams }: { searchParams: { package?: string; country?: string } }) {
  return (
    <MarketingShell>
      <section className="bg-[#F8FAFC] px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-[#003d82]">Request Form</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Order Form</h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              ส่งข้อมูลเบื้องต้นให้ทีมงานตรวจสอบก่อน ไม่มีการชำระเงินก่อนตรวจสอบ และไม่มีการยืนยัน booking อัตโนมัติ
            </p>
            <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5 text-sm leading-relaxed text-blue-900">
              Flow: ส่งคำขอ → ทีมงานตรวจสอบ → ติดต่อกลับ → ลูกค้ายืนยันและชำระเงิน → ทีมงานจัดเตรียมเอกสาร → ส่งไฟล์ PDF
            </div>
          </div>
          <OrderForm initialPackage={searchParams.package || ""} initialCountry={searchParams.country || ""} />
        </div>
      </section>
    </MarketingShell>
  );
}


import { ArrowRight, Globe2 } from "lucide-react";

const supportedCountries = [
  {
    name: "Schengen",
    slug: "schengen",
    description: "รองรับเอกสารสนับสนุนวีซ่ากลุ่มเชงเก้น พร้อมตรวจสอบก่อนส่ง"
  },
  {
    name: "UK",
    slug: "uk",
    description: "เตรียมเอกสารยื่นวีซ่าอังกฤษในรูปแบบ PDF พร้อมยื่น"
  },
  {
    name: "USA",
    slug: "usa",
    description: "บริการเอกสารสนับสนุนวีซ่าอเมริกา พร้อมทีมงานช่วยตรวจความครบถ้วน"
  },
  {
    name: "Canada",
    slug: "canada",
    description: "เอกสารสำรองสำหรับยื่นวีซ่าแคนาดา จัดทำตามมาตรฐานที่ใช้งานจริง"
  },
  {
    name: "Australia",
    slug: "australia",
    description: "รองรับคำขอวีซ่าออสเตรเลีย พร้อมส่งเอกสารภายในเวลาที่กำหนด"
  },
  {
    name: "Japan",
    slug: "japan",
    description: "จัดเตรียมเอกสารสำหรับยื่นวีซ่าญี่ปุ่นโดยทีมงานตรวจสอบทุกคำขอ"
  },
  {
    name: "South Korea",
    slug: "korea",
    description: "บริการเอกสารสนับสนุนวีซ่าเกาหลีใต้ พร้อมคู่มือใช้งานเบื้องต้น"
  }
];

export default function SupportedCountriesSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 font-sans lg:py-24" aria-labelledby="supported-countries-heading">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-24 top-10 h-56 w-56 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-orange-100/50 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="supported-countries-heading" className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            ประเทศที่รองรับบริการเอกสารยื่นวีซ่า
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            เลือกประเทศปลายทางเพื่อเริ่มคำขอ ทีมงานจะช่วยจัดเตรียมเอกสารสนับสนุนวีซ่าให้เหมาะกับแผนเดินทางของคุณ
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="รายการประเทศที่รองรับ">
          {supportedCountries.map((country) => (
            <li key={country.slug} className="flex h-full flex-col rounded-2xl border border-blue-100/80 bg-white/80 p-5 shadow-[0_10px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <Globe2 className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{country.name}</h3>
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{country.description}</p>

              <a
                href={`/order?country=${country.slug}`}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-blue-700 transition-colors hover:text-blue-800"
              >
                เริ่มคำขอสำหรับ {country.name}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

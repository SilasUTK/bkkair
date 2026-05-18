import { ArrowRight } from "lucide-react";

const supportedCountries = [
  {
    flag: "🇪🇺",
    name: "กลุ่มประเทศ Schengen",
    slug: "schengen",
    description: "ฝรั่งเศส เยอรมนี อิตาลี สเปน และอีก 22 ประเทศ",
    requirements: "ต้องการ: ใบจองตั๋ว ใบจองโรงแรม แผนการเดินทาง และประกันการเดินทาง",
  },
  {
    flag: "🇬🇧",
    name: "สหราชอาณาจักร (UK)",
    slug: "uk",
    description: "เอกสารสนับสนุนสำหรับวีซ่า UK เอกสารที่ต้องสอดคล้องกับแผนเดินทาง",
    requirements: "ต้องการ: ใบจองตั๋ว ใบจองโรงแรม และแผนการเดินทาง",
  },
  {
    flag: "🇺🇸",
    name: "สหรัฐอเมริกา (USA)",
    slug: "usa",
    description: "เอกสารประกอบวีซ่าอเมริกาเอกสารสำหรับอธิบายแผนเดินทางเบื้องต้น",
    requirements: "ต้องการ: หลักฐานแผนการเดินทางและที่พัก",
  },
  {
    flag: "🇨🇦",
    name: "แคนาดา",
    slug: "canada",
    description: "เอกสารประกอบคำขอวีซ่าแคนาดาที่แสดงแผนเดินทางและที่พักชัดเจน",
    requirements: "ต้องการ: ใบจองตั๋วและหลักฐานที่พัก",
  },
  {
    flag: "🇦🇺",
    name: "ออสเตรเลีย",
    slug: "australia",
    description: "เอกสารสนับสนุนสำหรับแสดงกำหนดการเดินทางไปออสเตรเลีย",
    requirements: "ต้องการ: ใบจองตั๋วและแผนการเดินทาง",
  },
  {
    flag: "🇯🇵",
    name: "ญี่ปุ่น",
    slug: "japan",
    description: "เอกสารสำหรับแสดงแผนเที่ยวญี่ปุ่นและกำหนดการเดินทางแบบเป็นลำดับ",
    requirements: "ต้องการ: ใบจองตั๋วและแผนการเดินทางโดยละเอียด",
  },
  {
    flag: "🇰🇷",
    name: "เกาหลีใต้",
    slug: "korea",
    description: "เอกสารสนับสนุนสำหรับยื่นวีซ่าเกาหลีใต้ พร้อมข้อมูลตั๋วและที่พัก",
    requirements: "ต้องการ: ใบจองตั๋วและที่พัก",
  },
  {
    flag: "🌏",
    name: "และอีกหลายประเทศ",
    slug: "other",
    description: "ติดต่อทีมงานเพื่อสอบถามประเทศที่ต้องการ",
    requirements: "ทีมงานจะช่วยประเมินเอกสารที่เหมาะสมกับปลายทางของคุณ",
  },
];

export default function SupportedCountriesSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 md:py-24 font-sans" aria-labelledby="supported-countries-heading">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-24 top-10 h-56 w-56 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-orange-100/50 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-primary-dark">
            ประเทศที่ให้บริการ
          </p>
          <h2 id="supported-countries-heading" className="text-4xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl">
            ครอบคลุมวีซ่าหลายประเทศปลายทาง
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            ไม่ว่าคุณจะยื่นวีซ่าที่ไหน BKK AIR จัดเตรียมเอกสารสนับสนุนให้ตรงตามรูปแบบที่สถานทูตแต่ละประเทศคาดหวัง ทั้งวีซ่า Schengen เอกสาร, วีซ่า UK เอกสาร, วีซ่าอเมริกาเอกสาร, flight reservation for Schengen visa, hotel booking for UK visa และ embassy-ready documents Thailand
          </p>
        </div>

          <ul className="mt-12 grid grid-cols-1 gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-label="รายการประเทศที่รองรับ">
          {supportedCountries.map((country) => (
            <li key={country.slug} className="flex h-full flex-col rounded-2xl border border-blue-100/80 bg-white/80 p-6 shadow-[0_10px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm transition-shadow duration-300 md:hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                  <span aria-hidden="true">{country.flag}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold leading-snug text-slate-900">{country.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{country.description}</p>
                </div>
              </div>

              <p className="mt-4 flex-1 rounded-2xl border border-blue-100/70 bg-blue-50/60 px-4 py-3 text-sm font-semibold leading-relaxed text-slate-700">
                {country.requirements}
              </p>
            </li>
          ))}
        </ul>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 rounded-3xl border border-blue-100/80 bg-white/85 px-6 py-6 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur sm:flex-row sm:text-left">
          <p className="text-base font-bold text-slate-800">
            ไม่แน่ใจว่าต้องใช้เอกสารอะไร?
          </p>
          <a
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-accent-orange px-5 py-3 text-sm font-black text-white shadow-lg shadow-orange-200 transition-all duration-300 hover:bg-accent-hover sm:w-auto"
          >
            ปรึกษาทีมงานฟรี
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

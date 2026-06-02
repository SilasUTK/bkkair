import { ArrowRight } from "lucide-react";

const supportedCountries = [
  {
    flag: "🇪🇺",
    name: "กลุ่มประเทศ Schengen",
    slug: "schengen",
    description: "ฝรั่งเศส เยอรมนี อิตาลี สเปน และอีก 22 ประเทศ",
    docs: ["flight reservation", "hotel reservation", "travel itinerary", "travel insurance"],
  },
  {
    flag: "🇬🇧",
    name: "สหราชอาณาจักร (UK)",
    slug: "uk",
    description: "เอกสารสนับสนุนที่สอดคล้องกับแผนเดินทาง",
    docs: ["flight reservation", "hotel reservation", "travel itinerary"],
  },
  {
    flag: "🇺🇸",
    name: "สหรัฐอเมริกา (USA)",
    slug: "usa",
    description: "เอกสารประกอบเพื่ออธิบายแผนเดินทางเบื้องต้น",
    docs: ["flight reservation", "hotel reservation", "travel itinerary"],
  },
  {
    flag: "🇨🇦",
    name: "แคนาดา",
    slug: "canada",
    description: "เอกสารประกอบที่แสดงแผนเดินทางและที่พักชัดเจน",
    docs: ["flight reservation", "hotel reservation"],
  },
  {
    flag: "🇦🇺",
    name: "ออสเตรเลีย",
    slug: "australia",
    description: "เอกสารสนับสนุนสำหรับแสดงกำหนดการเดินทาง",
    docs: ["flight reservation", "travel itinerary"],
  },
  {
    flag: "🇯🇵",
    name: "ญี่ปุ่น",
    slug: "japan",
    description: "เอกสารสำหรับแสดงแผนเที่ยวและกำหนดการเดินทาง",
    docs: ["flight reservation", "travel itinerary"],
  },
  {
    flag: "🇰🇷",
    name: "เกาหลีใต้",
    slug: "korea",
    description: "เอกสารสนับสนุนพร้อมข้อมูลตั๋วและที่พัก",
    docs: ["flight reservation", "hotel reservation"],
  },
  {
    flag: "🌏",
    name: "และอีกหลายประเทศ",
    slug: "other",
    description: "ติดต่อทีมงานเพื่อสอบถามประเทศที่ต้องการ",
    docs: ["ประเมินตามปลายทาง", "แนะนำรายการเอกสารที่เหมาะสม"],
  },
];

export default function SupportedCountriesSection() {
  return (
    <section id="countries" className="relative w-full overflow-hidden bg-white py-14 font-sans md:py-16" aria-labelledby="supported-countries-heading">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-24 top-10 h-56 w-56 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-orange-100/50 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-primary-dark sm:text-sm">
            ประเทศที่ให้บริการ
          </p>
          <h2 id="supported-countries-heading" className="mt-2 text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            ครอบคลุมวีซ่าหลายประเทศปลายทาง
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            ไม่ว่าคุณจะยื่นวีซ่าประเทศใด BKK AIR ช่วยจัดเตรียมเอกสารให้สอดคล้องกับรูปแบบที่สถานทูตคาดหวัง ทั้งเอกสารสำหรับ Schengen, UK, US และบริการ flight reservation กับ hotel reservation
          </p>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="รายการประเทศที่รองรับ">
          {supportedCountries.map((country) => (
            <li key={country.slug} className="flex h-full flex-col rounded-2xl border border-blue-100/80 bg-white/85 p-5 shadow-[0_8px_28px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-all duration-300 md:hover:-translate-y-0.5 md:hover:border-blue-200 md:hover:shadow-[0_14px_42px_rgba(15,23,42,0.08)]">
              <div className="flex items-start gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-base">
                  <span aria-hidden="true">{country.flag}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold leading-snug text-slate-900">{country.name}</h3>
                  <p className="mt-1 text-sm leading-snug text-slate-600">{country.description}</p>
                </div>
              </div>

              <div className="mt-3 flex-1 rounded-xl border border-blue-100/70 bg-blue-50/60 px-3.5 py-3">
                <p className="text-[11px] font-black uppercase tracking-wider text-slate-500">เอกสารที่ใช้บ่อย</p>
                <ul className="mt-1.5 space-y-1">
                  {country.docs.map((doc) => (
                    <li key={doc} className="text-[13px] font-semibold leading-snug text-slate-700">
                      <span className="mr-2 text-emerald-600">✓</span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 rounded-2xl border border-blue-100/80 bg-white/85 px-5 py-5 text-center shadow-[0_14px_44px_rgba(15,23,42,0.07)] backdrop-blur sm:flex-row sm:text-left">
          <p className="text-sm font-bold text-slate-800 sm:text-base">
            ไม่แน่ใจว่าต้องใช้เอกสารอะไร?
          </p>
          <a
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent-orange px-5 py-2.5 text-sm font-black text-white shadow-lg shadow-orange-200 transition-all duration-300 hover:bg-accent-hover sm:w-auto"
          >
            ปรึกษาทีมงานฟรี
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

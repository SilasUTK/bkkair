"use client";

import { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Globe2 } from "lucide-react";

const supportedCountries = [
  {
    flag: "🇪🇺",
    code: "EU",
    region: "ยุโรป (Schengen)",
    name: "กลุ่มประเทศ Schengen",
    slug: "schengen",
    image: "/images/countries/eu.jpg",
    description: "France, Germany, Italy, Spain, Netherlands, Switzerland + others",
    docs: ["flight reservation", "hotel reservation", "travel itinerary", "travel insurance"],
  },
  {
    flag: "🇬🇧",
    code: "GB",
    region: "สหราชอาณาจักร",
    name: "สหราชอาณาจักร (UK)",
    slug: "uk",
    image: "/images/countries/uk.jpg",
    description: "เอกสารสนับสนุนที่สอดคล้องกับแผนเดินทาง",
    docs: ["flight reservation", "hotel reservation", "travel itinerary"],
  },
  {
    flag: "🇺🇸",
    code: "US",
    region: "อเมริกาเหนือ",
    name: "สหรัฐอเมริกา (USA)",
    slug: "usa",
    image: "/images/countries/us.jpg",
    description: "เอกสารประกอบเพื่ออธิบายแผนเดินทางเบื้องต้น",
    docs: ["flight reservation", "hotel reservation", "travel itinerary"],
  },
  {
    flag: "🇨🇦",
    code: "CA",
    region: "อเมริกาเหนือ",
    name: "แคนาดา",
    slug: "canada",
    image: "/images/countries/ca.jpg",
    description: "เอกสารประกอบที่แสดงแผนเดินทางและที่พักชัดเจน",
    docs: ["flight reservation", "hotel reservation"],
  },
  {
    flag: "🇦🇺",
    code: "AU",
    region: "โอเชียเนีย",
    name: "ออสเตรเลีย",
    slug: "australia",
    image: "/images/countries/au.jpg",
    description: "Australia, New Zealand",
    docs: ["flight reservation", "travel itinerary"],
  },
  {
    flag: "🇯🇵",
    code: "JP",
    region: "เอเชีย",
    name: "ญี่ปุ่น",
    slug: "japan",
    image: "/images/countries/jp.jpg",
    description: "เอกสารสำหรับแสดงแผนเที่ยวและกำหนดการเดินทาง",
    docs: ["flight reservation", "travel itinerary"],
  },
  {
    flag: "🇰🇷",
    code: "KR",
    region: "เอเชีย",
    name: "เกาหลีใต้",
    slug: "korea",
    image: "/images/countries/kr.jpg",
    description: "Japan, South Korea, China + others",
    docs: ["flight reservation", "hotel reservation"],
  },
  {
    flag: "🌏",
    code: "GL",
    region: "ประเทศอื่น ๆ",
    name: "และอีกหลายประเทศ",
    slug: "other",
    image: "/images/countries/world.jpg",
    description: "ติดต่อทีมงานเพื่อสอบถามประเทศที่ต้องการ",
    docs: ["ประเมินตามปลายทาง", "แนะนำรายการเอกสารที่เหมาะสม"],
  },
];

export default function SupportedCountriesSection() {
  const scrollRef = useRef(null);
  const dragRef = useRef({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
  });

  const scrollByCard = (direction) => {
    const slider = scrollRef.current;
    if (!slider) return;

    const firstCard = slider.querySelector("li");
    const cardWidth = firstCard?.getBoundingClientRect().width || 360;
    slider.scrollBy({ left: direction * (cardWidth + 16), behavior: "smooth" });
  };

  const handlePointerDown = (event) => {
    const slider = scrollRef.current;
    if (!slider) return;

    dragRef.current = {
      isDragging: true,
      startX: event.clientX,
      scrollLeft: slider.scrollLeft,
    };
    slider.setPointerCapture?.(event.pointerId);
  };

  const handlePointerMove = (event) => {
    const slider = scrollRef.current;
    if (!slider || !dragRef.current.isDragging) return;

    const distance = event.clientX - dragRef.current.startX;
    slider.scrollLeft = dragRef.current.scrollLeft - distance;
  };

  const handlePointerUp = (event) => {
    const slider = scrollRef.current;
    if (!slider) return;

    dragRef.current.isDragging = false;
    slider.releasePointerCapture?.(event.pointerId);
  };

  return (
    <section
      id="countries"
      className="relative w-full overflow-hidden bg-[#07111f] bg-[linear-gradient(135deg,#07111f_0%,#0b1b33_52%,#07111f_100%)] py-16 font-sans md:py-20"
      aria-labelledby="supported-countries-heading"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-cyan-400/12 blur-[110px]" />
        <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-[#10288C]/40 blur-[95px]" />
        <div className="absolute -right-24 bottom-12 h-80 w-80 rounded-full bg-blue-500/15 blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.12),transparent_34%),linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:auto,48px_48px,48px_48px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-1.5 text-sm font-bold text-slate-200 shadow-[0_18px_50px_rgba(2,8,23,0.25)] backdrop-blur-xl">
            <Globe2 className="h-4 w-4 text-cyan-300" aria-hidden="true" />
            <span className="text-xs uppercase tracking-widest text-slate-300">ประเทศที่ให้บริการ</span>
          </div>
          <h2 id="supported-countries-heading" className="mx-auto max-w-2xl text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            รองรับประเทศหลักสำหรับ{" "}
            <span className="whitespace-nowrap bg-gradient-to-r from-blue-300 via-sky-300 to-cyan-200 bg-clip-text text-transparent">
              การยื่นวีซ่า
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-relaxed text-slate-300">
            ไม่ว่าคุณจะยื่นวีซ่าที่ไหน เราช่วยเตรียมเอกสารสนับสนุนให้ครบตามที่สถานทูตต้องการ
          </p>
        </div>

        <div className="relative mt-10">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="เลื่อนไปทางซ้าย"
            className="absolute left-0 top-1/2 z-20 hidden h-11 w-11 -translate-x-3 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/[0.10] text-white shadow-[0_18px_46px_rgba(2,8,23,0.35)] backdrop-blur-xl transition hover:border-cyan-200/40 hover:bg-white/[0.16] hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-200/40 md:flex lg:-translate-x-5"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2.4} />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="เลื่อนไปทางขวา"
            className="absolute right-0 top-1/2 z-20 hidden h-11 w-11 translate-x-3 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/[0.10] text-white shadow-[0_18px_46px_rgba(2,8,23,0.35)] backdrop-blur-xl transition hover:border-cyan-200/40 hover:bg-white/[0.16] hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-200/40 md:flex lg:translate-x-5"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2.4} />
          </button>

          <ul
            ref={scrollRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className="no-scrollbar flex cursor-grab snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth scroll-px-1 pb-3 active:cursor-grabbing md:scroll-px-2 lg:scroll-px-3"
            aria-label="รายการประเทศที่รองรับ"
          >
            {supportedCountries.map((country, index) => {
              const isMainDestination = index < 3;

              return (
                <li
                  key={country.slug}
                  className={`relative flex min-h-[18rem] basis-[86%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border bg-white/[0.06] p-4 shadow-[0_16px_54px_rgba(2,8,23,0.28)] backdrop-blur-xl transition-all duration-300 sm:basis-[22rem] md:basis-[calc((100%_-_1rem)_/_2)] lg:basis-[calc((100%_-_2rem)_/_3)] md:hover:-translate-y-0.5 md:hover:bg-white/[0.08] ${
                    isMainDestination
                      ? "border-cyan-200/25 shadow-[0_18px_60px_rgba(14,165,233,0.16)] md:hover:border-cyan-200/40 md:hover:shadow-[0_22px_70px_rgba(14,165,233,0.22)]"
                      : "border-white/[0.12] md:hover:border-cyan-200/25 md:hover:shadow-[0_20px_62px_rgba(14,165,233,0.14)]"
                  }`}
                >
                  {country.image && (
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-70"
                      style={{ backgroundImage: `url(${country.image})` }}
                      aria-hidden="true"
                    />
                  )}
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(7,17,31,0.91),rgba(11,27,51,0.82)_58%,rgba(7,17,31,0.92))]" aria-hidden="true" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(56,189,248,0.18),transparent_32%),radial-gradient(circle_at_85%_85%,rgba(59,130,246,0.14),transparent_36%)]" aria-hidden="true" />
                  <div className="absolute inset-x-0 top-0 h-px bg-white/20" aria-hidden="true" />

                  <div className="relative z-10 flex items-start gap-3">
                    <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl border border-cyan-200/25 bg-cyan-300/15 text-[11px] font-black text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-md">
                      <span className="leading-none">{country.code}</span>
                      <span className="mt-0.5 text-sm leading-none" aria-hidden="true">{country.flag}</span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-black uppercase tracking-wider text-cyan-200/90">{country.region}</p>
                      <h3 className="text-xl font-bold leading-snug text-white">{country.name}</h3>
                      <p className="mt-1 text-sm leading-snug text-slate-200">{country.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10 mt-auto rounded-xl border border-white/[0.12] bg-[#07111f]/65 px-3.5 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md">
                    <p className="text-[11px] font-black uppercase tracking-wider text-slate-300">เอกสารที่ใช้บ่อย</p>
                    <ul className="mt-1.5 space-y-1">
                      {country.docs.map((doc) => (
                        <li key={doc} className="text-[13px] font-semibold leading-snug text-slate-100">
                          <span className="mr-2 text-emerald-300">✓</span>
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/[0.14] bg-white/[0.07] px-5 py-5 text-center shadow-[0_20px_70px_rgba(2,8,23,0.38)] backdrop-blur-xl sm:flex-row sm:text-left">
          <p className="text-sm font-bold text-slate-100 sm:text-base">
            หากประเทศปลายทางของคุณไม่อยู่ในรายการ ติดต่อเราได้ที่ LINE @823lateh เพื่อสอบถามเพิ่มเติม
          </p>
          <a
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent-orange px-5 py-2.5 text-sm font-black text-white shadow-[0_14px_34px_rgba(255,87,34,0.34)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-[0_18px_42px_rgba(255,87,34,0.42)] sm:w-auto"
          >
            ปรึกษาทีมงานฟรี
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import {
  CheckCircle2,
  Clock,
  Package,
  PlaneTakeoff,
  ShieldCheck,
  Hotel,
  FileText,
  MapPinned,
  Layers3,
} from "lucide-react";

const cardVisuals = {
  flight: {
    gradient: "from-[#0B1220] via-blue-800 to-sky-500",
    accent: "bg-sky-300/25",
    line: "border-sky-200/50",
  },
  hotel: {
    gradient: "from-[#1f2937] via-orange-700 to-amber-400",
    accent: "bg-orange-200/30",
    line: "border-orange-200/50",
  },
  itinerary: {
    gradient: "from-[#0B1220] via-emerald-800 to-teal-400",
    accent: "bg-emerald-200/25",
    line: "border-emerald-200/50",
  },
  "flight-hotel": {
    gradient: "from-[#0B1220] via-cyan-800 to-blue-400",
    accent: "bg-cyan-200/25",
    line: "border-cyan-200/50",
  },
  bundle3: {
    gradient: "from-[#111827] via-indigo-800 to-violet-500",
    accent: "bg-violet-200/25",
    line: "border-violet-200/50",
  },
  complete: {
    gradient: "from-orange-600 via-[#FF5722] to-amber-400",
    accent: "bg-white/20",
    line: "border-orange-100/60",
  },
  insurance: {
    gradient: "from-[#0B1220] via-rose-800 to-pink-500",
    accent: "bg-rose-200/25",
    line: "border-rose-200/50",
  },
};

const packages = [
  {
    id: "flight",
    subtitle: "Flight Reservation",
    name: "ใบจองตั๋วเครื่องบิน",
    price: "฿500",
    unit: "ต่อคน",
    popular: false,
    icon: PlaneTakeoff,
    orderLink: "/order?package=flight",
    description: "เหมาะสำหรับผู้ที่ต้องการ flight reservation เพื่อยื่นวีซ่า",
    theme: {
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200",
      shadow: "shadow-blue-200/40",
      btnClass:
        "bg-white text-blue-600 border-2 border-blue-200 hover:bg-blue-50 hover:border-blue-500",
      checkIcon: "text-blue-500",
    },
    features: [
      { text: "ใบจองตั๋วเครื่องบินไป-กลับ (Round Trip)", included: true },
      { text: "แสดงชื่อผู้โดยสารตามหนังสือเดินทาง", included: true },
      { text: "แสดงวันเดินทาง เมืองต้นทาง และปลายทาง", included: true },
      { text: "แสดงหมายเลขเที่ยวบินและสายการบิน", included: true },
      { text: "PDF มาตรฐานสถานทูต ตรวจสอบโดยทีมงาน", included: true },
    ],
  },

  {
    id: "hotel",
    subtitle: "Hotel Reservation",
    name: "ใบจองโรงแรม",
    price: "฿500",
    unit: "ต่อคน",
    popular: false,
    icon: Hotel,
    orderLink: "/order?package=hotel",
    description: "เหมาะสำหรับผู้ที่ต้องการหลักฐานที่พักสำหรับยื่นวีซ่า",
    theme: {
      color: "text-[#FF5722]",
      bg: "bg-orange-50",
      border: "border-orange-200",
      shadow: "shadow-orange-200/40",
      btnClass:
        "bg-white text-accent-orange border-2 border-orange-200 hover:bg-orange-50 hover:border-orange-500",
      checkIcon: "text-orange-500",
    },
    features: [
      { text: "ใบจองโรงแรมตลอดระยะเวลาการเดินทาง", included: true },
      { text: "แสดงชื่อผู้เข้าพักตามหนังสือเดินทาง", included: true },
      { text: "แสดงชื่อโรงแรม ที่อยู่ วันเช็คอิน-เอาท์", included: true },
      { text: "ครอบคลุมทุกคืนของการเดินทาง", included: true },
      { text: "PDF มาตรฐานสถานทูต ตรวจสอบโดยทีมงาน", included: true },
    ],
  },

  {
    id: "itinerary",
    subtitle: "Travel Itinerary",
    name: "เอกสารแผนการเดินทาง",
    price: "฿700",
    unit: "ต่อคน",
    popular: false,
    icon: MapPinned,
    orderLink: "/order?package=itinerary",
    description: "เหมาะสำหรับผู้ที่ต้องการแผนการเดินทางรายวันประกอบเอกสารยื่นวีซ่า",
    theme: {
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      shadow: "shadow-emerald-200/40",
      btnClass:
        "bg-white text-emerald-600 border-2 border-emerald-200 hover:bg-emerald-50 hover:border-emerald-500",
      checkIcon: "text-emerald-500",
    },
    features: [
      { text: "แผนการเดินทางรายวัน (Day-by-Day Itinerary)", included: true },
      { text: "ระบุสถานที่พัก เมือง และกิจกรรมหลัก", included: true },
      { text: "รูปแบบที่สถานทูตส่วนใหญ่ยอมรับ", included: true },
      { text: "ปรับแต่งตามเส้นทางจริงของคุณ", included: true },
      { text: "PDF มาตรฐานสถานทูต ตรวจสอบโดยทีมงาน", included: true },
    ],
  },

  {
    id: "flight-hotel",
    subtitle: "Flight + Hotel Bundle",
    name: "ใบจองตั๋ว + ใบจองโรงแรม",
    originalPrice: "฿1,000",
    price: "฿800",
    save: "฿200",
    unit: "ต่อคน",
    popular: false,
    icon: Layers3,
    orderLink: "/order?package=flight-hotel",
    description: "แพ็กเกจรวมสำหรับผู้ที่ต้องใช้ทั้งหลักฐานการเดินทางและที่พัก",
    theme: {
      color: "text-sky-600",
      bg: "bg-sky-50",
      border: "border-sky-200",
      shadow: "shadow-sky-200/40",
      btnClass:
        "bg-white text-sky-600 border-2 border-sky-200 hover:bg-sky-50 hover:border-sky-500",
      checkIcon: "text-sky-500",
    },
    features: [
      { text: "ใบจองตั๋วเครื่องบินไป-กลับ", included: true },
      { text: "ใบจองโรงแรมตลอดระยะเวลาการเดินทาง", included: true },
      { text: "ข้อมูลผู้เดินทางตรงตามหนังสือเดินทาง", included: true },
      { text: "PDF พร้อมยื่นสถานทูต", included: true },
      { text: "ประหยัดกว่าสั่งแยก ฿200", included: true },
    ],
  },

  {
    id: "bundle3",
    subtitle: "Flight + Hotel + Itinerary",
    name: "ใบจองตั๋ว + โรงแรม + แผนการเดินทาง",
    originalPrice: "฿1,700",
    price: "฿1,500",
    save: "฿200",
    unit: "ต่อคน",
    popular: false,
    icon: FileText,
    orderLink: "/order?package=bundle3",
    description: "ชุดเอกสารหลักสำหรับยื่นวีซ่าที่ต้องการความสอดคล้องทั้งแผนและใบจอง",
    theme: {
      color: "text-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-200",
      shadow: "shadow-purple-200/40",
      btnClass:
        "bg-white text-purple-600 border-2 border-purple-200 hover:bg-purple-50 hover:border-purple-500",
      checkIcon: "text-purple-500",
    },
    features: [
      { text: "ใบจองตั๋วเครื่องบินไป-กลับ", included: true },
      { text: "ใบจองโรงแรมตลอดระยะเวลาการเดินทาง", included: true },
      { text: "แผนการเดินทางรายวัน", included: true },
      { text: "เอกสารทั้ง 3 รายการสอดคล้องกัน", included: true },
      { text: "ประหยัดกว่าสั่งแยก ฿200", included: true },
    ],
  },

  {
    id: "complete",
    subtitle: "Complete Visa Support Package",
    name: "ชุดเอกสารครบเซ็ต",
    originalPrice: "฿4,200",
    price: "฿3,500",
    save: "฿700",
    unit: "ต่อคน",
    popular: true,
    icon: Package,
    orderLink: "/order?package=complete",
    description: "บริการดูแลครบวงจรสำหรับผู้ที่ต้องการเอกสารพร้อมยื่นแบบมั่นใจ",
    theme: {
      color: "text-[#FF5722]",
      bg: "bg-orange-50",
      border: "border-orange-500",
      shadow: "shadow-orange-500/30",
      btnClass:
        "bg-gradient-to-r from-accent-orange to-orange-500 text-white shadow-lg shadow-orange-500/40 hover:-translate-y-1 hover:shadow-orange-500/50",
      checkIcon: "text-orange-500",
    },
    features: [
      { text: "ใบจองตั๋วเครื่องบินไป-กลับ", included: true },
      { text: "ใบจองโรงแรมตลอดระยะเวลาการเดินทาง", included: true },
      { text: "แผนการเดินทางรายวัน", included: true },
      { text: "เอกสารแนะนำตัว Cover Letter", included: true },
      { text: "คำแนะนำเอกสารที่ต้องใช้ทั้งหมดเฉพาะประเทศ", included: true },
      { text: "PDF มาตรฐานสถานทูต", included: true },
      { text: "ตรวจสอบโดยทีมงานจริง", included: true },
    ],
  },

  {
    id: "insurance",
    subtitle: "MSIG Travel Insurance",
    name: "ประกันการเดินทาง MSIG",
    pricePrefix: "เริ่มต้น",
    price: "฿190",
    unit: "ขึ้นอยู่กับแผนและระยะเวลา",
    popular: false,
    icon: ShieldCheck,
    orderLink: "/insurance",
    description: "ประกันการเดินทางสำหรับประกอบการยื่นวีซ่า โดยเฉพาะประเทศที่กำหนดให้มีประกัน",
    theme: {
      color: "text-rose-600",
      bg: "bg-rose-50",
      border: "border-rose-200",
      shadow: "shadow-rose-200/40",
      btnClass:
        "bg-white text-rose-600 border-2 border-rose-200 hover:bg-rose-50 hover:border-rose-500",
      checkIcon: "text-rose-500",
    },
    features: [
      { text: "แผนประกันการเดินทาง MSIG", included: true },
      { text: "ใช้ประกอบเอกสารยื่นวีซ่าได้ทุกแผน", included: true },
      { text: "ราคาเริ่มต้น ฿190", included: true },
      { text: "คำแนะนำการเลือกประกันที่เหมาะสม", included: true },
      { text: "ขึ้นอยู่กับแผนและระยะเวลาการเดินทาง", included: true },
    ],
  },
];

export default function ServicePackages() {
  const scrollRef = useRef(null);
  const dragRef = useRef({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
  });

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -380, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 380, behavior: "smooth" });
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

  function goToOrder(orderLink) {
    window.location.href = orderLink;
  }

  return (
    <section
      id="packages"
      className="relative w-full overflow-hidden bg-bg-light py-20 md:py-28"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-blue-50 blur-[80px]" />
        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-orange-50 blur-[80px]" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100/70 bg-white/85 px-4 py-2 text-sm font-bold text-slate-700 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
            <Package className="h-4 w-4 text-emerald-500" />
            แพ็กเกจบริการ
          </div>

          <h2 className="text-4xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl">
            เลือกแพ็กเกจเอกสารยื่นวีซ่าที่เหมาะกับคุณ
          </h2>

          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            ทุกแพ็กเกจแสดงราคาจริงต่อคน ตรวจสอบโดยทีมงานจริง และส่งเป็น PDF มาตรฐานสถานทูตภายใน 24 ชั่วโมง
          </p>
          <p className="mt-3 text-sm font-bold text-slate-400">
            เลื่อนซ้าย–ขวา หรือกดลูกศรเพื่อดูแพ็กเกจทั้งหมด
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={scrollLeft}
              aria-label="เลื่อนไปทางซ้าย"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-xl font-black text-slate-800 shadow-[0_12px_30px_rgba(15,23,42,0.10)] transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 hover:shadow-[0_16px_36px_rgba(37,99,235,0.14)]"
            >
              ←
            </button>
            <button
              type="button"
              onClick={scrollRight}
              aria-label="เลื่อนไปทางขวา"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-xl font-black text-slate-800 shadow-[0_12px_30px_rgba(15,23,42,0.10)] transition hover:-translate-y-0.5 hover:border-orange-200 hover:text-orange-600 hover:shadow-[0_16px_36px_rgba(249,115,22,0.16)]"
            >
              →
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="relative">
          <div
            ref={scrollRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className="no-scrollbar flex cursor-grab snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth scroll-px-6 px-6 pb-8 pt-6 active:cursor-grabbing lg:scroll-px-10 lg:px-10"
          >
            {packages.map((pkg) => {
              const Icon = pkg.icon;
              const visual = cardVisuals[pkg.id];

              return (
                <article
                  key={pkg.id}
                  className={`relative isolate flex min-h-full w-[300px] shrink-0 snap-start flex-col overflow-hidden rounded-3xl bg-white transition-all duration-300 sm:w-[340px] lg:w-[360px] ${
                    pkg.popular
                      ? `border-2 ${pkg.theme.border} shadow-[0_28px_80px_rgba(255,87,34,0.24)]`
                      : "border border-slate-200 shadow-xl shadow-slate-200/70 hover:-translate-y-1 hover:shadow-[0_22px_56px_rgba(15,23,42,0.13)]"
                  }`}
                >
                  {pkg.popular && (
                    <div className="pointer-events-none absolute inset-0 -z-10 rounded-[1.7rem] bg-orange-300/30 blur-2xl" />
                  )}

                  <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${visual.gradient}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.28),transparent_28%),radial-gradient(circle_at_80%_25%,rgba(255,255,255,0.16),transparent_26%)]" />
                    <div className="absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-white/15 blur-xl" />
                    <div className={`absolute left-5 top-5 h-20 w-20 rounded-3xl ${visual.accent} backdrop-blur`} />
                    <div className="absolute right-5 top-5 rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white/90 backdrop-blur">
                      {pkg.subtitle}
                    </div>

                    {pkg.popular && (
                      <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-white px-4 py-1.5 text-[10px] font-black uppercase tracking-wider text-orange-700 shadow-[0_10px_28px_rgba(124,45,18,0.22)]">
                        Recommended
                      </div>
                    )}

                    <div className="absolute bottom-5 left-5 right-5">
                      <div className={`mb-4 h-px w-full border-t ${visual.line}`} />
                      <div className="flex items-end justify-between gap-4">
                        <div className="max-w-[210px]">
                          <h3 className="text-2xl font-black leading-tight text-white">
                            {pkg.name}
                          </h3>
                        </div>
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/25 bg-white text-slate-900 shadow-[0_14px_34px_rgba(15,23,42,0.20)]">
                          <Icon className={`h-7 w-7 ${pkg.theme.color}`} strokeWidth={2} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col bg-white px-6 pb-6 pt-6 md:px-7 md:pb-7">
                    <p className="min-h-[48px] text-sm leading-relaxed text-slate-500">
                      {pkg.description}
                    </p>
                    <PriceBlock pkg={pkg} />

                    <ul className="mt-6 space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          {feature.included ? (
                            <div
                              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white ${pkg.theme.checkIcon}`}
                            >
                              <CheckCircle2
                                className="h-3.5 w-3.5"
                                strokeWidth={3}
                              />
                            </div>
                          ) : (
                            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100">
                              <div className="h-0.5 w-2.5 rounded-full bg-slate-300" />
                            </div>
                          )}

                          <span
                            className={`text-sm leading-relaxed ${
                              feature.included
                                ? "text-slate-700"
                                : "text-slate-400 line-through"
                            }`}
                          >
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-600">
                      <Clock className={`h-3.5 w-3.5 ${pkg.theme.checkIcon}`} />
                      ส่งภายใน 24 ชั่วโมง
                    </div>

                    <div className="mt-auto pt-6">
                      <button
                        onClick={() => goToOrder(pkg.orderLink)}
                        className={`w-full rounded-2xl py-3.5 text-sm font-bold transition-all duration-300 ${pkg.theme.btnClass}`}
                      >
                        สั่งเลย
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
            <div className="w-2 shrink-0 sm:w-4 lg:w-6" />
          </div>

          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-bg-light to-transparent sm:w-14" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-bg-light to-transparent sm:w-14" />
        </div>

        {/* Footer */}
        <div className="mt-14 rounded-3xl border border-blue-100/70 bg-white/85 px-6 py-6 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
          <p className="text-sm font-semibold leading-relaxed text-slate-600">
            ราคาเป็นราคาต่อคน ยกเว้นประกันการเดินทางที่ขึ้นอยู่กับแผนและระยะเวลาการเดินทาง
          </p>
          <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-600">
            BKK AIR ให้บริการเฉพาะการจัดเตรียมเอกสารสนับสนุนเท่านั้น การอนุมัติวีซ่าขึ้นอยู่กับดุลยพินิจของสถานทูต
          </p>
        </div>
      </div>
    </section>
  );
}

function PriceBlock({ pkg, inverse = false }) {
  const mutedClass = inverse ? "text-orange-100/80" : "text-slate-400";
  const priceClass = inverse ? "text-white" : "text-slate-950";
  const saveClass = inverse ? "bg-white/15 text-white" : "bg-orange-50 text-orange-700";

  return (
    <div className="mt-5">
      {pkg.originalPrice && (
        <div className={`text-xs font-bold line-through ${mutedClass}`}>{pkg.originalPrice}</div>
      )}
      <div className="flex items-end justify-center gap-2">
        {pkg.pricePrefix && <span className={`pb-1 text-xs font-bold ${mutedClass}`}>{pkg.pricePrefix}</span>}
        <span className={`text-4xl font-black tracking-tight ${priceClass}`}>{pkg.price}</span>
      </div>
      <div className={`mt-1 text-xs font-bold ${mutedClass}`}>{pkg.unit}</div>
      {pkg.save && (
        <div className={`mx-auto mt-3 inline-flex rounded-full px-3 py-1 text-xs font-black ${saveClass}`}>
          ประหยัด {pkg.save}
        </div>
      )}
    </div>
  );
}

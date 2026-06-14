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
  ChevronLeft,
  ChevronRight,
  Info,
} from "lucide-react";
import { event as trackEvent } from "../../lib/gtag";

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
    subtitle: "FLIGHT",
    name: "ใบจองตั๋วเครื่องบิน",
    tag: "ใช้ได้กับทุกประเทศ",
    price: "฿500",
    unit: "ต่อคน",
    popular: false,
    icon: PlaneTakeoff,
    orderLink: "/order?package=flight",
    description: "เอกสาร PDF แสดงรายละเอียดเส้นทางบิน วันเดินทาง เมืองต้นทางและปลายทาง และหมายเลขเที่ยวบิน เหมาะสำหรับประกอบการยื่นวีซ่าทุกประเทศ",
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
      { text: "เอกสารใบจองตั๋วเครื่องบินไป-กลับ (Round Trip)", included: true },
      { text: "แสดงชื่อผู้โดยสารตามหนังสือเดินทาง", included: true },
      { text: "แสดงวันเดินทาง เมืองต้นทาง และปลายทาง", included: true },
      { text: "แสดงหมายเลขเที่ยวบินและสายการบิน", included: true },
      { text: "PDF สำหรับประกอบการยื่นวีซ่า ตรวจสอบโดยทีมงาน", included: true },
    ],
  },

  {
    id: "hotel",
    subtitle: "HOTEL",
    name: "ใบจองโรงแรม",
    tag: "ยอดนิยม",
    price: "฿500",
    unit: "ต่อคน",
    popular: false,
    icon: Hotel,
    orderLink: "/order?package=hotel",
    description: "เอกสาร PDF แสดงรายละเอียดที่พัก วันเช็คอิน-เช็คเอาท์ ที่อยู่โรงแรม และชื่อผู้เข้าพัก ครบตามที่สถานทูตต้องการ",
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
      { text: "เอกสารใบจองโรงแรมตามระยะเวลาการเดินทาง", included: true },
      { text: "แสดงชื่อผู้เข้าพักตามหนังสือเดินทาง", included: true },
      { text: "แสดงชื่อโรงแรม ที่อยู่ วันเช็คอิน-เอาท์", included: true },
      { text: "ครอบคลุมทุกคืนของการเดินทาง", included: true },
      { text: "PDF สำหรับประกอบการยื่นวีซ่า ตรวจสอบโดยทีมงาน", included: true },
    ],
  },

  {
    id: "itinerary",
    subtitle: "ITINERARY",
    name: "แผนการเดินทาง",
    tag: "แนะนำสำหรับ Schengen",
    price: "฿700",
    unit: "ต่อคน",
    popular: false,
    icon: MapPinned,
    orderLink: "/order?package=itinerary",
    description: "เอกสาร PDF แสดงกำหนดการเดินทางวันต่อวัน สถานที่ท่องเที่ยว และกิจกรรมตลอดการเดินทาง",
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
      { text: "รูปแบบที่ใช้ประกอบแฟ้มเอกสารวีซ่าได้", included: true },
      { text: "ปรับแต่งตามเส้นทางจริงของคุณ", included: true },
      { text: "PDF สำหรับประกอบการยื่นวีซ่า ตรวจสอบโดยทีมงาน", included: true },
    ],
  },

  {
    id: "flight-hotel",
    subtitle: "FLIGHT + HOTEL",
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
      { text: "เอกสารใบจองตั๋วเครื่องบินไป-กลับ", included: true },
      { text: "เอกสารใบจองโรงแรมตามระยะเวลาการเดินทาง", included: true },
      { text: "ข้อมูลผู้เดินทางตรงตามหนังสือเดินทาง", included: true },
      { text: "PDF สำหรับประกอบการยื่นวีซ่า", included: true },
      { text: "ประหยัดกว่าสั่งแยก ฿200", included: true },
    ],
  },

  {
    id: "bundle3",
    subtitle: "COMPLETE",
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
      { text: "เอกสารใบจองตั๋วเครื่องบินไป-กลับ", included: true },
      { text: "เอกสารใบจองโรงแรมตามระยะเวลาการเดินทาง", included: true },
      { text: "แผนการเดินทางรายวัน", included: true },
      { text: "เอกสารทั้ง 3 รายการสอดคล้องกัน", included: true },
      { text: "ประหยัดกว่าสั่งแยก ฿200", included: true },
    ],
  },

  {
    id: "complete",
    subtitle: "RECOMMENDED",
    name: "ชุดเอกสารครบชุด",
    tag: "ประหยัดที่สุด",
    originalPrice: "฿4,200",
    price: "฿3,500",
    save: "฿700",
    unit: "ต่อคน",
    popular: true,
    icon: Package,
    orderLink: "/order?package=complete",
    description: "รวมใบจองตั๋ว + ใบจองโรงแรม + แผนการเดินทาง ในไฟล์ PDF เดียว ครบทุกอย่างที่สถานทูตต้องการ ในราคาพิเศษกว่าซื้อแยก",
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
      { text: "เอกสารใบจองตั๋วเครื่องบินไป-กลับ", included: true },
      { text: "เอกสารใบจองโรงแรมตามระยะเวลาการเดินทาง", included: true },
      { text: "แผนการเดินทางรายวัน", included: true },
      { text: "เอกสารแนะนำตัว Cover Letter", included: true },
      { text: "คำแนะนำเอกสารที่ต้องใช้ทั้งหมดเฉพาะประเทศ", included: true },
      { text: "PDF สำหรับประกอบการยื่นวีซ่า", included: true },
      { text: "ตรวจสอบโดยทีมงานจริง", included: true },
    ],
  },

  {
    id: "insurance",
    subtitle: "INSURANCE",
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

const packageDisclaimer =
  "เอกสารนี้ใช้สำหรับสนับสนุนการยื่นวีซ่าเท่านั้น ไม่ใช่ตั๋วหรือการจองจริง ราคาต่อคน และผลวีซ่าขึ้นอยู่กับดุลยพินิจของสถานทูต";

export default function ServicePackages() {
  const scrollRef = useRef(null);
  const dragRef = useRef({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
  });

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -280, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 280, behavior: "smooth" });
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

  function goToOrder(pkg) {
    if (pkg.orderLink.startsWith("/order?package=")) {
      trackEvent("package_select", {
        package: pkg.id,
        location: "home_service_packages",
      });
    }

    window.location.href = pkg.orderLink;
  }

  function goToPackageDetails(packageId) {
    const detailId = `package-detail-${packageId}`;
    const detailSection = document.getElementById(detailId);

    if (detailSection) {
      detailSection.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    window.history.pushState(null, "", `#${detailId}`);
    window.dispatchEvent(
      new CustomEvent("bkkair:package-learn-more", {
        detail: { packageId, targetId: detailId },
      })
    );
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
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-blue-100/70 bg-white/90 px-4 py-1.5 text-sm font-bold text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur">
            <Package className="h-4 w-4 text-orange-500" aria-hidden="true" />
            <span className="text-xs uppercase tracking-widest text-slate-500">แพ็กเกจบริการ</span>
          </div>

          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
            เลือกแพ็กเกจเอกสารที่{" "}
            <span className="whitespace-nowrap bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
              เหมาะกับคุณ
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-relaxed text-slate-600">
            เลือกเอกสารที่คุณต้องการ หรือสั่งแบบครบชุดในราคาพิเศษ
          </p>
        </div>

        {/* Cards */}
        <div className="relative">
          <button
            type="button"
            onClick={scrollLeft}
            aria-label="เลื่อนไปทางซ้าย"
            className="absolute left-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/85 text-slate-800 shadow-[0_14px_34px_rgba(15,23,42,0.16)] backdrop-blur-md transition hover:scale-105 hover:border-blue-100 hover:bg-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 sm:left-2 sm:h-11 sm:w-11 lg:left-3"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2.4} />
          </button>
          <button
            type="button"
            onClick={scrollRight}
            aria-label="เลื่อนไปทางขวา"
            className="absolute right-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/85 text-slate-800 shadow-[0_14px_34px_rgba(15,23,42,0.16)] backdrop-blur-md transition hover:scale-105 hover:border-orange-100 hover:bg-white hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-200 sm:right-2 sm:h-11 sm:w-11 lg:right-3"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2.4} />
          </button>

          <div
            ref={scrollRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className="no-scrollbar flex cursor-grab snap-x snap-mandatory items-stretch gap-4 overflow-x-auto scroll-smooth scroll-px-8 px-8 pb-6 pt-5 active:cursor-grabbing md:scroll-px-10 md:px-10 lg:gap-4 lg:scroll-px-12 lg:px-12"
          >
            {packages.map((pkg) => {
              const Icon = pkg.icon;
              const visual = cardVisuals[pkg.id];

              return (
                <article
                  key={pkg.id}
                  className={`relative isolate flex min-h-full basis-[calc(100vw_-_5.5rem)] shrink-0 snap-start flex-col overflow-hidden rounded-3xl bg-white transition-all duration-300 sm:basis-[20rem] md:basis-[calc((100%_-_1rem)_/_2)] lg:basis-[calc((100%_-_3rem)_/_4)] xl:basis-[calc((100%_-_4rem)_/_5)] ${
                    pkg.popular
                      ? `border-2 ${pkg.theme.border} shadow-[0_28px_80px_rgba(255,87,34,0.24)]`
                      : "border border-slate-200 shadow-xl shadow-slate-200/70 hover:-translate-y-1 hover:shadow-[0_22px_56px_rgba(15,23,42,0.13)]"
                  }`}
                >
                  {pkg.popular && (
                    <div className="pointer-events-none absolute inset-0 -z-10 rounded-[1.7rem] bg-orange-300/30 blur-2xl" />
                  )}

                  <div className={`relative h-[148px] overflow-hidden bg-gradient-to-br ${visual.gradient}`}>
                    <div className="pointer-events-none absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.22),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.12),transparent_24%)]" />
                    <div className="pointer-events-none absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-white/12 blur-xl" />
                    <div className={`pointer-events-none absolute left-4 top-4 h-14 w-14 rounded-3xl ${visual.accent} opacity-80 backdrop-blur`} />

                    <div className="relative z-10 flex h-full flex-col justify-between p-4">
                      <div className="flex min-w-0 items-start justify-between gap-3">
                        <div className="min-w-0">
                          {pkg.popular && (
                            <div className="mb-1.5 inline-flex max-w-full rounded-full border border-white/30 bg-white px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-orange-700 shadow-[0_10px_28px_rgba(124,45,18,0.18)]">
                              Recommended
                            </div>
                          )}
                        </div>
                        <div className="max-w-[8.5rem] truncate whitespace-nowrap rounded-full border border-white/25 bg-white/15 px-2.5 py-1 text-[9px] font-black uppercase tracking-widest text-white/90 backdrop-blur">
                          {pkg.subtitle}
                        </div>
                      </div>

                      <div>
                        <div className={`mb-3 h-px w-full border-t ${visual.line} opacity-70`} />
                        <div className="relative min-h-[3.25rem] pr-16">
                          <h3 className="line-clamp-2 text-xl font-black leading-tight text-white lg:text-[1.14rem] xl:text-[1.04rem]">
                            {pkg.name}
                          </h3>
                          <div className="absolute bottom-0 right-0 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/25 bg-white text-slate-900 shadow-[0_14px_34px_rgba(15,23,42,0.20)] sm:h-12 sm:w-12">
                            <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${pkg.theme.color}`} strokeWidth={2} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col bg-white px-5 pb-4 pt-5">
                    <div className="flex flex-col">
                      <p className="min-h-[4.75rem] text-[13px] leading-relaxed text-slate-500 md:min-h-[5.5rem]">
                        {pkg.description}
                      </p>

                      <div className="mt-3 flex min-h-[1.625rem] items-start">
                        {pkg.tag && (
                          <p className="inline-flex w-fit rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-black text-slate-600">
                            {pkg.tag}
                          </p>
                        )}
                      </div>

                      <PriceBlock pkg={pkg} />
                    </div>

                    <ul className="mt-4 space-y-1.5">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
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
                            className={`text-[12.5px] leading-relaxed ${
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

                    <div className="mt-3 inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-600">
                      <Clock className={`h-3.5 w-3.5 ${pkg.theme.checkIcon}`} />
                      ทีมงานแจ้งเวลาส่งหลังตรวจคำขอ
                    </div>

                    <div className="mt-auto pt-3">
                      <p className="mb-3 flex items-start gap-2 text-[10.5px] font-medium leading-relaxed text-slate-500">
                        <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400" aria-hidden="true" />
                        <span>{packageDisclaimer}</span>
                      </p>
                      <div className="space-y-2">
                        <button
                          type="button"
                          onClick={() => goToPackageDetails(pkg.id)}
                          onPointerDown={(event) => event.stopPropagation()}
                          className="w-full rounded-2xl border border-slate-200 bg-white py-2.5 text-sm font-black text-slate-600 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200"
                        >
                          Learn More
                        </button>
                        <button
                          type="button"
                          onClick={() => goToOrder(pkg)}
                          onPointerDown={(event) => event.stopPropagation()}
                          className={`w-full rounded-2xl py-3 text-sm font-bold transition-all duration-300 ${pkg.theme.btnClass}`}
                        >
                          จองตอนนี้เลย
                        </button>
                      </div>
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
      </div>
    </section>
  );
}

function PriceBlock({ pkg, inverse = false }) {
  const mutedClass = inverse ? "text-orange-100/80" : "text-slate-400";
  const priceClass = inverse ? "text-white" : "text-slate-950";
  const saveClass = inverse ? "bg-white/15 text-white" : "bg-orange-50 text-orange-700";

  return (
    <div className="mt-4 text-center">
      <div className="min-h-[1rem]">
        {pkg.originalPrice && (
          <div className={`text-xs font-bold line-through ${mutedClass}`}>{pkg.originalPrice}</div>
        )}
      </div>
      <div className="flex items-end justify-center gap-2">
        {pkg.pricePrefix && <span className={`pb-1 text-xs font-bold ${mutedClass}`}>{pkg.pricePrefix}</span>}
        <span className={`text-3xl font-black tracking-tight ${priceClass}`}>{pkg.price}</span>
      </div>
      <div className={`mt-1 text-xs font-bold ${mutedClass}`}>{pkg.unit}</div>
      <div className="mt-2 min-h-[1.5rem]">
        {pkg.save && (
          <div className={`mx-auto inline-flex rounded-full px-2.5 py-1 text-[11px] font-black ${saveClass}`}>
            ประหยัด {pkg.save}
          </div>
        )}
      </div>
    </div>
  );
}

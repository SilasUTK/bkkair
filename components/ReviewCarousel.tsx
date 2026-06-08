"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import type { ApprovedReview } from "../lib/reviews";

type ReviewCarouselProps = {
  reviews: ApprovedReview[];
};

export default function ReviewCarousel({ reviews }: ReviewCarouselProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef({ isDragging: false, startX: 0, scrollLeft: 0 });

  const scrollByCard = (direction: number) => {
    const slider = scrollRef.current;
    if (!slider) return;
    const firstCard = slider.querySelector("article");
    const cardWidth = firstCard?.getBoundingClientRect().width || 360;
    slider.scrollBy({ left: direction * (cardWidth + 20), behavior: "smooth" });
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const slider = scrollRef.current;
    if (!slider) return;
    dragRef.current = {
      isDragging: true,
      startX: event.clientX,
      scrollLeft: slider.scrollLeft,
    };
    slider.setPointerCapture?.(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const slider = scrollRef.current;
    if (!slider || !dragRef.current.isDragging) return;
    const distance = event.clientX - dragRef.current.startX;
    slider.scrollLeft = dragRef.current.scrollLeft - distance;
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const slider = scrollRef.current;
    if (!slider) return;
    dragRef.current.isDragging = false;
    slider.releasePointerCapture?.(event.pointerId);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => scrollByCard(-1)}
        aria-label="เลื่อนรีวิวไปทางซ้าย"
        className="absolute left-0 top-1/2 z-20 hidden h-11 w-11 -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-white/90 text-slate-800 shadow-[0_18px_46px_rgba(15,23,42,0.14)] backdrop-blur transition hover:border-blue-100 hover:text-blue-700 md:flex"
      >
        <ChevronLeft className="h-5 w-5" strokeWidth={2.4} />
      </button>
      <button
        type="button"
        onClick={() => scrollByCard(1)}
        aria-label="เลื่อนรีวิวไปทางขวา"
        className="absolute right-0 top-1/2 z-20 hidden h-11 w-11 translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-white/90 text-slate-800 shadow-[0_18px_46px_rgba(15,23,42,0.14)] backdrop-blur transition hover:border-blue-100 hover:text-blue-700 md:flex"
      >
        <ChevronRight className="h-5 w-5" strokeWidth={2.4} />
      </button>

      <div
        ref={scrollRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="no-scrollbar flex cursor-grab snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-3 active:cursor-grabbing"
      >
        {reviews.map((review) => (
          <article
            key={review.id}
            className="flex min-h-[18rem] basis-[88%] shrink-0 snap-start flex-col rounded-3xl border border-blue-100 bg-white/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_24px_70px_rgba(15,23,42,0.11)] sm:basis-[22rem] lg:basis-[calc((100%_-_2.5rem)_/_3)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-sm font-black text-blue-700">
                  {review.initials}
                </div>
                <div>
                  <p className="text-sm font-black text-slate-950">{review.country}</p>
                  <p className="mt-1 text-xs font-black uppercase tracking-wider text-blue-600">{review.serviceUsed}</p>
                </div>
              </div>
              <Quote className="h-5 w-5 shrink-0 text-orange-400" aria-hidden="true" />
            </div>

            <p className="mt-5 flex-1 text-[15px] font-medium leading-relaxed text-slate-700">
              “{review.reviewText}”
            </p>

            <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
              <p className="text-sm font-bold text-slate-500">{review.date}</p>
              {review.source && (
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-black text-slate-500">
                  {review.source}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

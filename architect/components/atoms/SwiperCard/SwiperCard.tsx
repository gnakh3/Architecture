"use client";

import type { Swiper as SwiperType } from "swiper";

type SwiperCardProps = {
  slidesLength: number;
  activeIndex: number;
  swiperRef: React.RefObject<SwiperType | null>;
};

const SwiperCard = ({
  slidesLength,
  activeIndex,
  swiperRef,
}: SwiperCardProps) => {
  return (
<div className="absolute bottom-0 left-[-64px] hidden lg:flex z-20">
  {Array.from({ length: slidesLength }).map((_, i) => (
    <button
      key={i}
      onClick={() => swiperRef.current?.slideTo(i)}
      className={`w-16 h-16 text-sm font-bold transition-all duration-200 ${
        activeIndex === i
          ? "bg-[#1B1D23] text-white"
          : "bg-white text-[#7D828F] hover:bg-gray-100"
      }`}
    >
      {String(i + 1).padStart(2, "0")}
    </button>
  ))}
</div>
  );
};

export default SwiperCard;

"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import { EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css";

const slides = [
  {
    title: "Project Paramour",
    desc: "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
    image: "/Swiper1.svg",
  },
  {
    title: "Seraph Station",
    desc: "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
    image: "/Swiper2.svg",
  },
  {
    title: "Federal II Tower",
    desc: "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
    image: "/Swiper3.svg",
  },
  {
    title: "Trinity Bank Tower",
    desc: "Trinity Bank challenged us to design a concept that would reflect the stability and strength of their brand. Our design is a modern take on banking architecture.",
    image: "/Swiper4.svg",
  },
];

export default function Welcome() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full h-[720px]">
      <Swiper
        modules={[Navigation, EffectFade]}
        effect="fade"
        onSwiper={(swiper: SwiperType) => (swiperRef.current = swiper)}
        onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.activeIndex)}
        className="w-full h-full"
      >

        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="relative z-10 h-full flex items-center">
                <div className="ml-[10%] max-w-[544px] text-white">
                  <h1 className="text-[96px] leading-[80px] font-bold whitespace-pre-line">{slide.title}</h1>
                  <p className="mt-10 text-[18px] whitespace-pre-line leading-6">{slide.desc}</p>
                  <button className="mt-[41px] bg-[#1B1D23] w-[252px] h-[72px] text-[18px] font-bold text-center flex items-center justify-center gap-3 hover:bg-[#60636D] hover:scale-105  cursor-pointer transition-all duration-200 ease-in-out"> See Our Portfolio  <Image src="/Arrow.svg" alt="Arrow" width={24} height={24} /> </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-0 left-[-64px] flex z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => swiperRef.current?.slideTo(i)}
            className={`w-16 h-16 text-sm font-bold transition-all duration-200 ${activeIndex === i
              ? "bg-[#1B1D23] text-white"
              : "bg-white text-[#7D828F] hover:bg-gray-100"
              }`}
          >
            {String(i + 1).padStart(2, "0")}
          </button>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import "swiper/css/effect-fade";
import "swiper/css";
import SwiperCard from "../../atoms/SwiperCard/SwiperCard";
import Link from "next/link";
import { motion, AnimatePresence, easeOut } from "framer-motion";

const slides = [
  {
    title: "Project Paramour",
    desc: "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
    image: "/Swiper1.svg",
  },
  {
    title: "Seraph Station",
    desc: "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
    image: "/Swiper2.webp",
  },
  {
    title: "Federal II Tower",
    desc: "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
    image: "/Swiper3.webp",
  },
  {
    title: "Trinity Bank Tower",
    desc: "Trinity Bank challenged us to design a concept that would reflect the stability and strength of their brand. Our design is a modern take on banking architecture.",
    image: "/Swiper4.webp",
  },
];

const textWrap = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
};

export default function Welcome() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full h-[720px] mt-20">
      <Swiper
        modules={[Navigation, EffectFade, Autoplay]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-black/35" />
              <div className="relative z-10 h-full flex items-center">
                <div className="ml-[10%] max-w-[544px] text-white">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={slide.title}
                      variants={textWrap}
                      initial="hidden"
                      animate="show"
                      exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
                    >
                      <motion.h1
                        variants={fadeUp}
                        className="text-[48px] leading-[48px] font-bold whitespace-pre-line sm:text-[96px] sm:leading-[80px]"
                      >
                        {slide.title}
                      </motion.h1>
                      <motion.p
                        variants={fadeUp}
                        className="mt-10 text-[18px] whitespace-pre-line leading-6"
                      >
                        {slide.desc}
                      </motion.p>
                      <motion.div variants={fadeUp}>
                        <Link href="/portfolio">
                          <motion.button
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="mt-[41px] bg-[#1B1D23] w-[252px] h-[72px] text-[18px] font-bold text-center flex items-center justify-center gap-3 hover:bg-[#60636D] cursor-pointer transition-colors duration-200"
                          >
                            See Our Portfolio
                            <Image
                              src="/Arrow.svg"
                              alt="Arrow"
                              width={24}
                              height={24}
                            />
                          </motion.button>
                        </Link>
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <SwiperCard
        slidesLength={slides.length}
        activeIndex={activeIndex}
        swiperRef={swiperRef}
      />
    </div>
  );
}

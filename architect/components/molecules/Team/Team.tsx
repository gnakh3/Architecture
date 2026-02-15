"use client";

import React from "react";
import Image from "next/image";
import Bitmap from "@/public/Bitmap.webp";
import Link from "next/link";
import { motion, cubicBezier } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
      delay,
    },
  }),
};

const Team = () => {
  return (
    <div className="relative h-140 overflow-hidden">
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={Bitmap}
          alt="Team workspace background"
          fill
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 pt-41.25 lg:pl-32.5 md:pl-32.5 sm:pl-10">
        <div className="flex flex-col gap-6.25">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            custom={0.2}
            className="font-bold text-5xl lg:text-7xl md:text-7xl leading-16 tracking-tight text-white md:ml-[-20] ml-[32px]"
          >
            Small team,<br /> big ideas
          </motion.h1>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            custom={0.4}
            className="ml-[32px]"
          >
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="w-46.75 h-18 flex items-center justify-center gap-3 bg-[#1B1D23] md:ml-[-50] px-8 py-5 text-lg font-bold text-white hover:bg-[#60636D] transition-colors duration-200"
              >
                About Us
                <Image
                  src="/Arrow.svg"
                  alt="Arrow icon"
                  width={16}
                  height={16}
                />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Team;


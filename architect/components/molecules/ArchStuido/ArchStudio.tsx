"use client";

import Image from "next/image";
import React from "react";
import { motion, cubicBezier } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: cubicBezier(0.25, 0.46, 0.45, 0.94), delay: d },
  }),
};

const ArchStudio = () => {
  return (
    <>
      <div className="w-full relative 2xl:flex items-center justify-center lg:mt-25 max-md:px-6">
        {/* Background big text */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          custom={0}
          className="absolute z-10 top-0 max-2xl:left-0 max-md:left-6 -translate-y-[43%] text-[rgba(238,239,244,1)] text-[250px] font-bold leading-50 tracking-[-5px] max-xl:text-[200px] max-lg:text-[120px] max-sm:hidden 2xl:-translate-x-42.25"
        >
          Welcome
        </motion.h1>

        <div className="flex justify-end gap-31.25 max-xl:gap-20">
          <div className="relative z-20 lg:max-w-111.25">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              custom={0.1}
              className="sm:hidden h-px w-16.25 bg-[rgba(200,204,216,1)]"
            />
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              custom={0.2}
              className="mb-10.75 mt-18.5 text-[72px] font-bold leading-16 tracking-[-2px] text-[rgba(27,29,35,1)] sm:max-w-111.25 max-sm:text-[48px] max-sm:leading-13"
            >
              Welcome to Arch Studio
            </motion.h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              custom={0.35}
              className="text-[18px] font-medium text-[rgba(96,99,109,1)] leading-6"
            >
              We have a unique network and skillset to help bring your projects to life. Our
              small team of highly skilled individuals combined with our large network put us
              in a strong position to deliver exceptional results.
              <br />
              <br />
              Over the past 10 years, we have worked on all kinds of projects. From stations
              to high-rise buildings, we create spaces that inspire and delight.
              <br />
              <br />
              We work closely with our clients so that we understand the intricacies of each
              project. This allows us to work in harmony the surrounding area to create truly
              stunning projects that will stand the test of time.
            </motion.p>
          </div>
          <motion.div
            className="hidden lg:block max-xl:self-end"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={0.25}
          >
            <Image src="/welcome-img.svg" alt="Welcome image" width={350} height={568} />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ArchStudio;

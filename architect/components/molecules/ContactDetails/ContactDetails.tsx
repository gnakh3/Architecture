"use client";

import React from "react";
import Image from "next/image";
import { motion, easeInOut } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeInOut, delay: i * 0.12 },
  }),
};

const ContactDetails = () => {
  return (
    <motion.div
      className="flex flex-col gap-18.25 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* line */}
      <motion.div
        className="w-16.25 h-px bg-[#C8CCD8] ml-[10%] md:ml-0"
        variants={fadeUp}
        custom={0}
      />

      <div className="flex flex-col md:flex-col lg:flex-row lg:gap-[8%] w-full md:ml-0 ml-[10%]">
        {/* title */}
        <motion.div
          className="font-bold text-[72px] leading-16 tracking-[-2px] h-32 w-[311px] md:w-full text-[#1B1D23] mb-8 lg:mb-0"
          variants={fadeUp}
          custom={1}
        >
          Contact Details
        </motion.div>
        <motion.div
          className="text-[18px] font-bold w-full max-w-[700px] gap-1 flex flex-col text-[#60636D] leading-6 mb-8 lg:mb-0"
          variants={fadeUp}
          custom={2}
        >
          <div className="flex lg:flex-col md:flex-row w-full md:justify-between md:items-center flex-col">
            <div className="font-normal mb-4">
              <div className="font-bold">Main Office</div>
              Mail: archone@mail.com
              <br />
              Address: 1892 Chenoweth Drive TN
              <br />
              Phone: 931-492-3451
            </div>
            <motion.div
              className="flex lg:mr-30 flex-row items-start gap-2 text-[#1B1D23] hover:underline cursor-pointer transition ease-in-out duration-300 hover:scale-103"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              View on Map{" "}
              <Image
                src="/contactarrow.svg"
                alt="arrow"
                width={24}
                height={18}
              />
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="text-[18px] font-bold w-full max-w-[700px] gap-1 flex flex-col text-[#60636D] leading-6"
          variants={fadeUp}
          custom={3}
        >
          <div className="flex lg:flex-col md:flex-row w-full md:justify-between md:items-center flex-col">
            <div className="font-normal mb-4">
              <div className="font-bold">Office II</div>
              Mail: archtwo@mail.com
              <br />
              Address: 3399 Wines Lane TX
              <br />
              Phone: 832-123-4321
            </div>

            <motion.div
              className="flex lg:mr-20 flex-row items-start gap-2 text-[#1B1D23] hover:underline cursor-pointer transition ease-in-out duration-300 hover:scale-103"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              View on Map{" "}
              <Image
                src="/contactarrow.svg"
                alt="arrow"
                width={24}
                height={18}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactDetails;

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ContactProjects = () => {
  return (
    <div className="relative mt-14 lg:flex lg:items-center lg:justify-between lg:h-[720px] lg:w-full h-[72vh] overflow-x-hidden md:overflow-visible">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src="/contact1.webp"
          alt="Contact Projects"
          width={635}
          height={720}
          className="lg:block h-[520px] lg:h-[720px]"
          priority
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
        className="
          w-[80vw] left-0 h-[43vh] flex justify-center items-center top-[28vh] bg-white absolute
          lg:h-[503px] lg:w-[793px] lg:bottom-0 lg:left-[500px]
          md:w-[552px] md:h-[431px] md:left-[100px]
          lg:top-[250px]
        "
      >
        <div className="font-bold lg:text-[250px] md:leading-[200px] lg:tracking-[-5px] md:flex text-right text-[#EEEFF4] hidden absolute lg:top-[-90px] lg:left-[-205px] lg:text-[120px] md-tracking-[-3px] md:top-[-90px] md:text-[120px] md:right-20">
          Contact
        </div>
        <div
          className="
            flex flex-col justify-between left-4 h-[341px] w-[446px] absolute
            lg:left-[182px] md:left-[100px] md:bottom-0

            max-md:w-[calc(80vw-32px)]
          "
        >
          <div className="md:w-[65px] md:h-px md:bg-[#C8CCD8] md:flex hidden"></div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
            className="
              font-bold text-[48px] md:w-[445px] w-[311px] h-[104px]
              md:text-[72px] md:leading-[64px] md:tracking-[-2px] text-[#1B1D23]

              max-md:w-full
            "
          >
            Tell us about your project
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
            className="
              font-medium h-[144px] w-[311px] text-[18px] md:leading-6
              text-[#60636D] md:w-[445px]

              max-md:w-full
            "
          >
            We’d love to hear more about your project. Please, leave a message below or
            give us a call. We have two offices, one in Texas and one in Tennessee. If
            you find yourself nearby, come say hello!
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactProjects;

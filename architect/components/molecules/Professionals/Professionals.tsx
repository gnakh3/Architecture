"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Professionals = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    const savedTitle = localStorage.getItem("professionals_title");
    const savedDesc = localStorage.getItem("professionals_desc");

    setTitle(savedTitle || "Your team of professionals");
    setDesc(
      savedDesc ||
        "Our small team of world-class professionals will work with you every step of the way.\nStrong relationships are at the core of everything we do.\nThis extends to the relationship our projects have with their surroundings."
    );
  }, []);

  const onSave = () => {
    localStorage.setItem("professionals_title", title);
    localStorage.setItem("professionals_desc", desc);
    setIsEditing(false);
  };

  const onCancel = () => {
    const savedTitle = localStorage.getItem("professionals_title");
    const savedDesc = localStorage.getItem("professionals_desc");

    setTitle(savedTitle || "Your team of professionals");
    setDesc(
      savedDesc ||
        "Our small team of world-class professionals will work with you every step of the way.\nStrong relationships are at the core of everything we do.\nThis extends to the relationship our projects have with their surroundings."
    );

    setIsEditing(false);
  };

  return (
    <div className="relative mt-14 lg:flex lg:items-center lg:justify-between lg:h-[720px] lg:w-full h-[75vh] max-md:overflow-x-hidden md:overflow-visible">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src="/professionals.webp"
          alt="Professionals"
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
          lg:h-[503px] lg:w-[793px] lg:bottom-0 lg:left-[500px] md:w-[552px] md:h-[431px] md:left-[100px] lg:top-[250px]
          max-md:left-0 max-md:-translate-x-0
          max-md:w-[calc(100%-24px)] max-md:max-w-[552px]
        "
      >
        <div className="font-bold lg:text-[250px] md:leading-[200px] lg:tracking-[-5px] md:flex text-right text-[#EEEFF4] hidden absolute lg:top-[-90px] lg:left-[-15px] lg:text-[120px] md:tracking-[-3px] md:top-[-90px] md:text-[120px] md:right-20 select-none pointer-events-none">
          About
        </div>

        <div className="flex flex-col justify-between left-4 h-[341px] w-[446px] absolute lg:left-[182px] md:left-[100px] md:bottom-0">
          <div className="md:w-[65px] md:h-px md:bg-[#C8CCD8] md:flex hidden"></div>

          <div className="absolute top-30 right-30 md:top-0 md:right-0 flex gap-4 text-[20px] cursor-pointer">
            {!isEditing ? (
              <span
                onClick={() => setIsEditing(true)}
                className="hover:scale-110 transition-all"
              >
                ✏️
              </span>
            ) : (
              <>
                <span onClick={onSave} className="hover:scale-110 transition-all">
                  ✅
                </span>
                <span
                  onClick={onCancel}
                  className="hover:scale-110 transition-all"
                >
                  ❌
                </span>
              </>
            )}
          </div>

          {!isEditing ? (
            <div className="font-bold text-[48px] md:w-[445px] w-[311px] h-[104px] md:text-[72px] md:leading-[64px] md:tracking-[-2px] text-[#1B1D23]">
              {title}
            </div>
          ) : (
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="font-bold text-[48px] md:w-[445px] w-[311px] h-[104px] md:text-[72px] md:leading-[64px] md:tracking-[-2px] text-[#1B1D23] outline-none bg-transparent border-b border-[#C8CCD8] focus:border-[#1B1D23]"
            />
          )}

          {!isEditing ? (
            <div className="font-medium h-[144px] w-[311px] text-[18px] md:leading-6 text-[#60636D] md:w-[445px] whitespace-pre-line">
              {desc}
            </div>
          ) : (
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="font-medium h-[144px] w-[311px] text-[18px] md:leading-6 text-[#60636D] md:w-[445px] outline-none bg-transparent border border-[#C8CCD8] p-2 resize-none"
            />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Professionals;

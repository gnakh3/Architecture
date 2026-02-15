"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Heritage = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [title, setTitle] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");

  useEffect(() => {
    setTitle(localStorage.getItem("heritage_title") || "Our Heritage");

    setText1(
      localStorage.getItem("heritage_text1") ||
        "Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country."
    );

    setText2(
      localStorage.getItem("heritage_text2") ||
        "Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs."
    );

    setText3(
      localStorage.getItem("heritage_text3") ||
        "Our small team of world-class professionals provides input on every project."
    );
  }, []);

  const onSave = () => {
    localStorage.setItem("heritage_title", title);
    localStorage.setItem("heritage_text1", text1);
    localStorage.setItem("heritage_text2", text2);
    localStorage.setItem("heritage_text3", text3);
    setIsEditing(false);
  };

  const onCancel = () => {
    setTitle(localStorage.getItem("heritage_title") || "Our Heritage");
    setText1(
      localStorage.getItem("heritage_text1") ||
        "Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country."
    );
    setText2(
      localStorage.getItem("heritage_text2") ||
        "Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs."
    );
    setText3(
      localStorage.getItem("heritage_text3") ||
        "Our small team of world-class professionals provides input on every project."
    );

    setIsEditing(false);
  };

  return (
    <section className="w-full flex justify-center px-4 relative">
      <div className="w-full max-w-[1200px] flex items-center justify-between lg:h-[568px]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-between gap-8 max-w-[445px] relative"
        >
          <div className="absolute right-0 -top-6 flex gap-4 text-[20px] cursor-pointer">
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

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            className="w-16 h-px bg-[#C8CCD8]"
          />

          {!isEditing ? (
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
              className="font-bold text-[#1B1D23] tracking-[-2px] text-[40px] md:text-[56px] lg:text-[72px] leading-tight"
            >
              {title}
            </motion.h2>
          ) : (
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="font-bold text-[#1B1D23] tracking-[-2px] text-[40px] md:text-[56px] lg:text-[72px] leading-tight outline-none border-b border-[#C8CCD8] focus:border-[#1B1D23] bg-transparent"
            />
          )}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
            className="flex flex-col gap-5 font-medium text-[#60636D] text-[16px] md:text-[18px] leading-6"
          >
            {!isEditing ? (
              <>
                <p>{text1}</p>
                <p>{text2}</p>
                <p>{text3}</p>
              </>
            ) : (
              <>
                <textarea
                  value={text1}
                  onChange={(e) => setText1(e.target.value)}
                  className="outline-none border border-[#C8CCD8] p-2 resize-none bg-transparent"
                />
                <textarea
                  value={text2}
                  onChange={(e) => setText2(e.target.value)}
                  className="outline-none border border-[#C8CCD8] p-2 resize-none bg-transparent"
                />
                <textarea
                  value={text3}
                  onChange={(e) => setText3(e.target.value)}
                  className="outline-none border border-[#C8CCD8] p-2 resize-none bg-transparent"
                />
              </>
            )}
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
          className="hidden lg:block"
        >
          <Image
            src="/heritage.webp"
            alt="Heritage"
            width={540}
            height={568}
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Heritage;

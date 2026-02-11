import React from "react";
import Image from "next/image";

const Heritage = () => {
  return (
    <section className="w-full flex justify-center px-4">
      <div
        className="
          w-full max-w-[1200px]
          flex items-center justify-between
          lg:h-[568px]
        "
      >
        <div className="flex flex-col justify-between gap-8 max-w-[445px]">
          <div className="w-16 h-px bg-[#C8CCD8]" />

          <h2 className="font-bold text-[#1B1D23] tracking-[-2px] text-[40px] md:text-[56px] lg:text-[72px] leading-tight">
            Our Heritage
          </h2>

          <div className="flex flex-col gap-5 font-medium text-[#60636D] text-[16px] md:text-[18px] leading-6">
            <p>
              Founded in 2007, we started as a trio of architects. Our complimentary
              skills and relentless attention to detail turned Arch into one of
              the most sought after boutique firms in the country.
            </p>
            <p>
              Speciliazing in Urban Design allowed us to focus on creating
              exceptional structures that live in harmony with their
              surroundings. We consider every detail from every surrounding
              element to inform our designs.
            </p>
            <p>
              Our small team of world-class professionals provides input on every
              project.
            </p>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image
            src="/heritage.webp"
            alt="Heritage"
            width={540}
            height={568}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Heritage;

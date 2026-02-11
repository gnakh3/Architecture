"use client";

import { useState } from "react";
import Link from "next/link";

type FeaturedItem = {
  number: string;
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

const featuredItems: FeaturedItem[] = [
  {
    number: "1",
    title: "Project Del Sol",
    href: "/projects",
    imageSrc: "/Images/DelSol.png",
    imageAlt: "Project Del Sol",
  },
  {
    number: "2",
    title: "228B Tower",
    href: "/projects",
    imageSrc: "/Images/Tower.png",
    imageAlt: "228B Tower",
  },
  {
    number: "3",
    title: "Le Prototype",
    href: "/projects",
    imageSrc: "/Images/Prototype.png",
    imageAlt: "Le Prototype",
  },
  {
    number: "4",
    title: "Hypers",
    href: "/projects",
    imageSrc: "/Portfolio/Hypers.webp",
    imageAlt: "Hypers",
  },
  {
    number: "5",
    title: "Eebox Building",
    href: "/projects",
    imageSrc: "/Portfolio/Eebox.webp",
    imageAlt: "Eebox Building",
  },
  {
    number: "6",
    title: "Seraph Station",
    href: "/projects",
    imageSrc: "/Portfolio/Seraph.webp",
    imageAlt: "Seraph Station",
  },
];

export default function Featured() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="w-full px-6 py-14 mb-[100px]">
      <div className="flex items-center justify-between gap-4 mb-8">
        <h2 className="font-bold text-[32px] leading-[40px] font-[League Spartan]">
          Featured
        </h2>

        <button
          onClick={() => setShowMore(!showMore)}
          className="inline-flex items-center gap-3 px-5 py-3 bg-[#1B1D23] text-white rounded-sm font-bold text-[18px] leading-[25px] font-[League Spartan] hover:opacity-90 transition duration-300"
        >
          {showMore ? "Show Less" : "See All"} →
        </button>
      </div>
      <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
        {featuredItems.map((item, index) => {
          const isExtra = index >= 3;
          const isVisible = showMore || !isExtra;
          return (
            <article
              key={item.number}
              className={`
                relative overflow-hidden rounded-sm
                transition-all duration-500 ease-in-out
                ${isVisible
                  ? "opacity-100 translate-y-0 max-h-[500px]"
                  : "opacity-0 -translate-y-4 max-h-0"}
              `}
            >
              <div className="relative min-h-[420px] max-[900px]:min-h-[360px]">
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent opacity-50" />

                <div className="absolute top-4 right-[-2%] text-[250px] leading-[200px] font-bold text-white/35 pointer-events-none font-[League Spartan] tracking-[-5px] max-[900px]:text-[140px]">
                  {item.number}
                </div>

                <div className="absolute left-6 bottom-6 z-10 text-white">
                  <h3 className="mb-2 text-[22px] font-bold">
                    {item.title}
                  </h3>

                  <Link
                    href="/portfolio"
                    className="text-white/90 font-medium hover:opacity-90 transition"
                  >
                    View All Projects
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

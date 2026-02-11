"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Portfolio", href: "/portfolio" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="relative w-full z-50">
      <div className="flex items-center justify-between sm:justify-start w-full max-w-[1600px] h-[40px] pt-[56px] mx-auto px-4 sm:px-6 relative">
        <Link
          href="/"
          className="hover:scale-105 transition-transform duration-200 z-50"
        >
          <Image src="/logo.svg" alt="Logo" width={100} height={100} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden sm:flex font-bold text-[18px] leading-[25px] items-center gap-[51px] ml-12 z-50">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition-all duration-200 ease-in-out
                  ${
                    isActive
                      ? "text-[#1B1D23]"
                      : "text-[#7D828F] hover:text-[#1B1D23]"
                  }`}
              >
                {link.name}

                {isActive && (
                  <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#1B1D23]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Burger */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden flex flex-col justify-center items-center ml-6 w-8 h-8 relative z-50"
        >
          <span
            className={`block absolute h-0.5 w-6 bg-black transform transition duration-500 ease-in-out
            ${open ? "rotate-45 top-3" : "top-1"}`}
          />
          <span
            className={`block absolute h-0.5 w-6 bg-black transform transition duration-500 ease-in-out
            ${open ? "opacity-0" : "top-3"}`}
          />
          <span
            className={`block absolute h-0.5 w-6 bg-black transform transition duration-500 ease-in-out
            ${open ? "-rotate-45 top-3" : "top-5"}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden bg-white w-full shadow-lg overflow-hidden transition-all duration-500 ease-in-out
        ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col items-center gap-6 py-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`font-bold text-lg transition-colors
                  ${
                    isActive
                      ? "text-[#1B1D23] underline"
                      : "text-[#60636D] hover:text-[#1B1D23]"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;

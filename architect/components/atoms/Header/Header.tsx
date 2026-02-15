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
      <div className="relative flex items-center justify-between sm:justify-start w-full max-w-[1600px] h-[40px] pt-[56px] mx-auto px-4 sm:px-6">
        <Link
          href="/"
          className="hover:scale-105 transition-transform duration-200 z-50"
        >
          <Image src="/logo.svg" alt="Logo" width={100} height={100} />
        </Link>
        <nav className="hidden sm:flex font-bold text-[18px] leading-[25px] items-center gap-[51px] ml-12 z-50">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition-all duration-200
                  ${isActive
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
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden ml-6 w-8 h-8 relative z-50 flex items-center justify-center"
        >
          <span
            className={`absolute h-[2px] w-6 bg-[#1B1D23] transition-all duration-300
            ${open ? "rotate-45" : "-translate-y-2"}`}
          />
          <span
            className={`absolute h-[2px] w-6 bg-[#1B1D23] transition-all duration-300
            ${open ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`absolute h-[2px] w-6 bg-[#1B1D23] transition-all duration-300
            ${open ? "-rotate-45" : "translate-y-2"}`}
          />
        </button>
      </div>
      <div
        className={`sm:hidden absolute left-0 top-full w-full bg-white shadow-lg z-40
  transition-opacity duration-300 ease-in-out
  ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className="flex flex-col items-center gap-6 py-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-lg font-bold transition-colors duration-200
            ${isActive
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

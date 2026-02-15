import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
<div className=" w-full lg:w-[110%] md:w-full sm:w-full md:px-0 relative flex items-center lg:h-50 md:h-30  sm:h-30 h-120 lg:flex-row md:flex-row sm:flex-row  flex-col ">
        <div className="lg:w-50 lg:h-50 md:w-30 md:h-30 sm:w-30 sm:h-30 flex justify-center items-center relative lg:left-0 md:left-0 sm:left-0 lg:top-0 md:top-0 sm:top-0 top-15 bg-[#1B1D23] ">
          <Link href="/home" className="flex justify-center w-30 h-30">
            <Image src="/ArchWhite.svg" alt="Logo" style={{backgroundColor:"#1B1D23"}} width={96.16} height={40}  />
          </Link>
        </div>
        <div className="bg-gray-200 w-full lg:pl-5 lg:h-50 md:h-30 sm:h-30 h-120 flex lg:flex-row md:flex-row sm:flex-row flex-col items-center lg:justify-start md:justify-start sm:justify-start justify-center lg:-pl-10 md:pl-5 sm:-pl-20 lg:gap-5 md:gap-2 sm:gap-3 gap-8 font-bold text-[18px] leading-6.25 text-[#7D828F]">
          <Link href="/portfolio">
            <div className="hover:scale-105 cursor-pointer hover:text-[#1B1D23] transition-all duration-200 ease-in-out">Portfolio</div>
          </Link>
          <Link href="/about">
            <div className="hover:scale-105 cursor-pointer hover:text-[#1B1D23] transition-all duration-200 ease-in-out">About Us</div>
          </Link>
          <Link href="/contact">
            <div className="hover:scale-105 cursor-pointer hover:text-[#1B1D23] transition-all duration-200 ease-in-out">Contact</div>
          </Link> 
        </div>

          <div className="flex items-center justify-end lg:h-50 md:h-30 w-55 absolute bottom-5 sm:relative md:relative lg:relative xl:relative  sm:overflow-visible  lg:right-0 lg:-left-25  sm:-left-7 lg:bottom-0 md:bottom-0 sm:bottom-0 ">
            <Link href="/portfolio">
              <button className=" flex items-center justify-center gap-3  bg-[#1B1D23] text-white w-63 h-18 text-[18px] font-bold text-center  hover:bg-[#60636D] hover:scale-105  cursor-pointer transition-all duration-200 ease-in-out"> See Our Portfolio  <Image src="/Arrow.svg" alt="Arrow" width={24} height={24}  /> </button>
            </Link>
          </div>
    </div>
)}
export default Footer;

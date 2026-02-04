import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
 <div className=" w-full flex lg:items-start md:items-start sm:items-center lg:h-50 md:h-30 sm:h-110 relative lg:flex-row md:flex-row sm:flex-col">
        <div className="lg:w-[15%] md:w-50 sm:max-w-full lg:h-50 md:h-30 flex lg:justify-center-safe md:justify-center-safe sm:md:justify-center-safe items-center-safe lg:relative md:absolute sm:absolute lg:left-0 md:-left-50 sm:left-32 lg:bottom-0 md:bottom-0 sm:bottom-94 bg-[#1B1D23] ">
          <Link href="/home" className="flex justify-center w-[120px] h-[120px]">
            <Image src="/ArchWhite.svg" alt="Logo" style={{backgroundColor:"#1B1D23"}} width={96.16} height={40}  />
          </Link>
        </div>
        <div className="bg-gray-200 lg:w-[70%] md:w-[92%] sm:w-full lg:h-50 md:h-30 sm:h-110 flex lg:flex-row md:flex-row sm:flex-col items-center lg:justify-start md:justify-start sm:justify-center-safe lg:pl-20 md:pl-10 lg:gap-10 md:gap-2 sm:gap-10 font-bold text-[18px] leading-6.25 text-[#7D828F]">
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

          <div className="flex items-center justify-end lg:h-50 md:h-30 w-63 lg:right-0 absolute md:-right-42 sm:right-12 lg:bottom-0 md:bottom-0 sm:bottom-5">
            <Link href="/portfolio">
              <button className=" flex items-center justify-center gap-3  bg-[#1B1D23] text-white w-63 h-18 text-[18px] font-bold text-center  hover:bg-[#60636D] hover:scale-105  cursor-pointer transition-all duration-200 ease-in-out"> See Our Portfolio  <Image src="/Arrow.svg" alt="Arrow" width={24} height={24}  /> </button>
            </Link>
          </div>
    </div>
    
  )
}
export default Footer
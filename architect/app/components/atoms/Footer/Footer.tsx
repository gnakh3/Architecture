import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <div className=" w-full flex items-start  h-50 ">
        <div className="w-[15%] h-50 bg-[#1B1D23] flex justify-center">
          <Image src="/ArchWhite.svg" alt="Logo" style={{backgroundColor:"#1B1D23"}} width={96.16} height={40}  />
        </div>
        
        <div className="bg-gray-200 w-[70%] h-50 flex items-center justify-self-start pl-30 gap-12.75  font-bold text-[18px] leading-6.25 text-[#7D828F]">
          <div className="hover:scale-105 cursor-pointer hover:text-[#1B1D23] transition-all duration-200 ease-in-out">Portfolio</div>
          <div className="hover:scale-105 cursor-pointer hover:text-[#1B1D23] transition-all duration-200 ease-in-out">About Us</div>
          <div className="hover:scale-105 cursor-pointer hover:text-[#1B1D23] transition-all duration-200 ease-in-out">Contact</div>
        </div>

          <div className="flex items-center justify-end h-50 w-63 right-41 absolute">
            <button className=" flex items-center justify-center gap-3  bg-[#1B1D23] text-white w-63 h-18 text-[18px] font-bold text-center  hover:bg-[#60636D] hover:scale-105  cursor-pointer transition-all duration-200 ease-in-out"> See Our Portfolio  <Image src="/Arrow.svg" alt="Arrow" width={24} height={24}  /> </button>
          </div>
    </div>
    
  )
}
export default Footer
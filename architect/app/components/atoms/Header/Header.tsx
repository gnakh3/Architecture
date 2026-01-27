import Image from "next/image"

const header = () => {
  return (
    <div className="flex items-center justify-between w-[504px] h-[40px] pt-[56px]">
        <Image src="/logo.svg" alt="Logo" width={100} height={100} />
        <div className="font-bold text-[18px] leading-[25px] text-[#7D828F] flex items-center gap-[51px]">
          <div className="hover:scale-105 cursor-pointer hover:text-[#1B1D23] transition-all duration-200 ease-in-out">Portfolio</div>
          <div className="hover:scale-105 cursor-pointer hover:text-[#1B1D23] transition-all duration-200 ease-in-out">About Us</div>
          <div className="hover:scale-105 cursor-pointer hover:text-[#1B1D23] transition-all duration-200 ease-in-out">Contact</div>
        </div>
    </div>
  )
}

export default header
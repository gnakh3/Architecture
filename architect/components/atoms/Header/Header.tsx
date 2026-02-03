import Image from "next/image"
import Link from "next/link"

const header = () => {
  return (
    <div className="flex items-center justify-between w-[504px] h-[40px] pt-[56px]">
      <Image src="/Decoration.svg" alt="Logo" width={24} height={272} className="absolute left-10 top-0" />
      <Link href="/" className="hover:scale-105 transition-transform duration-200">
        <Image src="/logo.svg" alt="Logo" width={100} height={100} />
      </Link>
      <div className="font-bold text-[18px] leading-[25px] text-[#7D828F] flex items-center gap-[51px]">
        <Link href="/portfolio" className="hover:scale-105 cursor-pointer hover:text-[#1B1D23] transition-all duration-200 ease-in-out">Portfolio</Link>
        <Link href="/about" className="hover:scale-105 cursor-pointer hover:text-[#1B1D23] transition-all duration-200 ease-in-out">About Us</Link>
        <Link href="/contact" className="hover:scale-105 cursor-pointer hover:text-[#1B1D23] transition-all duration-200 ease-in-out">Contact</Link>
      </div>
    </div>
  )
}

export default header
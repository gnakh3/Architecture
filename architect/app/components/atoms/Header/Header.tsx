import Image from "next/image"

const header = () => {
  return (
    <div className="flex items-center justify-between w-[504px] h-[40px] pt-[56px]">
        <Image src="/logo.svg" alt="Logo" width={100} height={100} />
        <div className="font-bold text-[18px] leading-[25px] text-[#7D828F] flex items-center gap-[51px]">
          <div>Portfolio</div>
          <div>About Us</div>
          <div>Contact</div>
        </div>
    </div>
  )
}

export default header
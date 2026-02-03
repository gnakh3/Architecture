import React from 'react'
import Image from 'next/image'
import Bitmap from '@/public/Bitmap.webp';

const Team = () => {

  return (
  <div className="relative h-140">
    <Image 
      src={Bitmap} 
      alt="Team workspace background" 
      fill 
      className="object-cover" 
    />
    
    <div className="relative z-10 pt-41.25 lg:pl-32.5 md:pl-32.5 sm:pl-10">
      <div className="flex flex-col gap-6.25">
        <h1 className=" font-bold lg:text-7xl md:text-7xl sm:text-5xl leading-16 tracking-tight text-white">
          Small team,<br/> big ideas
        </h1>
        
        <button className="w-46.75 h-18 flex items-center justify-center gap-3 bg-[#1B1D23] px-8 py-5 text-lg font-bold text-white hover:bg-[#60636D] hover:scale-105 transition-all duration-200">
          About Us 
          <Image src="/Arrow.svg" alt="Arrow icon" width={16} height={16} /> 
        </button>
      </div>
    </div>
  </div>
  )
}


export default Team

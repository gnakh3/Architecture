import React from 'react'
import Image from 'next/image';
import Bitmap from '@/public/Bitmap.webp';

const Team = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <div className="w-full h-140 flex flex-col bg-centre bg-no-repeat bg-cover" 
        style={{backgroundImage: `url(${Bitmap.src})`}} >
        <div className="w-136.25 pl-32.5 pt-41.25  flex flex-col justify-center gap-6.25">
          <h1 className="font-bold text-[72px] leading-16 tracking-[-2px] text-white" style={{ fontFamily: 'League Spartan' }}>
            Small team, big ideas
          </h1>
          <button className="w-46.75 h-18 flex gap-3 items-center justify-center bg-[#1B1D23] px-8 py-5 text-lg font-bold text-white  hover:bg-[#60636D] hover:scale-105  cursor-pointer transition-all duration-200 ease-in-out"
            style={{ fontFamily: 'League Spartan' }}>
            About Us 
            <Image src="/Arrow.svg" alt="Arrow" width={16} height={16}  /> 
          </button>
        </div>  
      </div>
    </div>
    
  )
}

export default Team
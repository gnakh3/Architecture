import React from 'react';
import Image from 'next/image';
import Bitmap from '@/public/Bitmap.svg';

const ArchStudio = () => {
  return (
    <div className="pt-10 pb-10 flex flex-col justify-center items-center">
      <div className="w-[75%] h-140 flex flex-col relative" 
        style={{backgroundImage: `url(${Bitmap.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"}} >
        <div className="w-136.25 pl-32.5 pt-41.25 flex flex-col justify-center gap-6.25">
          <h1 className="font-bold text-[72px] leading-16 tracking-[-2px] text-white" style={{ fontFamily: 'League Spartan' }}>
            Small team, big ideas
          </h1>
          <button className="flex justify-center items-center bg-[#1B1D23] w-46.75 h-18 font-bold text-[18px] leading-6.25 text-right text-white hover:bg-[#60636D] hover:cursor-pointer"
            style={{ fontFamily: 'League Spartan' }}>
            About Us <span className="pl-5 font-bold text-[18px] leading-6.25" style={{ fontFamily: 'League Spartan' }}>→</span>
          </button>
        </div>  
      </div>
    </div>
  )
}

export default ArchStudio
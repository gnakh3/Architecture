import React from 'react'
import Image from 'next/image'

const Professionals = () => {
    return (
        <div className='h-180 w-300 mt-14 flex items-center justify-between  relative'>
            <Image src="/professionals.webp" alt="Professionals" width={635} height={720} />
            <div className='bg-white absolute h-125.75 w-198.25 bottom-0 left-[500]'>
                <div className='font-bold text-[250px] leading-50 tracking-[-5px] text-right text-[#EEEFF4] absolute top-[-90] left-[-15]'>About</div>
                <div className='flex justify-between h-85.25 w-111.5 flex-col absolute bottom-0 left-45.5 '>
                    <div className='w-16.25 h-px bg-[#C8CCD8] '></div>
                    <div className="font-bold text-[72px] leading-16 tracking-[-2px] text-[#1B1D23]">Your team of professionals</div>
                    <div className='font-medium text-[18px] leading-6 text-[#60636D] w-111.25 h-24'>Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.</div>
                </div>
            </div>
        </div>

    )
}

export default Professionals
import React from 'react'
import Image from 'next/image'

const Heritage = () => {
    return (
        <div className='h-142 w-full flex justify-between items-center'>
            <div className='h-142 justify-between flex flex-col'>
                <div className='w-16.25 h-px bg-[#C8CCD8] '></div>
                <div className="font-bold text-[72px] leading-16 tracking-[-2px] text-[#1B1D23]">Our Heritage</div>
                <div className='font-medium text-[18px] leading-6 text-[#60636D] w-111.25 h-72 gap-5 flex flex-col'>
                    <div>Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.</div>
                    <div>Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs. </div>
                    <div>Our small team of world-class professionals provides input on every project.</div>
                </div>
            </div>
            <Image src="/heritage.webp" alt="Heritage" width={540} height={568} />
        </div>
    )
}

export default Heritage
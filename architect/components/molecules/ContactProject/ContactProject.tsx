import React from 'react'
import Image from 'next/image'

const ContactProject = () => {
    return (
        <div className='h-180 w-300 mt-14 flex items-center justify-between  relative'>
            <Image src="/contact1.webp" alt="Contact" width={635} height={720} />
            <div className='bg-white absolute h-125.75 w-198.25 bottom-0 left-[500]'>
                <div className='font-bold text-[250px] leading-50 tracking-[-5px] text-right text-[#EEEFF4] absolute top-[-90] left-[-15]'>Contact</div>
                <div className='flex justify-between h-85.25 w-111.5 flex-col absolute bottom-0 left-45.5 '>
                    <div className='w-16.25 h-px bg-[#C8CCD8] '></div>
                    <div className="font-bold text-[72px] leading-16 tracking-[-2px] text-[#1B1D23]">Tell us about your project</div>
                    <div className='font-medium text-[18px] leading-6 text-[#60636D] w-111.25 h-24'>We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!</div>
                </div>
            </div>
        </div>

    )
}

export default ContactProject
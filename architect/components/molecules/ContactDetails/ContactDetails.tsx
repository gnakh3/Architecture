import React from 'react'
import Image from 'next/image'

const ContactDetails = () => {
    return (
        <div className='flex flex-col gap-18.25'>
            <div className='w-16.25 h-px bg-[#C8CCD8] '></div>
            <div className='flex gap-[8%]'>
                <div className='font-bold text-[72px] leading-16 tracking-[-2px] h-32 w-87.5 text-[#1B1D23]'>Contact Details</div>
                <div className='text-[18px] font-bold w-87.5 gap-1 flex flex-col text-[#60636D] leading-6'>
                    <div>Main Office</div>
                    <div className='font-normal w-[]'>Mail :			archone@mail.com<br />
                        Address :		1892  Chenoweth Drive TN<br/>
                        Phone :		931-492-3451</div>
                    <div className='flex justify-between w-37.75 pt-13.75 text-[#1B1D23] hover:underline cursor-pointer transition ease-in-out duration-300 hover:scale-103'>View on Map <Image src="/contactarrow.svg" alt="arrow" width={24} height={18} /></div>
                </div>
                <div className='text-[18px] font-bold w-87.5 gap-1 flex flex-col text-[#60636D] leading-6'>
                    <div>Office II</div>
                    <div className='font-normal'>Mail :			archtwo@mail.com<br />
                        Address :		3399  Wines Lane TX<br/>
                        Phone :		832-123-4321</div>
                    <div className='flex justify-between w-37.75 pt-13.75 text-[#1B1D23] hover:underline cursor-pointer transition ease-in-out duration-300 hover:scale-103'>View on Map <Image src="/contactarrow.svg" alt="arrow" width={24} height={18} /></div>
                </div>
            </div>
        </div>
    )
}

export default ContactDetails
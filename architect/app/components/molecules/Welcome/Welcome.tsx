import Image from 'next/image'
import React from 'react'
import { League_Spartan } from 'next/font/google'

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
})


const Welcome = () => {
  return (
    <div className={`${leagueSpartan.className} w-277.5 max-w-[90%] relative mt-48.75 mb-50`}>
      <h1 className='absolute z-10 top-0 left-0 -translate-y-[43%] text-[rgba(238,239,244,1)] text-[250px] font-bold leading-50 tracking-[-5px]'>Welcome</h1>
      
      <div className='flex justify-end gap-31.25'>
        
        <div className='relative z-20 max-w-111.25'>
          <h1 className='mb-10.75 mt-18.5 text-[72px] font-bold leading-16 tracking-[-2px] text-[rgba(27,29,35,1)]'>Welcome to Arch Studio</h1>
          <p className='text-[18px] font-medium text-[rgba(96,99,109,1)] leading-6'>
            We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.<br/><br/>

            Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.<br/><br/>

            We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.
          </p>
        </div>

        <Image src='/welcome-img.svg' alt='' width={350} height={568} />
      </div>
    </div>
  )
}

export default Welcome
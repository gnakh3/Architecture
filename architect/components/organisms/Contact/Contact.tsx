import MapLoader from '@/components/atoms/MapLoader/MapLoader'
import ContactDetails from '@/components/molecules/ContactDetails/ContactDetails'
import ContactProject from '@/components/molecules/ContactProject/ContactProject'
import Regex from '@/components/molecules/Regex/Regex'
import React from 'react'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className="flex flex-col justify-evenly  bg-white w-full h-auto gap-35">
      <Image
        src="/contactdecor.svg"
        alt="Decoration"
        width={24}
        height={272}
        className="absolute left-12 top-0 hidden min-[774px]:block"
      />
      <ContactProject />
      <ContactDetails />
      <MapLoader />
      <Regex />
    </div>
  )
}

export default Contact
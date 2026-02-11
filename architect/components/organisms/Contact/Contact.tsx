import MapLoader from '@/components/atoms/MapLoader/MapLoader'
import ContactDetails from '@/components/molecules/ContactDetails/ContactDetails'
import ContactProject from '@/components/molecules/ContactProject/ContactProject'
import Regex from '@/components/molecules/Regex/Regex'
import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col justify-evenly  bg-white w-full h-auto gap-35">
      <ContactProject />
      <ContactDetails />
      <MapLoader />
      <Regex />
    </div>      
  )
}

export default Contact
import MapLoader from '@/components/atoms/MapLoader/MapLoader'
import Regex from '@/components/molecules/Regex/Regex'
import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col justify-evenly  bg-white w-full h-auto gap-35">
      <MapLoader />
      <Regex />
    </div>      
  )
}

export default Contact
"use client";

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../../molecules/Map/Map'), { 
  ssr: false, 
  loading: () => <div className='h-140 max-sm:h-91.75 bg-[#f0f0f0] flex items-center justify-center'>Loading...</div>
});

export default function MapLoader() {
  return <Map/>;
}
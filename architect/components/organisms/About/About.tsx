import Leaders from '@/components/molecules/Leaders/Leaders'
import Professionals from '../../molecules/Professionals/Professionals'
import Heritage from '@/components/molecules/Heritage/Heritage'
import Image from 'next/image'

const About = () => {
  return (
    <div className="flex flex-col justify-evenly bg-white w-full h-auto gap-35">
      <Image
        src="/aboutdecor.svg"
        alt="Decoration"
        width={24}
        height={272}
        className="absolute left-12 top-0 hidden min-[774px]:block"
      />
      <Professionals />
      <Heritage />
      <Leaders />
    </div>
  )
}

export default About
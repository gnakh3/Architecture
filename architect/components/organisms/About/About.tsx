import Leaders from '@/components/molecules/Leaders/Leaders'
import Professionals from '../../molecules/Professionals/Professionals'
import Heritage from '@/components/molecules/Heritage/Heritage'

const About = () => {
  return (
    <div className="flex flex-col justify-evenly bg-white w-full h-auto gap-35">
      <Professionals />
      <Heritage />
      <Leaders />
    </div>
  )
}

export default About
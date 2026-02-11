import Header from "../../atoms/Header/Header"
import Welcome from "../../molecules/Welcome/Welcome"
import ArchStudio from "../../molecules/ArchStuido/ArchStudio"
import Team from "../../molecules/Team/Team"
import Featured from "../../molecules/Featured/Featured"
import Image from "next/image"


const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-evenly  bg-white w-full h-auto gap-35 max-w-[100vw]">
        <Image
          src="/Decoration.svg"
          alt="Decoration"
          width={24}
          height={272}
          className="absolute left-12 top-0 hidden min-[774px]:block"
        />
        <Welcome />
        <ArchStudio />
        <Team />
        <Featured />
      </div>
      <div >
        <footer />
      </div>
    </>
  )
}

export default Home

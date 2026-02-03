import Header from "../../atoms/Header/Header" 
import Welcome from "../../molecules/Welcome/Welcome"
import ArchStudio from "../../molecules/ArchStuido/ArchStudio"
import Team from "../../molecules/Team/Team"
import Featured from "../../molecules/Featured/Featured"
import Footer from "../../atoms/Footer/Footer"



const Home = () => {
  return (
    <div className="flex flex-col justify-evenly  bg-white w-full h-auto gap-35">
      <Welcome />
      <ArchStudio />
      <Team/>
      <Featured />
    </div>
  )
}

export default Home

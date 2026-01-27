import Header from "../../atoms/Header/Header" 
import Welcome from "../../molecules/Welcome/Welcome"
import ArchStudio from "../../molecules/ArchStuido/ArchStudio"
import Team from "../../molecules/Team/Team"
import Featured from "../../molecules/Featured/Featured"
import Footer from "../../atoms/Footer/Footer"



const Home = () => {
  return (
    <div className="flex flex-col justify-between bg-white">
      <Header />
      <Welcome />
      <ArchStudio />
      <Team />
      <Featured />
    </div>
  )
}

export default Home
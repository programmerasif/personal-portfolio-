import About from "./component/About/About"
import Contac from "./component/Contac/Contac"
import Footer from "./component/Footer/Footer"
import HeroSection from "./component/HeroSection/HeroSection"
import MyProjects from "./component/MyProjects/MyProjects"
import Nav from "./component/Navbr/Nav"
import Resume from "./component/Resume/Resume"



function App() {
  

  return (
    <>
      <div className="md:w-[80%] sm:w-full mx-auto ">
        <Nav />
        <HeroSection />
        <About />
        <Resume />
        <MyProjects />
        <Contac />
        <Footer />
        
      </div>
      
    </>
  )
}

export default App

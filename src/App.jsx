import About from "./components/About"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

const App = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
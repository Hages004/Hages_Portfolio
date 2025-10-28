import './App.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Skills from './Components/Skills/Skills'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <Skills/>
     <Project/>
     <Contact/>
    </>
  )
}

export default App

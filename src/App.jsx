import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Hero2 from "./components/Hero2"
import Info from "./components/Info"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
    <div className="max-w-screen-2xl mx-auto">
      <Navbar/>
      <Hero/>
      <Info/>
      <Hero2/>
      <Footer/>
    </div>
    </>
  )
}

export default App

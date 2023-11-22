import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Info from "./components/Info"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
    <div className="max-w-screen-2xl mx-auto">
      <Navbar/>
      <Hero/>
      <Info/>
      <Footer/>
    </div>
    </>
  )
}

export default App

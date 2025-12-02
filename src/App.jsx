// App.jsx
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Stats from "./components/Stats"
import Journey from "./components/Journey"
import Services from "./components/Services"
import Works from "./components/Works"
import Testimonials from "./components/Testimonials"
import FAQ from "./components/FAQ"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-black px-4 py-2 lg:px-16 lg:py-8 min-h-screen">
      <Navbar />
      
      <div className="flex gap-5">
        <Hero />
        <Card />
      </div>
      
      <Stats />
      <Journey />
      <Services />
      <Works />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
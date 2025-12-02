import ScrollReveal from './components/ScrollReveal'
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
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black px-4 py-2 lg:px-16 lg:py-8 min-h-screen overflow-hidden">
      <ScrollReveal animation="fade-down" duration={0.8}>
        <Navbar />
      </ScrollReveal>
      
      <div className="flex flex-col lg:flex-row gap-5">
        <ScrollReveal animation="fade-right" delay={0.2}>
          <Hero />
        </ScrollReveal>
        
        <ScrollReveal animation="fade-left" delay={0.3}>
          <Card />
        </ScrollReveal>
      </div>
      
      <ScrollReveal animation="zoom-in" delay={0.1}>
        <Stats />
      </ScrollReveal>
      
      <ScrollReveal animation="slide-up">
        <Journey />
      </ScrollReveal>
      
      <ScrollReveal animation="fade-up">
        <Services />
      </ScrollReveal>
      
      <ScrollReveal animation="flip-up">
        <Works />
      </ScrollReveal>
      
      <ScrollReveal animation="zoom-in">
        <Testimonials />
      </ScrollReveal>
      
      <ScrollReveal animation="fade-up">
        <FAQ />
      </ScrollReveal>
      
      <ScrollReveal animation="slide-up">
        <Contact />
      </ScrollReveal>

      <ScrollReveal animation="slide-up">
        <Footer />
      </ScrollReveal>
    </div>
  )
}

export default App
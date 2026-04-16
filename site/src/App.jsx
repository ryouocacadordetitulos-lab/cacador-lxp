import { useEffect, useRef, useState } from 'react'
import Hero from './components/Hero'
import ValueProp from './components/ValueProp'
import DealDesk from './components/DealDesk'
import Refund from './components/Refund'
import Barriers from './components/Barriers'
import Testimonials from './components/Testimonials'
import HowItWorks from './components/HowItWorks'
import Experience from './components/Experience'
import Bonuses from './components/Bonuses'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Guarantee from './components/Guarantee'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-brand-dark font-sans overflow-x-hidden">
      <Hero />
      <ValueProp />
      <DealDesk />
      <Refund />
      <Barriers />
      <Testimonials />
      <HowItWorks />
      <Experience />
      <Bonuses />
      <Pricing />
      <Guarantee />
      <FAQ />
      <Footer />
      <FloatingCTA />
    </div>
  )
}

export default App

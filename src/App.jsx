/*import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Navbar/Hero/Hero'
import Houses from './Components/Navbar/OurHouses/Houses'
import Testimonials from './Components/Navbar/Testimonies/Testimonials'
import Newsletter from './Components/Navbar/NewsLetters/Newsletter'
import Footer from './Components/Navbar/Footer/Footer'
import ContactForm from './Components/Navbar/Contact/ContactForm'
import FaqSection from './Components/Navbar/Questions/FaqSection'

const App = () => {
  return (
    <div className='text-sm md:text-lg'>
        
    <Navbar/>
    <Hero/>
    <Houses/>
    <Testimonials/>
    <Newsletter/>
    <Footer/>
    <ContactForm/>
    <FaqSection/>

    </div>
  )
}

export default App*/

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Navbar/Hero/Hero'
import Houses from './Components/Navbar/OurHouses/Houses'
import Testimonials from './Components/Navbar/Testimonies/Testimonials'
import Newsletter from './Components/Navbar/NewsLetters/Newsletter'
import Footer from './Components/Navbar/Footer/Footer'
import ContactForm from './Components/Navbar/Contact/ContactForm'
import FaqSection from './Components/Navbar/Questions/FaqSection'

const Home = () => (
  <>
    <Hero />
    <Houses />
    <Testimonials />
    <Newsletter />
  </>
)

const App = () => {
  return (
    <Router>
      <div className='text-sm md:text-lg'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/faqs" element={<FaqSection />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

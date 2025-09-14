import React from 'react'
import Testimonials from './Testimonials/Testimonials'
import Works from './Works/Works'
import Contact from './Contact/Contact'
import About from './About/About';
import Navbar from './Navbar/Navbar';
import {ReactLenis} from "lenis/react";


const Component = () => {
  return (
    <>
    <div>

      <About/>
    <Works/>
  <Testimonials/>
    
    <Contact/>

   
    </div>
    </>
  )
}

export default Component
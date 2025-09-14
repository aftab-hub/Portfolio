import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Works from './Components/Works/Works'
import Component from './Components/Component'
import Navbar from './Components/Navbar/Navbar'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ReactLenis from 'lenis/react'


const App = ()=> {
  
  gsap.registerPlugin(ScrollTrigger); 

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up')
    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: '-200 bottom',
          end: 'bottom 80%',
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease:'power2.out'
      })
    }) 
  })


  

  return (
<ReactLenis root>
<BrowserRouter>
<div className='App'>
 <Navbar/>
<Routes>
 <Route path='/' element={<Home/>} />
 <Route path='/about' element={<About/>} />
 <Route path='/works' element={<Works/>} />
 <Route path='/contact' element={<Contact/>} />
</Routes>
<Component/>
</div>
    </BrowserRouter>
    </ReactLenis>
  )
}

export default App

import React from 'react'
// import Works from '../Works/Works'
import { FaCode, FaRocket, FaMobileAlt, FaClock } from 'react-icons/fa';
import Skills from './Skills';
import { FaLaptopCode } from "react-icons/fa";

const About = () => {

  return (
    <>

  <section id="about" className="w-full lg:py-2 py-5 px-4 md:px-10 mt-10 ">
      
      {/* About Box */}
     <div className="w-full lg:w-[80%] mx-auto mt-16 px-6 py-10 rounded-3xl bg-white border border-gray-300 dark:border-gray-300 shadow-sm ">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <FaLaptopCode className="text-5xl text-cyan-400 mx-auto" />

        <h2 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-dark">
          I build fast, scalable, and elegant web solutions.
        </h2>

        <p className="text-gray-600 dark:text-gray-700 text-lg font-semibold">
          With a solid foundation in both frontend and backend technologies, I specialize in crafting digital experiences that are not only beautiful but also performant and accessible.
        </p>

        <div className="flex justify-center gap-10 text-center text-gray-700 dark:text-gray-200 font-semibold text-lg mt-4">
          {/* <div>
            <p className="text-3xl text-cyan-400">2+</p>
            <span className='text-gray-700'>Web Apps Built</span>
          </div>
          <div>
            <p className="text-3xl text-cyan-400">1+</p>
            <span className='text-gray-700'>Years of Experience</span>
          </div> */}
        </div>
      </div>
    </div>
      {/* Tech Stack Badges */}
    <Skills/>

      {/* Core Principles */}
      <div className="mx-2 mt-15 text-center  ">
        <h1 className="text-3xl font-bold text-gray-700 mb-8">What I Believe In</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 bg-gray-100 p-5 rounded-xl border border-gray-300">
          <div className="flex flex-col items-center">
            <FaCode className="text-4xl text-cyan-400 mb-3" />
            <p className='text-sm text-gray-700'>Clean & Scalable Code</p>
          </div>
          <div className="flex flex-col items-center">
            <FaMobileAlt className="text-4xl text-cyan-400 mb-3" />
            <p className='text-sm text-gray-700'>Responsive Design</p>
          </div>
          <div className="flex flex-col items-center">
            <FaRocket className="text-4xl text-cyan-400 mb-3" />
            <p className='text-sm text-gray-700'>Performance First</p>
          </div>
          <div className="flex flex-col items-center">
            <FaClock className="text-4xl text-cyan-400 mb-3" />
            <p className='text-sm text-gray-700'>Timely Delivery</p>
          </div>
        </div>
      </div>

   
     
    </section>


    
    </>
  )
}


export default About
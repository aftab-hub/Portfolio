import React from 'react';
import { MdFacebook } from "react-icons/md";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const Home = () => {


  
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-25 px-4 min-h-screen md:px-10 transition-colors duration-300 mb-[-65px] "
    >
      {/* Decorative Blobs */}
      <div className="absolute -top-10 -left-20 w-80 h-80  opacity-20 rounded-full  z-0 " />
      <div className="absolute -bottom-10 -right-20 w-60 h-60 bg-purple-200 opacity-20 rounded-full blur-2xl z-0" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
       className="relative  z-10 max-w-screen-xl mx-auto flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center">

        {/* Text Section */}
        <div className="w-full lg:w-1/2 md:w-1/1 mt-5 lg:mt-0 text-center lg:text-left   ">
          <p className="text-lg text-dark dark:text-dark-400 mb-2 text-shadow-lg">Hi, I'm</p>
          <h1 className='text-4xl md:text-6xl sm:text-3xl font-extrabold leading-tight text-black dark:text-dark mb-4 text-shadow-lg'>  Aftab —{" "}</h1>
         <h1 className="text-3xl sm:text-3xl md:text-6xl font-extrabold leading-tight text-black dark:text-white mb-4 lg:text-start">
  <span className="text-cyan-400  inline-block whitespace-nowrap text-shadow-lg">
    <Typewriter
      options={{
        strings: [' Full Stack Developer', 'React Expert', 'MERN Stack Engineer'],
        autoStart: true,
        loop: true,
        delay: 60,
      }}
    />
  </span>
</h1>


          {/*  content */}
          <p className="text-lg md:text-xl text-gray-700 dark:text-dark-200 mb-6 font-semibold text-shadow-lg">
            Crafting scalable, performant & elegant websites using the MERN stack.
          </p>

          {/* CTA Buttons */}
          <div className="font-semibold flex flex-col justify-center lg:justify-start sm:flex-row items-center gap-4 mb-6">
            <a
              href="https://drive.google.com/file/d/1Z-VBvo4wc8Y3MEq2NzRglWwxPL6xtGNf/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-3  bg-black text-dark border border-black hover:bg-zinc-900 hover:text-black dark:bg-white dark:text-black dark:hover:bg-dark dark:hover:text-white dark:hover:border-white transition rounded"
            >
              Download CV
              <span className="ml-2 group-hover:translate-x-1 font-normal inline-block transition">↗</span>
            </a>

            <a
        
              href="#contact"
              className="cursor-pointer px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white rounded transition"
            >
              Let's work Together
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-5 text-4xl ">
           
            <a href="https://www.linkedin.com/in/aftab-idrishi-85a396257" target="_blank"><FaLinkedin className="text-dark transition " /></a>

            <a href="https://github.com/aftab-hub" target="_blank"><FaGithub className="text-dark transition" /></a>

          </div>

        </div>

        {/* Image Section */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-full md:w-1/2 flex justify-center gap-10"
        >
          <div className="border  border-zinc-300 dark:border-gray-400 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 lg:translate-x-15">
            <img
              src={"./images/c00d50f9-5032-4cfc-bbe8-1a91b639a9e2.png"}
              alt="Developer"
              className="w-full max-w-[450px] p-5 rounded-3xl"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;

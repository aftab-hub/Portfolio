import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <section className='lg:pb-0 pb-5   '>
        <div
        id="contact"
        className="lg:mx-left mx:pt-0 flex flex-col lg:flex-row justify-between items-start gap-10 px-6 md:px-12 py-10 text-gray-800 dark:text-white "
      >
     
        <div className="flex-1 text-center lg:text-left mt-10 lg:mt-0">
          <h2 className="text-4xl font-bold mb-4 text-gray-600 text-center">Contact Me</h2>
          <p className="text-gray-500 dark:text-gray-500 text-lg text-center">
            Interested in working together or have a question? Feel free to reach out — I’ll get back to you as soon as I can.
          </p>
           {/* Social Icons */}
      <div className="mt-5 flex justify-center lg:justify-center gap-6 text-3xl text-gray-600 dark:text-gray-500">
        <a href="https://www.linkedin.com/in/aftab-idrishi-85a396257" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
          <FaLinkedin />
        </a>
        <a href="mailto:aftabaftab1158@gmail.com" className="hover:text-black transition">
          <MdEmail />
        </a>
        <a href="https://github.com/aftab-hub" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-black transition">
          <FaGithub />
        </a>
       
      </div>
        </div>

      </div>
      {/* Footer */}
      <p className="pb-10  text-center text-gray-900 text-sm">
      © 2025 Aftab.
      </p>
      </section>
    

     

      
    </>
  );
};

export default Contact;

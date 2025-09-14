import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <section className='lg:pb-0 pb-5 p-5  '>
        <div
        id="contact"
        className="lg:mx-left mx:pt-0 flex flex-col lg:flex-row justify-between items-start gap-10 px-6 md:px-12 py-10 text-gray-800 dark:text-white "
      >
     
        <div className="flex-1 text-center lg:text-left mt-10 lg:mt-0">
          <h2 className="text-4xl font-bold mb-4 text-gray-600 ">Contact Me</h2>
          <p className="text-gray-500 dark:text-gray-500 text-lg">
            Interested in working together or have a question? Feel free to reach out — I’ll get back to you as soon as I can.
          </p>
           {/* Social Icons */}
      <div className="mt-12 flex justify-center lg:justify-start gap-6 text-3xl text-gray-600 dark:text-gray-400">
        <a href="https://www.linkedin.com/in/aftab-idrishi-85a396257" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
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

        {/* Contact Form */}
        <form className="flex-1 w-full max-w-3xl border border-gray-300 bg-gray-600  rounded-xl shadow-md p-6 space-y-5 md:mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full p-3 rounded-md border border-gray-300  bg-gray-500  placeholder-gray-700 dark:placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full p-3 rounded-md border border-gray-300  bg-gray-500 placeholder-gray-700 dark:placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

        
           <textarea
            name="message"
            rows="2"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-md border border-gray-300  bg-gray-500  placeholder-gray-700 dark:placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>

   
          <div className="text-center md:text-left flex justify-center items-end">
            <button
              type="submit"
              className=" bg-indigo-500  text-white px-6 py-3  rounded-md hover:bg-indigo-600 hover:border-white  cursor-pointer transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
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

import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaMobile, FaWhatsapp } from "react-icons/fa";
import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;




const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${BACKEND_URL}/contact`, form, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data = res.data;

      console.log(data);
      

      if (data.success) {
        setStatus("Message sent successfully ✅");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message ❌");
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong ❌");
    }
  };

  return (
    <>
      <section className='lg:pb-0 pb-5  mt-5'>
        <div
          id="contact"
          className="flex flex-col  lg:flex-row justify-between items-start gap-10 px-6 md:px-12 py-10 text-gray-800 dark:text-white"
        >

          {/* LEFT SIDE */}
          <div className="flex-1 text-center lg:text-left mt-10 lg:mt-0">
            <h2 className="text-4xl font-bold mb-4 text-gray-600 text-center mt-5">Contact Me</h2>
            <p className="text-gray-500 text-lg text-center">
              Interested in working together or have a question? Feel free to reach out — I’ll get back to you as soon as I can.
            </p>

            {/* Social Icons */}
            <div className="mt-5 flex justify-center gap-6 text-3xl text-gray-600">
              <a href="https://www.linkedin.com/in/aftab-idrishi-85a396257" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:aftabaftab1158@gmail.com">
                <MdEmail />
              </a>
              <a href="https://github.com/aftab-hub" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://wa.me/9794078055" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE → FORM */}
          <div className="flex-1 w-full max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="bg-white border border-gray-300  p-5 rounded-xl shadow-md space-y-4">

            <div className='flex flex-row gap-3 justify-between'>
          
               <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full py-2 px-3  border border-gray-300 text-black  rounded-md outline-none"
              />
          

               <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full py-2 px-3 border border-gray-300 rounded-md text-black outline-none"
              />
            
            </div>

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full py-2 px-3 border border-gray-300 text-black rounded-md outline-none"
              />

              <button
                type="submit"
                className="w-full bg-cyan-400 outline-none text-white py-3 rounded-md hover:bg-cyan-500 transition"
              >
                Send Message
              </button>

              {status && (
                <p className="text-center text-sm text-gray-300">{status}</p>
              )}

            </form>
          </div>

        </div>

        {/* Footer */}
        <p className="pb-10 text-center text-gray-900 text-sm">
          © 2025 Aftab.
        </p>
      </section>
    </>
  );
};

export default Contact;
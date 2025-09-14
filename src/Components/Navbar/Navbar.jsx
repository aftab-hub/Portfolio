import React, { useState } from "react";
import { DiMagento } from "react-icons/di";
import { IoMdHome } from "react-icons/io";
import { BiUser } from "react-icons/bi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { RiCodeBoxFill } from "react-icons/ri";
import { MdWorkspacePremium } from "react-icons/md";


const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="bg-cyan-500 fixed top-0 left-0 w-full z-50 shadow-md ">
      <div className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        {/* Logo */}
        <a href="#home" onClick={() => handleLinkClick("Home")}>
          <DiMagento className="text-3xl text-white" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-white font-medium">
          {[
            { name: "Home", href: "#home" },
            { name: "About", href: "#about" },
            { name: "Works", href: "#works" },
            { name: "Reviews", href: "#reviews" },
            { name: "Contact", href: "#contact" },
          ].map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                onClick={() => handleLinkClick(name)}
                className={`hover:text-gray-900 transition-colors duration-300 ${
                  activeLink === name ? "text-cyan-900  font-semibold" : ""
                }`}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Bottom Menu */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white shadow-md z-50">
      <ul className="flex justify-around items-center py-2 text-3xl text-black">
          <li className="text-4xl">
            <a
              href="#home"
              onClick={() => handleLinkClick("Home")}
              className={`${activeLink === "Home" ? "text-cyan-600" : ""}`}
            >
              <IoMdHome />
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => handleLinkClick("About")}
              className={`${activeLink === "About" ? "text-cyan-600" : ""}`}
            >
              <BiUser />
            </a>
          </li>
          <li>
            <a
              href="#works"
              onClick={() => handleLinkClick("Works")}
              className={`${activeLink === "Works" ? "text-cyan-600" : ""}`}
            >
              <RiCodeBoxFill />
            </a>
          </li>
          <li>
            <a
              href="#reviews"
              onClick={() => handleLinkClick("Reviews")}
              className={`${activeLink === "Reviews" ? "text-cyan-600" : ""}`}
            >
              <MdWorkspacePremium />
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => handleLinkClick("Contact")}
              className={`${activeLink === "Contact" ? "text-cyan-600" : ""}`}
            >
              <IoChatboxEllipsesOutline />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

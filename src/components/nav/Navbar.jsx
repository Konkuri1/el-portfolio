import React, { useState } from "react";
import logo from "../../assets/images/desmond.svg";
import Hamburger from "../../assets/images/hamburg.svg";
import CloseIcon from "../../assets/images/close.svg"; // Import the close icon
import github from "../../assets/images/github.svg";
import linkedin from "../../assets/images/linkedin.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent p-2 flex justify-evenly items-center">
      <div className="flex items-center">
        {/* <img src={''} alt="logo" className="h-24 w-auto mr-4" /> */}
        <div className="hidden md:flex">
          <div className="links flex gap-3 cursor-pointer text-black text-xl">
            <span>
              <a href="#" className="no-underline text-inherit">
                HOME
              </a>
            </span>
            <span>
              <a href="#about" className="no-underline text-inherit">
                ABOUT
              </a>
            </span>
            <span>
              <a href="#projects" className="no-underline text-inherit">
                PROJECTS
              </a>
            </span>
            <span>
              <a href="#contact" className="no-underline text-inherit">
                CONTACT
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="socials flex justify-center items-center mr-4">
          <a href="https://www.github.com/dezmymachine" className="mr-2">
            <img src={github} alt="github" className="h-8" />
          </a>
          <a href="https://www.linkedin.com/in/elvis-konkuri-680268189">
            <img src={linkedin} alt="Linkedin" className="h-12 w-auto" />
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <img src={CloseIcon} alt="Close Menu" className="h-8 w-auto" />
            ) : (
              <img
                src={Hamburger}
                alt="Hamburger Menu"
                className="h-8 w-auto"
              />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black text-white absolute inset-0 top-20 left-0 w-full p-4 z-10 h-screen">
          <div className="links flex flex-col gap-3 cursor-pointer text-xl">
            <span>
              <a href="#" className="no-underline text-inherit">
                HOME
              </a>
            </span>
            <span>
              <a href="#about" className="no-underline text-inherit">
                ABOUT
              </a>
            </span>
            <span>
              <a href="#projects" className="no-underline text-inherit">
                PROJECTS
              </a>
            </span>
            <span>
              <a href="#contact" className="no-underline text-inherit">
                CONTACT
              </a>
            </span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

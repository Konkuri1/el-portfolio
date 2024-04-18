import React from "react";
import github from "../../assets/images/github.svg";
import linkedin from "../../assets/images/linkedin.svg";
const Footer = () => {
  return (
    <section className="grid grid-cols-3  mt-5 text-white bg-gray-500 w-full p-2">
      <div className="call me">
        <h5>Connect With Me</h5>
        <p>Email: ekonkury@gmail.com</p>
        <p>Call: +233 0 244 155 642</p>
      </div>
      <div className="call">
        {/* <button className="p-2 bg-white border text-black"></button> */}
      </div>
      <div className="socials">
        <div className="socials flex justify-center items-center">
          <a href="https://www.github.com/Konkuri1">
            <img src={github} alt="github" className="h-8" />
          </a> 
          <a href="linkedin.com/in/elvis-konkuri-680268189">
            <img src={linkedin} alt="Linkedin" className="h-12 w-auto" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;

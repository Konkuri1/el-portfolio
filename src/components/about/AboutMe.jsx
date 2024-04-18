import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className="sm:mx-auto p-5">
      <div className="flex justify-evenly items-center">
        <div className="about flex-grow">
          <h1 className="font-bold sm:text-5xl"></h1>
        </div>
        <div className=" info flex-grow ml-5">
          <p>
            Hello! I am Elvis, an adept Junior Web developer with a healthy blend of transferrable and technical skillsets within the Tech space. Aside my persistence, I am adaptable and this enable me to thrive in teams and multi-cural settings. My experience include JavaScript, React, HTML5, Express, Mongoose, Tailwind CSS, Material UI. I look forward to leveraging my knowledge and skills in developing scalable and robust solutions for the greater good. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

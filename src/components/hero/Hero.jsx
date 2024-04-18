import React from "react";
import img from "../../assets/images/bg-img.jpg";
import AnimateIn from "../animation/Animation";
import './hero.css'

const Hero = () => {
  return (
    <div className="bg-gray-500 flex justify-center items-center">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="text-center md:text-left md:mr-8 p-2">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Elvis Konkuri
          </h1>
          <h3 className="text-2xl md:text-4xl text-white mb-8">
            Junior Web Developer
          </h3>
          {/* <button className="border py-2 px-4 bg-transparent text-white">
          
          </button> */}
        </div>
        <div className="mt-8 md:mt-0">
          <AnimateIn
            from="opacity-0 scale-90"
            to="opacity-100 scale-100"
            duration={500}
          >
            <img src={img} alt="headshot" className=" rounded-full w-64 md:w-96" />
          </AnimateIn>
        </div>
      </div>
    </div>
  );
};

export default Hero;

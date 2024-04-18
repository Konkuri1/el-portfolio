import React from "react";
import Navbar from "../../components/nav/Navbar";
import Hero from "../../components/hero/Hero";
import AboutMe from "../../components/about/AboutMe";
import Skills from "../../components/skills/Skills";
import Portfolio from "../../components/portfolio/Portfolio";
import Footer from "../../components/footer/Footer";

import AnimateIn from "../../components/animation/Animation";

const Home = () => {
  return (
    <div>
      <AnimateIn
        from="opacity-0 scale-90"
        to="opacity-100 scale-100"
        duration={500}
      >
        <Navbar />
        <Hero />
        <AboutMe />
        <Skills />
        <Portfolio />
      </AnimateIn>
      <Footer />
    </div>
  );
};

export default Home;

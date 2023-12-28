import React from "react";
import "../index.css";
import { Header } from "./Header";
import Avatar from "./Avatar";
import About from "./About";
import Skills from "./Skills";
import ProjectSection from "./ProjectSection";
import Footer from "./Footer";

export const MyPortfolio = () => {
  return (
    <div className="relative">
      <div className="sticky top-0 bg-white z-[80]">
        <Header />
      </div>

      <Avatar />

      <div className="w-[90%] mt-[100px] mx-auto lg:flex justify-center">
        <About />
        <Skills />
      </div>

      <div className="mt-[100px]">
        <ProjectSection />
      </div>

      <Footer />
    </div>
  );
};

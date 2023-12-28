import React from "react";
import RecommendSharpIcon from "@mui/icons-material/RecommendSharp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import Logo from "./Logo";

const Footer = () => {
  return (
    <>
      <div className="w-full  mt-[250px] h-[600px] bg-violet-600 relative flex justify-center">
        {/* OverlapBox start*/}
        <div className="w-[90%] bg-[#141c3a] rounded-lg  absolute -top-24 py-[45px] flex justify-around items-end flex-wrap md:py-[65px]">
          <h2 className=" logo2 py-2 text-2xl font-bold tracking-wider text-white md:3xl  lg:text-4xl">
            Start a Project
          </h2>
          <p className="text-white py-2 font-thin px-4 text-center text-md md:text-lg">
            Interested in working together? We should queue up a time to chat.
            I’ll buy the coffee.
          </p>
          <div className="py-2">
            <button className=" w-[200px] bg-transparent  text-[18px]  h-[45px] rounded-lg text-white border border-[#5be9b9] font-light hover:bg-[#5be9b9]">
              Let's do this <RecommendSharpIcon />
            </button>
          </div>
        </div>
        {/* overlapBox end */}

        <div className=" absolute top-[250px] lg:top-[200px] text-white text-2xl">
          <Logo />
        </div>
        <div className="z-40 logo absolute top-[350px] lg:top-[310px] text-white text-xl">
          Living, learning, & leveling up .
        </div>
        <div className="absolute logo top-[380px] lg:top-[340px] text-white text-xl">
          one day at a time
        </div>

        {/* icon */}
        <div className="absolute logo top-[460px] lg:top-[420px] text-white text-xl flex justify-center gap-5">
          <div className="w-[35px] shadow-sm rounded-full flex justify-center py-[5px]  hover:bg-white hover:text-violet-600 ">
            <LinkedInIcon />
          </div>

          <div className="w-[35px] shadow-sm rounded-full flex justify-center py-[5px]  hover:bg-white hover:text-violet-600 ">
            <GitHubIcon />
          </div>

          <div className="w-[35px] shadow-sm rounded-full flex justify-center py-[5px]  hover:bg-white hover:text-violet-600 ">
            <EmailIcon />
          </div>

          <div className="w-[35px] shadow-sm rounded-full flex justify-center py-[5px]  hover:bg-white hover:text-violet-600 ">
            <InstagramIcon />
          </div>
        </div>
        {/* Icon end */}

        <div className="absolute logo top-[550px] lg:top-[500px] text-white">
        © Copyright 2023. Made by Nikhil Raj
        </div>
      </div>
    </>
  );
};

export default Footer;

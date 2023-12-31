import React from "react";
import RecommendSharpIcon from "@mui/icons-material/RecommendSharp";

const FooterBox = () => {
  return (
    <div className="w-[90%] bg-[#141c3a] rounded-lg  absolute -top-24 py-[45px] flex justify-around items-end flex-wrap md:py-[65px]">
      <h2 className=" logo2 py-2 text-2xl font-bold tracking-wider text-white md:3xl  lg:text-4xl">
        Start a Project
      </h2>
      <p className="text-white py-2 font-thin px-4 text-center text-md md:text-lg">
        Interested in working together? We should queue up a time to chat. I’ll
        buy the coffee.
      </p>
      <div className="py-2">
      <a href="https://www.linkedin.com/in/nikhil-raj-50b62219b/">
      <button className=" w-[200px] bg-transparent  text-[18px]  h-[45px] rounded-lg text-white border border-[#5be9b9] font-light hover:bg-[#5be9b9]">
          Let's do this <RecommendSharpIcon />
        </button>
      </a>
      
      </div>
    </div>
  );
};

export default FooterBox;

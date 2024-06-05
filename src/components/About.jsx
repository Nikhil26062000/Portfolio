import React from "react";

const About = () => {
  return (
    <div className="w-[90%] mx-auto border mt-20 shadow-xl mb-4 rounded-lg bg-violet-600 lg:w-[40%]  lg:tracking-wider max-sm:w-[95%]    ">
      <h1 className="logo font-bold text-center text-2xl mt-4 text-white py-4 tracking-wider max-sm:text-lg max-sm:py-0">
        ABOUT ME
      </h1>
      <div className="w-[140px] h-[2px] bg-white mx-auto rounded-lg "></div>

      <div className="w-[90%] pb-5  mx-auto mt-4 pt-5 mb-4 tracking-wide text-white lg:tracking-widest lg:pb-0 max-sm:text-xs max-sm:tracking-wider max-sm:pt-3 max-sm:mt-0 max-sm:pb-1">
      Passionate MERN developer skilled in React JS, Redux, and Tailwind CSS. Proficient in GitHub and Git. Strong problem-solving abilities in C and Java. Dedicated to delivering innovative frontend solutions for enhanced user experiences. Eager to contribute to dynamic projects pushing the boundaries of web development.
      </div>
    </div>
  );
};

export default About;

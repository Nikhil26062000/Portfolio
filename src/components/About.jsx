import React from "react";

const About = () => {
  return (
    <div className="w-[90%] mx-auto border mt-20 shadow-xl mb-4 rounded-lg bg-violet-600 lg:w-[40%]  lg:tracking-wider">
      <h1 className="logo font-bold text-center text-2xl mt-4 text-white py-4 tracking-wider">
        ABOUT ME
      </h1>
      <div className="w-[140px] h-[2px] bg-white mx-auto rounded-lg "></div>

      <div className="w-[90%] pb-5  mx-auto mt-4 pt-5 mb-4 tracking-wide text-white lg:tracking-widest lg:pb-0">
        Enthusiastic computer science fresher proficient in React JS, Redux, and
        Tailwind CSS. Adept at leveraging GitHub for collaborative development
        and Git for version control. Skilled in problem-solving, with a strong
        grasp of C and Java. Passionate about delivering innovative frontend
        solutions that enhance user experiences.
      </div>
    </div>
  );
};

export default About;

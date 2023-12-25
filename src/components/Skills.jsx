import React from "react";
import SkillsButton from "./SkillsButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {
//   var settings = {
//     infinite: true,
//     speed: 500,
//     arrows: false,
//     autoplay: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//   };
  return (
    <div className="w-[90%] mx-auto shadow-xl rounded-lg bg-slate-100 lg:w-[40%] mt-20 mb-4">
        <h1 className="logo font-bold text-center text-2xl pt-4 text-black">SKILLS</h1>
        <div className="w-[140px] h-[2px] bg-black mx-auto rounded-lg "></div>
      {/* <div className="mb-4 mt-8 ml-14 sm:">
        <Slider {...settings}>
          <SkillsButton val="HTML" />
          <SkillsButton val="CSS3" />
          <SkillsButton val="JAVASSCRIPT" />
          <SkillsButton val="REACT" />
     
        </Slider>
      </div>

      <div className="mx-6">
        <Slider {...settings}>
          <SkillsButton val="REDUX" />
          <SkillsButton val="TAILWIND" />
          <SkillsButton val="GIT" />
          <SkillsButton val="GITHUB" />
       
        </Slider>
      </div>

      <div className="mx-6 mt-4">
        <Slider {...settings}>
         
          <SkillsButton val="C" />
          <SkillsButton val="JAVA" />
          <SkillsButton val="OOPS" />
          <SkillsButton val="MYSQL" />
          <SkillsButton val="FIREBASE" />
        </Slider>
      </div> */}

      <div className="mt-6 mx-2 flex justify-center gap-4 flex-wrap py-4">
      <SkillsButton val="HTML" />
          <SkillsButton val="CSS3" />
          <SkillsButton val="JAVASSCRIPT" />
          <SkillsButton val="REACT" />
          <SkillsButton val="REDUX" />
          <SkillsButton val="TAILWIND" />
          <SkillsButton val="GIT" />
          <SkillsButton val="GITHUB" />
          <SkillsButton val="C" />
          <SkillsButton val="JAVA" />
          <SkillsButton val="OOPS" />
          <SkillsButton val="MYSQL" />
          <SkillsButton val="FIREBASE" />
      </div>
    </div>
  );
};

export default Skills;

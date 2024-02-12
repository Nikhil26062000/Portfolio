import React from "react";
import Card from "./Cards";
import FOOD from "../Images//FOOD.png";
import NETFLIX from "../Images//NETFLIX.png";
import TODO from "../Images/TODO.png";
import GUESS from "../Images//GUESS.png";
import CHAR2 from "../Images//CHAR2.png";
import INSTA from "../Images/insta.png";


const ProjectSection = () => {
  return (
    <div>
      <div className="w-[100%] h-[450px] bg-violet-600">
        <div className="w-[90%] mx-auto ">
          <h1 className="text-2xl pt-24 logo text-center lg:text-4xl text-white tracking-wider max-sm:text-xl">
            PROJECTS
          </h1>
          <div className="w-[220px] h-[2px] mb-6 mt-2 bg-white mx-auto rounded-lg"></div>

          <p className="text-center text-sm text-white sm:text-lg mt-6 tracking-wider">
            Here are some of my projects I made using latest Frontend Technology
            . There are lot more in my github repository .
          </p>

          <div className="flex justify-center mt-4">
            <a href="https://github.com/Nikhil26062000?tab=repositories">
              <button className=" w-[150px] bg-transparent font-normal  text-[16px]  h-[45px] rounded-lg text-white border border-white  hover:bg-white hover:text-violet-600 max-sm:text-sm">
                Check Out
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className=" -mt-36 flex justify-center flex-wrap gap-5 lg:gap-16">
        <Card
          img={INSTA}
          name="Instagram Clone"
          desc="Bringing the essence of Instagram to life with every line of code."
          link1="https://drive.google.com/file/d/1UpomHs4WmEeqptsO22yALVgiBoGgk9O4/view?usp=sharing"
          link2="https://github.com/Nikhil26062000/Social-Media-App-Instagram"
        />

        <Card
          img={FOOD}
          name="FOOD APP"
          desc="Food Delivery Application like Swiggy and Zomato..."
          link1="https://drive.google.com/file/d/1JsKmq4BIOGR4kAZ2u1M6-jkByfnp1UrK/view?usp=sharing"
          link2="https://github.com/Nikhil26062000/FoodApp"
        />
        <Card
          img={NETFLIX}
          name="NETFLIX-GPT"
          desc="Netflix-GPT is an application similar to Netflix... "
          link1="https://nikhil26062000.github.io/Netflix-GPT/"
          link2="https://github.com/Nikhil26062000/Netflix-GPT"
        />
        <Card
          img={TODO}
          name="TODO APP"
          desc="Application to store daily stuffs news for our day to day life..."
          link1="https://nikhil26062000.github.io/Task-Management-Application/"
          link2="https://github.com/Nikhil26062000/Task-Management-Application"
        />
        <Card
          img={GUESS}
          name="GUESS ASAP"
          desc="Guess as soon as Possible . Good Luck 👍 ..."
          link1="https://nikhil26062000.github.io/GuessTheNumberGame/"
          link2="https://github.com/Nikhil26062000/GuessTheNumberGame"
        />
        <Card
          img={CHAR2}
          name="CHAR COUNT"
          desc="Character counter Application with Grammarly API..."
          link1="https://nikhil26062000.github.io/GrammarlyCharCountetr/"
          link2="https://github.com/Nikhil26062000/GrammarlyCharCountetr"
        />
        
      </div>
    </div>
  );
};

export default ProjectSection;

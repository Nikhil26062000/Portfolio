import React from "react";
import Logo from "./Logo";

const FooterQuotes = () => {
  return (
    <>
      <div className=" absolute top-[250px] lg:top-[200px] text-white text-2xl">
        <Logo />
      </div>
      <div className="z-40  absolute top-[350px] lg:top-[310px] text-white text-xl">
        Living, learning, & leveling up .
      </div>
      <div className="absolute top-[380px] lg:top-[340px] text-white text-xl">
        one day at a time
      </div>
    </>
  );
};

export default FooterQuotes;

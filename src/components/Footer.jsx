import React from "react";

import Copyright from "./Copyright";
import FooterIcons from "./FooterIcons";

import FooterQuotes from "./FooterQuotes";
import FooterBox from "./FooterBox";

const Footer = () => {
  return (
    <>
      <div className="w-full  mt-[250px] h-[600px] bg-violet-600 relative flex justify-center">
        <FooterBox />

        <FooterQuotes />
        <FooterIcons />
        <Copyright />
      </div>
    </>
  );
};

export default Footer;

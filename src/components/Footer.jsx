import React from "react";

import Copyright from "./Copyright";
import FooterIcons from "./FooterIcons";

import FooterQuotes from "./FooterQuotes";
import FooterBox from "./FooterBox";

const Footer = () => {
  return (
    <>
      <div className="w-[100%] px-10  mt-[250px] h-[600px] bg-violet-600 relative flex justify-center">
        <FooterBox />

        <FooterQuotes />
        <FooterIcons />
        <Copyright />
      </div>
    </>
  );
};

export default Footer;

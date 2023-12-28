import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";

const FooterIcons = () => {
  return (
    <div className="absolute logo top-[460px] lg:top-[420px] text-white text-xl flex justify-center gap-5">
      <a href="https://www.linkedin.com/in/nikhil-raj-50b62219b/">
        <div className="w-[35px] shadow-sm rounded-full flex justify-center py-[5px]  hover:bg-white hover:text-violet-600 ">
          <LinkedInIcon />
        </div>
      </a>

      <a href="https://github.com/Nikhil26062000?tab=repositories">
        <div className="w-[35px] shadow-sm rounded-full flex justify-center py-[5px]  hover:bg-white hover:text-violet-600 ">
          <GitHubIcon />
        </div>
      </a>

    

      <a href="https://www.instagram.com/nikhil_cmp/">
        <div className="w-[35px] shadow-sm rounded-full flex justify-center py-[5px]  hover:bg-white hover:text-violet-600 ">
          <InstagramIcon />
        </div>
      </a>
    </div>
  );
};

export default FooterIcons;

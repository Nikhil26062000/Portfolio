import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";


const FooterIcons = () => {
  return (
    <div className="absolute logo top-[460px] lg:top-[420px] text-white text-xl flex justify-center gap-5">


<a href="https://leetcode.com/nikhilsbn06/">
        <div className="w-[25px] shadow-sm rounded-full flex justify-center py-[5px] ">
          <img src="https://user-images.githubusercontent.com/36547915/97088991-45da5d00-1652-11eb-900f-80d106540f4f.png" alt="Leetcode" className="rounded-full" />
        </div>
      </a>

      <a href="https://github.com/Nikhil26062000?tab=repositories">
        <div className="w-[35px] shadow-sm rounded-full flex justify-center py-[5px] text-black ">
          <GitHubIcon />
        </div>
      </a>

      <a href="https://www.linkedin.com/in/nikhil-raj-50b62219b/">
        <div className="w-[35px] shadow-sm rounded-full flex justify-center py-[5px] ">
          <LinkedInIcon />
        </div>
      </a>




      <a href="https://www.hackerrank.com/profile/nikhilsbn06">
        <div className="w-[40px] shadow-sm rounded-full flex justify-center pb-[1px] ">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png" alt="HackerRank" className="rounded-full"/>
        </div>
      </a>

      <a href="mailto:nikhilsbn06@gmail.com">
        <div className="w-[35px] shadow-sm rounded-full flex justify-center py-[5px] ">
          <EmailIcon />
        </div>
      </a>

      

     

    

      


    </div>
  );
};

export default FooterIcons;

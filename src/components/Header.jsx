import React from "react";

import DownloadIcon from '@mui/icons-material/Download';
import Button from "./Button";
import Logo from "./Logo";
import Avatar from "./Avatar";

export const Header = () => {
  return (
    
    <div className=" w-[90%] mx-auto mt-4 flex justify-between items-center ">
    <Logo/>
      

      <div className="hidden  sm:flex justify-center mx-4">

      <Button />
        
      </div>



<div className="sm:hidden">
<a href="https://drive.google.com/file/d/1n9gCta4iUrn_jWpu5hY7H--6GAITyMk6/view?usp=sharing">
        <DownloadIcon />
        </a>
      </div>

      

    </div>

    
   
  );
};
 
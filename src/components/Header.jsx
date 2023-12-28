import React from "react";

import DownloadIcon from '@mui/icons-material/Download';
import Button from "./Button";
import Logo from "./Logo";

export const Header = () => {
  return (
    <div className=" w-[90%] mx-auto h-24 mt-4 flex justify-between items-center ">
    <Logo/>
      

      <div className="hidden  sm:flex justify-center mx-4">

      <Button />
        
      </div>


<a href="https://drive.google.com/file/d/1sxjF-4hb_kJnG6v_Qreu3vs_JkEyP5Ii/view?usp=sharing">
<div className="sm:hidden">
        <DownloadIcon />
      </div>
</a>
      

    </div>
  );
};
 
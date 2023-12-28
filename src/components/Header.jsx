import React from "react";

import ChatIcon from '@mui/icons-material/Chat';
import Button from "./Button";
import Logo from "./Logo";

export const Header = () => {
  return (
    <div className=" w-[90%] mx-auto h-24 mt-4 flex justify-between items-center ">
    <Logo/>
      

      <div className="hidden  sm:flex justify-center mx-4">

      <Button />
        
      </div>



      <div className="sm:hidden">
        <ChatIcon />
      </div>

    </div>
  );
};
 
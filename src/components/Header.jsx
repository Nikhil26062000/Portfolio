import React from "react";

import ChatIcon from '@mui/icons-material/Chat';
import Button from "./Button";

export const Header = () => {
  return (
    <div className=" w-[90%] mx-auto h-24 mt-4 flex justify-between items-center  sm:bg-yellow-500 md:w-[80%] md:bg-green-600 lg:bg-pink-500 xl:bg-slate-600">

      <div className="w-[80px] h-[80px] rounded-full bg-violet-600 flex justify-center items-center text-white ">
        <h2 className="logo text-5xl font-extrabold">N</h2>
      </div>

      <div className="hidden  sm:flex justify-center mx-4">

      <Button/>
        
      </div>



      <div className="sm:hidden">
        <ChatIcon />
      </div>

    </div>
  );
};
 
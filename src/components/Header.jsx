import React from "react";

import ChatIcon from '@mui/icons-material/Chat';

export const Header = () => {
  return (
    <div className=" w-[90%] mx-auto h-24 mt-4 flex justify-between items-center">

      <div className="w-[80px] h-[80px] rounded-full bg-violet-600 flex justify-center items-center text-white">
        <h2 className="logo text-5xl font-extrabold">N</h2>
      </div>

      <div className="hidden  sm:flex justify-center mx-4">

      <button className="logo w-[130px] bg-violet-600 text-[18px]  h-[45px] rounded-lg text-white border border-violet-800 font-medium">Say hello👋</button>
        
      </div>



      <div className="sm:hidden">
        <ChatIcon />
      </div>

    </div>
  );
};
 
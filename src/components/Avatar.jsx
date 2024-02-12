import React from 'react';
import { ReactComponent as AvatarLogo } from '../Images/Av.svg';

const Avatar = () => {
  return (
    <div className="w-[90%] mx-auto mt-[10px] h-[85vh] flex flex-col justify-center ">




      <h1 className="logo font-extrabold text-2xl text-center sm:text-3xl md:text-4xl lg:text-5xl ">
        Building the web, pixel by pixel. 🖥️🚀
      </h1>
      <p className=" logo text-sm text-center mt-[24px] sm:text-xl sm:font-normal">
        Coding dreams into websites.
      </p>

      <div className='flex justify-center'>
      <AvatarLogo alt="Avatar" />
      </div>
   
    </div>
  );
};

export default Avatar;

import React from 'react';
import { IoIosPlay } from 'react-icons/io';

export default function Video() {
  return (
    <div className="h-full w-full relative flex justify-center items-center">
      <img
        src="https://im5.ezgif.com/tmp/ezgif-5-6225a4bb7e.gif"
        alt=""
        className="w-full h-full object-cover absolute"
      />
      <div className="absolute w-full h-full bg-black/40"></div>
      <div className="absolute text-white border border-white rounded-full p-5 flex items-center justify-center cursor-pointer animate-pulse">
        <IoIosPlay size={40} className="self-center" />
      </div>
    </div>
  );
}

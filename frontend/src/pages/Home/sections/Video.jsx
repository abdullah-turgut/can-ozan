import React from 'react';
import { FiPlay } from 'react-icons/fi';

export default function Video() {
  return (
    <div className="h-full w-full relative flex justify-center items-center">
      <img
        src="https://im5.ezgif.com/tmp/ezgif-5-6225a4bb7e.gif"
        alt=""
        className="w-full h-full object-cover absolute"
      />
      <div className="absolute text-gray-500 border border-gray-500 rounded-full p-5 flex items-center justify-center">
        <FiPlay size={40} />
      </div>
    </div>
  );
}

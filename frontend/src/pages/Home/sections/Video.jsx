import React from 'react';
import { IoIosPlay } from 'react-icons/io';
import { IoCloseOutline } from 'react-icons/io5';
import video from '../../../assets/videos/kalbimden_tenime.webm';

export default function Video() {
  function playVideo() {
    document.querySelector('#iframe').classList.remove('hidden');
    document.querySelector('#iframe').classList.add('flex');
  }

  function stopVideo() {
    document.querySelector('#iframe').classList.remove('flex');
    document.querySelector('#iframe').classList.add('hidden');
    document.querySelector('#iframe1').src += '';
  }

  return (
    <div className="h-full w-full relative flex justify-center items-center">
      <img />
      <video
        src={video}
        className="w-full h-full object-cover absolute"
        autoPlay
        muted
        loop
      ></video>
      <div className="absolute w-full h-full bg-black/40"></div>
      <div
        className="absolute text-white border border-white rounded-full p-5 flex items-center justify-center cursor-pointer animate-pulse"
        onClick={playVideo}
      >
        <IoIosPlay size={40} className="self-center" />
      </div>
      <div
        className="hidden absolute h-full w-full justify-center items-center bg-black/70"
        id="iframe"
      >
        <iframe
          src="https://www.youtube.com/embed/oD6fL4yyhDk?rel=0&autoplay=0&color=white"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-1/2 h-1/2"
          id="iframe1"
        ></iframe>
        <div
          className="text-white absolute top-1/4 -translate-y-full right-1/4 translate-x-full p-6 bg-black/10 rounded-full  flex justify-center items-center animate-pulse cursor-pointer"
          onClick={stopVideo}
        >
          <IoCloseOutline size={24} className="z-30 absolute" />
        </div>
      </div>
    </div>
  );
}

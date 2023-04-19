import React from 'react';
import { albums } from '../../../mocks/albumsData';

export default function Music() {
  function slideRight() {
    document.querySelector('#album-slider').scrollBy({
      left: 500,
      behavior: 'smooth',
    });
  }
  return (
    <div className="w-full mt-28">
      <div
        className="bg-black flex overflow-scroll scrollbar-none"
        id="album-slider"
      >
        <div className="min-w-[500px] h-5 bg-gray-500"></div>
        <div className="min-w-[500px] h-5 bg-red-500"></div>
        <div className="min-w-[500px] h-5 bg-blue-500"></div>
        <div className="min-w-[500px] h-5 bg-green-500"></div>
      </div>
      <div className="absolute" onClick={slideRight}>
        asdas
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';

export default function Music({ albums, setAlbums }) {
  function slideRight() {
    document.querySelector('#album-slider').scrollBy({
      left: 500,
      behavior: 'smooth',
    });
  }
  function slideLeft() {
    document.querySelector('#album-slider').scrollBy({
      left: -500,
      behavior: 'smooth',
    });
  }

  console.log(albums);

  return (
    <div className="w-full mt-28">
      <p className="px-[10%] text-5xl mb-24 font-serif font-semibold">Müzik</p>
      <div
        className="bg-black mx-[10%] flex overflow-scroll scrollbar-none"
        id="album-slider"
      >
        <div className="min-w-[500px] h-5 bg-gray-500"></div>
        <div className="min-w-[500px] h-5 bg-red-500"></div>
        <div className="min-w-[500px] h-5 bg-blue-500"></div>
        <div className="min-w-[500px] h-5 bg-green-500"></div>
        <div
          className="absolute left-20 cursor-pointer text-3xl"
          onClick={slideLeft}
        >
          {'<'}
        </div>
        <div
          className="absolute right-20 cursor-pointer text-3xl"
          onClick={slideRight}
        >
          {'>'}
        </div>
      </div>
    </div>
  );
}

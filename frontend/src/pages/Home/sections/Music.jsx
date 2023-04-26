import React, { useState, useEffect } from 'react';

export default function Music({ albums, setAlbums }) {
  const [indexAlbum, setIndexAlbum] = useState(0);

  function slideRight() {
    document.querySelector('#album-slider').scrollBy({
      left: 300,
      behavior: 'smooth',
    });
    if (indexAlbum > 0) {
      setIndexAlbum((preVal) => preVal + 1);
    }
  }
  function slideLeft() {
    document.querySelector('#album-slider').scrollBy({
      left: -300,
      behavior: 'smooth',
    });
    if (indexAlbum < albums.length) {
      setIndexAlbum((preVal) => preVal + 1);
    }
  }

  const listAlbums = albums.map((album, i) => (
    <img
      src={album.images[0].url}
      alt=""
      className={
        i == indexAlbum
          ? 'w-[500px] h-[500px] snap-start object-cover rounded-3xl'
          : 'w-[400px] h-[400px] snap-start object-cover rounded-3xl'
      }
    />
  ));
  console.log(listAlbums);

  return (
    <div className="w-full pt-28 h-screen relative">
      <p className="px-[10%] text-5xl mb-10  font-serif font-semibold">Müzik</p>
      <div
        className="mx-[10%] flex items-end gap-x-20 snap-x overflow-scroll scrollbar-none"
        id="album-slider"
      >
        {listAlbums}
      </div>
      <div
        className="absolute top-1/2 left-20 cursor-pointer text-3xl"
        onClick={slideLeft}
      >
        {'<'}
      </div>
      <div
        className="absolute top-1/2 right-20 cursor-pointer text-3xl"
        onClick={slideRight}
      >
        {'>'}
      </div>
    </div>
  );
}

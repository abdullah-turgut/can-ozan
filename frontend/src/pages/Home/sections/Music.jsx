import React from 'react';
import { albums } from '../../../mocks/albumsData';

export default function Music() {
  return (
    <div className="h-full py-[10%] pl-[10%] flex flex-col ">
      <h3 className="font-serif text-7xl">Müzik</h3>
      <div className="flex h-[80%] mt-24 bg-gray-500">
        <img src={albums[0].albumCover} alt="" />
      </div>
    </div>
  );
}

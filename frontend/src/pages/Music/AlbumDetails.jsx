import React from 'react';
import { titleCase } from 'title-case';

export default function AlbumDetails({ album, track }) {
  return (
    <>
      <img
        src={album.images[0].url}
        alt="album_cover"
        className="w-1/2 rounded-3xl shadow-2xl shadow-black"
      />
      <div className="flex flex-col w-1/2 ">
        <p className="font-serif text-3xl">{album.name}</p>
        <div className="flex justify-between items-center">
          <div>{album.release_date.slice(0, 4)}</div>
          <div>{album.total_tracks} parça</div>
          <div> dk</div>
          <a href=""></a>
        </div>
      </div>
    </>
  );
}

import React from 'react';
import { titleCase } from 'title-case';

export default function AlbumDetails({ album, track }) {
  function millisToMinutesAndSeconds(millis) {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return seconds == 60
      ? minutes + 1 + ':00'
      : minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }

  let duration = track[0].tracks
    .map((t) => t.duration_ms)
    .reduce((acc, curr) => acc + curr, 0);

  return (
    <>
      <img
        src={album.images[0].url}
        alt="album_cover"
        className="w-1/2 rounded-3xl shadow-2xl shadow-black"
      />
      <div className="flex flex-col w-1/2 ">
        <p className="font-serif text-3xl">{titleCase(album.name)}</p>
        <div className="flex justify-between items-center">
          <div>{album.release_date.slice(0, 4)}</div>
          <div>{album.total_tracks} parça</div>
          <div>{millisToMinutesAndSeconds(duration).slice(0, 2)} dk</div>
          <a href=""></a>
        </div>
      </div>
    </>
  );
}

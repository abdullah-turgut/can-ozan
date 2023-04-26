import React, { useEffect, useState } from 'react';
import { titleCase } from 'title-case';

export default function AlbumDetails({ idAlbum }) {
  const [currAlbum, setCurrAlbum] = useState(
    JSON.parse(sessionStorage.getItem('albums')).filter(
      (el) => el.id === idAlbum
    )[0]
  );

  useEffect(() => {
    setCurrAlbum(
      JSON.parse(sessionStorage.getItem('albums')).filter(
        (el) => el.id === idAlbum
      )[0]
    );
    setTracks(JSON.parse(sessionStorage.getItem(idAlbum)));
  }, [idAlbum]);

  const [tracks, setTracks] = useState(
    JSON.parse(sessionStorage.getItem(idAlbum))
  );

  function msToTime(s) {
    let ms = s % 1000;
    s = (s - ms) / 1000;
    let secs = s % 60;
    s = (s - secs) / 60;
    let mins = s % 60;

    return mins + ':' + secs;
  }

  const listTracks = tracks.tracks.map((track, i) => (
    <div
      key={i}
      className="flex justify-between border-b border-gray-400 py-4 text-lg font-semibold"
    >
      <div className="flex gap-x-4">
        <p>{i + 1}</p>
        <p>{track.name}</p>
      </div>

      <p>{msToTime(track.duration_ms)}</p>
    </div>
  ));

  return (
    <>
      <img
        src={currAlbum.images[0].url}
        alt="album_cover"
        className="w-1/2 rounded-3xl shadow-2xl shadow-black object-cover"
      />
      <div className="flex flex-col w-1/2">
        <p className="font-serif text-4xl">{currAlbum.name}</p>
        <div className="flex justify-between items-center text-sm font-medium mt-4">
          <div>{currAlbum.release_date.slice(0, 4)}</div>
          <div>{tracks.tracks.length} parça</div>
          <div>{tracks.duration} dk</div>
          <a
            href={currAlbum.external_urls.spotify}
            target="_blank"
            className="border border-black px-8 py-1 rounded-full uppercase hover:bg-black hover:text-white"
          >
            Dinle
          </a>
        </div>
        <div className="flex flex-col mt-3">{listTracks}</div>
      </div>
    </>
  );
}

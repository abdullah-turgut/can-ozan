import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AlbumDetails from './AlbumDetails';

export default function Musics({ albums }) {
  const navigate = useNavigate();
  const [idAlbum, setIdAlbum] = useState(
    sessionStorage.getItem('albums') ? '0T0BoQ0unk3MGwOrI8Eyup' : null
  );

  useEffect(() => {
    if (!idAlbum) {
      navigate('/');
    }
  }, [idAlbum]);

  function changeAlbum(e) {
    setIdAlbum(e.target.id);
    console.log(idAlbum);
  }

  const listAlbums = albums.map((album) => (
    <img
      src={album.images[0].url}
      className="w-[32%] rounded-2xl cursor-pointer hover:scale-[101%]"
      id={album.id}
      onClick={(e) => changeAlbum(e)}
      key={album.id}
    />
  ));

  return (
    <main className="px-32 py-36 border bg-[#EAEAEA] w-full max-w-[1440px] mx-auto min-h-screen flex flex-col">
      <p className="font-serif text-6xl font-medium">Müzik</p>
      <div className="flex gap-x-24 items-end mt-24">
        {idAlbum && <AlbumDetails idAlbum={idAlbum} />}
      </div>
      <div className="flex flex-wrap gap-x-[2%] gap-y-4 mt-52">
        {listAlbums}
      </div>
    </main>
  );
}

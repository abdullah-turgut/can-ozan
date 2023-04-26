import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AlbumDetails from './AlbumDetails';

export default function Musics() {
  const navigate = useNavigate();
  const [idAlbum, setIdAlbum] = useState(
    sessionStorage.getItem('albums')
      ? sessionStorage.getItem('0T0BoQ0unk3MGwOrI8Eyup')
      : null
  );

  useEffect(() => {
    if (!idAlbum) {
      navigate('/');
    }
  }, [idAlbum]);

  return (
    <main className="px-32 py-36 border bg-[#EAEAEA] w-full min-h-screen flex flex-col">
      <p className="font-serif text-6xl font-medium">Müzik</p>
      <div className="flex gap-x-24 items-end mt-24">
        {idAlbum && <AlbumDetails idAlbum={idAlbum} />}
      </div>
    </main>
  );
}

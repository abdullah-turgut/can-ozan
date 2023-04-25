import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AlbumDetails from './AlbumDetails';

export default function Musics() {
  const [albums, setAlbums] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [album, setAlbum] = useState([]);
  const [track, setTrack] = useState([]);
  const [token, setToken] = useState(null);
  const [validToken, setValidToken] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  function getToken() {
    let body = {
      grant_type: 'client_credentials',
      client_id: import.meta.env.VITE_CLIENT_ID,
      client_secret: import.meta.env.VITE_CLIENT_SECRET,
    };
    axios
      .post('https://accounts.spotify.com/api/token', body, {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      })
      .then((res) => {
        setToken(res.data.access_token);
        setValidToken(true);
      });
  }

  function getAlbums() {
    axios
      .get('https://api.spotify.com/v1/artists/4MUb8ilmrxyePXwSkG31lC/albums', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setAlbums((preVal) => res.data.items);
      });
  }

  function getTracks(id) {
    setTracks([]);
    axios
      .get(`https://api.spotify.com/v1/albums/${id}/tracks`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setTracks((prevArr) => [
          ...prevArr,
          { tracks: res.data.items, album_id: id },
        ]);
      });
  }

  let x = false;

  useEffect(() => {
    setTimeout(() => {
      setValidToken(false);
    }, 1000 * 60 * 60);
    getToken();
    getAlbums();
    setIsLoaded(true);
  }, [validToken]);

  useEffect(() => {
    if (albums.length) {
      albums.map((el) => getTracks(el.id));
    }
    setAlbum((preVal) => albums[0]);
    setTrack((preVal) => [...tracks.filter((el) => el.album_id === album.id)]);
  }, [albums]);

  console.log(isLoaded);

  return (
    <main className="px-32 py-36 border bg-[#EAEAEA] w-full min-h-screen flex flex-col">
      <p className="font-serif text-6xl font-medium">Müzik</p>
      <div className="flex gap-x-24 items-end mt-24">
        {isLoaded && <AlbumDetails album={album} track={track} />}
      </div>
    </main>
  );
}

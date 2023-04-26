import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Musics from './pages/Music/Musics';

function App() {
  const [token, setToken] = useState('');
  const [albums, setAlbums] = useState([]);
  const [haveData, setHaveData] = useState(false);

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
        setAlbums(res.data.items);
        setHaveData(true);
        sessionStorage.setItem('albums', JSON.stringify(albums));
      });
  }

  function getTracks(id) {
    axios
      .get(`https://api.spotify.com/v1/albums/${id}/tracks`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        let data = {
          album_id: id,
          duration: Math.round(
            res.data.items
              .map((t) => t.duration_ms)
              .reduce((acc, curr) => acc + curr, 0) / 60000
          ),
          tracks: res.data.items,
        };
        sessionStorage.setItem(`${id}`, JSON.stringify(data));
      });
  }

  useEffect(() => {
    getToken();
    getAlbums();
    albums.map((el) => {
      getTracks(el.id);
    });
  }, [haveData]);

  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/musics" element={<Musics />} />
      </Routes>
    </div>
  );
}

export default App;

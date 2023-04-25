import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Musics from './pages/Music/Musics';

function App() {
  const [albums, setAlbums] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [token, setToken] = useState(null);
  const [validToken, setValidToken] = useState(false);

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

  function deneme() {
    console.log('yes');
    setValidToken(true);
  }

  useEffect(() => {
    // setTimeout(() => {
    //   setValidToken(false);
    // });
    deneme();
  }, [validToken]);

  console.log(token);

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

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

  useEffect(() => {});

  console.log(import.meta.env.VITE_CLIENT_ID);

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

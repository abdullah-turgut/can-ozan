import React from 'react';
import Hero from './sections/Hero';
import Music from './sections/Music';
import Video from './sections/Video';
import Concerts from './sections/Concerts';

export default function Home({ albums, setAlbums }) {
  return (
    <div className="flex flex-col bg-[#EAEAEA]">
      <section className="h-screen ">
        <Hero />
      </section>
      <section className="h-screen">
        <Music albums={albums} setAlbums={setAlbums} />
      </section>
      <section className="h-screen">
        <Video />
      </section>
      <section className="h-screen">
        <Concerts />
      </section>
      <section className="h-screen">Contact</section>
    </div>
  );
}

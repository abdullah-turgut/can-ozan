import React from 'react';
import Hero from './sections/Hero';
import Music from './sections/Music';
import Video from './sections/Video';
import Concerts from './sections/Concerts';

export default function Home({ albums, setAlbums }) {
  return (
    <div className="flex flex-col bg-[#EAEAEA] snap snap-y snap-mandatory">
      <section className="h-screen snap-start">
        <Hero />
      </section>
      <section className="h-screen snap-start">
        <Music albums={albums} setAlbums={setAlbums} />
      </section>
      <section className="h-screen snap-start">
        <Video />
      </section>
      <section className="h-screen snap-start">
        <Concerts />
      </section>
      <section className="h-screen snap-start">Contact</section>
    </div>
  );
}

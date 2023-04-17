import React from 'react';
import Hero from './sections/Hero';
import Music from './sections/Music';

export default function Home() {
  return (
    <div className="flex flex-col bg-[#EAEAEA]">
      <section className="h-screen ">
        <Hero />
      </section>
      <section className="h-screen">
        <Music />
      </section>
      <section className="h-screen">Video</section>
      <section className="h-screen">Concerts</section>
      <section className="h-screen">Contact</section>
    </div>
  );
}

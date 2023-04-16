import React from 'react';
import Hero from './sections/Hero';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="h-screen bg-gray-100">
        <Hero />
      </section>
      <section className="h-screen bg-gray-200">Music</section>
      <section className="h-screen bg-gray-300">Video</section>
      <section className="h-screen bg-gray-400">Concerts</section>
      <section className="h-screen bg-gray-500">Contact</section>
    </div>
  );
}

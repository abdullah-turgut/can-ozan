import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AlbumDetails from './AlbumDetails';

export default function Musics() {
  return (
    <main className="px-32 py-36 border bg-[#EAEAEA] w-full min-h-screen flex flex-col">
      <p className="font-serif text-6xl font-medium">Müzik</p>
      {/* <div className="flex gap-x-24 items-end mt-24">{<AlbumDetails />}</div> */}
    </main>
  );
}

import React from 'react';

const x =
  'https://www.youtube.com/embed/Gk-dvXm9-dc?rel=0&autohide=0&color=white&iv_load_policy=3&vq=hd10';

export default function Video() {
  function playVideo() {
    document.getElementById('youtube').src =
      'https://www.youtube.com/embed/Gk-dvXm9-dc?rel=0&autohide=0&color=white&iv_load_policy=3&vq=hd10&autoplay=1';
  }
  return (
    <div className="h-full w-full relative">
      <iframe
        className="h-full w-full"
        src={x}
        title="YouTube video player"
        id="youtube"
      ></iframe>
    </div>
  );
}

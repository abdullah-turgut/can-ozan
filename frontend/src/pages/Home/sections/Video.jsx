import React from 'react';

export default function Video() {
  return (
    <div className="h-full w-full relative">
      <iframe
        className="absolute h-full w-full z-30"
        src="https://www.youtube.com/embed/oD6fL4yyhDk?rel=0&autoplay=1&autohide=0&color=white&iv_load_policy=3"
        title="YouTube video player"
      ></iframe>
      <div className="video-layer absolute top-0 z-20 bg-black/10  h-screen w-full"></div>
      <div className="video-layer absolute top-0 h-20 bg-black z-20 w-full"></div>
      <div className="video-layer absolute bottom-0 h-20 bg-black z-20 w-full"></div>
    </div>
  );
}

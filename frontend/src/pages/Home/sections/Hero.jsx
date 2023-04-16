import React from 'react';
import HeroImg from '../../../assets/hero.png';

export default function Hero() {
  return (
    <div className="w-full h-full relative">
      <img src={HeroImg} alt="" className="h-full w-full object-cover" />
    </div>
  );
}

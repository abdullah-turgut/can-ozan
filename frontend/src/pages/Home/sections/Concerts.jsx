import React from 'react';
import interactive_map from '../../../assets/map.png';
import { concertsData } from '../../../mocks/concertsData';

export default function Concerts() {
  return (
    <div className="h-full py-[10%] px-[10%] flex flex-col overflow-hidden">
      <h3 className="font-serif text-7xl">Konser</h3>
      <div className="flex gap-x-28 justify-between mt-20">
        <div className="flex flex-col gap-y-10">
          {concertsData
            .map((concert, i) => (
              <div
                className="flex justify-between items-center gap-x-44"
                key={i}
              >
                <div className="flex items-center gap-x-1">
                  <div
                    className="rotate-180 text-[18px] font-semibold tracking-widest"
                    style={{ writingMode: 'vertical-rl' }}
                  >
                    {concert.month}
                  </div>
                  <p className="text-[40px] font-bold">{concert.day}</p>
                  <div className="flex flex-col text-sm ml-2">
                    <p className="font-medium tracking-widest">
                      {concert.place}
                    </p>
                    <p className="tracking-wide">
                      {concert.city}, {concert.country}
                    </p>
                  </div>
                </div>
                <a
                  href=""
                  className="px-20 py-2 border border-black rounded-full hover:bg-black hover:text-white font-semibold"
                >
                  BİLET AL
                </a>
              </div>
            ))
            .sort((a, b) => b - a)}
        </div>
        <img src={interactive_map} alt="" className="object-cover" />
      </div>
    </div>
  );
}

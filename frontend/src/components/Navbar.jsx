import React from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { IoCloseOutline } from 'react-icons/io5';

export default function Navbar() {
  return (
    <div className="fixed flex right-5 top-7 text-white z-10 mix-blend-difference tracking-wider">
      <div
        className="cursor-pointer flex items-center gap-x-3"
        style={{ writingMode: 'vertical-rl' }}
      >
        <HiOutlineMenuAlt4 size={40} className="-rotate-45" />
        <p className="text-xl font-light">MENU</p>
      </div>

      <div className="justify-between items-center hidden">
        <IoCloseOutline size={40} />
      </div>
    </div>
  );
}

import React from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { IoCloseOutline } from 'react-icons/io5';
import {
  FaTiktok,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaSpotify,
  FaApple,
} from 'react-icons/fa';

export default function Navbar() {
  function openMenu() {
    document.querySelector('#menu-burger').classList.add('scale-0');
    document.querySelector('#opened-menu').classList.toggle('translate-x-full');
  }

  function closeMenu() {
    document.querySelector('#menu-burger').classList.remove('scale-0');
    document.querySelector('#opened-menu').classList.toggle('translate-x-full');
  }

  return (
    <div className="fixed flex right-5 pt-7 text-white z-10 mix-blend-difference tracking-wider">
      <div
        className="cursor-pointer flex items-center gap-x-3 transition-all duration-300"
        style={{ writingMode: 'vertical-rl' }}
        onClick={openMenu}
        id="menu-burger"
      >
        <HiOutlineMenuAlt4 size={32} className="-rotate-45" />
        <p className="text-xl font-light">MENU</p>
      </div>

      <div
        className="flex gap-x-10 justify-between items-center fixed right-0 pr-7 translate-x-full transition-all duration-300 ease-in-out"
        id="opened-menu"
      >
        <IoCloseOutline
          size={32}
          className="hover:scale-110 cursor-pointer"
          id="menu-close"
          onClick={closeMenu}
        />
        <div className="flex gap-x-5">
          <FaTiktok size={20} className="hover:scale-110 cursor-pointer" />
          <FaInstagram size={20} className="hover:scale-110 cursor-pointer" />
          <FaTwitter size={20} className="hover:scale-110 cursor-pointer" />
          <FaYoutube size={20} className="hover:scale-110 cursor-pointer" />
          <FaSpotify size={20} className="hover:scale-110 cursor-pointer" />
          <FaApple size={20} className="hover:scale-110 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

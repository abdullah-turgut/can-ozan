import React from 'react';
import { Link } from 'react-router-dom';
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
    document.querySelector('#social-menu').classList.toggle('translate-x-full');
    document.querySelector('#navbar').classList.toggle('-translate-y-full');
  }

  function closeMenu() {
    document.querySelector('#menu-burger').classList.remove('scale-0');
    document.querySelector('#social-menu').classList.toggle('translate-x-full');
    document.querySelector('#navbar').classList.toggle('-translate-y-full');
  }

  return (
    <div className="fixed flex right-5 pt-7 text-white z-50 mix-blend-difference tracking-wider">
      <div
        className="cursor-pointer flex items-center gap-x-3 transition-all duration-300"
        style={{ writingMode: 'vertical-rl' }}
        onClick={openMenu}
        id="menu-burger"
      >
        <HiOutlineMenuAlt4 size={32} className="-rotate-45 hover:scale-105" />
        <p className=" font-light">MENU</p>
      </div>

      <nav
        className="flex gap-x-5 fixed top-0 pt-20 transition-all duration-300 ease-out -translate-y-full tracking-widest"
        style={{ writingMode: 'vertical-rl' }}
        id="navbar"
      >
        <Link>MÜZİK</Link>
        <Link>VİDEO</Link>
        <Link>KONSER</Link>
        <Link>HAKKINDA</Link>
        <Link>İLETİŞİM</Link>
      </nav>

      <div
        className="flex gap-x-10 justify-between items-center fixed right-0 pr-7 translate-x-full transition-all duration-300 ease-in-out"
        id="social-menu"
      >
        <IoCloseOutline
          size={32}
          className="hover:scale-110 cursor-pointer"
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

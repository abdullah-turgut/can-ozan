import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="bg-transparent fixed z-50 text-white mix-blend-difference top-7 px-7">
      <Link to="/" className="font-[Pacifica] text-4xl cursor-pointer">
        CAN OZAN
      </Link>
    </div>
  );
}

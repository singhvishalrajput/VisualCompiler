import React, { useEffect, useState } from 'react';

import menu_icon from '../assets/menu_open.svg';
import menu_close from '../assets/menu_close.svg';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32">
        <p className='font-bold text-2xl text-indigo-500'>SPCC</p>
        <ul className="hidden md:flex gap-7">
          <a href="#Home" className="text-indigo-500 cursor-pointer hover:text-gray-400">Home</a>
          <a href="#Compiler" className="text-indigo-500 cursor-pointer hover:text-gray-400">Compiler</a>
          <a href="#About" className="text-indigo-500 cursor-pointer hover:text-gray-400">About</a>
        </ul>
        <button className="hidden md:block bg-indigo-500 text-white px-8 py-2 rounded-full hover:bg-white hover:text-indigo-500 hover:border">
          Contact Us
        </button>
        <img
          onClick={() => setShowMobileMenu(true)}
          src={menu_icon}
          alt="Menu"
          className="rounded py-2 px-2 bg-indigo-500 md:hidden w-12 cursor-pointer"
        />
      </div>
      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden fixed w-full h-full bg-white top-0 right-0">
          <div className="flex justify-end p-6">
            <img
              onClick={() => setShowMobileMenu(false)}
              src={menu_close}
              className="rounded py-2 px-2 bg-indigo-500 w-11 cursor-pointer"
              alt="Close"
            />
          </div>
          <ul className="flex flex-col items-center gap-4 mt-5 text-lg font-medium">
            <a onClick={() => setShowMobileMenu(false)} href="#Home">Home</a>
            <a onClick={() => setShowMobileMenu(false)} href="#Compiler">Compiler</a>
            <a onClick={() => setShowMobileMenu(false)} href="#About">About</a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

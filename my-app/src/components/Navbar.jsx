import React, { useState } from 'react';
import bk from "../assets/images/bk.jpeg";

function Navbar() {
  const [open, setOpen] = useState(false);
  const Links = [
    { name: 'HOME', link: '/' },
    { name: 'ABOUT', link: '/about' },
    { name: 'HISTORY', link: '/history' },
    { name: 'BLOG', link: '/blog' },
    { name: 'TEAM', link: '/team' },
    { name: 'CONTACT US', link: '/contact' }

  ];
  return (
    <nav className="bg-black w-full">
      <div className="flex items-center justify-between py-4 px-7 md:px-10">
        <div className="flex items-center space-x-1 font-bold cursor-pointer">
          <span className="text-xl text-white flex items-center">
            <ion-icon name="logo-ionic"></ion-icon>
            <h2 className="text-xl text-white ml-4">designer</h2>
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl text-white md:hidden cursor-pointer z-50 relative"
        >
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-10 absolute md:static bg-black left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-20 opacity-100 z-40' : 'top-[-490px] opacity-0'
          } md:opacity-100`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-xl md:my-0 my-7 font-bold"
            >
              <a
                href={link.link}
                className="text-white hover:text-yellow-300 duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}

        <img src={bk} alt="" className='rounded-full ml-8 h-14 w-14 hidden' />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

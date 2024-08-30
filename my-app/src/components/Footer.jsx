import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#6B7280] py-5 flex flex-col justify-center items-center mb-0">
      <ul className="flex justify-center items-center my-4 flex-wrap">
        <li className="mx-2">
          <a
            className="text-white text-2xl transition-transform transform hover:-translate-y-2"
            href="#"
          >
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li className="mx-2">
          <a
            className="text-white text-2xl transition-transform transform hover:-translate-y-2"
            href="#"
          >
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>
        <li className="mx-2">
          <a
            className="text-white text-2xl transition-transform transform hover:-translate-y-2"
            href="#"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
        <li className="mx-2">
          <a
            className="text-white text-2xl transition-transform transform hover:-translate-y-2"
            href="#"
          >
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
      </ul>

      <ul className="flex justify-center items-center my-4 flex-wrap">
        <li className="mx-2">
          <a
            className="text-white text-lg transition-opacity hover:opacity-100 opacity-75"
            href="#"
          >
            Home
          </a>
        </li>
        <li className="mx-2">
          <a
            className="text-white text-lg transition-opacity hover:opacity-100 opacity-75"
            href="#"
          >
            About
          </a>
        </li>
        <li className="mx-2">
          <a
            className="text-white text-lg transition-opacity hover:opacity-100 opacity-75"
            href="#"
          >
            Events
          </a>
        </li>
        <li className="mx-2">
          <a
            className="text-white text-lg transition-opacity hover:opacity-100 opacity-75"
            href="#"
          >
            Team
          </a>
        </li>
        <li className="mx-2">
          <a
            className="text-white text-lg transition-opacity hover:opacity-100 opacity-75"
            href="#"
          >
            Contact
          </a>
        </li>
      </ul>

      <p className="text-white mt-4 text-sm">
        &copy;2024 Kist Alumni | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;

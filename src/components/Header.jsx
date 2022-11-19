import React from "react";
import TestImg from "../assets/testImage.jpeg";

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            src={TestImg}
            className="w-10 h-10 text-white rounded-full object-cover object-center"
          />
          <span className="ml-3 text-3xl font-serif text-teal-600">AK</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 text-3xl font-serif text-teal-600">
            Avinash Kumar
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

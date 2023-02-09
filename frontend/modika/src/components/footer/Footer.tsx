import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between">
        <p className="text-sm">&copy; My Company 2023</p>
        <div className="flex">
          <a
            href="#"
            className="block px-4 py-2 mr-4 text-teal-400 hover:text-white"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-4 py-2 mr-4 text-teal-400 hover:text-white"
          >
            About
          </a>
          <a
            href="#"
            className="block px-4 py-2 mr-4 text-teal-400 hover:text-white"
          >
            Services
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-teal-400 hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

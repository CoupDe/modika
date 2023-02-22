import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between p-5 bg-slate-100">
      <div className="container mx-auto flex justify-center">
        <div className="flex">
          <a
            href="#"
            className={
              "block px-4 py-2 shadow-md text-slate-900  hover:text-slate-500 focus:outline-none focus:shadow-outline transition duration-300 ease-in-out "
            }
          >
            Home
          </a>{" "}
          <span className="inline-block w-[1px] bg-slate-500 " />
          <a
            href="#"
            className={
              "block px-4 py-2 shadow-md text-slate-900  hover:text-slate-500 focus:outline-none focus:shadow-outline transition duration-300 ease-in-out "
            }
          >
            About
          </a>{" "}
          <span className="inline-block w-[1px] bg-slate-500 " />
          <a
            href="#"
            className={
              "block px-4 py-2 shadow-md text-slate-900  hover:text-slate-500 focus:outline-none focus:shadow-outline transition duration-300 ease-in-out "
            }
          >
            Сервис
          </a>{" "}
          <span className="inline-block w-[1px] bg-slate-500 " />
          <a
            href="#"
            className={
              "block px-4 py-2 shadow-md text-slate-900  hover:text-slate-500 focus:outline-none focus:shadow-outline transition duration-300 ease-in-out "
            }
          >
            Контакты
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

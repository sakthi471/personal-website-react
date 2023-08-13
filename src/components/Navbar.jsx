import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="bg-black text-white w-full h-15 flex py-3 justify-between items-center px-4 fixed">
      <div>
        <h1 className="font-signature sm:text-4xl  text-3xl">Sakthi</h1>
      </div>
      <ul className="hidden md:flex ">
        {links.map(({ id, link }) => {
          return (
            <li
              key={id}
              className=" px-4 cursor-pointer font-semibold  text-gray-300 capitalize hover:text-white hover:font-bold"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="pr-4 cursor-pointer z-30 text-gray-300  md:hidden "
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>
      {nav && (
        <ul className=" flex flex-col w-full h-screen bg-gradient-to-b from-black to-gray-800 justify-evenly items-center absolute top-0 right-0 z-20 ">
          {links.map(({ id, link }) => {
            return (
              <li key={id} className=" cursor-pointer  capitalize " >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Navbar;

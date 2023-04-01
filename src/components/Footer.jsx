import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  const links = [
    {
      id: 1,
      child: <FaGithub size={30} />,
      href: "https://github.com/sakthi471",
    },
    {
      id: 2,
      child: <FaLinkedin size={30} />,
      href: "https://www.linkedin.com/in/sakthi-m-79a98a227/",
    },
    {
      id: 3,
      child: <AiOutlineInstagram size={30} />,
      href: "https://www.instagram.com/sakthi__13_/",
    },
    {
      id: 4,
      child: <HiOutlineMail size={30} />,
      href: "mailto:sakthim61797@gmailcom",
    },
  ];
  return (
    <div className="w-full h-full p-5 bg-gradient-to-b from-gray-800  to-black flex flex-col items-center justify-center lg:hidden ">
      <div className="py-5 px-6 flex ">
        {links.map(({ id, child, href }) => (
          <a 
             key={id}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-white px-4 font-bold hover:text-blue-500 "
          >
            {child}
          </a>
        ))}

      </div>
        <p className="text-white py-2">@ 2023 - All Rights Reserved.</p>
    </div>
  );
};

export default Footer;

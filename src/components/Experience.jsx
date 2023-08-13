import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import javascript from "../assets/javascript.png";
import nextjs from "../assets/nextjs.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/nodejs.png";
import sass from "../assets/sass.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.png";


const Experience = () => {
  const tech = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "Css",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-500",
    },
    {
      id: 6,
      src: nextjs,
      title: "Nextjs ",
      style: "shadow-white",
    },
    {
      id: 7,
      src: mongodb,
      title: "MongoDb",
      style: "shadow-green-500",
    },
    {
      id: 8,
      src: github,
      title: "Github",
      style: "shadow-gray-600",
    },
    {
      id: 9,
      src: nodejs,
      title: "Node Js",
      style: "shadow-green-600",
    },
    {
      id: 10,
      src: sass,
      title: "Sass",
      style: "shadow-pink-600",
    },
    {
      id: 11,
      src: express,
      title: "Express",
      style: "shadow-gray-600",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b  from-gray-800 to-black w-full h-full "

    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white   ">
        <div className="mt-20 over " >
          <p className="text-2xl  font-bold px-2 border-b-4 border-gray-500 inline hover:border-white duration-300 md:text-4xl">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="w-full px-3 py-6 gap-9 grid grid-cols-2 sm:grid-cols-3 md:py-8">
          {tech.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md ${style}  hover:scale-105 duration-500 py-2 rounded-lg text-center`}
            >
              <img src={src} alt="" className="w-20 mx-auto rounded-full " />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;


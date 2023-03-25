import React from "react";
import Ffest from "../assets/portfolio/ffest.png";
import personalWebsite from "../assets/portfolio/personalWebsite.png";
import Todolist from "../assets/portfolio/Todolist.png";
import draggame from "../assets/portfolio/dragGame.png";
import transition from "../assets/portfolio/transition.png";
import landingpage from "../assets/portfolio/portfolio.png";
import animation from "../assets/portfolio/animation.png";


const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: Ffest,
    },
    {
      id: 2,
      src: personalWebsite,
    },
    {
      id: 3,
      src: Todolist,
    },
    {
      id: 4,
      src: draggame,
    },
    {
      id: 5,
      src: transition,
    },
    {
      id: 6,
      src: landingpage,
    },
    {
      id: 7,
      src: animation,
    },

  ];

  return (
    <div
      name="portfolio"
      className="   bg-gradient-to-b from-black via-black to-gray-800 w-full h-full  text-white"
    >
      <div className="max-w-screen-lg  p-4 mx-auto flex flex-col justify-center  w-full h-full ">
        <div className="pb-8">
          <p className="inline text-2xl px-2 border-b-4 border-gray-500 font-bold md:text-4xl">
            Portfolio
          </p>
          <p className="py-5">Check out some of my works right here </p>
        </div>

        <div className="px-4 grid  gap-8  sm:grid-cols-2 md:grid-cols-3 sm:px-0  ">
          {portfolio.map(({ id, src }) => (
            <div key={id} className=" shadow-md shadow-gray-500 rounded-ld ">
              <img
                src={src}
                alt=""
                className="rounded-md  duration-200 hover:scale-105 "
              />
              <div className="flex items-center justify-center ">
                <button className="w-1/2 px-6 m-4 py-3 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 m-4 py-3 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

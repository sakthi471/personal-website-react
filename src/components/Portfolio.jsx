import React from "react";
import Ffest from "../assets/portfolio/ffest.png";
import personalWebsite from "../assets/portfolio/personalWebsite.png";
import Todolist from "../assets/portfolio/Todolist.png";
import draggame1 from "../assets/portfolio/dragGame1.png";
import transition from "../assets/portfolio/transition.png";
import landingpage from "../assets/portfolio/portfolio.png";
import animation from "../assets/portfolio/animation.png";
import passwordGenerator from '../assets/portfolio/passwordGenerator.png'
import user from '../assets/portfolio/user.png'
import modernui from '../assets/portfolio/modernui.png'
import rtoFinder from '../assets/portfolio/rtofinder.png'






const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: Ffest,
      demo_link:'https://sakthi471.github.io/',
      code_link:'https://github.com/sakthi471/sakthi471.github.io',
    },
    {
      id: 2,
      src: personalWebsite,
      demo_link:'',
      code_link:'https://github.com/sakthi471/personal-website',
    },
    {
      id: 3,
      src: Todolist,
      demo_link:'',
      code_link:'https://github.com/sakthi471/Todolist-FullStack',
    },
    {
      id: 4,
      src: draggame1,
      demo_link:'',
      code_link:'https://github.com/sakthi471/Drag-and-Drop-game',
    },
    {
      id: 5,
      src: transition,
      demo_link:'',
      code_link:'',
    },
    {
      id: 6,
      src: landingpage,
      demo_link:'',
      code_link:'',
    },
    {
      id: 7,
      src: animation,
      demo_link:'',
      code_link:'https://github.com/sakthi471/bubble-animation',
    },
    {
      id: 8,
      src: passwordGenerator,
      demo_link:'',
      code_link:'',
    },
    {
      id: 9,
      src: user,
      demo_link:'',
      code_link:'https://github.com/sakthi471/CURD-App',
    },
    {
      id:10,
      src:modernui,
      demo_link:'https://quiet-melba-f6ca07.netlify.app/',
      code_link:'https://github.com/sakthi471/modern--react-tailwind',
    }
    ,
    {
      id:11,
      src:rtoFinder,
      demo_link:'https://sakthi471.github.io/RTO-Number-Finder/',
      code_link:'https://github.com/sakthi471/RTO-Number-Finder',
    }


  ];

  return (
    <div
      name="portfolio"
      className="   bg-gradient-to-b from-black via-black to-gray-800 w-full h-full  text-white"
    >
      <div className="max-w-screen-lg  p-4 mx-auto flex flex-col justify-center  w-full h-full ">
        <div className="pb-8">
          <p className="inline text-2xl px-2 border-b-4 border-gray-500 font-bold hover:border-white duration-300 md:text-4xl">
            Portfolio
          </p>
          <p className="py-5">Check out some of my works right here </p>
        </div>

        <div className="px-4 grid  gap-8  sm:grid-cols-2 md:grid-cols-3 sm:px-0  ">
          {portfolio.map(({ id, src,demo_link,code_link }) => (
            <div key={id} className=" shadow-md shadow-gray-500 rounded-ld ">
              <img
                src={src}
                alt=""
                className="rounded-md  duration-200 hover:scale-105 "
              />
              <div className="flex items-center justify-center ">
                <button className="w-1/2 px-6 m-4 py-3 duration-200 hover:scale-105">
                  <a href={demo_link} target="blank" >Demo</a>
                </button>
                <button className="w-1/2 px-6 m-4 py-3 duration-200 hover:scale-105">
                   <a href={code_link} target="blank">Code</a>
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

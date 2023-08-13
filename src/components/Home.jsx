import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import heroImage from "../assets/avathar.png";
import { TypeAnimation } from "react-type-animation";

export const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-full sm:h-screen bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col  md:flex-row items-center justify-between w-full h-full px-4 ">
        <div className="flex flex-col justify-center h-full mt-20 py-5 ">
          <h2 className="md:text-6xl text-white text-3xl font-medium">
            Hey Everybody
          </h2>
          <p className=" text-white text-3xl font-extrabold	 md:text-4xl leading-5 mt-4 ">
            It's me Sakthi
          </p>
          <span className="mt-5 font-bold text-white text-xl ">
            <span>I'm </span>{" "}
            <TypeAnimation
              sequence={[
                "MERN Stack developer",
                2000,
                "Student",
                2000,
                "React Native developer",
                1000,
              ]}
              repeat={Infinity}
              cursor={false}
            />
          </span>

          <p className="text-gray-500 pt-7 max-w-md">
            I love to work on web application using technologies like React,
            Tailwind, Node js,Express js,Mongodb
          </p>
          <div className="flex py-8 ">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className=" group text-white w-fit flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer px-5 py-2 rounded-md gap-1 text-sm md:text-xg"
            >
              portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} />
              </span>
            </Link>
            <a
              href="public/SAKTHI RESUME.pdf"
              download
              className="  group text-white w-fit flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer px-2 py-1 rounded-md mx-3 text-sm md:text-xg lg:hidden"
            >
              Download CV
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} />
              </span>
            </a>
          </div>
        </div>
        <div className="mt-10 ">
          <img
            src={heroImage}
            alt="my profile"
            className=" rounded-2xl mx-auto w-[350px]  "
          />
        </div>
      </div>
    </div>
  );
};

import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from "react-scroll";


const Home = () => {
  return (
    <div name="home" className="w-full p-10 md:h-screen bg-gradient-to-b from-black via-black to-gray-800">
      <div className="flex flex-row items-center justify-center h-full max-w-screen-lg px-4 m-auto space-x-20 max-auto md:flex-row">
        <div className="mt-10 ">
          <h2 className="text-2xl font-bold text-white sm:text-4xl" >I'am a Full Stack Web Developer</h2>
          <p className="max-w-md py-4 text-gray-500">
            I am a full stack web developer with excellent knowledge of HTML,
            CSS, JavaScript, React, NodeJS, Node, Python and other related
            technologies.
          </p>
          <div>
          <Link to="portfolio" smooth duration={500} className="flex items-center px-6 py-3 my-2 text-white rounded-md cursor-pointer group w-fit bg-gradient-to-r from-cyan-500 to-blue-500">
          Portfolio
          <span className="duration-300 group-hover:rotate-90">
          <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
          </span>
          </Link>
          </div>
        </div >
            <div className="hidden md:flex">
            <img src={HeroImage} alt="my profile" 
            className="w-16 mx-auto duration-300 md:w-48 lg:w-56 rounded-2xl hover:rounded-full hover:scale-105"/>
            </div>
      </div>
    </div>
  );
};

export default Home;

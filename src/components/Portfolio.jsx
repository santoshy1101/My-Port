import React from "react";
import fashionPool from "../assets/portfolio/fashionPool.png";
import maxFashion from "../assets/portfolio/maxFashion.png";
import textBoard from "../assets/portfolio/textBoard.png";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: fashionPool,
      demo:"https://fashionpool.netlify.app/",
      code:"https://github.com/santoshy1101/Fashion-Pool-Mythersa-s-Clone",
    },
    {
      id: 2,
      src: maxFashion,
      demo: "https://max-fashion-a96b16.netlify.app/",
      code: "https://github.com/santoshy1101/Max-Fashion-Clone"
    },
    {
      id: 3,
      src: textBoard,
      demo: "https://text-board-0ab662.netlify.app/",
      code: "https://github.com/santoshy1101/Text-Board-WebApp",
    },
    {
      id: 4,
      src: reactSmooth,
    },
    {
      id: 5,
      src: reactParallax,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];

  const handleDemo=(demo)=>{
    window.open(demo) 
   }

   const handleCode=(code)=>{
    window.open(code) 
   }
  return (
    <div
      name="portfolio"
      className="w-full text-white h-fu bg-gradient-to-b from-black to-gray-800 md:min-h-full ">
      <div
        className="flex flex-col justify-center max-w-screen-lg p-4 mx-auto ">
        <div className="pb-8">
          <p
            className="inline text-4xl font-bold border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div
            
            className="grid gap-8 px-12 sm:grid-cols-2 md:grid-cols-3 sm:px-0">
        {portfolio.map(({ id, src, demo, code }) => (
          
            <div key={id} className="rounded-lg shadow-md shadow-gray-600">
              <img
              onClick={()=>window.open(demo)}
                src={src}
                alt="1"
                className="duration-200 rounded-md cursor-pointer hover:scale-105"
              />

              <div className="flex items-center justify-center">
                <button onClick={()=>handleDemo(demo)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button
                 onClick={()=>handleCode(code)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
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

import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import ReactJS from '../assets/react.png';
import Github from '../assets/github.png';
import Firebase from '../assets/firebase.png';

function Achievement() {
  return (
    <div
      name="achievement"
      className="w-full h-full bg-[#0a192f] text-gray-300"
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl  font-bold inline border-b-4 border-pink-600 ">
            Achievement
          </p>
          <p className="py-4">These are the techonologies i've usually use</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="icon HTML" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="icon CSS" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={Javascript}
              alt="icon javascript"
            />
            <p className="my-4">Javascript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactJS} alt="icon react" />
            <p className="my-4">React JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Github} alt="icon github" />
            <p className="my-4">Github</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={Firebase}
              alt="icon javascript"
            />
            <p className="my-4">Firebase</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievement;

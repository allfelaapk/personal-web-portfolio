import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, My Name is</p>
        <h1 className="text-4xl sm:text-7xl fornt-bold text-[#ccd6f6]">
          Allfela Aisyah Putri Karinda
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Front End Developer{' '}
        </h2>
        <p className="text-[#8892b0] max-w-[700px] py-4">
          I'm an undergraduate student in information system, who have
          interested with HTML, CSS, Javascript
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            Explore More
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
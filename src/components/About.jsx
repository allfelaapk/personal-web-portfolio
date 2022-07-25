import React from 'react';

function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold px-4">
            <p>Hi. I'm Fela, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am a tech enthusiast, who have a specialization in creating a
              beautiful web interface. Actually, i start to learn as Front End
              Developer since i was in semester 6 and still counting. During
              that journey, i have already build some simple website or web
              application. It was challenging when i found a bugs and so much
              fun if the web has no bugs and can running. So whatever the
              situation is, i've always to increase my skills as Front End
              Developer or maybe Software Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

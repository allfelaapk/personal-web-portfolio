import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
// import { BsFillPersonLinesFill } from 'react/icons/bs';
import { Link } from 'react-scroll';

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <h1 className="text-pink-600">allfelaapk</h1>
        {/* <img src={logo} alt="imgage logo" style={{ width: '50px' }} /> */}
      </div>
      {/* menu */}
      <div>
        <ul className="hidden md:flex">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="experience" smooth={true} duration={500}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="achievement" smooth={true} duration={500}>
              Achievement
            </Link>
          </li>
          <li>
            <Link to="blog" smooth={true} duration={500}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}
      <div>
        <ul
          className={
            !nav
              ? 'hidden'
              : ' absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
          }
        >
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="experience"
              smooth={true}
              duration={500}
            >
              Experience
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="achievement"
              smooth={true}
              duration={500}
            >
              Achievement
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="blog" smooth={true} duration={500}>
              Blog
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          login
        </button>
      </div>
      {/* social icons */}
      <div
        className="hidden lg:flex  fixed flex-col
      top-[35%]  left-0"
      >
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/allfelaapk/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/allfelaapk"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

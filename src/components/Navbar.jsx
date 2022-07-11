import React from 'react';
import { useState } from 'react';
import {
  FaBars,
  FaLinkedin,
  FaTimes,
  FaGithub,
  FaFacebook,
  FaLink,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/nelson-logo.png';

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    //   background color located in here
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img
          className='select-none cursor-pointer'
          src={Logo}
          alt='my-logo'
          style={{ width: 50 }}
        />
      </div>

      {/* menu */}

      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>

      {/* hamburger */}
      <div
        onClick={handleClick}
        className='md:hidden z-10 cursor-pointer transition-all transition-timing-300 ease-in-out'
      >
        {/* ternary op. */}
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Portfolio</li>
        <li className='py-6 text-4xl'>Contact</li>
      </ul>

      {/* social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[68px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] transition-all transition-timing-[300] ease-in-out duration-300 bg-blue-600 '>
            <a
              href='/'
              className='flex justify-between items-center w-full text-gray-300'
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[68px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] transition-all transition-timing-[300] ease-in-out duration-300 bg-[#333333] '>
            <a
              href='/'
              className='flex justify-between items-center w-full text-gray-300'
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[68px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] transition-all transition-timing-[300] ease-in-out duration-300 bg-[#6fc2b0] '>
            <a
              href='/'
              className='flex justify-between items-center w-full text-gray-300'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[68px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] transition-all transition-timing-[300] ease-in-out duration-300 bg-[#565f69] '>
            <a
              href='/'
              className='flex justify-between items-center w-full text-gray-300'
            >
              Resúme <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

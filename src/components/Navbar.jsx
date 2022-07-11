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
import { Link } from 'react-scroll';

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    //   background color located in here
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#f1f5f8] text-gray-600 header-nav z-10'>
      <div>
        <img
          className='select-none cursor-pointer'
          src={Logo}
          alt='my-logo'
          style={{ width: 40 }}
        />
      </div>

      {/* menu */}

      <ul className='hidden md:flex'>
        <li className=' hover:text-[#33a1fd] duration-300'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className=' hover:text-[#33a1fd] duration-300'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className=' hover:text-[#33a1fd] duration-300'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className=' hover:text-[#33a1fd] duration-300'>
          <Link to='portfolio' smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
        <li className=' hover:text-[#33a1fd] duration-300'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div
        onClick={handleClick}
        className='md:hidden z-10 cursor-pointer text-gray-900'
      >
        {/* ternary op. */}
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-gray-600 text-gray-100 flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link
            onClick={handleClick}
            to='portfolio'
            smooth={true}
            duration={500}
          >
            Portfolio
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div
        className='hidden lg:flex fixed flex-col top-[35%] left-0'
        data-aos='fade-right'
      >
        <ul>
          <li className='w-[160px] h-[68px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] transition-all transition-timing-[300] ease-in-out duration-300 bg-[#33a1fd] rounded-xl '>
            <a
              href='https://www.linkedin.com/in/nelson-guerra-7075b413a/'
              target='_blank'
              className='flex justify-between items-center w-full text-gray-100'
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[68px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] transition-all transition-timing-[300] ease-in-out duration-300 bg-[#0c0e07] rounded-xl'>
            <a
              href='https://github.com/Nelson-Guerra-Tech'
              target='_blank'
              className='flex justify-between items-center w-full text-gray-100'
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[68px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] transition-all transition-timing-[300] ease-in-out duration-300 bg-[#f0c229] rounded-xl'>
            <a
              href='contact'
              className='flex justify-between items-center w-full text-gray-100'
            >
              <Link to='contact' smooth={true} duration={500}>
                Email
              </Link>
              <Link to='contact' smooth={true} duration={500}>
                <HiOutlineMail size={30} />
              </Link>
            </a>
          </li>

          {/* <li className='w-[160px] h-[68px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] transition-all transition-timing-[300] ease-in-out duration-300 bg-[#565f69] rounded-xl'>
            <a
              href='/'
              className='flex justify-between items-center w-full text-gray-300'
            >
              Resúme <BsFillPersonLinesFill size={30} />
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

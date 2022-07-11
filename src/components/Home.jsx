import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';
import WavingHand from '../assets/waving-hand.png';

export default function Home() {
  const [hand, setHand] = useState(false);
  const handleClick = () => {
    setHand(!hand);
  };

  return (
    <div name='home' className='bg-[#f1f5f8] h-screen w-full'>
      {/* container */}
      <div className='max-w-[1000px] px-8 mx-auto flex flex-col justify-center h-full'>
        <p
          className='text-[#33a1fd]'
          data-aos='fade-right'
          data-aos-delay='100'
        >
          <img
            className='waving-hand wave'
            src={WavingHand}
            alt='waving-hand'
          />
          Hello, my name is
        </p>
        <h1
          className='text-4xl sm:text-7xl font-bold text-[#0c0e07]'
          data-aos='fade-right'
          data-aos-delay='300'
        >
          Nelson Guerra
        </h1>
        <h2
          className='text-4xl sm:text-7xl font-bold text-gray-600'
          data-aos='fade-right'
          data-aos-delay='500'
        >
          I'm a <span className='text-[#33a1fd]'>Software Developer</span>
        </h2>
        <p
          className='text-gray-600 py-4 max-w-[700px]'
          data-aos='fade-right'
          data-aos-delay='500'
        >
          Specializing in building front-end development & based out of Georgia
          🌎 Currently, I'm focused on building responsive, real-world
          applications with React.
        </p>
        <div>
          <button
            className='text-white bg-[#33a1fd] border-none group border-2 px-6 py-3 my-2 flex items-center hover:bg-transparent hover:text-[#0c0e07] rounded-xl duration-300 btn'
            data-aos='fade-right'
            data-aos-delay='700'
          >
            <Link to='portfolio' smooth={true} duration={500}>
              Portfolio
            </Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

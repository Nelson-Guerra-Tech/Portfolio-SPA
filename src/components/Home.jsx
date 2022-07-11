import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

export default function Home() {
  return (
    <div name='home' className='bg-[#0a192f] h-screen w-full'>
      {/* container */}
      <div className='max-w-[1000px] px-8 mx-auto flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hello, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Nelson Guerra
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Software Developer
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Specializing in building front-end digital experiences. Currently, I'm
          focused on building responsive real-world applications with React
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 rounded-xl duration-300'>
            Portfolio
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

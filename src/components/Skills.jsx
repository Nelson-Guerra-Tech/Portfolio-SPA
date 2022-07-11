import React from 'react';

// images
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';

export default function Skills() {
  return (
    <div className='bg-[#0a192f] text-gray-300 w-full h-screen' name='skills'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
            🎯 Skills
          </p>
          <p className='py-4'>There are the technologies I've worked with</p>
        </div>

        {/* html */}
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-xl'>
            <img className='w-20 mx-auto mt-4' src={HTML} alt='HTML Icon' />
            <p className='my-4'>HTML</p>
          </div>

          {/* css */}
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-xl '>
            <img className='w-20 mx-auto mt-4' src={CSS} alt='HTML Icon' />
            <p className='my-4'>CSS</p>
          </div>

          {/* javascript */}
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-xl '>
            <img
              className='w-20 mx-auto mt-4'
              src={JavaScript}
              alt='HTML Icon'
            />
            <p className='my-4'>JavaScript</p>
          </div>

          {/* react */}
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-xl '>
            <img className='w-20 mx-auto mt-4' src={ReactImg} alt='HTML Icon' />
            <p className='my-4'>React</p>
          </div>

          {/* node */}
          {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-xl '>
            <img className='w-20 mx-auto mt-4' src={Node} alt='HTML Icon' />
            <p className='my-4'>Node</p>
          </div> */}

          {/*  */}
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-xl '>
            <img className='w-20 mx-auto mt-4' src={Tailwind} alt='HTML Icon' />
            <p className='my-4'>Tailwind CSS</p>
          </div>

          {/* Firebase */}
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-xl '>
            <img className='w-20 mx-auto mt-4' src={FireBase} alt='HTML Icon' />
            <p className='my-4'>Firebase</p>
          </div>

          {/*  */}
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-xl '>
            <img className='w-20 mx-auto mt-4' src={GitHub} alt='HTML Icon' />
            <p className='my-4'>Github / Git</p>
          </div>
        </div>
      </div>
    </div>
  );
}
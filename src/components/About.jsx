import React from 'react';
import myPhoto from '../assets/IMG_4443.JPG';

export default function About() {
  return (
    <div className='w-full h-screen bg-[#f1f5f8] text-gray-600' name='about'>
      <div className='flex flex-col justify-center items-center w-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4' data-aos='fade-up'>
            <p className='text-4xl text-gray-800 font-bold inline border-b-4 border-[#33a1fd]'>
              🧔🏻‍♂️ About
            </p>
          </div>

          <div></div>
        </div>

        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div
            className='sm:text-right text-4xl font-bold sm:justify-end flex justify-center'
            data-aos='fade-up'
            data-aos-delay='100'
          >
            {/* <p>Hi, I'm Nelson! Please take a look around.</p> */}
            <img className='my-photo' src={myPhoto} alt='my-photo' />
          </div>
          <div data-aos='fade-up' data-aos-delay='200'>
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprises corporations. What would you do if you
              have a software expert at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

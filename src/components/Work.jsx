import React from 'react';
import WorkImg from '../assets/workImg.jpeg';
import realEstate from '../assets/realestate.jpg';

const Work = () => {
  return (
    <div
      name='portfolio'
      className='w-full md:h-screen text-gray-900 bg-[#f1f5f8]'
    >
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-900 border-[#33a1fd]'>
            💻 Porfolio
          </p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Grid Item */}
          <div
            style={{
              backgroundImage: `url('https://user-images.githubusercontent.com/62409790/177017194-1d2666a2-e367-494f-8386-b910fd26013a.png')`,
              transitionDuration: 300,
            }}
            className='shadow-md shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div duration-300'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-1xl text-white tracking-wider flex justify-center items-center px-4'>
                🔎 Github Finder is an application that uses the Github API to
                find github users and has user authentication.
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://react-github-finder-api.netlify.app/login'
                  target='_blank'
                >
                  <button className='text-center rounded-xl px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#33a1fd] hover:text-gray-100 duration-300'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/Nelson-Guerra-Tech/Github-API-Project/tree/main'
                  target='_blank'
                >
                  <button className='text-center rounded-xl px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#33a1fd] hover:text-gray-100 duration-300'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${realEstate})` }}
            className='shadow-md shadow-[#040c16] group container rounded-xl flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React Application
              </span>
              <div className='pt-8 text-center'>
                <a href='/' target='_blank'>
                  <button className='text-center rounded-xl px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#33a1fd] hover:text-gray-100 duration-300'>
                    Demo
                  </button>
                </a>
                <a href='/' target='_blank'>
                  <button className='text-center rounded-xl px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#33a1fd] hover:text-gray-100 duration-300'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className='shadow-md shadow-[#040c16] group container rounded-xl flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React Application
              </span>
              <div className='pt-8 text-center'>
                <a href='/' target='_blank'>
                  <button className='text-center rounded-xl px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#33a1fd] hover:text-gray-100 duration-300'>
                    Demo
                  </button>
                </a>
                <a href='/' target='_blank'>
                  <button className='text-center rounded-xl px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#33a1fd] hover:text-gray-100 duration-300'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${realEstate})` }}
            className='shadow-md shadow-[#040c16] group container rounded-xl flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React Application
              </span>
              <div className='pt-8 text-center'>
                <a href='/' target='_blank'>
                  <button className='text-center rounded-xl px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#33a1fd] hover:text-gray-100 duration-300'>
                    Demo
                  </button>
                </a>
                <a href='/' target='_blank'>
                  <button className='text-center rounded-xl px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#33a1fd] hover:text-gray-100 duration-300'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className='shadow-md shadow-[#040c16] group container rounded-xl flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React Application
              </span>
              <div className='pt-8 text-center'>
                <a href='/' target='_blank'>
                  <button className='text-center rounded-xl px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#33a1fd] hover:text-gray-100 duration-300'>
                    Demo
                  </button>
                </a>
                <a href='/' target='_blank'>
                  <button className='text-center rounded-xl px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#33a1fd] hover:text-gray-100 duration-300'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${realEstate})` }}
            className='shadow-md shadow-[#040c16] group container rounded-xl flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React Application
              </span>
              <div className='pt-8 text-center'>
                <a href='/' target='_blank'>
                  <button className='text-center rounded-xl px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#33a1fd] hover:text-gray-100 duration-300'>
                    Demo
                  </button>
                </a>
                <a href='/' target='_blank'>
                  <button className='text-center rounded-xl px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#33a1fd] hover:text-gray-100 duration-300'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

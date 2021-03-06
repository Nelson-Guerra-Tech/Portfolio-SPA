import React from 'react';

export default function Contact() {
  return (
    <div
      name='contact'
      className='bg-[#f1f5f8] w-full h-screen flex justify-center items-center p-4'
    >
      <form
        action='https://getform.io/f/70f926b2-9884-46bc-a1a9-f1e7b4916c64'
        method='POST'
        className='flex flex-col max-w-[680px] w-full'
      >
        <div className='pb-8' data-aos='fade-up'>
          <p className='text-4xl font-bold inline border-b-4 border-[#33a1fd] text-gray-900'>
            Contact
          </p>
          <p className='text-gray-700 py-4'>
            Submit the form below or shoot me an email -
            nelsonguerra.tech@gmail.com
          </p>
        </div>
        <input
          className='bg-[#ccd6f6] rounded-lg'
          type='text'
          placeholder='Name'
          name='name'
          data-aos='fade-up'
          data-aos-delay='100'
        />
        <input
          className='my-4 p-2 bg-[#ccd6f6] rounded-lg'
          type='email'
          placeholder='Email'
          name='email'
          data-aos='fade-up'
          data-aos-delay='100'
        />
        <textarea
          name='message'
          rows='10'
          className='bg-[#ccd6f6] rounded-lg'
          placeholder='Message'
          data-aos='fade-up'
          data-aos-delay='100'
        ></textarea>
        <button
          className='text-white bg-[#33a1fd] border-none px-6 py-3 my-2  hover:bg-transparent hover:text-[#0c0e07] rounded-xl btn'
          data-aos='fade-up'
          data-aos-delay='100'
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

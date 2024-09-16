"use client";
import React from 'react';
import { Transition } from '../Utils/Transition';
import { Header } from '../sections/Header';

const AboutPage = () => {
  return (
    <div className='w-screen text-black flex flex-col  h-screen'>
      <div className='block relative'>
        <Header />
      </div>
      About Page
      <div className=''> ehdfbqkuajfhbkawjefckawejf
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, voluptates! Sequi reprehenderit rerum quibusdam iste expedita beatae inventore illum hic esse blanditiis? Impedit ullam ut culpa unde maiores molestiae et.</div>
    </div>
  );
};

export default Transition(AboutPage);

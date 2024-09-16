"use client";
import React from 'react';
import { Transition } from '../Utils/Transition';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { ImageField } from '../Component/ImageField';

const AboutPage = () => {
  return (
    <div className='w-screen text-black flex flex-col  gap-20  h-[100vh]'>
      <div className='block relative'>
        <Header />
      </div>
      <div className='mt-20 w-[70%] flex flex-col  About_text mx-auto'>
        <div className='text-[8vw]  '>About Us</div>
        <div className='tracking-[1px] text-[1.1rem]'>
          Welcome to GOTE, your number one destination for online shopping. At GOTE, we are committed to providing our customers with the best in quality, service, and innovation. Whether you’re looking for the latest fashion, cutting-edge electronics, home essentials, or exclusive deals, GOTE is here to meet all your needs with ease and convenience.
        </div>
        <div className='flex xl:flex-row flex-col items-center justify-end mt-8 gap-2'>
          <ImageField src={'/images/aboutus1.jpg'} alt='Logo' sizes='' objectFit='cover' width={380} height={100} priority={true} className='h-[50vh] cursor-pointer rounded-[7px]' />
          <ImageField src={'/images/aboutus2.jpg'} alt='Logo' sizes='' objectFit='cover' width={380} height={100} priority={true} className='h-[50vh] cursor-pointer rounded-[7px]' />
        </div>
        <div className='flex flex-col mt-10  gap-6'>
          <div className='text-[1.1rem] gap flex flex-col gap-2'>
            <div className='font-bold text-[1.3rem]'>Sustainability at GOTE</div>
            <div>As part of our commitment to the planet, GOTE actively promotes sustainable practices. We are continuously working to reduce our carbon footprint by minimizing packaging waste, sourcing eco-friendly products, and encouraging our partners to adopt sustainable business practices. We believe that shopping should not only be good for you but good for the planet as well.</div>
          </div>
          <div className='text-[1.1rem] gap flex flex-col gap-2'>
            <div className='font-bold text-[1.3rem]'>Join the GOTE Family</div>
            <div>At  GOTE, we see our customers as part of our family. We’re more than just a store – we’re a community of individuals who value convenience, quality, and innovation. We invite you to join the GOTE community and enjoy a shopping experience like no other.</div>
          </div>
          <div className='text-[1.1rem]'>
            Thank you for choosing GOTE. We look forward to serving you and making your shopping experience extraordinary!
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

// export default AboutPage;
export default Transition(() => <AboutPage/>,{text:"About Us"});

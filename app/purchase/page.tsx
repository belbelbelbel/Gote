"use client"
import React, { useRef, useState } from 'react'
import { ImageField } from '../Component/ImageField'
import Image from 'next/image'
import NavbarrRoutes from '../Auth/NavbarRoutes/NavbarRotes'
import { FaCartArrowDown } from "react-icons/fa";
import { motion } from 'framer-motion';
import { ImgArrayContent } from '../sections/ImgArray-Content'
import { Header } from '../sections/Header'
import { Footer } from '../sections/Footer'
export default function PurchasePage() {
    const videoRef = useRef(null);

    // className='video-background'
    // src={"/videos/herovideo1.mp4"}
    return (
        <div className='w-screen xl:h-[100vh] h-[200vh] overflow-auto'>
            <Header />
            <div className='video-container'>
                <video
                    preload='none'
                    ref={videoRef}
                    className='video-background'
                    autoPlay
                    loop
                    muted
                >
                    <source src="/videos/herovideo1.mp4" type="video/mp4" />
                </video>
                <div className='video-overlay'>
                    <h1 className='slogan'>
                        Uncover Unique Products and Unbeatable Prices – Shop Now!
                    </h1>
                </div>
            </div>
            <div className='content_container h-full w-[88%] items-center justify-center  mx-auto'>
                <motion.div
                    className='text-area'
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0, type: 'spring', stiffness: 100 }}
                >
                    <h2 className='md:text-[2.5rem] text-[1.8rem]'>Discover Your Next Favorite Product</h2>
                    <p>Explore our collection of top-quality items, curated just for you.</p>
                </motion.div>
                <ImgArrayContent />
            </div>
            <Footer />
        </div>
    )
}

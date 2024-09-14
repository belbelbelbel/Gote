"use client"
import React, { useRef } from 'react'
import { ImageField } from '../Component/ImageField'
import Image from 'next/image'
import NavbarrRoutes from '../Auth/NavbarRoutes/NavbarRotes'
import { FaCartArrowDown } from "react-icons/fa";
import { motion } from 'framer-motion'; // Import Framer Motion

export default function PurchasePage() {
    const videoRef = useRef(null);

    return (
        <div className='w-screen h-[100vh] overflow-auto'>
            <div className='fixed px-8 w-full flex z-50 bg-[#f4f4f0] items-center justify-between shadow-lg h-[14vh]'>
                <div className='cursor-pointer relative'>
                    {/* <Image src={'/images/gote-logo-removebg.png'} alt='Logo' width={135} height={50} priority={true} sizes={''} objectFit={'cover'} /> */}
                    <img src="/images/gote-logo-removebg.png" alt="logo"  width={135} height={50} />
                </div>
                <div>
                    <NavbarrRoutes />
                </div>
                <div className='flex items-center gap-6'>
                    <div className='cursor-pointer'>Account</div>
                    <div className='flex font-medium justify-center items-center gap-8 cursor-pointer'>
                        <div><FaCartArrowDown className='text-[1.8rem]' /></div>
                        <div className='border-2 border-black hover:border-green-800 transition ease-in duration-500 text-center py-[0.6vw] rounded-full w-[3.4vw] font-bold'>10</div>
                    </div>
                </div>
            </div>
            <div className='video-container'>
                <video
                    ref={videoRef}
                    className='video-background'
                    src={"/videos/herovideo1.mp4"}
                    autoPlay
                    loop
                    muted
                >
                </video>
                <div className='video-overlay'>
                    <h1 className='slogan'>
                        Uncover Unique Products and Unbeatable Prices – Shop Now!
                    </h1>
                </div>
            </div>
            <div className='content_container h-full w-full mx-auto'>
                <motion.div
                    className='text-area'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, type: 'spring', stiffness: 100 }}
                >
                    <h2>Discover Your Next Favorite Product</h2>
                    <p>Explore our collection of top-quality items, curated just for you.</p>
                </motion.div>
                <motion.div
                    className='text-area'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, type: 'spring', stiffness: 100 }}
                >
                    <h2>Featured Products</h2>
                    <p>Discover our top picks and exclusive offers just for you.</p>
                    {/* Add product images and links */}
                </motion.div>
                <motion.div
                    className='text-area'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, type: 'spring', stiffness: 100 }}
                >
                    <h2>Exclusive Offers</h2>
                    <p>Grab amazing deals and discounts on your favorite products. Limited time only!</p>
                    {/* Add promotional graphics or buttons */}
                </motion.div>
                <motion.div
                    className='text-area'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, type: 'spring', stiffness: 100 }}
                >
                    <h2>What Our Customers Are Saying</h2>
                    <p>"Fantastic products and amazing service! Will definitely shop here again." - Jane Doe</p>
                    {/* Add more testimonials */}
                </motion.div>

            </div>
        </div>
    )
}

"use client"
import React, { useContext, useRef, useState } from 'react'
import { ImageField } from '../Component/ImageField'
import Image from 'next/image'
import NavbarrRoutes from '../Auth/NavbarRoutes/NavbarRotes'
import { FaCartArrowDown } from "react-icons/fa";
import { motion } from 'framer-motion';
import { ImgArrayContent } from '../sections/ImgArray-Content'
import { Header } from '../sections/Header'
import { Footer } from '../sections/Footer'
import { ContextApi } from '@/Provider/UseContext'
export default function PurchasePage() {
    const videoRef = useRef(null);
    const context = useContext(ContextApi)
    return (
        <div className='w-screen xl:h-[100vh] h-[200vh] overflow-auto'>
            <Header />
            <div className='video-container'>
                {/* <video
                    preload='none'
                    ref={videoRef}
                    className='video-background'
                    autoPlay
                    loop
                    muted
                >
                    <source src="/videos/herovideo1.mp4" type="video/mp4" />
                </video> */}
                <Image src="/images/hero-img.jpg" alt={'hero-image'} className='  h-full object-cover' objectFit='contain' width={1700} height={100} priority={true} />
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
            <section className="py-20 bg-white">
                <div className='md:text-[2.5rem] my-10 text-center text-[1.8rem] font-semibold '>What we offer</div>
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6 text-center">
                    {[
                        { title: "Fast Shipping", desc: "Get your order within days, not weeks." },
                        { title: "Secure Checkout", desc: "Your information is safe with our encrypted system." },
                        { title: "Curated Quality", desc: "We only feature products that meet our quality standards." },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 s rounded-xl p-8 hover:shadow-md transition"
                        >
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="w-[88%] mx-auto py-20">
                <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
                    Featured This Week
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((id) => (
                        <motion.div
                            key={id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white shadow-sm rounded-xl overflow-hidden border border-gray-100"
                        >
                            <Image
                                src={`/images/cartimg${id}.jpg`}
                                alt={`Product ${id}`}
                                width={400}
                                height={300}
                                className="object-cover w-full h-64"
                            />
                            <div className="p-6">
                                <h3 className="font-medium text-lg">Product {id}</h3>
                                <p className="text-gray-500 mt-1">$29.99</p>
                                <button className="mt-4 w-full border border-gray-300 hover:border-black transition py-2 rounded-lg flex items-center justify-center gap-2">
                                    <FaCartArrowDown />
                                    Add to Cart
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-gray-100">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold">What Our Customers Say</h2>
                    <p className="text-gray-600 mt-3">Trusted by shoppers worldwide</p>
                    <div className="mt-12 grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Sarah", text: "Fast delivery and excellent quality — I’m impressed!" },
                            { name: "James", text: "The website is sleek, modern, and so easy to use." },
                            { name: "Priya", text: "I’ve switched all my online shopping to this store." },
                        ].map((t, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-white shadow-sm rounded-xl p-6"
                            >
                                <p className="italic text-gray-700">“{t.text}”</p>
                                <h4 className="mt-4 font-medium text-gray-900">- {t.name}</h4>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

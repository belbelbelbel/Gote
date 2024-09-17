"use client"
import React, { useState } from 'react'
import { faqData } from '../Utils/@datacontents'
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { AnimatePresence, motion } from 'framer-motion';

export const Faqs = () => {
    const [answer, setAnswer] = useState<number | "">("");
    const handleClick = (id: number) => {
        setAnswer((prevAnswer) => (prevAnswer === id ? "" : id));
    };
    return (
        <div>
            <div className='w-[80%] flex flex-col justify-center mx-auto h-full' >
                {faqData.map((item) => (
                    <div key={item.id} className='flex flex-col mt-6  justify-between cursor-pointer' onClick={() => handleClick(item.id)}>
                        <div className='flex items-center justify-between'>
                            <div className='py-4'>
                                <h2 className='font-bold text-[1.2rem]'>{item.question}</h2>
                            </div>
                            <div className='cursor-pointer' >
                                {answer === item.id ? <FaCircleMinus className='text-red-400 ' /> : <FaCirclePlus />}
                            </div>
                        </div>
                        <AnimatePresence>
                            {answer === item.id && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: '4rem' }}
                                    transition={{ duration: 0.5 }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className='relative block'>
                                    <div className='absolute md:text-[1rem]  text-[0.8rem] '>{item.answer}</div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    )
}

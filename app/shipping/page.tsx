"use client"
import React from 'react'
import { Header } from '../sections/Header'
import {shippingInfo} from '../Utils/@datacontents';
import { Footer } from '../sections/Footer';

const ShipingPage = () => {
    return (
        <div className='w-screen h-screen flex flex-col gap-20 '>
            <Header />
            <div className='mt-32 w-[80%] mx-auto'>
                <div className='text-center font-bold text-[1.1rem] pb-6'>Here’s a detailed shipping information section for GOTE's e-commerce website:</div>
                {
                    shippingInfo.map((shipInfo) => (
                        <div className='flex flex-col gap-4'>
                            {/* <div className='bg-black w-full h-[1px]'></div> */}
                            <div className='mt-4'>
                                <h1 className='font-bold text-[1.1rem]'>{shipInfo.title}</h1>

                                <div>{shipInfo.description}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Footer />
        </div>
    )
}

export default ShipingPage;

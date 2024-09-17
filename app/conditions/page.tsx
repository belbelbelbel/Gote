"use client"
import React from 'react'
import { Header } from '../sections/Header'
import { Footer } from '../sections/Footer'
import { termsAndConditionsData } from '../Utils/@datacontents'

const ConditionPage = () => {
    return (
        <div>
            <div>
                <div className='w-screen h-screen flex flex-col gap-20 '>
                    <Header /> 
                    <div className='mt-32 w-[80%] mx-auto'>
                        <div className='text-center font-bold text-[1.1rem] pb-6'>Here’s a detailed "Terms and Conditions" section for GOTE's e-commerce</div>
                        {
                            termsAndConditionsData.map((returnInfo) => (
                                <div className='flex flex-col gap-4'>
                                    {/* <div className='bg-black w-full h-[1px]'></div> */}
                                    <div className='mt-4'>
                                        <h1 className='font-bold text-[1.1rem]'>{returnInfo.title}</h1>

                                        <div>{returnInfo.description}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <Footer /> 
                </div>
            </div>
        </div>
    )
}

export default ConditionPage 

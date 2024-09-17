"use client"
import React from 'react'
import { Header } from '../sections/Header'
import { Footer } from '../sections/Footer'
import { privacyPolicyData } from '../Utils/@datacontents'

const PolicyPage = () => {
    return (
        <div>
            <div>
                <div className='w-screen h-screen flex flex-col gap-20 '>
                    <Header />
                    <div className='mt-32 w-[80%] mx-auto'>
                        <div className='text-center font-bold text-[1.1rem] pb-6'>Here’s a detailed "Privacy Policy" section for GOTE's e-commerce</div>
                        {
                            privacyPolicyData.map((policyInfo) => (
                                <div className='flex flex-col gap-4'>
                                    {/* <div className='bg-black w-full h-[1px]'></div> */}
                                    <div className='mt-4'>
                                        <h1 className='font-bold text-[1.1rem]'>{policyInfo.title}</h1>

                                        <div>{policyInfo.description}</div>
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

export default PolicyPage

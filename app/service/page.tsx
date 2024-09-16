"use client"
import React from 'react'
import { Header } from '../sections/Header'
import { Transition } from '../Utils/Transition'
import { Footer } from '../sections/Footer'
import { Faqs } from '../sections/Faqs'

const ServicePage = () => {
    return (
        <div className="flex flex-col gap-20    w-screen h-screen">
            <Header />
            <div className='w-[79%] mt-40 tracking-[1px] About_text mx-auto '>

                <h1 className="text-[6vw] mb-4 text-centser About_text">Our Services</h1>
                <div className='w-[92%] mx-auto'>
                    <p className="mb-6">
                        At <strong>GOTE</strong>, we are committed to delivering an exceptional shopping experience, combining top-quality products with unparalleled service. Whether you're browsing for the latest trends or essential everyday items, our wide range of services is designed to make your shopping experience easy, convenient, and enjoyable.
                    </p>

                    <h2 className="text-2xl font-semibold mb-2 "> Fast and Reliable Delivery</h2>
                    <p className="mb-6">
                        We understand how important it is to receive your purchases quickly. GOTE offers standard and express shipping, along with real-time tracking for all your orders.
                    </p>

                    <h2 className="text-2xl font-semibold mb-2"> Secure Payment Options</h2>
                    <p className="mb-6">
                        GOTE ensures a safe and seamless checkout process with various payment options, including credit/debit card payments, mobile payments, bank transfers, and pay on delivery.
                    </p>

                    <h2 className="text-2xl font-semibold mb-2"> Easy Returns and Refunds</h2>
                    <p className="mb-6">
                        If you're not completely happy with your purchase, our hassle-free return and refund policy allows you to return eligible items within 30 days for a full refund or exchange.
                    </p>
                </div>
            </div>

            <div className='mb-8'>
                <h1 className="text-[6vw] mb-4 text-center About_text">FAQS</h1>
                <Faqs />
            </div>

            <Footer />
        </div>
    );
}

export default Transition(ServicePage, { text: "Our Service" })
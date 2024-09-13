import React from 'react'
import { ImageField } from '../Component/ImageField'

export default function PurchasePage() {
    return (
        <div className='w-screen h-[100vh] overflow-auto'>
            <div className='fixed  px-8 w-full flex z-50 bg-[#f4f4f0] items-center justify-between shadow-lg h-[14vh]'>
                <div>
                    efsadsax
                </div>
                <div className='cursor-pointer relative '>
                    <ImageField src='/Images/gote-logo-removebg.png' alt='Logo' sizes='' objectFit='cover' width={100} height={100} priority={true} className="absolute z-50 md:left-10 left-2  top-10  md:top-10"/>
                </div>
                <div className='flex  items-center gap-6'>
                    <div className='cursor-pointer'>Account</div>
                    <div className='flex font-medium justify-center  items-center gap-4  cursor-pointer'>
                        <div>CART</div>
                        <div className='border-2 border-black hover:border-green-800 transition ease-in duration-500 text-center py-[0.8vw]   rounded-full w-[4vw] font-bold'>10</div>
                    </div>
                </div>
            </div>
            <div className='mt-[30rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsa voluptate dolores cumque inventore consectetur maxime earum perspiciatis, vel obcaecati porro est quis voluptatum necessitatibus ipsum, soluta dicta ad ducimus!</div>
        </div>
    )
}

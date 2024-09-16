import React from 'react'
import { ImageField } from '../Component/ImageField'
import Image from 'next/image'
import NavbarrRoutes from '../Auth/NavbarRoutes/NavbarRotes'
import { FaCartArrowDown } from "react-icons/fa";
export const Header = () => {
    return (
        <div className='fixed px-8 w-full flex z-50 bg-[#f4f4f0] items-center justify-between shadow-lg h-[14vh]'>
            <div className='cursor-pointer relative'>
                <Image src={'/images/gote-logo-removebg.png'} alt='Logo' width={135} height={50} priority={true} sizes={''} objectFit={'cover'} />
                {/* <img src="/images/gote-logo-removebg.png" alt="logo"  width={135} height={50} /> */}
            </div>
            <div className=' '>
                <div className='md:block hidden'>
                    <NavbarrRoutes />
                </div>
            </div>
            <div className=' md:flex hidden  items-center gap-6'>
                <div className='cursor-pointer'>Account</div>
                <div className='flex font-medium justify-center items-center gap-8 cursor-pointer'>
                    <div><FaCartArrowDown className='text-[1.8rem]' /></div>
                    <div className='border-2 border-black hover:border-green-800 transition ease-in duration-500 text-center py-[0.6vw] rounded-full w-[3.4vw] font-bold'>0</div>
                </div>
            </div>
        </div>
    )
}

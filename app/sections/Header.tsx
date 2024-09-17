import React from 'react'
import { ImageField } from '../Component/ImageField'
import Image from 'next/image'
import NavbarrRoutes from '../Auth/NavbarRoutes/NavbarRotes'
import { FaCartArrowDown } from "react-icons/fa";
import Link from 'next/link';
export const Header = () => {
    return (
        <div className='fixed px-8 w-full flex z-50 bg-[#f4f4f0] items-center justify-between shadow-lg h-[14vh]'>
            <div className='flex items-center justify-between w-full md:w-[60%]'>
                <div className='cursor-pointer md:right-0 right-8 relative'>
                    <Link href='/'>
                        <Image src={'/images/gote-logo-removebg.png'} alt='Logo' width={135} height={50} priority={true} sizes={''} objectFit={'cover'} />
                    </Link>
                    {/* <img src="/images/gote-logo-removebg.png" alt="logo"  width={135} height={50} /> */}
                </div>
                <div className=' '>
                    <div className=''>
                        <NavbarrRoutes />
                    </div>
                </div>
            </div>
            <div className=' md:flex hidden  items-center gap-6'>
                <div className='cursor-pointer'><Link href="Auth/auths">Account</Link></div>
                <div className='flex font-medium justify-center items-center gap-8 cursor-pointer'>
                    <div><FaCartArrowDown className='text-[1.8rem]' /></div>
                    <div className='border-2 border-black hover:border-green-800 transition ease-in duration-500 text-center xl:py-[0.5rem] py-[0.6rem] rounded-full w-[3rem] xl:w-[2.65rem] font-bold'>0</div>
                </div>
            </div>
        </div>
    )
}

import React, { ChangeEvent, useState } from 'react'
import Image from 'next/image'
import { FooterItems } from '../Utils/@datacontents'
import { FooterItems2 } from '../Utils/@datacontents'
import { IoLogoTwitter } from "react-icons/io";
import { FaPinterest } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { InputFields } from '../Component/InputFields';
import { ButtonField } from '../Component/ButtonField';
import toast, { Toaster } from 'react-hot-toast';
import { HoverFooterCard } from './HoverFooterCard';
import { usePathname } from 'next/navigation';
export const Footer = () => {
  const [email, setEmail] = useState('')
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast.success('Subscrition Successfull')
    setEmail('')
  }
  const location = usePathname();

  const handleActiveLocation = (itemHref: string) => {
    return location === itemHref ? 'text-black font-extrabold' : 'text-black font-medium';
  };

  return (
    <div className='w-screen xl:h-[70%]  bg-[#f4f4f0]'>
      <Toaster />
      <div className='flex w-full items-center  justify-between'>
        <div className='w-[40%] h-[1px] bg-black'></div>
        <div className='mx-2'>
          <Image src={'/images/gote-logo-removebg.png'} alt='Logo' width={165} height={100} priority={true} sizes={''} objectFit={'cover'} />
        </div>
        <div className='w-[40%] h-[1px] bg-black'></div>
      </div>
      <div className='flex xl:flex-row gap-8  flex-col w-[85%] mx-auto mt-10 justify-between'>
        <ul className="flex gap-8 items-center flex-col leading-[8px]">
          {FooterItems.map((item, index) => (
            <li key={index} className="cursor-pointer hover:underline">
              <a href={item.href} className={`text-[0.8rem] tracking-[3px] ${handleActiveLocation(item.href)} `}>{item.name}</a>
            </li>
          ))}
        </ul>
        <div className='items-center flex   flex-col relative gap-8' >
          <div className='relative flex item-center justify-center mb-2  text-center'>
            <div className='flex items-center  absolute gap-20'>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                <div><IoLogoTwitter className='text-[1.8rem] cursor-pointer' /></div>
              </a>
              <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
                <div><FaPinterest className='text-[1.8rem] cursor-pointer' /></div>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <div><FaInstagramSquare className='text-[1.8rem] cursor-pointer' /></div>
              </a>
            </div>
          </div>
          <div>
            <div className='h-[15vh] w-[1.5px] bg-black'></div>
          </div>
          <div className='flex flex-col  items-center gap-6'>
            <div className='tracking-[3px]'>WEEKLY NEWSLETTER</div>
            <form onSubmit={handleSubmit}>
              <div className='flex items-center  h-[6vh] w-[22rem] md:w-[28rem] xl:w-[23rem] border-2 border-black'>
                <div className=' w-full mx-auto px-4'>
                  <input type="text" value={email} name='email' placeholder='email...' className='w-full outline-0 bg-transparent rounded-[7px] h-full border-black ' onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                </div>
                <div className='bg-black h-full w-[2.5px]'></div>
                <div className='hover:text-white h-full item-center  flex hover:bg-black'>
                  <button className='px-2 text-center text-[0.9rem] ' type='submit'>Subscribe</button>
                </div>
              </div>
            </form>
            <div className='cursor-pointer'><HoverFooterCard /></div>
          </div>
        </div>
        <div className='pb-8'>
          <ul className="flex gap-8 items-center flex-col leading-[8px]">
            {FooterItems2.map((item, index) => (
              <li key={index} className="cursor-pointer hover:underline">
                <a href={item.href} className={`text-[0.8rem] tracking-[3px] ${handleActiveLocation(item.href)}`} >{item.name}</a>
              </li>
            ))}
          </ul>

        </div>

      </div>
    </div>
  )
}

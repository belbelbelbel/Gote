import React from 'react'
import Image from 'next/image'
import { FooterItems } from '../Utils/@datacontents'
export const Footer = () => {
  return (
    <div className='w-screen h-[70%] bg-[#f4f4f0]'>
      <div className='flex w-full items-center  justify-between'>
        <div className='w-[40%] h-[1px] bg-black'></div>
        <div className='mx-2'>
          <Image src={'/images/gote-logo-removebg.png'} alt='Logo' width={160} height={100} priority={true} sizes={''} objectFit={'cover'} />
        </div>
        <div className='w-[40%] h-[1px] bg-black'></div>
      </div>
      <div className='flex w-[85%] mx-auto mt-4 justify-between'>
        <ul className="flex gap-8 items-center flex-col">
          {FooterItems.map((item, index) => (
            <li key={index} className="cursor-pointer">
              <a href={item.href} className='text-[1rem]'>{item.name}</a>
            </li>
          ))}
        </ul>
        <div>sdfvsfdxgcv</div>
        <div>rsdzfwaesdfqea</div>
      </div>
    </div>
  )
}

"use client"
import React, { useContext } from 'react'
import { Header } from '../sections/Header';
import { cartProducts } from '../Utils/@datacontents';
import { ImageField } from '../Component/ImageField';
import { ContextApi } from '@/Provider/UseContext';
import { Footer } from '../sections/Footer';

const cartPage = () => {
    const context = useContext(ContextApi)
    const { cart }: any = context
    return (
        <div className='h-screen w-screen flex flex-col gap-20'>
            <div><Header /></div>
            <div className='w-[88%] xl:w-[88%]  mt-32 md:w-full xl:mt-10 mx-auto flex flex-col  iems-center  justify-center md:mt-32  gap-8'>
                {
                    cart.map((items: any) => (
                        <div key={items.id} className=' xl:w-full flex items-center justify-between   md:w-[30vw] mt-0 h-[10h]'>
                            <ImageField src={items.imageUrl} alt={items.description}
                                sizes={''}
                                objectFit={"cover"}
                                width={400}
                                height={200}
                                priority={true}
                                className='cursor-pointer z-20 xl:w-[13.5vw] xl:h-[22vh] md:h-[37vh]  md:w-[35rem]  w-[70vw] h-[43vh] rounded-[15px]'
                            />
                            <h1 className='font-medium'>{items.description}</h1>
                            <div className='flex items-center  flex gap-10'>
                                <p className='font-bold'>Price: ${items.price}</p>
                                <p>FinalPrice: ${items.price}</p>
                                <div>Qunatity: </div>
                            </div>
                            <hr />
                        </div>

                    ))
                }
            </div>
            <Footer />
        </div>
    )
}

export default cartPage;

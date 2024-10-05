"use client"
import React, { useContext, useEffect, useState } from 'react'
import { Header } from '../sections/Header';
import { ImageField } from '../Component/ImageField';
import { ContextApi } from '@/Provider/UseContext';
import { Footer } from '../sections/Footer';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const CartPage = () => {
    const { cart, setCart }: any = useContext(ContextApi);
    const [total, setTotal] = useState(0);
    const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
    const router  = useRouter()

    const handleRemove = (id: number) => {
        const updatedCart = cart.filter((item: any) => item.id !== id);
        setCart(updatedCart);
        toast.error("removed item")
    };




    const handleAddQuantity = (id: number) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: (prev[id] || 1) + 1,
        }));
    };

    const handleSubtractQuantity = (id: number) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: Math.max((prev[id] || 1) - 1, 1),
        }));
    };

    useEffect(() => {
        const totalPrice = cart.reduce((sum: number, item: any) => {
            const itemQuantity = quantities[item.id] || 1;
            return sum + item.price * itemQuantity;
        }, 0);
        setTotal(totalPrice);
    }, [cart, quantities]);

    const handleCheckout = (title: string,total: number,img:any,description:string) => {
        const provider:any = {
            id: title,
            description: description,
            amount: total,
            image: img
        }
        localStorage.setItem('item', JSON.stringify(provider))
        router.push('/payment')
    }


    return (
        <div className='h-screen w-screen flex flex-col  gap-20'>
            <Toaster />
            <div>
                <Header />
            </div>
            <div className='w-[88%] xl:w-[88%] mt-8 md:mt-32 md:w-full xl:mt-10 mx-auto flex flex-col items-center justify-center gap-8'>
                {
                    cart.length > 0 ? (
                        cart.map((item: any) => {
                            const itemQuantity = quantities[item.id] || 1;
                            const itemTotalPrice = item.price * itemQuantity;
                            return (
                                <div key={item.id} className='xl:w-full flex flex-col items-center justify-between md:w-full'>
                                    <div className='w-full h-[1px] bg-black'></div>
                                    {/* <Link href={`${item.id}`} className='w-full xl:w-full cursor-pointer flex xl:flex-row flex-col gap-6 xl:gap-0 xl:mt-4 mt-10 items-center justify-between md:w-full'> */}
                                    <div className='xl:w-full  flex xl:flex-row flex-col gap-6 xl:gap-0 xl:mt-4 mt-10 items-center justify-between md:w-full' >
                                        {/* Image */}

                                        {/* <Link href={{
                                            pathname: `/payment/${item.description}`,
                                           query: { data: JSON.stringify(item)}
                                        }}> */}
                                        <ImageField
                                            src={item.imageUrl}
                                            alt={item.description}
                                            objectFit="cover"
                                            width={200}
                                            height={200}
                                            priority={true}
                                            className='cursor-pointer z-20 xl:w-[13.5vw] xl:h-[22vh] md:h-[37vh] md:max-w-full w-[70vw] h-[43vh] rounded-[15px]' sizes={''} />
                                        {/* </Link> */}

                                        {/* Description */}
                                        <div className='ml-4'>
                                            <h1 className='font-medium text-xl'>{item.description}</h1>
                                        </div>

                                        {/* Quantity and Price Controls */}
                                        <div className='flex items-center justify-center relative  gap-10'>
         
                                            <div className='flex items-center w-auto'>
                                                <button
                                                    className='border-2 border-black px-4 py-2'
                                                    onClick={() => handleAddQuantity(item.id)}
                                                >
                                                    +
                                                </button>
                                                <div className='border-2 border-black px-4    py-2'>
                                                    {itemQuantity}
                                                </div>
                                                <button
                                                    className='border-2 border-black px-4 py-2'
                                                    onClick={() => handleSubtractQuantity(item.id)}
                                                >
                                                    -
                                                </button>
                                            </div>
                                            {/* Updated Price */}
                                            <div className='relative xl:w-[10vw]  w-[16vw] -top-3'>
                                                <p className='font-bold absolute xl:text-[0.9rem] md:text-[2vw] text-[3.5vw]'>
                                                    Price: ${itemTotalPrice.toFixed(2)}
                                                </p>
                                            </div>

                                            {/* Remove Button */}
                                            <button
                                                className='border-2 border-black px-4 py-2 xl:hover:bg-black bg-black xl:bg-transparent xl:text-black text-white xl:hover:text-white transition ease-in duration-200'
                                                onClick={() => handleRemove(item.id)}
                                            >
                                                x
                                            </button>
                                        </div>
                                        <button className='bg-black text-white cursor-pointer p-3 text-[0.8rem] rounded-full text-[1rem] w-full md:w-auto' onClick={() => handleCheckout(item.id,itemTotalPrice,item.imageUrl,item.description)}>Checkout</button>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className='text-center text-2xl font-bold'>Cart is Empty</div>
                    )
                }

                {/* Total Price */}
                <div className='font-bold text-xl'>
                    Total: ${total.toFixed(2)}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default CartPage;

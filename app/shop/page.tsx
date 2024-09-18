"use client"
import React, { useContext } from 'react'
import { Header } from '../sections/Header'
import { Transition } from '../Utils/Transition'
import { cartProducts } from '../Utils/@datacontents'
import { ImageField } from '../Component/ImageField'
import { Footer } from '../sections/Footer'
import { ButtonField } from '../Component/ButtonField'
import { ContextApi } from '@/Provider/UseContext'
import toast, { Toaster } from 'react-hot-toast'

const ShoPage = () => {
  const context = useContext(ContextApi)
  const {cart,setCart}:any = context
  const handleAddedProcuts = () => {
    setCart([...cart, cartProducts])
    if(cart.length > 0) {
      toast.success("item added to cart")
    }
    console.log(cart)
  }
  console.log(cart.length)
  return (
    <div className='w-screen h-screen flex flex-col gap-20  '>
      <Toaster/>
      <div className='relative'>
        <Header />
      </div>
      <div className='w-[88%] xl:w-[88%] md:w-full xl:mt-10 mx-auto flex  items-center justify-center md:mt-32 flex-wrap gap-20'>
        {
          cartProducts.map((items) => (
            <div key={items.id} className=' xl:w-[20vw] md:w-[30vw] mt-6 h-[10h]'>
              <ImageField src={items.imageUrl} alt={items.description}
                sizes={''}
                objectFit={"cover"}
                width={400}
                height={200}
                priority={true}
                className='cursor-pointer z-20 xl:w-[22.5vw] xl:h-[42vh] md:h-[37vh]  md:w-[35rem]  w-[70vw] h-[43vh] rounded-[15px]'
              />
              <h1>{items.description}</h1>
              <p>Price: ${items.price}</p>
              <ButtonField label={'Add to cart'} width='w-full' type="button" onClick={handleAddedProcuts}/>  
            </div>
          ))
        }
      </div>
      <Footer />
    </div>
  )
}

export default Transition(ShoPage, { text: "Shop Now" })
// export default ShoPage;

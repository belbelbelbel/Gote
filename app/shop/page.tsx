"use client"
import React from 'react'
import { Header } from '../sections/Header'
import { Transition } from '../Utils/Transition'
import { cartProducts } from '../Utils/@datacontents'
import { ImageField } from '../Component/ImageField'
import { Footer } from '../sections/Footer'
import { ButtonField } from '../Component/ButtonField'
const ShoPage = () => {
  return (
    <div className='w-screen h-screen flex flex-col gap-20  '>
      <div className='relative'>
        <Header />
      </div>
      <div className='w-[88%] xl:mt-10 mx-auto flex  items-center justify-center md:mt-32 flex-wrap gap-20'>
        {
          cartProducts.map((items) => (
            <div key={items.id} className=' w-[20vw] mt-6 h-[10h]'>
              <ImageField src={items.imageUrl} alt={items.description}
                sizes={''}
                objectFit={"cover"}
                width={400}
                height={200}
                priority={true}
                className='cursor-pointer z-20 xl:w-[22.5vw] xl:h-[42vh] md:h-[46vh]  md:w-[29rem]  w-[70vw] h-[43vh] rounded-[15px]'
              />
              <h1>{items.description}</h1>
              <p>Price: ${items.price}</p>
              <ButtonField label={'Add to cart'} width='w-full' type="button"/>  
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

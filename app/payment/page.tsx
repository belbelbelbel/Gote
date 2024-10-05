'use client'
import { Footer } from '@/app/sections/Footer'
import { Header } from '@/app/sections/Header'
import { useEffect, useState } from 'react'
import { ImageField } from '../Component/ImageField';
import { FormCheckout } from '../Component/FormCheckout';

export default function PaymentPage() {
  const [items, setItems] = useState<any>(null);

  useEffect(() => {
    const storedItem = globalThis?.localStorage?.getItem('item');
    if (storedItem) {
      setItems(JSON.parse(storedItem));
    }

  }, []);

  console.log(items)

  const { id, amount, image, description } = items || {};

  return (
    <div className='h-screen w-screen flex flex-col gap-[10rem]'>
      <Header />
      <div className='mt-40 max-w-[88%] items-center flex xl:flex-row flex-col  justify-between  '>
        <div className='flex  w-[60%]   bg-blasck'>
          <FormCheckout/>
        </div>
        <hr />
        <div className=''>
          {items ? (
            <div className='flex flex-col gap-3'>
              <p><strong>Type</strong>: {description}</p>
              <hr />
              <p><strong>Amount</strong>: {amount}</p>
              <hr />
              <ImageField
                src={image}
                objectFit="cover"
                width={200}
                height={200}
                priority={true}
                className='cursor-pointer z-20 xl:w-[23.5vw] xl:h-[29vh] md:h-[37vh] md:max-w-full w-[70vw] h-[43vh] rounded-[15px]' sizes={''} alt={''} />
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

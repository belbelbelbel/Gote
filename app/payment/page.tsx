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
      {
        items ? (
          <div className='mt-40 flex flex-col gap-16 '>
            <div className='text-center About_text font-bold text-2xl tracking-[3px]'>GOTE DISBURSED PAYMENTS</div>
            <div className=' xl:max-w-[88%] items-center  flex xl:flex-row flex-col  justify-between  '>

              <div className='flex  xl:w-[60%] w-[88%]  items-center justify-center   bg-blasck'>
                <FormCheckout />
              </div>
              <hr />
              <div className='xl:pt-0 pt-[4rem]'>
                <div className='flex flex-col gap-3'>
                  <p><strong>Type</strong>: {description}</p>
                  <hr />
                  <p><strong>Amount</strong>: ${parseFloat(amount).toFixed(2)}</p>
                  <hr />
                  <ImageField
                    src={image}
                    objectFit="cover"
                    width={200}
                    height={200}
                    priority={true}
                    className='cursor-pointer z-20 xl:w-[23.5vw] xl:h-[29vh] md:h-[37vh] md:max-w-full w-[70vw] h-[35vh] rounded-[15px]' sizes={''} alt={''} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className='text-center mt-40'>Loading...</div>
        )
      }
      <Footer />
    </div>
  );
}

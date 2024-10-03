'use client'
import { Footer } from '@/app/sections/Footer'
import { Header } from '@/app/sections/Header'
import { useParams } from 'next/navigation'
import React, { ReactPortal } from 'react'


export default function paymentPage() {
  const params: any = useParams()
  console.log(params)
  return (
    <div className='h-screen w-screen flex flex-col gap-[10rem]'>
      <Header />
      <div className='mt-40 w-[88%] mx-auto'>
        user id {params.id}
      </div>
      <Footer />
    </div>
  )
}

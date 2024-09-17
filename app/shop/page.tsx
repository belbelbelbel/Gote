"use client"
import React from 'react'
import { Header } from '../sections/Header'
import { Transition } from '../Utils/Transition'
 const ShoPage = () => {
  return (
    <div className='w-screen h-screen'>
        <Header/>
    </div>
  )
}

export default Transition(ShoPage,{text:"Shop Now"})

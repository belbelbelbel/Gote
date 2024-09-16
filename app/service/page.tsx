"use client"
import React from 'react'
import { Header } from '../sections/Header'
import { Transition } from '../Utils/Transition'

const ServicePage  =  ()  => {
  return (
    <div className='w-screen h-screen'>
        <div>
            <Header/>
        </div>
    </div>
  )
}

export default Transition(ServicePage,{text:"Our Service"})
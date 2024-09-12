"use client"
import { ButtonField } from '@/app/Component/ButtonField'
import { FormData, isFormFilled } from '@/app/Utils/@types'
import { InputFields } from '@/app/Component/InputFields'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import Signup from '../signup/page'

export default function Signin() {
  const [formData, setFormdata] = useState<FormData | any>({
    email: '',
    password: '',
  })
  const [createAccountModal, setCraeteAccountModal] = useState(false)

  const handleToggleCreateAccountModal = () => {
    setCraeteAccountModal(!createAccountModal)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormdata({ ...formData, [name]: value })
  }
  const isFilledForm = isFormFilled(formData);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!isFilledForm) {
      toast.error("please fill in all form")
      return;
    }
    console.log('Form submitted with data:', formData)
  }

  return (

    <div className='h-[100dvh] w-screen flex-col gap-4 flex justify-center items-center '>
      <div><Toaster /></div>
      <div className='xl:w-[39%] mx-auto flex flex-col gap-2 items-center text-center xl:items-start'>
        <div className='md:text-[2.5rem] text-[2rem]'>
          <strong> Welcome</strong> <span className='font-light'>Back</span>
        </div>
        <div>
          <div>Please enter your login details to access your account.</div>
        </div>
      </div>
      <div className='w-full flex justify-center  items-center'>
        <form className='w-full justify-center gap-8 flex flex-col items-center' onSubmit={handleFormSubmit}>
          <div className='w-full justify-center flex flex-col items-center'>
            <InputFields type='email' width='xl:w-[40%] w-[80%]' name='email' placeholder='E.g Bendee@gmail.com' value={formData.email} onChange={handleInputChange} />
            <InputFields type='password' width='xl:w-[40%] w-[80%]' name='password' placeholder='E.g Steword12#$%' value={formData.password} onChange={handleInputChange} />
          </div>
          <div className='w-full  items-center  justify-center  flex text-white'>
            <ButtonField label="Sign in" width="xl:w-[40%] w-[78%]"/>
          </div>
          <div>New account? <span className='underline cursor-pointer leading-0 tracking-0' onClick={handleToggleCreateAccountModal}>Sign Up</span> </div>
        </form>
      </div>
      <AnimatePresence>
        {
          createAccountModal &&
          <motion.div
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', damping: 10, stiffness: 50 }}
            exit={{ opacity: 0, y: 300 }}
            className='flex flex-col gap-2 overflow-auto xl:pt-0  pt-[6rem] Account_slide  h-full inset-0 fixed w-full z-50 bg-[#f4f4f0] justify-center items-center text-center mx-auto' >
              <Signup/>
          </motion.div>
        }
      </AnimatePresence>
    </div>
  )
}

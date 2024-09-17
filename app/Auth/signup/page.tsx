"use client"
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Signin from '../auths/page';
import { InputFields } from '@/app/Component/InputFields';
import { ButtonField } from '@/app/Component/ButtonField';
import { FormDataCreateAcount, isFormFilled } from '@/app/Utils/@types';
import { useRouter } from 'next/navigation';


export default function Signup({setCraeteAccountModal}:any){
  const Router = useRouter()
  const [formData, setFormData] = useState<FormDataCreateAcount | any>({
    firstName: '',
    lastName: '',
    email: '',
    address: "",
    phonenumber: "",
    password: '',
    confirmPassword: '',
  })
  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({...formData, [name]: value })
  }
  const isFilledForm = isFormFilled(formData);
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!isFilledForm) {
      toast.error("please fill in all form")
      return;
    }
    else if (formData.password!== formData.confirmPassword)  {
      toast.error("Passwords do not match")
      return;
    }
    else {
      Router.push('/')
      toast.success('Logged in successfully')
      setFormData({})
    }
    
    console.log('Form submitted with data:', formData)
  }


  return (
    <div className='xl:flex flex-col gap-4 justify-center  h-full'>
      <div><Toaster /></div>
      <div className='xl:w-[full] mx-auto flex flex-col gap-2 items-center text-center xl:items-start'>
        <div className='md:text-[2.5rem] text-[2rem] '>
          <strong> Create </strong> <span className='font-light'>An Account</span>
        </div>
        <div>
          <div>Register now to enjoy seamless shopping, personalized recommendations, and rewards!...</div>
        </div>
      </div>
      <div>
        <form className='flex flex-col gap-12' onSubmit={handleFormSubmit}>
          <div>
            <div className='flex gap-8 xl:flex-row flex-col'>
              <InputFields value={formData.lastName} name='lastName' type='text' placeholder="E.g Bendee" onChange={handleInputChange} width='xl:w-[60%] w-[80%]' />
              <InputFields value={formData.firstName} name='firstName' type='text' placeholder='E.g Agozie' onChange={handleInputChange} width='xl:w-[60%] w-[80%]' />
            </div>
            <div>
              <InputFields value={formData.email} name='email' type='email' placeholder="E.g Bendee@gmail.com" onChange={handleInputChange} width='xl:w-[100%] w-[80%]' />
            </div>

            <div className='flex gap-8 xl:flex-row flex-col'>
              <InputFields value={formData.phonenumber} name='phonenumber' type='text' placeholder="E.g +234 8993322234 " onChange={handleInputChange} width='xl:w-[60%] w-[80%]' />
              <InputFields value={formData.address} name='address' type='text' placeholder='E.g Fegge Onitsha' onChange={handleInputChange} width='xl:w-[60%] w-[80%]' />
            </div>
            <div className='flex gap-8 xl:flex-row flex-col'>
              <InputFields value={formData.password} name='password' type='text' placeholder="E.g Steword12#$%'" onChange={handleInputChange} width='xl:w-[60%] w-[80%]' />
              <InputFields value={formData.confirmPassword} name='confirmPassword' type='text' placeholder='Confirm#password' onChange={handleInputChange} width='xl:w-[60%] w-[80%]' />
            </div>
          </div>
          <div className='w-full  items-center  justify-center xl:pb-0 pb-8 flex text-white'>
            <ButtonField type="submit" label="Create Account" width="xl:w-full w-[78%]" />
          </div>
        </form>
        <div className='mb-8 xl:mt-2'>Already have an account ? <span className='underline cursor-pointer leading-0 tracking-0 ' onClick={() => setCraeteAccountModal(false)}>Sign in</span> </div>
      </div>
    </div>
  );
}

import React, { ChangeEvent, useState } from 'react'
import { InputFields } from './InputFields'
import { ButtonField } from './ButtonField'
import toast from 'react-hot-toast'
import { isFormFilled } from '../Utils/@types'

export const FormCheckout = () => {
    const [contactData, setContactData] = useState({
        email: "",
        message: ""
    });
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setContactData({
            ...contactData,
            [e.target.name]: e.target.value
        });
    };

    const isFilledForm = isFormFilled(contactData);
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!isFilledForm) {
          toast.error("please fill in all form")
          return;
        }
        else { 
          toast.success('Ready To Checkout')
          setContactData({ email: '', message: '' })
        }
    }
    
    return (
        <div className='flex flex-col justify-center   items-center h-full xl:w-[80%]  w-full mx-auto'>
            <form className='w-full justify-center gap-12 flex flex-col items-center' onSubmit={handleSubmit}>
                <div className='w-full justify-center flex flex-col gap-4 items-center'>
                    <InputFields type='email' width='xl:w-[100%] w-[100%]' name='email' placeholder='E.g Bendee@gmail.com' value={contactData.email} onChange={handleInputChange} />
                    <InputFields type='text' width='xl:w-[100%]  w-[100%]' name='message' placeholder='E.g Bendee' value={contactData.message} onChange={handleInputChange} />
                </div>
                <div className='w-full  items-center  justify-center  flex text-white'>
                    <ButtonField type="submit" label="Check Out" width="xl:w-[100%] w-[100%]" />
                </div>
            </form>
        </div>
    )
}

"use client"
import React, { ChangeEvent, useState } from 'react'
import { InputFields } from '../Component/InputFields'
import { Header } from '../sections/Header';
import { ButtonField } from '../Component/ButtonField';
import { Footer } from '../sections/Footer';
import { isFormFilled } from '../Utils/@types';
import toast, { Toaster } from 'react-hot-toast';

const ContactPage = () => {
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
          toast.success('Message sent successfully')
          setContactData({ email: '', message: '' })
        }
    }
    return (
        <div className='w-screen h-screen flex flex-col gap-32 md:gap-32'>
            <Toaster/>
            <Header />
            <div className='flex flex-col justify-center xl:mt-52 mt-36 items-center h-full'>
                <div className='xl:w-[39%]  mx-auto flex flex-col gap-2 mb-4 items-center text-center xl:items-start'>
                    <div className='md:text-[2.5rem] text-[2rem]'>
                        <strong> Contact </strong> <span className='font-light'>Us</span>
                    </div>
                    <div>
                        <div>Please enter your login details to access your account.</div>
                    </div>
                </div>
                <form className='w-full justify-center gap-10 flex flex-col items-center' onSubmit={handleSubmit}>
                    <div className='w-full justify-center flex flex-col gap-4 items-center'>
                        <InputFields type='email' width='xl:w-[40%] w-[80%]' name='email' placeholder='E.g Bendee@gmail.com' value={contactData.email} onChange={handleInputChange} />
                        <InputFields type='text' width='xl:w-[40%]  w-[80%]' name='message' placeholder='E.g your message here' value={contactData.message} onChange={handleInputChange} />
                    </div>
                    <div className='w-full  items-center  justify-center  flex text-white'>
                        <ButtonField type="submit" label="Contact Us" width="xl:w-[40%] w-[78%]" />
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}
export default ContactPage

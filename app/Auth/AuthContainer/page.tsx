import React from 'react'
import Signin from '../login/page'
import Signup from '../signup/page'
import Image from 'next/image'
import { ImageField } from '@/app/Component/ImageField'

export default function AuthContainer() {
    return (
        <div className='flex flex-col w-screen h-screen'>
            <div className='w-[50%] h-screen'>
                <Signin />
            </div>
        </div>
    )
}

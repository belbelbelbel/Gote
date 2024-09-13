import React from 'react'
import { buttonFields } from '../Utils/@types'

export const ButtonField = ({label,width,type}:buttonFields) => { 
  return (
    <button type={type} className={`${width}  h-[8vh] outline-0 hover:bg-black hover:text-white rounded-[10px] transition ease-in duration-400   text-[1.3rem] mt-2  bg-transparent border-2 border-black text-black`}>{label}</button>
  )
}

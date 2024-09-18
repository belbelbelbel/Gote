import React from 'react'
import { buttonFields } from '../Utils/@types'

export const ButtonField = ({label,width,type,onClick}:buttonFields) => { 
  return (
    <button type={type} onClick={onClick} className={`${width}  h-[8vh] outline-0 hover:bg-black  hover:text-white rounded-[10px] transition ease-in duration-400   text-[1.2rem] mt-2  bg-transparent border-2 border-black text-black`}>{label}</button>
  )
}

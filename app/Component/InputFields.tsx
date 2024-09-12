import React from 'react'
import { FormDataField } from '../Utils/@types'
export const InputFields = ({type,placeholder,value,name,onChange,width}:FormDataField) => {
  return (
        <input type={type} placeholder={placeholder}  name={name} onChange={onChange} value={value} className={` ${width} text-black outline-0  mx-auto rounded-[3px]  mt-2 border-black bg-transparent border-x-0 border-t-0 border-2 h-[10vh]  p-3`}/>
  )
}

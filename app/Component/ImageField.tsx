import Image from 'next/image'
import React from 'react'
import { ImageData } from '../Utils/@types'
export const ImageField = ({src,alt,sizes,objectFit,priority}:ImageData) => {
  return (
    <div>
        <Image src={src} alt={alt} fill sizes={sizes} objectFit={objectFit} priority={priority}/>
    </div>
  )
}

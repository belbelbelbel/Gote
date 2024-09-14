import Image from 'next/image'
import React from 'react'
import { ImageData } from '../Utils/@types'
export const ImageField = ({src,alt,sizes,objectFit,priority,height,width,className}:ImageData) => {
  return (
    <div>
        <Image src={src} alt={alt}  sizes={sizes}  objectFit={objectFit} priority={priority} width={width} height={height} className={className}/>
    </div>
  )
}

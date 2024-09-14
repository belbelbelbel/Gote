
import React, { useState } from 'react'
import { ImageField } from '../Component/ImageField'
import { motion } from 'framer-motion'
import { ImgArray } from '../Utils/@datacontents'
export const ImgArrayContent = () => {
    const [imageContents, setImageContents] = useState(0)
    const handleShowImageContent = (id: number) => {
        setImageContents(id)
        console.log("contenima##id", id)
    }

    const handleRemoveImageContent = () => {
        setImageContents(0)
        console.log("contenima##remove", 0)
    }
    return (
        <div className='w-full flex xl:flex-row flex-col gap-8 relative items-center justify-evenly'>
            {
                ImgArray.map((img, index) => (
                    <motion.div
                        key={index}
                        className=' flex '
                        initial={{ opacity: 0, x: -100 }}
                        onMouseLeave={handleRemoveImageContent} onMouseEnter={() => handleShowImageContent(img.id)}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: 'easeInOut', type: 'spring', stiffness: 100 }}
                    >
                        <div >

                            
                            <ImageField src={img.src} alt={img.alt} sizes={''} objectFit={img.objectFit} className={`cursor-pointer   z-20  w-[22.5vw] h-[53vh] rounded-[15px]`} width={230} height={100} priority={true} />
                        </div>

                        {
                            imageContents === img.id && (
                                <motion.div
                                    className='flex w-[22.5vw] h-full transition ease-in duration-300 absolute hover:bg-black hover:bg-opacity-30  text-white text-[4vw] items-center justify-center gap-4 cursor-pointer rounded-[15px]'
                                    // exit={{ opacity: 0, y: 100 }}
                                    // transition={{ duration: 1, ease: 'easeInOut', type: 'spring', stiffness: 100 }}
                                >
                                    {/* <div className={`${img.id === imageContents && "absolute w-full bg-black h-full"}`}></div> */}
                                    <div>{img.id}</div>
                                </motion.div>
                            )
                        }
                    </motion.div>
                ))
            }

        </div>
    )
}

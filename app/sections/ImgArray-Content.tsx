import React, { useState } from 'react';
import { ImageField } from '../Component/ImageField';
import { motion } from 'framer-motion';
import { ImgArray } from '../Utils/@datacontents';
import { ImgArrrayProps } from '../Utils/@types';
import toast, { Toaster } from 'react-hot-toast'
import { ButtonField } from '../Component/ButtonField';

export const ImgArrayContent = () => {
    const [imageContents, setImageContents] = useState<number | null>(null);
    const [addLike, setAddLike] = useState<ImgArrrayProps[]>([]);

    const handleShowImageContent = (id: number) => setImageContents(id);
    const handleRemoveImageContent = () => setImageContents(null);

    const handleLikeImageContent = (id: number) => {
        const likedImage = ImgArray.find((img) => img.id === id);

        if (likedImage) {
            if (addLike.some((img) => img.id === id)) {
                setAddLike(addLike.filter((img) => img.id !== id));
                console.log("Updated liked images:", addLike.filter((img) => img.id !== id));
            } else {
                toast.success(`Liked an image with id: ${id}`);
                setAddLike([...addLike, likedImage]);
                console.log("Updated liked images:", [...addLike, likedImage]);
            }
        }
    };

    return (
        <div className='w-full flex xl:flex-row flex-col xl:gap-8 md:gap-16 gap-10 relative items-center justify-evenly'>
            <Toaster />
            {ImgArray.map((img) => (
                <motion.div
                    key={img.id}
                    className='flex'
                    initial={{ opacity: 1, x: 0 }}
                    onMouseLeave={handleRemoveImageContent}
                    onMouseEnter={() => handleShowImageContent(img.id)}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut', type: 'spring', stiffness: 100 }}
                >
                    <div>
                        <ImageField
                            src={img.src}
                            alt={img.alt}
                            sizes={''}
                            objectFit={img.objectFit}
                            className='cursor-pointer z-20 xl:w-[22.5vw] md:h-[46vh]  md:w-[29rem]  w-[70vw] h-[43vh] rounded-[15px]'
                            width={230}
                            height={100}
                            priority={true}
                        />
                    </div>

                    {imageContents === img.id && (
                        <motion.div
                            className='flex xl:w-[22.5vw] md:w-[29rem] w-[70vw] h-[43vh] md:h-[46vh] xl:h-full transition ease-out duration-300 absolute hover:bg-black hover:bg-opacity-40 text-white text-[4vw] items-center justify-center gap-4 cursor-pointer rounded-[15px]'
                        >
                            <div className="heart-container absolute top-4 right-4">
                                <svg
                                    onClick={() => handleLikeImageContent(img.id)}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="45"
                                    height="50"
                                    fill={addLike.some((liked) => liked.id === img.id) ? "black" : "rgba(255, 255, 255, 0.5)"}
                                    className='transition ease-out duration-300'
                                >
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                            </div>
                            {/* <div>{img.id}</div> */}

                            <motion.div
                                initial={{ opacity: 0, y: 60 }}
                                animate={{ opacity: 1, y: 50 }}
                                transition={{ duration: 0.5, ease: 'easeInOut', type: 'spring', stiffness: 100 }}

                                className='items-center  flex-col  md:gap-4 flex w-[90%] justify-center'>
                                <div className='text-[1rem] text-center'>{img.description}</div>
                                <button className='bg-black text-[1rem] hover:bg-opacity-80  rounded-[8px] h-[6vh]  w-[70%] mx-auto h-[5vh]'>See More</button>
                            </motion.div>
                        </motion.div>
                    )}
                </motion.div>
            ))}
            {/* {addLike.length} */}
        </div>
    );
};

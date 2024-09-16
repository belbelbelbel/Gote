import { AnimatePresence, motion, easeOut } from 'framer-motion';
import React, { useEffect, useState } from 'react';

export const Transition = (OgComponent: React.ComponentType) => {
    return (props: any) => {
        const [showComponent, setShowComponent] = useState(true);
        const [isExiting, setIsExiting] = useState(false);

        // Handle component exit
        useEffect(() => {
            // if (!isExiting) return;

            const timer = setTimeout(() => {
                setShowComponent(false);
            }, 800); // Match this duration with the slide-out duration

            return () => clearTimeout(timer);
        },);

        return (
            <div className='flex flex-col h-screen w-screen justify-center items-center'>
                <OgComponent {...props} />
                <AnimatePresence>
                    {showComponent && (
                        <motion.div
                            key="page-content"
                            className='slide-into text-white text-[13vw] h-full text-center items-center justify-center'
                            initial={{ y: 0 }}
                            animate={{ y: 0 }}
                            exit={{ y: -700 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                        >
                            <motion.div
                                key="page-text"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45, ease: 'easeOut', type: 'spring', damping: 10, stiffness: 50 }}

                                exit={{ opacity: 0, y: 0}} 
                            >
                                About us
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {!showComponent && (
                        <motion.div
                            key="slide-out"
                            className='slide-out'
                            initial={{ scaleY: 1 }}
                            animate={{ scaleY: 0 }}
                            exit={{ scaleY: 1 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        />
                    )}
                </AnimatePresence>
            </div>
        );
    };
};

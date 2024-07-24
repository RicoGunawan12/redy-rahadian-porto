import React from 'react'
import biographyImage from '../../assets/biography.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function BiographySection2() {
    const { ref, inView } = useInView({
        triggerOnce: true, // Ensures animation happens only once
        threshold: 0.3,    // Trigger when 10% of the component is visible
      });
    return (
        <div className='w-[100vw] h-[100vh] relative z-10' ref={ref}>
            <div className='flex h-full items-center'>
                <div className='w-[50%] pl-[10%] pr-[80px] '>
                    <div>
                        <motion.div 
                            initial={{ y: -100, opacity: 0 }}
                            animate={inView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
                            transition={{ duration: 0.5 }} 
                            className='mb-4 font-semibold'>
                                APPROACH
                        </motion.div>
                        
                        <motion.div
                            initial={{ y: 200, opacity: 0 }}
                            animate={inView ? { y: 0, opacity: 1 } : { y: 200, opacity: 0 }}
                            transition={{ duration: 0.5 }} 
                            className='px-2 text-[14px]'
                        >
                            <div className='mb-4'>
                                Metal, such as steel, aluminum and copper, is currently his material of choice. His creative visions push him to fully understand the characteristic of each material involved in his creative process. Only with a real knowledge of each metal that he, as an artist, is capable to go far and beyond what people expect of him. His works capture and honor the unique personality of each metal.
                            </div>

                            <div>
                                Even though initially it was the world of automotive and engine design that captivated him, it was art that made him feel at home and sculpture became his language in communicating his messages.
                            </div>
                        </motion.div>

                        <div className='mt-10 border-b-[1px] border-black'></div>
                    </div>

                    
                    <div className='mt-10'>
                        <motion.div 
                            initial={{ y: -100, opacity: 0 }}
                            animate={inView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
                            transition={{ duration: 0.5 }} 
                            className='mb-4 font-semibold'>BACKGROUND</motion.div>
                        
                        <motion.div
                            initial={{ y: 200, opacity: 0 }}
                            animate={inView ? { y: 0, opacity: 1 } : { y: 200, opacity: 0 }}
                            transition={{ duration: 0.5 }} 
                            className='px-2 text-[14px]'
                        >
                            <div className='mb-4'>
                                Following his interest in engineering, he enrolled in the Institute Saint Joseph in Brussels, Belgium majoring in Mecanique Garage Department or Mechanical Engineering after high school. 
                            </div>

                            <div>
                                During his study, he became very interested in using engineering approaches in creating his art. Every piece that he has ever created is labor intensive and non-casting, handmade and one-of-a-kind.
                            </div>
                        </motion.div>

                        <div className='mt-10 border-b-[1px] border-black'></div>
                    </div>


                </div>
    
                <motion.div 
                    initial={{ y: '-100%' }}
                    animate={inView ? { y: '0%' } : { y: '-100%' }}
                    transition={{ duration: 0.5 }} 
                    className='h-full w-[50%] z-10 relative' 
                    style={{ backgroundImage: `url(${biographyImage})`, backgroundSize:'auto 40%' }}>
                
                </motion.div>
            </div>
        </div>
      )
}

export default BiographySection2
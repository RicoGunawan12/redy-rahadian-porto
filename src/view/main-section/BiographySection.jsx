import React from 'react'
import Photo from '../../assets/Redy Rahadian.png';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

function BiographySection() {
    const { ref, inView } = useInView({
        triggerOnce: true, // Ensures animation happens only once
        threshold: 0.5,    // Trigger when 10% of the component is visible
      });

  return (
    <div className='w-[100vw] h-[100vh] relative z-20 bg-[white]' ref={ref}>
        <div className='flex h-full items-center'>
            <div className='w-[50%] pl-[10%] pr-[80px] '>
                <motion.div 
                    initial={{ y: -100, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
                    transition={{ duration: 0.5 }} 
                    className='mb-4 font-semibold'>
                        BIOGRAPHY
                </motion.div>
            
                <motion.div 
                    initial={{ y: 200, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : { y: 200, opacity: 0 }}
                    transition={{ duration: 0.5 }}  
                    className='px-2 text-[14px]'
                >
                    <div className='mb-4'>
                        Born in Cianjur, West Java on May 17, 1973, Redy Rahadian is an accomplished sculpture artist from Indonesia. He began his art career in 1997 and he has been actively participating in the evolution of Indonesia’s art scene.
                    </div>

                    <div>
                        Redy Rahadian believes in inspiring others. He is passionate in introducing new ways to explore solid materials, presenting a completely new way to see and use an object. He exposes the world to creations that are sometimes peculiar but wondrous. Redy Rahadian breaks boundaries and steps out of boxes. He takes others to bravely venture roads that are less traveled.
                    </div>
                </motion.div>

                <div className='mt-10 border-b-[1px] border-black'></div>
            </div>

            <div className='h-full w-[50%]'>
                <motion.img 
                    initial={{ y: '-100%' }}
                    animate={inView ? { y: '0%' } : { y: '-100%' }}
                    transition={{ duration: 0.5 }}
                    src={Photo} className='h-[100vh] w-full object-cover relative z-20'/>
            </div>
        </div>
    </div>
  )
}

export default BiographySection
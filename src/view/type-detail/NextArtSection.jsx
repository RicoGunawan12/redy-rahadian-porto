import React from 'react'
import Image from '../../assets/artwork3.jpeg';
import { motion } from 'framer-motion';

function NextArtSection() {
  return (
    <div className='min-h-[100vh] pb-[200px] px-[10vw] pt-20 overflow-x-hidden'>
       <div className='font-bold text-[72px]'>Next Arts</div>

       <motion.div
        drag='x'
        dragConstraints={{left: -500, right: 0}}
        className='flex gap-10 mt-14 min-w-[120vw]'>
            <div className='w-[60vw] relative'>
                <div className='absolute z-[1] w-full h-full'></div>
                <img src={Image} className='w-full relative z-0'/>
            </div>
            <div className='w-[60vw]'>
                <div className='absolute z-[1] w-full h-full'></div>
                <img src={Image} className='w-full'/>
            </div>
            <div className='w-[60vw]'>
                <div className='absolute z-[1] w-full h-full'></div>
                <img src={Image} className='w-full'/>
            </div>
       </motion.div>
    </div>
  )
}

export default NextArtSection
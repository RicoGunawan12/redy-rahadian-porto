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
                <div className='absolute z-[2] w-full h-full opacity-[0] hover:opacity-[100] transition hover:cursor-pointer transition-opacity duration-[500ms] hover:bg-[#0009]'>
                  <div className='relative h-full w-full'>
                    <div className='flex justify-center items-center w-full h-full text-[3vw] text-white'>Art Product</div>
                    <div className='absolute bg-[white] z-[1] rounded-[50%] bottom-[50px] w-[7vw] h-[7vw] right-[40px]'>
                      <div className='w-full h-full flex items-center justify-center'>View Art</div>
                    </div>
                  </div>
                </div>
                <img src={Image} className='w-full relative z-0'/>
            </div>
            <div className='w-[60vw] relative'>
                <div className='absolute z-[1] w-full h-full'></div>
                <div className='absolute z-[2] w-full h-full opacity-[0] hover:opacity-[100] hover:cursor-pointer transition-opacity duration-[500ms] hover:bg-[#0009]'>
                  <div className='relative h-full w-full'>
                    <div className='flex justify-center items-center w-full h-full text-[3vw] text-white'>Art Product</div>
                    <div className='absolute bg-[white] z-[1] rounded-[50%] bottom-[50px] w-[7vw] h-[7vw] right-[40px]'>
                      <div className='w-full h-full flex items-center justify-center'>View Art</div>
                    </div>
                  </div>
                </div>
                <img src={Image} className='w-full relative z-0'/>
            </div>
            <div className='w-[60vw] relative'>
                <div className='absolute z-[1] w-full h-full'></div>
                <div className='absolute z-[2] w-full h-full opacity-[0] hover:opacity-[100] transition hover:cursor-pointer transition-opacity duration-[500ms] hover:bg-[#0009]'>
                  <div className='relative h-full w-full'>
                    <div className='flex justify-center items-center w-full h-full text-[3vw] text-white'>Art Product</div>
                    <div className='absolute bg-[white] z-[1] rounded-[50%] bottom-[50px] w-[7vw] h-[7vw] right-[40px]'>
                      <div className='w-full h-full flex items-center justify-center'>View Art</div>
                    </div>
                  </div>
                </div>
                <img src={Image} className='w-full relative z-0'/>
            </div>
            
       </motion.div>
    </div>
  )
}

export default NextArtSection
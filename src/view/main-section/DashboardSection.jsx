import React from 'react'
import NavigationBar from '../component/NavigationBar'
import { motion } from 'framer-motion';
import SpinningText from '../component/SpinningText';

function DashboardSection() {
  return (
    <div className='relative w-[100vw] h-[130vh] bg-center bg-no-repeat bg-cover text-[white]' style={{backgroundImage:"url('https://s3-alpha-sig.figma.com/img/3663/533f/6e4e1a477a598d641ad73f5abbad913c?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kFbEcC5XaOfEi0ghOXkPPvbI5CFeaka7HNe3FVyCSOz6rzS7fuTg27olVLpLQuY4MN2KjuaKkYQBQmeoDKBOHAWUvhdGqqiVQzFQPlwUZmx9eIEySHzrHJ9Ii-UFLWhVXZlT8dGoeEbFtDDLpMx7MrfO6g0lLb56Cq3jB1CCwUi5XAW7VCpQ14WDLWFWh~riyaGQDWfw5KK8~OviCWmkZ~OIUfKPOBSe2A1JvEjRjU51Z7VsRs03t4G5b9NEWjNHj5XsJFWcnhW3ClxYMM72vJ07~F7IAhcmwrGrS37kC64Ijot2ZaFfulDMfKDF955HgNXzNCkF4mXipN4HkfAbwA__')"}}>
        <div className='absolute w-full h-full bg-[#0008]'>
            <motion.div
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}

            ><NavigationBar/></motion.div>
        </div>
        <motion.div 
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          // exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className='absolute top-[250px] left-[8vw]'>
            <div className='text-[34px] font-semibold'>Fine Art Sculptor</div>
            <div className='mt-2'>Based in Indonesia</div>
        </motion.div>

        <motion.div
         initial={{ x: 500 }}
         animate={{ x: 0 }}
        //  exit={{ opacity: 0 }}
         transition={{ duration: 0.5, delay: 1 }}
         className='absolute top-[350px] right-[8vw]'>
            <div className='text-[32px]'>Modern &</div>
            <div className='text-[32px]'>Contemporary Artist</div>
        </motion.div>
        
        <motion.div
         initial={{ x: 500 }}
         animate={{ x: 0 }}
        //  exit={{ opacity: 0 }}
         transition={{ duration: 0.5, delay: 1 }}
         className='absolute top-[300px] right-[11vw]'>
            <div className='h-[40px] w-[40px] text-white'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="arrow-down-left"><path fill="white" d="M17,16H9.41l8.3-8.29a1,1,0,1,0-1.42-1.42L8,14.59V7A1,1,0,0,0,6,7V17a1,1,0,0,0,.08.38,1,1,0,0,0,.54.54A1,1,0,0,0,7,18H17a1,1,0,0,0,0-2Z"></path></svg>
            </div>

        </motion.div>

        

        <div className='absolute bottom-[200px] left-1/2 -translate-x-1/2'>
          <SpinningText/>
        </div>
    </div>
  )
}

export default DashboardSection

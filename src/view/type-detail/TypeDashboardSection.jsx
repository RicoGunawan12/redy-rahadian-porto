import React from 'react'
import NavigationBar from '../component/NavigationBar'
import Sculpture1 from '../../assets/sculptures/scrulpture1.JPG'
import Sculpture2 from '../../assets/sculptures/scrulpture2.png'
import Sculpture3 from '../../assets/sculptures/scrulpture3.png'
import Sculpture4 from '../../assets/sculptures/scrulpture4.JPG'
import { motion } from 'framer-motion';

function TypeDashboardSection() {
  return (
    <div
      className='min-h-[130vh] bg-[black] pb-20 relative'>
        {/* <div className='absolute w-full h-full'>
        </div> */}
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className='z-3'
        >
          <NavigationBar/>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 1 }}  
          className='absolute w-[100vw] h-[120vh] z-2 bg-black opacity-[0.5]'>
        

        </motion.div>
        <motion.img 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}  
          className='absolute w-[350px] bottom-3 right-[14vw]' src={Sculpture1}
        />
          
        <motion.img 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}  
          className='absolute w-[150px] bottom-0 left-[17vw]' src={Sculpture2}
        />
        
        <motion.img 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className='absolute w-[100px] right-[36vw] top-[250px]' src={Sculpture3}
        />
        
        <motion.img 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}  
          className='absolute w-[20vw] h-[14vw] object-cover object-center left-[27vw] top-[200px]' src={Sculpture4}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}  
          className='flex justify-center items-center h-[80vh]'>
          <div className='text-white text-[64px] font-semibold z-[99]'>ART SCULPTURE</div>
        </motion.div>

    </div>
  )
}

export default TypeDashboardSection
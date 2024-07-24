import React from 'react'
import Logo1 from '../../assets/trusted/logo1.png'
import Logo2 from '../../assets/trusted/logo2.png'
import Logo3 from '../../assets/trusted/logo3.JPG'
import Logo4 from '../../assets/trusted/logo4.png'
import Logo5 from '../../assets/trusted/logo5.JPG'
import Logo6 from '../../assets/trusted/logo6.png'
import Logo7 from '../../assets/trusted/logo7.png'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

function TrustedBySection() {
    const { ref, inView } = useInView({
        triggerOnce: true, // Ensures animation happens only once
        threshold: 0.5,    // Trigger when 10% of the component is visible
      });
  return (
    <div className='w-[100vw] h-[100vh]' ref={ref}>
        <div className='flex w-full h-full'>
            <motion.div
                initial={{ x: -250 }}
                animate={inView ? { x: 0 } : { x: -250 }}
                transition={{ duration: 0.4 }}
                className='w-[40%] flex items-center'>
                <div className='px-20'>
                    <div className='text-[32px] font-bold mb-4'>TRUSTED BY</div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis perferendis quo dicta a, sint velit! Dolore praesentium soluta blanditiis, officiis tempora earum ullam illo laborum! Nostrum vitae quo earum inventore?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis perferendis quo dicta a, sint velit! Dolore praesentium soluta blanditiis, officiis tempora earum ullam illo laborum! Nostrum vitae quo earum inventore?
                    </div>
                </div>

            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5 }} 
                className='w-[60%] py-[20vh] flex justify-between px-[5vw]'>
                <div className='flex flex-col justify-end pb-4'>
                    <div className='flex items-center justify-center w-[15vw] h-[180px] rounded-md px-3 shadow-2xl my-4' style={{boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)'}}><img src={Logo5}/></div>
                    <div className='flex items-center justify-center w-[15vw] h-[180px] rounded-md px-3 shadow-2xl my-4' style={{boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)'}}><img src={Logo4}/></div>

                </div>

                <div className='flex flex-col justify-between'>
                    <div className='flex items-center justify-center w-[15vw] h-[180px] rounded-md px-3 shadow-2xl my-4' style={{boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)'}}><img src={Logo1}/></div>
                    <div className='flex items-center justify-center w-[15vw] h-[180px] rounded-md px-3 shadow-2xl my-4' style={{boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)'}}><img src={Logo2}/></div>
                    <div className='flex items-center justify-center w-[15vw] h-[180px] rounded-md px-3 shadow-2xl my-4' style={{boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)'}}><img src={Logo7}/></div>
                </div>

                <div className='pt-4'>
                    <div className='flex items-center justify-center w-[15vw] h-[180px] rounded-md px-3 shadow-2xl my-4' style={{boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)'}}><img src={Logo3}/></div>
                    <div className='flex items-center justify-center w-[15vw] h-[180px] rounded-md px-3 shadow-2xl my-4' style={{boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)'}}><img src={Logo6}/></div>

                </div>

            </motion.div>
        </div>
    </div>
  )
}

export default TrustedBySection
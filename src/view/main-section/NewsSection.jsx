import React from 'react'
import Curator3 from '../../assets/curator3.jpeg';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

function NewsSection() {
    const { ref, inView } = useInView({
        triggerOnce: true, // Ensures animation happens only once
        threshold: 0.3,    // Trigger when 10% of the component is visible
      });
  return (
    <div className='w-[100vw] min-h-[170vh] pb-6 mt-[10vh] z-[7] relative' ref={ref}>
        <motion.div 
            initial={{ y: -250 }}
            animate={inView ? { y: 0 } : { y: -250 }}
            transition={{ duration: 0.5 }}
            className='relative z-[7]'>
            <div className='text-center font-bold text-[72px]'>NEWS & ARTICLE</div>
            <div className='text-center text-[#9CA3AF] mt-2'>Innovative Techniques in Modern Sculpture</div>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }} 
            className='grid grid-cols-3 mx-[12vw] gap-4 mt-4'>

            <div className='border-1 border-[#D9D9D9] px-3 py-3'>
                <div><img src={Curator3} className='w-full h-[30vh] object-cover object-center'/></div>
                <div>
                    <div className='font-bold text-[20px] mt-2'>Edge of Your Seat Excellence: Patty Moore Unleashes a Taut Thriller Masterpiece</div>
                    <div className='text-[#666666] text-[12px] mb-3 mt-2'>Lorem ipsum dolor sit amet consectetur. Habitant scelerisque curabitur sit sem sem. Tempor elementum tristique velit at dui id et sed gravida.</div>    
                </div>

                <div className='flex'>
                    <div className='bg-[black] text-white px-3 py-2'>
                        Read More
                    </div>
                </div>
            </div>

            <div className='border-1 border-[#D9D9D9] px-3 py-3'>
                <div><img src={Curator3} className='w-full h-[30vh] object-cover object-center'/></div>
                <div>
                    <div className='font-bold text-[20px] mt-2'>Edge of Your Seat Excellence: Patty Moore Unleashes a Taut Thriller Masterpiece</div>
                    <div className='text-[#666666] text-[12px] mb-3 mt-2'>Lorem ipsum dolor sit amet consectetur. Habitant scelerisque curabitur sit sem sem. Tempor elementum tristique velit at dui id et sed gravida.</div>    
                </div>

                <div className='flex'>
                    <div className='bg-[black] text-white px-3 py-2'>
                        Read More
                    </div>
                </div>
            </div>

            <div className='border-1 border-[#D9D9D9] px-3 py-3'>
                <div><img src={Curator3} className='w-full h-[30vh] object-cover object-center'/></div>
                <div>
                    <div className='font-bold text-[20px] mt-2'>Edge of Your Seat Excellence: Patty Moore Unleashes a Taut Thriller Masterpiece</div>
                    <div className='text-[#666666] text-[12px] mb-3 mt-2'>Lorem ipsum dolor sit amet consectetur. Habitant scelerisque curabitur sit sem sem. Tempor elementum tristique velit at dui id et sed gravida.</div>    
                </div>

                <div className='flex'>
                    <div className='bg-[black] text-white px-3 py-2'>
                        Read More
                    </div>
                </div>
            </div>

            <div className='border-1 border-[#D9D9D9] px-3 py-3'>
                <div><img src={Curator3} className='w-full h-[30vh] object-cover object-center'/></div>
                <div>
                    <div className='font-bold text-[20px] mt-2'>Edge of Your Seat Excellence: Patty Moore Unleashes a Taut Thriller Masterpiece</div>
                    <div className='text-[#666666] text-[12px] mb-3 mt-2'>Lorem ipsum dolor sit amet consectetur. Habitant scelerisque curabitur sit sem sem. Tempor elementum tristique velit at dui id et sed gravida.</div>    
                </div>

                <div className='flex'>
                    <div className='bg-[black] text-white px-3 py-2'>
                        Read More
                    </div>
                </div>
            </div>

            <div className='border-1 border-[#D9D9D9] px-3 py-3'>
                <div><img src={Curator3} className='w-full h-[30vh] object-cover object-center'/></div>
                <div>
                    <div className='font-bold text-[20px] mt-2'>Edge of Your Seat Excellence: Patty Moore Unleashes a Taut Thriller Masterpiece</div>
                    <div className='text-[#666666] text-[12px] mb-3 mt-2'>Lorem ipsum dolor sit amet consectetur. Habitant scelerisque curabitur sit sem sem. Tempor elementum tristique velit at dui id et sed gravida.</div>    
                </div>

                <div className='flex'>
                    <div className='bg-[black] text-white px-3 py-2'>
                        Read More
                    </div>
                </div>
            </div>

            <div className='border-1 border-[#D9D9D9] px-3 py-3'>
                <div><img src={Curator3} className='w-full h-[30vh] object-cover object-center'/></div>
                <div>
                    <div className='font-bold text-[20px] mt-2'>Edge of Your Seat Excellence: Patty Moore Unleashes a Taut Thriller Masterpiece</div>
                    <div className='text-[#666666] text-[12px] mb-3 mt-2'>Lorem ipsum dolor sit amet consectetur. Habitant scelerisque curabitur sit sem sem. Tempor elementum tristique velit at dui id et sed gravida.</div>    
                </div>

                <div className='flex'>
                    <div className='bg-[black] text-white px-3 py-2'>
                        Read More
                    </div>
                </div>
            </div>
        </motion.div>

        <div className='flex justify-center text-white hover:cursor-pointer'>
            <div className='mt-10 border-[white] bg-[black] border-1 px-14 py-2 rounded-full'>View More</div>
        </div>
    </div>
  )
}

export default NewsSection
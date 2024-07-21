import React from 'react'
import Artwork1 from '../../assets/artwork1.png';
import Artwork2 from '../../assets/artwork2.jpeg';
import Artwork3 from '../../assets/artwork3.jpeg';
import Artwork4 from '../../assets/artwork4.jpeg';
import { Link } from 'react-router-dom';

function ArtWorkSection() {
  return (
    <div className='w-[100vw] min-h-[100vh] pt-16 pb-10'>
        <div>
            <div className='text-center font-bold text-[50px]'>ART WORKS</div>
            <div className='text-center mx-[20vw] text-[#9CA3AF]'>Immerse yourself in the exquisite artistry of Redy's featured sculptures each a testament to boundless creativity and skill. Explore our selected masterpieces and experience the captivating fusion of form and finesse.</div>
        </div>

        <div className='flex mx-[100px] justify-center mt-4'>
          <div className='relative bg-black'>
            <div className='absolute text-center bottom-14 left-[50%] transform -translate-x-1/2 text-[20px]'>Art Sculpture</div>
            <div className='w-full h-full transition duration-500 absolute hover:cursor-pointer'></div>
            <div><img src={Artwork1} className='h-[60vh] w-[300px] px-[75px] py-[20px] object-cover object-center border-1'/></div>
          </div>
          
          <div className='relative bg-black'>
            <div className='absolute text-center bottom-14 left-[50%] transform -translate-x-1/2 text-[20px]'>Art Product</div>
            <div className='w-full h-full transition duration-500 absolute hover:cursor-pointer'></div>
            <div><img src={Artwork2} className='h-[60vh] w-[300px] px-[75px] py-[20px] object-cover object-center border-1'/></div>
          </div>
          
          <div className='relative bg-black'>
            <div className='absolute text-center bottom-14 left-[50%] transform -translate-x-1/2 text-[20px]'>Art Facade</div>
            <div className='w-full h-full transition duration-500 absolute hover:cursor-pointer'></div>
            <div><img src={Artwork3} className='h-[60vh] w-[300px] object-cover object-center border-1'/></div>
          </div>
          
          <div className='relative bg-black'>
            <div className='absolute text-center bottom-14 left-[50%] transform -translate-x-1/2 text-[20px]'>Art Building</div>
            <div className='w-full h-full transition duration-500 absolute hover:cursor-pointer'></div>
            <div><img src={Artwork4} className='h-[60vh] w-[300px] object-cover object-center border-1'/></div>
          </div>
        </div>

        <div className='flex justify-center'>
          <Link to={'/more-art'}><div className='bg-[black] mt-10 px-14 py-2 rounded-full custom-hover hover:cursor-pointer'>View More</div></Link>
        </div>
    </div>
  )
}

export default ArtWorkSection
import React from 'react'
import Artwork1 from '../../assets/artwork1.png';
import { Link } from 'react-router-dom';

function KeepTouchSection() {

    const handleFocus = (event) => {
        event.target.style.outline = 'none';
        event.target.style.borderBottom = '2px solid black';
    };

  return (
    <div className='w-[100vw] h-[90vh] mt-[10vh]'>
        <div>
            <div className='text-center font-bold text-[72px]'>GET IN TOUCH</div>
            <div className='text-center text-[#9CA3AF]'>Let’s Connect and Create Togehter</div>
        </div>

        <div className='flex justify-center w-full px-[15vw] mt-10'>
            <div className='w-[40%]'>
                <img className='h-[58vh]' src={Artwork1}/>
            </div>

            <div className='w-[60%]'>
                <div className='w-full my-4'>
                    <div className='text-[#666666] text-[18px]'><label>Full Name</label></div>
                    <div><input onFocus={handleFocus} className='border-b-2 border-[#666666] w-full pt-4 pb-2'/></div>
                </div>

                <div className='w-full my-4'>
                    <div className='text-[#666666] text-[18px]'><label>Email</label></div>
                    <div><input onFocus={handleFocus} className='border-b-2 border-[#666666] w-full pt-4 pb-2'/></div>
                </div>

                <div className='w-full my-4'>
                    <div className='text-[#666666] text-[18px]'><label>Message</label></div>
                    <div><input onFocus={handleFocus} className='border-b-2 border-[#666666] w-full pt-4 pb-2'/></div>
                </div>
                
                <div className='flex mt-12'>
                <Link to={'/more-art'}>
                    <div className='px-10 py-2 text-[18px] rounded-full reverse-custom-hover hover:cursor-pointer group'>
                        <span className='relative z-[200] flex'>
                            Submit
                            <svg 
                                className='w-6 ml-2 fill-black group-hover:fill-white transition-colors duration-100' 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                id="arrow-up-right"
                            >
                                <path d="M17.92,6.62a1,1,0,0,0-.54-.54A1,1,0,0,0,17,6H7A1,1,0,0,0,7,8h7.59l-8.3,8.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L16,9.41V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17.92,6.62Z"></path>
                            </svg>
                        </span>
                    </div>
                </Link>

                    {/* <div className='border-[black] border-1 rounded-full px-10 py-2 text-[18px]'>
                        Submit
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default KeepTouchSection
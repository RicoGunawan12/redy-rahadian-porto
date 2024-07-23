import React from 'react'
import Artwork1 from '../../assets/artwork1.png';

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
                    <div className='border-[black] border-1 rounded-full px-10 py-2 text-[18px]'>
                        Submit
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KeepTouchSection
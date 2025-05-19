import React from 'react'
import Map from '../../assets/map.png';

function MapSection() {
  return (
    <div className='mx-[12vw] mt-10 h-[85vh]'>
        <div className='relative flex items-center mb-10 text-[24px]'>
            <div className='relative z-10'>
                View on map
            </div>
            <svg className='w-10 ml-2 z-10' xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="arrow-right">
                <path fill="#1B1A1A" d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path>
            </svg>
            <div className='absolute inset-x-0 w-[180px] bottom-0 h-[2px] bg-current' />
        </div>


        <div className='flex justify-between'>
            <div>
                <div className='font-bold text-[24px] mb-2'>JAKARTA</div>
                <div className='text-[#9CA3AF] text-[18px] mb-2'>
                    <div>Jalan Kemang Selatan VIII</div>
                    <div>No.2A, Bangka, South Jakarta 12730</div>
                </div>

                <div><img src={Map} className='object-cover object-center w-[36vw] h-[50vh]'/></div>
                
            </div>

            <div>
                <div className='font-bold text-[24px] mb-2'>BALI</div>
                <div className='text-[#9CA3AF] text-[18px] mb-2'>
                    <div>Opatan Art House Jalan Subak Belaki No.60,</div>
                    <div>Sukawati, Gianyar, Bali 80582.</div>
                </div>

                <div><img src={Map} className='object-cover object-center w-[36vw] h-[50vh]'/></div>
                
            </div>
        </div>
    </div>
  )
}

export default MapSection
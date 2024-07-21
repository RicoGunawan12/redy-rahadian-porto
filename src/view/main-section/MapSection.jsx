import React from 'react'
import Map from '../../assets/map.png';

function MapSection() {
  return (
    <div className='mx-[12vw] mt-10 h-[85vh]'>
        <div className='underline underline-offset-[15px] mb-10 text-[24px]'>View on map</div>

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
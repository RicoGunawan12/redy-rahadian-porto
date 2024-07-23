import React from 'react'
import Image from '../../assets/map.png'

function ArtListSection() {


    const handleImageClick = () => {

    }

  return (
    <div className='min-h-[100vh] bg-[black] pb-[200px] text-white px-[10vw] pt-[200px]'>
        <div className='font-semibold text-[24px] mb-10'>Art list</div>

        <div className='w-full h-full flex justify-center'>
            <div className='grid grid-cols-3 w-full gap-x-14 gap-y-16'>
                <div className='w-full'>
                    <img src={Image} className='w-full h-[200px] object-cover cursor-pointer' onClick={handleImageClick}/>
                    <div>
                        <div className='mt-2 mb-2 font-bold text-[18px]'>Sculpture Art 1</div>
                        <div>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia qui cum repudiandae ex, vel nemo accusamus excepturi deserunt, at accusantium debitis nihil nesciunt, similique perferendis atque voluptas dolorum in hic?
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <img src={Image} className='w-full h-[200px] object-cover cursor-pointer'/>
                    <div>
                        <div className='mt-2 mb-2 font-bold text-[18px]'>Sculpture Art 1</div>
                        <div>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia qui cum repudiandae ex, vel nemo accusamus excepturi deserunt, at accusantium debitis nihil nesciunt, similique perferendis atque voluptas dolorum in hic?
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <img src={Image} className='w-full h-[200px] object-cover cursor-pointer'/>
                    <div>
                        <div className='mt-2 mb-2 font-bold text-[18px]'>Sculpture Art 1</div>
                        <div>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia qui cum repudiandae ex, vel nemo accusamus excepturi deserunt, at accusantium debitis nihil nesciunt, similique perferendis atque voluptas dolorum in hic?
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <img src={Image} className='w-full h-[200px] object-cover cursor-pointer'/>
                    <div>
                        <div className='mt-2 mb-2 font-bold text-[18px]'>Sculpture Art 1</div>
                        <div>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia qui cum repudiandae ex, vel nemo accusamus excepturi deserunt, at accusantium debitis nihil nesciunt, similique perferendis atque voluptas dolorum in hic?
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <img src={Image} className='w-full h-[200px] object-cover cursor-pointer'/>
                    <div>
                        <div className='mt-2 mb-2 font-bold text-[18px]'>Sculpture Art 1</div>
                        <div>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia qui cum repudiandae ex, vel nemo accusamus excepturi deserunt, at accusantium debitis nihil nesciunt, similique perferendis atque voluptas dolorum in hic?
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <img src={Image} className='w-full h-[200px] object-cover cursor-pointer'/>
                    <div>
                        <div className='mt-2 mb-2 font-bold text-[18px]'>Sculpture Art 1</div>
                        <div>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia qui cum repudiandae ex, vel nemo accusamus excepturi deserunt, at accusantium debitis nihil nesciunt, similique perferendis atque voluptas dolorum in hic?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ArtListSection
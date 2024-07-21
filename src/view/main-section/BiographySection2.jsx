import React from 'react'
import biographyImage from '../../assets/biography.png';

function BiographySection2() {
    return (
        <div className='w-[100vw] h-[100vh]'>
            <div className='flex h-full items-center'>
                <div className='w-[50%] pl-[10%] pr-[80px] '>
                    <div>
                        <div className='mb-4 font-semibold'>APPROACH</div>
                        
                        <div className='px-2 text-[14px]'>
                            <div className='mb-4'>
                                Metal, such as steel, aluminum and copper, is currently his material of choice. His creative visions push him to fully understand the characteristic of each material involved in his creative process. Only with a real knowledge of each metal that he, as an artist, is capable to go far and beyond what people expect of him. His works capture and honor the unique personality of each metal.
                            </div>

                            <div>
                                Even though initially it was the world of automotive and engine design that captivated him, it was art that made him feel at home and sculpture became his language in communicating his messages.
                            </div>
                        </div>

                        <div className='mt-10 border-b-[1px] border-black'></div>
                    </div>

                    
                    <div className='mt-10'>
                        <div className='mb-4 font-semibold'>BACKGROUND</div>
                        
                        <div className='px-2 text-[14px]'>
                            <div className='mb-4'>
                                Following his interest in engineering, he enrolled in the Institute Saint Joseph in Brussels, Belgium majoring in Mecanique Garage Department or Mechanical Engineering after high school. 
                            </div>

                            <div>
                                During his study, he became very interested in using engineering approaches in creating his art. Every piece that he has ever created is labor intensive and non-casting, handmade and one-of-a-kind.
                            </div>
                        </div>

                        <div className='mt-10 border-b-[1px] border-black'></div>
                    </div>


                </div>
    
                <div className='h-full w-[50%]' style={{ backgroundImage: `url(${biographyImage})`, backgroundSize:'auto 40%' }}>
                
                </div>
            </div>
        </div>
      )
}

export default BiographySection2
import React from 'react'
import Photo from '../../assets/Redy Rahadian.png';

function BiographySection() {
  return (
    <div className='w-[100vw] h-[100vh]'>
        <div className='flex h-full items-center'>
            <div className='w-[50%] pl-[10%] pr-[80px] '>
                <div className='mb-4 font-semibold'>BIOGRAPHY</div>
            
                <div className='px-2 text-[14px]'>
                    <div className='mb-4'>
                        Born in Cianjur, West Java on May 17, 1973, Redy Rahadian is an accomplished sculpture artist from Indonesia. He began his art career in 1997 and he has been actively participating in the evolution of Indonesia’s art scene.
                    </div>

                    <div>
                        Redy Rahadian believes in inspiring others. He is passionate in introducing new ways to explore solid materials, presenting a completely new way to see and use an object. He exposes the world to creations that are sometimes peculiar but wondrous. Redy Rahadian breaks boundaries and steps out of boxes. He takes others to bravely venture roads that are less traveled.
                    </div>
                </div>

                <div className='mt-10 border-b-[1px] border-black'></div>
            </div>

            <div className='h-full w-[50%]'>
                <img src={Photo} className='h-[100vh] w-full object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default BiographySection
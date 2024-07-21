import React from 'react'
import NavigationBar from '../component/NavigationBar'
import Description from '../../assets/description.jpeg';

function DescriptionSection() {
  return (
    <div className='min-h-[100vh] bg-[black] pb-20'>
        {/* <div className='absolute w-full h-full'>
        </div> */}
            <div><NavigationBar/></div>

        <div className='px-[10vw]'>
          <img src={Description} className='w-full h-[70vh] object-cover object-center'/>
          <div className='flex justify-between mt-14'>
            <div className='text-white w-[75%]'>
              As a branch of visual arts, sculpture permits artists to express themselves using figurative or abstract works of art in three dimensions. Three dimension objects have always been Redy Rahadian’s passion. In a 3D object, the audience is given the chance to have different point of views and opinions. From one side to another, there is always something worth talk about. Redy Rahadian’s sculptures share the same similarity outside the fact that they are made of metals. All of his sculptures have pores, holes and spaces. The characteristics make his creations dynamic and have room for interpretation.
            </div>

            <div className='bg-[white] flex items-center justify-center font-semibold px-6'>
              <div>About Redy</div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default DescriptionSection
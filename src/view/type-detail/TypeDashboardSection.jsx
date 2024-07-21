import React from 'react'
import NavigationBar from '../component/NavigationBar'
import Sculpture1 from '../../assets/sculptures/scrulpture1.JPG'
import Sculpture2 from '../../assets/sculptures/scrulpture2.png'
import Sculpture3 from '../../assets/sculptures/scrulpture3.png'
import Sculpture4 from '../../assets/sculptures/scrulpture4.JPG'

function TypeDashboardSection() {
  return (
    <div className='min-h-[100vh] bg-[black] pb-20 relative'>
        {/* <div className='absolute w-full h-full'>
        </div> */}
        <div><NavigationBar/></div>
        
        <img className='absolute w-[200px]' src={Sculpture1}/>
        <img className='absolute w-[200px] left-20' src={Sculpture2}/>
        <img className='absolute w-[200px] left-20' src={Sculpture3}/>
        <img className='absolute w-[200px] left-20' src={Sculpture4}/>

        <div className='flex justify-center items-center h-[80vh]'>
          <div className='text-white text-[54px] font-semibold z-[99]'>ART SCULPTURE</div>
        </div>

    </div>
  )
}

export default TypeDashboardSection
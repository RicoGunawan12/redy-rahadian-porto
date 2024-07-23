import React from 'react'
import NavigationBar from '../component/NavigationBar'
import Sculpture1 from '../../assets/sculptures/scrulpture1.JPG'
import Sculpture2 from '../../assets/sculptures/scrulpture2.png'
import Sculpture3 from '../../assets/sculptures/scrulpture3.png'
import Sculpture4 from '../../assets/sculptures/scrulpture4.JPG'

function TypeDashboardSection() {
  return (
    <div className='min-h-[130vh] bg-[black] pb-20 relative'>
        {/* <div className='absolute w-full h-full'>
        </div> */}
        <div className='z-3'><NavigationBar/></div>
        <div className='absolute w-[100vw] h-[120vh] z-2 bg-black opacity-[0.5]'>
        

        </div>
          <img className='absolute w-[400px] bottom-3 right-[14vw]' src={Sculpture1}/>
        <img className='absolute w-[200px] bottom-0 left-[17vw]' src={Sculpture2}/>
        <img className='absolute w-[100px] right-[36vw] top-[400px]' src={Sculpture3}/>
        <img className='absolute w-[20vw] h-[14vw] object-cover object-center left-[27vw] top-[200px]' src={Sculpture4}/>

        <div className='flex justify-center items-center h-[80vh]'>
          <div className='text-white text-[64px] font-semibold z-[99]'>ART SCULPTURE</div>
        </div>

    </div>
  )
}

export default TypeDashboardSection
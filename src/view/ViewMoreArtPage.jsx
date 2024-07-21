import React from 'react'
import DescriptionSection from './viewmore-section/DescriptionSection'
import KeepTouchSection from './main-section/KeepTouchSection'
import MapSection from './main-section/MapSection'
import Footer from './component/Footer'
import ArtWorkSection from './main-section/ArtWorkSection'

function ViewMoreArtPage() {
  return (
    <div className='overflow-x-hidden'>
        <div><DescriptionSection/></div>

        <div>
            <ArtWorkSection/>
        </div>

        <div>
            <KeepTouchSection/>
        </div>

        <div>
            <hr/>
        </div>

        <div>
            <MapSection/>
        </div>
        
        <div>
            <Footer/>
        </div>
    </div>

    
  )
}

export default ViewMoreArtPage
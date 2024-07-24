import React from 'react'
import TypeDashboardSection from './type-detail/TypeDashboardSection'
import ArtListSection from './type-detail/ArtListSection'
import KeepTouchSection from './main-section/KeepTouchSection'
import MapSection from './main-section/MapSection'
import Footer from './component/Footer'
import NextArtSection from './type-detail/NextArtSection'

function TypeDetailPage() {
  return (
    <div className='overflow-x-hidden'>
        <div>
            <TypeDashboardSection/>
        </div>

        <div>
            <ArtListSection/>
        </div>

        <div>
            <NextArtSection/>
        </div>

        <div>
            <hr/>
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

export default TypeDetailPage
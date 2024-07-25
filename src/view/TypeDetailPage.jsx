import React from 'react'
import TypeDashboardSection from './type-detail/TypeDashboardSection'
import ArtListSection from './type-detail/ArtListSection'
import KeepTouchSection from './main-section/KeepTouchSection'
import MapSection from './main-section/MapSection'
import Footer from './component/Footer'
import NextArtSection from './type-detail/NextArtSection'
import Animation from '../assets/animation.JPG'
import { motion } from 'framer-motion';
import '../index.css';

function TypeDetailPage() {
  return (
    <div className='overflow-x-hidden overflow-y-hidden relative'>

        <div className='h-[100vh] w-[100vw] bg-black overflow-hidden'>
            <img src={Animation} className='custom-animation absolute object-cover object-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'/>
        
        </div>

        <div className='hidden'>
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
    </div>
  )
}

export default TypeDetailPage
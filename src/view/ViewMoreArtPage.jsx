import React, { useEffect } from 'react'
import DescriptionSection from './viewmore-section/DescriptionSection'
import KeepTouchSection from './main-section/KeepTouchSection'
import MapSection from './main-section/MapSection'
import Footer from './component/Footer'
import ArtWorkSection from './main-section/ArtWorkSection'
import { motion } from 'framer-motion';

function ViewMoreArtPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className='overflow-x-hidden'>
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
    </motion.div>

    
  )
}

export default ViewMoreArtPage
import React, { useEffect } from 'react'
import DashboardSection from './main-section/DashboardSection'
import Marquee from 'react-fast-marquee';
import IntroductionSection from './main-section/IntroductionSection';
import ArtWorkSection from './main-section/ArtWorkSection';
import CuratorSection from './main-section/CuratorSection';
import NewsSection from './main-section/NewsSection';
import KeepTouchSection from './main-section/KeepTouchSection';
import MapSection from './main-section/MapSection';
import Footer from './component/Footer';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import BiographySection from './main-section/BiographySection';
import BiographySection2 from './main-section/BiographySection2';
import TrustedBySection from './main-section/TrustedBySection';

function MainPage() {
    useEffect(() => {
        window.history.pushState(null, "", '/');
    }, []);    

  return (
    <div className='overflow-x-hidden'>
        
        <div>
            <DashboardSection/>
        </div>

        {/* <div className='mt-4'>
            <Marquee speed={200}>
                <div className='mx-4'>
                    <img width={200} src='https://s3-alpha-sig.figma.com/img/3663/533f/6e4e1a477a598d641ad73f5abbad913c?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kFbEcC5XaOfEi0ghOXkPPvbI5CFeaka7HNe3FVyCSOz6rzS7fuTg27olVLpLQuY4MN2KjuaKkYQBQmeoDKBOHAWUvhdGqqiVQzFQPlwUZmx9eIEySHzrHJ9Ii-UFLWhVXZlT8dGoeEbFtDDLpMx7MrfO6g0lLb56Cq3jB1CCwUi5XAW7VCpQ14WDLWFWh~riyaGQDWfw5KK8~OviCWmkZ~OIUfKPOBSe2A1JvEjRjU51Z7VsRs03t4G5b9NEWjNHj5XsJFWcnhW3ClxYMM72vJ07~F7IAhcmwrGrS37kC64Ijot2ZaFfulDMfKDF955HgNXzNCkF4mXipN4HkfAbwA__'/>
                </div>
                <div className='mx-4'>
                    <img width={200} src='https://s3-alpha-sig.figma.com/img/3663/533f/6e4e1a477a598d641ad73f5abbad913c?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kFbEcC5XaOfEi0ghOXkPPvbI5CFeaka7HNe3FVyCSOz6rzS7fuTg27olVLpLQuY4MN2KjuaKkYQBQmeoDKBOHAWUvhdGqqiVQzFQPlwUZmx9eIEySHzrHJ9Ii-UFLWhVXZlT8dGoeEbFtDDLpMx7MrfO6g0lLb56Cq3jB1CCwUi5XAW7VCpQ14WDLWFWh~riyaGQDWfw5KK8~OviCWmkZ~OIUfKPOBSe2A1JvEjRjU51Z7VsRs03t4G5b9NEWjNHj5XsJFWcnhW3ClxYMM72vJ07~F7IAhcmwrGrS37kC64Ijot2ZaFfulDMfKDF955HgNXzNCkF4mXipN4HkfAbwA__'/>
                </div>
                <div className='mx-4'>
                    <img width={200} src='https://s3-alpha-sig.figma.com/img/3663/533f/6e4e1a477a598d641ad73f5abbad913c?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kFbEcC5XaOfEi0ghOXkPPvbI5CFeaka7HNe3FVyCSOz6rzS7fuTg27olVLpLQuY4MN2KjuaKkYQBQmeoDKBOHAWUvhdGqqiVQzFQPlwUZmx9eIEySHzrHJ9Ii-UFLWhVXZlT8dGoeEbFtDDLpMx7MrfO6g0lLb56Cq3jB1CCwUi5XAW7VCpQ14WDLWFWh~riyaGQDWfw5KK8~OviCWmkZ~OIUfKPOBSe2A1JvEjRjU51Z7VsRs03t4G5b9NEWjNHj5XsJFWcnhW3ClxYMM72vJ07~F7IAhcmwrGrS37kC64Ijot2ZaFfulDMfKDF955HgNXzNCkF4mXipN4HkfAbwA__'/>
                </div>
                <div className='mx-4'>
                    <img width={200} src='https://s3-alpha-sig.figma.com/img/3663/533f/6e4e1a477a598d641ad73f5abbad913c?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kFbEcC5XaOfEi0ghOXkPPvbI5CFeaka7HNe3FVyCSOz6rzS7fuTg27olVLpLQuY4MN2KjuaKkYQBQmeoDKBOHAWUvhdGqqiVQzFQPlwUZmx9eIEySHzrHJ9Ii-UFLWhVXZlT8dGoeEbFtDDLpMx7MrfO6g0lLb56Cq3jB1CCwUi5XAW7VCpQ14WDLWFWh~riyaGQDWfw5KK8~OviCWmkZ~OIUfKPOBSe2A1JvEjRjU51Z7VsRs03t4G5b9NEWjNHj5XsJFWcnhW3ClxYMM72vJ07~F7IAhcmwrGrS37kC64Ijot2ZaFfulDMfKDF955HgNXzNCkF4mXipN4HkfAbwA__'/>
                </div>
                <div className='mx-4'>
                    <img width={200} src='https://s3-alpha-sig.figma.com/img/3663/533f/6e4e1a477a598d641ad73f5abbad913c?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kFbEcC5XaOfEi0ghOXkPPvbI5CFeaka7HNe3FVyCSOz6rzS7fuTg27olVLpLQuY4MN2KjuaKkYQBQmeoDKBOHAWUvhdGqqiVQzFQPlwUZmx9eIEySHzrHJ9Ii-UFLWhVXZlT8dGoeEbFtDDLpMx7MrfO6g0lLb56Cq3jB1CCwUi5XAW7VCpQ14WDLWFWh~riyaGQDWfw5KK8~OviCWmkZ~OIUfKPOBSe2A1JvEjRjU51Z7VsRs03t4G5b9NEWjNHj5XsJFWcnhW3ClxYMM72vJ07~F7IAhcmwrGrS37kC64Ijot2ZaFfulDMfKDF955HgNXzNCkF4mXipN4HkfAbwA__'/>
                </div>
                <div className='mx-4'>
                    <img width={200} src='https://s3-alpha-sig.figma.com/img/3663/533f/6e4e1a477a598d641ad73f5abbad913c?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kFbEcC5XaOfEi0ghOXkPPvbI5CFeaka7HNe3FVyCSOz6rzS7fuTg27olVLpLQuY4MN2KjuaKkYQBQmeoDKBOHAWUvhdGqqiVQzFQPlwUZmx9eIEySHzrHJ9Ii-UFLWhVXZlT8dGoeEbFtDDLpMx7MrfO6g0lLb56Cq3jB1CCwUi5XAW7VCpQ14WDLWFWh~riyaGQDWfw5KK8~OviCWmkZ~OIUfKPOBSe2A1JvEjRjU51Z7VsRs03t4G5b9NEWjNHj5XsJFWcnhW3ClxYMM72vJ07~F7IAhcmwrGrS37kC64Ijot2ZaFfulDMfKDF955HgNXzNCkF4mXipN4HkfAbwA__'/>
                </div>
                <div className='mx-4'>
                    <img width={200} src='https://s3-alpha-sig.figma.com/img/3663/533f/6e4e1a477a598d641ad73f5abbad913c?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kFbEcC5XaOfEi0ghOXkPPvbI5CFeaka7HNe3FVyCSOz6rzS7fuTg27olVLpLQuY4MN2KjuaKkYQBQmeoDKBOHAWUvhdGqqiVQzFQPlwUZmx9eIEySHzrHJ9Ii-UFLWhVXZlT8dGoeEbFtDDLpMx7MrfO6g0lLb56Cq3jB1CCwUi5XAW7VCpQ14WDLWFWh~riyaGQDWfw5KK8~OviCWmkZ~OIUfKPOBSe2A1JvEjRjU51Z7VsRs03t4G5b9NEWjNHj5XsJFWcnhW3ClxYMM72vJ07~F7IAhcmwrGrS37kC64Ijot2ZaFfulDMfKDF955HgNXzNCkF4mXipN4HkfAbwA__'/>
                </div>
                <div className='mx-4'>
                    <img width={200} src='https://s3-alpha-sig.figma.com/img/3663/533f/6e4e1a477a598d641ad73f5abbad913c?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kFbEcC5XaOfEi0ghOXkPPvbI5CFeaka7HNe3FVyCSOz6rzS7fuTg27olVLpLQuY4MN2KjuaKkYQBQmeoDKBOHAWUvhdGqqiVQzFQPlwUZmx9eIEySHzrHJ9Ii-UFLWhVXZlT8dGoeEbFtDDLpMx7MrfO6g0lLb56Cq3jB1CCwUi5XAW7VCpQ14WDLWFWh~riyaGQDWfw5KK8~OviCWmkZ~OIUfKPOBSe2A1JvEjRjU51Z7VsRs03t4G5b9NEWjNHj5XsJFWcnhW3ClxYMM72vJ07~F7IAhcmwrGrS37kC64Ijot2ZaFfulDMfKDF955HgNXzNCkF4mXipN4HkfAbwA__'/>
                </div>
                <div className='mx-4'>
                    <img width={200} src='https://s3-alpha-sig.figma.com/img/3663/533f/6e4e1a477a598d641ad73f5abbad913c?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kFbEcC5XaOfEi0ghOXkPPvbI5CFeaka7HNe3FVyCSOz6rzS7fuTg27olVLpLQuY4MN2KjuaKkYQBQmeoDKBOHAWUvhdGqqiVQzFQPlwUZmx9eIEySHzrHJ9Ii-UFLWhVXZlT8dGoeEbFtDDLpMx7MrfO6g0lLb56Cq3jB1CCwUi5XAW7VCpQ14WDLWFWh~riyaGQDWfw5KK8~OviCWmkZ~OIUfKPOBSe2A1JvEjRjU51Z7VsRs03t4G5b9NEWjNHj5XsJFWcnhW3ClxYMM72vJ07~F7IAhcmwrGrS37kC64Ijot2ZaFfulDMfKDF955HgNXzNCkF4mXipN4HkfAbwA__'/>
                </div>
            </Marquee>
        </div> */}

        {/* <Parallax pages={4}>
            <ParallaxLayer offset={0} speed={1}>
                <div style={{ height: '100vh' }}>
                    <IntroductionSection/>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={0.5}>
                <div style={{ height: '100vh' }}>
                    <IntroductionSection/>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={0.5}>
                <div style={{ height: '100vh' }}>
                    <IntroductionSection/>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={3} speed={0.5}>
                <div style={{ height: '100vh' }}>
                    <IntroductionSection/>
                </div>
            </ParallaxLayer>
        </Parallax> */}

        <div className='mt-[200px]'>
            <IntroductionSection/>
        </div>

        <div className='mt-[200px]'>
            <BiographySection/>
        </div>
        <div>
            <BiographySection2/>
        </div>

        <div className='mt-[200px]'>
            <ArtWorkSection/>
        </div>

        <div>
            <CuratorSection/>
        </div>

        <div>
            <hr/>
        </div>

        <div>
            <NewsSection/>
        </div>

        <div>
            <hr/>
        </div>

        <div>
            <TrustedBySection/>
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

export default MainPage
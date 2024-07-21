import React from 'react'
import NavigationBar from '../component/NavigationBar'

function DashboardSection() {
  return (
    <div className='relative w-[100vw] h-[130vh] bg-center bg-no-repeat bg-cover text-[white]' style={{backgroundImage:"url('https://s3-alpha-sig.figma.com/img/3663/533f/6e4e1a477a598d641ad73f5abbad913c?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kFbEcC5XaOfEi0ghOXkPPvbI5CFeaka7HNe3FVyCSOz6rzS7fuTg27olVLpLQuY4MN2KjuaKkYQBQmeoDKBOHAWUvhdGqqiVQzFQPlwUZmx9eIEySHzrHJ9Ii-UFLWhVXZlT8dGoeEbFtDDLpMx7MrfO6g0lLb56Cq3jB1CCwUi5XAW7VCpQ14WDLWFWh~riyaGQDWfw5KK8~OviCWmkZ~OIUfKPOBSe2A1JvEjRjU51Z7VsRs03t4G5b9NEWjNHj5XsJFWcnhW3ClxYMM72vJ07~F7IAhcmwrGrS37kC64Ijot2ZaFfulDMfKDF955HgNXzNCkF4mXipN4HkfAbwA__')"}}>
        <div className='absolute w-full h-full bg-[#0008]'>
            <div><NavigationBar/></div>
        </div>
        <div className='absolute top-[250px] left-[8vw]'>
            <div className='text-[34px] font-semibold'>Fine Art Sculptor</div>
            <div className='mt-2'>Based in Indonesia</div>
        </div>

        <div className='absolute top-[350px] right-[8vw]'>
            <div className='text-[32px]'>Modern &</div>
            <div className='text-[32px]'>Contemporary Artist</div>
        </div>
    </div>
  )
}

export default DashboardSection

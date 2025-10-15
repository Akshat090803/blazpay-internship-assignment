import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { HeroSection } from './components/dashboard/HeroSection'
import { Presale } from './components/dashboard/Presale'
import { Security } from './components/dashboard/Security'
import { Roadmap } from './components/dashboard/Roadmap'
import { AboutProduct } from './components/dashboard/AboutProduct'
import { Partners } from './components/dashboard/Partners'
import { founderData, listing, mediaPartner, partHead1, partHead2, partHead3, partnerData, statsData, timeLeftPhase1 } from './data/data'
import { Teams } from './components/dashboard/Teams'
import { Stats } from './components/dashboard/Stats'
import { Founder } from './components/dashboard/Founder'
import { LatestUpdate } from './components/dashboard/LatestUpdate'
import { toast, Toaster } from 'sonner'

function App() {
  
  const [globalData , setGlobalData] = useState({});
  const [loading,setLoading]=useState(false);

  const fetchNumericData = async()=>{
    try {
         setLoading(true)
          //------------------------for running locally , use this URL ------------------------------------------
          // const response = await fetch('http://localhost:8080/api/data');
          //----------------------------------------------------------------------------------------------
          
          const response = await fetch('https://blazpay-internship-assignment-cvjz.vercel.app/api/data');
           
          if(!response.ok){
            toast.error('Failed to fetch numeric data');
            return
          }

          const data = await response.json();
          setGlobalData(data);
          console.log('data',data)


    } catch (error) {
       console.log('Error in fetching numeric data',error);
       setGlobalData({});
    }
    finally{
      setLoading(false)
    }
  }
  useEffect (()=>{
      fetchNumericData();
  },[])

  return (
    <>
    <div className='  w-[65%]  rounded-2xl left-1/2 -translate-x-1/2  -translate-y-32 mx-auto h-32 bottom-shadow-box absolute '></div>
    
      <div className='h-full w-full px-4 sm:px-12 py-12 flex flex-col gap-8 sm:gap-32 '>
        
        <HeroSection timeLeftPhase1={timeLeftPhase1}/>
        <Presale/>
        <Security/>
        <Roadmap listingData={listing}/>
        <AboutProduct/>
        <Partners images={partnerData} heading={partHead1} small={true}/>
        <Teams/>
        <Stats statsData={statsData}/>
        <Partners images={partnerData} heading={partHead2}/>
        <Founder founderData={founderData}/>
        <Partners images={mediaPartner} heading={partHead3}/>
        <LatestUpdate/>
        <Toaster richColors={true}/>
      </div>
    </>
  )
}

export default App

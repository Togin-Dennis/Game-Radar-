import React, { useContext, useEffect, useRef, useState } from 'react'
import './Apps.css'
import Axiosfun from '../../../GlobelFunc/Axios';
import useIntersectionFetch from '../../../GlobelFunc/Visible';
import { GameDealsContext } from '../../../GlobelFunc/Globeldatastore';
function Apps() {


    
 const sectionRef = useRef(null);
     const {Appdata,setappdata,Appdatavisible,setAppdatavisible} = useContext(GameDealsContext);   

useIntersectionFetch({
    ref: sectionRef,
    onVisible: () => {
      fetchApps();
      setAppdatavisible(true);
    },
    threshold: 0.01,
    disabled: Appdatavisible, // Don't re-fetch if already visible
  });
    
 const fetchApps = async () => {
      const FreeappData = await Axiosfun('https://raw.githubusercontent.com/Togin-Dennis/GameRadarApi/refs/heads/main/Apps.json');
     setappdata(FreeappData)
     console.log('App data fetching');
     
    };

  return (
    <div className='Appsmaindiv' ref={sectionRef}  id="free-Apps-section">
{Appdata&&
 <>

      <h2 className='AppsHeading'>Free Android Apps⌛</h2>

<div className='AppsBoxwrapper'>
{
Appdata.map(
(data)=>{


 return <div className='Appsbox' onClick={()=>{window.open(data.appredirecturl, '_blank');}}>

<img className='appimage' src={data.appurl} alt="" />
<h5 className='appsname'>{data.appname} </h5>

<div className='priceratingwrapper'>
<p>{data.appprice}</p>
<p>🌟{data.apprating}</p>
</div>



</div>
    
}

)

    
}
          


</div>

</>}
    </div>
  )
}

export default Apps

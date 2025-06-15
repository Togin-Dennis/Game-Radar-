import React, { useContext, useEffect, useRef, useState } from 'react'
import Axiosfun from '../../GlobelFunc/Axios';
import '../Free Games/FreeGames.css'
import './FreeDlc.css'
import {  FaChevronLeft,FaChevronRight  } from 'react-icons/fa';
import { GameDealsContext } from '../../GlobelFunc/Globeldatastore';

function FreeDlc() {

  
    const sectionRef = useRef(null);


   const { FreeGamesvisible, setFreeGamesvisible,FreeDlc, setFreeDlc,FreeDlcvisible, setFreeDlcvisible} = useContext(GameDealsContext);

const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -600, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 600, behavior: 'smooth' });
  };


    
const fetchDLC = async () => {
      const FreeDlcData = await Axiosfun('https://raw.githubusercontent.com/Togin-Dennis/GameRadarApi/refs/heads/main/dlc.json');
      setFreeDlc(FreeDlcData);
    };

if(FreeGamesvisible&&!FreeDlcvisible)
{
  fetchDLC()
  setFreeDlcvisible(true)
}
  



return (
    <div className='FreeGameMainDiv freedlcmaindiv' ref={sectionRef} id="free-DLC-section">

{FreeDlc && <>

     <div className='freegameheadingwrapper'> 





     {/* <h2 className='FreeHeading' >Free Games - Limited Time ⌛</h2>   */}
        
          
     <div className='freegamesidescrollbuttons'>
         
            <FaChevronLeft className='Sidescrollbutton' onClick={scrollLeft}/>
             <FaChevronRight  className='Sidescrollbutton' onClick={scrollRight}/>


     </div> 


     </div> 
    
<div ref={scrollRef}  className='freegameboxmain'>
<div className='freegameboxwrapper'>
    
        {
          Array.isArray(FreeDlc) && FreeDlc.map(
            (data,index)=>{
             
          
                return <div className='freegamebox' key={index}>
                       
               <div className='Stack'>
                <img className='FreeGameImg' src={data.dlcimgurl} alt="" />
                        
                 <p className='freegameprice'>{data.dlcprice}</p>
                
               </div>
               <div className='freegametext freedlctext'>Free DLC</div>
                 
               <h2 className='freegamename'>{data.dlcname}</h2>
               <p className='freegameDescription'>{data.dlcsubtitle}</p> 


             <button  onClick={()=>{window.open(data.dlcredirecturl, '_blank');}}  className='freegameClaimButton'>Claim</button>

                </div>

                


            }
          )
        }
          
</div>

</div>
</>}
    </div>
  )
}

export default FreeDlc

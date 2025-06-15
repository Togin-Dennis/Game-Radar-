import React, { useContext, useEffect, useRef, useState } from 'react'
import Axiosfun from '../../GlobelFunc/Axios';
import './FreeGames.css'
import {  FaChevronLeft,FaChevronRight  } from 'react-icons/fa';
import { GameDealsContext } from '../../GlobelFunc/Globeldatastore';
import useIntersectionFetch from '../../GlobelFunc/Visible';
function FreeGames() {

  const sectionRef = useRef(null);
   const { FreeGamesvisible, setFreeGamesvisible,FreeGames, setFreeGames} = useContext(GameDealsContext);

const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -600, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 600, behavior: 'smooth' });
  };




  

useIntersectionFetch({
    ref: sectionRef,
    onVisible: () => {
      fetchData();
      setFreeGamesvisible(true);
    },
    threshold: 0.01,
    disabled: FreeGamesvisible, // Don't re-fetch if already visible
  });
    
const fetchData = async () => {
      const FreeGameData = await Axiosfun('https://raw.githubusercontent.com/Togin-Dennis/GameRadarApi/main/FreeGame.json');
      setFreeGames(FreeGameData);
      console.log('fetching')
    };


return (
    <div className='FreeGameMainDiv' ref={sectionRef} id="free-games-section">

{FreeGames && <>

     <div className='freegameheadingwrapper'> 





     {/* <h2 className='FreeHeading' >Free Games - Limited Time ⌛</h2>   */}
        
          
     <div className='freegamesidescrollbuttons'>
         
            <FaChevronLeft className='Sidescrollbutton' onClick={scrollLeft}/>
             <FaChevronRight  className='Sidescrollbutton' onClick={scrollRight}/>


     </div> 


     </div> 
    
<div ref={scrollRef} className='freegameboxmain'>
<div className='freegameboxwrapper'>
    
        {
          Array.isArray(FreeGames) && FreeGames.map(
            (data,index)=>{
             
          
                return <div className='freegamebox' key={index}>
                       
               <div className='Stack'>
                <img className='FreeGameImg' src={data.otherimage_url} alt="" />
                        
                 <p className='freegameprice'>{data.otherprice}</p>
                
               </div>
               <div className='freegametext'>Free Game</div>
                 
               <h2 className='freegamename'>{data.othername}</h2>
               <p className='freegameDescription'>{data.othersubtitle}</p> 


             <button onClick={()=>{window.open(data.otherredirect_url, '_blank');}} className='freegameClaimButton'>Claim</button>

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

export default FreeGames

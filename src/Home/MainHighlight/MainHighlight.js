import React, { useContext } from 'react'
import './MainHighlight.css'
import Showlist from './MainHighlightcontents/showlist'
import { GameDealsContext } from '../../GlobelFunc/Globeldatastore';
function MainHighlight() {
   const { Steamtopdeals,Epictopdeals,gogtopdeals,Ubisofttopdeals} = useContext(GameDealsContext);
  
   
  return (
    
    <div>
    <div className='ShowlistWrapper'>
  
     <Showlist Gamedata={Steamtopdeals} platform={'Steam'}/>
      <Showlist Gamedata={Epictopdeals} platform={'Epic'}/>


    </div>
<div className='ShowlistWrapper'>
      <Showlist Gamedata={gogtopdeals} platform={'Gog.com'}/>
      <Showlist Gamedata={Ubisofttopdeals} platform={'Ubisoft Store'}/>
</div>


    </div>
  )
}

export default MainHighlight

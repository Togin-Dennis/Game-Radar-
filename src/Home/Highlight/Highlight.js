import React, { useContext } from 'react'
import './Highlight.css'
import { GameDealsContext } from '../../GlobelFunc/Globeldatastore';


function Highlight() {
  const { Steamtopdeals } = useContext(GameDealsContext);


  
  return (


 <div className='HighlightMainDiv'>


{
  Steamtopdeals?.slice(0, 4).map(

(data)=>{
  return <div className='Highlightimagesection' style={{backgroundImage:`url(https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${data.steamAppID}/header.jpg?t=1748030799`}}>
     <div className='Textbox'>
         <h4 className='Currentprice'>GET UPTO {data.savings.slice(0, 2)}% DISCOUNT</h4>
     </div>
     </div>
}

  )
}

    </div>
  )
}

export default Highlight

import React from 'react'
import Highlight from './Highlight/Highlight'
import MainHighlight from './MainHighlight/MainHighlight'
import FreeGames from './Free Games/FreeGames'
import FreeDlc from './DLC/FreeDlc'
import Apps from './Apps&Poster/Apps/Apps'
import './Home.css'
function Home() {
  return (
    <div className='HomeMaindiv'>
        <MainHighlight/>
       <FreeGames  />
       <FreeDlc/>
       <Apps/>
    </div>
  )
}

export default Home

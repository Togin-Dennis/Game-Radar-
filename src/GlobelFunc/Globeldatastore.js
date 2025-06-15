// context/GameDealsContext.js
import React, { createContext, useState, useEffect } from 'react';
import Axiosfun from '../GlobelFunc/Axios';

export const GameDealsContext = createContext();

export const GameDealsProvider = ({ children }) => {


  const [Steamtopdeals, setSteamtopdeals] = useState([]);
   const [Epictopdeals, setEpictopdeals] = useState([]);
   const [Ubisofttopdeals, setUbisofttopdeals] = useState([]);  
  const [gogtopdeals, setgogtopdeals] = useState([]);
  


  //freegames
 const [FreeGames, setFreeGames] = useState([]); 
  const [FreeGamesvisible, setFreeGamesvisible] = useState(false); 

 const [FreeDlc, setFreeDlc] = useState([]); 
 const [FreeDlcvisible, setFreeDlcvisible] = useState(false); 

const [Appdata,setappdata]=useState([])
const [Appdatavisible,setAppdatavisible]=useState(false)

  useEffect(() => {
    const fetchDeals = async () => {
      const Steamurl = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&sortBy=dealRating&pageSize=50';
       const Epicurl = 'https://www.cheapshark.com/api/1.0/deals?storeID=25&sortBy=dealRating&pageSize=50'; 
       const gogurl =  'https://www.cheapshark.com/api/1.0/deals?storeID=7&sortBy=dealRating&pageSize=40'
       const Ubosofturl =  'https://www.cheapshark.com/api/1.0/deals?storeID=13&sortBy=dealRating&pageSize=40';
       




       const steam = await Axiosfun(Steamurl);
       setSteamtopdeals(steam);
        const Epic = await Axiosfun(Epicurl);
        setEpictopdeals(Epic);


      if (Steamurl&&Epicurl) 
      {
        const gog = await Axiosfun(gogurl);
        setgogtopdeals(gog);
        
         const Ubisoft = await Axiosfun(Ubosofturl);
        setUbisofttopdeals(Ubisoft);
      }
    };

    fetchDeals();
  }, []);

  return (
    <GameDealsContext.Provider value={{ Steamtopdeals,Epictopdeals,gogtopdeals,Ubisofttopdeals,FreeGames, setFreeGames,FreeGamesvisible, setFreeGamesvisible,
FreeDlc, setFreeDlc,FreeDlcvisible, setFreeDlcvisible,Appdatavisible,setAppdatavisible,Appdata,setappdata

    }}>
      {children}
    </GameDealsContext.Provider>
  );
};

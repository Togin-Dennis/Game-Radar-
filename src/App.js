// App.js
import React, { useContext } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Header from './Home/Header/Header';
import Search from './Search/Search';
import LoadingScreen from './Loading/Loading';
import './App.css';
import { GameDealsContext } from './GlobelFunc/Globeldatastore';

function App() {
  const {
    Steamtopdeals,
    Epictopdeals,
    gogtopdeals,
    Ubisofttopdeals
  } = useContext(GameDealsContext);





  const allDataLoaded =
    Steamtopdeals.length > 0 &&
    Epictopdeals.length > 0 &&
    gogtopdeals.length > 0 &&
    Ubisofttopdeals.length > 0;


  return (
    <Router>
      {!allDataLoaded ? (
        <LoadingScreen />
      ) : (
        <>
          <div className='HeaderFixed'>
            <Header />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/loading" element={<LoadingScreen />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;

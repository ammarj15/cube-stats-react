import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Components/Header';
import { Routes, Route, NavLink, Router } from 'react-router-dom';
import FiveCubes from './Components/FiveCubes';
import ACube from './Components/aCube';
import TenCubes from './Components/TenCubes';
import TwentyCubes from './Components/TwentyCubes';
import FiftyCubes from './Components/FiftyCubes';
import OneHundredCubes from './Components/OneHundredCubes';
import FiveHundredCubes from './Components/FiveHundredCubes';
import OneThousandCubes from './Components/OneThousandCubes';
import BottomHalf from './Components/BottomHalf';
import Footer from './Components/Footer';
import { fadeOut } from './styles/TopHalfFade';






function App() { 
  let Scrolling = document.getElementById('scrolling');
  
  function Scroller() {
    fadeOut(Scrolling);
   }
   
   window.addEventListener('scroll', Scroller);
  

  // const url = 'https://peaceful-shore-97914.herokuapp.com/https://api.niftygateway.com/market/summary-stats/'

  return (
    <div className="App">
      
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <span className='navbar'>
        <Header></Header>
        </span>
        
          <div className='scrollings' id='scrolling'>
          
        <Routes >
        <Route path = "/" element = {<ACube />}/>
          <Route path = "/FiveCubes" element = {<FiveCubes />}/>
          <Route path = "/TenCubes" element = {<TenCubes />}/>
          <Route path = "/TwentyCubes" element = {<TwentyCubes />}/>
          <Route path = "/FiftyCubes" element = {<FiftyCubes />}/>
          <Route path = "/OneHundredCubes" element = {<OneHundredCubes />}/>
          <Route path = "/FiveHundredCubes" element = {<FiveHundredCubes />}/>      
          <Route path = "/ThousandCubes" element = {<OneThousandCubes />}/>      
        </Routes>
        </div>
        <div className="routesFades" id='routesFade'></div>
       
       <section>
       <BottomHalf></BottomHalf>
       <Footer></Footer>
       </section>
     
    </div>
    
  );
  }
export default App;

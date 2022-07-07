import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Nifty from './Components/aCube';
import CubeStats from './CubeStats';
import Header from './Components/Header';
import { Routes, Route, NavLink } from 'react-router-dom';
import FiveCubes from './Components/FiveCubes';
import ACube from './Components/aCube';
import CubeStatsApi from './CubeStatsApi'
import CubesFloor from './CubesFloor';
import TenCubes from './Components/TenCubes';
import TwentyCubes from './Components/TwentyCubes';
import FiftyCubes from './Components/FiftyCubes';
import OneHundredCubes from './Components/OneHundredCubes';
import FiveHundredCubes from './Components/FiveHundredCubes';
import OneThousandCubes from './Components/OneThousandCubes';
import BottomHalf from './Components/BottomHalf';
import Footer from './Components/Footer';



function App() { 

  // const url = 'https://peaceful-shore-97914.herokuapp.com/https://api.niftygateway.com/market/summary-stats/'

  // const data = JSON.stringify({
  //   contractAddress: "0xc0cf5b82ae2352303b2ea02c3be88e23f2594171",
  //     niftyType:"8"
  // });


  // useEffect(() => {
  //   axios.post(url, data, {
  //     headers: { 'Content-Type': 'application/json' }})

  //    .then(res => {
  //     console.log(res.data);

  //    });
  //   });
  // const niftyfloor = NiftyData.useEffect;
  // console.log(niftyfloor);

  return (
    <div className="App">
      <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  </head>
        <Header></Header>
        <Routes>
        <Route path = "/" element = {<ACube />} />
          <Route path = "/FiveCubes" element = {<FiveCubes />}/>
          <Route path = "/TenCubes" element = {<TenCubes />}/>
          <Route path = "/TwentyCubes" element = {<TwentyCubes />}/>
          <Route path = "/FiftyCubes" element = {<FiftyCubes />}/>
          <Route path = "/OneHundredCubes" element = {<OneHundredCubes />}/>
          <Route path = "/FiveHundredCubes" element = {<FiveHundredCubes />}/>      
          <Route path = "/ThousandCubes" element = {<OneThousandCubes />}/>      
        </Routes>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <BottomHalf></BottomHalf>
       <Footer></Footer>
    </div>
  );
}

export default App;

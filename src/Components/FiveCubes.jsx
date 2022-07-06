import React, {useState, useEffect} from 'react';
import '../App.css';
import axios from 'axios';
import Nifty from './aCube';
import { CubeFloorsProps, CubeStats } from '../CubeStats';
import Header from '../Components/Header';
import CubeStatsApi from '../CubeStatsApi';
import { FiveCubesFloor } from '../CubesFloor';
import FiveCubesVid from './CubeVids/FiveCubesVid.mp4';





function FiveCubes() {

  const { fiveCubes, loading, error } = FiveCubesFloor();

  return (
    <div className="API">
       {fiveCubes && 
        fiveCubes.map((cubeFloor) => {
        const { floor_price_in_cents, orig_price_in_cents } = cubeFloor;

  return (
    <div className="CubeTitle">
    <h1>Five Cubes</h1>
    <video autoPlay loop muted>
       <source src={FiveCubesVid} type="video/mp4"/>
    </video>
    <div className="CubeType"> 
    <CubeFloorsProps 
          currentFloor={floor_price_in_cents/100} originalPrice={orig_price_in_cents/100}/>
    <CubeStatsApi />
    </div>
    </div>
 );
})}
    </div>
    );
}

export default FiveCubes;

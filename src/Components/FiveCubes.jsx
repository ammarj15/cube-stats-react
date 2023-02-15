import React, {useState, useEffect} from 'react';
import '../App.css';
import axios from 'axios';
import Nifty from './aCube';
import { CubeFloorsProps, CubeStats } from '../CubeStats';
import Header from '../Components/Header';
import CubeStatsApi from '../CubeStatsApi';
//import { FiveCubesFloor } from '../CubesFloor';
import FiveCubesVid from './CubeVids/FiveCubesVid.mp4';
import { CubesListing } from '../CubesFloor';





function FiveCubes() {

//  const { fiveCubes } = CubesListing();
//  console.log({ fiveCubes });

  return (
    <div className="CubeTitle">
    <h1>Five Cubes</h1>
    <video autoPlay loop muted>
       <source src="https://mycubebucket.s3.us-east-2.amazonaws.com/CubeVids/FiveCubesVid.mp4" type="video/mp4"/>
    </video>
    <div className="CubeType"> 
     {/* <CubeFloorsProps 
         currentFloor={floor_price_in_cents/100} originalPrice={orig_price_in_cents/100}
         /> */}
          {/* <h2>OpenSea 5 Cube Floor: { fiveCubes?.toFixed(3) } Ξ</h2> */}
    <CubeStatsApi />
    </div>
    </div>
 );
}

export default FiveCubes;

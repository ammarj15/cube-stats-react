import React, { useEffect} from 'react';
import '../App.css';
import axios from 'axios';
import {CubeFloorsProps, CubeStats} from '../CubeStats'
import CubeStatsApi from '../CubeStatsApi';
import { ACubesFloor, FiveCubesFloor } from '../CubesFloor';
import ACubeVid from './CubeVids/ACubeVid.mp4';


export default function ACube() { 
  
  const  { aCubeFloor } = ACubesFloor();
  console.log(aCubeFloor);

  // if (loading) return <h1> Loading... </h1>;
 
  // if(error) console.log(error);

    
   

   

  return (
    <div className="API">
       {aCubeFloor && 
        aCubeFloor.map((cubeFloor) => {
        const { floor_price_in_cents, orig_price_in_cents } = cubeFloor; 
        
      return(
        <div className="CubeTitle">
        <h1>A Cube</h1>
          <video autoPlay loop muted>
            <source src={ACubeVid} type="video/mp4"/>
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

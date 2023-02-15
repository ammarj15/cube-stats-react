import React from 'react';
import '../App.css';
import {CubeFloorsProps} from '../CubeStats'
import CubeStatsApi from '../CubeStatsApi';
import { CubesListing, ACubeOpenSea} from '../CubesFloor';



export default function ACube() { 

    CubesListing();
   
    //console.log(cubesListings);

    // setTimeout(() => {
    //    ACubesFloor();
    //  }, 10000);
  
  //console.log(cubesListings);
  const { cubeOpen } = ACubeOpenSea();
  // console.log(aCubeFloor);

  // if (loading) return <h1> Loading... </h1>;
 
  // if(error) console.log(error);

    
   

   

  // return (
  //   <div className="API">
  //      {aCubeFloor && 
  //       aCubeFloor.map((cubeFloor) => {
  //       const { floor_price_in_cents, orig_price_in_cents } = cubeFloor; 
        
      return(
        <div className="CubeTitle">
        <h1>A Cube</h1>
          <video autoPlay loop muted>
            <source src="https://mycubebucket.s3.us-east-2.amazonaws.com/CubeVids/ACubeVid.mp4"
 type="video/mp4"/>
          </video>
       <div className="CubeType">
               {/* <CubeFloorsProps 
              currentFloor={floor_price_in_cents/100} originalPrice = {orig_price_in_cents/100}/> */}
              <h2>OpenSea Cube Floor: { cubeOpen?.toFixed(3) } Ξ</h2>
              <CubeStatsApi />
          </div>
          </div>
      );
//     })}
//         </div>
//         );
 }

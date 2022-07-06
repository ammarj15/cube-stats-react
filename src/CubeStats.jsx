import React from 'react';
import Nifty from './Components/aCube';
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'


export const CubeFloorsProps = (props) => {

    return (
        <div className="CubeFloors">
            <h2>Retail Price: {props.originalPrice}</h2>
            <h2> Current Floor: {props.currentFloor} </h2>
        </div>
    );
};

export const CubeStats = (props) => {
  
   return (
   <div className="CubeStats">
       <h2>Ash Price: {Number(props.priceOfAsh).toFixed(3)} {props.dailyChange}%</h2>
       <h2>Ash Yeild: ~ {props.ashYield.toFixed(3)}</h2>
       <h2>Last Burn: {props.lastBurn}</h2>
       <h2>Cubes Remaining: {props.survivingCubes}</h2>
       <h2>Cubes Burned: {props.murderedCubes}</h2>
       <h2>Original Editions Size: 5148</h2>
   </div>
  
    );
};




// retailPrice, currentFloor, lastBurn, ashYeild, cubesLeft, cubesBurned, editionSize
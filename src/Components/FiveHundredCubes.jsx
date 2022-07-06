import React from 'react';
import '../App.css';
import { CubeFloorsProps } from '../CubeStats';
import CubeStatsApi from '../CubeStatsApi';
import { FiveHundredCubesFloor } from '../CubesFloor';
import FiveHundredCubesVid from './CubeVids/FiveHundredCubesVid.mp4';

function FiveHundredCubes() {

  const { fiveHundredCubes, loading, error } = FiveHundredCubesFloor();

  return (
    <div className="API">
      {fiveHundredCubes &&
      fiveHundredCubes.map((cubeFloor) => {
        const { floor_price_in_cents, orig_price_in_cents } = cubeFloor;

        return (
          <div className="CubeTitle">
          <h1>Five Hundred Cubes</h1>
            <video autoPlay loop muted>
              <source src={FiveHundredCubesVid} type="video/mp4"/>
            </video>
          <div className="CubeType">
            <CubeFloorsProps
            currentFloor={ floor_price_in_cents/100} originalPrice={orig_price_in_cents/100}/>
            <CubeStatsApi />
          </div>
          </div>
        );
      })}
    </div>
  );
}

export default FiveHundredCubes;
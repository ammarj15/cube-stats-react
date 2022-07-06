import React from 'react';
import '../App.css';
import { CubeFloorsProps } from '../CubeStats';
import CubeStatsApi from '../CubeStatsApi';
import { TenCubesFloor } from '../CubesFloor';
import TenCubesVid from './CubeVids/TenCubesVid.mp4';

function TenCubes() {

  const { tenCubes, loading, error } = TenCubesFloor();

  return (
    <div className="API">
      {tenCubes &&
      tenCubes.map((cubeFloor) => {
        const { floor_price_in_cents, orig_price_in_cents } = cubeFloor;

        return (
          <div className="CubeTitle">
          <h1>Ten Cubes</h1>
            <video autoPlay loop muted>
              <source src={TenCubesVid} type="video/mp4"/>
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

export default TenCubes;
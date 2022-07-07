import React from 'react';
import '../App.css';
import { CubeFloorsProps } from '../CubeStats';
import CubeStatsApi from '../CubeStatsApi';
import { FiftyCubesFloor } from '../CubesFloor';
import FiftyCubesVid from './CubeVids/FiftyCubesVid.mp4';

function FiftyCubes() {

  const { fiftyCubes, loading, error } = FiftyCubesFloor();

  return (
    <div className="API">
      {fiftyCubes &&
      fiftyCubes.map((cubeFloor) => {
        const { floor_price_in_cents, orig_price_in_cents } = cubeFloor;

        return (
          <div className="CubeTitle">
          <h1>Fifty Cubes</h1>
            <video autoPlay loop muted>
              <source src="https://mycubebucket.s3.us-east-2.amazonaws.com/CubeVids/FiftyCubesVid.mp4" type="video/mp4"/>
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

export default FiftyCubes;
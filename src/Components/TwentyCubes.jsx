import React from 'react';
import '../App.css';
import { CubeFloorsProps } from '../CubeStats';
import CubeStatsApi from '../CubeStatsApi';
//import { TwentyCubesFloor } from '../CubesFloor';
import TwentyCubesVid from './CubeVids/TwentyCubesVid.mp4';

function TwentyCubes() {

  //const { twentyCubes, loading, error } = TwentyCubesFloor();

  // return (
  //   <div className="API">
  //     {twentyCubes &&
  //     twentyCubes.map((cubeFloor) => {
  //       const { floor_price_in_cents, orig_price_in_cents } = cubeFloor;

        return (
          <div className="CubeTitle">
          <h1>Twenty Cubes</h1>
            <video autoPlay loop muted>
              <source src="https://mycubebucket.s3.us-east-2.amazonaws.com/CubeVids/TwentyCubesVid.mp4" type="video/mp4"/>
            </video>
          <div className="CubeType">
            <CubeFloorsProps
           // currentFloor={ floor_price_in_cents/100} originalPrice={orig_price_in_cents/100}
           />
            <CubeStatsApi />
          </div>
          </div>
    //     );
    //   })}
    // </div>
  );
}

export default TwentyCubes;
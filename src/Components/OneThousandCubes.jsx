import React from 'react';
import '../App.css';
import { CubeFloorsProps } from '../CubeStats';
import CubeStatsApi from '../CubeStatsApi';
import { OneThousandCubesFloor } from '../CubesFloor';
import ThousandCubesVid from './CubeVids/ThousandCubesVid.mp4';

function OneThousandCubes() {

  const { thousandCubes, loading, error } = OneThousandCubesFloor();

  return (
    <div className="API">
      {thousandCubes &&
      thousandCubes.map((cubeFloor) => {
        const { floor_price_in_cents, orig_price_in_cents } = cubeFloor;

        return (
          <div className="CubeTitle">
            <h1>Thousand Cubes</h1>
              <video autoPlay loop muted>
                <source src="https://mycubebucket.s3.us-east-2.amazonaws.com/CubeVids/ThousandCubesVid.mp4" type="video/mp4"/>
              </video>
            <div className='CubeType'>
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

export default OneThousandCubes;
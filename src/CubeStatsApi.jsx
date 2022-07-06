import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {CubeFloorsProps, CubeStats} from './CubeStats';


export default function CubeStatsApi() {
  
  const fetchAsh = 'https://api.ethplorer.io/getTokenInfo/0x64D91f12Ece7362F91A6f8E7940Cd55F05060b92?apiKey=EK-cRSQ8-HEHeUfy-ysEyd'

  const [ash, getAsh] = useState(0);
  const [change, getChange] = useState();
  const [totalAsh, getSupply] = useState();

  useEffect(() => {

    axios.get(fetchAsh, {
      headers: { 'Content-Type': 'application/json; charset=utf-8'
                 }})

    .then((ashInfo) => {
      //  console.log(ashInfo);
      const ashData = [ashInfo.data.price.rate];
      const changeData = [ashInfo.data.price.diff];
      const supplyData = [ashInfo.data.totalSupply];

      getAsh(ashData);
      getChange(changeData);
      getSupply(supplyData);

      
    })

  }, []);
  // console.log(ash);
  // console.log(change);
  // console.log(totalAsh);

  const fetchBurn = 'https://api.ethplorer.io/getAddressHistory/0x0000000000000000000000000000000000000000?apiKey=EK-cRSQ8-HEHeUfy-ysEyd&token=0x64D91f12Ece7362F91A6f8E7940Cd55F05060b92'

  const [burn, getBurn] = useState();

  useEffect(() => {
    axios.get(fetchBurn, {
      headers: { 'Content-Type': 'application/json'}

    })

    .then((burnRes) => {
      // console.log(burnRes);
      const latestBurn = [burnRes.data.operations[0].timestamp];
      var burnDateSec = new Date(latestBurn * 1000);
      // console.log(burnDateSec);
      var burnDate = burnDateSec.toString();
      var actualDate = burnDate.substring(0, 16);
      getBurn(actualDate);
      // console.log(burn);
    })
}, []);
// console.log(burn);
//Etherscan JS Bundle + Key
const api = require('etherscan-api').init('WT892D4Z7AB8Z57N7A7EN8R8YNB1F3YJA2');

const [cubeArray, setState] = useState([]);

useEffect(() => {
  const supply = api.stats.tokensupply(null, '0xc0cf5b82ae2352303b2ea02c3be88e23f2594171');
  const addy = "0xc0cf5b82ae2352303b2ea02c3be88e23f2594171"
  const burned = api.account.tokenbalance('0x000000000000000000000000000000000000dead', '', addy);
  // const lastBurn = api.account.txlistinternal( '0xD6A6f4c84abd6aA45150905c25158C971feE0010', '', '', '');
  
  // lastBurn.then((latestBurn) => {
  //   console.log(latestBurn);
  // });
    // console.log(tokenSupply.result);

     burned.then((burnedCubes) => {
      cubeArray.push(burnedCubes.result);
     });

     supply.then((totalCubes) => {
       cubeArray.push(totalCubes.result);
     })

     setState(cubeArray);
     
      // console.log(cubeArray);
}, []);

  return(
    <div>
    <CubeStats 
    murderedCubes={cubeArray[1]} survivingCubes={cubeArray[0] - cubeArray[1]} 
    priceOfAsh={ash} dailyChange={change} 
      ashYield={(.5**((totalAsh/1000000000000000000)/5000000))*1000}
    lastBurn={burn} />
    </div>
  );

}

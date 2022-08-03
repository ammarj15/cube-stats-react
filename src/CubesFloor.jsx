import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CubeStats from './CubeStats';
import CubeStatsApi from './CubeStatsApi';


function ACubesFloor() {
//Custom Nifty API Workaround
  const url = 'https://peaceful-shore-97914.herokuapp.com/https://api.niftygateway.com/market/summary-stats/?contractAddress=0xc0cf5b82ae2352303b2ea02c3be88e23f2594171&niftyType=8'

  const data = JSON.stringify({
    contractAddress: "0xc0cf5b82ae2352303b2ea02c3be88e23f2594171",
      niftyType:"8",
  });

  const [aCubeFloor, getData] = useState(null);
 
  useEffect(() => {
    
    axios.get(url, data, {
      headers: { 'Content-Type': 'application/json' }})

     .then((res) => {
      const niftyResponse = [res.data]; 
      // console.log(niftyResponse);
      getData(niftyResponse);

     });
    }, []);
    return { aCubeFloor }
  }
  function FiveCubesFloor() {
    const [fiveCubes, fiveData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    
    const data = JSON.stringify({
      contractAddress: "0xc0cf5b82ae2352303b2ea02c3be88e23f2594171",
        niftyType:"7"
    });
   
    useEffect(() => {
      setLoading(true);
      axios.get('https://peaceful-shore-97914.herokuapp.com/https://api.niftygateway.com/market/summary-stats/?contractAddress=0xc0cf5b82ae2352303b2ea02c3be88e23f2594171&niftyType=7', data, {
        headers: { 'Content-Type': 'application/json' }})
  
       .then((res) => {
        const niftyFiveResponse = [res.data]; 
        fiveData(niftyFiveResponse);
  
       })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
      }, []);
      return { fiveCubes, loading, error }
    }

    function TenCubesFloor() {
      const [tenCubes, tenData] = useState(null);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);

    const data = JSON.stringify({
      contractAddress: "0xc0cf5b82ae2352303b2ea02c3be88e23f2594171",
      niftyType: "6"
    });

    useEffect(() => {
      setLoading(true);
      axios.get('https://peaceful-shore-97914.herokuapp.com/https://api.niftygateway.com/market/summary-stats/?contractAddress=0xc0cf5b82ae2352303b2ea02c3be88e23f2594171&niftyType=6', data, {
        headers: { 'Content-Type': 'application/json'}})
        
        .then((res) => {
          const niftyTenResponse = [res.data];
          tenData(niftyTenResponse);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
      }, []);
      return { tenCubes, loading, error }
    }

    function TwentyCubesFloor() {
      const [twentyCubes, twentyData] = useState(null);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);

    const data = JSON.stringify({
      contractAddress: "0xc0cf5b82ae2352303b2ea02c3be88e23f2594171",
      niftyType: "5"
    });

    useEffect(() => {
      setLoading(true);
      axios.get('https://peaceful-shore-97914.herokuapp.com/https://api.niftygateway.com/market/summary-stats/?contractAddress=0xc0cf5b82ae2352303b2ea02c3be88e23f2594171&niftyType=5', data, {
        headers: { 'Content-Type': 'application/json'}})
        
        .then((res) => {
          const niftyTwentyResponse = [res.data];
          twentyData(niftyTwentyResponse);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
      }, []);
      return { twentyCubes, loading, error }
    }

    function FiftyCubesFloor() {
      const [fiftyCubes, fiftyData] = useState(null);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);

    const data = JSON.stringify({
      contractAddress: "0xc0cf5b82ae2352303b2ea02c3be88e23f2594171",
      niftyType: "4"
    });

    useEffect(() => {
      setLoading(true);
      axios.get('https://peaceful-shore-97914.herokuapp.com/https://api.niftygateway.com/market/summary-stats/?contractAddress=0xc0cf5b82ae2352303b2ea02c3be88e23f2594171&niftyType=4', data, {
        headers: { 'Content-Type': 'application/json'}})
        
        .then((res) => {
          const niftyFiftyResponse = [res.data];
          fiftyData(niftyFiftyResponse);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
      }, []);
      return { fiftyCubes, loading, error }
    }

    function OneHundredCubesFloor() {
      const [oneHundredCubes, oneHundredData] = useState(null);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);

    const data = JSON.stringify({
      contractAddress: "0xc0cf5b82ae2352303b2ea02c3be88e23f2594171",
      niftyType: "3"
    });

    useEffect(() => {
      setLoading(true);
      axios.get('https://peaceful-shore-97914.herokuapp.com/https://api.niftygateway.com/market/summary-stats/?contractAddress=0xc0cf5b82ae2352303b2ea02c3be88e23f2594171&niftyType=3', data, {
        headers: { 'Content-Type': 'application/json'}})
        
        .then((res) => {
          const niftyHundredResponse = [res.data];
          oneHundredData(niftyHundredResponse);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
      }, []);
      return { oneHundredCubes, loading, error }
    }

    function FiveHundredCubesFloor() {
      const [fiveHundredCubes, fiveHundredData] = useState(null);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);

    const data = JSON.stringify({
      contractAddress: "0xc0cf5b82ae2352303b2ea02c3be88e23f2594171",
      niftyType: "2"
    });

    useEffect(() => {
      setLoading(true);
      axios.get('https://peaceful-shore-97914.herokuapp.com/https://api.niftygateway.com/market/summary-stats/?contractAddress=0xc0cf5b82ae2352303b2ea02c3be88e23f2594171&niftyType=2', data, {
        headers: { 'Content-Type': 'application/json'}})
        
        .then((res) => {
          const niftyfiveHundredResponse = [res.data];
          fiveHundredData(niftyfiveHundredResponse);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
      }, []);
      return { fiveHundredCubes, loading, error }
    }

    function OneThousandCubesFloor() {
      const [thousandCubes, thousandData] = useState(null);
      // const [loading, setLoading] = useState(false);
      // const [error, setError] = useState(null);

    const data = JSON.stringify({
      contractAddress: "0xc0cf5b82ae2352303b2ea02c3be88e23f2594171",
      niftyType: "1"
    });

    useEffect(() => {
      // setLoading(true);
      axios.get('https://peaceful-shore-97914.herokuapp.com/https://api.niftygateway.com/market/summary-stats/?contractAddress=0xc0cf5b82ae2352303b2ea02c3be88e23f2594171&niftyType=1', data, {
        headers: { 'Content-Type': 'application/json'}})
        
        .then((res) => {
          const niftyThousandResponse = [res.data];
          console.log(niftyThousandResponse);
          thousandData(niftyThousandResponse);
          
        })
        // .catch((err) => {
        //   setError(err);
        // })
        // .finally(() => {
        //   setLoading(false);
        // });
      }, []);
      return { thousandCubes }
    }

  export {ACubesFloor, FiveCubesFloor, TenCubesFloor, TwentyCubesFloor, FiftyCubesFloor, FiveHundredCubesFloor, OneHundredCubesFloor, OneThousandCubesFloor};


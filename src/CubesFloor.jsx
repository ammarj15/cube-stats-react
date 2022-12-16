import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CubeStats from './CubeStats';
import CubeStatsApi from './CubeStatsApi';


function ACubesFloor() {
  
  
//Custom Nifty API Workaround

  const [aCubeFloor, getData] = useState(null);
 
  useEffect(() => {
    
    const options = {
      method: 'GET',
      url: 'https://http-cors-proxy.p.rapidapi.com/https://api.niftygateway.com/market/summary-stats/',
      params: {contractAddress: '0xc0cf5b82ae2352303b2ea02c3be88e23f2594171', niftyType: '8'},
      headers: {
        'x-requested-with': 'example.com',
        'X-RapidAPI-Key': 'ccab64ca0cmshd4373454ebf0fc3p118b2ejsnaa23aae244cf',
        'X-RapidAPI-Host': 'http-cors-proxy.p.rapidapi.com'
      }
    };
    
    axios.request(options)

     .then((res) => {
      const niftyResponse = [res.data]; 
      console.log(niftyResponse);
      getData(niftyResponse);

     });
    }, []);
    return { aCubeFloor }
  }
  function ACubeOpenSea(){
    const[cubeOpen, setCubeOpen] = useState(null);

    useEffect(() => {

      const options = {
  method: 'GET',
  url: 'https://http-cors-proxy.p.rapidapi.com/https://api.opensea.io/collection/the-fungible-by-pak/stats',
  headers: {
    'x-requested-with': 'example.com',
    'X-RapidAPI-Key': 'ccab64ca0cmshd4373454ebf0fc3p118b2ejsnaa23aae244cf',
    'X-RapidAPI-Host': 'http-cors-proxy.p.rapidapi.com'
  }
};

axios.request(options)
      .then((res) => {
        const openSeaRes = [res.data.stats.floor_price];
        console.log(openSeaRes)
        setCubeOpen(openSeaRes[0]);
        
        
      });
    }, []);
    console.log(cubeOpen)
    return { cubeOpen }
   }

  function FiveCubesFloor() {
    const [fiveCubes, fiveData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
   
    useEffect(() => {
      setLoading(true);
      const options = {
        method: 'GET',
        url: 'https://http-cors-proxy.p.rapidapi.com/https://api.niftygateway.com/market/summary-stats/',
        params: {contractAddress: '0xc0cf5b82ae2352303b2ea02c3be88e23f2594171', niftyType: '7'},
        headers: {
          'x-requested-with': 'example.com',
          'X-RapidAPI-Key': 'ccab64ca0cmshd4373454ebf0fc3p118b2ejsnaa23aae244cf',
          'X-RapidAPI-Host': 'http-cors-proxy.p.rapidapi.com'
        }
      };
      
      axios.request(options)
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

    useEffect(() => {
      setLoading(true);
      const options = {
        method: 'GET',
        url: 'https://http-cors-proxy.p.rapidapi.com/https://api.niftygateway.com/market/summary-stats/',
        params: {contractAddress: '0xc0cf5b82ae2352303b2ea02c3be88e23f2594171', niftyType: '6'},
        headers: {
          'x-requested-with': 'example.com',
          'X-RapidAPI-Key': 'ccab64ca0cmshd4373454ebf0fc3p118b2ejsnaa23aae244cf',
          'X-RapidAPI-Host': 'http-cors-proxy.p.rapidapi.com'
        }
      };
      
      axios.request(options)
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

    useEffect(() => {
      setLoading(true);
      const options = {
        method: 'GET',
        url: 'https://http-cors-proxy.p.rapidapi.com/https://api.niftygateway.com/market/summary-stats/',
        params: {contractAddress: '0xc0cf5b82ae2352303b2ea02c3be88e23f2594171', niftyType: '5'},
        headers: {
          'x-requested-with': 'example.com',
          'X-RapidAPI-Key': 'ccab64ca0cmshd4373454ebf0fc3p118b2ejsnaa23aae244cf',
          'X-RapidAPI-Host': 'http-cors-proxy.p.rapidapi.com'
        }
      };
      
      axios.request(options)
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

    useEffect(() => {
      setLoading(true);
      const options = {
        method: 'GET',
        url: 'https://http-cors-proxy.p.rapidapi.com/https://api.niftygateway.com/market/summary-stats/',
        params: {contractAddress: '0xc0cf5b82ae2352303b2ea02c3be88e23f2594171', niftyType: '4'},
        headers: {
          'x-requested-with': 'example.com',
          'X-RapidAPI-Key': 'ccab64ca0cmshd4373454ebf0fc3p118b2ejsnaa23aae244cf',
          'X-RapidAPI-Host': 'http-cors-proxy.p.rapidapi.com'
        }
      };
      
      axios.request(options)
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

    useEffect(() => {
      const options = {
        method: 'GET',
        url: 'https://http-cors-proxy.p.rapidapi.com/https://api.niftygateway.com/market/summary-stats/',
        params: {contractAddress: '0xc0cf5b82ae2352303b2ea02c3be88e23f2594171', niftyType: '3'},
        headers: {
          'x-requested-with': 'example.com',
          'X-RapidAPI-Key': 'ccab64ca0cmshd4373454ebf0fc3p118b2ejsnaa23aae244cf',
          'X-RapidAPI-Host': 'http-cors-proxy.p.rapidapi.com'
        }
      };
      
      axios.request(options)
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

    useEffect(() => {
      setLoading(true);
      const options = {
        method: 'GET',
        url: 'https://http-cors-proxy.p.rapidapi.com/https://api.niftygateway.com/market/summary-stats/',
        params: {contractAddress: '0xc0cf5b82ae2352303b2ea02c3be88e23f2594171', niftyType: '2'},
        headers: {
          'x-requested-with': 'example.com',
          'X-RapidAPI-Key': 'ccab64ca0cmshd4373454ebf0fc3p118b2ejsnaa23aae244cf',
          'X-RapidAPI-Host': 'http-cors-proxy.p.rapidapi.com'
        }
      };
      
      axios.request(options)
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

    useEffect(() => {
      // setLoading(true);
      const options = {
        method: 'GET',
        url: 'https://http-cors-proxy.p.rapidapi.com/https://api.niftygateway.com/market/summary-stats/',
        params: {contractAddress: '0xc0cf5b82ae2352303b2ea02c3be88e23f2594171', niftyType: '1'},
        headers: {
          'x-requested-with': 'example.com',
          'X-RapidAPI-Key': 'ccab64ca0cmshd4373454ebf0fc3p118b2ejsnaa23aae244cf',
          'X-RapidAPI-Host': 'http-cors-proxy.p.rapidapi.com'
        }
      };
      
      axios.request(options)
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

   

  export {ACubesFloor, ACubeOpenSea, FiveCubesFloor, TenCubesFloor, TwentyCubesFloor, FiftyCubesFloor, FiveHundredCubesFloor, OneHundredCubesFloor, OneThousandCubesFloor};


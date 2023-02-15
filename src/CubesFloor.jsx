import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CubeStats from './CubeStats';
import CubeStatsApi from './CubeStatsApi';
import qs from 'qs';

async function fetchTokens() {
  // const [fiveCubes, setFiveCubes] = useState(null);
  // const [tenCubes, setTenCubes] = useState(null);
  // const [twentyCubes, setTwentyCubes] = useState(null);
  // const [fiftyCubes, setFiftyCubes] = useState(null);
  // const [oneHundredCubes, setOneHundredCubes] = useState(null);
  // const [oneThosandCubes, setOneThousandCubes] = useState(null);
  // const [fiveHundredCubes, setFiCubes] = useState(null);
  const options = {
    method: 'GET',
    url: 'https://api.opensea.io/v2/listings/collection/the-fungible-by-pak/all',
    headers: { accept: 'application/json', 'X-API-KEY': '40392d7387d34dea8751d0b639379f20' },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    const tokenIds = response.data.listings.map((listing) => listing.protocol_data.parameters.offer[0].identifierOrCriteria);
    const tokens = Array.from(new Set(tokenIds)); // remove duplicates
    return tokens;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function fetchOrders(tokens) {
  const options = {
    method: 'GET',
    url: 'https://api.opensea.io/v2/orders/ethereum/seaport/listings',
    params: {
      asset_contract_address: '0xC0cf5B82Ae2352303b2EA02c3bE88e23f2594171',
      token_ids: tokens, // array of string ids
      order_by: 'created_date',
      order_direction: 'asc',
    },
    headers: { accept: 'application/json', 'X-API-KEY': '40392d7387d34dea8751d0b639379f20' },
    paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    const floorTokens = new Map();

    for (let i in response.data.orders) {
      if (response.data.orders[i].maker_asset_bundle.assets[0].description !== "1") {
        const tokenName = response.data.orders[i].maker_asset_bundle.assets[0].description;
        const tokenPrice = response.data.orders[i].current_price;
    
        if (!floorTokens.has(tokenName)) {
          floorTokens.set(tokenName, tokenPrice);
        } else {
          const currentPrice = parseFloat(floorTokens.get(tokenName));
          const minPrice = Math.min(currentPrice, tokenPrice);
          floorTokens.set(tokenName, minPrice);
        }
      }
    }
    console.log(floorTokens);
  } catch (error) {
    console.error(error);
  }
}

async function CubesListing() {
  const tokenIds = await fetchTokens();
  if (tokenIds.length > 0) {
    setTimeout(() => fetchOrders(tokenIds), 5000);
  }
}

// const map = new Map();
// const items = [];
// function CubesListing(){
//   const options = {
//     method: 'GET',
//     url: 'https://api.opensea.io/v2/listings/collection/the-fungible-by-pak/all',
//     headers: {accept: 'application/json', 'X-API-KEY': '40392d7387d34dea8751d0b639379f20'}
//   };
  
//   axios
//     .request(options)
//     .then(function (response) {
//       //const ids = [response.data.listings[0].protocol_data.parameters.offer[0].identifierOrCriteria];
//       //console.log(response.data);
//        for(let i = 0; i < response.data.listings.length; i++){
//         const tokenID = response.data.listings[i].protocol_data.parameters.offer[0].identifierOrCriteria;
//         if(!map.has(tokenID)){
//           map.set(tokenID, 1)
//         } else {
//           continue;
//         }
//       }
//       console.log(map);
//       map.forEach((value, key) => {
//         console.log(key);
//         items.push(key);
//       });
//       console.log(items);
      
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
    
// }
//   function ACubesFloor() {
    
//       const options = {
//         method: 'GET',
//         url: 'https://api.opensea.io/v2/orders/ethereum/seaport/listings',
//         params: {
//           asset_contract_address: '0xC0cf5B82Ae2352303b2EA02c3bE88e23f2594171',
//           token_ids: items,
//           order_by: 'created_date',
//           order_direction: 'desc'
//         },
//         headers: {accept: 'application/json', 'X-API-KEY': '40392d7387d34dea8751d0b639379f20'},
//         paramsSerializer: function(params) {
//           return qs.stringify(params, {arrayFormat: 'repeat'})
//         }
//       };
      
//       axios
//         .request(options)
//         .then(function (response) {
//           console.log(response.data);
//         })
//         .catch(function (error) {
//           console.error(error);
//         });
//    //   })
// }
  
  
// //Custom Nifty API Workaround

//   const [aCubeFloor, getData] = useState(null);
 
//   useEffect(() => {
    
//     const options = {
//       method: 'GET',
//       url: 'https://http-cors-proxy.p.rapidapi.com/https://api.niftygateway.com/market/summary-stats/',
//       params: {contractAddress: '0xc0cf5b82ae2352303b2ea02c3be88e23f2594171', niftyType: '8'},
//       headers: {
//         'x-requested-with': 'example.com',
//         'X-RapidAPI-Key': 'ccab64ca0cmshd4373454ebf0fc3p118b2ejsnaa23aae244cf',
//         'X-RapidAPI-Host': 'http-cors-proxy.p.rapidapi.com'
//       }
//     };
    
//     axios.request(options)

//      .then((res) => {
//       const niftyResponse = [res.data]; 
//       console.log(niftyResponse);
//       getData(niftyResponse);

//      });
//     }, []);
//     return { aCubeFloor }
//   }
  function ACubeOpenSea(){
    const[cubeOpen, setCubeOpen] = useState(null);

    useEffect(() => {

      const options = {
  method: 'GET',
  url: 'https://api.opensea.io/api/v1/collection/the-fungible-by-pak/stats',
};

axios.request(options)
      .then((res) => {
        const openSeaRes = [res.data.stats.floor_price];
        console.log(res)
        setCubeOpen(openSeaRes[0]);
        
        
      });
    }, []);
    //console.log(cubeOpen)
    return { cubeOpen }
   }

  // function FiveCubesFloor() {
  //   const [fiveCubes, fiveData] = useState(null);
  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(null);
  
   
  //   useEffect(() => {
  //     setLoading(true);
    //   const options = {
    //     method: 'GET',
    //     url: 'https://http-cors-proxy.p.rapidapi.com/https://api.niftygateway.com/market/summary-stats/',
    //     params: {contractAddress: '0xc0cf5b82ae2352303b2ea02c3be88e23f2594171', niftyType: '7'},
    //     headers: {
    //       'x-requested-with': 'example.com',
    //       'X-RapidAPI-Key': 'ccab64ca0cmshd4373454ebf0fc3p118b2ejsnaa23aae244cf',
    //       'X-RapidAPI-Host': 'http-cors-proxy.p.rapidapi.com'
    //     }
    //   };
      
    //   axios.request(options)
    //    .then((res) => {
    //     const niftyFiveResponse = [res.data]; 
    //     fiveData(niftyFiveResponse);
  
    //    })
    //     .catch((err) => {
    //       setError(err);
    //     })
    //     .finally(() => {
    //       setLoading(false);
    //     });
    //   }, []);
    //   return { fiveCubes, loading, error }
    // }

    // function TenCubesFloor() {
    //   const [tenCubes, tenData] = useState(null);
    //   const [loading, setLoading] = useState(false);
    //   const [error, setError] = useState(null);

    // useEffect(() => {
    //   setLoading(true);
    //   const options = {
    //     method: 'GET',
    //     url: 'https://http-cors-proxy.p.rapidapi.com/https://api.niftygateway.com/market/summary-stats/',
    //     params: {contractAddress: '0xc0cf5b82ae2352303b2ea02c3be88e23f2594171', niftyType: '6'},
    //     headers: {
    //       'x-requested-with': 'example.com',
    //       'X-RapidAPI-Key': 'ccab64ca0cmshd4373454ebf0fc3p118b2ejsnaa23aae244cf',
    //       'X-RapidAPI-Host': 'http-cors-proxy.p.rapidapi.com'
    //     }
    //   };
      
    //   axios.request(options)
    //     .then((res) => {
    //       const niftyTenResponse = [res.data];
    //       tenData(niftyTenResponse);
    //     })
    //     .catch((err) => {
    //       setError(err);
    //     })
    //     .finally(() => {
    //       setLoading(false);
    //     });
    //   }, []);
    //   return { tenCubes, loading, error }
    // }

    // function TwentyCubesFloor() {
    //   const [twentyCubes, twentyData] = useState(null);
    //   const [loading, setLoading] = useState(false);
    //   const [error, setError] = useState(null);

    // useEffect(() => {
    //   setLoading(true);
    //   const options = {
    //     method: 'GET',
    //     url: 'https://http-cors-proxy.p.rapidapi.com/https://api.niftygateway.com/market/summary-stats/',
    //     params: {contractAddress: '0xc0cf5b82ae2352303b2ea02c3be88e23f2594171', niftyType: '5'},
    //     headers: {
    //       'x-requested-with': 'example.com',
    //       'X-RapidAPI-Key': 'ccab64ca0cmshd4373454ebf0fc3p118b2ejsnaa23aae244cf',
    //       'X-RapidAPI-Host': 'http-cors-proxy.p.rapidapi.com'
    //     }
    //   };
      
    //   axios.request(options)
    //     .then((res) => {
    //       const niftyTwentyResponse = [res.data];
    //       twentyData(niftyTwentyResponse);
    //     })
    //     .catch((err) => {
    //       setError(err);
    //     })
    //     .finally(() => {
    //       setLoading(false);
    //     });
    //   }, []);
    //   return { twentyCubes, loading, error }
    // }

    // function FiftyCubesFloor() {
    //   const [fiftyCubes, fiftyData] = useState(null);
    //   const [loading, setLoading] = useState(false);
    //   const [error, setError] = useState(null);

    // useEffect(() => {
    //   setLoading(true);
    //   const options = {
    //     method: 'GET',
    //     url: 'https://http-cors-proxy.p.rapidapi.com/https://api.niftygateway.com/market/summary-stats/',
    //     params: {contractAddress: '0xc0cf5b82ae2352303b2ea02c3be88e23f2594171', niftyType: '4'},
    //     headers: {
    //       'x-requested-with': 'example.com',
    //       'X-RapidAPI-Key': 'ccab64ca0cmshd4373454ebf0fc3p118b2ejsnaa23aae244cf',
    //       'X-RapidAPI-Host': 'http-cors-proxy.p.rapidapi.com'
    //     }
    //   };
      
    //   axios.request(options)
    //     .then((res) => {
    //       const niftyFiftyResponse = [res.data];
    //       fiftyData(niftyFiftyResponse);
    //     })
    //     .catch((err) => {
    //       setError(err);
    //     })
    //     .finally(() => {
    //       setLoading(false);
    //     });
    //   }, []);
    //   return { fiftyCubes, loading, error }
    // }

    // function OneHundredCubesFloor() {
    //   const [oneHundredCubes, oneHundredData] = useState(null);
    //   const [loading, setLoading] = useState(false);
    //   const [error, setError] = useState(null);

    // useEffect(() => {
    //   const options = {
    //     method: 'GET',
    //     url: 'https://http-cors-proxy.p.rapidapi.com/https://api.niftygateway.com/market/summary-stats/',
    //     params: {contractAddress: '0xc0cf5b82ae2352303b2ea02c3be88e23f2594171', niftyType: '3'},
    //     headers: {
    //       'x-requested-with': 'example.com',
    //       'X-RapidAPI-Key': 'ccab64ca0cmshd4373454ebf0fc3p118b2ejsnaa23aae244cf',
    //       'X-RapidAPI-Host': 'http-cors-proxy.p.rapidapi.com'
    //     }
    //   };
      
    //   axios.request(options)
    //     .then((res) => {
    //       const niftyHundredResponse = [res.data];
    //       oneHundredData(niftyHundredResponse);
    //     })
    //     .catch((err) => {
    //       setError(err);
    //     })
    //     .finally(() => {
    //       setLoading(false);
    //     });
    //   }, []);
    //   return { oneHundredCubes, loading, error }
    // }

    // function FiveHundredCubesFloor() {
    //   const [fiveHundredCubes, fiveHundredData] = useState(null);
    //   const [loading, setLoading] = useState(false);
    //   const [error, setError] = useState(null);

    // useEffect(() => {
    //   setLoading(true);
    //   const options = {
    //     method: 'GET',
    //     url: 'https://http-cors-proxy.p.rapidapi.com/https://api.niftygateway.com/market/summary-stats/',
    //     params: {contractAddress: '0xc0cf5b82ae2352303b2ea02c3be88e23f2594171', niftyType: '2'},
    //     headers: {
    //       'x-requested-with': 'example.com',
    //       'X-RapidAPI-Key': 'ccab64ca0cmshd4373454ebf0fc3p118b2ejsnaa23aae244cf',
    //       'X-RapidAPI-Host': 'http-cors-proxy.p.rapidapi.com'
    //     }
    //   };
      
    //   axios.request(options)
    //     .then((res) => {
    //       const niftyfiveHundredResponse = [res.data];
    //       fiveHundredData(niftyfiveHundredResponse);
    //     })
    //     .catch((err) => {
    //       setError(err);
    //     })
    //     .finally(() => {
    //       setLoading(false);
    //     });
    //   }, []);
    //   return { fiveHundredCubes, loading, error }
    // }

    // function OneThousandCubesFloor() {
    //   const [thousandCubes, thousandData] = useState(null);
    //   // const [loading, setLoading] = useState(false);
    //   // const [error, setError] = useState(null);

    // useEffect(() => {
    //   // setLoading(true);
    //   const options = {
    //     method: 'GET',
    //     url: 'https://http-cors-proxy.p.rapidapi.com/https://api.niftygateway.com/market/summary-stats/',
    //     params: {contractAddress: '0xc0cf5b82ae2352303b2ea02c3be88e23f2594171', niftyType: '1'},
    //     headers: {
    //       'x-requested-with': 'example.com',
    //       'X-RapidAPI-Key': 'ccab64ca0cmshd4373454ebf0fc3p118b2ejsnaa23aae244cf',
    //       'X-RapidAPI-Host': 'http-cors-proxy.p.rapidapi.com'
    //     }
    //   };
      
    //   axios.request(options)
    //     .then((res) => {
    //       const niftyThousandResponse = [res.data];
    //       console.log(niftyThousandResponse);
    //       thousandData(niftyThousandResponse);
          
    //     })
    //     // .catch((err) => {
    //     //   setError(err);
    //     // })
    //     // .finally(() => {
    //     //   setLoading(false);
    //     // });
    //   }, []);
    //   return { thousandCubes }
   
  
  export { CubesListing, ACubeOpenSea};


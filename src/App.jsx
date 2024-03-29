import {React, useRef, useState, useEffect} from 'react';
import './App.css';
import Header from './Components/Header';
import { Routes, Route } from 'react-router-dom';
import FiveCubes from './Components/FiveCubes';
import ACube from './Components/aCube';
import TenCubes from './Components/TenCubes';
import TwentyCubes from './Components/TwentyCubes';
import FiftyCubes from './Components/FiftyCubes';
import OneHundredCubes from './Components/OneHundredCubes';
import FiveHundredCubes from './Components/FiveHundredCubes';
import OneThousandCubes from './Components/OneThousandCubes';
import BottomHalf from './Components/BottomHalf';
import Footer from './Components/Footer';
import { ClimbingBoxLoader, ClipLoader } from 'react-spinners';
import { flexbox, height } from '@mui/system';







function App() { 
 
  let scrollingRef = useRef(null);
  let routeRef = useRef(null);
  function FadeOut(element) {
    if(!element){
      return;
    }
   //  console.log("got this far!!")
    const topDistance = window.pageYOffset + 
    routeRef.current.getBoundingClientRect().top;
    // console.log("top Distance is ", topDistance)
    
    let elementHeight = element.offsetHeight;
    // console.log("element height: ", elementHeight)
    let scrollTop = document.documentElement.scrollTop;
   //  console.log("Scroll Top is ", scrollTop)
    let opacity = 1;
    
    if (scrollTop > topDistance) {
      opacity = .8 - (scrollTop - topDistance) / elementHeight;
      
    }
   
    if (opacity >= 0) {
      element.style.opacity = opacity;
    // console.log("opacity is :", opacity);
    }
   
   }
  
  function Scroller() {
    FadeOut(scrollingRef.current);
   }
   
   window.addEventListener('scroll', Scroller);
  
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, );
  // }, [])

const override = {
  position:"inherit"
}
  // const url = 'https://peaceful-shore-97914.herokuapp.com/https://api.niftygateway.com/market/summary-stats/'

  return (
    <div className="App">
      
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <span className='navbar'>
        <Header></Header>
        </span>
        
          <div className='scrollings' id='scrolling' ref={scrollingRef}>
        {/* <div className='dopeLoading'>
          {loading ? <ClimbingBoxLoader
                      color='white'
                      cssOverride={override}
                        /> :  */}
        <Routes >
        <Route path = "/" element = {<ACube />}/>
          <Route path = "/FiveCubes" element = {<FiveCubes />}/>
          <Route path = "/TenCubes" element = {<TenCubes />}/>
          <Route path = "/TwentyCubes" element = {<TwentyCubes />}/>
          <Route path = "/FiftyCubes" element = {<FiftyCubes />}/>
          <Route path = "/OneHundredCubes" element = {<OneHundredCubes />}/>
          <Route path = "/FiveHundredCubes" element = {<FiveHundredCubes />}/>      
          <Route path = "/ThousandCubes" element = {<OneThousandCubes />}/>      
    </Routes>

        </div>
        <div className="routesFades" id='routesFade' ref={routeRef}></div>
       
       <section>
       <BottomHalf></BottomHalf>
       <Footer></Footer>
       </section>
     
    </div>
    
  );
  }
export default App;

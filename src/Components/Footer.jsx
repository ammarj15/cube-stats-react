import React from 'react'
import twitterwhite from './Pics/twitterwhite.png';
import instagramwhite from './Pics/instagramwhite.png';
import Lnwhite from './Pics/Lnwhite.png';
import { FooterContainer, LeftBottom, MiddleBottom, RightBottom } from '../styles/Footer.style';

export default function Footer() {
  return (
    <div className='footer'>
      <FooterContainer>
        <LeftBottom><a href="https://twitter.com/ammarj15" ><img src={twitterwhite} type="image/png"/></a>
   <a href="https://www.instagram.com/ammar.jivraj/" ><img src={instagramwhite} type="image/png"/></a>
   <a href="https://www.linkedin.com/in/ammar-jivraj-792818188/"><img src={Lnwhite} type="image/png"/></a>
    </LeftBottom>
      <MiddleBottom>Copyright 2022</MiddleBottom>
      <RightBottom>Made in sunny Miami, Florida</RightBottom>
    </FooterContainer>
    </div>
  )
}

import React, { useState } from 'react'
import { HeaderContainer, 
         LeftContainer, 
         RightContainer, 
         HeaderInnerContainer, 
         HeaderExtendedContainer, 
         HeaderLinkContainer,
         NavLink,
         HeaderTitle,
          OpenRoutes,  
          NavLinkExtended} from '../styles/Header.style'

function Header() {
  const [extendHeader, setExtendHeader] = useState(false);
  
  

  return (
    <div>
      <HeaderContainer extendHeader={extendHeader}>
        <HeaderInnerContainer>
        <LeftContainer>
        <HeaderTitle>Cube Stats</HeaderTitle>
        
        </LeftContainer>
        <RightContainer>
        <HeaderLinkContainer>
          <NavLink to = "/">A Cube</NavLink>
          <NavLink to = "/FiveCubes">Five Cubes</NavLink>
          <NavLink to = "/TenCubes">Ten Cubes</NavLink>
          <NavLink to = "/TwentyCubes">Twenty Cubes</NavLink>
          <NavLink to = "/FiftyCubes">Fifty Cubes</NavLink>
          <NavLink to = "/OneHundredCubes">Hundred Cubes</NavLink>
          <NavLink to = "/FiveHundredCubes">Five Hundred Cubes</NavLink>
          <NavLink to = "/ThousandCubes">Thousand Cubes</NavLink>
          <OpenRoutes onClick={() => {
            setExtendHeader((curr) => !curr);
          }}> 
          {extendHeader ? <> &#10005; </> : <> &#8801;
          </>}
          </OpenRoutes>
        </HeaderLinkContainer>
          </RightContainer>
        </HeaderInnerContainer>
        {extendHeader && (
        <HeaderExtendedContainer>
          <NavLinkExtended onClick={() => {
            setExtendHeader((curr) => !curr);
          }}
          to = "/">A Cube</NavLinkExtended>
          <NavLinkExtended onClick={() => {
            setExtendHeader((curr) => !curr);
          }}
          to = "/FiveCubes">Five Cubes</NavLinkExtended>
          <NavLinkExtended onClick={() => {
            setExtendHeader((curr) => !curr);
          }}
          to = "/TenCubes">Ten Cubes</NavLinkExtended>
          <NavLinkExtended onClick={() => {
            setExtendHeader((curr) => !curr);
          }}
          to = "/TwentyCubes">Twenty Cubes</NavLinkExtended>
          <NavLinkExtended onClick={() => {
            setExtendHeader((curr) => !curr);
          }}
          to = "/FiftyCubes">Fifty Cubes</NavLinkExtended>
          <NavLinkExtended onClick={() => {
            setExtendHeader((curr) => !curr);
          }}
          to = "/OneHundredCubes">Hundred Cubes</NavLinkExtended>
          <NavLinkExtended onClick={() => {
            setExtendHeader((curr) => !curr);
          }}
          to = "/FiveHundredCubes">Five Hundred Cubes</NavLinkExtended>
          <NavLinkExtended onClick={() => {
            setExtendHeader((curr) => !curr);
          }}
          to = "/ThousandCubes">Thousand Cubes</NavLinkExtended>
          </HeaderExtendedContainer>
        )}
          </HeaderContainer>
    </div>
  )
}

export default Header

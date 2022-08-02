import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';



export const HeaderContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendHeader ? "100vh" : "80px")};
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid;
  background-color: #111110 ;

  @media (min-width: 891px) {
    height: 80px;
  } 
  `;

export const LeftContainer = styled.div`
  flex: 15%;
  display: flex;
  align-items: center;
  padding-left: 5%;
  @media (max-width: 891px){
    flex: 60%;
    justify-content: flex-end;
    
  }
`;

export const RightContainer = styled.div`
  flex: 85%;
  display: flex;
  @media (max-width: 891px){
    justify-content: flex-end;
    flex: 40%;
  }
`;

export const HeaderInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  `;


export const HeaderLinkContainer = styled.div`
  display: flex;
`;

export const NavLink = styled(Link) `
  color: white;
  font-size: large;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-decoration: none;
  margin: 10px;
  padding-top: 25px;
  @media (max-width: 1240px){
    font-size: small;
    padding-top: 30px;
  };
  @media (max-width: 891px){
    display: none;};
  &:hover {
    text-decoration: underline;
  }

`;

export const NavLinkExtended = styled(Link) `
  color: white;
  font-size: large;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-decoration: none;
  margin: 10px;
  
`;

export const HeaderTitle = styled.div`
  color: white;
  font-size: xx-large;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  @media (max-width: 1240px){
    font-size: x-large;
  padding-top: 5px; };
  @media (max-width: 891px){
    font-size: 40px;
  }

`
export const OpenRoutes = styled.button `
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  padding: 15px;
  
  cursor: pointer;

  @media (min-width: 891px){
    display: none;
    ;
  };

`;

export const HeaderExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 891px) {
    display: none;
  }
  `;

export const routesFade = styled.div`
transform: translateX(${({ animate }) => (animate ? '0' : '-50vw')});
transition: transform 1s;
height: 650px;
width: 250px;
background-color: green;
  `;
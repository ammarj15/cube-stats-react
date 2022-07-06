import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  border-top: 1px solid;
  @media (max-width: 695px) {
    font-size: 12px;
    
  }
`;

export const LeftBottom = styled.div`
  display: flex;
  flex: 33%;
  padding-left: 5%;
  padding-top: 5px;
  padding-bottom: 5px;
  
  a{
    margin: 3px;
  }
`;

export const MiddleBottom = styled.div `
  display: flex;
  flex: 33%;
  justify-content: center;
  padding-top: 5px;
`;

export const RightBottom = styled.div`
  display: flex;
  flex: 33%;
  justify-content: flex-end;
  padding-right: 3rem;
  padding-top: 5px;
  @media (max-width: 547px) {
    padding-right: 1rem;
  }
`;

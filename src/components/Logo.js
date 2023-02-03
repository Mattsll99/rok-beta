import React from 'react'
import styled from 'styled-components'

function Logo() {
  return (
    <Container>
      <Box1>ROK</Box1>
      <Box2></Box2>
      <Box3></Box3>
    </Container>
  )
}

export default Logo

const Container = styled.div`
  height: 80px; 
  width: 200px; 
  position: relative;
  background: transparent;
  @media(max-width: 411px) {
    width: 150px;
  }
`;

const Box1 = styled.div`
  position: absolute; 
  height: 50px; 
  width: 130px;
  background: #FFFFFF;
  top: 0; 
  bottom: 0; 
  margin-top: auto; 
  margin-bottom: auto;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
  border: solid 2px #222222;
  z-index: 3;
  display: flex; 
  justify-content: center;
  align-items: center; 
  font-weight: 500; 
  font-size: 40px; 
  color: #222222; 
`; 

const Box2 = styled(Box1)`
  z-index: 2;
  margin-top: 10px;
  margin-left: 40px;
  @media(max-width: 411px) {
    margin-left: 15px;
  }
`;

const Box3 = styled(Box2)`
  z-index: 1;
  margin-top: 5px;
  margin-left: 45px;
  @media(max-width: 411px) {
    margin-left: 20px;
  }
`;
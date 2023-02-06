import React from 'react'
import styled from 'styled-components'

function ServiceBox() {
  return (
    <Container>
      <Wrapper1>
        <Body>I will retweet the tweet of your choice</Body>
        <Bottom>
          <Right>0.0002 ETH</Right>
        </Bottom>
      </Wrapper1>
      <Wrapper2></Wrapper2>
      <Wrapper3></Wrapper3>
    </Container>
  )
}

export default ServiceBox

const Container = styled.div`
  height: 150px; 
  width: 250px;
  position: relative;
`;

const Wrapper1 = styled.div`
  position: absolute; 
  height: 80%; 
  width: 90%; 
  bottom: 0; 
  left: 0; 
  background: #FFFFFF; 
  border: solid 2px #222222;
  z-index: 3;
  display: flex; 
  //justify-content: center;
  align-items: center;
  font-size: 20px; 
  font-weight: 400; 
  color: #222222;
  flex-direction: column;
  cursor: pointer;
  &:hover {
    background: #222222;
    color: #FFFFFF;
  }
`; 

const Wrapper2 = styled(Wrapper1)`
  bottom: 5px; 
  left: 5px;
  z-index: 2;
`; 

const Wrapper3 = styled(Wrapper2)`
  z-index: 1;
  bottom: 10px; 
  left: 10px;
`;

const Body = styled.div`
  width: 100%; 
  height: 70%;
  background: transparent;
  font-size: 16px; 
  font-weight: 400; 
  //color: #222222;
  padding: 10px;
  overflow: scroll;
`; 

const Bottom = styled.div`
  width: 100%; 
  height: 30%;
  display: flex; 
  flex-direction: row;
  justify-content: end;
  background: transparent;
`;

const Right = styled.div`
  width: auto;
  height: 100%;
  padding: 10px; 
  font-size: 18px; 
  font-weight: 300; 
  color: #FFFFFF; 
  background: #828282;
  border-left: solid 2px #222222;
  border-top: solid 2px #222222;
  padding: 5px;
`;
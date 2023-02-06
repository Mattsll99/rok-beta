import React from 'react'
import styled from 'styled-components'

function PaymentWrap() {
  return (
    <Container>
      <Wrapper>
        <Wrapper1>
          <Body>
            <WrapBody>I will retweet the tweet of your choice</WrapBody>
          </Body>
          <Bottom>
            <Left>
              <Address>0x253...093</Address>
              <Price>0.0002 ETH</Price>
            </Left>
            <Right>
              <Validate>Validate</Validate>
            </Right>
          </Bottom>
        </Wrapper1>
        <Wrapper2></Wrapper2>
        <Wrapper3></Wrapper3>
      </Wrapper>
    </Container>
  )
}

export default PaymentWrap

const Container = styled.div`
  position: absolute; 
  height: 300px; 
  width: 550px; 
  background: #C0AA91;
  border: solid 6px #222222;
  position: fixed;
  top: 0; 
  bottom: 0; 
  margin-top: auto; 
  margin-bottom: auto; 
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
  z-index: 5;
`;

const Wrapper = styled.div`
  position: relative; 
  height: 100%; 
  width: 100%; 
  background: transparent;
`; 

const Wrapper1 = styled.div`
  position: absolute; 
  height: 80%; 
  width: 90%; 
  top: 0;
  bottom: 0; 
  margin-top: auto;
  margin-bottom: auto;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
  background: #FFFFFF; 
  border: solid 2px #222222;
  z-index: 3;
  display: flex; 
  //justify-content: center;
  align-items: center;
  font-size: 20px; 
  font-weight: 400; 
  color: #FFFFFF;
  flex-direction: column;
`; 

const Wrapper2 = styled(Wrapper1)`
  bottom: 10px; 
  left: 10px;
  z-index: 2;
`; 

const Wrapper3 = styled(Wrapper2)`
  z-index: 1;
  bottom: 20px; 
  left: 20px;
`;

const Body = styled.div`
  width: 100%; 
  height: 65%; 
  background: transparent;
  display: flex; 
  align-items: center; 
  justify-content: center;
  padding: 20px;
`;

const WrapBody = styled.div`
  height: 100%; 
  width: 100%; 
  background: #828282;
  border: solid 2px #222222;
  padding: 10px; 
  font-size: 20px; 
  overflow: scroll;
  font-weight: 300;
`;

const Bottom = styled.div`
  width: 100%; 
  height: 35%;
  display: flex; 
  flex-direction: row;
  background: #828282;
  border-top: solid 2px #222222;
`;

const Left = styled.div`
  height: 100%; 
  width: 55%; 
  background: transparent;
  border-right: solid 2px #222222;
  display: flex; 
  flex-direction: column; 
  padding: 10px;
  justify-content: space-between;
`;

const Right = styled.div`
  height: 100%; 
  width: 45%;
  background: transparent;
  display: flex; 
  justify-content: center; 
  align-items: center;
  padding : 15px;
`;

const Validate = styled.div`
  height: 100%; 
  width: 100%; 
  background: #FFFFFF; 
  border: solid 2px #222222; 
  display: flex; 
  justify-content: center; 
  align-items: center;
  font-weight: 300; 
  font-size: 25px; 
  color: #222222;
  cursor: pointer; 
  &:hover {
    background: #222222; 
    color: #FFFFFF;
  }
`;

const Address = styled.text`
  font-size: 13px; 
  background: transparent; 
  font-weight: 200;
  color: #BBBBBB;
`; 

const Price = styled.text`
  font-size: 30px;
  color: #FFFFFF;
  background: transparent; 
  font-weight: 300;
`;
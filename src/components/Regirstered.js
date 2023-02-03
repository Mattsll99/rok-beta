import React from 'react'
import styled from 'styled-components'

function Regirstered({name, symbol, address, price, hold}) {
  return (
    <Container>
      <Wrapper>
        <Card1>
        <Wrap>
            <Top>Your token</Top>
            <Body>
              <Cover>
                <Left>Name:</Left>
                <Right>{name}</Right>
              </Cover>
              <Cover>
                <Left>Symbol:</Left>
                <Right>{symbol}</Right>
              </Cover>
              <Cover>
                <Left>Address:</Left>
                <Right>{address}</Right>
              </Cover>
              <Cover>
                <Left>Price:</Left>
                <Right>{price}</Right>
              </Cover>
              <Cover>
                <Left>You hold:</Left>
                <Right>{hold}</Right>
              </Cover>
            </Body>
            <a href='https://1bdlslro48r.typeform.com/to/BsYZbeOJ'>
            <Bottom>Time to sell!</Bottom>
            </a>
          </Wrap>
        </Card1>
        <Card2></Card2>
        <Card3></Card3>
      </Wrapper>
    </Container>
  )
}

export default Regirstered

const Container = styled.div`
  width: 400px; 
  height: 500px; 
  position: absolute; 
  top: 0; 
  bottom: 0; 
  margin-top: auto; 
  margin-bottom : auto; 
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
  @media(max-width: 411px) {
    width: 100%;
  }
`;

const Left = styled.div`
  height: 100%;
  //width: 48%;
  width: auto;
  display: flex; 
  align-items: center; 
  justify-content: start;
  align-items: center;
  white-space: nowrap;
  background: transparent;
  font-weight: 200; 
  font-size: 25px; 
  color: #ffffff;
  @media(max-width: 411px) {
    font-size: 5vw;
  }
  
`; 

const Right = styled(Left)`
  justify-content: end;
`;

const Wrapper = styled.div`
  position: relative; 
  height: 100%; 
  width: 100%;
  background: transparent
`; 

const Card1 = styled.div`
  width: 90%; 
  height: 90%; 
  background: #FFFFFF; 
  border: solid 2px #222222;
  position: absolute; 
  top: 0; 
  bottom: 0; 
  margin-top: auto; 
  margin-bottom : auto; 
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
  z-index: 3;
`; 

const Card2 = styled(Card1)`
  z-index: 2; 
  margin-left: 25px;
  margin-top: 30px;
`;

const Card3 = styled(Card2)`
  z-index: 1;
  margin-left: 30px;
  margin-top: 35px;
`;

const Wrap = styled.div`
  position: relative; 
  height: 100%; 
  width: 100%; 
  background: transparent;
  display: flex; 
  flex-direction: column;
`;

const Top = styled.div`
  width: 100%; 
  height: 70px; 
  background: #222222;
  display: flex; 
  justify-content: center;
  align-items: center;
  font-weight: 200; 
  font-size: 30px; 
  color: #FFFFFF;
  @media(max-width: 411px) {
    font-size: 8vw;
  }
`;

const Body = styled.div`
  width: 100%; 
  //margin-top: 70px;
  display: flex; 
  flex-direction: column;
  padding: 10px;
  background: transparent;
`;

const Cover = styled.div`
  height: 45px;
  margin-top: 10px;
  font-weight: 200; 
  font-size: 20px;
  background: #222222;
  color: #FFFFFF;
  padding: 5px;
  display: flex; 
  flex-direction: row; 
  justify-content: space-between;
`;

const Bottom = styled.div`
  width: 98%; 
  position: absolute; 
  bottom: 5px; 
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
  height: 70px; 
  background: yellow;
  border: solid 2px #222222;
  display: flex; 
  justify-content: center; 
  align-items: center;
  font-size: 30px; 
  font-weight: 200; 
  color: #222222;
  cursor: pointer;
  &:hover {
    background: #222222; 
    color: #FFFFFF;
  }
`; 
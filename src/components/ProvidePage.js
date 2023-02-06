import React from 'react'
import styled from 'styled-components'
import ServiceBox from './ServiceBox';

function ProvidePage() {
  return (
    <Container>
      <Top>
      <AddressBox>
          <Wrapper1>Ox253...543</Wrapper1>
          <Wrapper2></Wrapper2>
          <Wrapper3></Wrapper3>
      </AddressBox>
        <ShareBox>
          <Wrapper1>Share your page</Wrapper1>
          <Wrapper2></Wrapper2>
          <Wrapper3></Wrapper3>
        </ShareBox>
      </Top>
      <Body>
        <TopBody>
          <AddButton>
              <Wrapper1>Add a service</Wrapper1>
              <Wrapper2></Wrapper2>
              <Wrapper3></Wrapper3>
          </AddButton>
        </TopBody>
        <Wrap>
          <ServiceBox />
          <ServiceBox />
          <ServiceBox />
          <ServiceBox />
          <ServiceBox />
          <ServiceBox />
          <ServiceBox />
          <ServiceBox />
          <ServiceBox />
          <ServiceBox />
          <ServiceBox />
          <ServiceBox />
          <ServiceBox />
        </Wrap>
      </Body>
    </Container>
  )
}

export default ProvidePage

const Container = styled.div`
  height: 100%; 
  width: 100%;
  background: transparent;
  margin-top: 150px;
`;

const Top = styled.div`
  width: 100%; 
  height: 80px;
  display: flex; 
  flex-direction: row; 
  align-items: center; 
  justify-content: end; 
  padding-left: 30px;
  padding-right: 30px;
`;

const ShareBox = styled.div`
  height: 100%; 
  width: 260px; 
  position: relative;
  cursor: pointer;
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
  justify-content: center;
  align-items: center;
  font-size: 20px; 
  font-weight: 400; 
  color: #222222;
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

const AddressBox = styled.div`
  height: 100%; 
  width: 190px; 
  position: relative;
  margin-right: 40px;
  cursor: pointer;
`;

const Body = styled.div`
  width: 100%; 
  height: 500px; 
  margin-top: 50px;
`;

const TopBody = styled.div`
  width: 100%; 
  height: 70px; 
  padding-left: 100px;
`; 

const AddButton = styled.div`
  height: 70px; 
  width: 220px;
  position relative; 
  cursor: pointer;
`;

const Wrap = styled.div`
  height: auto; 
  width: 100%; 
  margin-top: 30px;
  padding-left: 200px; 
  padding-right: 100px;
  display: flex;
  flex-wrap: wrap; 
  justify-content: flex-start;
  //justify-content: center;
  //background: red;
  //align-items: center;
`; 
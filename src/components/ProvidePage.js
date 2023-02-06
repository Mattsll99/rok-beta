import React, { useState } from 'react'
import styled from 'styled-components'
import CloseButton from './CloseButton';
import CreateBox from './CreateBox';
import ServiceBox from './ServiceBox';
import { useAccount } from 'wagmi';


function ProvidePage() {

  const [create, setCreate] = useState(false);
 

  const handleCreate = () => {
    setCreate(true)
  }

  const closeCreate = () => {
      setCreate(false)
  }

  const {address, isConnecting, isDisconnected} = useAccount();

  return (
    <Container>
      {create === true &&
        <BackWrapper>
          <ButtonContainer onClick={closeCreate}>
            <ButtonWrapper>
              <LeftLine></LeftLine>
              <RightLine></RightLine>
            </ButtonWrapper>
          </ButtonContainer>
          <CreateBox/>
        </BackWrapper>
      }
      <Top>
      <AddressBox>
          <Wrapper1>{address !== undefined? address.substring(0,5)+"..."+address.substring(38) : "..."}</Wrapper1>
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
              <Wrapper1 onClick={handleCreate}>Add a service</Wrapper1>
              <Wrapper2></Wrapper2>
              <Wrapper3></Wrapper3>
          </AddButton>
        </TopBody>
        <Wrap>
         
        </Wrap>
      </Body>
    </Container>
  )
}

export default ProvidePage

const Container = styled.div`
  height: auto; 
  min-height: 100vh;
  width: 100%;
  background: transparent;
  margin-top: 150px;
`;

const BackWrapper = styled.div`
  height : 100vh; 
  width: 100vw; 
  background: blue; 
  position: fixed; 
  top: 0; 
  left: 0;
  z-index: 6;
  background: transparent;
`; 

const Test = styled.div`
  height: 50px; 
  width: 50px; 
  position: absolute; 
  background: red;
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

const ButtonContainer = styled.div`
  height: 80px;
  width: 80px;
  position: fixed;
  left: 0;
  right:0; 
  margin-left: auto; 
  margin-right: auto;
  top: 15vh;
  z-index: 8;
  background: #C0AA91;
  border: solid 5px #222222;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  height: 100%; 
  width: 100%; 
  position: relative;
  background: transparent;
`;

const LeftLine = styled.div`
  position: absolute; 
  top: 0; 
  bottom:0; 
  margin-top: auto; 
  margin-bottom: auto; 
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
  background: #A93E3E;
  height: 80px; 
  width: 10px;
  transform: rotate(-45deg)
`;

const RightLine = styled(LeftLine)`
transform: rotate(45deg)
`;
import React, { useState } from 'react'
import styled from 'styled-components'
import CloseButton from './CloseButton';
import CreateBox from './CreateBox';
import ServiceBox from './ServiceBox';
import { useAccount } from 'wagmi';
import { useProvider } from 'wagmi';
import { useContractRead } from 'wagmi';
import createInterface from '../contracts/Create.json'
import { ethers } from 'ethers';
import {Link, Route, Routes} from 'react-router-dom';
import ShareCreate from './ShareCreate';


/*const handleLink = () => {

} */
//Pas besoin de router, just need the link


export const getProvider = () => {}

function ProvidePage() {

  const [create, setCreate] = useState(false);
  const [link, setLink] = useState(false);
 

  const handleCreate = () => {
    setCreate(true)
  }

  const closeCreate = () => {
      setCreate(false)
  }

  const provider = useProvider();

  const {address, isConnecting, isDisconnected} = useAccount();

  //const stringAddress = address.toString();

  const serviceProvider = (address !== undefined)? address.toString() : "/";

  const {data, isError, isDataLoading} = useContractRead({
    address: '0xe4D691998f2f22eDD3d9c747521DA42253E76720', 
    abi: createInterface, 
    functionName: 'seeAllServices', 
    signerOrProvider: provider,
    args: [address], //address of the user
    watch: true,
  })

  const displayLink = () => {
    setLink(true)
  }
  //https://rok-beta.vercel.app/
  const findLink= "https://rok-beta.vercel.app/"+serviceProvider.toString();
  //console.log(findLink);

  //console.log(data);
  
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
        {link === true &&
          <Wrapper0>{findLink}</Wrapper0>
        }
          <Wrapper1 onClick={displayLink}> Share your page</Wrapper1>
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
          {
            data?.map((offer, i) => (
              <ServiceBox 
                provider={offer.provider}
                service={offer.name}
                price={ethers.utils.formatEther(offer.price).toString()}
                index={offer.index}
              />
            ))
          }
        </Wrap>
      </Body>
    </Container>
  )
}

export default ProvidePage

/*<ShareBox>
          <Wrapper1>Share your page</Wrapper1>
          <Wrapper2></Wrapper2>
          <Wrapper3></Wrapper3>
        </ShareBox>*/

/* 
<Routes>
        <Route path={address.toString()} element={<ShareCreate serviceProvider={address} />}/>
      </Routes>
*/

/* 
<Link style={{textDecoration: "none", color:"#FFFFFF", fontWeight:"400"}} to={serviceProvider} target='blank'>
*/

const Container = styled.div`
  height: auto; 
  min-height: 100vh;
  width: 100%;
  background: transparent;
  margin-top: 150px;
  //padding-bottom: 20px;
`;


const BackWrapper = styled.div`
  height : 100vh; 
  width: 100vw; 
  background: blue; 
  position: fixed; 
  top: 0; 
  left: 0;
  z-index: 6;
background: rgba( 255, 255, 255, 0 );
//box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 9px );
-webkit-backdrop-filter: blur( 9px );
//border-radius: 10px;
//border: 1px solid rgba( 255, 255, 255, 0.18 );
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

const Wrapper0 = styled(Wrapper1)`
  bottom: -5px; 
  left: -5px;
  z-index: 4;
  overflow: scroll;
  background: #222222; 
  color: #FFFFFF;
  display: flex;
  flex-direction: row;
  justify-content: start;
  font-size: 12px;
  white-space: pre;
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
  @media(max-width: 499px) {
    display: none
  }
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
  @media(max-width: 864px) {
    padding-left: 100px;
  }
  @media(max-width: 700px) {
    padding-left: 10px; 
    padding-right: 10px;
  }
  @media(max-width: 520px) {
    justify-content: center;
  }
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
  top: 85px;
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
import { ethers } from 'ethers'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useAccount, useProvider } from 'wagmi'
import { useSigner } from 'wagmi'
import { usePrepareContractWrite } from 'wagmi'
import { useContractWrite } from 'wagmi'
import LaunchInterface from '../contracts/Launch.json';

function LaunchCard() {
  //0x0DFc44eB3eB97bc9050E8E460f4af39179BC61E2

  const [name, setName] = useState('')
  const [symbol, setSymbol] = useState('')
  const [supply, setSupply] = useState('')
  const [price, setPrice] = useState('')
  const [keep, setKeep] = useState('')

  const provider = useProvider();

  const { address, isConnecting, isDisconnected } = useAccount()

  const {config} = usePrepareContractWrite({
    address: '0x0DFc44eB3eB97bc9050E8E460f4af39179BC61E2', 
    abi: LaunchInterface, 
    functionName: 'launchToken', 
    signerOrProvider: provider, 
    args: [
      name, 
      symbol, 
      (typeof supply !== 'undefined' && supply.toString() !== "")? ethers.utils.parseEther(supply).toString(): "0",
      (typeof price !== 'undefined' && price.toString() !== "")? ethers.utils.parseEther(price).toString(): "0",
      (typeof keep !== 'undefined' && keep.toString() !== "")? ethers.utils.parseEther(keep).toString(): "0",
    ]
  })

  const {data, isLoading, isSuccess, write} = useContractWrite(config);

  const handleLaunch = () => {
      write();
  }

  return (
    <LaunchContainer>
      <Wrapper>
        <Card1>
          <Wrap>
            <Top>Build your token</Top>
            <Body>
              <Cover placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}></Cover>
              <Cover placeholder='Symbol' value={symbol} onChange={(e) => setSymbol(e.target.value)}></Cover>
              <Cover placeholder='Supply' value={supply} onChange={(e) => setSupply(e.target.value)}></Cover>
              <Cover placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)}></Cover>
              <Cover placeholder='You keep' value={keep} onChange={(e) => setKeep(e.target.value)}></Cover>
            </Body>
            <Validate onClick={handleLaunch}>Validate</Validate>
          </Wrap>
        </Card1>
        <Card2></Card2>
        <Card3></Card3>
      </Wrapper>
    </LaunchContainer>
  )
}

export default LaunchCard

const LaunchContainer = styled.div`
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
  background: red;
`;

const Block = styled.div`
  height : 100px; 
  width: 100px; 
  background: blue;
  position: absolute; 
  top: 0; 
  bottom : 0; 
  margin-top: auto; 
  margin-bottom :auto; 
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
  background: transparent
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
`;

const Body = styled.div`
  width: 100%; 
  //margin-top: 70px;
  display: flex; 
  flex-direction: column;
  padding: 10px;
  background: transparent;
`;

const Cover = styled.input`
  height: 45px;
  margin-top: 10px;
  font-weight: 200; 
  font-size: 20px;
  color: #222222;
  padding: 5px;
  background: #CDC6BE;
`;

const Validate = styled.div`
  position: absolute; 
  bottom: 10px; 
  right: 10px;
  height: 50px; 
  width: 150px; 
  background: #222222; 
  display : flex; 
  justify-content: center; 
  align-items: center; 
  font-weight: 200; 
  font-size: 20px; 
  color: #FFFFFF; 
  cursor: pointer; 
  &:hover {
    border: solid 2px #222222; 
    color: #222222; 
    background: #CDC6BE;
  }
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
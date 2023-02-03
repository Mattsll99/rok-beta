import React, { useState } from 'react'
import styled from 'styled-components'
import LaunchCard from './LaunchCard';
import Regirstered from './Regirstered';
import { useProvider } from 'wagmi';
import { usePrepareContractWrite } from 'wagmi';
import { useContractWrite } from 'wagmi';
import { useContractRead } from 'wagmi';
import { useAccount } from 'wagmi';
import LaunchInterface from '../contracts/Launch.json'
import { ethers } from 'ethers';

function Section() {

  const [registration, setRegistration] = useState(false)

  const provider = useProvider()

  const {address, isConnecting, isDisconnected} = useAccount();

  const {data, isError, isDataLoading} = useContractRead({
    address: '0x0DFc44eB3eB97bc9050E8E460f4af39179BC61E2', 
    abi: LaunchInterface, 
    functionName: 'getDeployerData', 
    signerOrProvider: provider,
    args: [address], //address of the user
    watch: true,
  })

  const [name, setName] = useState('')
  const [symbol, setSymbol] = useState('')
  const [supply, setSupply] = useState('')
  const [price, setPrice] = useState('')
  const [keep, setKeep] = useState('')

  //const provider = useProvider();

  //const { address, isConnecting, isDisconnected } = useAccount()
  //const formatedKeep = keep/100;
  //const x = IsSomeValueTrue() ? 1 : 2;
  const formatedKeep = typeof keep !== 'number'? (keep/100).toString() : "0";

  const {config} = usePrepareContractWrite({
    address: '0x0DFc44eB3eB97bc9050E8E460f4af39179BC61E2', 
    abi: LaunchInterface, 
    functionName: 'launchToken', 
    signerOrProvider: provider, 
    args: [
      name, 
      symbol, 
      (typeof supply !== 'undefined' && supply.toString() !== "")? ethers.utils.parseEther(supply).toString(): "0",
      (typeof formatedKeep !== 'undefined' && formatedKeep.toString() !== "")? ethers.utils.parseEther(formatedKeep).toString(): "0",
      (typeof price !== 'undefined' && price.toString() !== "")? ethers.utils.parseEther(price).toString(): "0",
    ]
  })

  const {launchData, isLoading, isSuccess, write} = useContractWrite(config);

  const handleLaunch = () => {
      write();
  }
  console.log(data)

  async function handleTheLaunch() {
    const tx = await write()
    await tx.wait(10)
  }

  if (isDisconnected === true) {
    return (
      <Container>
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
            <Validate onClick={handleTheLaunch}>Validate</Validate>
          </Wrap>
        </Card1>
        <Card2></Card2>
        <Card3></Card3>
      </Wrapper>
    </LaunchContainer>
      </Container>
    )
  }
  else if(isDisconnected === false) {
    if(data === undefined ) {
      return (
        <Container>
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
        </Container>
      ) 
    }
    else {
      return (
        <Regirstered 
        name={data._tokenName}
        symbol = {data._tokenSymbol}
        address = {data._tokenAddress.substring(0,5)+"..."+data._tokenAddress.substring(38)}
        price = {ethers.utils.formatEther(data._tokenPrice).toString()}
        hold = {ethers.utils.formatEther(data._deployerBalance).toString()}
      />
      )
    }
  }
}

//|| data._tokenAddress === '0x0000000000000000000000000000000000000000'

//data._tokenAddress === '0x0000000000000000000000000000000000000000'

/*<Regirstered 
        name={data._tokenName}
        symbol = {data._tokenSymbol}
        address = {data._tokenAddress.substring(0,5)+"..."+data._tokenAddress.substring(38)}
        price = {ethers.utils.formatEther(data._tokenPrice).toString()}
        hold = {ethers.utils.formatEther(data._deployerBalance).toString()}
      />*/

//creator={token._deployerAddress.substring(0,5)+"..."+token._deployerAddress.substring(38)}

/*name={data._tokenName}
        symbol = {data._tokenSymbol}
        address = {data._tokenAddress}
        price = {data._tokenPrice}
        hold = {data._deployerBalance}*/

export default Section

const Container = styled.div`
  height: 100%; 
  width: 100%; 
  background: transparent;
`;

const WaitContainer = styled.div`
  position: absolute; 
  height: 100vh; 
  width: 100vw; 
  z-index: 6; 
  background: red;
`;

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
  @media(max-width: 411px) {
    width: 100%;
  }
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

const Cover = styled.input`
  height: 45px;
  margin-top: 10px;
  font-weight: 200; 
  font-size: 20px;
  color: #222222;
  padding: 5px;
  background: #CDC6BE;
  @media(max-width: 411px) {
    font-size: 5vw;
  }
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
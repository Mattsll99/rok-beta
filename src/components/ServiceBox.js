import React, { useState } from 'react'
import styled from 'styled-components'
import { useProvider } from 'wagmi';
import { useSigner } from 'wagmi';
import { usePrepareContractWrite } from 'wagmi';
import { useContractWrite } from 'wagmi';
import { useContractRead } from 'wagmi';
import paymentInterface from '../contracts/Payment.json'
import createInterface from '../contracts/Create.json'
import { ethers } from 'ethers';
import { useContract } from 'wagmi';
import { erc20ABI } from 'wagmi';
//import { useSigner } from 'wagmi';

function ServiceBox({provider, service, price, index}) {

  const [pay, setPay] = useState(false);

  const displayPay = () => {
    setPay(true);
  }

  const hideDisplay = () => {
    setPay(false)
  }

  const contractProvider = useProvider();

  const { data: signer, isSignerError, isSignerLoading } = useSigner()

  const rETH = useContract({
    address: '0xD77fF3E6c5a08cFFBE0c78Bd61dF1B418f926645', 
    abi: erc20ABI, 
    signerOrProvider: signer,
  })


  const {config} = usePrepareContractWrite({
    address: '0x5E2CDB4E1B3188c6ce9aC342f6F558cF2A511b7D', 
    abi: paymentInterface, 
    functionName: 'payForService', 
    signerOrProvider: contractProvider, 
    args: [provider, index]
  })

  const {serviceData, isError, isDataLoading} = useContractRead({
    address: '0x170D5b724C50b609489E9aae1b1D45C2762Ac823', 
    abi: createInterface, 
    functionName: 'seeService', 
    signerOrProvider: provider,
    args: [provider, index], //address of the user
    watch: true,
  })

  const {data, isLoading, isSuccess, write} = useContractWrite(config);

  const servicePrice = (serviceData !== undefined)? ethers.utils.formatEther(serviceData.price).toString() : "0";

  async function handlePayment() {
    const result = await rETH.connect(signer).approve('0x5E2CDB4E1B3188c6ce9aC342f6F558cF2A511b7D', ethers.utils.parseEther(price).toString()); 
    await result.wait(); 
    const transaction = await write(); 
    await transaction.wait();
  }
  

  console.log(price)

  return (
    <Container>
      {pay === true &&
        <Wrapper0 onClick={hideDisplay}>
           <Body>{(service !== "")? service: <Out>Out of stock</Out>}</Body>
           <Bottom>
          <Right onClick={handlePayment}>Validate</Right>
        </Bottom>
        </Wrapper0>
      }
      <Wrapper1 onClick={displayPay}>
        <Body>{(service !== "")? service: <Out>Out of stock</Out>}</Body>
        <Bottom>
          <Right>{price} ETH</Right>
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

const Out = styled.text`
  font-weight: 400; 
  color: red;
  font-size: 20px;
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

const Wrapper0 = styled(Wrapper1)`
  background: #222222;
  bottom: -5px; 
  left: -5px; 
  z-index: 5;
  display: flex; 
  flex-direction: column; 
  color: #FFFFFF;
`

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
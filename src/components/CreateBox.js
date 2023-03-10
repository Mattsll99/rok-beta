import React, { useState } from 'react'
import styled from 'styled-components'
import { useProvider } from 'wagmi';
import { usePrepareContractWrite } from 'wagmi';
import { useContractWrite } from 'wagmi';
import { useContractRead } from 'wagmi';
import { useAccount } from 'wagmi';
import createInterface from '../contracts/Create.json'
import { ethers } from 'ethers';

function CreateBox() {

  const [count, setCount] = useState(0);

  const [create, setCreate] = useState(false);
  const [gig, setGig] = useState(""); 
  const [time, setTime] = useState(""); 
  const [price, setPrice] = useState(""); 
  const [payees, setPayees] = useState("")

  const provider = useProvider();

  const {config} = usePrepareContractWrite({
    address: '0xe4D691998f2f22eDD3d9c747521DA42253E76720', 
    abi: createInterface, 
    functionName: 'addService', 
    signerOrProvider: provider, 
    args: [
      gig, 
      (typeof price !== 'undefined' && isNaN(Number(price)) === false && price.toString() !== "")? ethers.utils.parseEther(price).toString(): "0",
      (typeof payees !== 'undefined' && isNaN(Number(payees)) === false && payees.toString() !== "")? payees: "0",
      (typeof time !== 'undefined' && isNaN(Number(time)) === false && time.toString() !== "")? ethers.utils.parseEther(time).toString(): "0",
    ]
  })

  console.log(price);

  const {data, isLoading, isSuccess, write} = useContractWrite(config);
  /*
  (typeof price !== 'undefined' && isNaN(price.toString()) === false && price.toString() !== "")? ethers.utils.parseEther(price).toString(): "0",
      (typeof payees !== 'undefined' && isNaN(payees.toString()) === false && payees.toString() !== "")? payees: "0",
      (typeof time !== 'undefined' && isNaN(time.toString()) === false && time.toString() !== "")? ethers.utils.parseEther(time).toString(): "0",
  */

  //&& typeof price === 'number' 
  //&& typeof payees === 'number'
  //&& typeof time === 'number'

  //ethers.utils.parseEther(price).toString()
  //ethers.utils.parseEther(time).toString()

  //console.log(ethers.utils.parseEther(price).toString())
  const handleAddService = () => {
    write();
  }


  return (
    <Container>
      <Wrapper1>
          <Top>
            <TopWrapper id="inputID" placeholder="Service you provide" value={gig} maxLength={50} onChange={e => {setCount(e.target.value.length); setGig(e.target.value)}}></TopWrapper>
          </Top>
          <Counter>{count}/50</Counter>
          <Middle>
            <Left>
              <InputWrapper id="inputID" placeholder="Price (ETH)" value={price} onChange={(e) => setPrice(e.target.value)}></InputWrapper>
            </Left>
            <Right>
              <InputWrapper id="inputID" placeholder="Days to deliver" value={time} onChange={(e) => setTime(e.target.value)}></InputWrapper>
            </Right>
          </Middle>
          <Bottom>
            <LeftBottom>
              <InputWrapper id="inputID" placeholder="Copies" value={payees} onChange={(e) => setPayees(e.target.value)}></InputWrapper>
            </LeftBottom>
            <RightBottom>
              <Validate onClick={handleAddService}>Validate</Validate>
            </RightBottom>
          </Bottom>
      </Wrapper1>
      <Wrapper2></Wrapper2>
      <Wrapper3></Wrapper3>
    </Container>
  )
}

export default CreateBox

/*<Top></Top>
      <Middle></Middle>
      <Bottom></Bottom>*/

const Container = styled.div`
  position: fixed; 
  height: 350px; 
  width: 550px; 
  background: #C0AA91;
  border: solid 6px #222222;
  position: fixed;
  top: 170px; 
  //bottom: 0; 
  //margin-top: auto; 
  //margin-bottom: auto; 
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
  z-index: 7;
  @media(max-width:572px) {
    width: 95%;
  }
`;

const Currency = styled.text`
  background: transparent; 
  font-size: 20px; 
  font-weight: 300; 
  color: #222222;
  position: absolute;
  margin-left: 160px;
  margin-top: 5px;
  @media(max-width: 572px) {
    font-size: 4vw;
    margin-left: 130px;
  }
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
  /*@media(max-width: 435px) {
    width: 95%
  }*/
`; 

const Counter = styled.text`
  color: #222222; 
  font-size: 13px; 
  font-weight: 300; 
  background: transparent;
  position: absolute;
  right: 20px; 
  top: 60px;
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

const Top = styled.div`
  width: 100%; 
  height: 34%;
  background: transparent;
  display: flex; 
  justify-content: center; 
  align-items: center;
  padding: 10px;
`; 

const TopWrapper = styled.input`
  height: 100%; 
  width: 100%;
  border: solid 2px #222222;
  background: #828282;
  padding: 5px;
  decoration: none;
  font-weight: 300;
  font-size: 15px;
  color: #222222;
  font-family: roboto mono;
`;

const Middle = styled.div`
   width: 100%; 
  height: 36%;
  background: transparent;
  display: flex; 
  flex-direction: row;
`; 

const Left = styled.div`
  height: 100%; 
  width: 50%; 
  background: transparent;
  display: flex; 
  justify-content: center; 
  align-items: center;
  padding: 10px;
  @media(max-width: 429px) {
    width: 40%;
  }
`; 

const Right = styled.div`
  height: 100%; 
  width: 50%; 
  background: transparent;
  display: flex; 
  justify-content: center; 
  align-items: center;
  padding: 10px;
  @media(max-width: 429px) {
    width: 60%;
  }
`;

const InputWrapper = styled.input`
  height: 100%; 
  width: 100%;
  border: solid 2px #222222;
  background: #828282;
  padding: 5px;
  decoration: none;
  font-weight: 200;
  //font-size: 15px;
  //font-size: 30px;
  color: #222222;
  font-family: roboto mono;
  font-size: 28px;
  @media(max-width: 572px) {
    font-size: 4vw;
  }
`; 

const Bottom = styled.div`
  width: 100%; 
  height: 30%;
  display: flex; 
  flex-direction: row;
  background: transparent;
  //border-top: solid 2px #222222;
  justify-content: end;
`;

const RightBottom = styled.div`
  height: 100%; 
  width: 45%;
  background: #828282;
  display: flex; 
  justify-content: center; 
  align-items: center;
  padding : 15px;
  border-top: solid 2px #222222; 
  border-left: solid 2px #222222;
`;

const LeftBottom = styled.div`
  height: 100%; 
  width: 55%;
  background: transparent;
  display: flex; 
  justify-content: center; 
  align-items: center;
  padding : 7px;
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
  @media(max-width:572px ) {
    font-size: 4vw;
  }
`;
import React, { useState } from 'react'
import styled from 'styled-components'

function CreateBox() {

  const [count, setCount] = useState(0);

  return (
    <Container>
      <Wrapper1>
          <Top>
            <TopWrapper id="inputID" placeholder="Gig" maxLength={50} onChange={e => setCount(e.target.value.length)}></TopWrapper>
          </Top>
          <Counter>{count}/50</Counter>
          <Middle>
            <Left>
              <InputWrapper id="inputID" placeholder="Price"></InputWrapper>
            </Left>
            <Right>
              <InputWrapper id="inputID" placeholder="How many times?"></InputWrapper>
            </Right>
          </Middle>
          <Bottom>
            <RightBottom>
              <Validate>Validate</Validate>
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
  position: absolute; 
  height: 350px; 
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
`; 

const Right = styled.div`
  height: 100%; 
  width: 50%; 
  background: transparent;
  display: flex; 
  justify-content: center; 
  align-items: center;
  padding: 10px;
`;

const InputWrapper = styled.input`
  height: 100%; 
  width: 100%;
  border: solid 2px #222222;
  background: #828282;
  padding: 5px;
  decoration: none;
  font-weight: 200;
  font-size: 15px;
  font-size: 30px;
  color: #222222;
`; 

const Bottom = styled.div`
   width: 100%; 
  height: 30%;
  display: flex; 
  flex-direction: row;
  background: #828282;
  border-top: solid 2px #222222;
  justify-content: end;
`;

const RightBottom = styled.div`
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
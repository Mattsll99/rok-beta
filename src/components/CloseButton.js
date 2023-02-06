import React from 'react'
import styled from 'styled-components'

function CloseButton() {
  return (
    <ButtonContainer>
      <ButtonWrapper>
        <LeftLine></LeftLine>
        <RightLine></RightLine>
      </ButtonWrapper>
    </ButtonContainer>
  )
}

export default CloseButton

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
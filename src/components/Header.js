import React from 'react'
import styled from 'styled-components'
import Logo from './Logo';
import { ConnectButton } from '@rainbow-me/rainbowkit';

function Header() {
  return (
    <Container>
      <Logo />
      <ConnectButton style={{background: 'red'}}/>
    </Container>
  )
}

export default Header

const Container = styled.div`
  height: 80px; 
  width: 100%; 
  padding-left: 30px; 
  padding-right: 30px;
  padding-top: 5px;
  background: transparent;
  position: fixed;
  top: 0;
  display: flex; 
  flex-direction: row; 
  align-items: center; 
  justify-content: space-between;
  @media(max-width: 411px) {
    padding-left: 5px; 
    padding-right: 5px;
  }
`; 
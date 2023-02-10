import React from 'react'
import styled from 'styled-components'
import ProvidePage from './ProvidePage';
import ShareCreate from './ShareCreate';
import { Route, Routes , BrowserRouter} from 'react-router-dom';
import { useAccount, useProvider } from 'wagmi';
import { useContractRead } from 'wagmi';
import createInterface from '../contracts/Create.json'

function Interface() {
  //Access the address of the provider 
  const provider = useProvider();

  const {address, isConnecting, isDisconnected} = useAccount();

  const {data, isError, isDataLoading} = useContractRead({
    address: '0x170D5b724C50b609489E9aae1b1D45C2762Ac823', 
    abi: createInterface, 
    functionName: 'seeAllServices', 
    signerOrProvider: provider,
    args: [address], //address of the user
    watch: true,
  })

  const serviceProvider = (address !== undefined)? address.toString() : "/";
  return (
    
    <Container>
      <Routes>
        <Route path="/" element={<ProvidePage />}/>
        <Route path={serviceProvider} element={<ShareCreate serviceProvider={serviceProvider}/>}/>
      </Routes>
    </Container>
    
  )
}

export default Interface

const Container = styled.div``; 

/* 
<Routes>
        <Route path="/" element={<ProvidePage />}/>
        <Route exact path="/toCreate" element={<ShareCreate/>} />
        <Route path='test' element={<ShareCreate />}/>
     </Routes>
*/
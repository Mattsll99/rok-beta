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
    address: '0xe4D691998f2f22eDD3d9c747521DA42253E76720', 
    abi: createInterface, 
    functionName: 'getAllProviders', 
    signerOrProvider: provider,
    watch: true,
  })

  //const serviceProvider = (address !== undefined)? address.toString() : "/";
  return ( 
    <Container>
      <Routes>
        <Route path="/" element={<ProvidePage />}/>
        {
          data?.map((serviceProvider, i) => (
            <Route path={serviceProvider} element={<ShareCreate serviceProvider={serviceProvider}/>}/>
          ))
        }
      </Routes>
    </Container>
    
  )
}

/* 
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
*/

export default Interface

const Container = styled.div``; 

/* 
<Routes>
        <Route path="/" element={<ProvidePage />}/>
        <Route exact path="/toCreate" element={<ShareCreate/>} />
        <Route path='test' element={<ShareCreate />}/>
     </Routes>
*/
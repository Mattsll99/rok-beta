import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import LaunchCard from './components/LaunchCard';
import Regirstered from './components/Regirstered';
import '@rainbow-me/rainbowkit/styles.css';
import {getDefaultWallets, RainbowKitProvider, darkTheme, ConnectButton} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, polygonMumbai } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import Section from './components/Section';
import ProvidePage from './components/ProvidePage';
import PaymentWrap from './components/PaymentWrap';
import CreateBox from './components/CreateBox';

const alchemyKey = 'w7eEPiIoWugKjoU7vCuJhmfwAihhPNqQ';


//https://billyjitsu.hashnode.dev/the-rainbowkit-wagmi-guide-i-wish-i-had

const {chains, provider} = configureChains(
  [polygonMumbai], 
  [
    alchemyProvider({apiKey: alchemyKey}), 
    publicProvider(),
  ]
)

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})
//#3B3395
function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider 
        chains={chains}
        theme = {darkTheme({
          borderRadius: "large",
          accentColor: "#222222",
          //actionButtonBorder: "#222222",
          overlayBlur: "small", 
          //fontStack: "rounded",
          fontStack: "roboto mono", 
        })}
      >
    <Container>
      <Header />
      <ProvidePage />
      <CreateBox />
    </Container>
    </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;

const Container = styled.div`
  width: 100vw; 
  height: 100vh;
  background: #CDC6BE
`;
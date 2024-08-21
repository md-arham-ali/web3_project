import React, { useState } from 'react';
import './App.css';
import Header from "./components/Header";
import Tokens from './components/Tokens';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Web3Modal from "web3modal";
const { ethers } = require("ethers");


// const web3Modal = new Web3Modal({
//   cacheProvider: true, //  Cache the provider between sessions, to provide consistency between sessions
// });

function App() {

  // const [account, setAccount] = useState(null);
  // const [instance, setInstance] = useState(null);

  // const connectWallet = async () => {
  //   try {
  //     const web3Modal = new Web3Modal({
  //       // providerOptions: // Add provider options if needed
  //     });
     
  //     const instance = await web3Modal.connect();// the connect function to connect wallet 
  //     setInstance(instance);

  //     const provider = await web3Modal.connect();// used for interactiong with blockchain, #LEARN HOW
  //     const ethersProvider = new ethers.providers.Web3Provider(provider);
  //     const signer = ethersProvider.getSigner();   

  //     const address = await signer.getAddress();   // adress of the wallet

  //     setAccount(address);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}> {/*connect={connectWallet} account={account} instance={instance}*/}
        {/* <Route path="swap" element={<Swap isConnected={isConnected} address={address} />} /> */}
        <Route path="tokens" element={<Tokens />} />
        {/* <Route path="" element={< />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>

    
  )


    
   
}

export default App;

 

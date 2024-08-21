import React from 'react'
import logo from "./moralis-logo.svg";
import Eth from "./eth.svg";
import { Outlet, Link } from "react-router-dom";

function Header({ connect, account, instance }) {

  const isWalletConnected = !!instance;

  return (<header>
     <div className="leftH">
      <img src={logo} alt="logo" className="logo"/>
      <Link to="/home" className="link">Home</Link>
      <Link to="/swap" className="link">
      <div className="headerItem">Swap</div></Link>
      <Link to="/tokens" className="link">
      <div className="headerItem">Tokens</div>
      </Link>
      
      <Link to="/" className="link"><div className="headerItem">Your Watchlist</div></Link>
      </div>
    <div className="rightH">
      < div className="headerItem">
        <img src={Eth} alt="eth" className="eth"/> Ethereum
        </div>
        <div className="connectButton" onClick={connect}>
           {isWalletConnected ? "Wallet Connected" : "Connect Wallet"}
          </div>
    


     </div>
     <Outlet />
  </header>
   
  )
}

export default Header
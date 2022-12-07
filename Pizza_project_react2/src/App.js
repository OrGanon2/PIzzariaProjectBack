
import './App.css';
import {useEffect, useState} from 'react'
import { AppBar, CardHeader, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import ResponsiveAppBar from './Components/NavBar';
import { Route, Routes } from 'react-router';
import AboutComponent from './Components/About';
import OrdersComponent from './Components/Orders/Orders';
import HomeComponent from './Components/Home';
import FooterComponent from './Components/Footer';
import ConnectComponent from './Components/Connect/Connect';
import SignUpComponent from './Components/Connect/SignUp';
import { useNavigate  } from "react-router-dom";
import PizzariasComponent from './Components/Pizzaria/Pizzarias';
import ProfileComponent from './Components/Profile';

function App() {

  const [isConnected, setIsConnected] = useState(false);
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

  function connect() {
    setIsConnected(true);
    setUsername(document?.global?.user?.username);
    navigate('/Home');
  }

  function goToConnect() {
    navigate('Connect');
  }

  function logOut() {
    setIsConnected(false);
    document.global = {};
    setUsername('');
    navigate('Connect');
  }

  function enterIfConnected (element) {
    return (
      <div>
        {isConnected ? element : <button className='go-to-connect' onClick={goToConnect}>You need to connect</button>}
      </div>
    )
  }

  return (
    <div className="App">
      <ResponsiveAppBar username={username} logOut={logOut}></ResponsiveAppBar>
      <Routes>
        <Route path="/" element={<ConnectComponent connect={connect}/>}></Route>
        <Route path="/Profile" element={<ProfileComponent/>}></Route>
        <Route path="/Orders" element={enterIfConnected(<OrdersComponent></OrdersComponent>)}></Route>
        <Route path="/Pizzarias" element={enterIfConnected(<PizzariasComponent></PizzariasComponent>)}></Route>
        <Route path="/Home" element={enterIfConnected(<HomeComponent></HomeComponent>)}></Route>

        <Route path="/Connect" element={<ConnectComponent connect={connect}/>}></Route>
        <Route path="/Signup" element={<SignUpComponent connect={connect}/>}></Route>

        
      </Routes>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;

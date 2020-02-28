import React from 'react';
import './App.css';
import Home from './components/Home'
import { NavLink, Route } from 'react-router-dom';



function App() {
  return <body id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">

      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>                        
            </button>
            <a class="navbar-brand" href="#myPage">Samrat Studio</a>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav navbar-right">
            <li> <NavLink  to="/">HOME</NavLink></li>
              <li> <NavLink  to="/about">ABOUT</NavLink></li>
              <li> <NavLink to="/contact">CONTACT</NavLink></li>
              <li><NavLink to="/product">PRODUCTS</NavLink></li>
              <li><NavLink to="/register">REGISTER</NavLink></li>
              <li><NavLink to="/login">LOGIN</NavLink></li>


            </ul>
          </div>
        </div>
      </nav>
      <Home/>
      </body>
    
}

export default App;

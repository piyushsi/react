import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <h1>Hello world</h1>
      <Home/>
    </div>
    </Router>
   
  );
}

export default App;

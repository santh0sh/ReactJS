import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';

const uname:string="Murthy"
const App = () => {
  return (
    <div className="App">      
        <img src={logo} className="App-logo" alt="logo" />        
        <h1 className="App-title">React  with typescript  by {uname}</h1>
        <Dashboard/>
    </div>
  );
}

export default App;

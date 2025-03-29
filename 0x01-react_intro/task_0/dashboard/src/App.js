import logo from './ALXLogo.png';
import React from 'react';
import ReactDOM from 'react-dom/client';

import './App.css';

function App() {
  return (
    <div className="App-header">
      <header>
        <img src={logo} alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <footer>
          <p>Copyright 2020 - holberton School</p>
        </footer>
      </div>
    </div>
    
  )
} 

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';

import UserList from './providers/users/User'

function App() {
  
  fetch('https://randomuser.me/api/?results=50')
            .then(response => response.json())
            .then(users =>{
                console.log(users)
            })


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

// src/App.js
import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar.js'
import LandingPage from './Components/LandingPage/LandingPage.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <LandingPage />
      </header>
    </div>
  );
}

export default App;
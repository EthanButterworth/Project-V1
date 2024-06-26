// src/App.js
import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import LandingPage from './Components/LandingPage/LandingPage'
import AboutMe from './Components/AboutMe/AboutMe'
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <LandingPage />
        <AboutMe />
        <Footer />
      </header>
    </div>
  );
}

export default App;
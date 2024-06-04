import React, { useState } from 'react'
import './NavBar.css'
import MyLogo from '../../Assets/My-Logo.png'

const NavBar = () => {

    const [isFirstButton, setIsFirstButton] = useState(true);

    const toggleButton = () => {
        setIsFirstButton(!isFirstButton);
    }

  return (
    <div id='NavBar'>
        <a href=''>
          <img src={MyLogo} className='Logo'></img>
        </a>
        {isFirstButton ? (
            <button onClick={toggleButton}>☰</button>
        ) : (
            <button onClick={toggleButton}>x</button>
        )}
    </div>
  )
}

export default NavBar
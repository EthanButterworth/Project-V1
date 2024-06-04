import React, { useState } from 'react'
import './NavBar.css'
import MyLogo from '../../Assets/My-Logo.png'

const NavBar = () => {


  return (
    <div id='NavBar'>
        <a href=''>
          <img src={MyLogo} className='Logo'></img>
        </a>
        {isFirstButton ? (
            <button onClick={handleClick}>☰</button>
        ) : (
            <button onClick={handleClick}>x</button>
        )}
    </div>
  )
}

export default NavBar
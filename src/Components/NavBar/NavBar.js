import React from 'react'
import './NavBar.css'
import MyLogo from '../../Assets/My-Logo.png'

const NavBar = () => {
  return (
    <div id='NavBar'>
      <img src={MyLogo} className='Logo'></img>
    </div>
  )
}

export default NavBar
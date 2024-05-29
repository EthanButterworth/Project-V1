import React from 'react'
import './Navbar.css'
import Hamburger from '../Hamburger/Hamburger'

const Navbar = () => {
  return (
    <div id='Navbar'>
        <a className='Logo'>Company Logo</a>
        <div className='Navbar-Links'>
            <a>Link one</a>
            <a>Link two</a>
            <a>Link three</a>
        </div>
        <Hamburger />
    </div>
  )
}

export default Navbar
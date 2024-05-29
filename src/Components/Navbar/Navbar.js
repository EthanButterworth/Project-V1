import React from 'react'
import './Navbar.css'
import Hamburger from '../Hamburger/Hamburger'

const Navbar = () => {
  return (
    <div id='Navbar'>
        <p>Company Logo</p>
        <div className='Nav-Links'>
            <a>Link one</a>
            <a>Link two</a>
            <a>Link three</a>
        </div>
        <Hamburger />
    </div>
  )
}

export default Navbar
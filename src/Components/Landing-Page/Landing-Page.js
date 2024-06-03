import React from 'react'
import './Landing-Page.css'
import MyLogo from '../../Assets/My-Logo.png'

const LandingPage = () => {
  return (
    <div>
      <a href=''>
        <img src={MyLogo} className='Logo'></img>
      </a>
      <h1>Butter-Log</h1>
      <p>Log with the butter on.</p>
    </div>
  )
}

export default LandingPage
import React from 'react'
import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation.js'

const NavBar = () => {
  return (
    <div>
        <DesktopNavigation />
        <MobileNavigation />
    </div>
  )
}

export default NavBar
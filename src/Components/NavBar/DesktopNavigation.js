import NavLinks from "./NavLinks"
import './NavBar.css'
import MyLogo from '../../Assets/My-Logo.png'

const DesktopNavigation = () => {
  return (
    <nav className='DesktopNavigation'>
        <a href=''><img src={MyLogo} className='Logo'></img></a>
        <NavLinks />
    </nav>
  )
}

export default DesktopNavigation
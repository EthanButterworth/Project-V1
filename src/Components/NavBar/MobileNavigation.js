import NavLinks from './NavLinks'
import './NavBar.css'
import MyLogo from '../../Assets/My-Logo.png'
import {MdMenu} from 'react-icons/md'
import {useState} from 'react'
import {MdClose} from 'react-icons/md'

const MobileNavigation = () => {
  const [Click, setclick] = useState(false);

  const Hamburger = <MdMenu className='HamburgerMenu' size='30px' color='black' onClick={() => setclick(!Click)} />

  const Close = <MdClose className='HamburgerMenu' size='30px' color='black' onClick={() => setclick(!Click)} />

  const closeMenu = () => setclick(false);

  return (
    <nav className='MobileNavigation'>
        <a href=''><img src={MyLogo} className='Logo'></img></a>
        {Click ? Close : Hamburger} 
        {Click && <NavLinks />}
    </nav>
  )
}

export default MobileNavigation
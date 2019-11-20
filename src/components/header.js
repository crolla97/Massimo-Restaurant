import React, {useState} from 'react'

import { Link } from 'gatsby'
import Logo from './logo'

const Header = ({ parentCallback }) => {
  const [isOpen, changeState] = useState(false);
  

  return (
    <header>
      <Link to="/"><Logo /></Link>
      <nav className="header-nav">
        <span><Link to="/">Home</Link></span>
        <span><Link to="/menus">Food & Drink</Link></span>
        <span><Link to="/functions">Functions</Link></span>
        <span><Link to="/contact">Contact</Link></span>
      </nav>
      <div className="hamburger" onClick={(() => {
        let newValue = !isOpen
        changeState(!isOpen);
        parentCallback(newValue);
      })}>
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>
    </header>
  )
}

export default Header
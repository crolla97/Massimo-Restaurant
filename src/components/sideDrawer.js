import React from 'react'

import {Link} from 'gatsby'

const SideDrawer = ({ menuOpen }) => {
  const menuClass = menuOpen ? 'drawer open' : 'drawer';

  return (
    <div className={menuClass}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menus">Food & Drinks</Link></li>
        <li><Link to="/functions">Functions</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div>
        <span>5 Kirk Rd, Bearsden, G61 3RG</span>
        <span>0141 942 311</span>
      </div>
    </div>
  )
}

export default SideDrawer
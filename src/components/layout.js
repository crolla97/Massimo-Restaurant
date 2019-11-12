import React, {useState} from "react"

import Header from './header'
import Footer from './footer'
import SideDrawer from './sideDrawer'
import PropTypes from "prop-types"
import "../styles/main.scss"

const Layout = ({ children }) => {
  const [menuState, setMenu] = useState(false)

  const callback =() => {
    setMenu(!menuState);
  }

  return (
    <>
      <Header parentCallback={callback}/>
      <SideDrawer menuOpen={menuState}/>
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

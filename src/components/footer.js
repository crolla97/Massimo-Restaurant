import React from 'react'
import Logo from './logo'

const Footer = () => {

  return (
    <footer>
      <Logo />
      <div className="container">
        <div className="find">
          <h3>Find Us</h3>
          <span>5 Kirk Rd, Bearsden, G61 3RG</span>
        </div>
        <div className="openHours">
          <h3>Opening Times</h3>
          <div className="table">
            <ul className="days">
              <li>Mon-Sat</li>
              <li>Sun</li>
            </ul>
            <ul className="hours">
              <li>10:30-00:00</li>
              <li>16:30-22:00</li>
            </ul>
          </div>
        </div>
        <div className="contact">
          <h3>Contact Us</h3>
          <span>0141 942 3111</span>
          <span>bearsden@massimo-restaurants.com</span>
        </div>
      </div>
      <div className="creator">
        Website by <a href="https://www.crollacreations.com/">Crolla Creations</a>
      </div>
    </footer>
  )
}

export default Footer
import React from 'react'
import Logo from './logo'

const Footer = () => {

  return (
    <footer>
      <Logo />
      <div className="container">
        <div className="find">
          <h3>Find Us</h3>
          <span>5 Kirk Rd, Bearsden, Glasgow</span>
        </div>
        <div className="openHours">
          <h3>Opening Times</h3>
          <div className="table">
            <ul className="days">
              <li>Mon-Thur</li>
              <li>Fri-Sat</li>
              <li>Sun</li>
            </ul>
            <ul className="hours">
              <li>12:00-11:00</li>
              <li>12:00-00:00</li>
              <li>12:00-10:00</li>
            </ul>
          </div>
        </div>
        <div className="contact">
          <h3>Contact Us</h3>
          <span>0141 942 311</span>
          <span>bearsden@massimo-restaurants.com</span>
        </div>
      </div>
      Website by Crolla Creations
    </footer>
  )
}

export default Footer
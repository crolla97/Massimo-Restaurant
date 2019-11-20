import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

export default () => (
  <Layout>
    <div className="thanksContainer">
      <h1>Thank you!</h1>
      <p>Your enquiry form has been sent and you can expect us to get back to you shortly.</p>
      <Link to="/">← Return Home</Link>
      <br/>
      <Link to="/menus">View Our Menus →</Link>
    </div>
  </Layout>
)
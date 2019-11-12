import React from "react"

import Layout from "../components/layout"
import LeafletMap from "../components/leafletmap"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="contactContainer">
      <section>
        <h1>Contact Us</h1>
        <span>0141 942 311</span>
        <span>bearsden@massimo-restaurants.com</span>
        <h1>Address</h1>
        <span>5 Kirk Rd, Bearsden, Glasgow</span>
        <span>Short stay car park at the end of Kirk Road</span>
        <h1>Opening Times</h1>
        <div className="table">
          <ul>
            <li>Mon-Thur</li>
            <li>Fri-Sat</li>
            <li>Sun</li>
          </ul>
          <ul>
            <li>12:00-23:00</li>
            <li>11:00-00:00</li>
            <li>12:00-22:00</li>
          </ul>
        </div>
      </section>
      <section>
        {typeof window !== 'undefined' &&
          <LeafletMap
            position={[55.92077,-4.33371]}
            zoom={17}
            markerText={"Massimo Restaurant, 5 Kirk Road, Bearsden"}
          />
        }
      </section>
    </div>
  </Layout>
)

export default ContactPage

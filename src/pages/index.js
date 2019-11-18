import React from "react"

import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Logo from '../components/logo'
import LeafletMap from '../components/leafletmap'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <div className="landing landing-home">
      <div className="landingPic">
        <Img fluid={props.data.landing.childImageSharp.fluid} />
      </div>
      <div className="logoOverlay">
        <Logo />
      </div>
    </div>
    <div className="intro">
      <span>An Italian</span>
      <div className="italian-flag">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>
      <h1>EXPERIENCE</h1>
      <div className="text-block">
        <p>
        Nestled in the heart of Bearsden, Massimo is a family friendly restaurant and   has been an integral part of the community since its doors opened in 2001.
        </p>
      </div>
    </div>
    <section className="home home-1">
      <div className="card card-main card-main1">
        <h1>Food</h1>
        <div className="text-block">
          <p>Our dishes follow a modern Italian cuisine, with traditional values towards fresh ingredients and preparation. Dining with us should be a relaxed and enjoyable experience, with each meal prepared freshly and to your taste</p>
        </div>
        <Link to="/menu">MENU</Link>
      </div>
      <div className="card card-img">
        <Img fluid={props.data.pizza.childImageSharp.fluid} />
      </div>
    </section>
    <section className="home home-2">
      <div className="card card-main card-main2">
        <h1>Private Dining<br/>& Functions</h1>
        <div className="text-block">
          <p>Leave it to us to be the host for your event. With a large dining area we can accomidate up to 100 people</p>
        </div>
        <Link to="/functions">VIEW MORE</Link>
      </div>
      <div className="card card-img">
        <Img fluid={props.data.diningRoom.childImageSharp.fluid} />
      </div>
    </section>
    <section>
      <div className="dbl-card">
        <Img fluid={props.data.outside.childImageSharp.fluid} />
        <div className="text-block">
          <h1>BOOK A TABLE</h1>
          <Link to="/contact">CONTACT US</Link>
        </div>
        <div className="overlay"></div>
      </div>
    </section>
    <section className="home home-3">
      <div className="card card-main card-main3">
        <h1>Bar</h1>
        <div className="text-block">
          <p>From Italian Beers on tap to Scottish Whiskeys we're sure there is something to take to your liking. Take a seat and enjoy a light bite or settle in for the night</p>
        </div>
        <Link to="/menu">MENU</Link>
      </div>
      <div className="card card-img">
        <Img fluid={props.data.wine.childImageSharp.fluid} />
      </div>
    </section>
    <section className="home home-4"> 
      <div className="card card-main card-main4">
        <h1>Where to find us</h1>
        <p>3/5 Kirk Rd, Bearsden, Glasgow G61 3RG</p>
        <a href="https://goo.gl/maps/v5th8SMUjgsktDCk9" rel="noopener noreferrer">GET DIRECTIONS</a>
      </div>
      <div className="card card-img">
        {typeof window !== 'undefined' &&
          <LeafletMap
            position={[55.92077,-4.33371]}
            zoom={18}
            markerText={"Massimo Restaurant, 5 Kirk Road, Bearsden"}
          />
        }
      </div>
    </section>
  </Layout>
)

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    landing: file(relativePath: { eq: "images/massimo-dining&bar.jpg" }) {
      ...fluidImage
    }
    pizza: file(relativePath: { eq: "images/cutting-pizza.jpg" }) {
      ...fluidImage
    }
    diningRoom: file(relativePath: { eq: "images/dining-room.jpg" }) {
      ...fluidImage
    }
    outside: file(relativePath: { eq: "images/outside.jpg" }) {
      ...fluidImage
    }
    wine: file(relativePath: { eq: "images/wine-bottles.jpg" }) {
      ...fluidImage
    }
    map: file(relativePath: { eq: "images/map.png" }) {
      ...fluidImage
    }
  }
`;

export default IndexPage

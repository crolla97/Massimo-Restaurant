import React from "react"

import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from "../components/layout"
import SEO from "../components/seo"

const MenuPage = (props) => {
  
  return (
    <Layout>
      <SEO title="Menu" />
      <div className="landing landing-menu">
        <Img fluid={props.data.pizzaOven.childImageSharp.fluid} />
        <span>FOOD & DRINKS<br/>MENUS</span>
      </div>
      <div className="container">
        <section className="menu">
          <div className="card card-main card-main1">
            <h1>Food</h1>
            <p>We are able to cater and adapt to any intolerances and dietary requirements</p>
            <a href={props.data.mainMenu.publicURL} rel="noopener noreferrer" target="_blank">À La Carte</a>
            <a href={props.data.lunchMenu.publicURL} rel="noopener noreferrer" target="_blank">Lunch</a>
            <a href={props.data.takeawayMenu.publicURL} rel="noopener noreferrer" target="_blank">Takeaway</a>
          </div>
          <Img fluid={props.data.pasta.childImageSharp.fluid} />
        </section>
        <section className="menu">
          <div className="card card-main card-main2">
            <h1>Bar</h1>
            <p>Whet your whistle from the lists below</p>
            <a href={props.data.wineMenu.publicURL} rel="noopener noreferrer" target="_blank">Wine Menu</a>
          </div>
          <Img fluid={props.data.wine.childImageSharp.fluid} />
        </section>
      </div>
    </Layout>
  )
}

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
    pizzaOven: file(relativePath: { eq: "images/massimo-pizza.jpg" }) {
      ...fluidImage
    }
    pasta: file(relativePath: { eq: "images/massimo-pasta.JPG" }) {
      ...fluidImage
    }
    wine: file(relativePath: { eq: "images/wine-bottles.JPG" }) {
      ...fluidImage
    }
    mainMenu: file(name: { eq: "Main-Menu" }) {
      publicURL
    }
    lunchMenu: file(name: { eq: "Lunch-Menu" }) {
      publicURL
    }
    takeawayMenu: file(name: { eq: "Take-Out" }) {
      publicURL
    }
    wineMenu: file(name: { eq: "Wine-Menu" }) {
      publicURL
    }
  }
`;

export default MenuPage

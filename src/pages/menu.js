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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
            <a href="#">Main Menu</a>
            <a href="#">Lunch Menu</a>
            <a href="#">Takeaway Menu</a>
          </div>
          <Img fluid={props.data.dinner.childImageSharp.fluid} />
        </section>
        <section className="menu">
          <div className="card card-main card-main2">
            <h1>Bar</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
            <a href="#">Bar Menu</a>
            <a href="#">Cocktail Menu</a>
          </div>
          <Img fluid={props.data.dinner.childImageSharp.fluid} />
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
    dinner: file(relativePath: { eq: "images/pasta-pizza.jpg" }) {
      ...fluidImage
    }
  }
`;

export default MenuPage

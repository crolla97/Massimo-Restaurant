import React from "react"

import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from "../components/layout"
import SEO from "../components/seo"

const FunctionsPage = (props) => {
  
  return (
    <Layout>
      <SEO title="Functions" />
      <div className="landing landing-functions">
        <Img fluid={props.data.landing.childImageSharp.fluid} />
        <div className="imageOverlay"></div>
        <span>PRIVATE DINING<br/>&<br/>FUNCTIONS</span>
      </div>
      <div className="functionsContainer">
        <section className="functions">
          <div className="card card-main card-main1">
            <h1>Functions at Massimos</h1>
            <p>Celebrate those important milestones and occasions in our restaurant. Christenings, Private Parties, Engagements, Baby Showers and much more, we host and can arrange a bespoke function or celebration that will be truly memorable.</p>
            <span>ENQUIRE BELOW</span>
          </div>
          <Img fluid={props.data.celebration.childImageSharp.fluid} />
        </section>
        <section className="form">
          <span>Call or fill out our function enquiry form</span>
          <span>0141 942 3111</span>
          <form method="post" action="#" onSubmit={(e) => {
            e.preventDefault()
          }}>
            <label>
              Your Name
              <input type="text" name="name" id="name" />
            </label>
            <label>
              Your Email
              <input type="email" name="email" id="email" />
            </label>
            <label>
              Phone
              <input type="text" name="subject" id="subject" />
            </label>
            <label>
              Message
              <textarea name="message" id="message" rows="5" />
            </label>
            <input type="reset" value="CLEAR" className="clear"/>
            <button type="submit">SEND MESSAGE</button>
          </form>
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
    landing: file(relativePath: { eq: "images/massimo-bar.jpg" }) {
      ...fluidImage
    }
    celebration: file(relativePath: { eq: "images/celebration.jpg" }) {
      ...fluidImage
    }
  }
`;

export default FunctionsPage

import React, { useState } from "react"

import { graphql } from 'gatsby';
import useForm from 'react-hook-form';
import Img from 'gatsby-image';
import Layout from "../components/layout"
import SEO from "../components/seo"

const FunctionsPage = (props) => {
  const [form, changeValue] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const { register, handleSubmit, reset, errors } = useForm();
  const onSubmit = (data, e) => {
    if (errors !== undefined) {
      alert('Success');
      e.target.reset();
    }
  };
  
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
          <div className="card card-img">
            <Img fluid={props.data.celebration.childImageSharp.fluid} />
          </div>
        </section>
        <section className="form">
          <span>Call or fill out our enquiry form</span>
          <span>0141 942 3111</span>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <label>
              Your Name
              <input
                type="text"
                name="Name"
                ref={register({required: true, maxLength: 80})}
              />
              {errors.Name && <p>This is required</p>}
            </label>
            <label>
              Your Email
              <input
                type="text"
                name="Email"
                ref={register({required: true, pattern: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i})}
              />
              {errors.Email && <p>Invalid Email</p>}
            </label>
            <label>
              Phone
              <input
                type="tel" 
                name="Mobile"
                ref={register({required: true, minLength: 6, maxLength: 12})}
              />
              {errors.Mobile && <p>This is required</p>}
            </label>
            <label>
              Message
              <textarea
                name="Message"
                ref={register({required: true})}
              />
              {errors.Message && <p>This is required</p>}
            </label>
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

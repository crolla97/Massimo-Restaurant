import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "images/logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.logo.childImageSharp.fluid} />
}

export default Image
import React from "react"
import { graphql } from "gatsby"

// import { FaShoppingCart } from "react-icons/fa"

import Layout from "../components/layout"
// import SEO from "../components/seo"
import IndexHeroImage from "../components/globals/IndexHeroImage"
import Info from "../components/home/Info"

const AboutPage = ({ data }) => (
  <Layout>
    <IndexHeroImage
      img={data.img.childImageSharp.fluid}
      title="About Us"
      styleClass="about-background"
    />
    <Info />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "about-background.jpeg"}){
     childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default AboutPage

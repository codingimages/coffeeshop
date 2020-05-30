import React from "react"
import { graphql } from "gatsby"

// import { FaShoppingCart } from "react-icons/fa"

import Layout from "../components/layout"
// import SEO from "../components/seo"
import IndexHeroImage from "../components/globals/IndexHeroImage"
import Info from "../components/home/Info"

const IndexPage = ({ data }) => (
  <Layout>
    <IndexHeroImage
      img={data.img.childImageSharp.fluid}
      title="Coffee Shop Online"
      styleClass="default-background"
    />
    <Info />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "default-background.jpeg"}){
     childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

console.log(query)

export default IndexPage

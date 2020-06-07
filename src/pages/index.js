import React from "react"
import { graphql } from "gatsby"

// import { FaShoppingCart } from "react-icons/fa"

import Layout from "../components/layout"
// import SEO from "../components/seo"
import IndexHeroImage from "../components/globals/IndexHeroImage"
import Info from "../components/home/Info"
import Menu from "../components/home/Menu"
import Products from "../components/home/Products"
import Contact from "../components/home/Contact"

const IndexPage = ({ data }) => (
  <Layout>
    <IndexHeroImage
      img={data.img.childImageSharp.fluid}
      title="Coffee Shop Online"
      styleClass="default-background"
    />
    <Info />
    <Menu items={data.menu} />
    <Products />
    <Contact />
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
  menu: allContentfulCoffeeItem {
    edges {
      node{
        id
        title
        description{
          description
        }
        price
        category
        image{
          fixed(width: 50, height: 50){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`

export default IndexPage

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import "./layout.css"
import "./bootstrap.css"
import Navbar from "./globals/Navbar"
import Footer from "../components/globals/Footer"

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
)

export default Layout

import React from "react"
import PropTypes from "prop-types"
import Footer from "./footer"
import Nav from "./nav";

const Layout = props => (
<div id="outer-container-layout">
  <Nav/>  
  <div id="page-wrap-layout">
    {props.children}
    <Footer />
  </div>
</div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

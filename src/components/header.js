import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Section from './section';

const Header = (props) => (
  <Content>
    <Section className="hero">
      <h1>{props.siteTitle}</h1>
      {props.children}
    </Section>
  </Content>
)
Header.propTypes = {
  siteTitle: PropTypes.string,
}
Header.defaultProps = {
  siteTitle: `Default boilerplate`,
}
export default Header

const Content = styled.div`
  background-color: var(--header-bg); 
  height: 50vh;
  overflow: hidden;
  padding: 1rem 0;
`

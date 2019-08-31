/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Header from "./old-header"
import "./styles.css"

const Container = styled.div`
  margin: 0 auto;
  max-width: 1600;
  padding: 0px 2.5rem 1.45rem;

  @media (max-width: 425px) {
    padding: 0 1.25rem 1.45rem;
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      {/* <div
        style={{
          margin: `0 auto`,
          maxWidth: 1600,
          padding: `0px 2.5rem 1.45rem`,
          // paddingTop: '2.5rem',
        }}
      > */}
      <Container>
        <main>{children}</main>
        {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

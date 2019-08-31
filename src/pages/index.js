import React, {useEffect} from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
import MobileNav from "../components/mobile-nav"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Body = styled.div`
  max-width: 1440px;
`;

export default function IndexPage() {
  // const dispatch = useDispatch()
  const menuState = useSelector(state => state.menuState)

  // useEffect(() => {
  //   dispatch({type: "CLOSE"})
  // },[])

  // function handleTabSwitch(value) {
  //   setActive(value);
  // }

  return (
    <Layout>
      <SEO title="John Lim" />
      <Header/>
      {
        menuState ?
        <MobileNav /> :
        <>
          <Wrapper>
            <Body>
              <h1>Hi people</h1>
              <p>Welcome to your new Gatsby site.</p>
              <p>Now go build something great.</p>
              <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <Image />
              </div>
            </Body>
          </Wrapper>
          <Link to="/nimbus/">Go to page 2 or page page or whatever</Link>
        </>
      }
  </Layout>
  )
}

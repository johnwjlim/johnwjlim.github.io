import React, {useState, useEffect} from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"
import MobileNav from "../components/mobile-nav"
import Header from "../components/header"

import Showcase from "../components/nimbus/showcase"
import SurveyIdeation from "../components/nimbus/survey-ideation"
import Solution from "../components/nimbus/flows-wireframes"
import HighFidelity from "../components/nimbus/high-fidelity"
import Redesign from "../components/nimbus/redesign"
import PersonalThoughts from "../components/nimbus/personal-thoughts"

import { sections } from "../components/constants"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export default function Nimbus() { 
  const [active, setActive] = useState(0)
  const menuState = useSelector(state => state.menuState)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch({type: "CLOSE"})
  // },[])

  function handleTabSwitch(value) {
    setActive(value);
  }

  function renderActiveSection() {
    switch (active) {
      case 0 : 
        return <Showcase onChange={handleTabSwitch} active={active} />
      case  1:
        return <SurveyIdeation onChange={handleTabSwitch} active={active} />
      case  2:
        return <Solution onChange={handleTabSwitch} active={active}/>
      case 3:
        return <HighFidelity onChange={handleTabSwitch} active={active} />
      case 4:
        return <Redesign onChange={handleTabSwitch} active={active} />
      case 5:
        return <PersonalThoughts onChange={handleTabSwitch} active={active} />
      default:
        return <Showcase onChange={handleTabSwitch} active={active} />
    }
  }

  return (
    <Layout>
      <SEO title="Nimbus" />
      <Header pageTitle={"Nimbus"} />
      {
        menuState ?
          <MobileNav components={sections} active={active} onChange={handleTabSwitch}/>
        :
        <Wrapper>
            {
              renderActiveSection()
            }
          <Nav components={sections} active={active} onChange={handleTabSwitch}/>
        </Wrapper>
      }
    </Layout>
  )
}




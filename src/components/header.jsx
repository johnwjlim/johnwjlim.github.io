import React, { useState } from "react"
import styled from "styled-components"
import {Link} from "gatsby"

const Container = styled.div`
  padding: 1.5rem 0;
  display: flex;
`

const Title = styled.h2`
  margin: 0;
  letter-spacing: -0.3px;
  font-weight: 700;
  color: #111111;
  font-size: 1.4rem;

  @media (max-width: 425px) {
    font-size: 1.25rem
  }

  // &:hover {
  //   color: #a5a5a5;
  //   font-weight: 800;
  //   letter-spacing: -0.5px;
  // }
`

const SecondaryTitle = styled(Title)`
  color: #c5c5c5;
  font-weight: 800;
  letter-spacing: -0.5px;
`

const Subtitle = styled.p`
  font-weight: 300;
  font-size: 1.2rem;  
  margin: 0;
  margin-left: 1.5rem;
  padding-left: 1.5rem;
  text-align: bottom;   
  border-left: 1px solid #767676;
  color: #333333;

  @media (max-width: 425px) {
    margin-left: 0.9rem;
    padding-left: 0.9rem;
    font-size: 1rem;
  }

`
const StyledLink = styled(Link)`
  text-decoration: none;
`;


export default function Header(props) {
  const [title, setTitle] = useState("John Lim")

  const [hover, setHover] = useState(false)

  return (
    <Container>
      <StyledLink 
        to="/"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {
          hover ?
          <SecondaryTitle>Make It Better.</SecondaryTitle> :
          <Title>John Lim</Title>
        }
      </StyledLink>
      {
        props.pageTitle ?
        <>
          <Subtitle>{props.pageTitle}</Subtitle> 
        </>: <></>
      }
    </Container>
  )
}
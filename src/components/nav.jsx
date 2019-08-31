import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.nav`
  width: 15em;
  @media (max-width: 768px) {
    display: none; 
  }
`

const List = styled.ul`
  list-style: none;
  margin-bottom: 3.5rem;
`
const ListItem = styled.li`
`;


const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  line-height: 1.7;
  transition: 0.2s;

  :hover {
    // text-decoration: underline;
    color: #ffb7b7;
  }
`

const StyledText = styled.a`
  line-height: 1.7;
  color: #111111;
  margin: 0;
  font-weight: 500;

  :hover {
    // text-decoration: underline;
    // cursor: pointer;  
  }   
`

const GreyText = styled(StyledText)`
  color: #767676;
  font-weight: 400;
  transition: 0.2s;

  :hover {
    color: #ffb7b7;
    cursor: pointer;  
  }  
`

const DetailText = styled.p`
  color: #767676;
  margin-bottom: 3.5rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    display: none
  }

`

export default function Nav(props) {
  const [sections, setSections] = useState(props.components)


  function handleComponents() {
    if (sections) {
      return sections.map((section, index) => {
        if (index === props.active) {
          return (
            <ListItem key={index} onClick={() => props.onChange(index)}>
              <StyledText>{sections[index]}</StyledText>
            </ListItem>
          )
        } else {
          return (
            <ListItem key={index} onClick={() => props.onChange(index)}>
              <GreyText style={{margin: "0", lineHeight: "1.7"}}>{sections[index]}</GreyText>
            </ListItem>
          )
        }
      })
    }
  }

  return (
    <Container>
      <List>
        <ListItem>
          <StyledLink to="/">Home</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/">About</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/">Resume</StyledLink>
        </ListItem>
      </List>
 
      <List>
        {/* <DetailText>Nimbus <br/> Mobile App Design</DetailText> */}
        {
          handleComponents()
        }
      </List>
    </Container>
  )
}
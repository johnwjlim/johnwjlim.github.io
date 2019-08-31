import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useDispatch } from 'react-redux'

const Container = styled.nav`
  // width: 15em;
`

const List = styled.ul`
  list-style: none;
  margin-bottom: 3.5rem;
  text-align: center;
`
const ListItem = styled.li`
`;


const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.1rem;
  line-height: 1.7;

  :hover {
    text-decoration: underline;
  }
`

const StyledText = styled.a`
  line-height: 1.7;
  color: #111111;
  margin: 0;
  font-weight: 500;
  font-size: 1.1rem;

  :hover {
    text-decoration: underline;
    cursor: pointer;  
  }   
`

const GreyText = styled(StyledText)`
  color: #767676;
  font-weight: 400;
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
  const dispatch = useDispatch()

  function handleClick(index) {
    props.onChange(index)
    dispatch({type: "CLOSE"})
  }


  function handleComponents() {
    if (sections) {
      return sections.map((section, index) => {
        if (index === props.active) {
          return (
            <ListItem key={index} onClick={() => handleClick(index)}>
              <StyledText>{sections[index]}</StyledText>
            </ListItem>
          )
        } else {
          return (
            <ListItem key={index} onClick={() => handleClick(index)}>
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
          <StyledLink onClick={() => dispatch({type: "CLOSE"})} to="/">Home</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink onClick={() => dispatch({type: "CLOSE"})}  to="/">About</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink onClick={() => dispatch({type: "CLOSE"})}  to="/">Resume</StyledLink>
        </ListItem>
      </List>
 
      <List>
        {
          handleComponents()
        }
      </List>
    </Container>
  )
}
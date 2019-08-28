import React from "react"
import styled from "styled-components"

const Container = styled.div`
  max-width: 1440px;
`;

export default function PersonalThoughts() {
  return (
    <Container>
      <h1>Hi people</h1>
      <p>This is the Personal Thoughts component.</p>
      <p>Now go build something great.</p>
    </Container>
  )
}
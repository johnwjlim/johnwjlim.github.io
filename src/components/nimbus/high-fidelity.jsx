import React from "react"
import styled from "styled-components"

import { Container, OffsetBody, TextBlock, RightButton, LeftButton, ButtonHeader, ButtonText, ImageWrapper, TextQuote, sections } from "../constants"
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"

const ListItem = styled.li`
  line-height: 1.5;
  font-weight: 500;
  margin-bottom: 1rem;  
`
const StyledList = styled.ul`
  margin: 2.5rem 0;

  @media (max-width: 1240px) {
    padding-left: 1rem;
  }
`;

const ImageWithMargin = styled(ImageWrapper)`
  margin-top: 3.5rem;
`

export default function Iteration(props) {
  const data = useStaticQuery(graphql`
    query {
      Home: file(relativePath: { eq: "high-fi-1.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Listing: file(relativePath: {eq: "high-fi-location.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Trips: file(relativePath: {eq: "high-fi-trips.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Profile: file(relativePath: {eq: "high-fi-profile.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ProfileDetail: file(relativePath: {eq: "high-fi-profile-detail.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Container>
      <OffsetBody>
        <p><strong>Defining The Feature Set.</strong></p>
        <TextBlock>
          <p>
          At this stage in the project, we’ve established the viability of the concept and validated our two primary use cases. It was now time to spec out the features that we wanted included in our app. Beyond our primary goal of expanding access to the outdoors by connecting outdoor explorers with one another and having them adventure together, we were also keen on addressing some of the other pain points associated with exploring the outdoors. 
          </p>
        </TextBlock>
        <TextBlock>
          <p>
          Our previous rounds of research and user tests had given us a fair idea of the issues and annoyances that users were likely to encounter, and they ran the gamut from the planning and preparation before a trip to issues encountered during a trip itself. Some of the pain points we identified included: 
          </p>
        </TextBlock>
        <TextBlock>
          <StyledList>
            <ListItem>
              Difficulty in finding information about specific characteristics of outdoor areas such as difficulty levels, distances, elevation, terrain etc.  
            </ListItem>
            <ListItem>
              Difficulty in acquiring localized information on conditions of outdoor areas such as weather forecasts and trail conditions. 
            </ListItem>
            <ListItem>
              Lack of knowledge on what to bring and how to prepare for an outdoor adventure, which also relies on the former two factors. 
            </ListItem>
            <ListItem>
              Lack of real time information in the outdoors such as present location on a trail.
            </ListItem>
          </StyledList>
        </TextBlock>
        <TextBlock>
          <p>
          With our high fidelity prototype, we attempted to address these pain points by collating all of the appropriate information and presenting it to the user within our app. 
          </p>
        </TextBlock>
      </OffsetBody>
      <ImageWrapper>
        <Img fluid={data.Home.childImageSharp.fluid}/>
      </ImageWrapper>
      <ImageWithMargin>
        <Img fluid={data.Listing.childImageSharp.fluid} />
      </ImageWithMargin>
      <ImageWithMargin>
        <Img fluid={data.Trips.childImageSharp.fluid} />
      </ImageWithMargin>
      <ImageWithMargin>
        <Img fluid={data.Profile.childImageSharp.fluid} />
      </ImageWithMargin>
      <ImageWithMargin>
        <Img fluid={data.ProfileDetail.childImageSharp.fluid} />
      </ImageWithMargin>
      <OffsetBody>
        <TextBlock>
          <p>
          All in all, designing this app was an extremely rewarding experience. As a team, we got to learn first hand the necessity of gathering user feedback before making any major design decisions rather than making assumptions on how a user was expected to behave. Making the assumption that safety would be a big concern would have significantly impacted our design, limiting the vision we strove to achieve. By ensuring that such concerns did not become an issue early on, we were able to learn more about other aspects of the outdoor experience that our users sought. 
          </p>
        </TextBlock>
      </OffsetBody>
      <LeftButton onClick={() => props.onChange(props.active -1)}>
        <ButtonHeader>PREVIOUS SECTION</ButtonHeader>
        <ButtonText>{sections[props.active - 1]}</ButtonText>
      </LeftButton>
      <RightButton onClick={() => props.onChange(props.active + 1)}>
        <ButtonHeader>NEXT SECTION</ButtonHeader>
        <ButtonText>{sections[props.active + 1]}</ButtonText>
      </RightButton>
    </Container>
  )
}
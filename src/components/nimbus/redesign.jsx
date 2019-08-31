import React from "react"
import styled from "styled-components"

import { Container, OffsetBody, TextBlock, RightButton, LeftButton, ButtonHeader, ButtonText, ImageWrapper, TextQuote, sections } from "../constants"
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"

const ImageWithMargin = styled(ImageWrapper)`
  margin-top: 3.5rem;
`

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

export default function Redesign(props) {
const data = useStaticQuery(graphql`
  query {
    ScreenDeck: file(relativePath: {eq: "revised-screen-deck.png"}) {
      childImageSharp {
        fluid (maxWidth: 3200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    TripCrit: file(relativePath: {eq: "trip-critique.png"}) {
      childImageSharp {
        fluid (maxWidth: 3200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    RevisedTripCrit: file(relativePath: {eq: "revised-trip-crit.png"}) {
      childImageSharp {
        fluid (maxWidth: 3200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    LocationCrit: file(relativePath: {eq: "location-crit.png"}) {
      childImageSharp {
        fluid (maxWidth: 3200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    TrailSign: file(relativePath: {eq: "trail-difficulty.png"}) {
      childImageSharp {
        fluid (maxWidth: 3200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

  return (
    <Container>
      <ImageWrapper>
        <Img fluid={data.ScreenDeck.childImageSharp.fluid} />
      </ImageWrapper>
      <OffsetBody>
        <p><strong>Revisiting the work.</strong></p>
        <TextBlock>
          <p>
          The last round of testing had revealed a number of issues that we never quite had the opportunity to address. Seeing that some time had passed since I worked on this project, I figured it’d be a good idea to come back with fresh eyes and do a little refresh. 
          </p>
        </TextBlock>
        <TextBlock>
          <p>
          My main goal with this redesign was to address some of the issues that were left unresolved. I also attempted to improve the visual clarity of the design by improving the information hierarchy and by updating the visual styling to better match latest generation mobile hardware.  
          </p>
        </TextBlock>
      </OffsetBody>
      <ImageWrapper>
        <Img fluid={data.TripCrit.childImageSharp.fluid} />
      </ImageWrapper>
      <ImageWithMargin>
        <Img fluid={data.RevisedTripCrit.childImageSharp.fluid} />
      </ImageWithMargin>
      <OffsetBody>
        <TextBlock>
          <p>
          If you’ve been paying attention you may notice that I’ve omitted the section about car info in the revised design. We had feedback from several of our testers wondering what about the car was important, and I agree with that sentiment. Perhaps I had a different vision of the product from the rest of my team, but my idea of the app was always going to be focused on the people and the outdoors. We weren’t making a ride-sharing app or a product focused around cars, and to have the car info adds limited value at the potential expense of clutter and information overload. 
          </p>
        </TextBlock>
        <TextBlock>
          <p>
          The original intention of including the car information was due to the accessibility challenges you get in the outdoors, where vehicles may need certain characteristics or specialized equipment to tackle terrain. The idea being that the  vehicle information would give users added confidence or assurance that they’ll get to where they want to go. 
          </p>
        </TextBlock>
        <TextQuote>
          We weren’t making a ride-sharing app or a product focused around cars, and to have the car info adds limited value at the potential expense of clutter and information overload.
        </TextQuote>
        <TextBlock>
          <p>
          Yet there are a number of reasons why I felt that having car information was ultimately unnecessary. <strong> Most of all being that I find that the actual car is often a poor predictor of ability to tackle conditions and terrain. </strong>
          For example, I’ve seen more than my fair share of supposedly all-wheel drive vehicles spun out in a ditch on the side of the road because they were running summer tires in the snow or traveling at inappropriate speeds for conditions.
          </p>
        </TextBlock>
        <TextBlock>
          <p>
          What I feel matters more is the ability and experience levels of the driver. A good driver should be able to recognize the limitations of his/her vehicle, and either work around it or simply not even attempt to go to places that the car can’t handle.
          </p>
        </TextBlock>
      </OffsetBody>
      <ImageWrapper>
        <Img fluid={data.LocationCrit.childImageSharp.fluid} />
      </ImageWrapper>
      <ImageWithMargin>
        <Img fluid={data.TrailSign.childImageSharp.fluid} />
      </ImageWithMargin>
      <OffsetBody>
        <p><strong>A little sidetrack into symbology</strong></p>
        <TextBlock>
          <p>
            Our professor wasn't too keen on the method we were using to denote activity difficulty, specifically our use of green, yellow and red to represent easy, moderate and hard respectively. My goal with the redesign was therefore to move away from the color coding and especially the use of the color red, which was an attention grabber and had too much of a negative connotation attached to it. After a little research, I decided to adopt the trail difficulty symbology system used by the National Ski Area's Association (NSAA).
          </p>
        </TextBlock>
        <TextQuote>
          The Walt Disney Company was considering opening a ski resort and did studies and tests on which colors worked best. They came up with the current green circle for easiest runs, a blue square for intermediate, black diamond for advanced and double black diamond for expert.
        </TextQuote>
        <TextBlock>
          <p>
          The NSAA first adopted a system of signage in the winter of 1964-65. Before that, as if skiing on wooden boards with leather boots wasn’t hard enough, it was every man for himself. The colors they used were different than today and also conflicted with the colors used in Europe. American Resorts used yellow to designate intermediate trails and the French used red because, well who knows why—they’re French. 
          </p>
        </TextBlock>
        <TextBlock>
          <p>
          The Walt Disney Company was considering opening a ski resort and did studies and tests on which colors worked best. They had even tested skier’s reactions to different geometric figures, concluding for example, that the symbol for easy terrain should be a circle, which was perceived as soft, and that the color of the circle should be green, which was perceived as mellow. The current system of a green circle for easiest runs, a blue square for intermediate, black diamond for advanced and double black diamond for expert was thus born. This system was adopted by the NSAA 3 years later in 1968 and has stuck ever since.
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
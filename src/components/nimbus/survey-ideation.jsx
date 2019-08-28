import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import MediaQuery from 'react-responsive';

import { Container, OffsetBody, TextBlock, RightButton, LeftButton, ButtonHeader, ButtonText, ImageWrapper, TextQuote, sections } from "../constants"
// import * as common from "../constants"

const LargeWidth = styled(ImageWrapper)`
  display: block;
  
  @media (max-width: 1024px) {
    display: none;
  }
`

const SmallWidth = styled(ImageWrapper)`
  display: none;
  
  @media (max-width: 1024px) {
    display: block;
  }
`

export default function SurveyIdeation(props) {
  const data = useStaticQuery(graphql`
    query {
      SketchesAll: file(relativePath: { eq: "sketches-all.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Sketches1: file(relativePath: { eq: "sketches-1.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Sketches2: file(relativePath: { eq: "sketches-2.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      SketchGrid: file(relativePath: {eq: "sketch-grid.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Mockup: file(relativePath: { eq: "hero-secondary.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      SmallMockup: file(relativePath: {eq: "mockup.png"}) {
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container>
      <LargeWidth>
        <Img fluid={data.Mockup.childImageSharp.fluid} />
      </LargeWidth>
      <SmallWidth>
        <Img fluid={data.SmallMockup.childImageSharp.fluid} />
      </SmallWidth>
      <OffsetBody>
        <p><strong>Exploring The Problem.</strong></p>
        <TextBlock>
          <p>
            We started work on the project right around the middle of ski season. The Cascade Mountain Range just outside of Seattle was having a bumper snow year and as an avid skier myself, the only thing I was really interested in talking about at that time of year was how great the skiing was and how everybody should join me for a couple of laps out on the slopes. 
          </p>
        </TextBlock>
        <TextBlock>
          <p>
            I was hence slightly disappointed to find out that there was only one other skier besides myself in the group. Yet my disappointment was quickly outweighed by a curious revelation; <strong> while there was unanimous consensus that Seattle was home to some of the finest outdoor recreation in the world, we were all surprised to discover how few of us were actual participants in outdoor activities. </strong> While there were a variety of reasons cited for the lack of outdoor participation, the greatest factor appeared to be the lack of transportation options to outdoor areas; many of the best outdoor areas were simply inaccessible without a car or in some cases, an off-road capable vehicle.
          </p>
        </TextBlock>
        <TextQuote>
          "The issue of safety emerged as a stumbling block with a majority of survey respondents indicating that they would be uncomfortable travelling with strangers to outdoor destinations."  
        </TextQuote>
        <TextBlock>
          <p>
            Further anecdotal evidence from our friends as well as our professor, Brian Fling, suggested that this problem was not just limited to the members within our group but was in fact, potentially part of a larger trend that was occuring in our society.
          </p>
        </TextBlock>
        <TextBlock>
         <p>
         We put out an initial survey to validate our hypothesis and better understand the problem that we were facing. Our survey responses were mostly positive, with most respondents stating that it was challenging to get to outdoor recreation areas. However, the issue of safety came up as a stumbling block with a majority of respondents indicating that they would be uncomfortable riding on vehicles with strangers to outdoor destinations. 
         </p>
        </TextBlock>
      </OffsetBody>
      <ImageWrapper style={{marginBottom: "5rem"}}>
        <Img fluid={data.SketchGrid.childImageSharp.fluid}/>
      </ImageWrapper>
      <OffsetBody>
        <TextBlock>
          <p>
          The goal with our first iterations was therefore to find ways to make our users comfortable when sharing a ride with other users of our app. We thought of introducing user profiles within our app to give users the opportunity to gain familiarity with one another and build trust through information provided in their profiles. We decided that the following elements would help ease users’ concerns: a profile picture, a profile description, a “trip history” detailing the past outings users have completed, and photos of past trips.
          </p>
        </TextBlock>
        <TextQuote>
        "We thought of introducing user profiles within our app to give users the opportunity to gain familiarity with one another and build trust through information provided in their profiles."
         </TextQuote>
        <TextBlock>
          <p>
          In this sprint, we designed paper prototypes to illustrate four different user types with varying levels of detail in their profiles. For example, one profile we created was one that we expected would garner less trust from users, having a profile picture that does not show a clear view of the person’s face, a very short profile description that does not inform much about the user, and very few trips and photos. On the other end of the spectrum, we also created a user profile that we expected to gain more trust; it had a clear profile picture, an informative profile description, a moderate number of trips, and a lot of photos
          </p>
        </TextBlock>
      </OffsetBody>
      <ImageWrapper>
        <Img fluid={data.SketchesAll.childImageSharp.fluid}/>
      </ImageWrapper>
      <OffsetBody>
        <TextBlock>
          <p>
          User testing from this sprint was remarkably informative and yielded a wealth of valuable insights that was instrumental in helping us define our feature set. The first key takeaway that we got from our testing was that the inclusion of public user profiles had appeared to have the desired effect of alleviating the safety concerns that many of our survey respondents had previously pointed out. Our test participants appeared to be more concerned about whether they would mesh well with the people they were traveling or whether they would be able to keep up with their travel companions.
          </p>
        </TextBlock>
        <TextBlock>
          <p>
          Proximity and commonality also appeared to be major factors affecting comfort levels among participants; our test participants were mostly students from the University of Washington and most of them indicated that they would be a lot more comfortable traveling with a group of UW students that they have never met before as opposed to total strangers coming from a neighboring city. 
           </p>
        </TextBlock>
        <TextQuote>
        "Our test participants appeared to be more concerned about whether they would mesh well with the people they were traveling or whether they would be able to keep up with their travel companions."
        </TextQuote>
        <TextBlock>
          <p>
          All in all, we were relieved that the user profiles were effective in allaying safety fears among test participants and that safety alone was not a dealbreaker in its own right.
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
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Container, OffsetBody, TextBlock, RightButton, LeftButton, ButtonHeader, ButtonText, ImageWrapper, TextQuote, sections } from "../constants"


export default function Solution(props) {
  const data = useStaticQuery(graphql`
    query {
      Join: file(relativePath: { eq: "join-a-group.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Create: file(relativePath: { eq: "create-a-group.png"}) {
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
        <p><strong>Validating Our Use Cases.</strong></p>
        <TextBlock>
          <p>
          We were pleasantly surprised by the relative lack of concern expressed by our testers on the safety and security aspects of our product in the previous round of testing. Preliminary research and conversations with our professor had suggested that this was a problem that could have potentially threatened the entire viability of our idea. 
          </p>
        </TextBlock>
        <TextBlock>
          <p>
          It therefore came as a relief to all of us, including our professor, that our testers were a lot more receptive to our concept that initially expected. We speculated that this could be due to testers having seen actual sketches of the app and the idea in action, which could have helped to allay fear and uncertainty. With the additional validation gained from the positive outcomes of our first round of user tests, we were now comfortable with further advancing our idea and moving into testing the key user flows for our app.
          </p>
        </TextBlock>
        <TextQuote>
        "Our goal was to test the usability of our product by having users walk through the process of joining a trip to a predetermined location as well as creating a trip to another location."
        </TextQuote>
        <TextBlock>
          <p>
          Our next objective was to design user flows based on anticipated usage scenarios. Our goal was to test the usability of our product by having users walk through the process of joining a trip to a predetermined location as well as creating a trip to another location. We tested our user flows with low fidelity wireframes based on our sketches from the previous sprint. 
          </p>
        </TextBlock>
      </OffsetBody>
      <ImageWrapper>
        <Img fluid={data.Join.childImageSharp.fluid} />
      </ImageWrapper>
      <ImageWrapper style={{marginTop: "3.5rem"}}>
        <Img fluid={data.Create.childImageSharp.fluid} />
      </ImageWrapper>
      <OffsetBody>
        <TextBlock>
          <p>
          User testing for this sprint was largely successful as most of our testers were able to successfully navigate through the flows with little to no additional prompting from proctors. We also received feedback on visual aspects of our wireframes; while most of it were relatively minor fixes, there were issues with some screens where testers appeared to be slightly confused about where they were. We attributed the nature of this confusion to the low fidelity nature of our wireframes, which admittedly made some screens too similar to one another. We believe that this issue could be addressed with higher fidelity prototypes.
          </p>
        </TextBlock>
        <TextBlock>
          <p>
          Another interesting insight that we discovered while testing our wireframes was how much more efficient it was to test them as compared to paper-based prototypes and sketches. As our wireframes were largely screen-based, we were able to quickly scale them across multiple devices, which allowed us to test them concurrently. This was in contrast to paper prototypes where we could only conduct a single test at a time. 
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
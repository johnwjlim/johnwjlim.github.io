import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Container, ImageWrapper, FlexWrapper, IntroBody, OffsetBody, TextBlock, RightButton, ButtonHeader, ButtonText, sections } from "../constants"

const InfoPanel = styled.div`
  width: 18vw;
  margin: 7.5rem 0;

  @media (max-width: 1240px) {
    width: 100%;
    margin: 3.5rem 0;
  }
`

const PrototypeSection = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1240px) {
    display: block;
  }
`

const PrototypeWrapper = styled.div`
  margin: 0 6rem;

  @media (max-width: 768px) {
    margin: 0;
  }
`

const PrototypeText = styled(TextBlock)`
  max-width: 28rem;

  @media (max-width: 1240px) {
    max-width: 34rem;
  }
`

export default function Showcase(props) {
  const data = useStaticQuery(graphql`
    query {
      HeroImage: file(relativePath: { eq: "Hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 3200, maxHeight: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Deck: file(relativePath: { eq: "screen-deck-new.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Grid: file(relativePath: {eq: "image-grid.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      PhotoGrid: file(relativePath: {eq: "photo-grid.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      PaperPrototype: file(relativePath: {eq: "paper-prototype.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Cutout: file(relativePath: {eq: "high-fi-cutout.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ProfileMontage: file(relativePath: {eq: "profile-montage.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Container>
        <ImageWrapper>
          <Img fluid={data.HeroImage.childImageSharp.fluid} />
        </ImageWrapper>
        <FlexWrapper>
          <InfoPanel>
            <h1>Nimbus</h1>
            <p>Case Study <br/>Mobile App Design</p>
          </InfoPanel>
          <IntroBody>
            <TextBlock>
              <p>
                The year is 2018. National Park visits in the United States have topped 200 million and social media usage among young Americans are at an all time high. While our public lands are purportedly free and open to all, the sheer remoteness of many of our favorite outdoor locations  means that access is often limited to the few who have cars or those whose friends or family share a similar passion for the outdoors.
              </p>
            </TextBlock>
            <TextBlock>
              <p>
                Recognizing that the lack of transportation options as a major obstacle that hampers access to the outdoors, we set out to design a mobile experience that would solve the transportation conundrum by connecting outdoor enthusiasts with like-minded peers and have them carpool to outdoor destinations. In doing so, we also sought to alleviate the pain points of organizing such activities and foster a community of outdoor enthusiasts by encouraging them to partake in outdoor experiences collectively.
              </p>
            </TextBlock>
          </IntroBody>
        </FlexWrapper>
        <ImageWrapper>
          <Img fluid={data.Deck.childImageSharp.fluid}/>
        </ImageWrapper>
        <OffsetBody>
          <TextBlock>
            <p>
              Our solution was centered around having users join or create groups headed to outdoor destinations that they had in mind. User safety immediately came up as the number one concern that our professor and mentor, Brian Fling, had for our proposed concept. His concerns were most certainly justified; We were after all, proposing to put strangers together in a car and have them drive out to the middle of nowhere. It was in effect akin to a more extreme version of a blind date. 
            </p>
          </TextBlock>
          <TextBlock>
            <p>
            In response, we were proactive in including mitigating features that we hoped would reassure users such as having public user profiles as well as mandatory user verification. 
            Yet multiple rounds of testing and iteration revealed that much of our target users were essentially less concerned for their own safety than we as designers were. They were basically more or less comfortable with the idea of adventuring with total strangers.  It was almost as if that the age old adage of not getting into cars with strangers was somehow less applicable in the 21st century. This surprising takeaway would be key towards underscoring the feasibility of our proposed concept. 
            </p>
          </TextBlock>
        </OffsetBody>
        <ImageWrapper>
          <Img fluid={data.Grid.childImageSharp.fluid}/>
        </ImageWrapper>
        <PrototypeSection>
          <PrototypeWrapper>
            <iframe src="https://marvelapp.com/3f9161c?emb=1&iosapp=false&frameless=false" style={{transform: "scale(0.6)"}} width="452" height="901" allowTransparency="true" frameborder="0"></iframe>
          </PrototypeWrapper>
          <IntroBody>
              {/* <h3>Interactive Prototype</h3>  */}
              <PrototypeText>
                <p>We built various interactive prototypes to test the usability of the flows and designs we had in mind, and this prototype was one with which we conducting our third round of user testings with. While rudimentary, it served as an effective tool for us to conduct user testing and was instrumental towards identifying usability failures and potential pain points.  </p>
              </PrototypeText>
              <PrototypeText>
                <p>The use goal that we set out for our testers with this prototype was to create a group travelling to hike a popular local trail known as Mailbox Peak.</p>
              </PrototypeText>
          </IntroBody>
        </PrototypeSection>
        <ImageWrapper>
          <Img fluid={data.ProfileMontage.childImageSharp.fluid} />
        </ImageWrapper>
        <OffsetBody>
          <TextBlock>
            <p>
              There was never really a big aha moment that led to us arriving at our solution in its present form. Instead, it came about as a result of multiple evolutions of prototyping and testing as we strove to incorporate user feedback as much as possible at every stage.
              This user-centered approach not only allowed us to better incorporate testing feedback, but also yielded surprising takeaways and insights about user behavior that allowed us greater freedom to evolve the design in ways that nobody anticipated from the start.
            </p>
          </TextBlock>
          <TextBlock>
            <p>
              This project was conducted over multiple sprints with a round of user testing at the end of each sprint to validate ideas and garner feedback from prospective users. I've broken up this case study into multiple sections with each section roughly corresponding to a sprint cycle that we worked.   
            </p>
          </TextBlock>
        </OffsetBody>
        <RightButton onClick={() => props.onChange(props.active + 1)}>
          <ButtonHeader>NEXT SECTION</ButtonHeader>
          <ButtonText>{sections[props.active + 1]}</ButtonText>
        </RightButton>
      </Container>
    </>
  )
}   
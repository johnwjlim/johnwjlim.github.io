import styled from "styled-components"

export const sections = ["Overview", "Survey and Ideation", "Flows + Wireframes", "High Fidelity Screens", "Redesign", "End Notes"]

export const Container = styled.div`
  max-width: 1300px;
  width: 90%;
  overflow: scroll;
  height: 89vh;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const IntroBody = styled.div`
  display: block;
  margin: 7.5rem 0;

  @media (max-width: 1240px) {
    margin: 3.5rem 0;
  }
`

export const OffsetBody = styled(IntroBody)`
  padding-left: 18vw;

  @media (max-width: 1240px) {
    padding: 0;
  }
`

export const TextBlock = styled.div`
  max-width: 36rem;
  margin-bottom: 2rem;
`

export const RightButton = styled.button`
  float: right;  

  background: none;
  border: none;
  text-align: right;
  max-width: 38vw;

  :hover {
    cursor: pointer;  
  }


  @media (max-width: 425px) {
    transform: scale(0.75);
  }
`

export const LeftButton = styled(RightButton)`
  float: left;
  text-align: left;
`
export const ButtonHeader = styled.h6`
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #767676;
`

export const ButtonText = styled.h4`
  margin: 0;

  button & :hover {
    text-decoration: underline
  }
`

export const ImageWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`
export const FlexWrapper = styled.div`
  display: flex;

  @media (max-width: 1240px) {
    display: block;
  }
`

export const TextQuote = styled.blockquote`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600; 
  max-width: 36rem;
  border-left: solid 3px #333333;
  padding-left: 2rem;
  margin: 5rem 0;

  @media (max-width: 1240px) {
    margin: 3.5rem 0;
  }

  @media (max-width: 1024px) {
    font-size: 1.25rem;
  }

  @media (max-width: 425px) {
    font-size: 1.2rem;
    padding-left: 1.5rem;
    font-size: 1rem;
  }
`;


import React from 'react'
import styled, { keyframes } from 'styled-components'
export default function TextAnimation() {
    const reactArray = "About".split("")
    return <Wrapper>
        {reactArray.map((item, index) => (
            <span key={index}>{item}</span>
        ))}
    </Wrapper>
}
const animation = keyframes`
    0% {opacity:0;transform: translateY(-100px);skewX(10deg) skewY(10deg)  rotateZ(30deg); filter:blur(10px);} 
    25% {opacity:1; transform: translateY(0px);skewY(0deg) skewX(0deg) rotateZ(0deg); filter:blur(0px);}
    75% {opacity:1; transform: translateY(0px);skewY(0deg) skewX(0deg) rotateZ(0deg); filter:blur(0px);}
    100% {opacity:0; transform: translateY(-100px);skewY(10deg) skewX(10deg) rotateZ(30deg); filter:blur(50px);}
    
`
const Wrapper = styled.span`
  display: inline-block;
  span {
    animation-direction: alternate;
    animation-name: ${animation};
    animation-duration: 6s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
  }
  span:nth-child(1) {
    animation-delay: 0.3s;
  }
  span:nth-child(2) {
    animation-delay: 0.6s;
  }
  span:nth-child(3) {
    animation-delay: 0.9s;
  }
  span:nth-child(4) {
    animation-delay: 1.2s;
  }
  span:nth-child(5) {
    animation-delay: 1.5s;
  }
`;